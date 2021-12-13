(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header  #head>\n  <ion-toolbar class=\"header\" color=\"white\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button></ion-menu-button>\n\n      <span color=\"dark\" *ngIf=\"address\" style=\"font-size:13.5px;\" routerLink=\"/setaddress\" routerDirection=\"forward\">\n        <b>Entrega en:</b><br />\n        {{address | slice:0:28}} <i *ngIf=\"address && address.length > 28\">...</i>\n        <ion-icon name=\"arrow-dropdown\"></ion-icon>\n      </span>\n    </ion-buttons>\n    \n    <ion-buttons slot=\"end\" *ngIf=\"serviceComm\">\n      <img src=\"assets/outline_local_shipping_black.png\" *ngIf=\"serviceComm.length == 0\" (click)=\"commanded()\" alt=\"paqueteria\" style=\"width: 80%;\">\n      <img src=\"assets/outline_local_shipping_rute.png\" *ngIf=\"serviceComm.length > 0\" (click)=\"donecomm()\" alt=\"paqueteria\" style=\"width: 80%;\">\n    </ion-buttons>\n   \n  </ion-toolbar>\n\n  <div class=\"searchBar\" *ngIf=\"text\">\n    <ion-searchbar style=\"font-size: 12px;font-family: 'SF Pro Display';--margin-bottom:0;--margin-top:0;\" \n    placeholder=\"{{ text.home_search }}\" mode=\"ios\" color=\"light\" \n    (ionInput)=\"search($event)\" \n    (ionClear)=\"clearSearch()\" \n    [(ngModel)]=\"searchQuery\"></ion-searchbar>\n    \n    <ion-grid class=\"grid_menu\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"OptionCat_one()\">\n          {{OptCat_one}}\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" routerLink=\"/categorys\" routerDirection=\"forward\">\n          Categorias\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"OptionCat_two()\">\n          Filtros\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n  </div>\n</ion-header>\n<ion-content *ngIf=\"text\" mode=\"md\">\n\n  <!-- Refresh -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\"  pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content \n    pullingIcon=\"ellipsis-horizontal\"\n    refreshingSpinner=\"dots\">\n      \n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- Refresh -->\n\n  <!-- Orders -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"order > 0\" routerLink=\"/done\" routerDirection=\"forward\">\n    <ion-fab-button color=\"primary\" edge=\"true\">\n      <!-- <ion-icon src=\"assets/order_done.png\"></ion-icon> -->\n      <img src=\"assets/order_done.png\" alt=\"\">\n    </ion-fab-button>\n  </ion-fab>\n  <!-- Orders -->\n    \n  <!-- Content -->\n  <div class=\"welcome-card\" style=\"background-color:#FFFFFF;width: 98%;margin-left: 1%\" mode=\"ios\">\n    <ion-list id=\"skeleton\" *ngIf=\"!data\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let fake of fakeData\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-card-content *ngIf=\"data\" style=\"padding:0;\">\n\n      <!-- Banners -->\n      <ion-slides pager=\"false\" [options]=\"BannerOption\" #slideone autoplay=\"3000\" *ngIf=\"!hasSearch && !nearby\">\n        <ion-slide *ngFor=\"let offer of data.banner\" (click)=\"bannerLink(offer)\">\n          <!-- <img src=\"{{ offer.img }}\" class=\"img_banner\"> -->\n          <div class=\"img_banner\" [style.backgroundImage]=\"'url('+ offer.img +')'\"></div>\n        </ion-slide>\n      </ion-slides>\n      <!-- Banners -->\n\n      <ion-backdrop tappable=\"false\" *ngIf=\"filterPress\"></ion-backdrop>\n\n      <!--******************* Ordena de nuevo ***************************-->\n      <div *ngIf=\"!nearby && !hasSearch && LastVisitStore.length >= 1 && data && data.store.length > 0\" style=\"margin-top: 30px;background-color: #FFFFFF;\">\n        <h6 style=\"padding-left:5px;font-family: 'SF Pro Display';font-weight: 700;font-size: 16px;\">\n          <ion-icon name=\"refresh\"></ion-icon> Pidelo de Nuevo<br />\n          <small style=\"color: #727272;\">Ordena <b>nuevamente</b> de tus restaurantes</small>\n          <a (click)=\"trashLasComm()\" style=\"float: right;padding-right: 15px;padding-top: 4px;text-decoration: none;font-size: 12px;\">Borrar Historial</a>\n        </h6>\n\n        <div style=\"margin-bottom: 10px;background-color: #fff;\">\n          <ion-slides pager=\"false\" [options]=\"TrendOption\" #slideone autoplay=\"3000\" class=\"trend\">\n            <ion-slide *ngFor=\"let store of LastVisitStore\" (click)=\"itemPage(store)\">\n              <ion-card style=\"padding: 2px 2px;font-size: 12px;width: 100%;margin-left: 2px\" mode=\"ios\">\n                <ion-row>\n                  <ion-col size=\"12\" style=\"margin: 0 !important;padding: 0 !important;\">\n                    <div class=\"img_trend\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n                      <div class=\"close_in\"  *ngIf=\"!store.open\">\n                        <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n                      </div>\n                    </div>\n                  </ion-col>\n                  \n                  <ion-col size=\"12\" style=\"text-align: left;\">\n                    <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\n                      <b style=\"font-size: 16px;\">{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b>\n                    </div>\n                    <small style=\"color: gray;font-size: 10px\">\n                      <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n                    </small><br>\n                    <small style=\"color: gray;font-size: 10px\">\n                      Entrega en {{ store.delivery_time }}\n                    </small><br />\n\n                    <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n                      Distancia: {{store.km}} km\n                    </small><br *ngIf=\"store.max_distance > 0\" />\n\n                    <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n                      Sin cobertura en tu ubicación.\n                    </small><br *ngIf=\"store.max_distance == 0\" />\n\n                    <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n                      Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n                    </small>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <!--******************* Ordena de nuevo ***************************-->\n\n      <!--******************* Trending Store ****************************-->\n      <div size=\"12\" *ngIf=\"!hasSearch && !nearby && InTrendingStore.length > 0\" style=\"margin-top: 30px;background-color: #FFFFFF;\">\n        \n        <h6 style=\"padding-left: 5px; font-family: 'SF Pro Display';font-weight: 700;font-size: 16px;\">\n          <ion-icon name=\"trending-up\"></ion-icon> Tendencias<br />\n          <small style=\"color: #727272;\">Estos son los negocios <b>tendencia</b> en {{city_name}}</small>\n        </h6>\n        \n        <ion-slides pager=\"false\" [options]=\"TrendOption\" #slideone autoplay=\"3000\" class=\"trend\">\n          <ion-slide *ngFor=\"let trend of InTrendingStore\" (click)=\"itemPage(trend)\">\n            <ion-card style=\"font-size: 12px;width: 100%;margin-left: 2px\" mode=\"ios\">\n              <ion-row>\n                <ion-col size=\"12\" style=\"margin: 0 !important;padding: 0 !important;\">\n                  <div class=\"img_trend\" [style.backgroundImage]=\"'url('+ trend.img +')'\">\n                    <div class=\"close_in\"  *ngIf=\"!trend.open\">\n                      <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n                    </div>\n                  </div>\n                </ion-col>\n                \n                <ion-col size=\"12\" style=\"text-align: left;\">\n                  <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\n                    <b style=\"font-size: 16px;\">{{ trend.title | slice:0:27 }}<i *ngIf=\"trend.title.length > 27\">...</i></b>\n                  </div>\n                  <small style=\"color: gray;font-size: 10px\">\n                    <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ trend.rating }}</span> | {{ trend.type }}\n                  </small><br>\n                  <small style=\"color: gray;font-size: 10px\">\n                    Entrega en {{ trend.delivery_time }}\n                  </small><br />\n\n                  <small *ngIf=\"trend.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n                    Distancia: {{trend.km}} km\n                  </small><br *ngIf=\"trend.max_distance > 0\" />\n\n                  <small *ngIf=\"trend.max_distance == 0\" style=\"color: red;\">\n                    Sin cobertura en tu ubicación.\n                  </small><br *ngIf=\"trend.max_distance == 0\" />\n\n                  <small *ngIf=\"trend.delivery_charges_value.costs_ship == 0 && trend.max_distance == 1\">\n                    Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!trend.open\"> | Abre a las: <span style=\"color:red;\">{{trend.open_time}}</span></span>\n                  </small>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <!--******************* Trending Store ****************************-->\n\n      <ion-card *ngIf=\"!hasSearch && !nearby && data && data.store.length == 0\" mode=\"ios\" style=\"padding: 20px 20px;\">\n        <h2>\n          Opps! Aun no hay negocios en esta zona\n        </h2>\n        <ion-button size=\"small\" mode=\"ios\" routerLink=\"/setaddress\" routerDirection=\"forward\">Cambiar tu ubicación</ion-button>\n      </ion-card>\n\n      <!--********************** Items Normales ********************************************************-->\n      <div *ngIf=\"!nearby && data && data.store.length > 0\" style=\"margin-top: 15px;\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" style=\"background: #FFFFFF;margin-top:25px;\" *ngFor=\"let store of ComerceRest;let i = index\" (click)=\"itemPage(store)\">\n                  <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" style=\"margin: 0 !important;padding: 0 !important;\">\n                    <div class=\"item_norm\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n                      <!-- <img src=\"../../assets/close.png\" alt=\"Cerrado\" class=\"tag_close\" *ngIf=\"!store.open\"> -->\n                      <div class=\"close_in\"  *ngIf=\"!store.open\">\n                        <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n                      </div>\n                    </div>\n                  </ion-col>\n                  \n                  <ion-col size=\"12\" size-lg=\"12\" size-md=\"4\" style=\"text-align: left;margin:0 !important; padding:0 !important;\">\n                    <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 8px 0 4px 0 !important;\">\n                      <b style=\"font-size: 16px;\">{{ store.title | slice:0:32 }}<i *ngIf=\"store.title.length > 32\">...</i></b>\n                    </div>\n                    \n                    <p style=\"color: gray;font-size: 11px\">\n                      <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> {{ store.type }}\n                      &nbsp;|&nbsp;\n                      Entrega en {{ store.delivery_time }}\n                    </p>\n\n                    <p *ngIf=\"store.max_distance > 0\" style=\"font-size:11px;color: #0cb650;\">\n                      Distancia: {{store.km}} km\n                    </p> \n                    <!-- <br *ngIf=\"store.max_distance > 0\" /> -->\n\n                    <p *ngIf=\"store.max_distance == 0\" style=\"font-size:11px;color: red;\">\n                      Sin cobertura en tu ubicación.\n                    </p>\n                    <!-- <br *ngIf=\"store.max_distance == 0\" /> -->\n\n                    <p style=\"font-size: 11px;\" *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n                      Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n                    </p>\n                  </ion-col>\n                </ion-col>\n              </ion-row>\n            </ion-grid> \n      </div>\n      <!--********************** Items Normales ********************************************************-->\n\n      <!--********************** Items Normales ********************************************************-->\n      <div *ngIf=\"!hasSearch && !nearby && data && data.store.length > 0 && ComerceClose\" style=\"margin-top: 15px;\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" style=\"background: #FFFFFF;margin-top:25px;\" *ngFor=\"let store of ComerceRestClose;let i = index\" (click)=\"itemPage(store)\">\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" style=\"margin: 0 !important;padding: 0 !important;\">\n                <div class=\"item_norm\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n                  <!-- <img src=\"../../assets/close.png\" alt=\"Cerrado\" class=\"tag_close\" *ngIf=\"!store.open\"> -->\n                  <div class=\"close_in\"  *ngIf=\"!store.open\">\n                    <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n                  </div>\n                </div>\n              </ion-col>\n              \n              <ion-col size=\"12\" size-lg=\"12\" size-md=\"4\" style=\"text-align: left;margin:0 !important; padding:0 !important;\">\n                <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 8px 0 4px 0 !important;\">\n                  <b style=\"font-size: 16px;\">{{ store.title | slice:0:32 }}<i *ngIf=\"store.title.length > 32\">...</i></b>\n                </div>\n                \n                <p style=\"color: gray;font-size: 11px\">\n                  <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> {{ store.type }}\n                  &nbsp;|&nbsp;\n                  Entrega en {{ store.delivery_time }}\n                </p>\n\n                <p *ngIf=\"store.max_distance > 0\" style=\"font-size:11px;color: #0cb650;\">\n                  Distancia: {{store.km}} km\n                </p> \n                <!-- <br *ngIf=\"store.max_distance > 0\" /> -->\n\n                <p *ngIf=\"store.max_distance == 0\" style=\"font-size:11px;color: red;\">\n                  Sin cobertura en tu ubicación.\n                </p>\n                <!-- <br *ngIf=\"store.max_distance == 0\" /> -->\n\n                <p style=\"font-size: 11px;\" *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n                  Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n                </p>\n              </ion-col>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n      <!--********************** Items Normales ********************************************************-->\n\n      <!--********************** Comercios Cercanos ********************************************************-->\n      <div *ngIf=\"!hasSearch && nearby && ComerceRestNearby\" style=\"background-color: #FFFFFF;margin-top: 0%;\">\n        <h6 style=\"padding-left: 15px;padding-top: 25px; font-family: 'SF Pro Display';font-weight: 500;\">\n          <ion-icon name=\"restaurant\"></ion-icon> Comercios Cercanos\n        </h6>\n\n        <ion-row style=\"margin: 8px 15px;border: 0.5px solid #f0f0f0;\" *ngFor=\"let store of ComerceRestNearby;let i = index\" (click)=\"itemPage(store)\">\n          <!-- Imagen -->\n          <ion-col size=\"4\" style=\"margin: 0 !important;padding: 0 !important;\">\n            <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n              <div class=\"close_in\"  *ngIf=\"!store.open\">\n                <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n              </div>\n            </div>\n          </ion-col>\n          <!-- Imagen -->\n          <!-- Info -->\n          <ion-col size=\"8\" class=\"wrap_info\" style=\"font-size: 12px;border-left: 0.5px solid #f0f0f0;padding-left: 8px;\">\n            <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\n              <b style=\"font-size: 16px;\">{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b>\n            </div>\n            <small style=\"color: gray;font-size: 10px\">\n              <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n            </small><br>\n            <small style=\"color: gray;font-size: 10px\">\n              Entrega en {{ store.delivery_time }}\n            </small><br />\n\n            <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n              Distancia: {{store.km}} km\n            </small><br *ngIf=\"store.max_distance > 0\" />\n\n            <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n              Sin cobertura en tu ubicación.\n            </small><br *ngIf=\"store.max_distance == 0\" />\n\n            <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n              Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n            </small>\n          </ion-col>\n          <!-- Info -->\n        </ion-row>\n      </div>\n      <!--********************** Comercios Cercanos ********************************************************-->\n      \n      <!--********************** Infinite Scroll ******************************************-->\n        <ion-infinite-scroll *ngIf=\"!hasSearch\" threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Cargando mas datos...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n        <ion-item *ngIf=\"let_end\" style=\"text-align: center;\">\n          Ya no hay mas tiendas que mostrar.\n        </ion-item>\n      <!--********************** Infinite Scroll ******************************************-->\n    </ion-card-content>\n  </div>\n  <!-- Content -->\n\n  <!-- Carrito -->\n  <ion-button mode=\"ios\" class=\"cart_btn animate__animated animate__bounceInUp\" routerLink=\"/cart\" routerDirection=\"forward\" *ngIf=\"count > 0\">\n    <ion-text>x{{count}}</ion-text>\n    Ver Carrito\n  </ion-button>\n  <!-- Carrito -->\n  \n</ion-content>\n\n<ion-footer *ngIf=\"text && isKeyboardHide\">\n  <ion-toolbar mode=\"ios\">\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        \n      <ion-tab-button (click)=\"loadData(city_id + '?ss=ss')\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>{{ text.home_footer_name }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"nearBy()\">\n          <ion-icon name=\"pin\"></ion-icon>\n          <ion-label>{{ text.home_nearest }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\n          <ion-icon name=\"basket\"></ion-icon>\n          <ion-label>{{ text.home_cart }}</ion-label>\n          <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\n        </ion-tab-button>\n\n        <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>{{ text.home_profile }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/directives/hide-header.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directives/hide-header.directive.ts ***!
    \*****************************************************/

  /*! exports provided: HideHeaderDirective */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function () {
      return HideHeaderDirective;
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

    let HideHeaderDirective = class HideHeaderDirective {
      constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
      }

      ngOnInit() {
        this.domCtrl.write(() => {
          this.renderer.setStyle(this.header.el, 'webkitTransition', 'margin-top 180ms');
        });
      }

      onContentScroll($event) {
        if ($event.detail.currentY > 56) {
          if ($event.detail.scrollTop > 56) {
            this.renderer.setStyle(this.header.el, 'margin-top', '-56px');
          } else {
            this.renderer.setStyle(this.header.el, 'margin-top', '0px');
          }
        } else {
          this.renderer.setStyle(this.header.el, 'margin-top', '0px');
        }
      }

    };

    HideHeaderDirective.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HideHeaderDirective.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('srcBar'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HideHeaderDirective.prototype, "srcBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HideHeaderDirective.prototype, "onContentScroll", null);
    HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[hide-header]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])], HideHeaderDirective);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../directives/hide-header.directive */
    "./src/app/directives/hide-header.directive.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_7__["HideHeaderDirective"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-backdrop {\n  opacity: 0.3;\n}\n\nion-toolbar {\n  --opacity: 0;\n}\n\n.search_store {\n  font-size: 22px;\n  margin-right: 20px;\n  padding: 8px;\n  border-radius: 50%;\n  background-color: #eeeeee;\n}\n\n.action-sheet-group {\n  background: #911919;\n}\n\n.margin_top {\n  margin-top: -4%;\n}\n\n.no_margin {\n  margin-top: 20px;\n}\n\n.img_banner {\n  width: 100%;\n  height: 125px;\n  border-radius: 3px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center 0;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .action-sheet-group {\n  background: #911919;\n}\n\n.searchBar {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.grid_menu {\n  margin: 0px !important;\n  padding-top: 0;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 14.5px;\n  font-family: \"SF Pro Display\";\n}\n\n.grid_menu ion-row ion-col {\n  position: relative;\n}\n\n.grid_menu ion-row ion-col:before {\n  position: absolute;\n  content: \"\";\n  right: 0;\n  top: 20%;\n  width: 1px;\n  height: 60%;\n  background-color: #ececec;\n}\n\n.grid_menu ion-row ion-col ion-icon {\n  position: absolute;\n  top: 30%;\n}\n\n.grid_menu ion-row ion-col:last-child::before {\n  display: none;\n}\n\n.AllElements {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.AllElements .regular-items {\n  text-align: left;\n  position: relative;\n  display: inline-block;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.AllElements a {\n  text-decoration: none;\n}\n\n.AllElements a h3 {\n  color: #000;\n  font-weight: 700;\n  font-size: 18px;\n  padding-left: 10px;\n}\n\n.AllElements a small {\n  color: #626262;\n  font-size: 13px;\n  padding-left: 10px;\n}\n\n.AllElements .wrap-img-items {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 0;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.AllElements .wrap-img-items:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 160px;\n  background: #010101;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(10%, #010101), color-stop(98%, rgba(255, 255, 255, 0)));\n  background: linear-gradient(0deg, #010101 10%, rgba(255, 255, 255, 0) 98%);\n  z-index: 1;\n}\n\n.AllElements .wrap-img-items .text {\n  position: absolute;\n  bottom: 0;\n  padding: 10px 0;\n  z-index: 50;\n}\n\n.AllElements .wrap-img-items .text h3 {\n  color: #fff;\n  max-width: 250px;\n}\n\n.AllElements .wrap-img-items .text small {\n  color: #fff;\n}\n\n.AllElements .Abierto {\n  color: #08a82a;\n}\n\n.AllElements .Cerrado {\n  color: red;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col {\n  text-align: center;\n  font-size: 12px;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.AllElements .raiting {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 12px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.wrap_info {\n  position: relative;\n}\n\n.wrap_info ion-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  padding: 4px 8px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 11px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.recentItems a {\n  text-decoration: none;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.recentItems a h2 {\n  color: #000;\n  font-weight: 700;\n}\n\n.recentItems a small {\n  color: #626262;\n}\n\n.recentItems a h3 {\n  color: #626262;\n}\n\n.recentItems .Abierto {\n  color: #08a82a;\n}\n\n.recentItems .Cerrado {\n  color: red;\n}\n\n.recentItems h3 {\n  font-family: \"Open Sans\", sans-serif;\n  color: #000 !important;\n}\n\n.recentItems .wrap-img-recents {\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\n\n.recentItems ion-label .info span {\n  width: 100%;\n  font-size: 11px;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.recentItems ion-label .info span .pl-10 {\n  padding-left: 10px;\n}\n\n.recentItems ion-label .info span strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.recentItems .raiting {\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  z-index: 100;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  border-radius: 8px;\n}\n\n.img_radius {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 8px;\n  position: relative;\n}\n\n.img_radius .close_in {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.602);\n  text-align: center;\n}\n\n.img_radius .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 40px;\n  margin: auto;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.img_radius .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.img_trend {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover;\n  border: 1px solid #e1e1e1;\n  position: relative;\n}\n\n.img_trend .close_in {\n  position: absolute;\n  width: 100%;\n  height: 150px;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.342);\n  text-align: center;\n}\n\n.img_trend .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 60px;\n  margin: auto;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.img_trend .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.item_norm {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n\n.item_norm .close_in {\n  position: absolute;\n  width: 100%;\n  height: 150px;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.342);\n  text-align: center;\n}\n\n.item_norm .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 60px;\n  margin: auto;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.item_norm .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.lastdisches {\n  box-shadow: 14px 13px 14px -8px rgba(0, 0, 0, 0.28);\n}\n\n.kind_food .swiper-container {\n  box-shadow: 0 !important;\n  background-color: #fff;\n  border: 0 !important;\n  padding: 15px 0;\n  width: 100%;\n  height: 100%;\n}\n\n.kind_food .wrap-img-kindfood {\n  width: 120px;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(43, 40, 38, 0.4);\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf h6 {\n  color: #f6f6f6;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 8px auto;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.tag_close {\n  position: absolute;\n  top: -8px;\n  left: 0;\n  width: 100%;\n}\n\n.cart_btn {\n  position: fixed;\n  bottom: 55px;\n  left: 0px;\n  height: 55px;\n  width: 100%;\n  --border-radius:8px;\n  text-align: center;\n  z-index: 1000;\n}\n\n.cart_btn ion-text {\n  position: absolute;\n  left: 10px;\n  background: #2f1b4e;\n  color: #fff;\n  font-size: 14px;\n  padding: 6px 8px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUEsdUVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURHSTtFQUNFLGtCQUFBO0FDRE47O0FER007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNEUjs7QURJTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0ZSOztBRE9RO0VBQ0UsYUFBQTtBQ0xWOztBRGNBO0VBQ0Usa0JBQUE7RUFTQSxvQkFBQTtBQ25CRjs7QURZQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7QUNWRjs7QURjRTtFQUNFLHFCQUFBO0FDWko7O0FEY0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNaTjs7QURlSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNiTjs7QURpQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZko7O0FEaUJJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEhBQUE7RUFBQSwwRUFBQTtFQUNBLFVBQUE7QUNkTjs7QURpQkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2ZOOztBRGlCTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ2ZSOztBRGtCTTtFQUNFLFdBQUE7QUNoQlI7O0FEcUJFO0VBQ0UsY0FBQTtBQ25CSjs7QURzQkU7RUFDRSxVQUFBO0FDcEJKOztBRDJCVTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUN6Qlo7O0FEMkJZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ3pCZDs7QURpQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFBYSxXQUFBO0VBQ2IsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzlCSjs7QURtQ0E7RUFDRSxrQkFBQTtBQ2hDRjs7QURrQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBUyxVQUFBO0VBQ1QsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQy9CSjs7QURzQ007RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0FDbkNSOztBRHFDUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ25DVjs7QURzQ1E7RUFDRSxjQUFBO0FDcENWOztBRHVDUTtFQUNFLGNBQUE7QUNyQ1Y7O0FEeUNNO0VBQ0UsY0FBQTtBQ3ZDUjs7QUQwQ007RUFDRSxVQUFBO0FDeENSOztBRDJDTTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUN6Q1I7O0FENENNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQzFDUjs7QUQrQ1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQzdDWjs7QUQrQ1k7RUFDRSxrQkFBQTtBQzdDZDs7QURnRFk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDOUNkOztBRG9ETTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUFVLFFBQUE7RUFDVixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2pEUjs7QUR1REE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDcERGOztBRHNERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQVEsTUFBQTtFQUNSLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ25ESjs7QURxREk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xETjs7QURzREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBUyxPQUFBO0VBQ1QsV0FBQTtBQ25ESjs7QUR1REE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDcERGOztBRHNERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQVEsTUFBQTtFQUNSLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ25ESjs7QURxREk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xETjs7QURzREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBUyxPQUFBO0VBQ1QsV0FBQTtBQ25ESjs7QUR1REE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3BERjs7QURzREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUFRLE1BQUE7RUFDUixrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUNuREo7O0FEcURJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQVEsUUFBQTtFQUNSLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsRE47O0FEc0RFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQVMsT0FBQTtFQUNULFdBQUE7QUNuREo7O0FEd0RBO0VBR0UsbURBQUE7QUNyREY7O0FEMkRFO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDeERKOztBRDJERTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6REo7O0FEMERJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFBTyxPQUFBO0VBQ1AsdUNBQUE7RUFDQSxtQkFBQTtBQ3ZETjs7QUR3RE07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVEsUUFBQTtFQUNSLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDckRSOztBRDJEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUFVLE9BQUE7RUFDVixXQUFBO0FDdkRGOztBRDhEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUMzREY7O0FENkRFO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMzRE4iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2tkcm9wIHtcbiAgb3BhY2l0eTogMC4zO1xufSBcblxuaW9uLXRvb2xiYXIge1xuICAtLW9wYWNpdHk6IDA7XG59XG5cbi5zZWFyY2hfc3RvcmUge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbn1cblxuLmFjdGlvbi1zaGVldC1ncm91cCB7XG4gIGJhY2tncm91bmQ6ICM5MTE5MTk7XG59XG5cbi5tYXJnaW5fdG9wIHtcbiAgbWFyZ2luLXRvcDogLTQlO1xufVxuXG4ubm9fbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmltZ19iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMDtcbn1cblxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cbi5teS1jdXN0b20tY2xhc3MgLmFjdGlvbi1zaGVldC1ncm91cCB7XG4gIGJhY2tncm91bmQ6ICM5MTE5MTk7XG59XG5cbi5zZWFyY2hCYXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufSAgXG5cbi5ncmlkX21lbnUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNC41cHg7XG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuXG4gIGlvbi1yb3cge1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjAlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzMCU7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIFxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSXRlbXMgUmVndWxhcmVzXG5cbi5BbGxFbGVtZW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLnJlZ3VsYXItaXRlbXMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC53cmFwLWltZy1pdGVtcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHRvcDogMDtsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiKDEsMSwxKTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEsMSwxLDEpIDEwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA5OCUpO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICB6LWluZGV4OiA1MDtcblxuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuQWJpZXJ0byB7XG4gICAgY29sb3I6ICMwOGE4MmE7XG4gIH1cblxuICAuQ2VycmFkbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICNpbmZvLWNhcmQge1xuICAgIC5pbmZvIHtcbiAgICAgIGlvbi1ncmlkICB7XG4gICAgICAgIGlvbi1yb3cgIHtcbiAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yYWl0aW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O3JpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB6LWluZGV4OiA1MDtcbiAgfVxuXG59XG5cbi53cmFwX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7cmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGOTUwNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgei1pbmRleDogNTA7XG4gIH1cbn1cblxuXG4ucmVjZW50SXRlbXMgIHtcbiAgICBcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaDMge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5BYmllcnRvIHtcbiAgICAgICAgY29sb3I6ICMwOGE4MmE7XG4gICAgICB9XG4gICAgXG4gICAgICAuQ2VycmFkbyB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC53cmFwLWltZy1yZWNlbnRzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxuICAgICAgICAgICAgLnBsLTEwIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5yYWl0aW5nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1cHg7dG9wOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgICBcbiAgICBcbn1cbiAgICBcbi5pbWdfcmFkaXVzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2xvc2VfaW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxlZnQ6IDA7dG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjAyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdG9wOiA0MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC50YWdfY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yJTtsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbWdfdHJlbmQge1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2xvc2VfaW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGxlZnQ6IDA7dG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC50YWdfY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yJTtsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pdGVtX25vcm0ge1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2xvc2VfaW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGxlZnQ6IDA7dG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC50YWdfY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yJTtsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuLmxhc3RkaXNjaGVzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC4yOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMTRweCAxM3B4IDE0cHggLThweCByZ2JhKDAsMCwwLDAuMjgpO1xuICBib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC4yOCk7XG59XG5cbi8vIFRpcG9zIGRlIGNvbWlkYVxuLmtpbmRfZm9vZCB7XG5cbiAgLnN3aXBlci1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAud3JhcC1pbWcta2luZGZvb2Qge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC53cmFwLWJveC1rZiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0Myw0MCwzOCwwLjQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGg2IHtcbiAgICAgICAgY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO3JpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46OHB4IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7bGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuXG4vLyBCb3RvbiBkZWwgY2Fycml0XG5cbi5jYXJ0X2J0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1NXB4O1xuICBsZWZ0OjBweDtcbiAgaGVpZ2h0OjU1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJvcmRlci1yYWRpdXM6OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgaW9uLXRleHQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IzJmMWI0ZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuXG4gIFxufSIsImlvbi1iYWNrZHJvcCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLW9wYWNpdHk6IDA7XG59XG5cbi5zZWFyY2hfc3RvcmUge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi5hY3Rpb24tc2hlZXQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiAjOTExOTE5O1xufVxuXG4ubWFyZ2luX3RvcCB7XG4gIG1hcmdpbi10b3A6IC00JTtcbn1cblxuLm5vX21hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbWdfYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDA7XG59XG5cbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4ubXktY3VzdG9tLWNsYXNzIC5hY3Rpb24tc2hlZXQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiAjOTExOTE5O1xufVxuXG4uc2VhcmNoQmFyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmdyaWRfbWVudSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0LjVweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbn1cbi5ncmlkX21lbnUgaW9uLXJvdyBpb24tY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdyaWRfbWVudSBpb24tcm93IGlvbi1jb2w6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICByaWdodDogMDtcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuLmdyaWRfbWVudSBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xufVxuLmdyaWRfbWVudSBpb24tcm93IGlvbi1jb2w6bGFzdC1jaGlsZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLkFsbEVsZW1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5BbGxFbGVtZW50cyAucmVndWxhci1pdGVtcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5BbGxFbGVtZW50cyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLkFsbEVsZW1lbnRzIGEgaDMge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uQWxsRWxlbWVudHMgYSBzbWFsbCB7XG4gIGNvbG9yOiAjNjI2MjYyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXM6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDEwMTAxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAxMDEwMSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTglKTtcbiAgei1pbmRleDogMTtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB6LWluZGV4OiA1MDtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMgLnRleHQgaDMge1xuICBjb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMgLnRleHQgc21hbGwge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5BbGxFbGVtZW50cyAuQWJpZXJ0byB7XG4gIGNvbG9yOiAjMDhhODJhO1xufVxuLkFsbEVsZW1lbnRzIC5DZXJyYWRvIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5BbGxFbGVtZW50cyAjaW5mby1jYXJkIC5pbmZvIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLkFsbEVsZW1lbnRzICNpbmZvLWNhcmQgLmluZm8gaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uQWxsRWxlbWVudHMgLnJhaXRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk1MDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogNTA7XG59XG5cbi53cmFwX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud3JhcF9pbmZvIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk1MDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogNTA7XG59XG5cbi5yZWNlbnRJdGVtcyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5yZWNlbnRJdGVtcyBhIGgyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucmVjZW50SXRlbXMgYSBzbWFsbCB7XG4gIGNvbG9yOiAjNjI2MjYyO1xufVxuLnJlY2VudEl0ZW1zIGEgaDMge1xuICBjb2xvcjogIzYyNjI2Mjtcbn1cbi5yZWNlbnRJdGVtcyAuQWJpZXJ0byB7XG4gIGNvbG9yOiAjMDhhODJhO1xufVxuLnJlY2VudEl0ZW1zIC5DZXJyYWRvIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5yZWNlbnRJdGVtcyBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLnJlY2VudEl0ZW1zIC53cmFwLWltZy1yZWNlbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmVjZW50SXRlbXMgaW9uLWxhYmVsIC5pbmZvIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzRjNGM0YztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnJlY2VudEl0ZW1zIGlvbi1sYWJlbCAuaW5mbyBzcGFuIC5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5yZWNlbnRJdGVtcyBpb24tbGFiZWwgLmluZm8gc3BhbiBzdHJvbmcge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJlY2VudEl0ZW1zIC5yYWl0aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk1MDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5pbWdfcmFkaXVzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWdfcmFkaXVzIC5jbG9zZV9pbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjAyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZ19yYWRpdXMgLmNsb3NlX2luIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW1nX3JhZGl1cyAudGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWdfdHJlbmQge1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWdfdHJlbmQgLmNsb3NlX2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW1nX3RyZW5kIC5jbG9zZV9pbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0b3A6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmltZ190cmVuZCAudGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtX25vcm0ge1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtX25vcm0gLmNsb3NlX2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaXRlbV9ub3JtIC5jbG9zZV9pbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0b3A6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLml0ZW1fbm9ybSAudGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYXN0ZGlzY2hlcyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTRweCAxM3B4IDE0cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAtbW96LWJveC1zaGFkb3c6IDE0cHggMTNweCAxNHB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm94LXNoYWRvdzogMTRweCAxM3B4IDE0cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xufVxuXG4ua2luZF9mb29kIC5zd2lwZXItY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmtpbmRfZm9vZCAud3JhcC1pbWcta2luZGZvb2Qge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ua2luZF9mb29kIC53cmFwLWltZy1raW5kZm9vZCAud3JhcC1ib3gta2Yge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNDAsIDM4LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmtpbmRfZm9vZCAud3JhcC1pbWcta2luZGZvb2QgLndyYXAtYm94LWtmIGg2IHtcbiAgY29sb3I6ICNmNmY2ZjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogOHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50YWdfY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJ0X2J0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1NXB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm9yZGVyLXJhZGl1czo4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jYXJ0X2J0biBpb24tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogIzJmMWI0ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");

    let HomePage = class HomePage {
      constructor(server, nav, events, keyboard, loadingController, menu, toastController, renderer, domCtrl, actionSheetController, modalController) {
        this.server = server;
        this.nav = nav;
        this.events = events;
        this.keyboard = keyboard;
        this.loadingController = loadingController;
        this.menu = menu;
        this.toastController = toastController;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.BannerOptionFirst = {
          initialSlide: 0,
          slidesPerView: 3,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          spaceBetween: 7
        };
        this.BannerOption = {
          loop: false,
          centeredSlides: true,
          autoplay: true,
          speed: 500,
          spaceBetween: 7
        };
        this.SearchOption = {
          initialSlide: 0,
          slidesPerView: 3.5,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          speed: 500,
          spaceBetween: -20
        };
        this.TrendOption = {
          initialSlide: 0,
          slidesPerView: 1.2,
          loop: false,
          centeredSlides: false,
          autoplay: true,
          speed: 800,
          spaceBetween: -9
        };
        this.ask_again = {
          initialSlide: 0,
          slidesPerView: 1.8,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          speed: 800,
          spaceBetween: -9
        };
        this.MiddleBannerOption = {
          initialSlide: 0,
          slidesPerView: 1,
          loop: false,
          centeredSlides: true,
          autoplay: true,
          speed: 800,
          spaceBetween: 4
        };
        this.fakeData = [1, 2, 3, 4, 5, 6, 7];
        this.showLoading = false;
        this.hasSearch = false;
        this.loadRecentItems = false;
        this.RecentsItems = {
          initialSlide: 0,
          slidesPerView: 1.2,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          speed: 800,
          spaceBetween: -9
        };
        this.RecentsStore = [];
        this.LastVisitStore = [];
        this.loadRegularitems = false;
        this.LastPlatillos = {
          initialSlide: 0,
          slidesPerView: 1.2,
          freeMode: true,
          loop: false,
          centeredSlides: false,
          autoplay: true,
          speed: 800,
          spaceBetween: 9
        };
        this.lastDishes = [];
        this.loadSliderKf = false; // Inicialiamos el slider de KindofFood

        this.kind_food = {
          slidesPerView: 'auto',
          spaceBetween: 10,
          freeMode: true
        };
        this.fk_items = [];
        this.isKeyboardHide = true;
        this.ComerceRest = [];
        this.showToolbar = false;
        this.InTrendingStore = [];
        this.store_close = 0;
        this.ComerceRestClose = [];
        this.allDataComerce = [];
        this.max_stores = 0;
        this.length_store = 0;
        this.store_open = 0;
        this.Tot_stores = 0;
        this.let_init = 0;
        this.let_end = false;
        this.trending_wrap = "no_margin";
        this.OptCat_one = "Cercanos";
        this.serviceComm = [];
      }

      ionViewWillEnter() {
        this.headr = document.getElementsByClassName('header')[0];
        this.address = localStorage.getItem("address");
        this.menu.enable(true);
        this.keyboard.onKeyboardWillShow().subscribe(() => {
          this.isKeyboardHide = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
          this.isKeyboardHide = true;
        });
        if (localStorage.getItem('app_text')) this.text = JSON.parse(localStorage.getItem('app_text'));
        this.events.subscribe('change_city', city_id => {
          this.loadData(city_id + "?ss=ss");
        });
        this.verifyUser();
        this.server.cartCount(localStorage.getItem('cart_no') + "?user_id=" + localStorage.getItem('user_id')).subscribe(response => {
          this.count = response.data;
          this.order = response.order;
        }); // Verificamos Mandaditos

        this.chkEvents_comm();
      }

      verifyUser() {
        this.server.userInfo(localStorage.getItem('user_id')).subscribe(response => {
          if (response.data) {
            // Verificamos si el telefono es null
            if (response.data.phone == 'null') {
              this.nav.navigateBack('/login'); // Verificamos si esta bloqueado
            } else if (response.data.status == 1) {
              this.nav.navigateBack('/locked'); // Verificamos si no cuenta con un customer id para OpenPay
            } else if (response.data.customer_id == '') {
              this.signupOP(response.data);
            }

            if (response.data.password == response.data.pswfacebook) {
              this.presentToast("Te recomendamos cambiar tu contraseña", "danger");
            }

            if (localStorage.getItem('city_id') && localStorage.getItem('city_id') != 'null') {
              if (this.city_id != localStorage.getItem('city_id')) {
                this.city_name = localStorage.getItem('city_name');
                this.city_id = localStorage.getItem('city_id');
                this.loadData(localStorage.getItem('city_id') + "?ss=ss");
              }
            } else {
              this.presentToast("Te recomendamos cambiar de ciudad", 'danger');
            } // Verificamos si cuenta con una direccion de entrega.


            if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
              this.nav.navigateForward('setaddress');
            }
          } else {
            localStorage.removeItem('user_id');
            this.nav.navigateBack('/welcome');
          }
        });
      }

      ngOnInit() {
        this.searchQuery = null;
        this.hasSearch = false;
      }

      clearSearch() {
        this.searchQuery = null;
        this.hasSearch = false;
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
      }

      nearBy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.delay(500);
          const loading = yield this.loadingController.create({
            message: 'Cargando...'
          });
          yield loading.present();
          this.nearby = true;
          this.ComerceRestNearby = [];
          this.ComerceRestClose = [];
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.getNearbyStore(localStorage.getItem('city_id') + "?ss=ss" + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            loading.dismiss(); // this.ComerceRestNearby = response.data.nearby;

            for (let r = 0; r < response.data.nearby.length; r++) {
              const element = response.data.nearby[r];

              if (element.open == true) {
                this.ComerceRestNearby.push(element);
              } else {
                this.ComerceRestClose.push(element);
              }
            }
          });
        });
      }

      loadData(city_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.let_init = 0;
          this.data = null;
          this.nearby = false;
          this.ComerceClose = null;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0; // Obtenemos las coordenadas

          if (this.address == '') {
            this.server.getGeolocation();
          }

          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.data = response.data;
            this.text = response.data.text;
            this.Tot_stores = response.data.Tot_stores;
            this.store_open = response.data.stores_open;
            this.events.publish('text', this.text);
            this.events.publish('admin', response.data.admin);
            localStorage.setItem('app_text', JSON.stringify(response.data.text));
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
            this.loadRecentItems = true;
            this.loadRegularitems = true;
            this.loadSliderKf = true; // Obtenemos los comercios de donde se ha pedido comida

            this.getLastCommPed(); // Obtenemos todas la categorias

            this.getTypeStore(response.data.Categorys); // Ordenamos por los locales mas recientes

            this.GetRecentStore(response.data.store); // Obtenemos los comercios en tendencia

            this.GetTrendingStore(response.data.trending);
            this.ComerceRest = [];
            this.ComerceRestClose = [];

            for (let r = 0; r < response.data.store.length; r++) {
              const element = response.data.store[r];

              if (element.open == true) {
                this.ComerceRest.push(element);
              } else {
                this.ComerceRestClose.push(element);
              }
            }

            if (this.ComerceRest.length <= 3) {
              this.loadMoreData(event);
            }

            this.Content.scrollToPoint(0, 0, 300);
            this.domCtrl.write(() => {
              this.renderer.setStyle(this.headr, 'transition', 'margin-top 300ms');
            });
          });
        });
      }

      loadMoreData(event) {
        setTimeout(() => {
          if (this.ComerceRest.length >= this.store_open) {
            // Ordenamos por km
            this.ComerceRestClose.sort((a, b) => {
              this.filterPress = 0;
              return parseFloat(a.km) - parseFloat(b.km);
            });
            this.ComerceClose = 'active';
            event.target.disabled = true;
            this.let_end = true;
          }

          this.let_init += 100;
          let open_st = 0;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          var city_id = localStorage.getItem('city_id') + "?ss=ss";
          this.server.getMoreStores(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng + "&init=" + this.let_init).subscribe(response => {
            for (let r = 0; r < response.data.store.length; r++) {
              const element = response.data.store[r];

              if (element.open == true) {
                open_st++;
                this.ComerceRest.push(element);
              } else {
                this.ComerceRestClose.push(element);
              }
            }

            if (open_st == 0) {
              if (this.ComerceRest.length >= this.store_open) {} else {
                this.loadMoreData(event);
              }
            } else {
              event.target.complete();
            }
          });
        }, 500);
      }

      signupOP(data) {
        let allData = {
          'id': data.id,
          'name': data.name,
          'email': data.email,
          'phone': data.phone
        };
        this.server.signupOP(allData).subscribe(data => {});
      }

      GetRecentStore(data) {
        this.RecentsStore = [];
        let last = data.length;

        if (data.length >= 3) {
          last = 3;
        }

        for (let i = 0; i < last; i++) {
          const element = data[i];
          this.RecentsStore.push(element);
        }

        this.RecentsStore.sort((a, b) => {
          return parseFloat(b.id) - parseFloat(a.id);
        });
      }

      getLastCommPed() {
        this.LastVisitStore = [];

        if (localStorage.getItem('LastStore')) {
          let LastComm = JSON.parse(localStorage.getItem('LastStore'));

          for (let i = 0; i < LastComm.length; i++) {
            const element = LastComm[i];
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.getStore(element.store_id + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(data => {
              if (data.data) {
                if (i <= 3) {
                  this.LastVisitStore.push(data.data[0]);
                }
              } else {
                this.nav.navigateRoot('home');
              }
            });
          }

          if (this.LastVisitStore.length > 0) {
            this.trending_wrap = 'margin_top';
          }

          this.LastVisitStore.sort((a, b) => {
            return parseFloat(a.id) - parseFloat(b.id);
          });
        }
      }

      GetTrendingStore(data) {
        this.InTrendingStore = [];

        for (let t = 0; t < data.length; t++) {
          const element = data[t];

          if (element.open == true) {
            this.InTrendingStore.push(element);
          }
        }

        this.InTrendingStore.reverse();
      }

      getLastDishes(Stores) {
        let Items = [];
        let dishes = [];
        Stores.forEach(element => {
          Items.push(element.items);
        });
      }

      getTypeStore(List_type) {
        this.fk_items = []; // Limpiamos

        List_type.forEach(element => {
          if (element.status == 0) {
            this.fk_items.push({
              'Name': element.name,
              'Img': element.img
            });
          }
        });
        this.fk_items.reverse();
      }

      trashLasComm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          localStorage.removeItem('LastStore');
          this.trending_wrap = 'no_margin';
          this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        });
      }

      search(ev) {
        var val = ev.target.value;

        if (val && val.length > 0) {
          this.data = null;
          this.nearby = false;
          this.ComerceClose = null;
          this.hasSearch = val;
          let search = localStorage.getItem('city_id') + "?q=" + val;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(search + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.data = response.data;
            this.text = response.data.text;
            this.events.publish('text', this.text);
            this.events.publish('admin', response.data.admin);
            localStorage.setItem('app_text', JSON.stringify(response.data.text));
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
            this.loadRecentItems = true;
            this.loadRegularitems = true;
            this.loadSliderKf = true; // Obtenemos los comercios de donde se ha pedido comida

            this.getLastCommPed(); // Obtenemos todas la categorias

            this.getTypeStore(response.data.Categorys); // Ordenamos por los locales mas recientes

            this.data.store.sort((a, b) => {
              return parseFloat(b.id) - parseFloat(a.id);
            });
            this.ComerceRest = [];
            this.ComerceRestClose = [];

            for (let r = 0; r < response.data.store.length; r++) {
              const element = response.data.store[r];

              if (element.open == true) {
                this.ComerceRest.push(element);
              } else {
                this.ComerceRestClose.push(element);
              }
            }

            if (this.ComerceRest.length <= 3) {
              this.loadMoreData(event);
            }
          });
        } else {
          this.clearSearch();
        }
      }

      dataFilter(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.filterPress = type;
          yield this.delay(500);
          const loading = yield this.loadingController.create({
            message: 'Cargando...'
          });
          yield loading.present();

          if (type == 1) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.discount_value) - parseFloat(a.discount_value);
            });
          } else if (type == 2) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(a.delivery_charges_value.costs_ship) - parseFloat(b.delivery_charges_value.costs_ship);
            });
          } else if (type == 3) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.trending) - parseFloat(a.trending);
            });
          } else if (type == 4) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.id) - parseFloat(a.id);
            });
          } else if (type == 5) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.rating) - parseFloat(a.rating);
            });
          } else if (type == 6) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.delivery_time) - parseFloat(a.delivery_time);
            });
          } else if (type == 7) {
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.getStoreOpen(localStorage.getItem('city_id') + "?ss=ss&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(data => {
              this.filterPress = 0;
              loading.dismiss();
              this.ComerceRest = data.data.store;
            });
          }
        });
      }

      delay(ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return new Promise(resolve => setTimeout(resolve, ms));
        });
      }

      bannerLink(offer) {
        if (offer.link) {
          let city_id = localStorage.getItem('city_id') + "?banner=" + offer.id;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.itemPage(response.data.store[0]);
          });
        }
      }

      doRefresh(event) {
        setTimeout(() => {
          this.loadData(localStorage.getItem('city_id') + "?ss=ss");
          event.target.complete();
        }, 2000);
      }

      itemPage(storeData) {
        let navigationExtras = {
          queryParams: {
            store: storeData.title,
            id: storeData.id
          }
        };
        this.nav.navigateForward(['/item'], navigationExtras);
      }

      ViewCat(Name) {
        let navigationExtras = {
          queryParams: {
            Cat: Name
          }
        };
        this.nav.navigateForward(['/categorys'], navigationExtras);
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

      OptionCat_one() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: "Ordenamiento",
            cssClass: 'my-custom-class',
            buttons: [{
              text: 'Cercanos',
              icon: 'pin',
              handler: () => {
                this.OptCat_one = "Cercanos";
                this.nearBy();
              }
            }, {
              text: 'Entrega Rapida',
              icon: 'alarm',
              handler: () => {
                this.OptCat_one = "Entrega R.";
                this.nearby = false;
                this.dataFilter(6);
              }
            }, {
              text: 'Comercios abiertos',
              icon: 'open-outline',
              handler: () => {
                this.OptCat_one = "Abiertos";
                this.nearby = false;
                this.dataFilter(7);
              }
            }, {
              text: 'Costos de envio más bajos',
              icon: 'cash',
              handler: () => {
                this.OptCat_one = "Envios";
                this.nearby = false;
                this.dataFilter(2);
              }
            }]
          });
          yield actionSheet.present();
        });
      }

      OptionCat_two() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: "Filtros",
            cssClass: 'my-custom-class',
            buttons: [{
              text: 'Más Recientes',
              handler: () => {
                this.nearby = false;
                this.dataFilter(4);
              }
            }, {
              text: 'Ofertas',
              handler: () => {
                this.nearby = false;
                this.dataFilter(1);
              }
            }, {
              text: 'Tendencias',
              handler: () => {
                this.nearby = false;
                this.dataFilter(3);
              }
            }, {
              text: 'Clasificación',
              handler: () => {
                this.nearby = false;
                this.dataFilter(5);
              }
            }]
          });
          yield actionSheet.present();
        });
      }

      commanded() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.nav.navigateForward('/commanded');
        });
      }

      donecomm() {
        this.nav.navigateForward('/done-comm');
      }

      chkEvents_comm() {
        this.server.chkEvents_comm(localStorage.getItem('user_id')).subscribe(data => {
          this.serviceComm = data.data;
          console.log(this.serviceComm);
        });
      }

    };

    HomePage.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
    }, {
      type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["DomController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], HomePage.prototype, "Content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"])], HomePage.prototype, "toolbar", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["DomController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map