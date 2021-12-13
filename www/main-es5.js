(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    var map = {
      "./account/address/address.module": ["./src/app/account/address/address.module.ts", "common", "account-address-address-module"],
      "./account/chkphone/chkphone.module": ["./src/app/account/chkphone/chkphone.module.ts", "account-chkphone-chkphone-module"],
      "./account/city/city.module": ["./src/app/account/city/city.module.ts", "account-city-city-module"],
      "./account/forgot/forgot.module": ["./src/app/account/forgot/forgot.module.ts", "account-forgot-forgot-module"],
      "./account/login/login.module": ["./src/app/account/login/login.module.ts", "account-login-login-module"],
      "./account/order/order.module": ["./src/app/account/order/order.module.ts", "account-order-order-module"],
      "./account/profile/profile.module": ["./src/app/account/profile/profile.module.ts", "account-profile-profile-module"],
      "./account/rate/rate.module": ["./src/app/account/rate/rate.module.ts", "account-rate-rate-module"],
      "./account/signup/signup.module": ["./src/app/account/signup/signup.module.ts", "account-signup-signup-module"],
      "./account/verfycode/verfycode.module": ["./src/app/account/verfycode/verfycode.module.ts", "account-verfycode-verfycode-module"],
      "./cart/cart.module": ["./src/app/cart/cart.module.ts", "cart-cart-module"],
      "./categorys/categorys.module": ["./src/app/categorys/categorys.module.ts", "categorys-categorys-module"],
      "./done/done.module": ["./src/app/done/done.module.ts", "common", "done-done-module"],
      "./info/info.module": ["./src/app/info/info.module.ts", "info-info-module"],
      "./item/item.module": ["./src/app/item/item.module.ts", "item-item-module"],
      "./lang/lang.module": ["./src/app/lang/lang.module.ts", "lang-lang-module"],
      "./locked/locked.module": ["./src/app/locked/locked.module.ts", "locked-locked-module"],
      "./offer/offer.module": ["./src/app/offer/offer.module.ts"],
      "./option/option.module": ["./src/app/option/option.module.ts"],
      "./page/about/about.module": ["./src/app/page/about/about.module.ts", "page-about-about-module"],
      "./page/contact/contact.module": ["./src/app/page/contact/contact.module.ts", "page-contact-contact-module"],
      "./page/faq/faq.module": ["./src/app/page/faq/faq.module.ts", "page-faq-faq-module"],
      "./page/how/how.module": ["./src/app/page/how/how.module.ts", "page-how-how-module"],
      "./welcome/welcome.module": ["./src/app/welcome/welcome.module.ts", "welcome-welcome-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/option-pay/form-card/form-card.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/option-pay/form-card/form-card.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-icon name=\"chevron-back-outline\" (click)=\"closeForm()\"></ion-icon>\n        <h4 class=\"title\">Ingresa los datos de tu tarjeta</h4>\n        </ion-buttons>\n      <ion-title>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form class=\"credit-card\" #form=\"ngForm\" (ngSubmit)=\"createToken(form.value)\">\n    <div class=\"form-body\">\n      <!-- Card Number -->\n      <ion-input type=\"tel\" class=\"card-number\" maxlength=\"16\" name=\"card_number\" ngModel required placeholder=\"Número de tarjeta\" clearInput></ion-input>\n      <ion-input type=\"text\" class=\"card-number\" name=\"holder_name\" ngModel required placeholder=\"Nombre en la tarjeta\" clearInput></ion-input>\n      <!-- Date Field -->\n      <div class=\"date-field\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <div class=\"month\">\n              <ion-select mode=\"md\" interface=\"action-sheet\" placeholder=\"mes de vencimiento\" name=\"expiration_month\" ngModel required>\n                <ion-select-option value=\"01\">01</ion-select-option>\n                <ion-select-option value=\"02\">02</ion-select-option>\n                <ion-select-option value=\"03\">03</ion-select-option>\n                <ion-select-option value=\"04\">04</ion-select-option>\n                <ion-select-option value=\"05\">05</ion-select-option>\n                <ion-select-option value=\"06\">06</ion-select-option>\n                <ion-select-option value=\"07\">07</ion-select-option>\n                <ion-select-option value=\"08\">08</ion-select-option>\n                <ion-select-option value=\"09\">09</ion-select-option>\n                <ion-select-option value=\"10\">10</ion-select-option>\n                <ion-select-option value=\"11\">11</ion-select-option>\n                <ion-select-option value=\"12\">12</ion-select-option>\n              </ion-select>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <div class=\"year\">\n              <ion-select mode=\"md\" interface=\"action-sheet\" placeholder=\"año de vencimiento\" name=\"expiration_year\" ngModel required>\n                <ion-select-option value=\"16\">16</ion-select-option>\n                <ion-select-option value=\"17\">17</ion-select-option>\n                <ion-select-option value=\"18\">18</ion-select-option>\n                <ion-select-option value=\"19\">19</ion-select-option>\n                <ion-select-option value=\"20\">20</ion-select-option>\n                <ion-select-option value=\"21\">21</ion-select-option>\n                <ion-select-option value=\"22\">22</ion-select-option>\n                <ion-select-option value=\"23\">23</ion-select-option>\n                <ion-select-option value=\"24\">24</ion-select-option>\n                <ion-select-option value=\"25\">25</ion-select-option>\n                <ion-select-option value=\"26\">26</ion-select-option>\n                <ion-select-option value=\"27\">27</ion-select-option>\n                <ion-select-option value=\"28\">28</ion-select-option>\n                <ion-select-option value=\"29\">29</ion-select-option>\n                <ion-select-option value=\"30\">30</ion-select-option>\n              </ion-select>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- Card Verification Field -->\n      <div class=\"card-verification\">\n        <div class=\"cvv-input\">\n          <ion-input type=\"tel\" name=\"cvv2\" maxlength=\"4\" ngModel placeholder=\"CVV\" required></ion-input>\n        </div>\n      </div>\n\n      <!-- Buttons -->\n      <ion-button [disabled]=\"!form.valid\" type=\"submit\" color=\"primary\" >\n        Guardar Tarjeta\n      </ion-button>\n    </div>\n  </form>\n\n\n  <ion-card style=\"box-shadow: none;\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <p style=\"font-size: 12px;\">Transacciones realizadas vía:</p>\n        <img src=\"assets/openpay_icon.png\" alt=\"OpenPay\" style=\"max-width: 40%\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"shield\" style=\"padding: 12px 0;font-size:12px;\">\n          Tus pagos se realizan de forma segura con encriptación de 256 bits\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"cards_img\">\n        <ion-list-header>\n          <span>Marcas aceptadas</span>\n        </ion-list-header>\n       \n        \n        <ion-list>\n          <img src=\"assets/cards/americanExpress.png\" alt=\"americanExpress\">\n          <img src=\"assets/cards/bancoAzteca.png\" alt=\"bancoAzteca\">\n          <img src=\"assets/cards/banorte.png\" alt=\"banorte\">\n          <img src=\"assets/cards/banregio.png\" alt=\"banregio\">\n          <img src=\"assets/cards/bbva.png\" alt=\"bbva\">\n          <img src=\"assets/cards/carnet.png\" alt=\"carnet\">\n          <img src=\"assets/cards/citibanamex.png\" alt=\"citibanamex\">\n          <img src=\"assets/cards/hsbc.png\" alt=\"hsbc\">\n          <img src=\"assets/cards/inbursa.png\" alt=\"inbursa\">\n          <img src=\"assets/cards/invex.png\" alt=\"invex\">\n          <img src=\"assets/cards/ixe.png\" alt=\"ixe\">\n          <img src=\"assets/cards/santander.png\" alt=\"santander\">\n          <img src=\"assets/cards/scotiabank.png\" alt=\"scotiabank\">\n          <img src=\"assets/cards/visa.png\" alt=\"visa\">\n          \n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app dir=\"{{ dir }}\">\n  <ion-split-pane>\n    <ion-menu swipe-gesture=\"true\" type=\"push\" side=\"start\" id=\"side-menu\">\n      <ion-header no-border>\n        <ion-toolbar color=\"primary\">\n          <ion-title style=\"font-size:16px;\" class=\"ion-text-left\">Bienvenido(a) a Babel Market</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list lines=\"none\">\n          \n          <!-- Menu principal -->\n          <ion-list-header *ngIf=\"text\">\n            {{ text.menu_title }}\n          </ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'forward'\" [routerLink]=\"[p.url]\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <!-- Menu principal -->\n\n          \n          <!-- Informacion -->\n          <ion-list-header *ngIf=\"text\">\n            {{ text.menu_page_title }}\n          </ion-list-header>\n\n          <ion-menu-toggle *ngIf=\"text\" auto-hide=\"false\">\n            <ion-item routerLink=\"/about\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"chevron-forward-outline\" ></ion-icon>\n              <ion-label> {{ text.about_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle *ngIf=\"text\" auto-hide=\"false\">\n            <ion-item routerLink=\"/how\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"chevron-forward-outline\"></ion-icon>\n              <ion-label>{{ text.how_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle *ngIf=\"text\" auto-hide=\"false\">\n            <ion-item routerLink=\"/faq\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"chevron-forward-outline\"></ion-icon>\n              <ion-label>{{ text.faq_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle *ngIf=\"text\" auto-hide=\"false\">\n            <ion-item routerLink=\"/contact\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"chevron-forward-outline\"></ion-icon>\n              <ion-label>{{ text.contact_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle *ngIf=\"text\" auto-hide=\"false\">\n            <ion-item (click)=\"logout()\">\n              <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n              <ion-label>{{ text.profile_logout }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <!-- Informacion -->\n\n        </ion-list>\n\n      </ion-content>\n      <ion-footer *ngIf=\"admin\">\n      <a href=\"{{ admin.fb }}\" target=\"_blank\" *ngIf=\"admin.fb\"><ion-icon name=\"logo-facebook\" style=\"font-size: 25px;padding: 10px 10px;color:#3F51B5\"></ion-icon></a>\n\n      <a href=\"{{ admin.insta }}\" target=\"_blank\" *ngIf=\"admin.insta\"><ion-icon name=\"logo-instagram\" style=\"font-size: 25px;padding: 10px 10px;color:#e91e63\"></ion-icon></a>\n\n      <a href=\"{{ admin.youtube }}\" target=\"_blank\" *ngIf=\"admin.youtube\"><ion-icon name=\"logo-youtube\" style=\"font-size: 25px;padding: 10px 10px;color:#f44336\"></ion-icon></a>\n\n      <a href=\"{{ admin.twitter }}\" target=\"_blank\" *ngIf=\"admin.twitter\"><ion-icon name=\"logo-twitter\" style=\"font-size: 25px;padding: 10px 10px;color:#03a9f4\"></ion-icon></a>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet main dir=\"{{ dir }}\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/info-fee/info-fee.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/info-fee/info-fee.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"no-border\">\n  <ion-toolbar>\n    <ion-title>Así funcionan nuestros costos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card>\n    <ion-card-header>\n      Comisión por servicio\n    </ion-card-header>\n\n    <ion-card-content>\n      Esta comisión nos permite cubrir gastos operativos y ofrecerte la mejor experiencia de usuario.\n\n      <ion-button expand=\"block\" color=\"success\" (click)=\"closeModal()\">\n        Entendido\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/commanded/commanded.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commanded/commanded.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-title>\n        <ion-icon name=\"arrow-back\" (click)=\"closeComm()\" *ngIf=\"step_comm == 0\"></ion-icon>\n        <ion-icon name=\"arrow-back\" (click)=\"next_step('back')\" *ngIf=\"step_comm != 0\"></ion-icon>\n      </ion-title>\n    </ion-buttons>\n    \n    <ion-buttons *ngIf=\"step_comm == 1\" class=\"animate__animated animate__fadeInRight\">\n      <ion-searchbar #searchad placeholder=\"{{text_address}}\" type=\"text\" mode=\"ios\" autocomplete=\"street-address\" search-icon=\"undefined\" animated=\"true\"\n                  (ionInput)=\"search($event)\" \n                  (ionClear)=\"clearSearch()\" \n                  [(ngModel)]=\"autocomplete.input\"></ion-searchbar>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- Todo Listo -->\n  <div *ngIf=\"step_comm == 0\">\n    <ion-card class=\"title\">\n      <ion-card-header>\n        <ion-card-title *ngIf=\"ready == false\">\n          ¿A dónde debemos ir y qué debemos recoger?\n        </ion-card-title>\n        <ion-card-title *ngIf=\"ready == true\">\n          Resumen de tu mandadito\n        </ion-card-title>\n\n        <ion-card-subtitle>\n          Si cabe en nuestra maleta, te lo llevamos.\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card class=\"from_to\">\n      <img *ngIf=\"ready == true\" src=\"https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x200&maptype=roadmap&markers=color:0x533186|size:mid|label:D|{{lat_dest}},{{lng_dest}}&key={{admin.ApiKey_google}}\">\n      \n      <ion-item lines=\"none\" (click)=\"next_step('add_origin')\">\n        <ion-icon slot=\"start\" src=\"assets/archive-outline.svg\"></ion-icon>\n        <ion-label>\n          Punto de recolección\n          <br />\n          <span *ngIf=\"address_origin\">{{address_origin | slice:0:26}}...</span>\n        </ion-label>\n        <ion-icon src=\"assets/chevron-forward-outline.svg\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\" (click)=\"next_step('add_destin')\">\n        <ion-icon slot=\"start\" src=\"assets/location-outline.svg\"></ion-icon>\n        <ion-label>\n          Punto de entrega\n          <br />\n          <span *ngIf=\"address_destin\">{{address_destin | slice:0:26}}...</span>\n        </ion-label>\n        <ion-icon src=\"assets/chevron-forward-outline.svg\"></ion-icon>\n      </ion-item>\n    </ion-card>\n\n    <!-- Metodo de pago -->\n    <ion-card class=\"type_pay animate__animated animate__fadeInRight\" mode=\"ios\" *ngIf=\"ready == true\">\n      <ion-card-header>\n        <ion-card-subtitle routerLink=\"/option-pay\" routerDirection=\"forward\" >\n          <h2 class=\"d-flex\">\n            Método de pago\n            <ion-icon class=\"end\" name=\"arrow-forward\"></ion-icon>\n          </h2>\n          <p *ngIf=\"otype == 1\">\n            Efectivo\n          </p>\n          <p *ngIf=\"otype == 2\">\n            PayPal\n          </p>\n          <p *ngIf=\"otype == 3\">\n            Tarjeta Crédito/Débito\n          </p>\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    <!-- Metodo de pago -->\n\n    <!-- Costos de envio -->\n    <ion-card class=\"costes animate__animated animate__fadeInRight\" *ngIf=\"ready == true\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <b>Costos</b>\n        </ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content *ngIf=\"cost_ship\">   \n        <ion-row class=\"fontSize\">\n          \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            Distancia a recorrer\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{cost_ship.distance}} KM</b>\n          </ion-col>\n      \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            Tiempos de envio\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{cost_ship.duration}}</b>\n          </ion-col>\n      \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            <b>Costos de envio</b>\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{cost_ship.costs_ship | currency}}</b>  \n          </ion-col>\n\n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            <b>Comisión por servicio</b>\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{cost_ship.service_fee | currency}}</b>  \n          </ion-col>\n          \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            <b>Total a pagar</b>\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{total_amount | currency}}</b>  \n          </ion-col>\n\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <!-- Costos de envio-->\n  </div>\n  <!-- Todo Listo -->\n\n  <!-- Guardar direccion de recoger -->\n  <div *ngIf=\"step_comm == 1\">\n    <!-- Search AutoComplete -->\n    <ion-list *ngIf=\"autocompleteItems && hasSearch\">\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"pin\" style=\"font-size: 22px;\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h4>{{item.structured_formatting.main_text}}</h4>\n          <p style=\"font-size: 12px;font-family: 'SF Pro Display';\" *ngIf=\"item.structured_formatting.secondary_text\">\n            {{item.structured_formatting.secondary_text | slice:0:45}} \n            <i *ngIf=\"item.structured_formatting.secondary_text.length > 45\">...</i>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- Search AutoComplete -->\n\n    <!-- LocationNow -->\n    <ion-item *ngIf=\"!LocationNow\" style=\"margin-top: 15px;\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h4>Tu Ubicación</h4>\n        <p>\n          <ion-skeleton-text animated style=\"width: 100%;height: 15px;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"LocationNow && !hasSearch\" (click)=\"saveAddress(MyLocation[0])\" style=\"margin-top: 15px;\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h4>Tu Ubicación</h4>\n        \n        <p style=\"font-size: 12px;font-family: 'SF Pro Display';\">\n          {{LocationNow | slice:0:45}} <i *ngIf=\"LocationNow.length > 45\">...</i>\n        </p>\n      </ion-label>\n    </ion-item>\n    <!-- LocationNow -->\n\n    <!-- Save Address -->\n    <ion-list *ngIf=\"!hasSearch\">\n      <ion-list-header>\n        <span>Recientes</span>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let add of address\">\n        <ion-item (click)=\"saveAddress(add)\">\n          <ion-avatar slot=\"start\">\n            <ion-icon name=\"time\" style=\"font-size: 22px;\"></ion-icon>\n          </ion-avatar>\n          <ion-label>\n            <h4 *ngIf=\"add.type\">{{add.type}}</h4>\n            <h4 *ngIf=\"!add.type\">Sin Especificar</h4>\n            \n            <p style=\"font-size: 12px;font-family: 'SF Pro Display';\">\n              {{add.address | slice:0:45}} <i *ngIf=\"add.address.length > 45\">...</i>\n            </p>\n          </ion-label>\n        </ion-item>\n    \n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"removeAddress(add.id)\">\n            <ion-icon name=\"trash\"></ion-icon>\n            Eliminar\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <!-- Save Address -->\n  </div>\n  <!-- Guardar direccion de recoger -->\n\n  <!-- Que vamos a recoger -->\n  <div *ngIf=\"step_comm == 2\">\n    <ion-card class=\"title\">\n      <ion-card-header>\n        <ion-card-title>\n          ¿Qué debemos hacer en este punto?\n        </ion-card-title>\n        <ion-card-subtitle>\n         {{address_origin}}\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card class=\"from_to\">\n      <ion-item lines=\"none\">\n        <ion-textarea [(ngModel)]=\"first_instr\" name=\"first_instr\" placeholder=\"Recoger paquete en la puerta...\"></ion-textarea>\n      </ion-item>\n    </ion-card>\n  </div>\n  <!-- Que vamos a recoger -->\n\n  <!-- Direccion de entrega -->\n  <div *ngIf=\"step_comm == 3\">\n    <ion-card class=\"title\">\n      <ion-card-header>\n        <ion-card-title>\n          ¿Qué debemos hacer en este punto?\n        </ion-card-title>\n        <ion-card-subtitle>\n         {{address_destin}}\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card class=\"from_to\">\n      <ion-item lines=\"none\">\n        <ion-textarea [(ngModel)]=\"second_instr\" name=\"second_instr\" placeholder=\"Dejar el paquete en la puerta\"></ion-textarea>\n      </ion-item>\n    </ion-card>\n  </div>\n  <!-- Direccion de entrega -->\n\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-card class=\"foot\" *ngIf=\"step_comm == 0\">\n    <p class=\"ion-text-center\" *ngIf=\"ready == false\">\n      Términos y condiciones especificos y aplicables a BabelMarket Mandados, Disponibles aqui Link\n    </p>\n    <ion-button expand=\"block\" (click)=\"makeOrder()\" [disabled]=\"ready == false\">\n      Confirmar pedido\n    </ion-button>\n  </ion-card>\n\n  <ion-card class=\"foot\" *ngIf=\"step_comm == 2\">\n    <ion-button expand=\"block\" (click)=\"next_step('add_destin')\" [disabled]=\"first_instr == ''\">\n      Siguiente\n    </ion-button>\n  </ion-card>\n\n  \n  <ion-card class=\"foot\" *ngIf=\"step_comm == 3\">\n    <ion-button expand=\"block\" (click)=\"next_step('ready')\" [disabled]=\"second_instr == ''\">\n      Confirmar\n    </ion-button>\n  </ion-card>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/rate-tripe/rate-tripe.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/rate-tripe/rate-tripe.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <ion-card class=\"success\">\n    <ion-card-header>\n      <img src=\"assets/ic_success.png\" alt=\"success icon\" style=\"width: 25%;\">\n      \n      <ion-card-title>\n        Tu pedido ha sido entregado\n      </ion-card-title>\n\n      <ion-card-subtitle *ngIf=\"data\" class=\"ion-text-left\">\n        <div class=\"container\">\n          <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\">\n            <div class=\"marker\"></div>\n            <div class=\"timeline-content\">\n               <p>{{data.event.address_origin | slice:0:50}}...</p>\n            </div>\n          </div>\n  \n          <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\">\n            <div class=\"marker\"></div>\n            <div class=\"timeline-content\">\n               <p>{{data.event.address_destin | slice:0:50}}...</p>\n            </div>\n          </div>\n       </div>\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content style=\"padding: 0 !important;margin:0 !important;\">\n      <form #form=\"ngForm\" (ngSubmit)=\"giveRating(form.value)\" style=\"padding: 0 !important;margin:0 !important;\">\n        <ion-list class=\"ion-text-center\">\n          <h6>{{ text.rating_heading }}</h6>\n          <br>\n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 0\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 1\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 2\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 3\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 4\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 5\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n          </ion-row>\n        </ion-list>\n\n        <ion-list style=\"padding: 0 !important;margin:0 !important;\">\n         \n          <ion-item style=\"padding: 0 !important;margin:0 !important;\">\n            <ion-label>Prevención COVID e higiene en el repartidor</ion-label>\n            <ion-toggle ngModel name=\"covid_prevention\" mode=\"ios\"></ion-toggle>\n          </ion-item>\n          \n          <ion-item style=\"padding: 0 !important;margin:0 !important;\">\n            <ion-label>Prevención COVID en el producto</ion-label>\n            <ion-toggle ngModel name=\"covid_prevention_product\" mode=\"ios\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n        \n        <ion-item>\n          <ion-textarea ngModel name=\"comment\" placeholder=\"{{ text.rating_msg }}\"></ion-textarea>\n        </ion-item>\n\n        <div class=\"btn\">\n          <ion-button color=\"primary\" [disabled]=\"form.invalid\" type=\"submit\"  mode=\"ios\">\n            {{ text.rating_button }}\n          </ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n<ion-toolbar>\n<ion-title>{{ text.coupon_title }} <ion-button size=\"small\" fill=\"outline\" style=\"float:right\" (click)=\"closeModal()\"><ion-icon name=\"close\" style=\"font-size: 25px\"></ion-icon></ion-button></ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n\n<ion-list *ngIf=\"data.length > 0\">\n\n  <ion-list-header>\n    {{ text.coupon_heading }}\n  </ion-list-header>\n\n  \n\n  <ion-card *ngFor=\"let offer of data\">\n    <img src=\"{{offer.img}}\" />\n    \n    <ion-card-header>\n      <ion-card-title style=\"color:green;\">Codigo {{offer.code}}</ion-card-title>\n      <ion-card-subtitle>{{offer.desc}}</ion-card-subtitle>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <span *ngIf=\"offer.min_cart > 0\">Aplica en compras mayores a MX{{offer.min_cart | currency}}</span>\n      \n      <ion-button size=\"small\" style=\"float:right;margin:10px 0;\" (click)=\"applyNow(offer.id)\">{{ text.coupon_button }}</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-list>\n\n  <p *ngIf=\"data.length == 0\" style=\"text-align: center;padding: 10px 10px;font-size: 11px;color:gray;line-height: 2\">\n    ¡UPS! No hay cupón de descuento disponible<br /> en este momento para esta tienda \n  </p>\n \n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar [class.show-background]=\"showToolbar\" translucent>\n        <ion-buttons slot=\"start\">\n            <ion-back-button mode=\"md\" class=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\">\n    <div  mode=\"ios\">\n        <img src=\"{{item.img}}\" alt=\"Portada\" style=\"width: 100%;\" *ngIf=\"item.img\">\n        <ion-card-header>\n            <ion-card-title style=\"font-size: 18px; font-family: 'SF Pro Display';font-weight: 400;\">\n                {{item.name}}\n            </ion-card-title>\n            <ion-card-subtitle style=\"color: rgb(53, 53, 53);\">\n                {{item.description}}\n            </ion-card-subtitle>\n        </ion-card-header>\n      \n        <ion-item>\n            <ion-label><span style=\"font-size: 16px;font-family: 'SF Pro Display';font-weight: 500;color:green;\">Total: {{cart_total | currency}}</span></ion-label>\n        </ion-item>\n    </div>\n\n    <ion-list>\n        <ion-list-header *ngIf=\"item.s_price > 0\">\n            {{ text.item_size_heading }}\n        </ion-list-header>\n        <ion-radio-group>\n            <ion-item *ngIf=\"item.s_price > 0\">\n                <ion-label>{{ text.item_small }} <span style=\"float: right\">{{ currency }}{{ item.s_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"s\" (ionSelect)=\"selectItem(1,item.s_price)\" checked=\"true\"></ion-radio>\n            </ion-item>\n\n            <ion-item *ngIf=\"item.m_price > 0\">\n                <ion-label>{{ text.item_m }} <span style=\"float: right\">{{ currency }}{{ item.m_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"m\" (ionSelect)=\"selectItem(2,item.m_price)\"></ion-radio>\n            </ion-item>\n\n            <ion-item *ngIf=\"item.l_price > 0\">\n                <ion-label>{{ text.item_large }} <span style=\"float: right\">{{ currency }}{{ item.l_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"l\" (ionSelect)=\"selectItem(3,item.l_price)\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n\n    <ion-list *ngIf=\"item.addon.length > 0\">\n        \n        <!-- hideToggle -->\n        <mat-expansion-panel  [expanded]=\"true\"  *ngFor=\"let category of item.addon\" class=\"{{ category.cate_name }}\">\n           \n            <mat-expansion-panel-header style=\"background-color: #f1f1f1;\">\n              <mat-panel-title style=\"display: block;\">\n                    <span style=\"font-weight: 500;\">{{ category.cate_name }}</span><br />\n                    <small *ngIf=\"category.max_options > 0\">(Elige hasta {{category.max_options}})</small>\n                    &nbsp;<small *ngIf=\"category.required > 0\">(Obligatorio)</small>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <div *ngFor=\"let addon of  category.items\">          \n                    <ion-item *ngIf=\"category.single_opcion == 0\" class=\"content-input\" style=\"position: relative;\">\n                        <mat-radio-group\n                            color=\"primary\"\n                            aria-labelledby=\"example-radio-group-label\"\n                            class=\"cate_{{category.cate_id}}\"\n                            [(ngModel)]=\"category.cate_id\">\n                            <mat-radio-button class=\"example-radio-button\" value=\"addon.id\" [value]=\"addon.id\" (click)=\"addonSelect(addon,category.max_options,category.cate_id,category.required,'radio',$event)\">\n                                {{addon.name}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <ion-label slot=\"end\" *ngIf=\"addon.price > 0\" style=\"position: absolute;right: 10px;\">{{addon.price | currency}}</ion-label>\n                    </ion-item>\n                <ion-item *ngIf=\"category.single_opcion == 1\" style=\"position: relative;\">\n                    <ion-label>{{ addon.name }} <span style=\"position: absolute;right: 10px;\" *ngIf=\"addon.price > 0\">{{ currency }}{{ addon.price }}</span></ion-label>\n                    <ion-checkbox color=\"primary\" slot=\"start\" class=\"cate_{{category.cate_id}}\" (ionChange)=\"addonSelect(addon,category.max_options,category.cate_id,category.required,'check',$event)\"></ion-checkbox>\n                </ion-item>\n            </div>\n        </mat-expansion-panel>\n        \n    </ion-list>\n    <div class=\"quantitybtn\" style=\"text-align: center;padding: 12px 0;\">\n        <div class=\"quantitybtn\" *ngIf=\"hasCart(item.id)\" style=\"text-align: center;padding: 12px 0;\">\n            <button type=\"button\" class=\"sign plus\" data-quantity=\"plus\" data-field=\"quantity\" *ngIf=\"qty >= 2\" (click)=\"Qty('rest')\"> - </button>\n            <input class=\"quantityinput\" type=\"text\" name=\"qty\" value=\"{{ qty }}\" readonly=\"readonly\">\n            <button type=\"button\" class=\"sign minus\" data-quantity=\"minus\" data-field=\"quantity\" (click)=\"Qty('sum')\">+</button>\n        </div>\n    </div>\n    <div class=\"footer-line\"></div>\n</ion-content>\n \n<ion-footer style=\"border:1px solid #e6e6e6;background-color: #ffffff;\">\n    <ion-button mode=\"ios\" class=\"animate__animated animate__bounceInUp\"  (click)=\"addToCart()\" [disabled]=\"!formVal()\">\n        <ion-text>x{{ qty }}</ion-text>\n        {{ text.item_addon_button }}\n        <span>MX{{itemPrice | currency}}</span>\n      </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return __assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    function __extends(d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/account/option-pay/form-card/form-card-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/account/option-pay/form-card/form-card-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: FormCardPageRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormCardPageRoutingModule", function () {
      return FormCardPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _form_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-card.page */
    "./src/app/account/option-pay/form-card/form-card.page.ts");

    const routes = [{
      path: '',
      component: _form_card_page__WEBPACK_IMPORTED_MODULE_3__["FormCardPage"]
    }];
    let FormCardPageRoutingModule = class FormCardPageRoutingModule {};
    FormCardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormCardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/account/option-pay/form-card/form-card.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/account/option-pay/form-card/form-card.module.ts ***!
    \******************************************************************/

  /*! exports provided: FormCardPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormCardPageModule", function () {
      return FormCardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _form_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-card-routing.module */
    "./src/app/account/option-pay/form-card/form-card-routing.module.ts");
    /* harmony import */


    var _form_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-card.page */
    "./src/app/account/option-pay/form-card/form-card.page.ts");

    let FormCardPageModule = class FormCardPageModule {};
    FormCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _form_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormCardPageRoutingModule"]],
      declarations: [_form_card_page__WEBPACK_IMPORTED_MODULE_6__["FormCardPage"]]
    })], FormCardPageModule);
    /***/
  },

  /***/
  "./src/app/account/option-pay/form-card/form-card.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/account/option-pay/form-card/form-card.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  height: 100%;\n  min-height: 100%;\n}\n\nbody {\n  margin: 0;\n  background-color: #e7e7e7;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* Credit Card */\n\n.credit-card {\n  margin: auto 0;\n  border-radius: 6px;\n  background-color: #fff;\n  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);\n}\n\n.form-header {\n  padding: 20px 30px 0;\n}\n\n.form-body {\n  margin: 10px auto 0;\n  padding: 30px 30px 20px;\n}\n\n/* Title */\n\n.title {\n  margin: 0 15px;\n  color: #5e6977;\n  font-size: 18px;\n}\n\n/* Common */\n\n.card-number,\n.cvv-input ion-input,\n.month ion-select,\n.paypal-btn,\n.proceed-btn,\n.year ion-select {\n  height: 42px;\n}\n\n.card-number,\n.month ion-select,\n.year ion-select {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 14px;\n}\n\n.card-number,\n.cvv-details,\n.cvv-input ion-input,\n.month ion-select,\n.year ion-select {\n  color: #2f2f2f;\n  opacity: 0.7;\n}\n\n/* Card Number */\n\n.card-number {\n  width: 100%;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border: 2px solid #828383;\n  border-radius: 6px;\n}\n\n/* Date Field */\n\n.month ion-select,\n.year ion-select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  width: 92%;\n  border: 2px solid #828383;\n  border-radius: 6px;\n}\n\n.date-field {\n  position: relative;\n}\n\n.date-field ion-row {\n  padding: 0 !important;\n}\n\n.date-field ion-row ion-col {\n  padding: 0 !important;\n}\n\n/* Card Verification Field */\n\n.card-verification .cvv-input ion-input {\n  width: 145px;\n  padding-left: 20px;\n  border: 2px solid #828383;\n  border-radius: 6px;\n  background: #fff;\n}\n\n/* Buttons Section */\n\nion-button {\n  display: block;\n  margin-top: 25px;\n  text-transform: capitalize;\n  font-size: 14px;\n  height: 35px;\n}\n\n.cards_img ion-list {\n  -webkit-column-count: 4;\n     -moz-column-count: 4;\n          column-count: 4;\n}\n\n.cards_img ion-list img {\n  margin: 10 12px;\n  max-width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcHRpb24tcGF5L2Zvcm0tY2FyZC9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcYWNjb3VudFxcb3B0aW9uLXBheVxcZm9ybS1jYXJkXFxmb3JtLWNhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9hY2NvdW50L29wdGlvbi1wYXkvZm9ybS1jYXJkL2Zvcm0tY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBOztFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURFRSxnQkFBQTs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7QUNBSjs7QURHRTtFQUNFLG9CQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FER0UsVUFBQTs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElFLFdBQUE7O0FBRUE7Ozs7OztFQU1FLFlBQUE7QUNGSjs7QURLRTs7O0VBR0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTs7Ozs7RUFLRSxjQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBLGdCQUFBOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUEsZUFBQTs7QUFFQTs7RUFFRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE1FO0VBQ0UscUJBQUE7QUNKSjs7QURNSTtFQUNFLHFCQUFBO0FDSk47O0FEVUEsNEJBQUE7O0FBSUU7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWTjs7QURhQSxvQkFBQTs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNYSjs7QURnQkU7RUFDRSx1QkFBQTtLQUFBLG9CQUFBO1VBQUEsZUFBQTtBQ2JKOztBRGVJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNiTiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvb3B0aW9uLXBheS9mb3JtLWNhcmQvZm9ybS1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZyA6IGJvcmRlci1ib3g7XHJcbn1cclxuICBcclxuYm9keSxcclxuaHRtbCB7XHJcbiAgICBoZWlnaHQgICAgIDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQgOiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbiAgICAgICAgICAgOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNlN2U3ZTc7XHJcbiAgICBmb250LWZhbWlseSAgICAgIDogJ1JvYm90bycsc2Fucy1zZXJpZjtcclxufVxyXG4gICBcclxuICAvKiBDcmVkaXQgQ2FyZCAqL1xyXG4gIFxyXG4gIC5jcmVkaXQtY2FyZCB7XHJcbiAgICBtYXJnaW4gICAgICAgICAgIDogYXV0byAwO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgICA6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdyAgICAgICA6IDFweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMTApO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1oZWFkZXIge1xyXG4gICAgcGFkZGluZyAgICAgICA6IDIwcHggMzBweCAwO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ib2R5IHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XHJcbiAgICBwYWRkaW5nIDogMzBweCAzMHB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRpdGxlICovXHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbiAgICA6IDAgMTVweDtcclxuICAgIGNvbG9yICAgICA6ICM1ZTY5Nzc7XHJcbiAgICBmb250LXNpemUgOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDb21tb24gKi9cclxuICBcclxuICAuY2FyZC1udW1iZXIsXHJcbiAgLmN2di1pbnB1dCBpb24taW5wdXQsXHJcbiAgLm1vbnRoIGlvbi1zZWxlY3QsXHJcbiAgLnBheXBhbC1idG4sXHJcbiAgLnByb2NlZWQtYnRuLFxyXG4gIC55ZWFyIGlvbi1zZWxlY3Qge1xyXG4gICAgaGVpZ2h0IDogNDJweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtbnVtYmVyLFxyXG4gIC5tb250aCBpb24tc2VsZWN0LFxyXG4gIC55ZWFyIGlvbi1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplICAgOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQgOiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodCA6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW51bWJlcixcclxuICAuY3Z2LWRldGFpbHMsXHJcbiAgLmN2di1pbnB1dCBpb24taW5wdXQsXHJcbiAgLm1vbnRoIGlvbi1zZWxlY3QsXHJcbiAgLnllYXIgaW9uLXNlbGVjdCB7XHJcbiAgICBjb2xvciAgIDogIzJmMmYyZjtcclxuICAgIG9wYWNpdHkgOiAuNztcclxuICB9XHJcbiAgXHJcbi8qIENhcmQgTnVtYmVyICovXHJcblxyXG4uY2FyZC1udW1iZXIge1xyXG4gICAgd2lkdGggICAgICAgICA6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdCAgOiAyMHB4O1xyXG4gICAgYm9yZGVyICAgICAgICA6IDJweCBzb2xpZCAjODI4MzgzO1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDZweDtcclxufVxyXG4gIFxyXG4vKiBEYXRlIEZpZWxkICovXHJcblxyXG4ubW9udGggaW9uLXNlbGVjdCxcclxuLnllYXIgaW9uLXNlbGVjdCB7XHJcbiAgLW1vei1hcHBlYXJhbmNlICAgICA6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlICA6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbSAgICAgICA6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0ICAgICAgICA6IDIwcHg7XHJcbiAgd2lkdGggICAgICAgICAgICAgICA6IDkyJTtcclxuICBib3JkZXIgICAgICAgICAgICAgIDogMnB4IHNvbGlkICM4MjgzODM7XHJcbiAgYm9yZGVyLXJhZGl1cyAgICAgICA6IDZweDtcclxufVxyXG4gXHJcbi5kYXRlLWZpZWxkIHsgIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICBpb24tcm93IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIENhcmQgVmVyaWZpY2F0aW9uIEZpZWxkICovXHJcblxyXG4uY2FyZC12ZXJpZmljYXRpb24ge1xyXG5cclxuICAuY3Z2LWlucHV0IGlvbi1pbnB1dCB7XHJcbiAgICAgIHdpZHRoICAgICAgICAgOiAxNDVweDtcclxuICAgICAgcGFkZGluZy1sZWZ0ICA6IDIwcHg7XHJcbiAgICAgIGJvcmRlciAgICAgICAgOiAycHggc29saWQgIzgyODM4MztcclxuICAgICAgYm9yZGVyLXJhZGl1cyA6IDZweDtcclxuICAgICAgYmFja2dyb3VuZCAgICA6ICNmZmY7XHJcbiAgfVxyXG59XHJcbi8qIEJ1dHRvbnMgU2VjdGlvbiAqL1xyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmNhcmRzX2ltZyB7XHJcblxyXG4gIGlvbi1saXN0IHtcclxuICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgIFxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luOiAxMCAxMnB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLyogQ3JlZGl0IENhcmQgKi9cbi5jcmVkaXQtY2FyZCB7XG4gIG1hcmdpbjogYXV0byAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAwO1xufVxuXG4uZm9ybS1ib2R5IHtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDIwcHg7XG59XG5cbi8qIFRpdGxlICovXG4udGl0bGUge1xuICBtYXJnaW46IDAgMTVweDtcbiAgY29sb3I6ICM1ZTY5Nzc7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLyogQ29tbW9uICovXG4uY2FyZC1udW1iZXIsXG4uY3Z2LWlucHV0IGlvbi1pbnB1dCxcbi5tb250aCBpb24tc2VsZWN0LFxuLnBheXBhbC1idG4sXG4ucHJvY2VlZC1idG4sXG4ueWVhciBpb24tc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuXG4uY2FyZC1udW1iZXIsXG4ubW9udGggaW9uLXNlbGVjdCxcbi55ZWFyIGlvbi1zZWxlY3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uY2FyZC1udW1iZXIsXG4uY3Z2LWRldGFpbHMsXG4uY3Z2LWlucHV0IGlvbi1pbnB1dCxcbi5tb250aCBpb24tc2VsZWN0LFxuLnllYXIgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiAjMmYyZjJmO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIENhcmQgTnVtYmVyICovXG4uY2FyZC1udW1iZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjODI4MzgzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi8qIERhdGUgRmllbGQgKi9cbi5tb250aCBpb24tc2VsZWN0LFxuLnllYXIgaW9uLXNlbGVjdCB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiA5MiU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MjgzODM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmRhdGUtZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGF0ZS1maWVsZCBpb24tcm93IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmRhdGUtZmllbGQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4vKiBDYXJkIFZlcmlmaWNhdGlvbiBGaWVsZCAqL1xuLmNhcmQtdmVyaWZpY2F0aW9uIC5jdnYtaW5wdXQgaW9uLWlucHV0IHtcbiAgd2lkdGg6IDE0NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MjgzODM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLyogQnV0dG9ucyBTZWN0aW9uICovXG5pb24tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmNhcmRzX2ltZyBpb24tbGlzdCB7XG4gIGNvbHVtbi1jb3VudDogNDtcbn1cbi5jYXJkc19pbWcgaW9uLWxpc3QgaW1nIHtcbiAgbWFyZ2luOiAxMCAxMnB4O1xuICBtYXgtd2lkdGg6IDcwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/option-pay/form-card/form-card.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/account/option-pay/form-card/form-card.page.ts ***!
    \****************************************************************/

  /*! exports provided: FormCardPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormCardPage", function () {
      return FormCardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../service/server.service */
    "./src/app/service/server.service.ts");

    let FormCardPage = class FormCardPage {
      constructor(server, toastController, loadingController, modalController) {
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.modalController = modalController;
      }

      ngOnInit() {}

      ionViewWillEnter() {
        OpenPay.setId('mhcwrzqbqvnc3urvi8dk');
        OpenPay.setApiKey('pk_f8afc62cdff34f9eb583448fafee399a');
        OpenPay.setSandboxMode(false);
        this.server.userInfo(localStorage.getItem('user_id')).subscribe(response => {
          this.user = response.data;
        });
      }

      createToken(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Guardando datos...'
          });
          yield loading.present();
          let deviceSessionId = OpenPay.deviceData.setup(); // Generamos el token de la tarjeta

          let ParamsToken = {
            "card_number": data.card_number,
            "holder_name": data.holder_name,
            "expiration_year": data.expiration_year,
            "expiration_month": data.expiration_month,
            "cvv2": data.cvv2
          };
          console.log(ParamsToken);
          OpenPay.token.create(ParamsToken, (suc, err) => {
            if (err) {
              this.presentToast(err.message, 'danger');
            } else {
              var cardRequest = {
                'user_id': this.user.id,
                "customer": this.user.customer_id,
                'token_id': suc.data.id,
                'deviceSessionId': deviceSessionId
              }; // Generamos el Token de la tarjeta

              this.server.setCardClient(cardRequest).subscribe(data => {
                loading.dismiss();

                if (data.data != 'error') {
                  // this.loadingCard.dismiss();
                  if (data.data.status == true) {
                    this.presentToast("Tarjeta agregada con exito.", 'success');
                    this.modalController.dismiss();
                  } else {
                    this.presentToast(this.ControlFails(data.data.data.error_code), 'danger');
                  }
                } else {
                  this.presentToast("Algo ha ocurrido mal, por favor vuelve a intentar mas tarde", 'danger');
                }
              });
            }
          });
        });
      }

      ControlFails(code_error) {
        switch (code_error) {
          case 3001:
            return 'La tarjeta fue rechazada.';
            break;

          case 3002:
            return 'La tarjeta ha expirado.';
            break;

          case 3003:
            return 'La tarjeta no tiene fondos suficientes.';
            break;

          case 3004:
            return 'La tarjeta ha sido identificada como una tarjeta robada.';
            break;

          case 3005:
            return 'La tarjeta ha sido rechazada por el sistema antifraudes.';
            break;

          case 1003:
            return 'La tarjeta ha sido rechazada por el sistema antifraudes.';
            break;

          default:
            return 'La tarjeta fue rechazada.';
            break;
        }
      }

      closeForm() {
        this.modalController.dismiss();
      }

      presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 3000,
            position: 'top',
            mode: 'ios',
            color: color
          });
          toast.present();
        });
      }

    };

    FormCardPage.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    FormCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/option-pay/form-card/form-card.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-card.page.scss */
      "./src/app/account/option-pay/form-card/form-card.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], FormCardPage);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: () => __webpack_require__.e(
      /*! import() | home-home-module */
      "home-home-module").then(__webpack_require__.bind(null,
      /*! ./home/home.module */
      "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
    }, {
      path: 'list',
      loadChildren: () => __webpack_require__.e(
      /*! import() | list-list-module */
      "list-list-module").then(__webpack_require__.bind(null,
      /*! ./list/list.module */
      "./src/app/list/list.module.ts")).then(m => m.ListPageModule)
    }, {
      path: 'welcome',
      loadChildren: './welcome/welcome.module#WelcomePageModule'
    }, {
      path: 'city',
      loadChildren: './account/city/city.module#CityPageModule'
    }, {
      path: 'item',
      loadChildren: './item/item.module#ItemPageModule'
    }, {
      path: 'option',
      loadChildren: './option/option.module#OptionPageModule'
    }, {
      path: 'info',
      loadChildren: './info/info.module#InfoPageModule'
    }, {
      path: 'cart',
      loadChildren: './cart/cart.module#CartPageModule'
    }, {
      path: 'offer',
      loadChildren: './offer/offer.module#OfferPageModule'
    }, {
      path: 'login',
      loadChildren: './account/login/login.module#LoginPageModule'
    }, {
      path: 'chkphone',
      loadChildren: './account/chkphone/chkphone.module#ChkphonePageModule'
    }, {
      path: 'verfycode',
      loadChildren: './account/verfycode/verfycode.module#VerfycodePageModule'
    }, {
      path: 'signup',
      loadChildren: './account/signup/signup.module#SignupPageModule'
    }, {
      path: 'forgot',
      loadChildren: './account/forgot/forgot.module#ForgotPageModule'
    }, {
      path: 'address',
      loadChildren: './account/address/address.module#AddressPageModule'
    }, {
      path: 'done',
      loadChildren: './done/done.module#DonePageModule'
    }, {
      path: 'profile',
      loadChildren: './account/profile/profile.module#ProfilePageModule'
    }, {
      path: 'order',
      loadChildren: './account/order/order.module#OrderPageModule'
    }, {
      path: 'rate/:id/:type',
      loadChildren: './account/rate/rate.module#RatePageModule'
    }, {
      path: 'about',
      loadChildren: './page/about/about.module#AboutPageModule'
    }, {
      path: 'how',
      loadChildren: './page/how/how.module#HowPageModule'
    }, {
      path: 'faq',
      loadChildren: './page/faq/faq.module#FaqPageModule'
    }, {
      path: 'contact',
      loadChildren: './page/contact/contact.module#ContactPageModule'
    }, {
      path: 'lang',
      loadChildren: './lang/lang.module#LangPageModule'
    }, {
      path: 'categorys',
      loadChildren: './categorys/categorys.module#CategorysPageModule'
    }, {
      path: 'locked',
      loadChildren: './locked/locked.module#LockedPageModule'
    }, {
      path: 'setaddress',
      loadChildren: () => __webpack_require__.e(
      /*! import() | account-address-setaddress-setaddress-module */
      "account-address-setaddress-setaddress-module").then(__webpack_require__.bind(null,
      /*! ./account/address/setaddress/setaddress.module */
      "./src/app/account/address/setaddress/setaddress.module.ts")).then(m => m.SetaddressPageModule)
    }, {
      path: 'commanded',
      loadChildren: () => Promise.resolve().then(__webpack_require__.bind(null,
      /*! ./commanded/commanded.module */
      "./src/app/commanded/commanded.module.ts")).then(m => m.CommandedPageModule)
    }, {
      path: 'option-pay',
      loadChildren: () => __webpack_require__.e(
      /*! import() | account-option-pay-option-pay-module */
      "account-option-pay-option-pay-module").then(__webpack_require__.bind(null,
      /*! ./account/option-pay/option-pay.module */
      "./src/app/account/option-pay/option-pay.module.ts")).then(m => m.OptionPayPageModule)
    }, {
      path: 'form-card',
      loadChildren: () => Promise.resolve().then(__webpack_require__.bind(null,
      /*! ./account/option-pay/form-card/form-card.module */
      "./src/app/account/option-pay/form-card/form-card.module.ts")).then(m => m.FormCardPageModule)
    }, {
      path: 'info-fee',
      loadChildren: () => Promise.resolve().then(__webpack_require__.bind(null,
      /*! ./cart/info-fee/info-fee.module */
      "./src/app/cart/info-fee/info-fee.module.ts")).then(m => m.InfoFeePageModule)
    }, {
      path: 'waitpage',
      loadChildren: () => __webpack_require__.e(
      /*! import() | waitpage-waitpage-module */
      "waitpage-waitpage-module").then(__webpack_require__.bind(null,
      /*! ./waitpage/waitpage.module */
      "./src/app/waitpage/waitpage.module.ts")).then(m => m.WaitpagePageModule)
    }, {
      path: 'done-comm',
      loadChildren: () => Promise.all(
      /*! import() | done-comm-done-comm-module */
      [__webpack_require__.e("common"), __webpack_require__.e("done-comm-done-comm-module")]).then(__webpack_require__.bind(null,
      /*! ./done-comm/done-comm.module */
      "./src/app/done-comm/done-comm.module.ts")).then(m => m.DoneCommPageModule)
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  font-size: 14px;\n}\n\nion-item ion-icon {\n  font-size: 16px;\n}\n\n.menu_img {\n  width: 70%;\n  margin-left: 10%;\n  padding: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGlvbmljXFxCYWJlbFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsZUFBQTtBQ0FEOztBREdBO0VBRUMsZUFBQTtBQ0REOztBRElBO0VBRUMsVUFBQTtFQUFXLGdCQUFBO0VBQWlCLGtCQUFBO0FDQTdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW1cbntcblx0Zm9udC1zaXplOjE0cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uXG57XG5cdGZvbnQtc2l6ZToxNnB4O1xufVxuXG4ubWVudV9pbWdcbntcblx0d2lkdGg6IDcwJTttYXJnaW4tbGVmdDogMTAlO3BhZGRpbmc6IDEwcHggMTBweDtcbn0iLCJpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tZW51X2ltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/server.service */
    "./src/app/service/server.service.ts");

    let AppComponent = class AppComponent {
      constructor(server, platform, splashScreen, statusBar, nav, oneSignal, events, renderer, _document) {
        this.server = server;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.nav = nav;
        this.oneSignal = oneSignal;
        this.events = events;
        this.renderer = renderer;
        this._document = _document;
        this.appType = 0;
        this.dir = "ltr";
        this.appPages = [];
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        this.events.subscribe('admin', type => {
          this.admin = type;
        });

        if (localStorage.getItem('admin')) {
          this.admin = JSON.parse(localStorage.getItem('admin'));
        } // Cargamos el menu lateral


        this.loadMenu(); // Obtenemos actualizacion del menu

        this.events.subscribe('text', text => {
          this.text = text;
          this.appPages = [{
            title: text.home,
            url: '/home',
            icon: 'home'
          }, {
            title: "Métodos de pago",
            url: '/option-pay',
            icon: 'wallet'
          }, {
            title: text.account,
            url: '/profile',
            icon: 'person'
          }, {
            title: text.order,
            url: '/order',
            icon: 'cart'
          }];
        });
        this.initializeApp();
        this.events.subscribe('user_login', id => {
          this.subPush(id);
        });
      }

      loadMenu() {
        this.appPages = [{
          title: "Inicio",
          url: '/home',
          icon: 'home'
        }, {
          title: "Cuenta",
          url: '/profile',
          icon: 'person'
        }, {
          title: "Métodos de pago",
          url: '/option-pay',
          icon: 'wallet'
        }, {
          title: "Pedidos",
          url: '/order',
          icon: 'cart'
        }];
      }

      initializeApp() {
        this.platform.ready().then(() => {
          this.splashScreen.hide();
          this.statusBar.overlaysWebView(false);
          this.statusBar.backgroundColorByHexString("#ffffff");
          this.statusBar.styleDefault();
        });
      }

      loadData(city_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.data = response.data;
            this.text = response.data.text;
            this.events.publish('text', this.text);
            this.events.publish('admin', response.data.admin);
            this.apiKey = response.data.admin.ApiKey_google;
            this.injectSDK().then(res => {
              // Obtenemos la Geolocalicacion
              if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
                this.server.getGeolocation();
              }
            });
            localStorage.setItem('app_text', JSON.stringify(response.data.text));
            localStorage.setItem('admin', JSON.stringify(response.data.admin)); // Registramos en oneSignal

            this.subPush();
          });
        });
      }

      subPush(id = 0) {
        this.oneSignal.startInit('e1e128a0-915b-44b4-9c41-0899eace7cf9', '603854625473');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {// do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(() => {// do something when a notification is opened
        });

        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
          this.oneSignal.sendTags({
            user_id: localStorage.getItem('user_id')
          });
          this.nav.navigateRoot('/home');
        } else {
          this.nav.navigateRoot('/welcome');
        }

        if (id > 0) this.oneSignal.sendTags({
          user_id: id
        });
        this.oneSignal.endInit();
      }

      logout() {
        localStorage.setItem('user_id', null);
        localStorage.removeItem('user_id');
        this.nav.navigateRoot('/welcome');
      }

      injectSDK() {
        return new Promise((resolve, reject) => {
          window['mapInit'] = () => {
            resolve(true);
          };

          let script = this.renderer.createElement('script');
          script.id = 'googleMaps';

          if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places&key=' + this.apiKey;
          } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places';
          }

          this.renderer.appendChild(this._document.body, script);
        });
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_7__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }, {
      type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
    }, {
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_7__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
    /* harmony import */


    var _option_option_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./option/option.module */
    "./src/app/option/option.module.ts");
    /* harmony import */


    var _offer_offer_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./offer/offer.module */
    "./src/app/offer/offer.module.ts");
    /* harmony import */


    var _commanded_commanded_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./commanded/commanded.module */
    "./src/app/commanded/commanded.module.ts");
    /* harmony import */


    var _account_option_pay_form_card_form_card_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./account/option-pay/form-card/form-card.module */
    "./src/app/account/option-pay/form-card/form-card.module.ts");
    /* harmony import */


    var _cart_info_fee_info_fee_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./cart/info-fee/info-fee.module */
    "./src/app/cart/info-fee/info-fee.module.ts");
    /* harmony import */


    var _done_comm_rate_tripe_rate_tripe_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./done-comm/rate-tripe/rate-tripe.module */
    "./src/app/done-comm/rate-tripe/rate-tripe.module.ts");
    /* harmony import */


    var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ionic-native/sms-retriever/ngx */
    "./node_modules/@ionic-native/sms-retriever/ngx/index.js"); // Material Design
    // Facebook
    // Firebase
    // ModalBox
    // SMS Retreiver


    firebase_app__WEBPACK_IMPORTED_MODULE_24__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebaseConfig);
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], // ModalBox
      _option_option_module__WEBPACK_IMPORTED_MODULE_26__["OptionPageModule"], _offer_offer_module__WEBPACK_IMPORTED_MODULE_27__["OfferPageModule"], _commanded_commanded_module__WEBPACK_IMPORTED_MODULE_28__["CommandedPageModule"], _account_option_pay_form_card_form_card_module__WEBPACK_IMPORTED_MODULE_29__["FormCardPageModule"], _cart_info_fee_info_fee_module__WEBPACK_IMPORTED_MODULE_30__["InfoFeePageModule"], _done_comm_rate_tripe_rate_tripe_module__WEBPACK_IMPORTED_MODULE_31__["RateTripePageModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_18__["NativeGeocoder"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_16__["PayPal"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__["OneSignal"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_19__["Keyboard"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_20__["Facebook"], _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_32__["SmsRetriever"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_25__["FirebaseAuthentication"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cart/info-fee/info-fee-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/cart/info-fee/info-fee-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: InfoFeePageRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoFeePageRoutingModule", function () {
      return InfoFeePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _info_fee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./info-fee.page */
    "./src/app/cart/info-fee/info-fee.page.ts");

    const routes = [{
      path: '',
      component: _info_fee_page__WEBPACK_IMPORTED_MODULE_3__["InfoFeePage"]
    }];
    let InfoFeePageRoutingModule = class InfoFeePageRoutingModule {};
    InfoFeePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InfoFeePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cart/info-fee/info-fee.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/cart/info-fee/info-fee.module.ts ***!
    \**************************************************/

  /*! exports provided: InfoFeePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoFeePageModule", function () {
      return InfoFeePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _info_fee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-fee-routing.module */
    "./src/app/cart/info-fee/info-fee-routing.module.ts");
    /* harmony import */


    var _info_fee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./info-fee.page */
    "./src/app/cart/info-fee/info-fee.page.ts");

    let InfoFeePageModule = class InfoFeePageModule {};
    InfoFeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_fee_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoFeePageRoutingModule"]],
      declarations: [_info_fee_page__WEBPACK_IMPORTED_MODULE_6__["InfoFeePage"]]
    })], InfoFeePageModule);
    /***/
  },

  /***/
  "./src/app/cart/info-fee/info-fee.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/cart/info-fee/info-fee.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  box-shadow: none;\n}\nion-card ion-card-content ion-button {\n  margin-top: 20px;\n  font-size: 14px;\n  height: 35px;\n  border-radius: 25px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9pbmZvLWZlZS9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcY2FydFxcaW5mby1mZWVcXGluZm8tZmVlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydC9pbmZvLWZlZS9pbmZvLWZlZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQ0FKO0FESVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvY2FydC9pbmZvLWZlZS9pbmZvLWZlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogIG5vbmU7XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cart/info-fee/info-fee.page.ts":
  /*!************************************************!*\
    !*** ./src/app/cart/info-fee/info-fee.page.ts ***!
    \************************************************/

  /*! exports provided: InfoFeePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoFeePage", function () {
      return InfoFeePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let InfoFeePage = class InfoFeePage {
      constructor(modalController) {
        this.modalController = modalController;
      }

      ngOnInit() {}

      closeModal() {
        this.modalController.dismiss();
      }

    };

    InfoFeePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    InfoFeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info-fee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info-fee.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/info-fee/info-fee.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info-fee.page.scss */
      "./src/app/cart/info-fee/info-fee.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], InfoFeePage);
    /***/
  },

  /***/
  "./src/app/commanded/commanded-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/commanded/commanded-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: CommandedPageRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandedPageRoutingModule", function () {
      return CommandedPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _commanded_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./commanded.page */
    "./src/app/commanded/commanded.page.ts");

    const routes = [{
      path: '',
      component: _commanded_page__WEBPACK_IMPORTED_MODULE_3__["CommandedPage"]
    }];
    let CommandedPageRoutingModule = class CommandedPageRoutingModule {};
    CommandedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommandedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/commanded/commanded.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/commanded/commanded.module.ts ***!
    \***********************************************/

  /*! exports provided: CommandedPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandedPageModule", function () {
      return CommandedPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _commanded_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./commanded-routing.module */
    "./src/app/commanded/commanded-routing.module.ts");
    /* harmony import */


    var _commanded_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./commanded.page */
    "./src/app/commanded/commanded.page.ts");

    let CommandedPageModule = class CommandedPageModule {};
    CommandedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _commanded_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommandedPageRoutingModule"]],
      declarations: [_commanded_page__WEBPACK_IMPORTED_MODULE_6__["CommandedPage"]]
    })], CommandedPageModule);
    /***/
  },

  /***/
  "./src/app/commanded/commanded.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/commanded/commanded.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-buttons:first-child {\n  margin-right: 0 !important;\n}\nion-header ion-toolbar ion-buttons:last-child {\n  margin-left: 0 !important;\n}\nion-header ion-toolbar ion-buttons ion-title ion-icon {\n  font-size: 22px;\n  margin: 6px 0px;\n  padding: 8px;\n  border-radius: 50%;\n  background-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);\n}\nion-header ion-toolbar ion-buttons ion-searchbar {\n  margin-top: 12px;\n}\n.title {\n  box-shadow: none;\n}\n.from_to {\n  padding: 4px 15px;\n  border-radius: 15px;\n}\n.from_to ion-item {\n  --padding-start:0 !important;\n  --inner-padding-end:0 !important;\n  --padding-bottom: 8px;\n  --padding-top:8px;\n}\n.from_to ion-item:first-child {\n  border-bottom: 1px solid #54d854;\n}\n.costes {\n  padding: 4px 15px;\n  border-radius: 15px;\n}\n.costes:first-child {\n  margin-top: 50px;\n}\n.type_pay ion-card-header ion-card-subtitle h2 {\n  font-size: 14px;\n}\n.foot {\n  box-shadow: none;\n  padding: 0 15px;\n}\n.foot p {\n  padding: 15px 0;\n  color: #747474;\n}\n.foot ion-button {\n  --border-radius:15px;\n  text-transform: none;\n  font-size: 12px;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWFuZGVkL0M6XFxpb25pY1xcQmFiZWxcXHVzdWFyaW9zL3NyY1xcYXBwXFxjb21tYW5kZWRcXGNvbW1hbmRlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbW1hbmRlZC9jb21tYW5kZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9ZO0VBQ0ksMEJBQUE7QUNOaEI7QURTWTtFQUNJLHlCQUFBO0FDUGhCO0FEV2dCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtBQ1RwQjtBRGFZO0VBQ0ksZ0JBQUE7QUNYaEI7QURpQkE7RUFDSSxnQkFBQTtBQ2RKO0FEaUJBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ2RKO0FEZ0JJO0VBQ0ksNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNkUjtBRGlCUTtFQUNJLGdDQUFBO0FDZlo7QURvQkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDakJKO0FEbUJJO0VBQ0ksZ0JBQUE7QUNqQlI7QUR5Qlk7RUFDSSxlQUFBO0FDdEJoQjtBRDRCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ3pCSjtBRDJCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDekJSO0FENEJJO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDMUJSIiwiZmlsZSI6InNyYy9hcHAvY29tbWFuZGVkL2NvbW1hbmRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWhlYWRlciB7XHJcblxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZnJvbV90byB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6OHB4O1xyXG5cclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODQsIDIxNiwgODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvc3RlcyB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnR5cGVfcGF5IHtcclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICBjb2xvcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tdGl0bGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogNnB4IDBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4wNyk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4udGl0bGUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZnJvbV90byB7XG4gIHBhZGRpbmc6IDRweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmZyb21fdG8gaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6MCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOjAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctdG9wOjhweDtcbn1cbi5mcm9tX3RvIGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NGQ4NTQ7XG59XG5cbi5jb3N0ZXMge1xuICBwYWRkaW5nOiA0cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jb3N0ZXM6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udHlwZV9wYXkgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9vdCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5mb290IHAge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuLmZvb3QgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/commanded/commanded.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/commanded/commanded.page.ts ***!
    \*********************************************/

  /*! exports provided: CommandedPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandedPage", function () {
      return CommandedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    let CommandedPage = class CommandedPage {
      constructor(modalController, nav, server, geolocation, zone, nativeGeocoder, toastController, loadingController, alertController, payPal) {
        this.modalController = modalController;
        this.nav = nav;
        this.server = server;
        this.geolocation = geolocation;
        this.zone = zone;
        this.nativeGeocoder = nativeGeocoder;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.payPal = payPal;
        this.MyLocation = [];
        this.step_comm = 0;
        this.text_address = "Punto de recolección";
        this.first_instr = "";
        this.second_instr = "";
        this.ready = false;
        this.stripeView = false;
        this.cardData = [];
        this.chargeInProcess = false;
      }

      ngOnInit() {
        OpenPay.setId('mhcwrzqbqvnc3urvi8dk');
        OpenPay.setApiKey('pk_f8afc62cdff34f9eb583448fafee399a');
        OpenPay.setSandboxMode(false);
      }

      ionViewWillEnter() {
        let flag = true;
        this.admin = JSON.parse(localStorage.getItem('admin'));
        this.autocomplete = {
          input: ''
        };
        this.searchQuery = null;
        this.hasSearch = false;
        this.autocompleteItems = [];
        this.send_terminal = this.admin.send_terminal;
        this.comm_stripe = this.admin.comm_stripe;
        if (this.admin.paypal_client_id) this.paypal_id = this.admin.paypal_client_id;
        if (this.admin.stripe_client_id) this.stripe_id = this.admin.stripe_client_id; // Si no cuenta con metodo de pago predeterminado Redireccionamos

        if (!localStorage.getItem('otype_user') && localStorage.getItem('otype_user') == null) {
          flag = false;
          this.presentToast("Agrega un método de pago predeterminado.", 'warning');
          this.nav.navigateForward('/option-pay');
        } else {
          this.otype = JSON.parse(localStorage.getItem('otype_user'));

          if (this.otype == 3) {
            // Si el metodo de pago es tarjeta D/B la obtenemos
            if (localStorage.getItem('cardPredClient') && localStorage.getItem('cardPredClient') != null) {
              this.getCard(localStorage.getItem('cardPredClient'));
            } else {
              this.presentToast("Agrega un método de pago predeterminado.", 'warning');
              this.nav.navigateForward('/option-pay');
            }
          }
        }

        this.loadData();
      }

      getCard(cardId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Obtenemos la info del usuario
          this.server.userInfo(localStorage.getItem('user_id')).subscribe(response => {
            this.user = response.data;
            let allData = {
              'customer': response.data.customer_id,
              'cardId': cardId
            };
            this.server.getCard(allData).subscribe(data => {
              if (data.data.status == true) {
                this.cardData = data.data.data;
              } else {
                this.presentToast(data.data.description, 'danger');
              }
            });
          });
        });
      }

      loadData() {
        this.server.getAllAdress(localStorage.getItem('user_id')).subscribe(response => {
          this.address = response.data;
        }); // Obtenemos la ubicación actual

        this.geolocation.getCurrentPosition().then(resp => {
          this.lat = resp.coords.latitude;
          this.lng = resp.coords.longitude;
          this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        }).catch(error => {});
      }

      getAddressFromCoords(lattitude, longitude) {
        this.server.GeocodeFromCoords(lattitude, longitude, this.admin.ApiKey_google).subscribe(data => {
          let formatted_address = data.results[0].formatted_address;
          this.LocationNow = formatted_address;
          this.MyLocation.push({
            "lat": data.results[0].geometry.location.lat,
            "lng": data.results[0].geometry.location.lng,
            "address": this.LocationNow
          });
        });
      }

      search(ev) {
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        var val = ev.target.value;

        if (val && val.length > 0) {
          this.data = null;
          this.hasSearch = val;

          if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
          }

          this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.input,
            location: new google.maps.LatLng(this.lat, this.lng),
            radius: 10
          }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
              predictions.forEach(prediction => {
                this.autocompleteItems.push(prediction);
              });
            });
          });
        } else {
          this.ngOnInit();
          this.hasSearch = false;
        }
      }

      clearSearch() {
        this.searchQuery = null;
        this.hasSearch = false;
        this.autocompleteItems = [];
        this.autocomplete = {
          input: ''
        };
      }

      SelectSearchResult(item) {
        if (this.set_type_address == 'origin') {
          this.address_origin = item.description;
          this.step_comm = 2;
          this.chargeMap(this.address_origin, 'address_origin');
        } else {
          this.address_destin = item.description;
          this.step_comm = 3;
          this.chargeMap(this.address_destin, 'address_destin');
        }
      }

      saveAddress(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.set_type_address == 'origin') {
            this.address_origin = item.address;
            this.step_comm = 2;
            this.chargeMap(this.address_origin, 'address_origin');
          } else {
            this.address_destin = item.address;
            this.step_comm = 3;
            this.chargeMap(this.address_destin, 'address_destin');
          }
        });
      }

      removeAddress(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            mode: 'ios'
          });
          yield loading.present();
          this.server.trashAddress(id).subscribe(data => {
            loading.dismiss();

            if (data) {
              this.presentToast("La dirección se ha eliminado...", 'success');
              this.clearSearch();
            } else {
              this.presentToast(data, 'danger');
            }
          });
        });
      }

      next_step(step) {
        if (step == 'back') {
          this.step_comm = Number(this.step_comm) - 1;
        }

        if (step == "add_origin") {
          this.step_comm = 1;
          this.set_type_address = "origin";
          this.text_address = "Punto de recogida";
          this.clearSearch();
          setTimeout(() => {
            this.searchad.setFocus();
          }, 400);
        } else if (step == "add_destin") {
          if (this.address_origin) {
            this.set_type_address = "destination";
            this.text_address = "Punto de entrega";
            this.step_comm = 1;
            this.clearSearch();
            setTimeout(() => {
              this.searchad.setFocus();
            }, 400);
          } else {
            this.presentToast("Ingresa un punto de partida", 'danger');
            this.next_step('add_origin');
          }
        } else if (step == 'ready') {
          this.step_comm = 0;
          setTimeout(() => {
            // Cargamos costos de envio
            this.ViewCostShipCommanded();
          }, 500);
        }
      }

      ViewCostShipCommanded() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            mode: 'ios'
          });
          yield loading.present();
          let allData = {
            lat_orig: this.lat_orig,
            lng_orig: this.lng_orig,
            lat_dest: this.lat_dest,
            lng_dest: this.lng_dest
          };
          this.server.ViewCostShipCommanded(allData).subscribe(data => {
            loading.dismiss();

            if (data.data.service == 1) {
              this.ready = true;
              this.cost_ship = data.data;
              this.total_amount = data.data.costs_ship;
            } else {
              this.presentToast("No se ha podido calcular los cargos de envio", 'danger');
            }
          });
        });
      }

      chargeMap(address, type) {
        // Obtenemos las coordenadas de la direccion de recogida
        this.server.GeocodeFromAddress(address, this.admin.ApiKey_google).subscribe(data => {
          if (data.status != 'ZERO_RESULTS') {
            if (type == 'address_origin') {
              this.lat_orig = data.results[0].geometry.location.lat;
              this.lng_orig = data.results[0].geometry.location.lng;
            } else {
              this.lat_dest = data.results[0].geometry.location.lat;
              this.lng_dest = data.results[0].geometry.location.lng;
            }
          } else {
            this.presentToast("No se encontraro resultado de busqueda", 'danger');
            this.step_comm = 1;
          }
        });
      }

      closeComm() {
        this.nav.navigateRoot('/home');
      }

      makeOrder() {
        if (this.otype == 2) {
          this.payPaypal();
        } else if (this.otype == 3) {
          this.chargeInProcess = true;
          this.payWithOpenPay();
        } else {
          this.order();
        }
      }

      order() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            mode: 'ios'
          });
          yield loading.present();
          let allData = {
            address_origin: this.address_origin,
            lat_orig: this.lat_orig,
            lng_orig: this.lng_orig,
            address_destin: this.address_destin,
            lat_dest: this.lat_dest,
            lng_dest: this.lng_dest,
            first_instr: this.first_instr,
            second_instr: this.second_instr,
            user_id: localStorage.getItem('user_id'),
            price_comm: this.iva_stripe,
            payment_method: this.otype,
            payment_id: this.payment_id,
            d_charges: this.cost_ship['costs_ship'],
            total: this.total_amount
          };
          this.server.OrderComm(allData).subscribe(data => {
            loading.dismiss();

            if (data.data == 'done') {
              this.presentToast("Tu solicitud ha sido enviada", 'success');
              this.nav.navigateRoot('/done-comm');
            } else {
              this.presentToast("Ha ocurrido un problema con el servido, por favor intente mas tarde.", 'danger');
              this.nav.navigateRoot('/home');
            }
          });
        });
      }

      payPaypal() {
        this.payPal.init({
          PayPalEnvironmentProduction: this.paypal_id,
          PayPalEnvironmentSandbox: this.paypal_id
        }).then(() => {
          // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
          this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPalConfiguration"]({// Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
          })).then(() => {
            let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPalPayment"](this.total_amount, 'MXN', 'Description', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then(res => {
              this.payment_id = res.response.id;

              if (this.payment_id) {
                this.order();
              }
            }, () => {
              this.presentToast("Paypal Transaction Cancelled", "danger");
            });
          }, () => {
            this.presentToast("Error in configuration", "danger");
          });
        }, () => {
          this.presentToast("Error in initialization, maybe PayPal isn't supported", "danger");
        });
      }

      payWithOpenPay() {
        if (this.cardData) {
          // Obtenemos el Customer
          let dat = {
            'customer': this.user.customer_id
          };
          this.server.getClient(dat).subscribe(customer => {
            if (customer.data.status == true) {
              var deviceSessionId = OpenPay.deviceData.setup();
              let order_id = (deviceSessionId + Math.floor(Math.random() * 2000000000) + 1).toString().substring(1);
              let allData = {
                'source_id': this.cardData['id'],
                'amount': this.data.total,
                'order_id': order_id,
                'device_session_id': deviceSessionId,
                'customer_id': this.user.customer_id
              };
              this.server.chargeClient(allData).subscribe(data => {
                this.chargeInProcess = false;

                if (data.data.status == true) {
                  this.presentToast("Pago aprobado con éxito.", 'success');
                  this.payment_id = data.data.data.id;
                  this.order();
                } else {
                  this.presentToast(data.data.data.description, 'danger');
                }
              });
            } else {
              this.presentToast(customer.data.data.description, 'danger');
            }
          });
        }
      }

      makePayment(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Enviando Informacion...',
            mode: 'ios'
          });
          yield loading.present();
          this.server.makeStripePayment("?token=" + token + "&amount=" + this.total_amount).subscribe(response => {
            if (response.data == "done") {
              this.payment_id = response.id;

              if (this.payment_id) {
                this.order();
              }
            } else {
              this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.", "danger");
            }

            loading.dismiss();
          });
        });
      }

      presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 2000,
            position: 'top',
            color: color
          });
          toast.present();
        });
      }

    };

    CommandedPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPal"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("searchad", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])], CommandedPage.prototype, "searchad", void 0);
    CommandedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-commanded',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./commanded.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/commanded/commanded.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./commanded.page.scss */
      "./src/app/commanded/commanded.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPal"]])], CommandedPage);
    /***/
  },

  /***/
  "./src/app/done-comm/rate-tripe/rate-tripe-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/done-comm/rate-tripe/rate-tripe-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RateTripePageRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateTripePageRoutingModule", function () {
      return RateTripePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _rate_tripe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rate-tripe.page */
    "./src/app/done-comm/rate-tripe/rate-tripe.page.ts");

    const routes = [{
      path: '',
      component: _rate_tripe_page__WEBPACK_IMPORTED_MODULE_3__["RateTripePage"]
    }];
    let RateTripePageRoutingModule = class RateTripePageRoutingModule {};
    RateTripePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RateTripePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/done-comm/rate-tripe/rate-tripe.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/done-comm/rate-tripe/rate-tripe.module.ts ***!
    \***********************************************************/

  /*! exports provided: RateTripePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateTripePageModule", function () {
      return RateTripePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _rate_tripe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rate-tripe-routing.module */
    "./src/app/done-comm/rate-tripe/rate-tripe-routing.module.ts");
    /* harmony import */


    var _rate_tripe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rate-tripe.page */
    "./src/app/done-comm/rate-tripe/rate-tripe.page.ts");

    let RateTripePageModule = class RateTripePageModule {};
    RateTripePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rate_tripe_routing_module__WEBPACK_IMPORTED_MODULE_5__["RateTripePageRoutingModule"]],
      declarations: [_rate_tripe_page__WEBPACK_IMPORTED_MODULE_6__["RateTripePage"]]
    })], RateTripePageModule);
    /***/
  },

  /***/
  "./src/app/done-comm/rate-tripe/rate-tripe.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/done-comm/rate-tripe/rate-tripe.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".success {\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  box-shadow: none;\n  position: relative;\n}\n.success ion-card-header {\n  text-align: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: #000;\n}\n.success ion-card-header img {\n  width: 80%;\n  margin: auto;\n}\n.success ion-card-header ion-card-title {\n  font-weight: 700;\n  font-size: 26px;\n}\n.success ion-card-content .btn {\n  margin-top: 25px;\n}\n.success ion-card-content .btn ion-button {\n  width: 100%;\n  height: 50px;\n}\n.success ion-card-content .btn ion-button.light {\n  --background:var(--bglight);\n  color: #000;\n}\n.container {\n  width: 100%;\n  padding: 0 0;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  width: 2px;\n  height: 100%;\n  background: #CCD1D9;\n  z-index: 1;\n}\n.timeline-block {\n  width: calc(50% + 8px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  clear: both;\n}\n.timeline-block-right {\n  float: right;\n}\n.marker {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid #F5F7FA;\n  background: #4FC1E9;\n  margin-top: 10px;\n  z-index: 9999;\n}\n.timeline-content {\n  width: 95%;\n  padding: 0 15px;\n  color: #666;\n}\n.timeline-content p {\n  font-size: 14px;\n  line-height: 1.5em;\n  word-spacing: 1px;\n  color: #888;\n}\n@media screen and (max-width: 768px) {\n  .container:before {\n    left: 8px;\n    width: 2px;\n  }\n\n  .timeline-block {\n    width: 100%;\n  }\n\n  .timeline-block-right {\n    float: none;\n  }\n\n  .timeline-block-left {\n    float: none;\n    direction: ltr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZS1jb21tL3JhdGUtdHJpcGUvQzpcXGlvbmljXFxCYWJlbFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGRvbmUtY29tbVxccmF0ZS10cmlwZVxccmF0ZS10cmlwZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmUtY29tbS9yYXRlLXRyaXBlL3JhdGUtdHJpcGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQVI7QURFUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQVo7QURHUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0RaO0FET1E7RUFDSSxnQkFBQTtBQ0xaO0FET1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0xoQjtBRE9nQjtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtBQ0xwQjtBRFlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ1RKO0FEV0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNUUjtBRGNBO0VBR0ksc0JBQUE7RUFDQSxvQkFBQTtFQUdBLGFBQUE7RUFDQSx5QkFBQTtFQUdBLDhCQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEY0E7RUFDSSxZQUFBO0FDWEo7QURlQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDWko7QURlQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEZUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNaSjtBRGdCQTtFQUNJO0lBQ0csU0FBQTtJQUNBLFVBQUE7RUNiTDs7RURlRTtJQUNHLFdBQUE7RUNaTDs7RURjRTtJQUNHLFdBQUE7RUNYTDs7RURjRTtJQUNHLFdBQUE7SUFDQSxjQUFBO0VDWEw7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmUtY29tbS9yYXRlLXRyaXBlL3JhdGUtdHJpcGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcblxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6dmFyKC0tYmdsaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0NDRDFEOTtcclxuICAgICAgICB6LWluZGV4OiAxXHJcbiAgICB9XHJcbn1cclxuIFxyXG4gXHJcbi50aW1lbGluZS1ibG9jayB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDUwJSArIDhweCk7XHJcbiAgICB3aWR0aDogLW1vei1jYWxjKDUwJSArIDhweCk7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgKyA4cHgpO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuIFxyXG4udGltZWxpbmUtYmxvY2stcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiBcclxuXHJcbi5tYXJrZXIge1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjVGN0ZBO1xyXG4gICAgYmFja2dyb3VuZDogIzRGQzFFOTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5XHJcbn1cclxuIFxyXG4udGltZWxpbmUtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgY29sb3I6ICM2NjZcclxufVxyXG4gIFxyXG4udGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHdvcmQtc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbn1cclxuIFxyXG4gXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyOmJlZm9yZSB7XHJcbiAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWJsb2NrIHtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcclxuICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gXHJcbiAgICAudGltZWxpbmUtYmxvY2stbGVmdCB7XHJcbiAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgfVxyXG59IiwiLnN1Y2Nlc3Mge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdWNjZXNzIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5zdWNjZXNzIGlvbi1jYXJkLWhlYWRlciBpbWcge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uc3VjY2VzcyBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI2cHg7XG59XG4uc3VjY2VzcyBpb24tY2FyZC1jb250ZW50IC5idG4ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnN1Y2Nlc3MgaW9uLWNhcmQtY29udGVudCAuYnRuIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLnN1Y2Nlc3MgaW9uLWNhcmQtY29udGVudCAuYnRuIGlvbi1idXR0b24ubGlnaHQge1xuICAtLWJhY2tncm91bmQ6dmFyKC0tYmdsaWdodCk7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgei1pbmRleDogMTtcbn1cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0NDRDFEOTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRpbWVsaW5lLWJsb2NrIHtcbiAgd2lkdGg6IC13ZWJraXQtY2FsYyg1MCUgKyA4cHgpO1xuICB3aWR0aDogLW1vei1jYWxjKDUwJSArIDhweCk7XG4gIHdpZHRoOiBjYWxjKDUwJSArIDhweCk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWFya2VyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRjVGN0ZBO1xuICBiYWNrZ3JvdW5kOiAjNEZDMUU5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4udGltZWxpbmUtY29udGVudCB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi50aW1lbGluZS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgbGVmdDogOHB4O1xuICAgIHdpZHRoOiAycHg7XG4gIH1cblxuICAudGltZWxpbmUtYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC50aW1lbGluZS1ibG9jay1sZWZ0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/done-comm/rate-tripe/rate-tripe.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/done-comm/rate-tripe/rate-tripe.page.ts ***!
    \*********************************************************/

  /*! exports provided: RateTripePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateTripePage", function () {
      return RateTripePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let RateTripePage = class RateTripePage {
      constructor(loadingController, toastController, modalController, server, nav) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.server = server;
        this.nav = nav;
        this.star = 0;
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {
        this.data = JSON.parse(this.data_post);
        console.log(this.data);
      }

      setStar(val) {
        this.star = val;
      }

      giveRating(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.star == 0) {
            this.presentToast('Seleccione cualquier calificación para continuar.', 'warning');
          } else {
            const loading = yield this.loadingController.create({
              message: 'Enviando Calificación',
              duration: 3000
            });
            yield loading.present();
            var allData = {
              comment: data.comment,
              user_id: localStorage.getItem('user_id'),
              star: this.star,
              oid: this.data.event.id,
              d_boy: this.data.dboy.id,
              good_attention: data.good_attention,
              efficient_delivery: data.efficient_delivery,
              covid_prevention: data.covid_prevention,
              covid_prevention_product: data.covid_prevention_product
            };
            this.server.rateComm_event(allData).subscribe(response => {
              loading.dismiss();
              this.presentToast('¡Gracias! Calificación enviada con éxito.', 'success');
              this.modalController.dismiss();
            });
          }
        });
      }

      presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 2000,
            position: 'top',
            color: color
          });
          toast.present();
        });
      }

    };

    RateTripePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RateTripePage.prototype, "data_post", void 0);
    RateTripePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-rate-tripe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate-tripe.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/rate-tripe/rate-tripe.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate-tripe.page.scss */
      "./src/app/done-comm/rate-tripe/rate-tripe.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _service_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], RateTripePage);
    /***/
  },

  /***/
  "./src/app/offer/offer.module.ts":
  /*!***************************************!*\
    !*** ./src/app/offer/offer.module.ts ***!
    \***************************************/

  /*! exports provided: OfferPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferPageModule", function () {
      return OfferPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offer.page */
    "./src/app/offer/offer.page.ts");

    const routes = [{
      path: '',
      component: _offer_page__WEBPACK_IMPORTED_MODULE_6__["OfferPage"]
    }];
    let OfferPageModule = class OfferPageModule {};
    OfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_6__["OfferPage"]]
    })], OfferPageModule);
    /***/
  },

  /***/
  "./src/app/offer/offer.page.scss":
  /*!***************************************!*\
    !*** ./src/app/offer/offer.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmVyL29mZmVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/offer/offer.page.ts":
  /*!*************************************!*\
    !*** ./src/app/offer/offer.page.ts ***!
    \*************************************/

  /*! exports provided: OfferPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferPage", function () {
      return OfferPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let OfferPage = class OfferPage {
      constructor(loadingController, server, route, nav, toastController, modalController) {
        this.loadingController = loadingController;
        this.server = server;
        this.route = route;
        this.nav = nav;
        this.toastController = toastController;
        this.modalController = modalController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {
        this.loadData();
      }

      loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Please wait...',
            mode: 'ios'
          });
          yield loading.present();
          this.server.getOffer(localStorage.getItem('cart_no') + "?user_id=" + localStorage.getItem('user_id')).subscribe(response => {
            console.log(response);
            this.data = response.data;
            loading.dismiss();
          });
        });
      }

      applyNow(cdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            id: cdata
          });
        });
      }

      closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            id: false
          });
        });
      }

    };

    OfferPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    OfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offer.page.scss */
      "./src/app/offer/offer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], OfferPage);
    /***/
  },

  /***/
  "./src/app/option/option.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/option/option.module.ts ***!
    \*****************************************/

  /*! exports provided: OptionPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPageModule", function () {
      return OptionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _option_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./option.page */
    "./src/app/option/option.page.ts");

    const routes = [{
      path: '',
      component: _option_page__WEBPACK_IMPORTED_MODULE_10__["OptionPage"]
    }];
    let OptionPageModule = class OptionPageModule {};
    OptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_option_page__WEBPACK_IMPORTED_MODULE_10__["OptionPage"]]
    })], OptionPageModule);
    /***/
  },

  /***/
  "./src/app/option/option.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/option/option.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --position:relative;\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --color:#fff;\n}\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: #fff;\n  color: #000;\n  padding-top: 8px;\n}\n\n.show-background .title_header {\n  display: block;\n}\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none;\n}\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n  padding-bottom: 50px;\n}\n\n.footer-line {\n  width: 100%;\n  height: 100px;\n}\n\n.quantityinput {\n  padding: 13px 10px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fff;\n  width: 48px;\n}\n\n.quantitybtn .sign {\n  padding: 15px 10px;\n  width: 40px;\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n\n.quantitybtn .plus {\n  background: #0a0a0a;\n  border: 1px solid #0a0a0a;\n  color: #fff;\n  border-radius: 10px 0px 0px 10px;\n}\n\n.quantitybtn .minus {\n  background: #533186;\n  border: 1px solid #533186;\n  color: #fff;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.arrow-back {\n  float: left;\n  left: 0;\n  font-size: 22px;\n  padding: 2px 4px;\n  border-radius: 10px;\n  background-color: #533186;\n  color: #ffffff;\n}\n\nion-footer {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-footer ion-button {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  --border-radius:12px;\n  text-align: center;\n}\n\nion-footer ion-button ion-text {\n  position: absolute;\n  left: 10px;\n  background: #2f1b4e;\n  color: #fff;\n  font-size: 14px;\n  padding: 6px 8px;\n  border-radius: 8px;\n}\n\nion-footer ion-button span {\n  position: absolute;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uL0M6XFxpb25pY1xcQmFiZWxcXHVzdWFyaW9zL3NyY1xcYXBwXFxvcHRpb25cXG9wdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL29wdGlvbi9vcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDRyx5QkFBQTtFQUNILHdDQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBLHVDQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDSCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENDO0VBQ0MsY0FBQTtBQ0NGOztBREdBLCtCQUFBOztBQUNBO0VBQ0ksc0JBQUE7QUNBSjs7QURHQSxnQ0FBQTs7QUFDQTtFQUNJLGlCQUFBO0FDQUo7O0FESUE7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtBQ0REOztBRElBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7QUNERDs7QURNQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0hEOztBRE1BO0VBQ0Msa0JBQUE7RUFBbUIsV0FBQTtFQUNuQixrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNGRDs7QURLQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNGRDs7QURLQTtFQUVDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNIRDs7QURPQTtFQUNDLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNKRDs7QURPQTtFQUNJLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSko7O0FETUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0pSOztBRE1RO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKWjs7QURPUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvb3B0aW9uL29wdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcblx0LS1wb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHQtLWNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cclxuLnNob3ctYmFja2dyb3VuZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuXHQudGl0bGVfaGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDowO1xyXG5cdHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnF1YW50aXR5aW5wdXR7XHJcblx0cGFkZGluZzoxM3B4IDEwcHg7IFxyXG5cdHRleHQtYWxpZ246Y2VudGVyOyBcclxuXHRib3JkZXI6MXB4IHNvbGlkICNjY2M7ICBcclxuXHRiYWNrZ3JvdW5kOiNmZmY7IFxyXG5cdHdpZHRoOjQ4cHg7XHJcbn1cclxuXHJcbi5xdWFudGl0eWJ0biAuc2lnbntcclxuXHRwYWRkaW5nOjE1cHggMTBweDsgd2lkdGg6NDBweDsgXHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7IFxyXG5cdGN1cnNvcjpwb2ludGVyOyBcclxuXHRmb250LXdlaWdodDpib2xkOyBcclxuXHRvdXRsaW5lOm5vbmU7IFxyXG59XHJcblxyXG4ucXVhbnRpdHlidG4gLnBsdXN7XHJcblx0YmFja2dyb3VuZDojMGEwYTBhOyBcclxuXHRib3JkZXI6MXB4IHNvbGlkICMwYTBhMGE7IFxyXG5cdGNvbG9yOiNmZmY7IFxyXG5cdGJvcmRlci1yYWRpdXM6MTBweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5xdWFudGl0eWJ0biAubWludXN7XHJcblx0XHJcblx0YmFja2dyb3VuZDojNTMzMTg2OyBcclxuXHRib3JkZXI6MXB4IHNvbGlkICM1MzMxODY7IFxyXG5cdGNvbG9yOiNmZmY7IFxyXG5cdGJvcmRlci1yYWRpdXM6MHB4IDEwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcblxyXG4uYXJyb3ctYmFjayB7XHJcblx0ZmxvYXQ6bGVmdDtcclxuXHRsZWZ0OiAwO1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRwYWRkaW5nOiAycHggNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzUzMzE4NjtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzJmMWI0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLXBvc2l0aW9uOnJlbGF0aXZlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiNmZmY7XG59XG5cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnNob3ctYmFja2dyb3VuZCAudGl0bGVfaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIG1kICovXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIGlvcyAqL1xuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmZvb3Rlci1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5xdWFudGl0eWlucHV0IHtcbiAgcGFkZGluZzogMTNweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA0OHB4O1xufVxuXG4ucXVhbnRpdHlidG4gLnNpZ24ge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5xdWFudGl0eWJ0biAucGx1cyB7XG4gIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhMGE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbn1cblxuLnF1YW50aXR5YnRuIC5taW51cyB7XG4gIGJhY2tncm91bmQ6ICM1MzMxODY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MzMxODY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbn1cblxuLmFycm93LWJhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTMzMTg2O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJvcmRlci1yYWRpdXM6MTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWZvb3RlciBpb24tYnV0dG9uIGlvbi10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMmYxYjRlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5pb24tZm9vdGVyIGlvbi1idXR0b24gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/option/option.page.ts":
  /*!***************************************!*\
    !*** ./src/app/option/option.page.ts ***!
    \***************************************/

  /*! exports provided: OptionPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPage", function () {
      return OptionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");

    let OptionPage = class OptionPage {
      constructor(modalController, server, toastController, route, nav, loadingController) {
        this.modalController = modalController;
        this.server = server;
        this.toastController = toastController;
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.addonData = [];
        this.addonPrice = 0;
        this.cart = [];
        this.showToolbar = false;
        this.radio_items = [];
        this.checkActive = false;
        this.max_required = 0;
        this.required_complet = 0;
        this.max_radio = 1;
        this.count_radio = 0;
        this.route.queryParams.subscribe(params => {
          this.item = JSON.parse(params.item);
          this.currency = params.currency;
          this.cart = params.cart;
          this.text = JSON.parse(localStorage.getItem('app_text'));
          this.itemPrice = parseFloat(this.item.s_price);
          this.itPrice = parseFloat(this.item.s_price);
          this.itemID = 1;
          this.qty = 1;
          this.cart_no = localStorage.getItem('cart_no');
          this.data = JSON.parse(params.item); // Order Sort_no

          this.item.addon.sort((a, b) => {
            return parseFloat(a.cate_sort_no) - parseFloat(b.cate_sort_no);
          });

          for (let r = 0; r < this.item.addon.length; r++) {
            const element = this.item.addon[r];

            if (element.required == 1) {
              if (element.max_options > 0) {
                this.max_required = this.max_required + element.max_options;
              } else {
                this.max_required = this.max_required + 1;
              }
            }

            if (element.single_opcion == 0) {
              this.radio_items = element.items;
            }
          }
        });
      }

      ngOnInit() {}

      ViewCart() {
        var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
        var lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
        var lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0;
        this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
          this.cart_total = Number(response.data.total);
        });
      }

      addToCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({});
          yield loading.present();
          var allData = {
            cart_no: this.cart_no,
            user_id: localStorage.getItem('user_id'),
            id: this.item.id,
            price: this.itPrice,
            qtype: this.itemID,
            type: 0,
            qty: this.qty,
            addon: this.addonData,
            price_comm: this.data.c_value
          };
          this.server.addToCart(allData).subscribe(response => {
            loading.dismiss();
            this.count = response.data.count;
            this.cart = response.data.cart;
            this.presentToast("Elemento Agregado.");
            this.nav.back();
          });
        });
      }

      Qty(process) {
        if (process == 'sum') {
          this.qty += 1;
        } else {
          this.qty -= 1;
        }

        if (this.addonPrice > 0) {
          this.itemPrice = parseFloat(this.itPrice) * this.qty + parseFloat(this.addonPrice);
        } else {
          this.itemPrice = parseFloat(this.itPrice) * this.qty;
        }
      }

      updateCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            proces: 'updateTocart',
            id: this.item.id,
            price: this.itemPrice,
            type: this.itemID,
            addonData: this.addonData
          });
        });
      }

      closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            data: true
          });
        });
      }

      selectItem(type, price) {
        this.itemID = type;
        this.itPrice = price;

        if (this.addonPrice > 0) {
          this.itemPrice = parseFloat(price) * this.qty + parseFloat(this.addonPrice);
        } else {
          this.itemPrice = parseFloat(price) * this.qty;
        }
      }

      addonSelect(addon, max_options, formu, required, type, event) {
        if (type == 'check') {
          let form = document.getElementsByClassName('cate_' + formu);
          let count = 0;

          for (let i = 0; i < form.length; i++) {
            const element = form[i];

            if (element.checked) {
              count = count + 1;
            }
          }

          if (count == max_options) {
            if (max_options > 0) {
              for (let i = 0; i < form.length; i++) {
                const element = form[i];

                if (element.checked === false) {
                  element.setAttribute('disabled', 'true');
                }
              }
            }
          } else {
            for (let i = 0; i < form.length; i++) {
              const element = form[i];

              if (element.checked === false) {
                element.setAttribute('disabled', 'false');
              }
            }
          }

          if (this.addonData.includes(addon.id)) {
            if (required == true) {
              if (this.required_complet > 0) {
                this.required_complet = this.required_complet - 1;
              }
            }

            var ind = this.addonData.indexOf(addon.id);
            this.itemPrice = Number(this.itemPrice) - Number(addon.price);
            this.addonPrice = Number(this.addonPrice) - Number(addon.price);
            this.addonData.splice(ind, 1);
          } else {
            if (required == true) {
              this.required_complet = this.required_complet + 1;
              console.log('requiredmax: ' + this.required_complet);
            } else {
              console.log('requiremin: ' + this.required_complet);
            }

            this.addonData.push(addon.id);
            this.itemPrice = Number(this.itemPrice) + Number(addon.price);
            this.addonPrice = Number(this.addonPrice) + Number(addon.price);
          }
        } else {
          var ind;
          let includes = false;
          let priceRest = 0;

          for (let r = 0; r < this.item.addon.length; r++) {
            const element = this.item.addon[r];

            if (element.cate_id == formu) {
              this.radio_items = element.items;
            }
          }

          if (this.radio_items.length > 0) {
            for (let rad = 0; rad < this.radio_items.length; rad++) {
              const element = this.radio_items[rad];

              if (this.addonData.includes(element.id)) {
                includes = true;
                ind = this.addonData.indexOf(addon.id);
                priceRest = addon.price;
                break;
              }
            }
          }

          if (includes) {
            this.itemPrice = Number(this.itemPrice) - Number(priceRest);
            this.addonPrice = Number(this.addonPrice) - Number(priceRest);
            var ind = this.addonData.indexOf(addon.id);
            this.addonData.splice(ind, 1);

            if (required == true) {
              this.required_complet = this.required_complet - 1;
            }
          }

          if (addon.price > 0) {
            this.itemPrice = Number(this.itemPrice) + Number(addon.price);
            this.addonPrice = Number(this.addonPrice) + Number(addon.price);
          }

          if (required == true) {
            this.required_complet = this.required_complet + 1;
          }

          this.addonData.push(addon.id);
        }
      }

      formVal() {
        if (this.required_complet >= this.max_required) {
          return true;
        }

        return false;
      }

      hasCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].item_id == id) {
            return this.cart[i].qty;
          }
        }

        return 1;
      }

      presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
      }

    };

    OptionPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }];

    OptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-option',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./option.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./option.page.scss */
      "./src/app/option/option.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], OptionPage);
    /***/
  },

  /***/
  "./src/app/service/server.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/server.service.ts ***!
    \*******************************************/

  /*! exports provided: ServerService */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerService", function () {
      return ServerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    let ServerService = class ServerService {
      constructor(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
        this.url = "https://babelmarket.com.mx/api/";
        this.urlAPI = "https://us-central1-babel-market-d0578.cloudfunctions.net/app/api/";
        this.geoLatitude = null;
        this.geoLongitude = null;
      }

      get windowRef() {
        return window;
      }

      getGeolocation() {
        this.geolocation.getCurrentPosition().then(resp => {
          this.geoLatitude = resp.coords.latitude;
          this.geoLongitude = resp.coords.longitude; //this.geoAccuracy = resp.coords.accuracy; 

          localStorage.setItem('current_lat', this.geoLatitude);
          localStorage.setItem('current_lng', this.geoLongitude);
        }).catch(error => {
          //  Fail
          console.log(error);
        });
      }

      GeocodeFromCoords(lat, lng, apikey) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + apikey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      GeocodeFromAddress(address, apikey) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apikey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      welcome() {
        return this.http.get(this.url + 'welcome').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getDeliveryType($id) {
        return this.http.get(this.url + 'getTypeDelivery/' + $id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      city(data) {
        return this.http.get(this.url + 'city?lid=' + localStorage.getItem('lid') + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      GetNearbyCity(data) {
        return this.http.get(this.url + 'GetNearbyCity?lid=' + localStorage.getItem('lid') + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      lang() {
        return this.http.get(this.url + 'lang').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getNearbyStore(city_id) {
        return this.http.get(this.url + 'getNearbyStore/' + city_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      homepage2(city_id, lid) {
        return this.http.get(this.url + 'homepage/' + city_id + '/' + lid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      homepage(city_id) {
        return this.http.get(this.url + 'homepage/' + city_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getStoreOpen(data) {
        return this.http.get(this.url + 'getStoreOpen/' + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getStore(id) {
        return this.http.get(this.url + 'getStore/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getMoreStores(city_id) {
        return this.http.get(this.url + 'GetInfiniteScroll/' + city_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      search(query, type, city) {
        return this.http.get(this.url + 'search/' + query + '/' + type + '/' + city).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      SearchCat(data) {
        return this.http.get(this.url + 'SearchCat/' + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      addToCart(data) {
        return this.http.post(this.url + 'addToCart', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updateCart(id, type) {
        return this.http.get(this.url + 'updateCart/' + id + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      deleteAll(id) {
        return this.http.get(this.url + 'deleteAll/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      cartCount(cartNo) {
        return this.http.get(this.url + 'cartCount/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getCart(cartNo) {
        return this.http.get(this.url + 'getCart/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getOffer(cartNo) {
        return this.http.get(this.url + 'getOffer/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      applyCoupen(id, cartNo) {
        return this.http.get(this.url + 'applyCoupen/' + id + '/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      signup(data) {
        return this.http.post(this.url + 'signup', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      SendOtp(data) {
        return this.http.post(this.url + 'sendOTP', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      signupWithfb(data) {
        return this.http.get(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      login(data) {
        return this.http.post(this.url + 'login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      loginfb(data) {
        return this.http.post(this.url + 'loginfb', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      forgot(data) {
        return this.http.post(this.url + 'forgot', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      verify(data) {
        return this.http.post(this.url + 'verify', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updatePassword(data) {
        return this.http.post(this.url + 'updatePassword', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getAddress(id) {
        return this.http.get(this.url + 'getAddress/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getAllAdress(id) {
        return this.http.get(this.url + 'getAllAdress/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      myOrder(id) {
        return this.http.get(this.url + 'myOrder/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      saveAddress(data) {
        return this.http.post(this.url + 'addAddress', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      trashAddress(data) {
        return this.http.get(this.url + 'removeAddress/' + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      order(data) {
        return this.http.post(this.url + 'order', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      userInfo(id) {
        return this.http.get(this.url + 'userinfo/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      signupOP(data) {
        return this.http.post(this.url + 'signupOP', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updateInfo(data, id) {
        return this.http.post(this.url + 'updateInfo/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      cancelOrder(id, uid) {
        return this.http.get(this.url + 'cancelOrder/' + id + '/' + uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      loginFb(data) {
        return this.http.post(this.url + 'loginFb', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      SignPhone(data) {
        return this.http.post(this.url + 'SignPhone', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      chkUser(data) {
        return this.http.post(this.url + 'chkUser', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      sendChat(data) {
        return this.http.post(this.url + 'sendChat', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      push() {
        return this.http.get(this.url + 'push').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      rating(data) {
        return this.http.post(this.url + 'rate', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updateCity(data) {
        return this.http.get(this.url + 'updateCity?' + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      pages() {
        return this.http.get(this.url + 'pages?lid=' + localStorage.getItem('lid')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      makeStripePayment(token) {
        // makeStripePayment
        return this.http.get(this.url + 'makeStripePayment' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getStatus(id) {
        return this.http.get(this.url + 'getStatus/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }
      /**
       * OpenPay Methods
       * @param data
       * @returns
       */


      getClient(data) {
        return this.http.post(this.url + 'getClient', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      setCardClient(data) {
        return this.http.post(this.url + 'SetCardClient', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      GetCards(data) {
        return this.http.post(this.url + 'GetCards', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      DeleteCard(data) {
        return this.http.post(this.url + 'DeleteCard', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getCard(data) {
        return this.http.post(this.url + 'getCard', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      chargeClient(data) {
        return this.http.post(this.url + 'chargeClient', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }
      /**
       * Mandaditos
       * @param data
       * @returns
      */


      OrderComm(data) {
        return this.http.post(this.url + 'OrderComm', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      ViewCostShipCommanded(data) {
        return this.http.post(this.url + 'ViewCostShipCommanded', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      chkEvents_comm(id) {
        return this.http.get(this.url + 'chkEvents_comm/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      chkEvents_staffs(data) {
        return this.http.post(this.url + 'chkEvents_staffs', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      cancelComm_event(id) {
        return this.http.get(this.url + 'cancelComm_event/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      rateComm_event(data) {
        return this.http.post(this.url + 'rateComm_event', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

    };

    ServerService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
    }];

    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])], ServerService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: true,
      firebaseConfig: {
        apiKey: "AIzaSyAgxoJ9QfDGZ6OXJM_5D9qUKQShd9tZ0AU",
        authDomain: "babel-market-d0578.firebaseapp.com",
        projectId: "babel-market-d0578",
        storageBucket: "babel-market-d0578.appspot.com",
        messagingSenderId: "603854625473",
        appId: "1:603854625473:web:d03d5b7824e1108d4ad240",
        measurementId: "G-XFPLXJZ0S8"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.log(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\ionic\Babel\usuarios\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map