webpackJsonp([29],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsPageModule", function() { return BillsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bills__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillsPageModule = (function () {
    function BillsPageModule() {
    }
    return BillsPageModule;
}());
BillsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bills__["a" /* BillsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bills__["a" /* BillsPage */]),
        ],
    })
], BillsPageModule);

//# sourceMappingURL=bills.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_service_share_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillsPage = (function () {
    function BillsPage(navCtrl, navParams, testService, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.shareService = shareService;
        this.bills = [];
        this.allBills = [];
        this.bucketArray = [];
        this.billBuckets = [];
        // Get current date
        var date = new Date();
        this.month = date.toLocaleString("en-us", { month: "long" });
        this.day = date.getUTCDate();
        this.getBills();
        this.getBillBuckets();
    }
    BillsPage.prototype.getBills = function () {
        var _this = this;
        this.testService.getTransactions()
            .subscribe(function (data) {
            _this.bills = data.result.map(function (data) {
                if (data.category === "Service" || data.category === "Rent") {
                    var d = new Date(data.date);
                    return {
                        amount: data.amount,
                        category: data.category,
                        date: d.toLocaleDateString(),
                        name: data.name
                    };
                }
            });
            // Get current month
            var date = new Date();
            var currentMonth = date.getUTCMonth();
            // Get bills from the current month
            _this.bills = _this.bills.filter(function (i) {
                if (i !== undefined) {
                    var d = new Date(i.date);
                    var month = d.getUTCMonth();
                }
                // return (i !== undefined && month == currentMonth);
                return (i !== undefined);
            });
            _this.bills.forEach(function (i) {
                var inAllBills = false;
                // Check if bill is in all bills array
                for (var j = 0; j < _this.allBills.length; j++) {
                    if (i.name == _this.allBills[j].name) {
                        inAllBills = true;
                    }
                }
                // Set month to current month
                var d = new Date(i.date);
                d.setMonth(currentMonth);
                // Add bill to array if not already there
                if (!inAllBills) {
                    _this.allBills.push({
                        name: i.name,
                        date: d.toLocaleDateString(),
                        amount: i.amount
                    });
                    inAllBills = false;
                }
            });
            // Display next bill due
            var billDate = new Date();
            // Find next bill due
            var billDue = _this.allBills[0];
            var billDueDate = new Date(billDue.date);
            _this.allBills.forEach(function (i) {
                // Get time in milliseconds
                var d = new Date(i.date);
                var billTime = d.getTime();
                var currentTime = billDate.getTime();
                if (Math.abs(currentTime - billTime) < Math.abs(currentTime - billDueDate.getTime()) &&
                    billTime > currentTime) {
                    billDue = i;
                }
            });
            _this.billDate = billDue.date; // Change date to MM/DD/YYYY format
            _this.upcomingBillAmount = billDue.amount;
            _this.upcomingBillName = billDue.name;
        }, function (error) { return alert(error); });
    };
    BillsPage.prototype.getBillBuckets = function () {
        var _this = this;
        this.testService.getBuckets()
            .subscribe(function (data) {
            _this.bucketArray = data;
            _this.billBuckets = _this.bucketArray.filter(function (i) {
                return (i.bucketname == "Insurance" || i.bucketname == "Loans" || i.bucketname == "Rent" ||
                    i.bucketname == "Subscription" || i.bucketname == "Bills" || i.bucketname == "Variable Bills");
            });
            // Check if bucket is below 15%
            _this.bucketArray.forEach(function (i) {
                var percent = (i.bucketfill / i.bucketsize) * 100;
                if (percent < 15) {
                    _this.shareService.setLowBucketTrigger(true); // Activate trigger if percent is below 15%
                }
            });
        }, function (error) { return alert(error); });
    };
    return BillsPage;
}());
BillsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bills',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/bills/bills.html"*/'<ion-content padding>\n\n  <!--Today\'s date-->\n  <h1 style="text-align:center; color:#ccc; margin-top:20px;">Today is:</h1>\n  <ion-card text-center style="border-bottom:1px solid #ddd; padding-bottom:35px; padding-top:15px;"><span style="color:white; background-color:#53bcbb; border-radius:75px; padding:15px 30px;">{{month}} {{day}}</span></ion-card>\n  <!--Next bill due-->\n  <ion-card>\n    <ion-card-header text-center><span style="color:#999;">We estimate that your next bill due is:</span>\n    <br /><span style="font-size:10px; color:#ccc;">Based on the payment from last month</span></ion-card-header>\n    <ion-grid id="nextbill">\n      <ion-row>\n        <ion-col><span style="color:white;">{{upcomingBillName}}</span></ion-col>\n        <ion-col><span style="color:white; margin-left:35px;">${{upcomingBillAmount}}</span></ion-col>\n        <ion-col><span style="color:white;">Due {{billDate}}</span></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n<ion-card id="billsbox">\n  <div id="bi">\n  <p style="font-size:14px; padding:10px; color:#444!important;">Monthly List of Bills:</p>\n  </div>\n\n  <ion-grid *ngFor="let b of allBills">\n    <ion-row class="rowing" *ngIf="b != null">\n      <ion-col>{{b.name}}</ion-col>\n      <ion-col><span style="margin-left:35px;">${{b.amount}}</span></ion-col>\n      <ion-col>Last paid: {{b.date}}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n  <!--Display bill buckets-->\n  <ion-card>\n    <div>\n      <!--<ion-slide *ngFor="let b of bucketArray">-->\n        <!--<canvas width="130" height="130"></canvas>-->\n        <!--<canvas width="130" height="130"></canvas>-->\n      <!--</ion-slide>-->\n\n      <div *ngFor="let b of billBuckets; let i=index">\n        <div class="circle1">\n          <p style="position:relative; color:#e5e5e5!important; font-size:12px; font-weight:bold; z-index:3">{{b.bucketname}}</p>\n          <p style="position:relative; color:#e5e5e5!important; font-size:12px; font-weight:bold; z-index:3">${{b.bucketfill}}</p>\n          <p style="position:relative; color:#FFFFFF; font-size:12px; z-index:3" *ngIf="b.bucketfill==b.bucketsize; else need">Ready to pay</p>\n          <ng-template style="position:absolute; color:#FFFFFF; font-size:15px; z-index:3" #need>Need ${{b.bucketsize-b.bucketfill}}</ng-template>\n          <span style="position:absolute; bottom:0; left:0; width:100%; background:#5ba597; height:100%; transition:height 600ms; z-index:1;"></span>\n        </div>\n\n      </div>\n    </div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/bills/bills.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], BillsPage);

//# sourceMappingURL=bills.js.map

/***/ })

});
//# sourceMappingURL=29.js.map