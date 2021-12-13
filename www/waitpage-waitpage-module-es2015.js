(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["waitpage-waitpage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/waitpage/waitpage.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/waitpage/waitpage.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"bg_color\" >\n    \n  <div class=\"banner animate__animated animate__fadeInUp\">\n      <div class=\"logo ion-text-center\">\n          <img src=\"assets/icon_wel.png\" >\n      </div>\n  </div>\n\n  <div class=\"social_btns animate__animated animate__zoomInUp ion-text-center\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/waitpage/waitpage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/waitpage/waitpage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WaitpagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitpagePageRoutingModule", function() { return WaitpagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _waitpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waitpage.page */ "./src/app/waitpage/waitpage.page.ts");




const routes = [
    {
        path: '',
        component: _waitpage_page__WEBPACK_IMPORTED_MODULE_3__["WaitpagePage"]
    }
];
let WaitpagePageRoutingModule = class WaitpagePageRoutingModule {
};
WaitpagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WaitpagePageRoutingModule);



/***/ }),

/***/ "./src/app/waitpage/waitpage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/waitpage/waitpage.module.ts ***!
  \*********************************************/
/*! exports provided: WaitpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitpagePageModule", function() { return WaitpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _waitpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waitpage-routing.module */ "./src/app/waitpage/waitpage-routing.module.ts");
/* harmony import */ var _waitpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waitpage.page */ "./src/app/waitpage/waitpage.page.ts");







let WaitpagePageModule = class WaitpagePageModule {
};
WaitpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _waitpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["WaitpagePageRoutingModule"]
        ],
        declarations: [_waitpage_page__WEBPACK_IMPORTED_MODULE_6__["WaitpagePage"]]
    })
], WaitpagePageModule);



/***/ }),

/***/ "./src/app/waitpage/waitpage.page.scss":
/*!*********************************************!*\
  !*** ./src/app/waitpage/waitpage.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  position: relative;\n  width: 50%;\n  margin: 45% auto 0 auto;\n}\n.banner .logo {\n  display: block;\n  margin: auto;\n}\n.banner .logo img {\n  display: block;\n  margin: 50px auto;\n  width: 100%;\n}\n.social_btns {\n  position: relative;\n  margin: 0 auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FpdHBhZ2UvQzpcXGlvbmljXFxCYWJlbFxcdXN1YXJpb3Mvc3JjXFxhcHBcXHdhaXRwYWdlXFx3YWl0cGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dhaXRwYWdlL3dhaXRwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQ1I7QURDUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDWjtBREtFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvd2FpdHBhZ2Uvd2FpdHBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA0NSUgYXV0byAwIGF1dG87XHJcbiAgICBcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1MHB4IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc29jaWFsX2J0bnMge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiBcclxuICB9IiwiLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiA0NSUgYXV0byAwIGF1dG87XG59XG4uYmFubmVyIC5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5iYW5uZXIgLmxvZ28gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNvY2lhbF9idG5zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/waitpage/waitpage.page.ts":
/*!*******************************************!*\
  !*** ./src/app/waitpage/waitpage.page.ts ***!
  \*******************************************/
/*! exports provided: WaitpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitpagePage", function() { return WaitpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let WaitpagePage = class WaitpagePage {
    constructor(route, nav) {
        this.route = route;
        this.nav = nav;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            if (params.redirect) {
                this.RedirectPage(params.redirect);
            }
        });
    }
    RedirectPage(page) {
        setTimeout(() => {
            this.nav.navigateRoot(page);
        }, 1500);
    }
};
WaitpagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
WaitpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-waitpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./waitpage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/waitpage/waitpage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./waitpage.page.scss */ "./src/app/waitpage/waitpage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
], WaitpagePage);



/***/ })

}]);
//# sourceMappingURL=waitpage-waitpage-module-es2015.js.map