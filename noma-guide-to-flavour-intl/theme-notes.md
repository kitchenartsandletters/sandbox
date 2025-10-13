# Theme Notes – Kitchen Arts & Letters (Shopify)

## 2025-10-13: Noma Preorder Modal System + Cart Validation

### 📁 Files Edited
- `assets/custom.js`
- `layout/theme.liquid`
- `assets/theme.css`

### 🧠 Summary of Changes

#### ✅ Noma Cart Restriction Logic
- Modified `ShopifyAPI.addItemFromForm` in `custom.js` to enforce **international customer restrictions** for product ID `7179329437829` (The Noma Guide to Building Flavour).
- Logic allows **multiple copies of the Noma book** to be added to cart.
- Blocks all **mixed-cart** scenarios for international customers:
  - Cannot add Noma to cart with other products already present.
  - Cannot add other products if Noma is already in cart.

#### ✅ Modal System (`showNomaModal('add')`, `showNomaModal('block')`)
- Replaces `alert()` with fully styled modals:
  - `add`: Shown when Noma is added to cart.
  - `block`: Shown when customer attempts to add other products while Noma is already in cart.
- Modal Features:
  - Styled to match site's visual design
  - Dimmed background overlay
  - Closeable via:
    - “X” button
    - Escape key
    - 10-second auto-dismiss
  - ARIA accessibility: `aria-modal`, `role="dialog"`, `aria-labelledby`, `aria-describedby`

#### ✅ Global Modal Injection
- Modal HTML block injected directly into `layout/theme.liquid`, just before closing `</body>` tag.
- Modal JS + CSS are centralized in:
  - `assets/custom.js` (logic)
  - `assets/theme.css` (styling)

---

### 📝 Future Improvements
- [ ] Refactor modal HTML into `snippets/modal-noma.liquid` for modularity
- [ ] Optional: Externalize modal copy into `settings_schema.json` or metafields for translation or CMS-style editing
- [ ] Add smooth fade/slide transitions for modal open/close
- [ ] Consider extending modal pattern to other product campaigns (e.g., signed or exclusive titles)

---

### 🛠️ Technical Reference

#### `showNomaModal(type)`
```js
showNomaModal('add');   // When Noma is successfully added
showNomaModal('block'); // When a customer is blocked from mixing products

Trigger Conditions
	•	Customer country ≠ US
	•	Cart contents and current product conditions trigger modal display logic inside addItemFromForm

🔒 Product ID Reference
Product,Shopify ID
The Noma Guide to Building Flavour, 7179329437829
