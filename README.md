
This repository contains the source code for my personal portfolio website, built using HTML, CSS, and JavaScript with support from libraries such as Swiper.js and Three.js. The goal is to offer a technically rich, interactive representation of my academic, professional, and personal journey.

---

## Overview

The portfolio is structured as a single-page application featuring animated transitions, a slideshow-style image intro, a swiper-based timeline viewer, and 3D data visualizations. The code is modular and relies entirely on static files, making it deployable via GitHub Pages.

---

## Architecture and Features

### 1. Intro Animation Sequence

* A three-part intro displays "Hi" → "I am Mano" → "Loading" using CSS keyframes.
* Elements are positioned using absolute centering and animated via `slideLeft`, `fallDown`, `slideRight`, and `slideDown`.
* Time delays are chained using `setTimeout` in `script.js`.

### 2. Cinematic Image Slideshow

* 19 images are shown sequentially in a fullscreen overlay.
* Display durations are not uniform. Early and late images have longer durations to mimic a trailer pacing curve.
* Overlay uses `#intro-slideshow` and is toggled via JavaScript using DOM manipulation.
* Slideshow disappears after all images are shown, revealing the "Get Started" screen.

### 3. Get Started Section (Split Screen)

* HTML structure splits the section into two equal-width containers:

  * Left: Profile image
  * Right: Introduction text and CTA buttons
* CSS handles flex layout, image styling, and button aesthetics.

### 4. Navigation and Timeline (Swiper.js)

* Navigation between sections is handled via a Swiper carousel.
* Each slide represents a stage in my journey: Education, Projects, Work Experience, Leadership, etc.
* Navigation is managed with a stack-based history model allowing Back buttons to return to the previous section.

### 5. 3D Data Structure Visuals (Three.js)

* Each section is augmented with a 3D canvas visual metaphor:

  * Stack, Queue, Graph, Tree, Linked List, Cluster, etc.
* Rendered using Three.js via canvas with dynamic lighting, rotation animation, and scaling.
* These canvases are hidden by default on smaller devices.

### 6. Contact Form

* Simple form with fields for name, email, and message.
* Currently uses a placeholder `alert()` on submission.
* Ready to be wired up with external services like Formspree or Netlify Forms.

---

## Technical Stack

| Layer       | Technology                 |
| ----------- | -------------------------- |
| Markup      | HTML5                      |
| Styling     | CSS3                       |
| Logic       | Vanilla JavaScript         |
| Animation   | CSS Keyframes              |
| Carousel    | Swiper.js                  |
| 3D Graphics | Three.js                   |
| Hosting     | GitHub Pages               |
| Fonts/Icons | Google Fonts, Font Awesome |

---

## File Structure

```
portfolio/
├── index.html         # Main HTML layout and structure
├── styles.css         # Custom CSS for layout, colors, animations
├── script.js          # JavaScript for animation, slideshow, navigation, 3D
├── /img               # 19 slideshow images
├── /assets            # Profile image and supporting visuals
```

---

## Deployment

This site is deployed via GitHub Pages. To redeploy:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Then go to GitHub > Settings > Pages and verify the site is built from the root `/ (main)` branch.

---

## Known Issues

* 3D visualizations may not render properly on mobile devices with limited WebGL support.
* Slideshow preload is not optimized for slow connections.
* Animations are time-based rather than event-driven (e.g., no skip or pause).

---

## Engineering Notes

* No frameworks were harmed in the making of this site.
* No TypeScript, no Webpack. Just clean HTML/CSS/JS.
* May contain traces of over-engineering, especially in the animation chaining logic.

---

## Future Enhancements

* Replace alert() with actual backend integration for the contact form.
* Add accessibility support (ARIA labels, tab order, etc).
* Make animations skippable or configurable via user controls.
* Lazy load slideshow images to improve initial page performance.
* Consider swapping static slideshow with WebM video for better compression.

---

## License

MIT License. Fork, remix, reuse — just don't deploy it with my face on it.
