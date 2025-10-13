// assets/citymeals-kal.js
document.addEventListener("DOMContentLoaded", () => {
  const VARIANTS = {
    petite: 41381755093125,
    grand: 41381755125893
  };

  const donationBySet = {
    petite: "$25 from your purchase supports Citymeals",
    grand: "$50 from your purchase supports Citymeals"
  };

  const cartButtons = document.querySelectorAll(".js-add-to-cart");
  const donationMsg = document.querySelector(".donation-message span");

  cartButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const set = btn.dataset.set;
      const variantId = VARIANTS[set];
      if (!variantId) return alert("Variant not found.");

      // 🧩 Create a fake form compatible with ajax-cart.js
      const form = document.createElement("form");
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "id";
      input.value = variantId;
      form.appendChild(input);

      // Add optional hidden qty=1
      const qty = document.createElement("input");
      qty.type = "hidden";
      qty.name = "quantity";
      qty.value = "1";
      form.appendChild(qty);

      try {
        // ✅ Use the native Timber Ajax Cart system with callback
        ShopifyAPI.addItemFromForm(form, (item) => {
          console.log(`✅ Added ${set} set via ShopifyAPI.addItemFromForm()`, item);

          // Force refresh + open drawer animation using theme-native logic
          if (typeof ajaxCart !== "undefined" && typeof ajaxCart.load === "function") {
            ajaxCart.load();

            // Wait for cart to reload, then open drawer via theme.mfpOpen
            setTimeout(() => {
              document.body.dispatchEvent(new CustomEvent("afterCartLoad.ajaxCart"));
              if (typeof theme !== "undefined" && typeof theme.mfpOpen === "function") {
                theme.mfpOpen("cart");
              }
            }, 600);
          } else if (typeof theme !== "undefined" && typeof theme.mfpOpen === "function") {
            theme.mfpOpen("cart");
          }

          // Update donation message
          if (donationMsg) donationMsg.textContent = donationBySet[set];
        });
      } catch (err) {
        console.error("❌ Add to cart error:", err);
        alert("Unable to add to cart. Please try again.");
      }
    });
  });
});