# Ibrahim Reda Wasfy — Portfolio Website

## Quick Start

1. Copy your CV PDF to `assets/` named `Ibrahim_Reda_Wasfy_CV.pdf`
2. Add your profile photo as `assets/profile/profile.jpg` (600×800px)
3. Open `index.html` in a browser — everything works without a server

## Folder Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── Ibrahim_Reda_Wasfy_CV.pdf   ← your CV
│   ├── profile/
│   │   └── profile.jpg             ← your photo (600×800px recommended)
│   ├── projects/
│   │   ├── formula-student/        ← FSUK project images
│   │   ├── shell-eco-marathon/     ← Shell project images
│   │   └── ever-egypt/             ← EVER Egypt project images
│   └── gallery/
│       ├── cad/                    ← SolidWorks screenshots, renders
│       ├── simulation/             ← FEA, MATLAB, IPG CarMaker plots
│       ├── manufacturing/          ← Workshop photos
│       ├── testing/                ← Track testing photos
│       └── competition/            ← Competition photos and podium shots
└── README.md
```

## Adding Images

### Profile Photo
- File: `assets/profile/profile.jpg`
- Size: 600×800px (3:4 ratio)
- The frame already has a gold gradient overlay

### Project Images
- Size: 800×500px (16:10)
- Update `image` field in `projectsData` in `script.js`

### Gallery
In `script.js`, uncomment and fill in the `galleryData` array:
```js
{ src: 'assets/gallery/cad/steering.jpg', caption: 'Steering Assembly', category: 'cad' }
```

## Adding a New Project

In `script.js`, add to `projectsData`:
```js
{
  id: 'unique-id',
  title: 'Project Title',
  category: 'Category Label',
  filter: 'formula-student',  // or: eco-marathon, ev
  year: '2026',
  badge: 'Badge Text',
  image: 'assets/projects/folder/image.jpg',
  tools: ['SolidWorks', 'MATLAB'],
  overview: 'Brief project overview...',
  objectives: ['Objective 1', 'Objective 2'],
  challenges: ['Challenge 1'],
  results: [{ value: '1st', label: 'Category Name' }],
  process: ['Step 1', 'Step 2'],
}
```

## Deployment

### GitHub Pages (Free — Recommended)
1. Create repo named `ibrahimwasfy.github.io` (matches your existing GitHub)
2. Push all files to main branch
3. Settings → Pages → Source: main / root
4. Live at `https://ibrahimwasfy.github.io`

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. New site → Deploy manually → Drag the `portfolio/` folder
3. Instantly live with free domain

### Custom Domain
Add a `CNAME` file to the root with your domain, then configure DNS.
