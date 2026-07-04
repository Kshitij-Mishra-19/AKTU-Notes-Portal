const express = require("express");
const path = require("path");
const driveLinks = require("./data/driveLinks.json");

const app = express();
const PORT = process.env.PORT || 3000;

// Helper function for Google Drive download links
function getDownloadLink(url) {
    const match = url.match(/\/d\/(.*?)\//);

    if (match && match[1]) {
        return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }

    return url;
}

// View Engine
app.set("view engine", "ejs");

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("index");
});

// Year Page
app.get("/year/:year", (req, res) => {
    const year = req.params.year;
    const subjects = driveLinks[year] || [];

    res.render("year", {
        year,
        subjects
    });
});

// Subject Page
app.get("/year/:year/subject/:id", (req, res) => {

    const year = req.params.year;
    const id = req.params.id;

    const subjects = driveLinks[year] || [];
    const subject = subjects.find(s => s.id === id);

    if (!subject) {
        return res.status(404).render("404");
    }

    // Add download links
    subject.units.forEach(unit => {
        Object.keys(unit.resources).forEach(resource => {
            unit.downloadLinks = unit.downloadLinks || {};
            unit.downloadLinks[resource] = getDownloadLink(unit.resources[resource]);
        });
    });

    res.render("subject", {
        year,
        subject
    });

});

// 404 Page
app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
