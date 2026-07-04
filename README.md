# 📚 AKTU Colleges Notes Portal

A simple, clean web app to browse and download AKTU college study notes — organized by **Year → Subject → Unit**. Built with Express and EJS, with all notes hosted on Google Drive.

🔗 **Live Demo:** https://aktu-notes-portal-b8pn.onrender.com

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
| Deployment   | Render                                      |

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

```bash
git clone [AKTU-Notes-Portal Repository](https://github.com/Kshitij-Mishra-19/AKTU-Notes-Portal)
cd AKTU-Notes-Portal
npm install
```

### Run locally

```bash
# Production mode
npm start

# Development mode (auto-restart on changes)
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## 👥 Contributors

- **Kshitij Mishra**
- **Geetansh Shukla**

---

## 📄 License

ISC
