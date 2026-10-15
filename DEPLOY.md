# Deployment Guide — Bright Little Butterflies LLC

## Before You Deploy

### 1. Add your logo
Drop your `logo.png` file into `src/assets/logo.png`.
Then in [`src/components/Navbar.jsx`](src/components/Navbar.jsx):
- Uncomment the `import logo from '../assets/logo.png'` line
- Replace the `<span className="navbar__logo-text">…</span>` block with:
  ```jsx
  <img src={logo} alt="Bright Little Butterflies LLC" className="navbar__logo-img" />
  ```

### 2. Fill in your personal info TODOs

Search the project for `TODO` comments to find every placeholder:

| File | TODO |
|---|---|
| `src/components/Contact.jsx` | Add last name after "Shawanna" |
| `src/components/Contact.jsx` | Add street address (optional) |
| `src/components/Contact.jsx` | Add open/close hours (e.g. `· 6:00 AM – 5:30 PM`) |
| `src/components/Footer.jsx` | Replace `href="#"` with your real Facebook page URL |

### 3. Replace photo placeholders
Each `<PlaceholderImg>` component is a labeled dashed box. To replace one:
1. Add your photo file to `src/assets/` (e.g. `classroom.jpg`)
2. Import it at the top of the component file
3. Replace the `<PlaceholderImg ... />` with `<img src={classroom} alt="Our classroom" className="..." />`

Photo slots:
- **Hero**: `src/components/Hero.jsx`
- **Classroom, House, Playground**: `src/components/About.jsx`
- **Shawanna's photo**: `src/components/Contact.jsx`

---

## Deploy to Netlify

### Option A — Netlify Drop (easiest, no account setup needed)
1. Run `npm run build` in this folder
2. Go to **[netlify.com/drop](https://app.netlify.com/drop)**
3. Drag and drop the `dist/` folder onto the page
4. Netlify gives you a live URL instantly
5. You can claim/rename the site after signing in

### Option B — Netlify Dashboard (recommended for ongoing updates)
1. Push this folder to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Netlify auto-detects the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**
6. Every time you push to GitHub, Netlify re-deploys automatically

### Option C — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

## Netlify Forms Setup

The contact form uses **Netlify Forms** — no backend or third-party service needed.

After your **first deployment**:
1. Go to your Netlify site dashboard
2. Click **Forms** in the top nav
3. You'll see the `contact` form listed there
4. All submissions appear in the dashboard and can be emailed to you

To enable email notifications:
- Dashboard → Forms → `contact` → **Form notifications** → Add email notification

---

## Local Development

```bash
# Install dependencies (first time only)
npm install

# Start dev server at http://localhost:5173
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## File Structure

```
bright-little-butterflies/
├── public/
│   └── _redirects          ← Netlify SPA routing
├── src/
│   ├── assets/
│   │   └── logo.png        ← DROP YOUR LOGO HERE
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── PlaceholderImg.jsx / .css
│   │   └── OfferCard.jsx / .css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
└── package.json
```
