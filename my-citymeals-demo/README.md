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

- [x] Convert **book cards** into a **side-scrolling carousel** in tablet/mobile view for a smoother browsing experience.
- [x] Analyze existing **Shopify theme CSS** to identify opportunities to **reuse baked styling**, ensuring better alignment with the production storefront.
- [x] Smooth out FAQ expand/collapse transitions.
- [x] Refine sticky bar UI for desktop view (persistent horizontal set selector concept).
- [ ] Audit inventory/fulfillment integration points before Shopify handoff.

---

## Dev Issues

### Frontend
- [x] Refactor **book card grid** into a **horizontal carousel** for tablet/mobile.
- [x] Implement **lazy loading** for book images to improve performance.
- [x] Add **hover state animations** for buttons and tooltips.
- [x] Create unified **color tokens** consistent with Shopify theme palette.

### Integration
- [x] Evaluate **Shopify theme CSS** for reusable styles and typography.
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

---

## 🧩 Phase 3 — Shopify Add-to-Cart Integration (Production Alignment)

This phase focuses on integrating the sandbox with Shopify’s official storefront API and aligning UI components and styles with the live Shopify theme.

### Goals

- Replace mock add-to-cart actions with real Shopify Storefront API mutations.
- Use Shopify’s Liquid templates and CSS variables for consistent styling.
- Ensure variant selectors and inventory levels reflect live product data.
- Implement error handling and loading states for network requests.

### Key Tasks

| Task | Description | Status |
|-------|-------------|--------|
| API Integration | Connect add-to-cart buttons to Shopify Storefront API mutation `checkoutLineItemsAdd` | Pending |
| Live Data Fetching | Query product variants and inventory via Storefront API | Pending |
| Styling Alignment | Use Shopify theme CSS variables and classes for buttons and tooltips | Pending |
| Error Handling | Show user-friendly messages on API errors | Pending |
| Loading States | Disable buttons and show spinners during API calls | Pending |

### Example Liquid Snippet for Variant Selector

```liquid
<select name="id" id="ProductSelect-{{ product.id }}">
  {% for variant in product.variants %}
    <option value="{{ variant.id }}" {% if variant == product.selected_or_first_available_variant %}selected{% endif %}>
      {{ variant.title }} - {{ variant.price | money }}
    </option>
  {% endfor %}
</select>
```

### React Integration Sample (Using Shopify Buy SDK)

```jsx
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'your-shop.myshopify.com',
  storefrontAccessToken: 'your-storefront-access-token',
});

async function addToCart(variantId) {
  const checkout = await client.checkout.create();
  const lineItemsToAdd = [{ variantId, quantity: 1 }];
  const updatedCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
  console.log('Added to cart:', updatedCheckout);
}
```

### Notes

- Replace `'your-shop.myshopify.com'` and `'your-storefront-access-token'` with your actual Shopify domain and token.
- Consider persisting checkout ID in local storage for session continuity.
- Style buttons using Shopify theme CSS classes like `.btn` and `.tooltip` to maintain visual consistency.

---

By completing Phase 3, the sandbox will be production-ready, offering a seamless and authentic shopping experience consistent with the Citymeals on Wheels storefront.