var debounce=function(t,e,a){var n;return function(){var r=this,u=arguments,i=a&&!n;clearTimeout(n),n=setTimeout((function(){n=null,a||t.apply(r,u)}),e),i&&t.apply(r,u)}};function returnCurrencySymbol(t=null){if(null===t)return"";let e={USD:"$",EUR:"€",CRC:"₡",GBP:"£",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",NGN:"₦",PHP:"₱",PLN:"zł",PYG:"₲",THB:"฿",UAH:"₴",VND:"₫"};return void 0!==e[t]?e[t]:""}jQuery(document).ready((function(){jQuery(".bdt-ss-link").on("click",(function(){var t=jQuery("<input>");jQuery("body").append(t),t.val(jQuery(this).data("url")).select(),document.execCommand("copy"),t.remove(),jQuery(this).find(".bdt-social-share-title").html(jQuery(this).data("copied")),setTimeout((()=>{jQuery(this).find(".bdt-social-share-title").html(jQuery(this).data("orginal"))}),5e3)}))})),jQuery(document).ajaxComplete((function(t,e,a){if(e.responseJSON&&void 0!==e.responseJSON.cart_hash&&e.responseJSON.cart_hash&&jQuery(".bdt-offcanvas").hasClass("__update_cart")){let t=jQuery(".bdt-offcanvas.__update_cart").attr("id");bdtUIkit.util.ready((function(){bdtUIkit.offcanvas("#"+t).show()}))}}));