(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"bg_color\" >\n    \n    <div class=\"banner animate__animated animate__fadeInUp\">\n        <div class=\"logo ion-text-center\">\n            <img src=\"assets/icon_wel.png\" >\n        </div>\n    </div>\n\n    <div class=\"social_btns animate__animated animate__zoomInUp\">\n        <ion-button class=\"phone\" (click)=\"LoginSignup()\">\n            <ion-icon name=\"call-outline\"></ion-icon>\n            <span>Ingresar con tu celular</span>\n        </ion-button>\n\n        <ion-button class=\"fb\" (click)=\"fbLogin()\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n            <span>Ingresar con Facebook</span>\n        </ion-button>\n\n        <ion-button class=\"new\" (click)=\"Signup()\">\n            <ion-icon name=\"person-circle-outline\"></ion-icon>\n            <span>Crear nueva cuenta</span>\n        </ion-button>\n    </div>\n</ion-content>\n  ");

/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  position: relative;\n  width: 50%;\n  margin: 0 auto;\n}\n.banner .logo {\n  display: block;\n  margin: auto;\n}\n.banner .logo img {\n  display: block;\n  margin: 50px auto;\n  width: 100%;\n}\n.banner h2 {\n  margin: 0;\n  padding-top: 15px;\n  color: var(--text-black);\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n.banner h2 strong {\n  display: block;\n}\n.social_btns {\n  position: relative;\n  margin: 0 auto;\n  width: 50%;\n}\n.social_btns ion-button {\n  width: 80%;\n  height: 55px;\n  --border-radius: 25px;\n  margin: 15px auto;\n  display: block;\n  text-transform: none;\n}\n.social_btns ion-button ion-icon {\n  position: absolute;\n  left: 15px;\n  top: 17px;\n  border-radius: 50%;\n}\n.social_btns ion-button span {\n  position: absolute;\n  left: 85px;\n  top: 20px;\n}\n.social_btns ion-button.phone {\n  --background: radial-gradient(circle at 20.12% -14.09%, #57c99e 0, #50c39d 50%, #49bd9c 100%);\n}\n.social_btns ion-button.fb {\n  --background:radial-gradient(circle at 20.12% -14.09%, #3f5d9f 0, #3b5898 50%, #375391 100%);\n}\n@media screen and (max-width: 960px) {\n  .banner,\n.social_btns {\n    width: 75%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .banner,\n.social_btns {\n    width: 100%;\n  }\n\n  .banner {\n    margin: 50% auto 0 auto;\n  }\n}\n.animate__animated.animate__fadeInUp {\n  --animate-duration: .2;\n}\n.animate__animated.animate__zoomInUp {\n  --animate-duration: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcd2VsY29tZVxcd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ2hIRjtBRGtIRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDaEhOO0FEa0hNO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2hIVjtBRG9IRTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xITjtBRG9ITTtFQUNJLGNBQUE7QUNsSFY7QUR1SEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDcEhKO0FEc0hJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDcEhSO0FEc0hRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQVcsU0FBQTtFQUNYLGtCQUFBO0FDbkhaO0FEc0hRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQVcsU0FBQTtBQ25IdkI7QURzSFE7RUFDSSw2RkFBQTtBQ3BIWjtBRHVIUTtFQUNJLDRGQUFBO0FDckhaO0FEMEhBO0VBQ0k7O0lBRUksVUFBQTtFQ3ZITjtBQUNGO0FEMEhBO0VBQ0k7O0lBRUksV0FBQTtFQ3hITjs7RUQySEU7SUFDSSx1QkFBQTtFQ3hITjtBQUNGO0FEMkhBO0VBQ0Usc0JBQUE7QUN6SEY7QUQ0SEE7RUFDRSxzQkFBQTtBQ3pIRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vICoge1xuLy8gICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4vLyB9XG5cbi8vIC5sb2dpbiB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLy8gLndlbGNvbWUgLnN3aXBlci1zbGlkZSB7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBwYWRkaW5nOiAwIDEzcHg7XG4gIFxuLy8gfVxuXG4vLyBpb24tc2xpZGUgPiBoMiB7XG4vLyAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbi8vIH1cbi8vIGlvbi1zbGlkZSA+IGltZyB7XG4vLyAgIG1heC1oZWlnaHQ6IDUwJTtcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICBtYXJnaW46IDQwcHggMDtcbi8vIH1cblxuLy8gaW9uLXNsaWRlID4gcCB7XG4vLyAgIG1hcmdpbi10b3A6IDI1cHg7XG4vLyAgIGNvbG9yOiAjNDQ0O1xuLy8gICBmb250LXNpemU6IDEyLjVweDtcbi8vIH1cblxuLy8gLnNsaWRlTmV4dCB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBjb2xvcjogIzQ0NDtcbi8vICAgcGFkZGluZzogNnB4IDA7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuc2xpZGVOZXh0ID4gYiB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgd2lkdGg6IDUwJTtcbi8vICAgdG9wOiA2cHg7XG4vLyAgIGFuaW1hdGlvbjogc3dpbmcgMC45cyBlYXNlLWluLW91dDtcbi8vICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4vLyB9XG5cbi8vIC5sb2djYXN0ID4gaW9uLWxhYmVsIHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBtYXJnaW46IDEwcHg7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIH1cblxuXG4vLyAubG9nY2FzdCA+IGlvbi1sYWJlbDpudGgtY2hpbGQoMSk6OmFmdGVyIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBjb250ZW50OiAnJztcbi8vICAgdG9wOiAwO1xuLy8gICB3aWR0aDogMXB4O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM3YzdjN2M7XG4vLyB9ICAgXG5cbi8vIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZ1xuLy8ge1xuLy8gICAxMCVcbi8vICAge1xuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbi8vICAgfVxuLy8gICAyNSVcbi8vICAge1xuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cHgpO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcbi8vICAgfVxuLy8gICA1MCVcbi8vICAge1xuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcbi8vICAgfVxuLy8gICAxMDAlXG4vLyAgIHtcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4vLyAgIH1cbi8vIH1cbi8vIEBrZXlmcmFtZXMgc3dpbmdcbi8vIHtcbi8vICAgMTAlXG4vLyAgIHtcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4vLyAgIH1cbi8vICAgMjUlXG4vLyAgIHtcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4vLyAgIH1cbi8vICAgNTAlXG4vLyAgIHtcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4vLyAgIH1cbi8vICAgMTAwJVxuLy8gICB7XG4vLyAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuLy8gICB9XG4vLyB9XG5cblxuLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOjAgYXV0bztcbiAgXG4gIC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgXG4gICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjo1MHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICB9XG59XG5cbi5zb2NpYWxfYnRucyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbWFyZ2luOjE1cHggYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMTVweDt0b3A6IDE3cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDg1cHg7dG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5waG9uZSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAuMTIlIC0xNC4wOSUsICM1N2M5OWUgMCwgIzUwYzM5ZCA1MCUsICM0OWJkOWMgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZiIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwLjEyJSAtMTQuMDklLCAjM2Y1ZDlmIDAsICMzYjU4OTggNTAlLCAjMzc1MzkxIDEwMCUpOztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCkgeyBcbiAgICAuYmFubmVyLFxuICAgIC5zb2NpYWxfYnRucyB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfSAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7IFxuICAgIC5iYW5uZXIsXG4gICAgLnNvY2lhbF9idG5zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfSAgIFxuXG4gICAgLmJhbm5lciB7XG4gICAgICAgIG1hcmdpbjo1MCUgYXV0byAwIGF1dG87XG4gICAgfVxufVxuXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXAge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC4yO1xufVxuXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fem9vbUluVXAge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IDFzO1xufVxuIiwiLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYmFubmVyIC5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5iYW5uZXIgLmxvZ28gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5iYW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmJhbm5lciBoMiBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNvY2lhbF9idG5zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cbi5zb2NpYWxfYnRucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uc29jaWFsX2J0bnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc29jaWFsX2J0bnMgaW9uLWJ1dHRvbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4NXB4O1xuICB0b3A6IDIwcHg7XG59XG4uc29jaWFsX2J0bnMgaW9uLWJ1dHRvbi5waG9uZSB7XG4gIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMC4xMiUgLTE0LjA5JSwgIzU3Yzk5ZSAwLCAjNTBjMzlkIDUwJSwgIzQ5YmQ5YyAxMDAlKTtcbn1cbi5zb2NpYWxfYnRucyBpb24tYnV0dG9uLmZiIHtcbiAgLS1iYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAuMTIlIC0xNC4wOSUsICMzZjVkOWYgMCwgIzNiNTg5OCA1MCUsICMzNzUzOTEgMTAwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5iYW5uZXIsXG4uc29jaWFsX2J0bnMge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5iYW5uZXIsXG4uc29jaWFsX2J0bnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJhbm5lciB7XG4gICAgbWFyZ2luOiA1MCUgYXV0byAwIGF1dG87XG4gIH1cbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYWRlSW5VcCB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjI7XG59XG5cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX196b29tSW5VcCB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogMXM7XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");




// Facebook

let WelcomePage = class WelcomePage {
    constructor(server, loadingController, events, toastController, nav, menu, platform, fb) {
        this.server = server;
        this.loadingController = loadingController;
        this.events = events;
        this.toastController = toastController;
        this.nav = nav;
        this.menu = menu;
        this.platform = platform;
        this.fb = fb;
        this.slideOptsTwo = {
            slidesPerView: 1,
            loop: true,
            autoplay: false,
            pagination: {
                el: '.swiper-pagination',
            }
        };
        this.getStart = false;
        this.menu.enable(false);
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            this.loadingData();
        });
    }
    loadingData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'md'
            });
            yield loading.present();
            this.server.welcome().subscribe((response) => {
                this.data = response.data;
                this.chargePage = 'sliderIni';
                this.loadpage = 'EmailIn';
                this.IniSes = false;
                console.log(this.data);
                loading.dismiss();
            });
        });
    }
    LoginSignup() {
        this.nav.navigateForward('/login');
    }
    Signup() {
        this.nav.navigateForward('/signup');
    }
    /**
     * Solicitamos la autorizacion en Facebook para obtener los datos
    */
    fbLogin() {
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            if (res.status == 'connected') {
                // Usuarios Logeado...
                let url = "https://graph.facebook.com/me?fields=id,name,email&access_token=" + res.authResponse.accessToken;
                this.server.signupWithfb(url).subscribe(data => {
                    this.loginfb({
                        name: data['name'],
                        email: data['email'],
                        phone: 'null',
                        password: data['id'],
                        pswfb: data['id']
                    });
                });
            }
        }).catch(e => {
            this.presentToast("Ha ocurrido un problema. vuelva a intentar más tarde.", 'danger');
        });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
    /**
     * Login With Facebook
    */
    loginfb(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.server.loginfb(data).subscribe((response) => {
                if (response.msg != "done") {
                    /**
                     * Si no existe la cuenta se va a crear
                    */
                    this.signup(data);
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    let navigationExtras = {
                        queryParams: {
                            redirect: 'home'
                        }
                    };
                    this.nav.navigateForward(['/waitpage'], navigationExtras);
                }
                loading.dismiss();
            });
        });
    }
    /**
     * SignUp With Facebook
    */
    signup(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.server.signup(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg, 'danger');
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');
                    this.nav.navigateForward('/login');
                }
                loading.dismiss();
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
WelcomePage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map