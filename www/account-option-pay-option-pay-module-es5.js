(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-option-pay-option-pay-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/option-pay/option-pay.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/option-pay/option-pay.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"header\">\n    <ion-card-header>\n      <ion-card-title>\n        Tus métodos de pago\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <!-- Por Defecto -->\n  <ion-list class=\"defaults_items\">\n    <ion-list-header>\n      <span>Método predeterminado</span>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"assets/cash_icon.png\" alt=\"Cash\">\n      </ion-thumbnail>\n\n      <ion-label>\n        <h3>Pago en efectivo</h3>\n      </ion-label>\n\n      <ion-radio slot=\"end\" value=\"1\" (ionSelect)=\"setType(1)\" [checked]=\"otype == 1\"></ion-radio>\n    </ion-item>\n    \n    <ion-item *ngIf=\"paypal_id\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"assets/paypal_icon.png\" alt=\"Paypal\">\n      </ion-thumbnail>\n\n      <ion-label>\n        <h3>PayPal</h3>\n      </ion-label>\n\n      <ion-radio slot=\"end\" value=\"2\" (ionSelect)=\"setType(2)\" [checked]=\"otype == 2\"></ion-radio>\n    </ion-item>\n\n    <ion-item *ngIf=\"viewCardPred\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"assets/card_icon.png\" alt=\"Card\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{cardPredClient.card_number}}</h3>\n        <p>{{cardPredClient.brand}}</p>\n        <p>{{cardPredClient.bank_name}}</p>\n      </ion-label>\n\n      <ion-radio slot=\"end\" value=\"3\" (ionSelect)=\"setType(3)\" [checked]=\"otype == 3\"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <!-- Por Defecto -->\n\n  <!-- Tarjetas agregadas -->\n  <ion-list>\n    <ion-list-header>\n      <span>Tarjetas Registradas</span>  \n    </ion-list-header>\n    \n    <img src=\"assets/add_card.png\" alt=\"add card\" *ngIf=\"maxCards\" (click)='addNewCard()' style=\"max-width: 60%;margin-left:15px;\">\n    \n    <ion-item *ngFor=\"let c of cards\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/card_icon.png\" alt=\"Card\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{c.card_number}}</h3>\n        <p>{{c.brand}}</p>\n        <p>{{c.bank_name}}</p>\n        <p>\n          <ion-button (click)=\"markPred(c.id)\" color=\"success\" style=\"text-transform: capitalize;\">\n            <ion-icon name=\"checkmark\" style=\"font-size: 24px;\"></ion-icon>\n            Predeterminada\n          </ion-button>\n          <ion-button (click)=\"DeleteCard(c.id)\" color=\"danger\" style=\"text-transform: capitalize;\">\n            <ion-icon name=\"trash\" style=\"font-size: 24px;\"></ion-icon>\n            Eliminar\n          </ion-button>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <!-- Tarjetas agregadas -->\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/account/option-pay/option-pay-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/account/option-pay/option-pay-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: OptionPayPageRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPayPageRoutingModule", function () {
      return OptionPayPageRoutingModule;
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


    var _option_pay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./option-pay.page */
    "./src/app/account/option-pay/option-pay.page.ts");

    const routes = [{
      path: '',
      component: _option_pay_page__WEBPACK_IMPORTED_MODULE_3__["OptionPayPage"]
    }];
    let OptionPayPageRoutingModule = class OptionPayPageRoutingModule {};
    OptionPayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OptionPayPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/account/option-pay/option-pay.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/account/option-pay/option-pay.module.ts ***!
    \*********************************************************/

  /*! exports provided: OptionPayPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPayPageModule", function () {
      return OptionPayPageModule;
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


    var _option_pay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./option-pay-routing.module */
    "./src/app/account/option-pay/option-pay-routing.module.ts");
    /* harmony import */


    var _option_pay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./option-pay.page */
    "./src/app/account/option-pay/option-pay.page.ts");

    let OptionPayPageModule = class OptionPayPageModule {};
    OptionPayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _option_pay_routing_module__WEBPACK_IMPORTED_MODULE_5__["OptionPayPageRoutingModule"]],
      declarations: [_option_pay_page__WEBPACK_IMPORTED_MODULE_6__["OptionPayPage"]]
    })], OptionPayPageModule);
    /***/
  },

  /***/
  "./src/app/account/option-pay/option-pay.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/account/option-pay/option-pay.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  box-shadow: none;\n  margin: 0 !important;\n}\n.header ion-card-header ion-card-title {\n  max-width: 80%;\n  font-size: 32px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcHRpb24tcGF5L0M6XFxpb25pY1xcQmFiZWxcXHVzdWFyaW9zL3NyY1xcYXBwXFxhY2NvdW50XFxvcHRpb24tcGF5XFxvcHRpb24tcGF5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9vcHRpb24tcGF5L29wdGlvbi1wYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQ0RKO0FES1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L29wdGlvbi1wYXkvb3B0aW9uLXBheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLmhlYWRlciBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/option-pay/option-pay.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/account/option-pay/option-pay.page.ts ***!
    \*******************************************************/

  /*! exports provided: OptionPayPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPayPage", function () {
      return OptionPayPage;
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
    /*! ../../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _form_card_form_card_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form-card/form-card.page */
    "./src/app/account/option-pay/form-card/form-card.page.ts");

    let OptionPayPage = class OptionPayPage {
      constructor(server, modalController, loadingController, toastController, alertController) {
        this.server = server;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.otype = localStorage.getItem('otype_user') ? JSON.parse(localStorage.getItem('otype_user')) : 1;
        this.cards = [];
        this.cardPredID = localStorage.getItem('cardPredClient') ? localStorage.getItem('cardPredClient') : null;
        this.viewCardPred = false;
        this.maxCards = true;
      }

      ngOnInit() {}

      ionViewWillEnter() {
        if (!localStorage.getItem('otype_user') && localStorage.getItem('otype_user') == null) {
          localStorage.setItem('otype_user', "1");
          this.setType(1);
        } else {
          this.setType(localStorage.getItem('otype_user'));
        }

        this.admin = JSON.parse(localStorage.getItem('admin'));

        if (this.admin.paypal_client_id) {
          this.paypal_id = this.admin.paypal_client_id;
        }

        this.server.userInfo(localStorage.getItem('user_id')).subscribe(response => {
          this.user = response.data; // Obtenemos las tarjetas del cliente

          this.GetCards();
        });
      }

      GetCards() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({});
          yield loading.present();
          let allData = {
            'customer': this.user.customer_id
          }; // Limpiamos

          this.cardPredClient = [];
          this.cards = [];
          this.viewCardPred = false;
          this.maxCards = true;
          this.server.GetCards(allData).subscribe(data => {
            if (data.data.status == true) {
              this.cards = data.data.data;
            } else {
              this.presentToast(data.data.data.description, 'danger');
            } // Obtenemos la tarjeta predeterminada


            if (this.cards.length > 0) {
              // Limitamos el agregado de tarjetas
              if (this.cards.length >= 3) this.maxCards = false;

              for (let c = 0; c < this.cards.length; c++) {
                const element = this.cards[c];

                if (element.id == this.cardPredID) {
                  this.cardPredClient = element;
                  this.viewCardPred = true;
                  break;
                }
              }
            } else {
              if (this.otype == 3) this.otype = 1;
              localStorage.setItem('otype_user', "1");
            }

            loading.dismiss();
          });
        });
      }

      DeleteCard(cardId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Advertencia!!',
            message: "Estas a punto de eliminar esta tarjeta ¿Deseas hacerlo?",
            mode: 'ios',
            buttons: [{
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                this.presentToast("La tarjeta no sera eliminada.", 'success');
              }
            }, {
              text: 'Aceptar',
              handler: () => {
                let allData = {
                  'customer': this.user.customer_id,
                  'cardId': cardId
                };
                this.server.DeleteCard(allData).subscribe(data => {
                  if (data.data.status == true) {
                    if (this.otype == 3) this.otype = 1;
                    localStorage.setItem('otype_user', "1");
                    this.presentToast("La tarjeta se ha eliminado.", 'success');
                  } else {
                    this.presentToast(data.data.data.description, 'danger');
                  } // Recargamos


                  this.GetCards();
                });
              }
            }]
          });
          yield alert.present();
        });
      }

      markPred(cardId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.cardPredID = cardId;
          localStorage.setItem("cardPredClient", cardId);
          this.otype = 3;
          localStorage.setItem('otype_user', "3");
          this.GetCards();
        });
      }

      addNewCard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _form_card_form_card_page__WEBPACK_IMPORTED_MODULE_4__["FormCardPage"]
          });
          modal.onDidDismiss().then(data => {
            this.GetCards();
          });
          return yield modal.present();
        });
      }

      setType(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            mode: 'ios'
          });
          yield loading.present();
          this.otype = id;
          localStorage.setItem('otype_user', id);
          loading.dismiss();
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

    OptionPayPage.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }];

    OptionPayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-option-pay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./option-pay.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/option-pay/option-pay.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./option-pay.page.scss */
      "./src/app/account/option-pay/option-pay.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], OptionPayPage);
    /***/
  }
}]);
//# sourceMappingURL=account-option-pay-option-pay-module-es5.js.map