webpackJsonp([25],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkuseraccountPageModule", function() { return LinkuseraccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkuseraccount__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LinkuseraccountPageModule = (function () {
    function LinkuseraccountPageModule() {
    }
    return LinkuseraccountPageModule;
}());
LinkuseraccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__linkuseraccount__["a" /* LinkuseraccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__linkuseraccount__["a" /* LinkuseraccountPage */]),
        ],
    })
], LinkuseraccountPageModule);

//# sourceMappingURL=linkuseraccount.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkuseraccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkuseraccountPage = (function () {
    function LinkuseraccountPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    // userInfo = {
    //   public_token: 'public-sandbox-05726013-af6a-4b99-89a7-3d29589689d1'
    // };
    LinkuseraccountPage.prototype.linkUserAccounts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get('http://localhost:3001/accounts', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('the data is >>>>>>>> ', data);
        });
        this.navCtrl.setRoot('LinkuseraccountPage');
    };
    return LinkuseraccountPage;
}());
LinkuseraccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-linkuseraccount',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/linkuseraccount/linkuseraccount.html"*/'\n<ion-header>\n  <script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>\n\n  <ion-navbar>\n    <ion-title>Please Add Your Bank Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <button ion-button small block (click)="linkUserAccounts()">Link Account</button>\n    <a href="http://localhost:3001/link">Link Account</a>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/linkuseraccount/linkuseraccount.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], LinkuseraccountPage);

//# sourceMappingURL=linkuseraccount.js.map

/***/ })

});
//# sourceMappingURL=25.js.map