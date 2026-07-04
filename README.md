# 📚 AKTU Colleges Notes Portal

A simple, clean web app to browse and download AKTU college study notes — organized by **Year → Subject → Unit**. Built with Express and EJS, with all notes hosted on Google Drive.

🔗 **Live Demo:** _add your deployed link here_

---

## ✨ Features

- 📁 Browse notes by **Year (1–4)**
- 📖 Each year lists its **Subjects**
- 🗂️ Each subject breaks down into **Units** with resources
- 👀 **View** resources directly (opens in Drive) or **Download** them (auto-converted direct download links)
- ⚡ Custom **404 page** for invalid routes
- 🎨 Responsive UI built with Bootstrap 5 + Bootstrap Icons

---

## 🛠️ Tech Stack

| Layer        | Technology                                |
|--------------|--------------------------------------------|
| Backend      | Node.js, Express 5                          |
| Templating   | EJS                                         |
| Styling      | Bootstrap 5, Bootstrap Icons, custom CSS    |
| Data Storage | JSON (`data/driveLinks.json`)               |
| Dev Tooling  | Nodemon                                     |

---

## 📂 Project Structure

```
CollegeNotesProject/
├── app.js                     # Main Express server & routes
├── data/
│   └── driveLinks.json        # Year → Subject → Unit → Resource links
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
├── views/
│   ├── index.ejs              # Home page (year selection)
│   ├── year.ejs                # Subjects list for a year
│   ├── subject.ejs             # Units & resources for a subject
│   ├── 404.ejs                  # Not found page
│   └── partials/
│       ├── navbar.ejs
│       └── footer.ejs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation

git clone https://github.com/Kshitij-Mishra-19/CollegeNotesProject.git
cd CollegeNotesProject
npm install

### Run locally

# Production mode
npm start

# Development mode (auto-restart on changes)
npm run dev

Then open http://localhost:3000 in your browser.

---

## 📝 Adding / Updating Notes

All notes are managed in `data/driveLinks.json`, structured like this:

{
  "1": [
    {
      "id": "maths1",
      "name": "Mathematics 1",
      "units": [
        {
          "id": "unit1",
          "name": "Unit 1",
          "resources": {
            "Notes": "https://drive.google.com/file/d/FILE_ID/view?usp=drive_link"
          }
        }
      ]
    }
  ]
}

- Top-level keys ("1", "2", "3", "4") represent Years.
- Each subject needs a unique id and a list of units.
- Each unit's resources object maps a resource label (e.g. "Notes", "PYQs") to its Google Drive share link.
- Download links are generated automatically from the share link — no need to add them manually.

---

## 👥 Contributors

- Kshitij Mishra
- Geetansh Shukla

---

## 📄 License

ISC
