# UI Overhaul Implementation Plan

## Goal Description
The goal is to completely redesign the website's UI to look "cool", professional, and demonstrate high-level web development skills. This involves upgrading the visual aesthetics with glassmorphism, gradients, and animations, and improving the user experience with smoother transitions and interactive elements.

## User Review Required
- **Design Choice**: The new design will use a "dark mode" aesthetic with neon/gradient accents (Blush Pink, Soft Gold) and glassmorphism.
- **Dependencies**: Adding `framer-motion` for animations and `lucide-react` for icons.

## Proposed Changes

### Dependencies
#### [NEW]
- `framer-motion`: For complex animations and page transitions.
- `lucide-react`: For modern, consistent icons.

### Global Styles
#### [MODIFY] [index.css](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/index.css)
- Add new CSS variables for colors and gradients.
- Add utility classes for glassmorphism and animations.
- Reset default styles for a cleaner base.

### Layout Components
#### [MODIFY] [App.jsx](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/App.jsx)
- Implement a dynamic, animated background.
- Wrap routes in `AnimatePresence` for page transitions.

#### [MODIFY] [Navbar.jsx](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/components/Navbar.jsx)
- Change to a floating glass navbar.
- Add hover effects to links.
- Add mobile menu animation.

#### [MODIFY] [Footer.jsx](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/components/Footer.jsx)
- Modernize layout and typography.

### Pages
#### [MODIFY] [Home.jsx](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/pages/Home.jsx)
- **Hero Section**: Add a large, gradient text headline with a typing or reveal animation.
- **CTA Buttons**: specialized hover effects (e.g., glow).
- **Tech Stack**: Display icons with a floating or scrolling animation.

#### [MODIFY] [Projects.jsx](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/pages/Projects.jsx)
- Grid layout for project cards.
- Cards reveal details on hover.
- Filter animation.

#### [MODIFY] [About.jsx](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/pages/About.jsx)
- Timeline for experience/education.
- Skill bars or circular progress indicators.

#### [MODIFY] [Contact.jsx](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/eric%27s%20dev%20site/eric-s-dev-site/src/pages/Contact.jsx)
- Glassmorphism form.
- Interactive social media links.

## Verification Plan

### Automated Tests
- Run `npm run dev` and check for console errors.
- Ensure build passes with `npm run build`.

### Manual Verification
- **Visual Check**: Open the local server and navigate through all pages.
- **Responsiveness**: Check mobile, tablet, and desktop views.
- **Animations**: Verify that animations are smooth and do not cause layout shifts.
- **Interactivity**: Test all buttons, links, and form inputs.
