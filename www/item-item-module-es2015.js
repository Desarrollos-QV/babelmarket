(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border style=\"z-index: 1000;\">\n  <div class=\"slide-tool\" *ngIf=\"data\">\n    <ion-toolbar color=\"primary\"> \n      \n      <ion-buttons slot=\"start\">\n        <ion-back-button mode=\"md\"></ion-back-button>\n        <span class=\"title_header\">{{ data.title }}</span>\n      </ion-buttons>\n\n      <ion-buttons slot=\"end\" (click)=\"viewInfoStore()\">\n        <ion-icon class=\"title_header\" name=\"home\" style=\"font-size: 16px;margin:0 12px;\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n  </div>\n\n  <div class=\"slide-menu\" *ngIf=\"data\">\n    <ion-slides  [options]=\"BannerOption\">\n      <ion-slide *ngFor=\"let category of data.items\" style=\"text-align: left;\">\n        <ion-label style=\"font-size: 14px;color:#000;\" (click)=\"ScrollTo(category.id)\">{{category.cate_name}}</ion-label>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-header>\n\n<ion-content mode=\"ios\"  [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" *ngIf=\"data\">\n\n  <div class=\"pics_pp\">\n    <div class=\"portada\" [style.backgroundImage]=\"'url('+ data.img +')'\"></div>\n    <div class=\"prof_img\" [style.backgroundImage]=\"'url('+ data.img +')'\"></div>\n  </div>\n\n  <ion-card mode=\"ios\" class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title>\n        <h4 (click)=\"viewInfoStore()\">\n          <ion-icon name=\"home\" slot=\"start\"></ion-icon> \n          {{ data.title }}\n          <ion-icon src=\"assets/chevron-forward.svg\" slot=\"end\" style=\"position:relative;margin-top:6px;\"></ion-icon>\n        </h4>\n\n        <div class=\"info_res\">\n          <span>\n            <ion-icon name=\"star\"></ion-icon>\n            {{ data.rating }}\n          </span>\n\n          <span>\n            <ion-icon name=\"bicycle\"></ion-icon>\n            {{data.delivery_time}} - min\n          </span>\n\n          <span>\n            <ion-icon name=\"stats\"></ion-icon>\n            {{data.person_cost}}\n          </span>\n        </div>\n        \n        <div class=\"wh_info\">\n          <a href=\"https://api.whatsapp.com/send?phone=+52{{ data.phone }}\">\n            <img src=\"assets/boton.png\" alt=\"\">\n          </a>\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span *ngFor=\"let category of data.items\" class=\"cate_{{ category.id }}\">\n        <h1 style=\"margin-top: 20px\">\n          <b>{{ category.cate_name }}</b>\n        </h1>\n        <span *ngFor=\"let item of category.items\">\n          <ion-row style=\"margin-top:10px;padding: 0px\" *ngIf=\"item.status == 0\">\n            <!-- Informacion -->\n            <ion-col size=\"8\" style=\"position: relative;\">\n              <b (click)=\"showOption(item,data.currency)\">\n                <small *ngIf=\"hasCart(item.id)\" class=\"badgeCart\">{{hasCart(item.id)}}</small>\n                {{ item.name }}\n              </b><br>\n              \n              <small (click)=\"showOption(item,data.currency)\" style=\"color: gray;font-size: 10px\" *ngIf=\"item.description\">\n                  {{ item.description | slice:0:25 }}...\n              </small><br>\n\n              <span (click)=\"showOption(item,data.currency)\" style=\"color: #1d1d1d;font-size: 12px\">\n                <b>MXN{{ item.price | currency }}</b>\n                <small class=\"last_price\" *ngIf=\"item.last_price > 0\">MX{{item.last_price | currency}}</small>\n              </span>\n              \n            </ion-col>\n            <!-- Informacion -->\n\n            <!-- Imagen -->\n            <ion-col size=\"4\" style=\"justify-content: right;\" (click)=\"showOption(item,data.currency)\">\n              <div class=\"pic_menu\" *ngIf=\"item.img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n              <div class=\"pic_menu\" *ngIf=\"!item.img\" [style.backgroundImage]=\"'url(assets/not_img.png)'\"></div>\n            </ion-col>\n            <!-- Imagen -->\n          </ion-row>\n        </span>\n      </span>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n\n<ion-footer class=\"ion-padding no-border\" *ngIf=\"count > 0\">\n  <ion-button mode=\"ios\" class=\"animate__animated animate__bounceInUp\"  routerLink=\"/cart\" routerDirection=\"forward\">\n    <ion-text>{{count}}</ion-text>\n\n    Ver Carrito\n\n    <span *ngIf=\"data_cart\">MX{{ data_cart.total | currency}}</span>\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/item/item.module.ts":
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/*! exports provided: ItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageModule", function() { return ItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.page */ "./src/app/item/item.page.ts");







const routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]
    }
];
let ItemPageModule = class ItemPageModule {
};
ItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]]
    })
], ItemPageModule);



/***/ }),

/***/ "./src/app/item/item.page.scss":
/*!*************************************!*\
  !*** ./src/app/item/item.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pics_pp {\n  height: 155px;\n  position: relative;\n}\n.pics_pp .portada {\n  z-index: -1 !important;\n  width: 100%;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.pics_pp .prof_img {\n  position: absolute;\n  top: 100px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 80px;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 6px;\n  border: 1px solid #fff;\n  z-index: 1000;\n}\n.welcome-card {\n  margin-bottom: 15%;\n  background-color: #fff;\n  box-shadow: none;\n  width: 96%;\n  margin-left: 2%;\n}\n.welcome-card ion-card-header {\n  margin-top: 0 !important;\n}\n.welcome-card ion-card-header ion-card-title {\n  text-align: center;\n}\n.welcome-card ion-card-header ion-card-title .info_res span {\n  font-size: 12px;\n  margin: 0 15px;\n  position: relative;\n}\n.welcome-card ion-card-header ion-card-title .info_res span:nth-child(2) {\n  position: relative;\n}\n.welcome-card ion-card-header ion-card-title .info_res span:nth-child(2)::after {\n  position: absolute;\n  content: \"\";\n  left: -15px;\n  top: 27%;\n  width: 3px;\n  height: 3px;\n  background: #000;\n  border-radius: 100%;\n}\n.welcome-card ion-card-header ion-card-title .info_res span:nth-child(2)::before {\n  position: absolute;\n  content: \"\";\n  right: -15px;\n  top: 27%;\n  width: 3px;\n  height: 3px;\n  background: #000;\n  border-radius: 100%;\n}\n.welcome-card ion-card-header ion-card-title .wh_info {\n  margin-top: 15px;\n}\n.welcome-card ion-card-header ion-card-title .wh_info span {\n  font-size: 13px;\n  color: green;\n  background: #38e438;\n  padding: 8px;\n  border-radius: 10px;\n}\n.welcome-card ion-card-header ion-card-title .wh_info span ion-icon {\n  font-size: 16px;\n}\n.welcome-card ion-card-header ion-card-title .wh_info img {\n  width: 105px;\n  margin: 12px auto;\n}\n.welcome-card ion-card-content .last_price {\n  margin: 0 10px;\n  font-size: 11px;\n  text-decoration: line-through;\n  color: #616161;\n}\n/* Transparent standard */\n.slide-tool ion-toolbar {\n  --ion-color-base: transparent !important;\n  --color:#fff;\n  --background: rgb(41, 41, 41);\n  --background: linear-gradient(180deg, rgb(42, 42, 42) 0%, rgba(255,255,255,0) 100%);\n}\n.slide-tool ion-toolbar .title_header {\n  display: none;\n  position: relative;\n}\n.slide-tool ion-toolbar ion-back-button {\n  background: #533186;\n  color: #fff;\n  border-radius: 25px;\n  font-size: 14px;\n}\n.slide-tool.scroll ion-toolbar {\n  --ion-color-base: #fff !important;\n  --color:#000;\n  --background: rgb(255, 255, 255);\n  --background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(240, 240, 240, 0.226) 100%);\n}\n.slide-tool.scroll ion-toolbar .title_header {\n  display: block;\n  position: relative;\n  color: #000;\n}\n.slide-tool.scroll ion-toolbar ion-back-button {\n  background: transparent !important;\n  color: #000;\n}\n.slide-tool.scroll ion-toolbar ion-buttons ion-icon {\n  background: transparent !important;\n  color: #000;\n}\n@-webkit-keyframes pulsate {\n  from {\n    right: -50%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n@keyframes pulsate {\n  from {\n    right: -50%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n@-webkit-keyframes downer {\n  from {\n    right: -30%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n@keyframes downer {\n  from {\n    right: -30%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  background: #fff;\n  color: #000;\n  padding-top: 18px;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: downer;\n  animation-name: downer;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n.show-background .title_header {\n  display: block;\n  -webkit-animation-duration: 0.8s;\n  animation-duration: 0.8s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: pulsate;\n  animation-name: pulsate;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none;\n}\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\nion-content {\n  position: absolute;\n  top: 0;\n}\nh1 {\n  font-size: 19px;\n}\nion-badge {\n  --padding-bottom:5px;\n  --padding-start:10px;\n  --padding-end:10px;\n  --padding-top:5px;\n}\n.quantityinput {\n  padding: 2px 2px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fff;\n  width: 28px;\n}\n.quantitybtn .sign {\n  padding: 7px 2px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n.quantitybtn .plus {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  border-radius: 5px 0px 0px 5px;\n}\n.quantitybtn .minus {\n  background: #4caf50;\n  border: 1px solid #4caf50;\n  color: #fff;\n  border-radius: 0px 5px 5px 0px;\n}\n.header_stikcy {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 250px;\n  padding: 12px 15px;\n  z-index: 50;\n  overflow: hidden;\n}\n.header_stikcy:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: -1;\n}\n.header_stikcy ion-icon {\n  color: #fff;\n  font-size: 28px;\n}\n.slide-menu {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 10px 6px;\n  background-color: #fff;\n  visibility: hidden;\n}\n.slide_down_View {\n  visibility: visible;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: downer;\n  animation-name: downer;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n.slide-menu ion-label {\n  font-family: \"SF Pro Display\";\n  font-weight: 100;\n  font-style: normal;\n  font-size: 14px;\n  color: #fff;\n  letter-spacing: 0.8px;\n}\n.pic_menu {\n  width: 100%;\n  height: 70px;\n  float: right;\n  -webkit-box-pack: right;\n          justify-content: right;\n  border-radius: 8px;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n.badgeCart {\n  padding: 3px 6px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\nion-footer {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-footer ion-button {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  --border-radius:12px;\n  text-align: center;\n}\nion-footer ion-button ion-text {\n  position: absolute;\n  left: 10px;\n  background: #2f1b4e;\n  color: #fff;\n  font-size: 14px;\n  padding: 6px 8px;\n  border-radius: 8px;\n}\nion-footer ion-button span {\n  position: absolute;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcaXRlbVxcaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2l0ZW0vaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7QUNDRDtBRENDO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NGO0FERUM7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQVEsUUFBQTtFQUNSLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURJQTtFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREQ7QURHQztFQUNDLHdCQUFBO0FDREY7QURHRTtFQUNDLGtCQUFBO0FDREg7QURJSTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGTDtBRElLO0VBRUMsa0JBQUE7QUNITjtBREtNO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUFZLFFBQUE7RUFDWixVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUDtBREtNO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUFhLFFBQUE7RUFDYixVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUDtBRFFHO0VBQ0MsZ0JBQUE7QUNOSjtBRFFJO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05MO0FEUUs7RUFDQyxlQUFBO0FDTk47QURVSTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtBQ1JMO0FEaUJFO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNmSDtBRG9CQSx5QkFBQTtBQUVDO0VBRUMsd0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtRkFBQTtBQ25CRjtBRG9CRTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtBQ2xCSDtBRHFCRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ25CSDtBRDBCQztFQUNDLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkZBQUE7QUN2QkY7QUR5QkU7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDdkJIO0FEMEJFO0VBQ0Msa0NBQUE7RUFDQSxXQUFBO0FDeEJIO0FENkJHO0VBQ0Msa0NBQUE7RUFDQSxXQUFBO0FDM0JKO0FEa0NDO0VBa0NBO0lBQ0MsV0FBQTtJQUNBLFVBQUE7RUNoRUE7RURrRUQ7SUFDQyxVQUFBO0lBQ0EsUUFBQTtFQ2hFQTtBQUNGO0FEZ0NDO0VBeUJBO0lBQ0MsV0FBQTtJQUNBLFVBQUE7RUNsQ0E7RURvQ0Q7SUFDQyxVQUFBO0lBQ0EsUUFBQTtFQ2xDQTtBQUNGO0FEUEM7RUE2Q0E7SUFDQyxXQUFBO0lBQ0EsVUFBQTtFQ25DQTtFRHFDRDtJQUNDLFVBQUE7SUFDQSxRQUFBO0VDbkNBO0FBQ0Y7QURSQztFQW9DQTtJQUNDLFdBQUE7SUFDQSxVQUFBO0VDTEE7RURPRDtJQUNDLFVBQUE7SUFDQSxRQUFBO0VDTEE7QUFDRjtBRGlCQSx1Q0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDSCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQXREQSxnQ0E4Q3lCO0VBM0N6Qix3QkEyQ3lCO0VBMUN6QixvQ0EwQytCO0VBdkMvQiw0QkF1QytCO0VBdEMvQiw4QkFzQ2lCO0VBbkNqQixzQkFtQ2lCO0VBbENqQixtQ0FrQ2tDO0VBL0JsQywyQkErQmtDO0FDU25DO0FERUM7RUFDQyxjQUFBO0VBMURELGdDQTBDMEI7RUF2QzFCLHdCQXVDMEI7RUF0QzFCLG9DQXNDZ0M7RUFuQ2hDLDRCQW1DZ0M7RUFsQ2hDLCtCQWtDaUI7RUEvQmpCLHVCQStCaUI7RUE5QmpCLG1DQThCbUM7RUEzQm5DLDJCQTJCbUM7QUNnQ3BDO0FEVkEsK0JBQUE7QUFDQTtFQUNJLHNCQUFBO0FDYUo7QURWQSxnQ0FBQTtBQUNBO0VBQ0ksaUJBQUE7QUNhSjtBRFJBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0FDV0Q7QURSQTtFQUVDLGVBQUE7QUNVRDtBRFBBO0VBRUMsb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNTRDtBRE5BO0VBQWUsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsc0JBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsV0FBQTtBQ2M1RjtBRGJBO0VBQW1CLGdCQUFBO0VBQWlCLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLGFBQUE7QUNzQnJHO0FEckJBO0VBQW1CLG1CQUFBO0VBQW9CLHlCQUFBO0VBQTBCLFdBQUE7RUFBWSw4QkFBQTtBQzRCN0U7QUQzQkE7RUFBb0IsbUJBQUE7RUFBb0IseUJBQUE7RUFBMEIsV0FBQTtFQUFZLDhCQUFBO0FDa0M5RTtBRGhDQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDb0NEO0FEbENDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQU8sT0FBQTtFQUNQLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQ3FDRjtBRGxDQztFQUNDLFdBQUE7RUFDQSxlQUFBO0FDb0NGO0FEaENBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ21DRDtBRGhDQTtFQUNDLG1CQUFBO0VBdElBLGdDQThDeUI7RUEzQ3pCLHdCQTJDeUI7RUExQ3pCLG9DQTBDK0I7RUF2Qy9CLDRCQXVDK0I7RUF0Qy9CLDhCQXNDaUI7RUFuQ2pCLHNCQW1DaUI7RUFsQ2pCLG1DQWtDa0M7RUEvQmxDLDJCQStCa0M7QUMySW5DO0FEL0NBO0VBQ0MsNkJBQUE7RUFDRyxnQkFBQTtFQUNILGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDRyxxQkFBQTtBQ2tESjtBRC9DQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQ2tERDtBRC9DQTtFQUNDLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDa0REO0FEL0NBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNrREo7QURoREk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ2tEUjtBRGhEUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDa0RaO0FEL0NRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDaURaIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNzX3BwIHtcblx0aGVpZ2h0OiAxNTVweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdC5wb3J0YWRhIHtcblx0XHR6LWluZGV4OiAtMSAhaW1wb3J0YW50O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTUwcHg7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0fVxuXG5cdC5wcm9mX2ltZyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMTAwcHg7XG5cdFx0bGVmdDogMDtyaWdodDogMDtcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0d2lkdGg6IDgwcHg7XG5cdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG5cdFx0ei1pbmRleDogMTAwMDtcblx0fVxuXG59XG5cbi53ZWxjb21lLWNhcmQge1xuXHRtYXJnaW4tYm90dG9tOiAxNSU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHdpZHRoOiA5NiU7XG5cdG1hcmdpbi1sZWZ0OiAyJTtcblxuXHRpb24tY2FyZC1oZWFkZXIge1xuXHRcdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcblxuXHRcdGlvbi1jYXJkLXRpdGxlIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFxuXHRcdFx0LmluZm9fcmVzIHtcblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAxNXB4O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcdFxuXG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoMilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IC0xNXB4O3RvcDogMjclO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogM3B4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDNweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IC0xNXB4O3RvcDogMjclO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogM3B4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDNweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LndoX2luZm8ge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdFx0XHRcblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdGNvbG9yOiBncmVlbjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiMzOGU0Mzg7XG5cdFx0XHRcdFx0cGFkZGluZzogOHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblx0XHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTA1cHg7XG5cdFx0XHRcdFx0bWFyZ2luOjEycHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlvbi1jYXJkLWNvbnRlbnQge1xuXG5cblx0XHQubGFzdF9wcmljZSB7XG5cdFx0XHRtYXJnaW46IDAgMTBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XG5cdFx0XHRjb2xvcjogIzYxNjE2MTtcblx0XHR9XG5cdH1cbn1cblxuLyogVHJhbnNwYXJlbnQgc3RhbmRhcmQgKi9cbi5zbGlkZS10b29sIHtcblx0aW9uLXRvb2xiYXIge1xuXHRcdC8vIC0tYmFja2dyb3VuZDogcmVkO1xuXHRcdC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdFx0LS1jb2xvcjojZmZmO1xuXHRcdC0tYmFja2dyb3VuZDogcmdiKDQxLCA0MSwgNDEpO1xuXHRcdC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDQyLCA0MiwgNDIpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpO1xuXHRcdC50aXRsZV9oZWFkZXIge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cdFxuXHRcdGlvbi1iYWNrLWJ1dHRvbiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjNTMzMTg2O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdH1cblx0XHRcblx0fVxufVxuXG4uc2xpZGUtdG9vbC5zY3JvbGwge1xuXHRpb24tdG9vbGJhciB7XG5cdFx0LS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdC0tY29sb3I6IzAwMDtcblx0XHQtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0XHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjIyNikgMTAwJSk7XG5cblx0XHQudGl0bGVfaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0fVxuXHRcblx0XHRpb24tYmFjay1idXR0b24ge1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdH1cblx0XG5cdFx0aW9uLWJ1dHRvbnMge1xuXHRcblx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcblx0QC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcblx0ICBAY29udGVudDtcblx0fVxuXHRALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuXHQgIEBjb250ZW50O1xuXHR9XG5cdEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuXHQgIEBjb250ZW50O1xuXHR9XG5cdEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuXHQgIEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBhbmltYXRlKCRuYW1lLCAkZHVyYXRpb24sICRpdGVyYXRpb24sICRkaXJlY3Rpb24pIHtcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcblx0LW1vei1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcblx0LW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb247XG5cdC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbjtcblx0LW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbjtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbjtcblx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogJG5hbWU7XG5cdC1tb3otYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuXHQtby1hbmltYXRpb24tbmFtZTogJG5hbWU7XG5cdGFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcblx0LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuXHQtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG5cdC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG5cdGFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBpbmNsdWRlIGtleWZyYW1lcyhwdWxzYXRlKSB7XG5cdGZyb20ge1xuXHRcdHJpZ2h0OiAtNTAlO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0dG8ge1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0cmlnaHQ6IDA7XG5cdH1cbn1cblxuQGluY2x1ZGUga2V5ZnJhbWVzKGRvd25lcikge1xuXHRmcm9tIHtcblx0XHRyaWdodDogLTMwJTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdHRvIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHJpZ2h0OiAwO1xuXHR9XG59XG5cblxuQG1peGluIHB1bHNhdGUge1xuXHRAaW5jbHVkZSBhbmltYXRlKHB1bHNhdGUsIDAuOHMsIDEsIG5vcm1hbCk7XG59XG5cbkBtaXhpbiBkb3duZXIge1xuXHRAaW5jbHVkZSBhbmltYXRlKGRvd25lciwgMC42cywgMSwgbm9ybWFsKTtcblx0XG59XG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGNvbG9yOiAjMDAwO1xuXHRwYWRkaW5nLXRvcDogMThweDtcblx0QGluY2x1ZGUgZG93bmVyO1xuXG5cdC50aXRsZV9oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdEBpbmNsdWRlIHB1bHNhdGU7XG5cdH1cbn1cblxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIGlvcyAqL1xuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cblxuXG5pb24tY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOjA7XG59XG5cbmgxXG57XG5cdGZvbnQtc2l6ZToxOXB4O1xufVxuXG5pb24tYmFkZ2Vcbntcblx0LS1wYWRkaW5nLWJvdHRvbTo1cHg7XG5cdC0tcGFkZGluZy1zdGFydDoxMHB4O1xuXHQtLXBhZGRpbmctZW5kOjEwcHg7XG5cdC0tcGFkZGluZy10b3A6NXB4O1xufVxuXG4ucXVhbnRpdHlpbnB1dHtwYWRkaW5nOjJweCAycHg7IHRleHQtYWxpZ246Y2VudGVyOyBib3JkZXI6MXB4IHNvbGlkICNjY2M7ICBiYWNrZ3JvdW5kOiNmZmY7IHdpZHRoOjI4cHg7fVxuLnF1YW50aXR5YnRuIC5zaWdue3BhZGRpbmc6N3B4IDJweDsgd2lkdGg6MjBweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGN1cnNvcjpwb2ludGVyOyBmb250LXdlaWdodDpib2xkOyBvdXRsaW5lOm5vbmU7IH1cbi5xdWFudGl0eWJ0biAucGx1c3tiYWNrZ3JvdW5kOiNmNDQzMzY7IGJvcmRlcjoxcHggc29saWQgI2Y0NDMzNjsgY29sb3I6I2ZmZjsgYm9yZGVyLXJhZGl1czo1cHggMHB4IDBweCA1cHg7fVxuLnF1YW50aXR5YnRuIC5taW51c3tiYWNrZ3JvdW5kOiM0Y2FmNTA7IGJvcmRlcjoxcHggc29saWQgIzRjYWY1MDsgY29sb3I6I2ZmZjsgYm9yZGVyLXJhZGl1czowcHggNXB4IDVweCAwcHg7fVxuXG4uaGVhZGVyX3N0aWtjeSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO2xlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDI1MHB4O1xuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XG5cdHotaW5kZXg6IDUwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcblx0JjphZnRlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtsZWZ0OiAwO1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQpO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG5cblx0aW9uLWljb24ge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0fVxufVxuXG4uc2xpZGUtbWVudSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAxMHB4IDZweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2xpZGVfZG93bl9WaWV3IHtcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0QGluY2x1ZGUgZG93bmVyO1xufVxuXG4uc2xpZGUtbWVudSBpb24tbGFiZWwge1xuXHRmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcbiAgICBmb250LXdlaWdodDogMTAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICNmZmY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuXG4ucGljX21lbnUge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA3MHB4O1xuXHRmbG9hdDogcmlnaHQ7XG5cdGp1c3RpZnktY29udGVudDogcmlnaHQ7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWRnZUNhcnQge1xuXHRwYWRkaW5nOiAzcHggNnB4O1xuXHRiYWNrZ3JvdW5kOnZhcigtLXByaW1hcnkpO1xuXHRjb2xvcjojZmZmO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRmb250LXNpemU6IDEwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6NTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzJmMWI0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnBpY3NfcHAge1xuICBoZWlnaHQ6IDE1NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGljc19wcCAucG9ydGFkYSB7XG4gIHotaW5kZXg6IC0xICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ucGljc19wcCAucHJvZl9pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG4ud2VsY29tZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi53ZWxjb21lLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndlbGNvbWUtY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUgLmluZm9fcmVzIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2VsY29tZS1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSAuaW5mb19yZXMgc3BhbjpudGgtY2hpbGQoMikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2VsY29tZS1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSAuaW5mb19yZXMgc3BhbjpudGgtY2hpbGQoMik6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAtMTVweDtcbiAgdG9wOiAyNyU7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLndlbGNvbWUtY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUgLmluZm9fcmVzIHNwYW46bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHJpZ2h0OiAtMTVweDtcbiAgdG9wOiAyNyU7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLndlbGNvbWUtY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUgLndoX2luZm8ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLndlbGNvbWUtY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUgLndoX2luZm8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kOiAjMzhlNDM4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ud2VsY29tZS1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSAud2hfaW5mbyBzcGFuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLndlbGNvbWUtY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUgLndoX2luZm8gaW1nIHtcbiAgd2lkdGg6IDEwNXB4O1xuICBtYXJnaW46IDEycHggYXV0bztcbn1cbi53ZWxjb21lLWNhcmQgaW9uLWNhcmQtY29udGVudCAubGFzdF9wcmljZSB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzYxNjE2MTtcbn1cblxuLyogVHJhbnNwYXJlbnQgc3RhbmRhcmQgKi9cbi5zbGlkZS10b29sIGlvbi10b29sYmFyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1jb2xvcjojZmZmO1xuICAtLWJhY2tncm91bmQ6IHJnYig0MSwgNDEsIDQxKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoNDIsIDQyLCA0MikgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XG59XG4uc2xpZGUtdG9vbCBpb24tdG9vbGJhciAudGl0bGVfaGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWRlLXRvb2wgaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzUzMzE4NjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNsaWRlLXRvb2wuc2Nyb2xsIGlvbi10b29sYmFyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiMwMDA7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjIyNikgMTAwJSk7XG59XG4uc2xpZGUtdG9vbC5zY3JvbGwgaW9uLXRvb2xiYXIgLnRpdGxlX2hlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNsaWRlLXRvb2wuc2Nyb2xsIGlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNsaWRlLXRvb2wuc2Nyb2xsIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1pY29uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC01MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICByaWdodDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICByaWdodDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICByaWdodDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZG93bmVyIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0zMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGRvd25lciB7XG4gIGZyb20ge1xuICAgIHJpZ2h0OiAtMzAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZG93bmVyIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0zMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBkb3duZXIge1xuICBmcm9tIHtcbiAgICByaWdodDogLTMwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBkb3duZXI7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAtby1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbn1cbi5zaG93LWJhY2tncm91bmQgLnRpdGxlX2hlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2F0ZTtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogcHVsc2F0ZTtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IHB1bHNhdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzYXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbmlvbi1iYWRnZSB7XG4gIC0tcGFkZGluZy1ib3R0b206NXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MTBweDtcbiAgLS1wYWRkaW5nLWVuZDoxMHB4O1xuICAtLXBhZGRpbmctdG9wOjVweDtcbn1cblxuLnF1YW50aXR5aW5wdXQge1xuICBwYWRkaW5nOiAycHggMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4ucXVhbnRpdHlidG4gLnNpZ24ge1xuICBwYWRkaW5nOiA3cHggMnB4O1xuICB3aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucXVhbnRpdHlidG4gLnBsdXMge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjQ0MzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuXG4ucXVhbnRpdHlidG4gLm1pbnVzIHtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbn1cblxuLmhlYWRlcl9zdGlrY3kge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgei1pbmRleDogNTA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaGVhZGVyX3N0aWtjeTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IC0xO1xufVxuLmhlYWRlcl9zdGlrY3kgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uc2xpZGUtbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2xpZGVfZG93bl9WaWV3IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1vLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogZG93bmVyO1xuICAtby1hbmltYXRpb24tbmFtZTogZG93bmVyO1xuICBhbmltYXRpb24tbmFtZTogZG93bmVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xufVxuXG4uc2xpZGUtbWVudSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbn1cblxuLnBpY19tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhZGdlQ2FydCB7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIGlvbi1idXR0b24gaW9uLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyZjFiNGU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/item/item.page.ts":
/*!***********************************!*\
  !*** ./src/app/item/item.page.ts ***!
  \***********************************/
/*! exports provided: ItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPage", function() { return ItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ItemPage = class ItemPage {
    constructor(modalController, toastController, server, statusBar, platform, nav, route) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.server = server;
        this.statusBar = statusBar;
        this.platform = platform;
        this.nav = nav;
        this.route = route;
        this.veg = false;
        this.cart = [];
        this.showToolbar = false;
        this.BannerOption = {
            initialSlide: 0,
            slidesPerView: 3.3,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            spaceBetween: 7,
        };
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.route.queryParams.subscribe(params => {
            if (params.id) {
                var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
                var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
                var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
                this.server.getStore(params.id + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((data) => {
                    if (data.data) {
                        this.data = data.data[0];
                        // Order Sort_no
                        this.data.items.sort((a, b) => {
                            return parseFloat(a.sort_no) - parseFloat(b.sort_no);
                        });
                    }
                    else {
                        this.nav.navigateRoot('home');
                    }
                });
            }
            else {
                this.nav.navigateRoot('home');
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined) {
            this.cart_no = Math.floor(Math.random() * 2000000000) + 1;
            localStorage.setItem('cart_no', this.cart_no);
        }
        else {
            this.cart_no = localStorage.getItem('cart_no');
        }
        this.server.cartCount(this.cart_no).subscribe((response) => {
            this.count = response.data;
            this.cart = response.cart;
            if (this.count > 0) {
                this.GetCart();
            }
        });
    }
    GetCart() {
        var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
        var lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
        var lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0;
        this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
            this.data_cart = response.data;
        });
    }
    vegOnly() {
        this.veg = this.veg == true ? false : true;
    }
    showOption(item, currency) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isOpen = true;
            let navigationExtras = {
                queryParams: {
                    item: JSON.stringify(item),
                    cart: this.cart,
                    currency: currency
                }
            };
            this.nav.navigateForward(['/option'], navigationExtras);
        });
    }
    viewInfoStore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: this.data.id
                }
            };
            this.nav.navigateForward(['/info'], navigationExtras);
        });
    }
    addToCart(id, price, type = 0, qty, addon = []) {
        this.presentToast("Elemento Agregado.");
        var allData = {
            cart_no: this.cart_no,
            id: id,
            price: price,
            qtype: type,
            type: 0,
            qty: qty,
            addon: addon,
            price_comm: this.data.c_value
        };
        this.server.addToCart(allData).subscribe((response) => {
            this.count = response.data.count;
            this.cart = response.data.cart;
        });
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
    hasCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].item_id == id) {
                return this.cart[i].qty;
            }
        }
        return false;
    }
    updateCart(id, type = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentToast("Removed Successfully");
            this.server.updateCart(id, type + "?cart_no=" + this.cart_no + "&lid=" + localStorage.getItem('lid')).subscribe((response) => {
                this.cart = response.data;
            });
        });
    }
    onScroll($event) {
        // let title:  HTMLSpanElement = document.querySelector('.content_title');
        // let subTitle: HTMLSpanElement = document.querySelector('.title_header');
        let menuSub = document.querySelector('.slide-menu');
        let ToolSub = document.querySelector('.slide-tool');
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 175;
            if (scrollTop >= 175) {
                menuSub.className = 'slide-menu slide_down_View';
                ToolSub.className = "slide-tool scroll animate__animated animate__lightSpeedInRight";
            }
            else {
                menuSub.className = 'slide-menu';
                ToolSub.className = "slide-tool";
            }
        }
    }
    ScrollTo(div) {
        let menuSub = document.querySelector('.cate_' + div);
        let DownY = menuSub.offsetTop + 210;
        this.Content.scrollToPoint(0, DownY, 300);
    }
};
ItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], ItemPage.prototype, "Content", void 0);
ItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item.page.scss */ "./src/app/item/item.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], ItemPage);



/***/ })

}]);
//# sourceMappingURL=item-item-module-es2015.js.map