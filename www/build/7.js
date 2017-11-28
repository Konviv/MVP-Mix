webpackJsonp([7],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpendTrackerPageModule", function() { return SpendTrackerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spend_tracker__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpendTrackerPageModule = (function () {
    function SpendTrackerPageModule() {
    }
    return SpendTrackerPageModule;
}());
SpendTrackerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__spend_tracker__["a" /* SpendTrackerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__spend_tracker__["a" /* SpendTrackerPage */]),
        ],
    })
], SpendTrackerPageModule);

//# sourceMappingURL=spend-tracker.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpendTrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpendTrackerPage = (function () {
    function SpendTrackerPage(navCtrl, navParams, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.sevenDayAvg = 0;
        this.transactions = [];
        this.dailyAmount = [];
        var currentDate = new Date();
        // Fill array with date as key
        for (var i = 0; i < 7; i++) {
            this.dailyAmount.push({
                date: currentDate.toLocaleDateString().toString(),
                amount: 0
            });
            currentDate.setDate(currentDate.getDate() - 1);
        }
        this.getTransactions();
    }
    // Get amount spent each day in the past week
    SpendTrackerPage.prototype.getTransactions = function () {
        var _this = this;
        this.testService.getTransactions()
            .subscribe(function (data) {
            _this.transactions = data.result.map(function (data) {
                // Get current date
                var d = new Date(data.date);
                var date = d.toLocaleDateString().toString();
                // Increment amount in correct key (date)
                if (date in _this.dailyAmount) {
                    _this.dailyAmount[date] += data.amount;
                }
                return {
                    amount: data.amount,
                    date: d.toLocaleDateString()
                };
            });
            // Get 7 day average
            var totalAmount = 0;
            _this.dailyAmount.forEach(function (i) {
                if (i.amount != null) {
                    totalAmount += i.amount;
                }
            });
            _this.sevenDayAvg = totalAmount / 7;
            _this.sevenDayAvg.toFixed(2);
        }, function (error) { return alert(error); });
    };
    return SpendTrackerPage;
}());
SpendTrackerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-spend-tracker',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/spend-tracker/spend-tracker.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Spend Tracker</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <p style="text-align:center; color:#ccc; margin-top:15px; font-size:22px; color:#555; margin-bottom:30px;">7 Day Average:</p>\n    <p style="text-align:center; padding-bottom:25px;"><span style="font-size:24px; color:white; background-color:#53bcbb; border-radius:75px; padding:15px 30px;">${{sevenDayAvg}}</span></p>\n    <ion-grid *ngFor="let d of dailyAmount">\n      <ion-row class="r">\n        <ion-col>{{d.date}}</ion-col>\n        <ion-col text-right>${{d.amount}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/spend-tracker/spend-tracker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], SpendTrackerPage);

//# sourceMappingURL=spend-tracker.js.map

/***/ })

});
//# sourceMappingURL=7.js.map