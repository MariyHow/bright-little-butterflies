# 🦋 Bright Little Butterflies

A modern, responsive website for **Bright Little Butterflies**, designed to provide families with a welcoming, informative, and easy-to-navigate online experience.

The website highlights the organization's services, introduces visitors to its mission, and provides a convenient way for families to get in touch.

## 🌐 Live Website

**Website:** [Bright Little Butterflies](https://bright-little-butterflies.netlify.app/)

**GitHub Repository:** [MariyHow/bright-little-butterflies](https://github.com/MariyHow/bright-little-butterflies)

## ✨ Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Modern User Interface:** Clean, welcoming design with intuitive navigation.
- **Home Section:** Introduces visitors to Bright Little Butterflies.
- **About Section:** Provides information about the organization and its mission.
- **Services Section:** Highlights the services offered.
- **Contact Section:** Makes it easy for visitors to connect with the organization.
- **Reusable Components:** Modular React architecture for easier maintenance and future development.
- **Continuous Deployment:** Automatically builds and publishes updates through Netlify when changes are pushed to GitHub.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript | Application functionality |
| Vite | Development server and production builds |
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| Git | Version control |
| GitHub | Source code hosting |
| Netlify | Website hosting and continuous deployment |
| Visual Studio Code | Development environment |

## 📁 Project Structure

```text
bright-little-butterflies/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Application assets
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── OfferCard.jsx
│   │   └── PlaceholderImg.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx               # Main application
│   └── main.jsx              # React entry point
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/) (a version compatible with the project's Vite configuration)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/MariyHow/bright-little-butterflies.git
```

### 2. Navigate to the Project

```bash
cd bright-little-butterflies
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically:

`http://localhost:5173/`

### 5. Build for Production

```bash
npm run build
```

Vite generates an optimized production build in the `dist/` directory.

## 🔄 Development and Deployment

This project uses GitHub and Netlify for continuous deployment.

**Development workflow:**

1. Make changes locally in Visual Studio Code.
2. Test the website using `npm run dev`.
3. Save and commit your changes.
4. Push the changes to GitHub's `main` branch.
5. Netlify automatically builds and deploys the updated website.

### Git Commands

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

### Netlify Configuration

| Setting | Value |
|---|---|
| Repository | MariyHow/bright-little-butterflies |
| Production Branch | main |
| Build Command | npm run build |
| Publish Directory | dist |

Deployment status can be viewed in the [Netlify Dashboard](https://app.netlify.com/projects/bright-little-butterflies/overview).

## 🔧 Project Maintenance

The following directories and files should not be committed to GitHub:

- `node_modules/` — Installed dependencies
- `dist/` — Generated production files
- `.env` and `.env.*` — Environment variables and potentially sensitive configuration

Dependencies should be installed locally or during deployment using the project's package configuration.

## 🔮 Future Improvements

Potential future enhancements include:

- Accessibility and usability improvements
- Search engine optimization (SEO)
- Performance and image optimization
- Enhanced mobile responsiveness
- Additional information and resources for families
- Expanded contact and inquiry functionality

## 👨‍💻 Development

**Developer:** Samariy Howard

**GitHub:** [@MariyHow](https://github.com/MariyHow)

Built with React and Vite, with an emphasis on maintainability, accessibility, and a welcoming user experience.

---

© 2026 Bright Little Butterflies. All rights reserved.