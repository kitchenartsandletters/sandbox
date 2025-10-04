/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

function initCartScripts() {
  console.log('🧪 PREORDER_PRODUCTS at start of custom.js:', window.__PREORDER_PRODUCTS);

  if (typeof ShopifyAPI === 'undefined') {
    ShopifyAPI = {};
  }

  ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
    console.log("🧪 Add to Cart Triggered");

    var $form = $(form);
    var variantId = parseInt($form.find('[name="id"]').val(), 10);
    var productId =
      parseInt($form.find('input[name="product-id"]').val(), 10) ||
      parseInt($form.closest('[data-product-id]').data('product-id'), 10);

    var properties = {};

    console.log("🧪 Variant ID:", variantId);
    console.log("🧪 Product ID:", productId);

    let isSigned, isBookplate, isPreorder, isBackorder, pubDate;

    const flags = window.__COLLECTION_PRODUCT_FLAGS?.[productId];
    if (flags) {
      console.log('🧪 Using collection product flags for product:', productId, flags);
      isSigned = flags.isSigned || false;
      isBookplate = flags.isBookplate || false;
      isPreorder = flags.isPreorder || false;
      isBackorder = flags.isBackorder || false;
      pubDate = flags.pubdate || '';
    } else {
      isSigned = window.__SIGNED_PRODUCTS?.includes(variantId) || false;
      isBookplate = window.__BOOKPLATE_PRODUCTS?.includes(variantId) || false;
      isPreorder = window.__PREORDER_PRODUCTS?.includes(variantId) || false;
      isBackorder = window.__BACKORDER_VARIANTS?.includes(variantId) || false;
      pubDate = window.__PUBDATES?.[variantId];
      if (pubDate && typeof pubDate === 'object' && pubDate.error) {
        pubDate = '';
      }
    }

    if (isPreorder && isBackorder) {
      console.log("🧪 This is a preorder; backorder flag will be ignored.");
      isBackorder = false;
    }

    console.log("🧪 Signed?", isSigned);
    console.log("🧪 Bookplate?", isBookplate);
    console.log("🧪 Preorder?", isPreorder);
    console.log("🧪 Backorder?", isBackorder);
    console.log("🧪 Pub Date:", pubDate);

    if (isSigned) properties['_signed'] = true;
    if (isBookplate) properties['_bookplate'] = true;
    if (isPreorder) properties['_preorder'] = true;
    if (isBackorder) properties['_backorder'] = true;
    if (pubDate) properties['_pubdate'] = pubDate;

    console.log("🧪 Final Properties to Inject:", properties);

    for (const key in properties) {
      if (properties.hasOwnProperty(key)) {
        if ($form.find(`input[name="properties[${key}]"]`).length === 0) {
          $('<input />', {
            type: 'hidden',
            name: `properties[${key}]`,
            value: properties[key]
          }).appendTo($form);
        }
      }
    }

    var $body = $(document.body);
    $.ajax({
      type: 'POST',
      url: theme.routes.cartAddUrl + '.js',
      data: $form.serialize(),
      dataType: 'json',
      beforeSend: function(jqxhr, settings) {
        $body.trigger('beforeAddItem.ajaxCart', form);
      },
      success: function(line_item) {
        if (typeof callback === 'function') {
          callback(line_item, form);
        } else if (typeof ShopifyAPI.onItemAdded === 'function') {
          ShopifyAPI.onItemAdded(line_item, form);
        }
        $body.trigger('afterAddItem.ajaxCart', [line_item, form]);
      },
      error: function(XMLHttpRequest, textStatus) {
        if (typeof errorCallback === 'function') {
          errorCallback(XMLHttpRequest, textStatus, form);
        } else if (typeof ShopifyAPI.onError === 'function') {
          ShopifyAPI.onError(XMLHttpRequest, textStatus);
        }
        $body.trigger('errorAddItem.ajaxCart', [XMLHttpRequest, textStatus]);
      },
      complete: function(jqxhr, text) {
        $body.trigger('completeAddItem.ajaxCart', [this, jqxhr, text]);
      }
    });
  };

  if (typeof window.__COLLECTION_PRODUCT_FLAGS === 'undefined') {
    window.__COLLECTION_PRODUCT_FLAGS = {};
  }

  document.querySelectorAll('.product-card, .js-product-form').forEach(function(container) {
    const dataScript = container.querySelector('.product-variant-data');
    if (dataScript) {
      try {
        const data = JSON.parse(dataScript.textContent);
        const productId = parseInt(data.productId, 10);
        if (productId) {
          window.__COLLECTION_PRODUCT_FLAGS[productId] = data;
          console.log('🧪 Parsed flags for product', productId, data);
        }
      } catch (err) {
        console.warn('🧪 Failed to parse product flags:', err);
      }
    }
  });
}

if (document.readyState === 'complete') {
  initCartScripts();
} else {
  window.addEventListener('load', initCartScripts);
}