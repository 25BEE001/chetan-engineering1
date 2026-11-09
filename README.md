# Chetan Engineering Corporation - Showcase Website

A responsive industrial showcase website built for **Chetan Engineering Corporation**, an engineering firm specializing in commercial, industrial, and architectural automation and fabrication solutions.

---

## 🏗️ Tech Stack

- **Markup & Layout:** Semantic HTML5, Mobile-First Grid & Flexbox
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CDN) with custom industrial color extensions (`slate-950`, `charcoal-900`, `amber-500`, `engBlue-600`)
- **Icons:** [Lucide Icons](https://lucide.dev/) (phone, mail, shield-check, cog, layers, chevron-right, etc.)
- **Interactive Script:** Vanilla JavaScript (ES6+) with zero heavy external dependencies
- **Typography:** Plus Jakarta Sans & JetBrains Mono (via Google Fonts)

---

## 🎨 Industrial Design Direction

- **Color Palette:**
  - **Dark Charcoal / Slate Base:** `#0f172a` (slate-900) and `#020617` (slate-950)
  - **Crisp Light Gray Backgrounds:** `#f8fafc` (slate-50) and `#f1f5f9` (slate-100)
  - **Safety Amber Accent:** `#f59e0b` (amber-500) and `#d97706` (amber-600)
  - **Engineering Navy Blue:** `#2563eb` (blue-600) and `#1e40af` (blue-800)
- **Visuals:** Subtle engineering blueprint grids, micro-interactions, card lift animations, badge chips, and accessible lightboxes.

---

## 📂 Project Structure

```
chetan-engineering/
├── index.html        # Complete semantic HTML5 webpage with all required sections
├── styles.css        # Custom industrial styles, blueprint grids, animations & utilities
├── script.js         # Navigation, filterable gallery, lightbox, modal & form handling
└── README.md         # Documentation, photo replacement instructions, and deployment guide
```

---

## 📋 Implemented Sections & Features

1. **Top Bar / Header:**
   - Business Name: **Chetan Engineering Corporation**
   - Brand Logo: `assets/logo.jpeg`
   - Click-to-Call direct phone number link (`tel:+919979896379`)
   - Direct mailto link (`mailto:chetan_eng_corp@yahoo.com`)
   - Direct WhatsApp Chat (`https://wa.me/919979896379?text=Hello%20Chetan%20Engineering...`)
   - Workshop hours badge & active plant order status
   - Sticky navigation menu with smooth blur transition on scroll
   - Primary CTA: **"WhatsApp Us"** in brand green (`#25D366`) and **"Request a Quote"**

2. **Hero Section:**
   - **Headline:** *High-performance entrance automation, industrial shutters, and custom steel fabrication.*
   - **Sub-headline:** *Trusted fabrication and automation engineering designed for commercial, industrial, and residential applications.*
   - Action buttons: **"Explore Our Work"** (scrolls smoothly to `#gallery`) and **"Get in Touch"** (scrolls to `#contact`).
   - Quick Trust Highlights: Heavy-Duty Steel, CE Certified Motors, Turnkey Execution, 24/7 Breakdown Support.

3. **About Us Section:**
   - Company heritage, CAD/CAM design, precision in-house fabrication, automation integration, and lifecycle AMC support.

4. **Core Services / Product Showcase (Grid Layout):**
   Dedicated card showcase for each of the 7 core offerings with descriptive technical bullet points, specs badges, and direct quote pre-selection:
   - **Motorised Sliding Gates** (Heavy-duty gate automation, remote & sensor-operated, cantilever/track)
   - **Automatic Entrance Systems** (Smart glass/sliding entrances, motion-sensor access, brushless DC motors)
   - **Steel Staircases** (Custom industrial, spiral, and architectural structural fabrication, CNC laser cut)
   - **Motorised Shutters** (Durable commercial rolling shutters with gear-motor control, wind-locks)
   - **High-Speed Shutters** (Rapid roll-up doors for warehouses, cold storage, and dust control, self-repairing)
   - **Boom Barriers** (Toll, parking, and security vehicle access barriers, RFID/ANPR ready)
   - **Railings** (Custom stainless steel SS304/316, mild steel, and architectural glass railings)

5. **Work Gallery / Portfolio Section (Real Project Media):**
   - Filterable tabs: `All`, `Motorised Gates`, `Entrance Systems`, `Industrial Doors`.
   - Real Field Installations integrated:
     - `assets/gallery/fluted-sliding-gate.jpg` (Modern architectural grey fluted sliding driveway gate)
     - `assets/gallery/industrial-strobe-gate.mp4` (Heavy-duty grey industrial sliding gate with amber warning beacon)
     - `assets/gallery/rack-pinion-gate.mp4` (Automated cantilever/sliding gate with gear rack motor drive)
     - `assets/gallery/retractable-security-gate.jpg` (Stainless steel motorized expandable/retractable gate)
     - `assets/gallery/sliding-door-mesh.jpg` (White industrial modular sliding partition door with mesh inspection window)
   - Media styling: Fixed 16:9 aspect ratio (`aspect-video`), hover zoom (`scale-105`), dark background to eliminate layout shifts, and clean category badge chips.
   - Interactive Lightbox with high-resolution image & video preview, project specs, keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`), and an **"Enquire About This Installation"** button that links directly to the Contact section with pre-filled service selection.

6. **Why Choose Us / Trust Badges:**
   - 4-item counter/feature strip:
     1. **Precision Engineering** (±0.5mm fabrication tolerances, CAD simulation)
     2. **High-Grade Materials** (IS 2062 steel, SS304/316 austenitic stainless)
     3. **Reliable After-Sales Support** (2-hour emergency SLA, AMC contracts)
     4. **Custom Fabrications** (100% tailor-made structural dimensions)
   - Animated milestone counters (15+ Years, 1,250+ Installations, 100% In-House, 24/7 Support).

7. **Contact & Lead Capture Section:**
   - **Contact Details Card:** Click-to-call phone numbers, mailto links, workshop address, and direct WhatsApp chat button.
   - **Inquiry / Quote Form:** Fields for Name, Phone, Email, Service Needed (dropdown populated with the 7 core offerings), Project Location, and Message.
   - Client-side validation, submit loader animation, and interactive confirmation modal with direct WhatsApp continuation link.

8. **Footer:**
   - Company summary, ISO/MSME certifications, quick navigation links, services directory, legal notice, and animated Back-to-Top shortcut.

9. **Conversion Optimizers:**
   - Floating WhatsApp Quick Action Button.
   - Global "Request a Quote" Modal with auto-selected service.
   - Offline SVG fallback on images ensuring zero broken image icons.

---

## 📸 How to Drop in Actual Client Photos

In `index.html`, every image tag includes a clean comment indicating where to place real project photos.

### 1. Recommended Image Dimensions
- **Service Cards:** `800 x 500 px` (JPG, WebP, or PNG)
- **Gallery Showcase:** `900 x 600 px` (High-definition project captures)
- **About Us Workshop:** `1000 x 650 px`

### 2. Replacing Placeholders
Create an `assets/images/` folder inside `chetan-engineering/` and update the `src` attribute:

```html
<!-- Example in Core Services: -->
<!-- IMAGE PLACEHOLDER: Replace src with client project photo -->
<img 
  src="assets/images/motorised-sliding-gate.jpg" 
  alt="Motorised Sliding Gates - Chetan Engineering" 
  class="w-full h-full object-cover"
  loading="lazy"
>
```

---

## ⚡ Connecting the Contact Form to a Backend

The current form handles client-side validation and displays a confirmation modal with a pre-filled WhatsApp link. To connect it to email services:

### Option A: Formspree (Zero Backend Required)
1. Register free at [Formspree.io](https://formspree.io)
2. Change the `<form id="contact-form">` opening tag:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: EmailJS (Client-Side Email Delivery)
1. Add `<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>`
2. In `script.js`, replace the `setTimeout` inside `handleFormSubmission` with:
   ```javascript
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
     name: name,
     phone: phone,
     email: email,
     service: service,
     message: message
   });
   ```

---

## 🚀 Running & Deploying

### Local Testing
Simply open `index.html` in any modern web browser:
```powershell
# In PowerShell:
Start-Process ".\chetan-engineering\index.html"
```

### Hosting Options
- **Netlify / Vercel:** Drag and drop the `chetan-engineering` folder.
- **GitHub Pages:** Push the repo and enable Pages under Settings > Pages.
- **cPanel / Traditional Host:** Upload `index.html`, `styles.css`, and `script.js` to `public_html`.

