(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-order-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ text.history_title }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n  <ion-segment [(ngModel)]=\"pet\" mode=\"md\">\n    <ion-segment-button value=\"1\">\n        Pedidos\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n        Mandaditos\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"pet\">\n    <div *ngSwitchCase=\"1\">\n      <ion-card class=\"welcome-card\" *ngFor=\"let order of data\" mode=\"ios\">\n        <ion-card-header>\n\n          <ion-card-subtitle>\n            {{ order.store.name }} (#{{order.id }}) <ion-badge color=\"primary\" style=\"float:right\">{{ order.total | currency}}</ion-badge>\n          </ion-card-subtitle>\n          <br>\n\n          <ion-row>\n            <ion-col size=\"5\"><b> {{ text.history_date }}</b></ion-col>\n            <ion-col size=\"7\">{{ order.date }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"5\"><b> {{ text.history_status }}</b></ion-col>\n            <ion-col size=\"7\">{{ order.status }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"5\"><b>Comisión por servicio</b></ion-col>\n            <ion-col size=\"7\">\n              {{order.t_charges | currency }}\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"5\"><b>Cargos de envio</b></ion-col>\n            <ion-col size=\"7\">\n              {{order.d_charges | currency }}\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"5\"><b>Metodo de pago</b></ion-col>\n            <ion-col size=\"7\">\n              <span *ngIf=\"order.pay == 1\">Pago En Efectivo</span>\n              <span *ngIf=\"order.pay != 1\">Medio Electronicos</span>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\"><b> {{ text.history_item }}</b></ion-col>\n            <ion-col size=\"3\"><b> {{ text.history_qty }}</b></ion-col>\n            <ion-col size=\"3\"><b> {{ text.history_price }}</b></ion-col>\n          </ion-row>\n\n          <span *ngFor=\"let item of order.items\">\n            <ion-row>\n              <ion-col size=\"6\">{{ item.item }} (<small>{{ item.type }}</small>)</ion-col>\n              <ion-col size=\"3\">{{ item.qty }}</ion-col>\n              <ion-col size=\"3\">{{ order.currency }}{{ item.price * item.qty }}</ion-col>\n            </ion-row>\n\n            <ion-row *ngFor=\"let addon of item.addon\">\n              <ion-col size=\"6\">{{ addon.addon }}</ion-col>\n              <ion-col size=\"3\">{{ addon.qty }}</ion-col>\n              <ion-col size=\"3\">{{ order.currency }}{{ addon.price  }}</ion-col>\n            </ion-row>\n          </span>\n\n          <br>\n          <ion-button *ngIf=\"order.hasRating == 0 || order.ratStore == 0\" fill=\"outline\" size=\"small\" color=\"primary\" routerLink=\"/rate/{{ order.id }}/store\" routerDirection=\"forward\">{{ text.history_rating }}</ion-button>\n          <ion-button *ngIf=\"order.st == 0 && order.pay == 1\" fill=\"outline\" size=\"small\" style=\"float: right\" (click)=\"cancelOrder(order.id)\">{{ text.history_cancel }}</ion-button>\n\n        </ion-card-header>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"2\">\n      <ion-card class=\"welcome-card\" *ngFor=\"let order of event\" mode=\"ios\">\n        <ion-card-header>\n\n          <ion-card-subtitle>\n            (#{{order.id }}) <ion-badge color=\"primary\" style=\"float:right\">{{ order.total | currency}}</ion-badge>\n          </ion-card-subtitle>\n          <br>\n\n          <ion-row>\n            <ion-col size=\"5\"><b> {{ text.history_date }}</b></ion-col>\n            <ion-col size=\"7\">{{ order.date }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"5\"><b> {{ text.history_status }}</b></ion-col>\n            <ion-col size=\"7\">{{ order.status }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n\n            <div class=\"container\">\n              <div class=\"timeline-block timeline-block-right\">\n                <div class=\"marker\"></div>\n                <div class=\"timeline-content\">\n                  <h6>Punto de origen</h6>\n                  <p>{{order.event.address_origin | slice:0:50}}...</p>\n                </div>\n              </div>\n      \n              <div class=\"timeline-block timeline-block-right\">\n                <div class=\"marker\"></div>\n                <div class=\"timeline-content\">\n                  <h6>Punto de destino</h6>\n                  <p>{{order.event.address_destin | slice:0:50}}...</p>\n                </div>\n              </div>\n          </div>\n\n          </ion-row>\n          <br>\n          <ion-button *ngIf=\"order.hasRating == 0\" fill=\"outline\" size=\"small\" color=\"primary\" routerLink=\"/rate/{{ order.id }}/staff\" routerDirection=\"forward\">{{ text.history_rating }}</ion-button>\n          <ion-button *ngIf=\"order.st == 0 && order.pay == 1\" fill=\"outline\" size=\"small\" style=\"float: right\" (click)=\"cancelOrder(order.id)\">{{ text.history_cancel }}</ion-button>\n\n        </ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"text\">\n  <ion-toolbar mode=\"ios\">\n  \n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      \n     <ion-tab-button routerLink=\"/home\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>{{ text.home_footer_name }}</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button routerLink=\"/home\">\n        <ion-icon name=\"pin\"></ion-icon>\n        <ion-label>{{ text.home_nearest }}</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-label>{{ text.home_cart }}</ion-label>\n        <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\n      </ion-tab-button>\n  \n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>{{ text.home_profile }}</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  \n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/account/order/order.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/account/order/order.module.ts ***!
    \***********************************************/

  /*! exports provided: OrderPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPageModule", function () {
      return OrderPageModule;
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


    var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order.page */
    "./src/app/account/order/order.page.ts");

    const routes = [{
      path: '',
      component: _order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]
    }];
    let OrderPageModule = class OrderPageModule {};
    OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })], OrderPageModule);
    /***/
  },

  /***/
  "./src/app/account/order/order.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/account/order/order.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-row {\n  font-size: 12px;\n  border-top: 1px solid #f7f7f7;\n  padding-top: 5px;\n}\n\n.container {\n  width: 100%;\n  padding: 0 0;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n}\n\n.container:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  width: 2px;\n  height: 100%;\n  background: #CCD1D9;\n  z-index: 1;\n}\n\n.timeline-block {\n  width: calc(50% + 8px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  clear: both;\n}\n\n.timeline-block-right {\n  float: right;\n}\n\n.marker {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid #F5F7FA;\n  background: #4FC1E9;\n  margin-top: 10px;\n  z-index: 9999;\n}\n\n.timeline-content {\n  width: 95%;\n  padding: 0 15px;\n  color: #666;\n}\n\n.timeline-content p {\n  font-size: 14px;\n  line-height: 1.5em;\n  word-spacing: 1px;\n  color: #888;\n}\n\n@media screen and (max-width: 768px) {\n  .container:before {\n    left: 8px;\n    width: 2px;\n  }\n\n  .timeline-block {\n    width: 100%;\n  }\n\n  .timeline-block-right {\n    float: none;\n  }\n\n  .timeline-block-left {\n    float: none;\n    direction: ltr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcmRlci9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcYWNjb3VudFxcb3JkZXJcXG9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9vcmRlci9vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDQ1I7O0FESUE7RUFHSSxzQkFBQTtFQUNBLG9CQUFBO0VBR0EsYUFBQTtFQUNBLHlCQUFBO0VBR0EsOEJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURNQTtFQUNJO0lBQ0csU0FBQTtJQUNBLFVBQUE7RUNITDs7RURLRTtJQUNHLFdBQUE7RUNGTDs7RURJRTtJQUNHLFdBQUE7RUNETDs7RURJRTtJQUNHLFdBQUE7SUFDQSxjQUFBO0VDREw7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XG5cdGZvbnQtc2l6ZToxMnB4O1xuXHRib3JkZXItdG9wOjFweCBzb2xpZCAjZjdmN2Y3O1xuXHRwYWRkaW5nLXRvcDo1cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQ0NEMUQ5O1xuICAgICAgICB6LWluZGV4OiAxXG4gICAgfVxufVxuIFxuIFxuLnRpbWVsaW5lLWJsb2NrIHtcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDUwJSArIDhweCk7XG4gICAgd2lkdGg6IC1tb3otY2FsYyg1MCUgKyA4cHgpO1xuICAgIHdpZHRoOiBjYWxjKDUwJSArIDhweCk7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjbGVhcjogYm90aDtcbn1cbiBcbi50aW1lbGluZS1ibG9jay1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuIFxuXG4ubWFya2VyIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNUY3RkE7XG4gICAgYmFja2dyb3VuZDogIzRGQzFFOTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTlcbn1cbiBcbi50aW1lbGluZS1jb250ZW50IHtcbiAgICB3aWR0aDogOTUlO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBjb2xvcjogIzY2NlxufVxuICBcbi50aW1lbGluZS1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgd29yZC1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6ICM4ODg7XG59XG4gXG4gXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWluZXI6YmVmb3JlIHtcbiAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgd2lkdGg6IDJweDtcbiAgICB9XG4gICAgLnRpbWVsaW5lLWJsb2NrIHtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gXG4gICAgLnRpbWVsaW5lLWJsb2NrLWxlZnQge1xuICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIH1cbn0iLCJpb24tcm93IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNDQ0QxRDk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50aW1lbGluZS1ibG9jayB7XG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoNTAlICsgOHB4KTtcbiAgd2lkdGg6IC1tb3otY2FsYyg1MCUgKyA4cHgpO1xuICB3aWR0aDogY2FsYyg1MCUgKyA4cHgpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1ibG9jay1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1hcmtlciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI0Y1RjdGQTtcbiAgYmFja2dyb3VuZDogIzRGQzFFOTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnRpbWVsaW5lLWNvbnRlbnQge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4udGltZWxpbmUtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGxlZnQ6IDhweDtcbiAgICB3aWR0aDogMnB4O1xuICB9XG5cbiAgLnRpbWVsaW5lLWJsb2NrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50aW1lbGluZS1ibG9jay1yaWdodCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAudGltZWxpbmUtYmxvY2stbGVmdCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/order/order.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/account/order/order.page.ts ***!
    \*********************************************/

  /*! exports provided: OrderPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPage", function () {
      return OrderPage;
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

    let OrderPage = class OrderPage {
      constructor(route, server, toastController, nav, loadingController, alertController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.pet = 1;
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {}

      ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
          this.nav.navigateRoot('/login');
          this.presentToast("Inicia sesión para acceder a tu perfil");
        } else {
          this.loadData();
        }
      }

      loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Porfavor espere...'
          });
          yield loading.present();
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          this.server.myOrder(localStorage.getItem('user_id') + "?lid=" + lid).subscribe(response => {
            console.log(response);
            this.data = response.data;
            this.event = response.events;
            loading.dismiss();
          });
        });
      }

      rate() {
        this.nav.navigateForward('/login');
      }

      cancelOrder(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Cancelar orden!',
            message: '¿Estás seguro? ¿Quieres cancelar este pedido?',
            mode: 'ios',
            buttons: [{
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {}
            }, {
              text: 'SI',
              handler: () => {
                this.cnc(id);
              }
            }]
          });
          yield alert.present();
        });
      }

      cnc(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Porfavor espere...'
          });
          yield loading.present();
          this.server.cancelOrder(id, localStorage.getItem('user_id') + "?lid=" + localStorage.getItem('lid')).subscribe(response => {
            this.data = response.data;
            this.presentToast("Pedido cancelado con éxito.");
            loading.dismiss();
          });
        });
      }

      presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 3000,
            position: 'top',
            mode: 'ios',
            color: 'dark'
          });
          toast.present();
        });
      }

    };

    OrderPage.ctorParameters = () => [{
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
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }];

    OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order.page.scss */
      "./src/app/account/order/order.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], OrderPage);
    /***/
  }
}]);
//# sourceMappingURL=account-order-order-module-es5.js.map