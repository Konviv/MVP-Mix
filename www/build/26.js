webpackJsonp([26],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightsPageModule", function() { return InsightsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insights__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InsightsPageModule = (function () {
    function InsightsPageModule() {
    }
    return InsightsPageModule;
}());
InsightsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__insights__["a" /* InsightsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__insights__["a" /* InsightsPage */]),
        ],
    })
], InsightsPageModule);

//# sourceMappingURL=insights.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_insights_all_insights__ = __webpack_require__(202);
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




var InsightsPage = (function () {
    function InsightsPage(navCtrl, navParams, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.allTransactions = [];
        this.amountSaved = 0;
        this.numberOfTransactionsOver100 = 0;
        this.monthlySpending = 0;
        // Get current month
        var currentDate = new Date();
        var currentMonth = currentDate.getUTCMonth();
        var currentYear = currentDate.getUTCFullYear();
        this.getInsights(currentMonth, currentYear);
    }
    // Get amount saved in specific category
    InsightsPage.prototype.getInsights = function (currentMonth, currentYear) {
        var _this = this;
        this.testService.getTransactions()
            .subscribe(function (data) {
            var category = "Food and Drink";
            var totalDaysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // Get total days in current month
            _this.allTransactions = data.result.map(function (data) {
                return {
                    name: data.name,
                    amount: data.amount,
                    category: data.category,
                    date: data.date
                };
            });
            _this.allTransactions.forEach(function (i) {
                // Get number of transactions that are over $100
                // Get month of transaction
                var date = new Date(i.date);
                var month = date.getUTCMonth();
                // Increment counter
                if (i.amount > 100 && month == currentMonth) {
                    _this.numberOfTransactionsOver100++;
                }
                // Total spent this month
                if (currentMonth == month) {
                    _this.monthlySpending += i.amount;
                }
            });
            // Get daily average to 2 decimal points
            _this.dailyAverage = _this.monthlySpending / totalDaysInMonth;
            _this.dailyAverage = _this.dailyAverage.toFixed(2);
            // Get all transaction of given category
            _this.allTransactions = _this.allTransactions.filter(function (i) {
                return (i.category == category);
            });
            _this.allTransactions.forEach(function (i) {
                var amountSpentLastMonth = 0;
                var amountSpentThisMonth = 0;
                // Get month of transaction
                var date = new Date(i.date);
                var month = date.getUTCMonth();
                // Calculate amount spent previous month
                if (month == (currentMonth - 1)) {
                    amountSpentLastMonth += i.amount;
                }
                // Calculate amount spent this month
                if (month == currentMonth) {
                    amountSpentThisMonth += i.amount;
                }
                _this.amountSaved = amountSpentLastMonth - amountSpentThisMonth;
            });
        });
    };
    InsightsPage.prototype.pushAllInsights = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__all_insights_all_insights__["a" /* AllInsightsPage */]);
    };
    return InsightsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], InsightsPage.prototype, "slides", void 0);
InsightsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-insights',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/insights/insights.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Insights</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card>\n          <h1 id="title">Did you know?</h1>\n</ion-card>\n\n  <!--Insight slider-->\n  <ion-card class="bumpbox" style="height:440px;">\n    <ion-slides pager>\n      <ion-slide style="background-color:#00aba3;">\n        <img src="https://github.com/Konviv/temp-pics/blob/master/piggybank.jpg?raw=true" style="padding-left:48px; width:300px;" alt="piggy bank" />\n        <br /><br />\n        <h1 text-wrap class="insight"><span style="color:white;">As of today, you’ve spent ${{amountSaved}} less than at this point last month for “Eating Out”.</span></h1>\n        <p style="font-size:12px; opacity:0.4; margin-top:-20px; margin-bottom:10px;">Swipe right to see Next -></p>\n      </ion-slide>\n\n      <ion-slide style="background-color:#0196da;">\n        <img src="https://github.com/Konviv/temp-pics/blob/master/benji2.jpg?raw=true" style="padding-left:48px; width:290px;" alt="100" />\n        <br /><br />\n        <h1 text-wrap class="insight"><span style="color:white;">There were {{numberOfTransactionsOver100}} transactions this month that were over $100.</span></h1>\n        <p style="font-size:12px; opacity:0.4; margin-top:-20px; margin-bottom:10px;">Swipe right to see Next -></p>\n      </ion-slide>\n\n      <ion-slide>\n        <img src="https://github.com/Konviv/temp-pics/blob/master/monec.jpg?raw=true" style="margin-bottom:5px; margin-top:-20px; padding-left:48px; width:290px;" alt="money" />\n        <br />\n        <h1 text-wrap class="insight">This month you’ve spent ${{monthlySpending}} so far, which is an average of ${{dailyAverage}} per day.</h1>\n        <p style="font-size:12px; opacity:0.4; margin-top:-20px; margin-bottom:10px;">Swipe right to see Next -></p>\n      </ion-slide>\n\n    </ion-slides>\n  </ion-card>\n\n  <!--See all insights-->\n  <ion-card id="footer">\n  <button class="btn in" ion-button clear (click)="pushAllInsights()"><span style="color:white;">See past insights</span></button>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/insights/insights.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__["a" /* TestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], InsightsPage);

//# sourceMappingURL=insights.js.map

/***/ })

});
//# sourceMappingURL=26.js.map