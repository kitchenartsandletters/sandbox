# Citymeals Demo – Sandbox

This project is a sandbox implementation for the **Citymeals on Wheels x Chef Marc Forgione book collection** campaign.  
The purpose is to prototype layouts, UI/UX flows, and Shopify integration before rolling into production.

---

## Overview

- Built in React and deployed via Railway at:  
  [sandbox.kitchenartsandletters.com](http://sandbox.kitchenartsandletters.com)  
- Includes a responsive landing page with:
  - Hero banner with chef headshot and book covers
  - Variant cards for **Petite Tasting** and **Grand Tasting** sets
  - Sticky mobile add-to-cart bar
  - Tooltips on book cards
  - FAQ and Citymeals info block

---

## Development Notes

- Repo is connected to GitHub for version control.  
- Assets (book covers, logos) are stored under `/public/assets`.  
- Styling: custom `index.css` using **CSS variables** and a lightweight design system (Archivo for body text, Libre Franklin for headings).  
- No Tailwind, pure CSS system.

---

## Current Tasks

- ✅ Basic mockup of landing page
- ✅ Mobile sticky add-to-cart bar
- ✅ Book grid with tooltips
- ✅ Sandbox routing setup

---

## Known Issues / Dev To-Dos

- [ ] Convert **book cards** into a **side-scrolling carousel** in tablet/mobile view for a smoother browsing experience.
- [ ] Analyze existing **Shopify theme CSS** to identify opportunities to **reuse baked styling**, ensuring better alignment with the production storefront.
- [ ] Smooth out FAQ expand/collapse transitions.
- [ ] Refine sticky bar UI for desktop view (persistent horizontal set selector concept).
- [ ] Audit inventory/fulfillment integration points before Shopify handoff.

---

## Dev Issues

### Frontend
- [ ] Refactor **book card grid** into a **horizontal carousel** for tablet/mobile.
- [ ] Implement **lazy loading** for book images to improve performance.
- [ ] Add **hover state animations** for buttons and tooltips.
- [ ] Create unified **color tokens** consistent with Shopify theme palette.

### Integration
- [ ] Evaluate **Shopify theme CSS** for reusable styles and typography.
- [ ] Connect **Add to Cart** actions to Shopify API endpoints (demo currently uses `console.log`).
- [ ] Implement **Shopify buy-button** integration for live product variants.

### UX Enhancements
- [ ] Improve **FAQ animation** timing (smooth close transition).
- [ ] Add **sticky bar** variant for desktop view (persistent horizontal selector).
- [ ] Implement **scroll spy** for mobile sticky bar to highlight the active set.

### General
- [ ] Audit for accessibility compliance (contrast, focus states, alt text).
- [ ] Add GitHub Actions for automated **linting and build checks**.
- [ ] Prepare **README visuals** (screenshots of mobile/desktop layouts).
---

## Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/your-org/your-repo.git
   cd your-repo

	2.	Install dependencies:

npm install


	3.	Run locally:

npm start

or, depending on setup:

npm run dev

⸻

Deployment
	•	Deployed via Railway to sandbox subdomain:
sandbox.kitchenartsandletters.com
	•	Protected with basic auth (see internal docs for credentials).

⸻

Next Steps
	•	Add Shopify buy-button integration.
	•	Test fulfillment logic end-to-end.
	•	Prepare for production rollout after content/design approvals.