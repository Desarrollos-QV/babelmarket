(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["done-done-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n<ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" routerLink=\"/home\" routerDirection=\"root\">\n        <ion-icon name=\"home\" style=\"font-size: 29px\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n        <ion-button fill=\"outline\" mode=\"ios\" size=\"small\" \n            routerLink=\"/order\" routerDirection=\"forward\">\n            Detalles de mi pedido\n        </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n<div style=\"width:100%;background-color: #533186;height: 80px;color:white\">\n    &nbsp;\n</div>\n\n<ion-card mode=\"ios\" style=\"margin-top: -15%;background-color: white;width: 98%;margin-left: 1%\" class=\"welcome-card\">\n    <ion-card-header>\n        <ion-card-title>{{ text.confirm_title }}</ion-card-title>\n        <ion-card-subtitle><ion-icon name=\"storefront-outline\"></ion-icon>\n            {{ data.store }}\n            <br/>\n            <ion-text *ngIf=\"status == 0\">\n                <p>\n                    En caso de exceder el tiempo de espera puedes cancelar tu pedido en\n                </p>\n                <i routerLink=\"/order\" routerDirection=\"forward\">Detalles de mi pedido > Cancelar Orden</i>\n            </ion-text>\n            <br/><br />\n            <ion-text>\n                <ion-button expand=\"full\" color=\"success\">Contáctanos vía whatsapp</ion-button>\n            </ion-text>\n        </ion-card-subtitle>\n    </ion-card-header>\n</ion-card>\n\n<ion-card mode=\"ios\" *ngIf=\"status == 4\" style=\"margin-top: 5%;background-color: white;width: 98%;margin-left: 1%\" class=\"welcome-card\">\n    <ion-card-header>\n        <ion-card-subtitle>\n            Entrega el Siguiente código a tu repartidor.\n        </ion-card-subtitle>\n        <ion-card-title>\n            {{code_deliv}}\n        </ion-card-title>\n    </ion-card-header>\n</ion-card>\n\n<div class=\"ion-padding\" style=\"margin-top: 5%;background-color: white;width: 98%;margin-left: 1%\">\n    <p style=\"font-size: 12px\" *ngIf=\"status == 0\">Pedido realizado con éxito. Esperando confirmación del negocio</p>\n    <p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 1\">Orden confirmada. Tu comida está siendo preparada.</p>\n    <p style=\"font-size: 12px\" *ngIf=\"status == 1.5 && type == 1\">Buscando Socio Repartidor</p>\n    <p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 2\">Orden confirmada. Tu comida está siendo preparada, Se te notificará cuando esté lista</p>\n    <p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 7\">Tu orden está lista para recoger</p>\n    <p style=\"font-size: 12px\" *ngIf=\"status == 3\">Se ha asignado un repartidor a tu pedido.</p>\n    <p style=\"font-size: 12px\" *ngIf=\"status == 4\">Tu Orden esta en ruta!!</p>\n\n    <div class=\"map-wrapper\" *ngIf=\"status == 4\">\n        <div #map id=\"map\"></div>\n        <p>{{address}}</p>\n    </div>\n    <ion-progress-bar value=\"{{ progress }}\" buffer=\"0.5\"></ion-progress-bar>\n</div>\n\n<ion-card mode=\"ios\" class=\"welcome-card\" style=\"width: 98%;margin-left: 1%\">\n\n<ion-card-header>\n    <ion-card-title>Estatus de tu pedido</ion-card-title>\n</ion-card-header>\n\n<ion-list lines=\"none\">\n    <ion-item routerLink=\"/order\" routerDirection=\"forward\">\n        <ion-icon slot=\"start\" color=\"primary\" name=\"cart\"></ion-icon>\n        <ion-label>Pedido realizado</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-icon slot=\"start\" [color]=\"getColor(1)\" name=\"checkmark-circle\"></ion-icon>\n        <ion-label [class.light]=\"status < 1\">Orden confirmada</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"type == 1\">\n        <ion-icon slot=\"start\" [color]=\"getColor(1.5)\" name=\"search\"></ion-icon>\n        <ion-label [class.light]=\"status < 1.5\">Buscando Socio Repartidor</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"type == 1\">\n        <ion-icon slot=\"start\" [color]=\"getColor(3)\" name=\"link\"></ion-icon>\n        <ion-label [class.light]=\"status < 3\">Repartidor asignado</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"type == 1\">\n        <ion-icon slot=\"start\" [color]=\"getColor(4)\" name=\"bus\"></ion-icon>\n        <ion-label [class.light]=\"status < 4\">Orden recogida - pedido en ruta</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"type != 1\">\n        <ion-icon slot=\"start\" [color]=\"getColor(7)\" name=\"walk\"></ion-icon>\n        <ion-label [class.light]=\"type < 7\">Listo para  recoger</ion-label>\n    </ion-item>\n\n\n</ion-list>\n\n</ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/done/done.module.ts":
  /*!*************************************!*\
    !*** ./src/app/done/done.module.ts ***!
    \*************************************/

  /*! exports provided: DonePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonePageModule", function () {
      return DonePageModule;
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


    var _done_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./done.page */
    "./src/app/done/done.page.ts");

    const routes = [{
      path: '',
      component: _done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]
    }];
    let DonePageModule = class DonePageModule {};
    DonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]]
    })], DonePageModule);
    /***/
  },

  /***/
  "./src/app/done/done.page.scss":
  /*!*************************************!*\
    !*** ./src/app/done/done.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item ion-label {\n  font-size: 12px;\n}\n\nion-item small {\n  font-size: 12px;\n  color: gray;\n  margin-right: 10%;\n}\n\nion-content {\n  --background:#f9f8f8;\n}\n\n.light {\n  color: gray;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 60vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 60px;\n  width: 60px;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZS9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcZG9uZVxcZG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmUvZG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxlQUFBO0FDQUQ7O0FESUE7RUFFQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRkQ7O0FETUE7RUFFQyxvQkFBQTtBQ0pEOztBRFFBO0VBRUMsV0FBQTtBQ05EOztBRFVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1BGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNURjs7QURhQTtFQUNFLGtCQUFBO0FDVkY7O0FEWUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9kb25lL2RvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gaW9uLWxhYmVsXG57XG5cdGZvbnQtc2l6ZToxMnB4O1xufVxuXG5cbmlvbi1pdGVtIHNtYWxsXG57XG5cdGZvbnQtc2l6ZToxMnB4O1xuXHRjb2xvcjpncmF5O1xuXHRtYXJnaW4tcmlnaHQ6MTAlXG59XG5cblxuaW9uLWNvbnRlbnRcbntcblx0LS1iYWNrZ3JvdW5kOiNmOWY4Zjg7XG59XG5cblxuLmxpZ2h0XG57XG5cdGNvbG9yOmdyYXk7XG59XG5cblxuI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIFxuIFxuI2FkZHJlc3Mge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIFxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbn1cbiBcblxuLm1hcC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuIFxuICAjbWFwX2NlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbn0iLCJpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1pdGVtIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNmOWY4Zjg7XG59XG5cbi5saWdodCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwdmg7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/done/done.page.ts":
  /*!***********************************!*\
    !*** ./src/app/done/done.page.ts ***!
    \***********************************/

  /*! exports provided: DonePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonePage", function () {
      return DonePage;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../service/mapStyle.js */
    "./src/app/service/mapStyle.js");

    let DonePage = class DonePage {
      constructor(toastController, nav, server, geolocation, nativeGeocoder, renderer, _document) {
        this.toastController = toastController;
        this.nav = nav;
        this.server = server;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.renderer = renderer;
        this._document = _document;
        this.status = 0;
        this.progress = 0.016;
        this.chargeMap = false;
        this.km_h = 50;
        this.code_deliv = "";
        this.finish = false;
      }

      ngOnInit() {
        this.data = JSON.parse(localStorage.getItem('order_data'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.currency = this.data.currency;
        this.data = this.data.data;
      }

      ionViewWillEnter() {
        this.getStatus();

        if (localStorage.getItem('order_data') && localStorage.getItem('order_data') != '') {
          this.Interval_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(2000).subscribe(() => {
            this.progress = 0.016;
            this.getStatus();
          });
          this.Intervarl_2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(6000).subscribe(() => {
            this.progress = this.progress * 1 + 0.016;
          });
        }
      }

      getStatus() {
        this.server.getStatus(this.data.id).subscribe(response => {
          this.status = response.data.status;
          this.type = response.data.type;

          if (this.status == 4) {
            localStorage.setItem("lat_dboy", response.dboy.lat);
            localStorage.setItem('lng_dboy', response.dboy.lng);
            this.code_deliv = response.data.code_order;

            if (this.chargeMap == false) {
              this.chargeMap = true;
              setTimeout(() => {
                this.loadMap();
              }, 400);
            } else {
              this.ViewdBoy();
            }
          }

          if (this.status == 2) {
            if (this.finish == false) {
              this.finish = true;
              this.presentToast("¡Lo siento! Su pedido ha sido cancelado.");
              localStorage.removeItem('menu_item');
              localStorage.removeItem('order_data'); // Detenemos los Timers

              clearInterval(this.Interval_1);
              clearInterval(this.Intervarl_2);
              this.Interval_1.unsubscribe();
              this.Intervarl_2.unsubscribe(); // Esperamos 5 mils y redireccionamos

              setTimeout(() => {
                this.nav.navigateRoot('order');
              }, 500);
            } else {
              localStorage.removeItem('menu_item');
              localStorage.removeItem('order_data');
              clearInterval(this.Interval_1);
              clearInterval(this.Intervarl_2);
              this.Interval_1.unsubscribe();
              this.Intervarl_2.unsubscribe();
            }
          }

          if (this.status == 5) {
            if (this.finish == false) {
              this.finish = true;
              this.presentToast("Pedido entregado con éxito");
              localStorage.removeItem('menu_item');
              localStorage.removeItem('order_data');
              clearInterval(this.Interval_1);
              clearInterval(this.Intervarl_2);
              this.Interval_1.unsubscribe();
              this.Intervarl_2.unsubscribe();
              setTimeout(() => {
                if (this.type == 1) {
                  this.nav.navigateRoot('rate/' + this.data.id + '/staff');
                } else {
                  this.nav.navigateRoot('rate/' + this.data.id + '/store');
                }
              }, 500);
            } else {
              localStorage.removeItem('menu_item');
              localStorage.removeItem('order_data');
              clearInterval(this.Interval_1);
              clearInterval(this.Intervarl_2);
              this.Interval_1.unsubscribe();
              this.Intervarl_2.unsubscribe();
            }
          }
        });
      }

      getColor(id) {
        if (id == 1) {
          if (this.status < 1) {
            return "medium";
          }
        }

        if (id == 1.5) {
          if (this.status < 1.5) {
            return "medium";
          }
        } else if (id == 3) {
          if (this.status < 3) {
            return "medium";
          }
        } else if (id == 4) {
          if (this.status < 4) {
            return "medium";
          }
        } else if (id == 7) {
          if (this.type < 7) {
            return "medium";
          }
        }

        return "primary";
      }

      loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let lat = localStorage.getItem('lat_dboy');
          let lng = localStorage.getItem('lng_dboy');
          this.getAddressFromCoords(lat, lng);
          const icon = {
            url: 'assets/d.png',
            scaledSize: new google.maps.Size(50, 50)
          };
          let latLng = new google.maps.LatLng(lat, lng);
          let mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_8__["mapStyle"]
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          google.maps.event.addListenerOnce(this.map, 'idle', () => {
            this.marker = new google.maps.Marker({
              position: latLng,
              map: this.map,
              icon: icon,
              title: this.address
            });
          });
        });
      }

      ViewdBoy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let lat = localStorage.getItem('lat_dboy');
          let lng = localStorage.getItem('lng_dboy');
          this.getAddressFromCoords(lat, lng);
          let latLng = new google.maps.LatLng(lat, lng);
          this.map.setCenter(latLng);
          this.marker.setPosition(latLng);
        });
      }

      getAddressFromCoords(lattitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let $this = this;
          var geocoder = new google.maps.Geocoder();
          let options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(result => {
            this.address = "";
            let responseAddress = [];

            for (let [key, value] of Object.entries(result[0])) {
              if (value.length > 0) responseAddress.push(value);
            }

            responseAddress.reverse();

            for (let value of responseAddress) {
              this.address += value + ", ";
            }

            this.address = this.address.slice(0, -2);
          }).catch(error => {
            var latlng = {
              lat: parseFloat(lattitude),
              lng: parseFloat(longitude)
            };
            let responseAddress = [];
            geocoder.geocode({
              'location': latlng
            }, function (result, status) {
              if (status === 'OK') {
                for (let [key, value] of Object.entries(result[0])) {
                  responseAddress.push(value);
                }

                responseAddress.reverse();
                $this.address = responseAddress[4];
              } else {
                console.log(status);
              }
            });
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

    DonePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DonePage.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('directionsPanel', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DonePage.prototype, "directionsPanel", void 0);
    DonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-done',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./done.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./done.page.scss */
      "./src/app/done/done.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])], DonePage);
    /***/
  }
}]);
//# sourceMappingURL=done-done-module-es5.js.map