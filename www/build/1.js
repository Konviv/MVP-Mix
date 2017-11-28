webpackJsonp([1],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionsPageModule = (function () {
    function TransactionsPageModule() {
    }
    return TransactionsPageModule;
}());
TransactionsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */]),
        ],
    })
], TransactionsPageModule);

//# sourceMappingURL=transactions.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionsPage = (function () {
    function TransactionsPage(navCtrl, navParams, testService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.http = http;
        this.transactions = []; // Empty array for account info
    }
    TransactionsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3001/transactions', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.transactions = data.transactions.map(function (data) {
                return {
                    amount: data.amount,
                    name: data.name
                };
            });
            console.log('>>>>>>>>>>>  ', data);
            // console.log('>>>>>>>>>>> accounts ', this.accounts)
        });
    };
    return TransactionsPage;
}());
TransactionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transactions',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/transactions/transactions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>All Transactions</ion-title>\n    <!-- <ion-title>{{acct_name}}</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let t of transactions">\n      <div float-left>{{t.name}}</div>\n      <div float-right>{{t.amount}}</div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/transactions/transactions.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__["a" /* TestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__["a" /* TestServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], TransactionsPage);

//# sourceMappingURL=transactions.js.map

/***/ })

});
//# sourceMappingURL=1.js.map