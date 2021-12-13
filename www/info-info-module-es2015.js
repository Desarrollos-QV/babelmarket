(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  mode=\"ios\" *ngIf=\"data\">\n\n\n<div mode=\"ios\">\n  <ion-slides pager=\"true\" autoplay=\"3000\">\n    <ion-slide *ngFor=\"let pics of data.images\">\n      <img src=\"{{ pics.img }}\" style=\"height: 200px;\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card-header>\n    <ion-card-title>{{ data.title }} <ion-badge color=\"primary\" style=\"float: right\">{{ data.rating }}<br></ion-badge></ion-card-title>\n    <ion-card-subtitle>{{ data.type }}</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-list lines=\"none\">\n      <ion-item text-wrap>\n        <ion-label>{{ data.address }}</ion-label>\n        <ion-icon name=\"pin\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <ion-label><a href=\"https://api.whatsapp.com/send?phone=+52{{ data.phone }}\">{{ data.phone }}</a></ion-label>\n        <ion-icon name=\"call\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Costo por persona : {{ data.currency }}{{ data.person_cost }}</ion-label>\n        <ion-icon name=\"cash\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Giro : {{ data.type }}</ion-label>\n        <ion-icon name=\"time\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n      <!-- \n      <ion-item>\n        <ion-label>{{ text.info_person }} : {{ data.currency }}{{ data.person_cost }}</ion-label>\n        <ion-icon name=\"cash\" slot=\"start\" color=\"danger\"></ion-icon>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label>{{ text.info_d_time }} : {{ data.delivery_time }}</ion-label>\n        <ion-icon name=\"cube\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n  </ion-card-content>\n\n</div>\n\n<span *ngIf=\"data.ratings.length > 0\">\n  <h3 style=\"padding: 0px 18px\">{{ text.info_rating_title }}</h3>\n\n  <ion-card mode=\"ios\" *ngFor=\"let rate of data.ratings\">\n\n    <ion-card-header>\n      <ion-card-subtitle>{{ rate.user }} <small style=\"float: right\">{{ rate.date }}</small>\n        <ion-row *ngIf=\"rate.star == 1\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 2\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 3\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 4\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 5\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ rate.comment }}\n    </ion-card-content>\n  </ion-card>\n\n</span>\n\n<div class=\"viewPic\" *ngIf=\"ViewPic == true\">\n  <ion-label (click)=\"closevp()\">\n      close\n  </ion-label>\n  <img src=\"{{Pic}}\">\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");







const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
    }
];
let InfoPageModule = class InfoPageModule {
};
InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "./src/app/info/info.page.scss":
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  font-size: 14px !important;\n}\n\n.viewPic {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n}\n\n.viewPic ion-label {\n  margin: 10px;\n  padding: 8px 12px;\n  border: 1px solid #fff;\n  float: right;\n  color: #fff;\n}\n\n.viewPic img {\n  position: absolute;\n  top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcaW5mb1xcaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQywwQkFBQTtBQ0FEOztBRElBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFBTyxPQUFBO0VBQ1AsV0FBQTtFQUFZLGFBQUE7RUFDWixvQ0FBQTtFQUNBLGFBQUE7QUNDRDs7QURFQztFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIGlvbi1sYWJlbFxue1xuXHRmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xufVxuXG5cbi52aWV3UGljIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDB2aDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KTtcblx0ei1pbmRleDogMTAwMDtcblxuXG5cdGlvbi1sYWJlbCB7XG5cdFx0bWFyZ2luOiAxMHB4O1xuXHRcdHBhZGRpbmc6IDhweCAxMnB4O1xuXHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblxuXHRpbWcge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDc1cHg7XG5cdFx0XG5cdH1cbn0iLCJpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnZpZXdQaWMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi52aWV3UGljIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNmZmY7XG59XG4udmlld1BpYyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/info/info.page.ts":
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");





let InfoPage = class InfoPage {
    constructor(server, route, nav) {
        this.server = server;
        this.route = route;
        this.nav = nav;
        this.ViewPic = false;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.route.queryParams.subscribe(params => {
            if (params.id) {
                var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
                var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
                var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
                this.server.getStore(params.id + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((data) => {
                    if (data.data) {
                        this.data = data.data[0];
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
    Viewpic(Pic) {
        this.Pic = Pic;
        this.ViewPic = true;
    }
    closevp() {
        this.ViewPic = false;
    }
};
InfoPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.page.scss */ "./src/app/info/info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=info-info-module-es2015.js.map