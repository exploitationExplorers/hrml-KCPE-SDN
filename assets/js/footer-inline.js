const rocket_pairs = [
  {
    selector:
      ".main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-toggle",
    style:
      ".main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-toggle:after{--wpr-bg-b79cb6a6-02f6-4691-8879-078f4a252a6c: url('https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__angle-down--primary-color.svg');}",
    hash: "b79cb6a6-02f6-4691-8879-078f4a252a6c",
    url: "https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__angle-down--primary-color.svg",
  },
  {
    selector:
      ".main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item",
    style:
      ".main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item:after{--wpr-bg-c5209b2e-7505-44e8-a6a2-e940a970dfad: url('https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--dark-gray.svg');}",
    hash: "c5209b2e-7505-44e8-a6a2-e940a970dfad",
    url: "https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--dark-gray.svg",
  },
  {
    selector: ".crunch-button__text-only",
    style:
      ".crunch-button__text-only:before{--wpr-bg-16c70379-68c7-409b-b4ef-875aa8fb15ce: url('https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--white.svg');}",
    hash: "16c70379-68c7-409b-b4ef-875aa8fb15ce",
    url: "https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--white.svg",
  },
  {
    selector: ".crunch-button__text-only--gold-color",
    style:
      ".crunch-button__text-only--gold-color:before{--wpr-bg-7d69296a-c46b-4b46-b7da-825004f9d04e: url('https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--white.svg');}",
    hash: "7d69296a-c46b-4b46-b7da-825004f9d04e",
    url: "https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--white.svg",
  },
  {
    selector: ".crunch-button__text-only--primary-arrow",
    style:
      ".crunch-button__text-only--primary-arrow:before{--wpr-bg-4ae73cc9-7009-462d-a05f-46d85694e4a1: url('https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--primary.svg');}",
    hash: "4ae73cc9-7009-462d-a05f-46d85694e4a1",
    url: "https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--primary.svg",
  },
  {
    selector: ".crunch-button__text-only--secondary-arrow",
    style:
      ".crunch-button__text-only--secondary-arrow:before{--wpr-bg-88a48b8f-a67a-4aa8-8913-459670e4f8c9: url('https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--secondary.svg');}",
    hash: "88a48b8f-a67a-4aa8-8913-459670e4f8c9",
    url: "https://waltonst.com/wp-content/themes/walton-st-capital/dist/icon__arrow-right--secondary.svg",
  },
];
const rocket_excluded_pairs = [];

WebFontConfig = {
  typekit: { id: "gtk5xrw" },
};

(function (d) {
  var wf = d.createElement("script"),
    s = d.scripts[0];
  wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);

var rocket_lazyload_css_data = { threshold: "300" };

window.lazyLoadOptions = [
  {
    elements_selector: "img[data-lazy-src],.rocket-lazyload",
    data_src: "lazy-src",
    data_srcset: "lazy-srcset",
    data_sizes: "lazy-sizes",
    class_loading: "lazyloading",
    class_loaded: "lazyloaded",
    threshold: 300,
    callback_loaded: function (element) {
      if (
        element.tagName === "IFRAME" &&
        element.dataset.rocketLazyload == "fitvidscompatible"
      ) {
        if (element.classList.contains("lazyloaded")) {
          if (typeof window.jQuery != "undefined") {
            if (jQuery.fn.fitVids) {
              jQuery(element).parent().fitVids();
            }
          }
        }
      }
    },
  },
  {
    elements_selector: ".rocket-lazyload",
    data_src: "lazy-src",
    data_srcset: "lazy-srcset",
    data_sizes: "lazy-sizes",
    class_loading: "lazyloading",
    class_loaded: "lazyloaded",
    threshold: 300,
  },
];

window.addEventListener(
  "LazyLoad::Initialized",
  function (e) {
    var lazyLoadInstance = e.detail.instance;
    if (window.MutationObserver) {
      var observer = new MutationObserver(function (mutations) {
        var image_count = 0;
        var iframe_count = 0;
        var rocketlazy_count = 0;
        mutations.forEach(function (mutation) {
          for (var i = 0; i < mutation.addedNodes.length; i++) {
            if (typeof mutation.addedNodes[i].getElementsByTagName !== "function") {
              continue;
            }
            if (
              typeof mutation.addedNodes[i].getElementsByClassName !== "function"
            ) {
              continue;
            }
            images = mutation.addedNodes[i].getElementsByTagName("img");
            is_image = mutation.addedNodes[i].tagName == "IMG";
            iframes = mutation.addedNodes[i].getElementsByTagName("iframe");
            is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
            rocket_lazy =
              mutation.addedNodes[i].getElementsByClassName("rocket-lazyload");
            image_count += images.length;
            iframe_count += iframes.length;
            rocketlazy_count += rocket_lazy.length;
            if (is_image) {
              image_count += 1;
            }
            if (is_iframe) {
              iframe_count += 1;
            }
          }
        });
        if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) {
          lazyLoadInstance.update();
        }
      });
      var b = document.getElementsByTagName("body")[0];
      var config = { childList: !0, subtree: !0 };
      observer.observe(b, config);
    }
  },
  !1,
);
