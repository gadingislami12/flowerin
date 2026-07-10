# Flowerin 🌸

Flowerin is a premium, responsive static floral e-commerce catalog built with React and Vite. It is designed to offer a seamless browsing experience where customers can add fresh flowers, bouquets, and custom requests to their cart, and checkout directly via WhatsApp.

## Features ✨

- **Elegant and Premium Design**: Curated color palette, sleek dark/gold accents, custom typography, and fluid micro-animations.
- **Client-Side Filtering**: Dynamic filtering for flower categories (Fresh Flower, Buket Satin, Buket Snack, etc.) and occasions (Birthday, Anniversary, Graduation, etc.) powered directly by local JSON data.
- **Instant Search**: Search through products instantly by name or description.
- **Custom Request Form**: Users can submit custom bouquet requests, custom money bouquets, snack lists, message cards, and color/theme palettes.
- **Persistent Cart**: Client-side cart system powered by `localStorage` (no login required, items persist on page reload).
- **WhatsApp Checkout**: Direct checkout integration that converts the cart items into a formatted text message, instantly opening a chat with the seller.
- **100% Mobile Responsive**: Customized hamburger navigation menu with accordion drop-downs, scrollable horizontal sidebar tabs, and stacked lists designed for mobile viewports.

## Tech Stack 🛠️

- **Frontend Library**: React (v18)
- **Build Tool**: Vite (v5)
- **Routing**: React Router (v6)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with HSL-tailored variables
- **Hosting Compatibility**: 100% static site compatible, perfect for free hosting on GitHub Pages, Netlify, or Vercel.

## Authors & Collaborators 👥

- **Ulfa** ([@ulfau_](https://www.instagram.com/ulfau_/))
- **Gading Islami** ([@gading19_](https://www.instagram.com/gading19_/))

---

## Local Development 🚀

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at the displayed port (default is `http://localhost:5173` or `http://localhost:5174`).

## Production Build & Deployment 🌐

To build the static assets for hosting:
```bash
npm run build
```
This generates a `dist/` directory containing HTML, CSS, and JS files, which can be uploaded directly to GitHub Pages, Netlify, or Vercel.
