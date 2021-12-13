(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-address-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n       <ion-button (click)=\"loadMap()\" shape=\"round\" fill=\"outline\" style=\"font-size: 12px\">\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n        Mi ubicación\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title> </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"assets/map-marker.png\" width=\"30px\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n</ion-content>\n<ion-footer>\n \n  <form #form=\"ngForm\" (ngSubmit)=\"saveAddress(form.value)\">\n    \n    <div class=\"footer_content\">\n      <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">Dirección</ion-label>\n                        <ion-textarea [(ngModel)]=\"address\" name=\"address\" disabled></ion-textarea>\n                    </div>\n                </div>\n            </ion-item>\n\n            <div class=\"address_title\">\n                <h3>Guardar Dirección</h3>\n                <ion-radio-group [(ngModel)]=\"type_add\" name=\"type_add\">\n                    <ion-row>\n                        <ion-col size=\"4\">\n                            <ion-item lines=\"none\">\n                                <ion-radio slot=\"start\" value=\"Hogar\"></ion-radio>\n                                <ion-label class=\"d-flex\">\n                                    <div class=\"img_container\">\n                                        <div class=\"img_box\">\n                                            <img src=\"assets/ic_homeblk.png\">\n                                            <img src=\"assets/ic_homewt.png\">\n                                        </div>\n                                        <h2>Hogar</h2>\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-item lines=\"none\">\n                                <ion-radio slot=\"start\" value=\"Oficina\"></ion-radio>\n                                <ion-label class=\"d-flex\">\n                                    <div class=\"img_container\">\n                                        <div class=\"img_box\">\n                                            <img src=\"assets/ic_officeblk.png\">\n                                            <img src=\"assets/ic_officewt.png\">\n                                        </div>\n                                        <h2>Oficina</h2>\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-item lines=\"none\">\n                                <ion-radio slot=\"start\" value=\"Otro\"></ion-radio>\n                                <ion-label class=\"d-flex\">\n                                    <div class=\"img_container\">\n                                        <div class=\"img_box\">\n                                            <img src=\"assets/ic_otherblk.png\">\n                                            <img src=\"assets/ic_otherwt.png\">\n                                        </div>\n                                        <h2>Otro</h2>\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-radio-group>\n            </div>\n        </ion-list>\n      </div>\n\n    </div>\n    <ion-button expand=\"full\" class=\"btn\" mode=\"md\" type=\"submit\">Guardar dirección</ion-button>\n  </form>\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/account/address/address.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/address/address.module.ts ***!
    \***************************************************/

  /*! exports provided: AddressPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageModule", function () {
      return AddressPageModule;
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


    var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./address.page */
    "./src/app/account/address/address.page.ts");

    const routes = [{
      path: '',
      component: _address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]
    }];
    let AddressPageModule = class AddressPageModule {};
    AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })], AddressPageModule);
    /***/
  },

  /***/
  "./src/app/account/address/address.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/account/address/address.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid #501BB3;\n}\n\n#address {\n  padding: 0px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.map-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n\n.map-wrapper #map {\n  width: 100%;\n  height: 100%;\n}\n\nion-footer .form {\n  padding: 0;\n  padding-top: 30px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  background: #fff;\n}\n\nion-footer .form ion-list {\n  padding: 0px 20px 23px 20px;\n}\n\nion-footer .form ion-list .address_title h3 {\n  color: #000 !important;\n  font-size: 0.73rem !important;\n  font-weight: 500;\n  margin-bottom: 10px !important;\n  text-transform: uppercase;\n  letter-spacing: 0.5px !important;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item {\n  padding: 7px 8px !important;\n  border-radius: 50px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  background: #fff;\n  margin: 0;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item ion-label {\n  width: 100% !important;\n  position: relative;\n  max-width: 100% !important;\n  white-space: normal;\n  margin: 0 !important;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item ion-label .img_container {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item ion-label .img_container .img_box {\n  position: relative;\n  width: 23px;\n  height: 23px;\n  overflow: hidden;\n  margin-right: 7px;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item ion-label .img_container .img_box img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n  display: block;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item ion-label .img_container .img_box img:nth-child(odd) {\n  width: 100%;\n  height: auto;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item ion-label .img_container h2 {\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: #000;\n  text-transform: none;\n  position: relative;\n  top: 0px;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item ion-radio {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  --color: transparent !important;\n  --color-checked: transparent !important;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  background: #533186;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  border-radius: 50px;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item.item-radio-checked {\n  border-color: transparent !important;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item.item-radio-checked::before {\n  width: 100%;\n  height: 100%;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item.item-radio-checked ion-label .img_container .img_box img:nth-child(even) {\n  width: 100%;\n  height: auto;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item.item-radio-checked ion-label .img_container .img_box img:nth-child(odd) {\n  width: 0;\n  height: 0;\n}\n\nion-footer .form ion-list .address_title ion-row ion-col ion-item.item-radio-checked ion-label .img_container h2 {\n  color: #fff;\n}\n\nion-footer .button.btn.btnA {\n  display: none;\n}\n\nion-footer.active .form {\n  display: block;\n}\n\nion-footer.active .footer_content {\n  height: 314px;\n}\n\nion-footer.active .button.btn.btnA {\n  display: block;\n}\n\nion-footer.active .button.btn.btnB {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hZGRyZXNzL0M6XFxpb25pY1xcQmFiZWxcXHVzdWFyaW9zL3NyY1xcYXBwXFxhY2NvdW50XFxhZGRyZXNzXFxhZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSEo7O0FEVUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNQUjs7QURTUTtFQUNJLDJCQUFBO0FDUFo7O0FEVWdCO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FDUnBCOztBRGF3QjtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDWDVCOztBRGE0QjtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNYaEM7O0FEYWdDO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNYcEM7O0FEYW9DO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNYeEM7O0FEYXdDO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ1g1Qzs7QURhNEM7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1hoRDs7QURnQm9DO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNkeEM7O0FEbUI0QjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7QUNqQmhDOztBRG9CNEI7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsbUJBQUE7QUNsQmhDOztBRHFCNEI7RUFDSSxvQ0FBQTtBQ25CaEM7O0FEcUJnQztFQUNJLFdBQUE7RUFDQSxZQUFBO0FDbkJwQzs7QUQwQmdEO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN4QnBEOztBRDJCZ0Q7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQ3pCcEQ7O0FEOEJ3QztFQUNJLFdBQUE7QUM1QjVDOztBRDRDUTtFQUNJLGFBQUE7QUMxQ1o7O0FEK0NRO0VBQ0ksY0FBQTtBQzdDWjs7QURnRFE7RUFDRyxhQUFBO0FDOUNYOztBRGtEWTtFQUNJLGNBQUE7QUNoRGhCOztBRG1EWTtFQUNJLGFBQUE7QUNqRGhCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwMUJCMztcbn1cbiBcbiBcbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIFxuXG4gXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gXG4gICNtYXBfY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gICAgbWFyZ2luLXRvcDogLTQxcHg7XG4gIH1cblxuICAjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICBcbiAgIFxuICAgIC5mb3JtIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMjNweCAyMHB4O1xuXG4gICAgICAgICAgICAuYWRkcmVzc190aXRsZSB7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzNyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDhweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWdfY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTMzMTg2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgICYuYnRuQSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXJfY29udGVudCB7XG4gICAgICAgICAgIGhlaWdodDogMzE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgICAgICAmLmJ0bkEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmJ0bkIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwMUJCMztcbn1cblxuI2FkZHJlc3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG59XG4ubWFwLXdyYXBwZXIgI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1mb290ZXIgLmZvcm0ge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4IDIwcHggMjNweCAyMHB4O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBoMyB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43M3JlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiA3cHggOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDA7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IC5hZGRyZXNzX3RpdGxlIGlvbi1yb3cgaW9uLWNvbCBpb24taXRlbSBpb24tbGFiZWwge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLmFkZHJlc3NfdGl0bGUgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIGlvbi1sYWJlbCAuaW1nX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0gaW9uLWxhYmVsIC5pbWdfY29udGFpbmVyIC5pbWdfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLmFkZHJlc3NfdGl0bGUgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIGlvbi1sYWJlbCAuaW1nX2NvbnRhaW5lciAuaW1nX2JveCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLmFkZHJlc3NfdGl0bGUgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIGlvbi1sYWJlbCAuaW1nX2NvbnRhaW5lciAuaW1nX2JveCBpbWc6bnRoLWNoaWxkKG9kZCkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0gaW9uLWxhYmVsIC5pbWdfY29udGFpbmVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICM1MzMxODY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuYWRkcmVzc190aXRsZSBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCAuaW1nX2NvbnRhaW5lciAuaW1nX2JveCBpbWc6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLmFkZHJlc3NfdGl0bGUgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtLml0ZW0tcmFkaW8tY2hlY2tlZCBpb24tbGFiZWwgLmltZ19jb250YWluZXIgLmltZ19ib3ggaW1nOm50aC1jaGlsZChvZGQpIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLmFkZHJlc3NfdGl0bGUgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtLml0ZW0tcmFkaW8tY2hlY2tlZCBpb24tbGFiZWwgLmltZ19jb250YWluZXIgaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4uYnRuQSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tZm9vdGVyLmFjdGl2ZSAuZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWZvb3Rlci5hY3RpdmUgLmZvb3Rlcl9jb250ZW50IHtcbiAgaGVpZ2h0OiAzMTRweDtcbn1cbmlvbi1mb290ZXIuYWN0aXZlIC5idXR0b24uYnRuLmJ0bkEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1mb290ZXIuYWN0aXZlIC5idXR0b24uYnRuLmJ0bkIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/address/address.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/account/address/address.page.ts ***!
    \*************************************************/

  /*! exports provided: AddressPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
      return AddressPage;
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


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/mapStyle.js */
    "./src/app/service/mapStyle.js");

    let AddressPage = class AddressPage {
      constructor(route, server, toastController, nav, loadingController, geolocation, nativeGeocoder, events) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.events = events;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.route.queryParams.subscribe(params => {
          this.location = JSON.parse(params.location);
          this.lat = this.location.lat;
          this.lng = this.location.lng;
          this.address = params.address;
        });
      }

      ngOnInit() {
        setTimeout(() => {
          this.loadMap();
        }, 800);
      }

      ionViewWillEnter() {
        this.admin = JSON.parse(localStorage.getItem('admin'));
      }

      loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({});
          yield loading.present();
          let latLng = new google.maps.LatLng(this.lat, this.lng);
          let mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_7__["mapStyle"]
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          this.map.addListener('drag', () => {
            this.server.GeocodeFromCoords(this.map.center.lat(), this.map.center.lng(), this.admin.ApiKey_google).subscribe(data => {
              let formatted_address = data.results[0].formatted_address;
              this.address = formatted_address;
            });
          });
          loading.dismiss();
        });
      }

      getAddressFromCoords(lattitude, longitude) {// var geocoder = new google.maps.Geocoder;
        // let $this = this;
        // let options: NativeGeocoderOptions = {
        //   useLocale: true,
        //   maxResults: 5
        // };
        // this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        //   .then((result: NativeGeocoderResult[]) => {
        //     this.address = "";
        //     let responseAddress = [];
        //     for (let [key, value] of Object.entries(result[0])) {
        //       if(value.length > 0)
        //       responseAddress.push(value);
        //     }
        //     responseAddress.reverse();
        //     for (let value of responseAddress) {
        //       this.address += value+", ";
        //     }
        //     this.address = this.address.slice(0, -2);
        //   })
        //   .catch((error: any) =>{ 
        //     console.log("Error ReverseGeoCode => ",error);
        //     var latlng = {lat: parseFloat(lattitude), lng: parseFloat(longitude)};
        //     let responseAddress = [];
        //     geocoder.geocode({'location': latlng}, function(result, status) {
        //       if (status === 'OK') {
        //         $this.address = "";
        //         for (let [key, value] of Object.entries(result[0])) {
        //           responseAddress.push(value); 
        //         }
        //         responseAddress.reverse();
        //         for (let value of responseAddress) {
        //           $this.address += value+", ";
        //         }
        //         console.log('Reponse => ',responseAddress);
        //         $this.address = responseAddress[4];
        //       } else {
        //         console.log('Geocoder failed due to: ' + status);
        //       }
        //     });
        //   });
      }

      saveAddress(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Porfavor espere...'
          });
          yield loading.present();
          var lat = this.map.center.lat();
          var lng = this.map.center.lng();
          this.server.GetNearbyCity("&lat=" + lat + "&lng=" + lng).subscribe(response => {
            if (response.data.nearby == true) {
              if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
                localStorage.setItem('city_id', response.data.data[0].id);
                localStorage.setItem('city_name', response.data.data[0].name);
                this.events.publish('change_city', response.data.data[0].id);
                this.server.updateCity("id=" + localStorage.getItem('user_id') + "&city_id=" + response.data.data[0].id).subscribe(() => {});
              } else {
                localStorage.setItem('city_id', response.data.data[0].id);
                localStorage.setItem('city_name', response.data.data[0].name);
                this.events.publish('change_city', response.data.data[0].id);
              }

              var allData = {
                address: this.address,
                type: this.type_add,
                lat: this.map.center.lat(),
                lng: this.map.center.lng(),
                user_id: localStorage.getItem('user_id')
              };
              this.server.saveAddress(allData).subscribe(response => {
                if (response.msg == 'done') {
                  localStorage.setItem("address", this.address);
                  localStorage.setItem('address_id', response.id);
                  localStorage.setItem("current_lat", this.map.center.lat());
                  localStorage.setItem('current_lng', this.map.center.lng());
                  this.nav.navigateForward('home');
                  this.presentToast("Dirección guardada con éxito.", 'success');
                } else {
                  this.presentToast(JSON.stringify(response.data), 'danger');
                }

                loading.dismiss();
              });
            } else {
              loading.dismiss();
              this.presentToast("Aún no tenemos servicio en esta ubicación", 'danger');
            }
          });
        });
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

    AddressPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddressPage.prototype, "mapElement", void 0);
    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/account/address/address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])], AddressPage);
    /***/
  }
}]);
//# sourceMappingURL=account-address-address-module-es5.js.map