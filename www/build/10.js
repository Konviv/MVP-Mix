webpackJsonp([10],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsBucketPageModule", function() { return SavingsBucketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__savings_bucket__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SavingsBucketPageModule = (function () {
    function SavingsBucketPageModule() {
    }
    return SavingsBucketPageModule;
}());
SavingsBucketPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__savings_bucket__["a" /* SavingsBucketPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__savings_bucket__["a" /* SavingsBucketPage */]),
        ],
    })
], SavingsBucketPageModule);

//# sourceMappingURL=savings-bucket.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavingsBucketPage; });
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



var SavingsBucketPage = (function () {
    function SavingsBucketPage(navCtrl, navParams, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.savingsTotal = 0;
        this.avgMonthlySpending = 0;
        this.amountInSavings = 0;
        this.allTransactions = [];
        this.amountSpentEachMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.getSavings();
        this.averageMonthlySpending();
    }
    // Get amount currently available in savings account
    SavingsBucketPage.prototype.getSavings = function () {
        var _this = this;
        this.testService.getAccounts()
            .subscribe(function (data) {
            _this.allAccounts = data.result.map(function (i) {
                if (i.subtype == "savings" && i.balances.available != null) {
                    _this.amountInSavings += i.balances.available;
                }
            });
        });
    };
    // Get average monthly spending
    SavingsBucketPage.prototype.averageMonthlySpending = function () {
        var _this = this;
        this.testService.getTransactions()
            .subscribe(function (data) {
            _this.allTransactions = data.result.map(function (data) {
                // Get month of current transaction
                var date = new Date(data.date);
                var month = date.getUTCMonth();
                if (data.amount != null) {
                    _this.amountSpentEachMonth[month] += data.amount; // Get total amount spent in that month
                }
            });
            var activeMonths = 0;
            var monthlyTotal = 0;
            // Get number of months that money was spent
            for (var i = 0; i < _this.amountSpentEachMonth.length; i++) {
                if (_this.amountSpentEachMonth[i] > 0) {
                    activeMonths++;
                }
            }
            // Get total spent in all months
            for (var i = 0; i < _this.amountSpentEachMonth.length; i++) {
                monthlyTotal += _this.amountSpentEachMonth[i];
            }
            if (activeMonths > 0) {
                _this.avgMonthlySpending = monthlyTotal / activeMonths;
            }
        }, function (error) { return alert(error); });
    };
    SavingsBucketPage.prototype.changeSavingsTotal = function (months) {
        this.savingsTotal = this.avgMonthlySpending * months; // Multiply total by month goal
        this.savingsTotal.toFixed(2);
    };
    return SavingsBucketPage;
}());
SavingsBucketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-savings-bucket',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/savings-bucket/savings-bucket.html"*/'<ion-content padding center style="text-align:center;">\n\n  <h1 style="text-align:center; color:#ccc; margin-top:0px; margin-bottom:15px;">Amount in Savings:</h1>\n  <ion-card text-center style="padding-bottom:35px; padding-top:15px;"><span style="color:white; background-color:#53bcbb; border-radius:75px; padding:15px 30px;">{{month}} {{day}}</span></ion-card>\n\n  <ion-card style="maring-top:10px;">\n    <p style="font-size:16px;">See your recommended emergency savings</p>\n  </ion-card>\n\n  <ion-card>\n    <div style="margin:-5px 0px 30px 90px;">\n    <!--Draw bucket at appropriate level-->\n    <div class="circle2" *ngIf="(amountInSavings/savingsTotal) * 100 >= 100 && savingsTotal > 0 && amountInSavings > 0">\n      <p style="position:relative; color:#e5e5e5!important; font-size:24px; font-weight:bold; z-index:3">\n        ${{amountInSavings}}</p>\n      <p style="position:relative; color:#333!important; font-size:20px; font-weight:bold; z-index:3">of\n        ${{savingsTotal}}</p>\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00c1b0; height:100%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle2"\n         *ngIf="(amountInSavings/savingsTotal) * 100 < 100 && (amountInSavings/savingsTotal) * 100 >= 75 && savingsTotal > 0 && amountInSavings > 0">\n      <p style="position:relative; color:#e5e5e5!important; font-size:24px; font-weight:bold; z-index:3">\n        ${{amountInSavings}}</p>\n      <p style="position:relative; color:#333!important; font-size:20px; font-weight:bold; z-index:3">of\n        ${{savingsTotal}}</p>\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00c1b0; height:80%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle2"\n         *ngIf="(amountInSavings/savingsTotal) * 100 < 75 && (amountInSavings/savingsTotal) * 100 > 50 && savingsTotal > 0 && amountInSavings > 0">\n      <p style="position:relative; color:#e5e5e5!important; font-size:24px; font-weight:bold; z-index:3">\n        ${{amountInSavings}}</p>\n      <p style="position:relative; color:#333!important; font-size:20px; font-weight:bold; z-index:3">of\n        ${{savingsTotal}}</p>\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00c1b0; height:60%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle2" *ngIf="(amountInSavings/savingsTotal) * 100 == 50 && savingsTotal > 0 && amountInSavings > 0">\n      <p style="position:relative; color:#e5e5e5!important; font-size:24px; font-weight:bold; z-index:3">\n        ${{amountInSavings}}</p>\n      <p style="position:relative; color:#333!important; font-size:20px; font-weight:bold; z-index:3">of\n        ${{savingsTotal}}</p>\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00c1b0; height:50%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle2"\n         *ngIf="(amountInSavings/savingsTotal) * 100 < 50 && (amountInSavings/savingsTotal) * 100 >= 25 && savingsTotal > 0 && amountInSavings > 0">\n      <p style="position:relative; color:#e5e5e5!important; font-size:24px; font-weight:bold; z-index:3">\n        ${{amountInSavings}}</p>\n      <p style="position:relative; color:#333!important; font-size:20px; font-weight:bold; z-index:3">of\n        ${{savingsTotal}}</p>\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00c1b0; height:35%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle2"\n         *ngIf="(amountInSavings/savingsTotal) * 100 < 25 && (amountInSavings/savingsTotal) * 100 > 0 && savingsTotal > 0 && amountInSavings > 0">\n      <p style="position:relative; color:#e5e5e5!important; font-size:24px; font-weight:bold; z-index:3">\n        ${{amountInSavings}}</p>\n      <p style="position:relative; color:#333!important; font-size:20px; font-weight:bold; z-index:3">of\n        ${{savingsTotal}}</p>\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00c1b0; height:20%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle2" *ngIf="(amountInSavings/savingsTotal) * 100 <= 0 || savingsTotal == 0 || amountInSavings == 0">\n      <p style="position:relative; color:#e5e5e5!important; font-size:24px; font-weight:bold; z-index:3">\n        ${{amountInSavings}}</p>\n      <p style="position:relative; color:#333!important; font-size:20px; font-weight:bold; z-index:3">of\n        ${{savingsTotal}}</p>\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00c1b0; height:0%; transition:height 600ms; z-index:1;"></span>\n    </div>\n  </div>\n</ion-card>\n\n<ion-card>\n  <div style="margin-top:0px;">\n    <!--Buttons for different time ranges-->\n    <ion-row>\n      <ion-col>\n        <button class="ton" ion-button (click)="changeSavingsTotal(3)"><span style="color:white;">3 Months</span>\n        </button>\n      </ion-col>\n\n      <ion-col>\n        <button class="ton" ion-button (click)="changeSavingsTotal(6)"><span style="color:white;">6 Months</span>\n        </button>\n      </ion-col>\n\n      <ion-col>\n        <button class="ton" ion-button (click)="changeSavingsTotal(9)"><span style="color:white;">9 Months</span>\n        </button>\n      </ion-col>\n\n      <ion-col>\n        <button class="ton" ion-button (click)="changeSavingsTotal(12)"><span style="color:white;">12 Months</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n  <ion-card>\n    <p style="padding:10px; color:#888;">We are showing you how much you have saved out of the 3, 6, 9, or 12 month goal</p>\n  </ion-card>\n\n  <ion-card>\n    <p style="padding:20px; border-top:1px solid #ccc; color:#ccc;">Coming soon: Create your own savings goals</p>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/savings-bucket/savings-bucket.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], SavingsBucketPage);

//# sourceMappingURL=savings-bucket.js.map

/***/ })

});
//# sourceMappingURL=10.js.map