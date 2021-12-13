(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/signup/signup.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/signup/signup.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n      <ion-title *ngIf=\"text\">\n        {{text.signup_title}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form #form=\"ngForm\" (ngSubmit)=\"signup(form.value)\">\n    <ion-input type=\"hidden\" name=\"phone\" ngModel value=\"{{phone}}\"></ion-input>\n                \n    <div class=\"form\">\n      <ion-list lines=\"none\">\n          <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n              <div class=\"item_inner d-flex\">\n                  <div class=\"icon_box ion-text-start\"><img src=\"assets/ic_name.png\"></div>\n                  <div class=\"input_box\">\n                      <ion-label mode=\"md\" position=\"stacked\">Nombre Completo</ion-label>\n                      <ion-input mode=\"md\" type=\"text\" clearInput name=\"name\" ngModel placeholder=\"Sam Smith\" required></ion-input>\n                  </div>\n              </div>\n          </ion-item>\n\n          <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n              <div class=\"item_inner d-flex\">\n                  <div class=\"icon_box ion-text-start\"><img src=\"assets/ic_mail.png\"></div>\n                  <div class=\"input_box\">\n                      <ion-label mode=\"md\" position=\"stacked\">Email</ion-label>\n                      <ion-input mode=\"md\" type=\"email\" clearInput name=\"email\" ngModel placeholder=\"SamSmith@mail.com\" required></ion-input>\n                  </div>\n              </div>\n          </ion-item>\n          \n\n          <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n              <div class=\"item_inner d-flex\">\n                  <div class=\"icon_box ion-text-start\"><img src=\"assets/ic_pass.png\"></div>\n                  <div class=\"input_box\">\n                      <ion-label mode=\"md\" position=\"stacked\">Contraseña</ion-label>\n                      <ion-input mode=\"md\" type=\"password\" clearInput name=\"password\" ngModel placeholder=\"**********\" required></ion-input>\n                  </div>\n              </div>\n          </ion-item> \n      </ion-list>\n    </div>\n    \n    <div class=\"code_ref animate__animated animate__fadeInUp\">\n      <label>Código de afiliación</label>\n      <ion-input name=\"refered\" ngModel placeholder=\"Si cuenta con un Código de afiliación ingresalo aqui.\"></ion-input>\n    </div>\n\n    <ion-button class=\"btn_next\" *ngIf=\"isKeyboardHide\" [disabled]=\"!form.valid\" type=\"submit\" color=\"dark\" shape=\"round\" style=\"--border-radius:25px;\">\n      Registrarse\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/account/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/account/signup/signup.page.ts");







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/account/signup/signup.page.scss":
/*!*************************************************!*\
  !*** ./src/app/account/signup/signup.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  border-top: 6px solid var(--bg-color);\n  padding-top: 34px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 15px !important;\n}\n.form p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n}\n.form p span {\n  width: calc(100% - 35px);\n}\n.animate__animated.animate__fadeInUp:nth-child(1) {\n  --animate-duration: .25s;\n}\n.animate__animated.animate__fadeInUp:nth-child(2) {\n  --animate-duration: .3s;\n}\n.animate__animated.animate__fadeInUp:nth-child(3) {\n  --animate-duration: .35s;\n}\n.animate__animated.animate__fadeInUp:nth-child(4) {\n  --animate-duration: .4s;\n}\n.animate__animated.animate__fadeInUp:nth-child(5) {\n  --animate-duration: .45s;\n}\n.animate__animated.animate__fadeInUp:nth-child(6) {\n  --animate-duration: .5s;\n}\n.animate__animated.animate__fadeInUp:nth-child(7) {\n  --animate-duration: .55s;\n}\n.animate__animated.animate__fadeInUp:nth-child(8) {\n  --animate-duration: .6s;\n}\n.sign_rs {\n  margin-top: 50px;\n  text-align: center;\n  position: relative;\n}\n.sign_rs span {\n  position: relative;\n  display: block;\n  width: 80%;\n  font-size: 14px;\n  color: #808080;\n  margin: 15px auto;\n  border-top: 1px solid #e1e1e1;\n  padding: 15px;\n}\n.sign_rs div {\n  margin-top: 10px;\n}\n.sign_rs div img {\n  position: relative;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.sign_rs div p {\n  position: relative;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: 14px;\n  color: #808080;\n}\n.btn_next {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #000000;\n  margin: 15px;\n  --border-radius:25px !important;\n  border-radius: 25px !important;\n}\n.code_ref {\n  position: relative;\n  margin: 25px 15px;\n  padding: 12px 10px;\n  border: 1px solid #e1e1e1;\n}\n.code_ref label {\n  position: absolute;\n  font-size: 14px;\n  left: 10px;\n  top: -15px;\n  background-color: #fff;\n  padding: 6px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9zaWdudXAvQzpcXGlvbmljXFxCYWJlbFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGFjY291bnRcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREdZO0VBQ0ksOEJBQUE7QUNEaEI7QURNSTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0pSO0FETVE7RUFDSSx3QkFBQTtBQ0paO0FEVUk7RUFDSSx3QkFBQTtBQ1BSO0FEVUk7RUFDSSx1QkFBQTtBQ1JSO0FEV0k7RUFDSSx3QkFBQTtBQ1RSO0FEWUk7RUFDSSx1QkFBQTtBQ1ZSO0FEYUk7RUFDSSx3QkFBQTtBQ1hSO0FEY0k7RUFDSSx1QkFBQTtBQ1pSO0FEZUk7RUFDSSx3QkFBQTtBQ2JSO0FEZ0JJO0VBQ0ksdUJBQUE7QUNkUjtBRG1CQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRGtCSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBRUEsNkJBQUE7RUFDQSxhQUFBO0FDakJSO0FEb0JJO0VBQ0ksZ0JBQUE7QUNsQlI7QURvQlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDbEJaO0FEcUJRO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNuQlo7QUR5QkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQ3RCSjtBRDBCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDdkJKO0FEeUJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDdkJSIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBwYWRkaW5nLXRvcDogMzRweDtcclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzVweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXAge1xyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjI1cztcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjM1cztcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjQ1cztcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg2KSB7XHJcbiAgICAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNXM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNykge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjU1cztcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg4KSB7XHJcbiAgICAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNnM7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uc2lnbl9ycyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcclxuXHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IzgwODA4MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmJ0bl9uZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czoyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY29kZV9yZWYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOjI1cHggMTVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICB9XHJcbn0iLCIuZm9ybSB7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAzNHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvcm0gcCBzcGFuIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xufVxuXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXA6bnRoLWNoaWxkKDEpIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuMjVzO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJblVwOm50aC1jaGlsZCgyKSB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjNzO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJblVwOm50aC1jaGlsZCgzKSB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjM1cztcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYWRlSW5VcDpudGgtY2hpbGQoNCkge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC40cztcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYWRlSW5VcDpudGgtY2hpbGQoNSkge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC40NXM7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXA6bnRoLWNoaWxkKDYpIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNXM7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXA6bnRoLWNoaWxkKDcpIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNTVzO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJblVwOm50aC1jaGlsZCg4KSB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjZzO1xufVxuXG4uc2lnbl9ycyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNpZ25fcnMgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTFlMTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zaWduX3JzIGRpdiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2lnbl9ycyBkaXYgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zaWduX3JzIGRpdiBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uYnRuX25leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOjI1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xufVxuXG4uY29kZV9yZWYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMjVweCAxNXB4O1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG59XG4uY29kZV9yZWYgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAtMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/signup/signup.page.ts":
/*!***********************************************!*\
  !*** ./src/app/account/signup/signup.page.ts ***!
  \***********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");






let SignupPage = class SignupPage {
    constructor(route, server, toastController, nav, loadingController, events, keyboard) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.keyboard = keyboard;
        this.dating = [];
        this.login_view = false;
        this.isKeyboardHide = true;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.keyboard.onKeyboardWillShow().subscribe(() => {
            this.isKeyboardHide = false;
            // console.log('SHOWK');
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
            this.isKeyboardHide = true;
            // console.log('HIDEK');
        });
    }
    ionViewWillEnter() {
        if (localStorage.getItem('number_phone') && localStorage.getItem('number_phone') != null) {
            this.login_view = true;
            this.phone = JSON.parse(localStorage.getItem('number_phone'));
        }
    }
    signup(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'md'
            });
            yield loading.present();
            this.server.signup(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg, 'danger');
                }
                else {
                    localStorage.removeItem('number_phone');
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');
                    if (this.login_view == true) { // Viene ya de la verificacion telefonica
                        let navigationExtras = {
                            queryParams: {
                                redirect: 'home'
                            }
                        };
                        this.nav.navigateForward(['/waitpage'], navigationExtras);
                    }
                    else {
                        this.nav.navigateRoot('/login');
                    }
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
    goBck() {
        this.nav.navigateRoot('welcome');
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/account/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=account-signup-signup-module-es2015.js.map