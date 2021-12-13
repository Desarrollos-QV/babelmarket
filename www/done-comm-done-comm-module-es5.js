(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["done-comm-done-comm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/done-comm.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/done-comm.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-text-center\">\n\t\t\t<ion-icon name=\"arrow-back\" (click)=\"backPage()\"></ion-icon>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <!-- Buscando Repartidor -->\n    <div class=\"bg_pic\" *ngIf=\"status == 0 || status == 3\">\n      <img src=\"/assets/search_driver.png\" alt=\"Buscando repartidor\">\n    </div>\n\n    <div id=\"container\" *ngIf=\"status == 0 || status == 3\">\n      <div class=\"item\">\n        <img src=\"/assets/car_top.png\" />\n      </div>\n      <div class=\"circle\" style=\"animation-delay: 0s\"></div>\n      <div class=\"circle\" style=\"animation-delay: 1s\"></div>\n      <div class=\"circle\" style=\"animation-delay: 2s\"></div>\n      <div class=\"circle\" style=\"animation-delay: 3s\"></div>\n    </div>\n\n    <ion-card *ngIf=\"status == 0\" class=\"search_r_text animate__animated animate__fadeInUp\">\n      <ion-card-header>\n        Buscando repartidor para tu pedido\n      </ion-card-header>\n      <ion-card-content>\n        <section>\n          <ion-button size=\"small\" color=\"primary\" mode=\"ios\" (click)=\"cancelComm_event(order_id)\">Cancelar pedido</ion-button>\n        </section>\n      </ion-card-content>\n      <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    </ion-card>\n\n    <ion-card *ngIf=\"status == 3\" class=\"search_r_text ion-text-center animate__animated animate__fadeInUp\">\n      <ion-card-header>\n        No pudimos encontrar repartidor\n      </ion-card-header>\n      \n      <ion-card-content>\n        <section>\n          <ion-button size=\"small\" color=\"success\" mode=\"ios\" (click)=\"chkEvents_staffs(order_id)\">Volver a solicitar</ion-button>\n          <ion-button size=\"small\" color=\"primary\" mode=\"ios\" (click)=\"cancelComm_event(order_id)\">Cancelar pedido</ion-button>\n        </section>\n      </ion-card-content>\n    </ion-card>\n  <!-- Buscando Repartidor -->\n\n  <!-- Repartidor acepto pedido -->\n  <div class=\"map-wrapper\" *ngIf=\"status == 1 || status == 4 || status == 4.5 || status == 5\">\n    <div id=\"map_center\">\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n\n  <ion-card *ngIf=\"status == 1 || status == 4 || status == 4.5 || status == 5\" class=\"staff_inrute_text\">\n    <ion-card-header>\n      Seguimiento de ruta.\n    </ion-card-header>\n    \n    <ion-card-content>\n      \n      <div class=\"container\">\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\" *ngIf=\"box_end\">\n          <div class=\"marker\"></div>\n          <div class=\"timeline-content\">\n             <h6>Paquete entregado</h6>\n             <p>Tu paquete ha sido entregado con éxito.</p>\n          </div>\n        </div>\n\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\" *ngIf=\"box_rute\">\n          <div class=\"marker\"></div>\n          <div class=\"timeline-content\">\n             <h6>Paquete en camino</h6>\n             <p>Tu paquete va en camino al destino.</p>\n          </div>\n        </div>\n\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\" *ngIf=\"box_rec\">\n          <div class=\"marker\"></div>\n          <div class=\"timeline-content\">\n             <h6>Paquete recolectado</h6>\n             <p>Tu paquete ha sido recolectado.</p>\n          </div>\n        </div>\n\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\">\n           <div class=\"marker\"></div>\n           <div class=\"timeline-content\">\n              <h6>Pedido Aceptado</h6>\n              <p>El pedido fue aceptado por el repartidor.</p>\n           </div>\n        </div>\n     </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- Repartidor acepto pedido -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/done-comm/done-comm-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/done-comm/done-comm-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DoneCommPageRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoneCommPageRoutingModule", function () {
      return DoneCommPageRoutingModule;
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


    var _done_comm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./done-comm.page */
    "./src/app/done-comm/done-comm.page.ts");

    const routes = [{
      path: '',
      component: _done_comm_page__WEBPACK_IMPORTED_MODULE_3__["DoneCommPage"]
    }, {
      path: 'rate-tripe',
      loadChildren: () => Promise.resolve().then(__webpack_require__.bind(null,
      /*! ./rate-tripe/rate-tripe.module */
      "./src/app/done-comm/rate-tripe/rate-tripe.module.ts")).then(m => m.RateTripePageModule)
    }];
    let DoneCommPageRoutingModule = class DoneCommPageRoutingModule {};
    DoneCommPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DoneCommPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/done-comm/done-comm.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/done-comm/done-comm.module.ts ***!
    \***********************************************/

  /*! exports provided: DoneCommPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoneCommPageModule", function () {
      return DoneCommPageModule;
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


    var _done_comm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./done-comm-routing.module */
    "./src/app/done-comm/done-comm-routing.module.ts");
    /* harmony import */


    var _done_comm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./done-comm.page */
    "./src/app/done-comm/done-comm.page.ts");

    let DoneCommPageModule = class DoneCommPageModule {};
    DoneCommPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _done_comm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoneCommPageRoutingModule"]],
      declarations: [_done_comm_page__WEBPACK_IMPORTED_MODULE_6__["DoneCommPage"]]
    })], DoneCommPageModule);
    /***/
  },

  /***/
  "./src/app/done-comm/done-comm.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/done-comm/done-comm.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  z-index: 999;\n}\nion-header::after {\n  display: none !important;\n}\nion-header.bg_transparent {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  height: auto;\n}\nion-header.bg_transparent ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 60px !important;\n  height: auto;\n  overflow: visible !important;\n  --border-width: 0 !important;\n}\nion-header.bg_transparent ion-toolbar ion-buttons {\n  position: relative !important;\n  margin: 0;\n  --color: #fff !important;\n}\nion-header.bg_transparent ion-toolbar ion-buttons ion-icon {\n  padding: 15px;\n  border-radius: 25px;\n  background: #fff;\n  margin: 15px;\n}\n.bg_pic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.bg_pic img {\n  width: 100%;\n  height: 100%;\n}\n#container {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.item {\n  z-index: 100;\n  padding: 5px;\n}\n.item img {\n  width: 60px;\n}\n@-webkit-keyframes scaleIn {\n  from {\n    -webkit-transform: scale(0.5, 0.5);\n            transform: scale(0.5, 0.5);\n    opacity: 0.5;\n  }\n  to {\n    -webkit-transform: scale(2.5, 2.5);\n            transform: scale(2.5, 2.5);\n    opacity: 0;\n  }\n}\n@keyframes scaleIn {\n  from {\n    -webkit-transform: scale(0.5, 0.5);\n            transform: scale(0.5, 0.5);\n    opacity: 0.5;\n  }\n  to {\n    -webkit-transform: scale(2.5, 2.5);\n            transform: scale(2.5, 2.5);\n    opacity: 0;\n  }\n}\n.circle {\n  border-radius: 50%;\n  background-color: #a1a6ad;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  opacity: 0;\n  -webkit-animation: scaleIn 2s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleIn 2s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n}\n.search_r_text {\n  position: absolute;\n  width: 94%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 999;\n  background: #fff;\n}\n.search_r_text ion-card-content ion-button {\n  text-transform: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.map-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n.map-wrapper #map {\n  width: 100%;\n  height: 100%;\n}\n.staff_inrute_text {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 999;\n  background: #fff;\n}\n.staff_inrute_text ion-card-content .from_to {\n  padding: 4px 15px;\n  border-radius: 15px;\n}\n.staff_inrute_text ion-card-content .from_to ion-item {\n  --padding-start:0 !important;\n  --inner-padding-end:0 !important;\n  --padding-bottom: 5px;\n  --padding-top:5px;\n}\n.staff_inrute_text ion-card-content .from_to ion-item:first-child {\n  border-bottom: 1px solid #54d854;\n}\n.container {\n  width: 100%;\n  height: 120px;\n  padding: 0 0;\n  margin: 10px auto;\n  position: relative;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  width: 2px;\n  height: 100%;\n  background: #CCD1D9;\n  z-index: 1;\n}\n.timeline-block {\n  width: calc(50% + 8px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  clear: both;\n}\n.timeline-block-right {\n  float: right;\n}\n.marker {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid #F5F7FA;\n  background: #4FC1E9;\n  margin-top: 10px;\n  z-index: 9999;\n}\n.timeline-content {\n  width: 95%;\n  padding: 0 15px;\n  color: #666;\n}\n.timeline-content h6 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.timeline-content p {\n  font-size: 14px;\n  line-height: 1.5em;\n  word-spacing: 1px;\n  color: #888;\n}\n@media screen and (max-width: 768px) {\n  .container:before {\n    left: 8px;\n    width: 2px;\n  }\n\n  .timeline-block {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n\n  .timeline-block-right {\n    float: none;\n  }\n\n  .timeline-block-left {\n    float: none;\n    direction: ltr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZS1jb21tL0M6XFxpb25pY1xcQmFiZWxcXHVzdWFyaW9zL3NyY1xcYXBwXFxkb25lLWNvbW1cXGRvbmUtY29tbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmUtY29tbS9kb25lLWNvbW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtBQ0FKO0FERUk7RUFDSSx3QkFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RSO0FER1E7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUNEWjtBREdZO0VBQ0ksNkJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUNEaEI7QURHZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNEcEI7QURXQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDUko7QURVSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDUlI7QURZQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEWUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEWUE7RUFDSSxXQUFBO0FDVEo7QURZQTtFQUNJO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFlBQUE7RUNUSjtFRFdFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNUSjtBQUNGO0FEQ0E7RUFDSTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDVEo7RURXRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDVEo7QUFDRjtBRFlBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ1ZKO0FEYUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVEo7QURhUTtFQUNJLG9CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDWFo7QURrQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZko7QURpQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNoQk47QURvQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEbUJRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ2pCWjtBRG1CWTtFQUNJLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDakJoQjtBRG9CZ0I7RUFDSSxnQ0FBQTtBQ2xCcEI7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUN2Qko7QUR5Qkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUN2QlI7QUQ0QkM7RUFHRyxzQkFBQTtFQUNBLG9CQUFBO0VBR0EsYUFBQTtFQUNBLHlCQUFBO0VBR0EsOEJBQUE7RUFDQSxXQUFBO0FDekJKO0FENEJDO0VBQ0csWUFBQTtBQ3pCSjtBRDZCQztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDMUJKO0FENkJDO0VBQ0csVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDMUJKO0FENkJDO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDMUJKO0FENkJDO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDMUJKO0FEOEJDO0VBQ0c7SUFDRyxTQUFBO0lBQ0EsVUFBQTtFQzNCTDs7RUQ2QkU7SUFDRyxXQUFBO0lBQ0EsbUJBQUE7RUMxQkw7O0VENEJFO0lBQ0csV0FBQTtFQ3pCTDs7RUQ0QkU7SUFDRyxXQUFBO0lBQ0EsY0FBQTtFQ3pCTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZG9uZS1jb21tL2RvbmUtY29tbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWhlYWRlciB7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLmJnX3RyYW5zcGFyZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICAgICAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uYmdfcGljIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLml0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjUsIC41KTtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41LCAyLjUpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMWE2YWQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogc2NhbGVJbiAycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjM2LCAuMTEsIC44OSwgLjMyKTtcclxufVxyXG5cclxuLnNlYXJjaF9yX3RleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gXHJcbi5tYXAtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgXHJcbiAgICAjbWFwX2NlbnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjbWFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnN0YWZmX2lucnV0ZV90ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwO3JpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIC5mcm9tX3RvIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOjAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6NXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig4NCwgMjE2LCA4NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDQ0QxRDk7XHJcbiAgICAgICAgei1pbmRleDogMVxyXG4gICAgfVxyXG59XHJcbiBcclxuIFxyXG4gLnRpbWVsaW5lLWJsb2NrIHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoNTAlICsgOHB4KTtcclxuICAgIHdpZHRoOiAtbW96LWNhbGMoNTAlICsgOHB4KTtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSArIDhweCk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBjbGVhcjogYm90aDtcclxuIH1cclxuIFxyXG4gLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuIH1cclxuIFxyXG5cclxuIC5tYXJrZXIge1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjVGN0ZBO1xyXG4gICAgYmFja2dyb3VuZDogIzRGQzFFOTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5XHJcbiB9XHJcbiBcclxuIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBjb2xvcjogIzY2NlxyXG4gfVxyXG4gXHJcbiAudGltZWxpbmUtY29udGVudCBoNiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbiB9XHJcbiBcclxuIC50aW1lbGluZS1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgd29yZC1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuIH1cclxuIFxyXG4gXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lcjpiZWZvcmUge1xyXG4gICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgd2lkdGg6IDJweDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZS1ibG9jayB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtYmxvY2stcmlnaHQge1xyXG4gICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiBcclxuICAgIC50aW1lbGluZS1ibG9jay1sZWZ0IHtcclxuICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICB9XHJcbiB9XHJcbiAiLCJpb24taGVhZGVyIHtcbiAgei1pbmRleDogOTk5O1xufVxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyLmJnX3RyYW5zcGFyZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5pb24taGVhZGVyLmJnX3RyYW5zcGFyZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyLmJnX3RyYW5zcGFyZW50IGlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlci5iZ190cmFuc3BhcmVudCBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmJnX3BpYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJnX3BpYyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXRlbSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaXRlbSBpbWcge1xuICB3aWR0aDogNjBweDtcbn1cblxuQGtleWZyYW1lcyBzY2FsZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSwgMi41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhNmFkO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzY2FsZUluIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM2LCAwLjExLCAwLjg5LCAwLjMyKTtcbn1cblxuLnNlYXJjaF9yX3RleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5NCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlYXJjaF9yX3RleHQgaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG59XG4ubWFwLXdyYXBwZXIgI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zdGFmZl9pbnJ1dGVfdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc3RhZmZfaW5ydXRlX3RleHQgaW9uLWNhcmQtY29udGVudCAuZnJvbV90byB7XG4gIHBhZGRpbmc6IDRweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnN0YWZmX2lucnV0ZV90ZXh0IGlvbi1jYXJkLWNvbnRlbnQgLmZyb21fdG8gaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6MCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOjAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctdG9wOjVweDtcbn1cbi5zdGFmZl9pbnJ1dGVfdGV4dCBpb24tY2FyZC1jb250ZW50IC5mcm9tX3RvIGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NGQ4NTQ7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjQ0NEMUQ5O1xuICB6LWluZGV4OiAxO1xufVxuXG4udGltZWxpbmUtYmxvY2sge1xuICB3aWR0aDogLXdlYmtpdC1jYWxjKDUwJSArIDhweCk7XG4gIHdpZHRoOiAtbW96LWNhbGMoNTAlICsgOHB4KTtcbiAgd2lkdGg6IGNhbGMoNTAlICsgOHB4KTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtYmxvY2stcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tYXJrZXIge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGNUY3RkE7XG4gIGJhY2tncm91bmQ6ICM0RkMxRTk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi50aW1lbGluZS1jb250ZW50IHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRpbWVsaW5lLWNvbnRlbnQgaDYge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGxlZnQ6IDhweDtcbiAgICB3aWR0aDogMnB4O1xuICB9XG5cbiAgLnRpbWVsaW5lLWJsb2NrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC50aW1lbGluZS1ibG9jay1sZWZ0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/done-comm/done-comm.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/done-comm/done-comm.page.ts ***!
    \*********************************************/

  /*! exports provided: DoneCommPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoneCommPage", function () {
      return DoneCommPage;
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


    var _rate_tripe_rate_tripe_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rate-tripe/rate-tripe.page */
    "./src/app/done-comm/rate-tripe/rate-tripe.page.ts");
    /* harmony import */


    var _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/mapStyle.js */
    "./src/app/service/mapStyle.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let DoneCommPage = class DoneCommPage {
      constructor(nav, server, toastController, loadingController, modalController) {
        this.nav = nav;
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.status = 0;
        this.chargeMap = false;
        this.chargeaudio = false;
        this.box_rec = false;
        this.box_rute = false;
        this.box_end = false;
        this.rate_box = false;
        this.user_id = localStorage.getItem('user_id');
        this.loadData();
        this.Interval_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000).subscribe(() => {
          this.loadData();
        });
      }

      ngOnInit() {}

      ionViewWillEnter() {
        this.box_rec = false;
        this.box_rute = false;
        this.box_end = false;
        this.rate_box = false;
      }

      loadData() {
        this.server.chkEvents_comm(this.user_id).subscribe(data => {
          if (data.data.length > 0) {
            this.data = data.data[0];
            let event = data.data[0].event;
            this.status = event.status;
            this.address_destin = event.address_destin;
            this.address_origin = event.address_origin;

            if (this.status != 0 && this.status != 3) {
              if (data.data[0].dboy) {
                this.lat = data.data[0].dboy.lat;
                this.lng = data.data[0].dboy.lng;
              } else {
                this.lat = event.lat_orig;
                this.lng = event.lng_orig;
              }

              if (this.chargeMap == false) {
                this.chargeMap = true;
                setTimeout(() => {
                  this.loadMap();
                }, 1200);
              } else {
                this.ViewdBoy();
              }
            }

            if (this.status == 3) {
              this.box_rec = false;
              this.box_rute = false;
              this.box_end = false;

              if (this.chargeaudio == false) {
                this.chargeaudio = true;
                var audio = new Audio('../../assets/comm_alert.mp3');
                audio.play();
              }
            }

            if (this.status == 2) {
              this.box_rec = false;
              this.box_rute = false;
              this.box_end = false;
              clearInterval(this.Interval_1);
              this.Interval_1.unsubscribe();
              this.presentToast("El pedido ha sido cancelado", 'warning');
              this.nav.navigateForward('/home');
            }

            if (this.status == 4) {
              this.box_rec = true;
            }

            if (this.status == 4.5) {
              this.box_rec = true;
              this.box_rute = true;
            }

            if (this.status == 5) {
              clearInterval(this.Interval_1);
              this.Interval_1.unsubscribe();

              if (this.rate_box == false) {
                this.rate_box = true;
                this.box_rec = true;
                this.box_rute = true;
                this.box_end = true;
                this.presentToast("El pedido ha sido entregado con éxito.", 'success');
                this.viewRateTrip();
              }
            }

            this.order_id = event.id;
          } else {
            clearInterval(this.Interval_1);
            this.Interval_1.unsubscribe();
            this.presentToast("No tienes pedidos en curso", 'danger');
            this.nav.navigateRoot('/home');
          }
        });
      }

      chkEvents_staffs(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            mode: 'ios'
          });
          yield loading.present();
          this.chargeaudio = false;
          this.box_rec = false;
          this.box_rute = false;
          this.box_end = false;
          let data = {
            id_order: id
          };
          this.server.chkEvents_staffs(data).subscribe(data => {
            loading.dismiss();

            if (data.data.status == false) {
              this.presentToast("Algo ha ocurido por favor, vuelva a intentarlo", "danger");
            }
          });
        });
      }

      cancelComm_event(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            mode: 'ios'
          });
          yield loading.present();
          this.server.cancelComm_event(id).subscribe(data => {
            loading.dismiss();

            if (data.data.status == 'done') {
              this.presentToast("El pedido ha sido cancelado", 'warning');
              this.nav.navigateForward('/home');
            } else {
              this.presentToast("Algo ha ocurido, por favor vuelve a intentar", 'danger');
            }
          });
        });
      }

      loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({});
          yield loading.present();
          const icon = {
            url: 'assets/car_top.png',
            scaledSize: new google.maps.Size(50, 63)
          };
          let latLng = new google.maps.LatLng(this.lat, this.lng);
          let mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_5__["mapStyle"]
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          google.maps.event.addListenerOnce(this.map, 'idle', () => {
            this.marker = new google.maps.Marker({
              position: latLng,
              map: this.map,
              icon: icon
            });
            this.chargeMap = true;
          });
          loading.dismiss();
        });
      }

      ViewdBoy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let latLng = new google.maps.LatLng(this.lat, this.lng);
          this.map.setCenter(latLng);
          this.marker.setPosition(latLng);
        });
      }

      viewRateTrip() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _rate_tripe_rate_tripe_page__WEBPACK_IMPORTED_MODULE_4__["RateTripePage"],
            animated: true,
            mode: 'ios',
            cssClass: 'my-custom-modal-css',
            backdropDismiss: false,
            showBackdrop: true,
            componentProps: {
              'data_post': JSON.stringify(this.data)
            }
          });
          modal.onDidDismiss().then(data => {
            console.log(data);
            clearInterval(this.Interval_1);
            this.Interval_1.unsubscribe();
            this.loadData();
          });
          return yield modal.present();
        });
      }

      backPage() {
        this.nav.navigateRoot('/home');
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

    DoneCommPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DoneCommPage.prototype, "mapElement", void 0);
    DoneCommPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-done-comm',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./done-comm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/done-comm.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./done-comm.page.scss */
      "./src/app/done-comm/done-comm.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DoneCommPage);
    /***/
  }
}]);
//# sourceMappingURL=done-comm-done-comm-module-es5.js.map