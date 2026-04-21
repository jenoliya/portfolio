# 🚀 Personal Portfolio — Next.js + Tailwind CSS

A modern, editorial-style personal portfolio built with Next.js 14 and Tailwind CSS.
Designed with a warm paper-and-ink aesthetic — clean, professional, and memorable.

---

## ✏️ Personalize It (Step 1)

Open `app/data.js` and fill in your details:

```js
export const portfolio = {
  name: "Your Name",           // ← your full name
  tagline: "...",              // ← your one-line pitch
  role: "...",                 // ← your job title
  bio: "...",                  // ← 2–3 sentences about you
  contact: {
    email: "...",
    github: "...",
    linkedin: "...",
  },
  skills: [ ... ],             // ← edit skill categories
  projects: [ ... ],           // ← add your real projects
}
```

To add a photo: drop `avatar.jpg` into the `/public` folder, then set `avatar: '/avatar.jpg'` in data.js.

---

## 💻 Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 🚢 Deploy to Vercel (Step by Step)

### Option A — Vercel CLI (Recommended, 2 min)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. From your project folder:
vercel

# 3. Follow the prompts:
#    - Log in / create account
#    - "Set up and deploy" → Yes
#    - Link to existing project? → No (new)
#    - Project name → your-name-portfolio
#    - Root directory → ./  (press Enter)
#    - Override settings? → No

# 4. Done! Your URL will be printed.
#    For future updates:
vercel --prod
```

### Option B — GitHub + Vercel Dashboard (Easiest for beginners)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to https://vercel.com → "Add New Project"
# 3. Import your GitHub repository
# 4. Click Deploy — Vercel auto-detects Next.js
# 5. Every git push to main auto-deploys! ✨
```

---

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── data.js          ← ✏️ Edit this to personalize
│   ├── globals.css      ← Global styles, CSS vars
│   ├── layout.js        ← Root layout + Google Fonts
│   └── page.js          ← Assembles all sections
├── components/
│   ├── Navbar.js        ← Sticky nav with mobile menu
│   ├── Hero.js          ← Hero section
│   ├── About.js         ← About + stats
│   ├── Skills.js        ← Skills grid + marquee
│   ├── Projects.js      ← Project cards
│   └── Contact.js       ← CTA + footer
├── public/              ← Put avatar.jpg here
├── tailwind.config.js
├── next.config.js
├── vercel.json
└── package.json
```

---

## 🎨 Customizing Colors

Open `tailwind.config.js` and change the color palette:

```js
colors: {
  ink: '#0D0D0D',      // ← main text / dark elements
  paper: '#F5F0E8',    // ← background (warm off-white)
  accent: '#C8502A',   // ← brand accent (terracotta)
  muted: '#7A7065',    // ← secondary text
  border: '#E0D9CE',   // ← borders / dividers
},
```

---

## 💡 Tips to Stand Out

1. **Add a real photo** — it builds trust and personality
2. **Write honest project descriptions** — be specific about what you built and what you learned
3. **Show live demos** — deploy your projects and link them
4. **Add a resume PDF** — put it in `/public/resume.pdf` and link it in the Hero section
5. **Add Open Graph meta tags** — edit `app/layout.js` metadata for link previews
6. **Custom domain** — in Vercel dashboard → Settings → Domains, add `yourname.dev`

---

## 🛠 Built With

- [Next.js 14](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — Display font
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — Body font
- [Vercel](https://vercel.com) — Deployment
