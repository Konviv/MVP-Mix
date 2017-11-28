webpackJsonp([23],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = (function () {
    function MainPageModule() {
    }
    return MainPageModule;
}());
MainPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
        ],
    })
], MainPageModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buckets_buckets__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_service_share_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPage = (function () {
    function MainPage(navCtrl, navParams, modalCtrl, testService, events, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.testService = testService;
        this.events = events;
        this.shareService = shareService;
        this.leftToSpend = 0;
        this.income = 0;
        this.creditCardBalance = 0;
        this.hasCreditCard = false;
        this.badgeCount = 0; // Number of new notifications to display in badge
        this.bucketArray = []; // Array containing bucket objects
        this.transactions = [];
        this.accounts = [];
        // let index = 0;
        this.getIncome();
        this.getCreditCardBalance();
        this.getBuckets();
        // Increment badge count if trigger was activated
        if (this.shareService.getLowBucketTrigger() == true) {
            this.incrementBadgeCount();
        }
        if (this.shareService.getIncomeTrigger() == true) {
            this.incrementBadgeCount();
        }
        if (this.shareService.getBillPaidTrigger() == true) {
            this.incrementBadgeCount();
        }
    }
    // Get income
    MainPage.prototype.getIncome = function () {
        var _this = this;
        this.testService.getTransactions()
            .subscribe(function (data) {
            _this.transactions = data.result.map(function (data) {
                if (data.category === "Transfer") {
                    return {
                        category: data.category,
                        amount: data.amount,
                        name: data.name
                    };
                }
            });
            // Get all valid transactions
            _this.transactions = _this.transactions.filter(function (i) {
                return (i !== undefined);
            });
            _this.transactions.forEach(function (i) {
                // Check if there was an income event
                if (i.name.includes("Deposit") || i.name.includes("deposit")) {
                    _this.income += i.amount;
                    _this.shareService.setIncomeTrigger(true);
                }
                // Check if transfer was a bill
                if (i.name.includes("Bill") || i.name.includes("bill")) {
                    _this.shareService.setBillPaidTrigger(true);
                }
            });
        }, function (error) { return alert(error); });
    };
    // Get credit card information
    MainPage.prototype.getCreditCardBalance = function () {
        var _this = this;
        this.testService.getAccounts()
            .subscribe(function (data) {
            // Get total balance
            var creditCardAccount = 0;
            _this.accounts = data.result.map(function (i) {
                if (i.subtype == 'credit card') {
                    creditCardAccount++;
                    if (i.balances.available != null) {
                        _this.creditCardBalance += i.balances.available;
                    }
                }
            });
            // Check if credit card exists
            if (creditCardAccount > 0) {
                _this.hasCreditCard = true;
            }
        });
    };
    MainPage.prototype.getBuckets = function () {
        var _this = this;
        this.testService.getBuckets()
            .subscribe(function (data) {
            _this.bucketArray = data;
            // Check if bucket is below 15%
            _this.bucketArray.forEach(function (i) {
                var percent = (i.bucketfill / i.bucketsize) * 100;
                if (percent < 15) {
                    _this.shareService.setLowBucketTrigger(true); // Activate trigger if percent is below 15%
                }
            });
        }, function (error) { return alert(error); }, function () {
            // Calculate amount left to spend
            for (var i = 0; i < _this.bucketArray.length; i++) {
                _this.leftToSpend += _this.bucketArray[i].bucketfill;
            }
        });
    };
    // Increment badge count for new notifications
    MainPage.prototype.incrementBadgeCount = function () {
        this.events.publish('badge:updated', ++this.badgeCount);
    };
    // Decrement badge count for new notifications
    MainPage.prototype.decrementBadgeCount = function () {
        // Make sure notifications are never negative
        if (this.badgeCount == 0) {
            this.events.publish('badge:updated', 0);
        }
        else {
            this.events.publish('badge:updated', --this.badgeCount);
        }
    };
    // Create modal for bucket page
    MainPage.prototype.pushBucket = function (bucket) {
        var bucketModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__buckets_buckets__["a" /* BucketsPage */], {
            bucket: bucket,
            bucketArray: this.bucketArray
        });
        bucketModal.present();
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/main/main.html"*/'<ion-content padding>\n\n  <!--Main top slider-->\n  <ion-card id="tbox">\n    <ion-slides>\n\n      <!--Left to spend slide-->\n      <ion-slide class="expand">\n        <p style="display:block; float:right; font-size:24spx;"><ion-icon style="color:#eee!important;" name="ios-arrow-forward"></ion-icon></p>\n        <div style="padding-bottom:25px; padding-top:15px;"><span style="font-size:24px; color:white; background-color:#53bcbb; border-radius:75px; padding:15px 30px;">${{leftToSpend}}</span></div>\n        <div><span>Cash</span></div>\n        <p style="font-size:10px; color:#AAA;">This is how much total you have sitting in your checking account</p>\n      </ion-slide>\n\n      <!--Income slide-->\n      <ion-slide class="expand">\n        <div><span style="color:white;">Income</span></div>\n        <div><span style="color:white;">${{income}}</span></div>\n      </ion-slide>\n\n      <!--Credit card info slide-->\n      <ion-slide *ngIf="hasCreditCard" class="expand">\n        <div><span style="color:white;">Credit Card Balance</span></div>\n        <div><span style="color:white;">${{creditCardBalance}}</span></div>\n      </ion-slide>\n\n    </ion-slides>\n  </ion-card>\n\n  <!--Display cards-->\n  <div *ngFor="let b of bucketArray; let i=index" style="margin-top:-8px;">\n\n    <!--Green buckets-->\n    <ion-card style="padding-top:10px;" class="bumpbox" *ngIf="(b.bucketfill / b.bucketsize) * 100 >= 100" (click)="pushBucket(b)">\n      <div class="circle">\n        <span style="position:absolute; bottom:0; left:0; width:100%; background:#00CD00; height:100%; transition:height 600ms; z-index:1;"><p style="font-size:12px; color:#fff; padding-top:40px;">${{b.bucketfill}}</p></span>\n      </div>\n       <p style="display:block; float:right; font-size:10px;"><ion-icon style="color:#ccc!important;" name="ios-arrow-forward"></ion-icon></p>\n       <p style="color:#008899; font-size:15px; margin-top:12px;">{{b.bucketname}}</p>\n       <p style="color:#999!important; font-size:15px; font-weight:bold;">Balance: ${{b.bucketfill}}</p>\n       <p style="color:#333!important;">Bucket Capacity: ${{b.bucketsize}}</p>\n    </ion-card>\n\n    <ion-card style="padding-top:10px;" class="bumpbox" *ngIf="(b.bucketfill / b.bucketsize) * 100 < 100 && (b.bucketfill / b.bucketsize) * 100 >= 75" (click)="pushBucket(b)">\n      <div class="circle">\n        <span style="position:absolute; bottom:0; left:0; width:100%; background:#00CD00; height:80%; transition:height 600ms; z-index:1;"><p style="font-size:12px; color:#434343; padding-top:40px;">${{b.bucketfill}}</p></span>\n      </div>\n      <p style="display:block; float:right; font-size:10px;"><ion-icon style="color:#ccc!important;" name="ios-arrow-forward"></ion-icon></p>\n      <p style="color:#008899; font-size:15px; margin-top:12px;">{{b.bucketname}}</p>\n       <p style="color:#999!important; font-size:15px; font-weight:bold;">Balance: ${{b.bucketfill}}</p>\n       <p style="color:#333!important;">Bucket Capacity: ${{b.bucketsize}}</p>\n    </ion-card>\n\n    <!--Blue buckets-->\n    <ion-card style="padding-top:10px;" class="bumpbox" *ngIf="(b.bucketfill / b.bucketsize) * 100 < 75 && (b.bucketfill / b.bucketsize) * 100 > 50" (click)="pushBucket(b)">\n      <div class="circle">\n        <span style="position:absolute; bottom:0; left:0; width:100%; background:#00CCCC; height:65%; transition:height 600ms; z-index:1;"><p style="font-size:12px; color:#434343; padding-top:0px;">${{b.bucketfill}}</p></span>\n      </div>\n      <p style="display:block; float:right; font-size:10px;"><ion-icon style="color:#ccc!important;" name="ios-arrow-forward"></ion-icon></p>\n      <p style="color:#008899; font-size:15px; margin-top:12px;">{{b.bucketname}}</p>\n      <p style="color:#999!important; font-size:15px; font-weight:bold;">Balance: ${{b.bucketfill}}</p>\n      <p style="color:#333!important;">Bucket Capacity: ${{b.bucketsize}}</p>\n    </ion-card>\n\n    <ion-card style="padding-top:10px;" class="bumpbox" *ngIf="(b.bucketfill / b.bucketsize) * 100 == 50" (click)="pushBucket(b)">\n      <div class="circle">\n        <span style="position:absolute; bottom:0; left:0; width:100%; background:#00CCCC; height:50%; transition:height 600ms; z-index:1;"><p style="font-size:12px; color:#434343; padding-top:0px;">${{b.bucketfill}}</p></span>\n      </div>\n      <p style="display:block; float:right; font-size:10px;"><ion-icon style="color:#ccc!important;" name="ios-arrow-forward"></ion-icon></p>\n      <p style="color:#008899; font-size:15px; margin-top:12px;">{{b.bucketname}}</p>\n      <p style="color:#999!important; font-size:15px; font-weight:bold;">Balance: ${{b.bucketfill}}</p>\n      <p style="color:#333!important;">Bucket Capacity: ${{b.bucketsize}}</p>\n    </ion-card>\n\n    <!--Yellow Bucket-->\n    <ion-card style="padding-top:10px;" class="bumpbox" *ngIf="(b.bucketfill / b.bucketsize) * 100 < 50 && (b.bucketfill / b.bucketsize) * 100 >= 25" (click)="pushBucket(b)">\n      <div class="circle">\n        <span style="position:absolute; bottom:0; left:0; width:100%; background:#FFFF00; height:35%; transition:height 600ms; z-index:1;"><p style="font-size:12px; color:#434343; padding-top:0px;">${{b.bucketfill}}</p></span>\n      </div>\n      <p style="display:block; float:right; font-size:10px;"><ion-icon style="color:#ccc!important;" name="ios-arrow-forward"></ion-icon></p>\n      <p style="color:#008899; font-size:15px; margin-top:12px;">{{b.bucketname}}</p>\n      <p style="color:#999!important; font-size:15px; font-weight:bold;">Balance: ${{b.bucketfill}}</p>\n      <p style="color:#333!important;">Bucket Capacity: ${{b.bucketsize}}</p>\n    </ion-card>\n\n    <!--Pink buckets-->\n    <ion-card style="padding-top:10px;" class="bumpbox" *ngIf="(b.bucketfill / b.bucketsize) * 100 < 25 && (b.bucketfill / b.bucketsize) * 100 > 0" (click)="pushBucket(b)">\n      <div class="circle">\n        <span style="position:absolute; bottom:0; left:0; width:100%; background:#FF3DC1; height:15%; transition:height 600ms; z-index:1;"><p style="font-size:12px; color:#434343; padding-top:0px;">${{b.bucketfill}}</p></span>\n      </div>\n      <p style="display:block; float:right; font-size:10px;"><ion-icon style="color:#ccc!important;" name="ios-arrow-forward"></ion-icon></p>\n      <p style="color:#008899; font-size:15px; margin-top:12px;">{{b.bucketname}}</p>\n      <p style="color:#999!important; font-size:15px; font-weight:bold;">Balance: ${{b.bucketfill}}</p>\n      <p style="color:#333!important;">Bucket Capacity: ${{b.bucketsize}}</p>\n    </ion-card>\n\n    <ion-card style="padding-top:10px;" class="bumpbox" *ngIf="(b.bucketfill / b.bucketsize) * 100 <= 0" (click)="pushBucket(b)">\n      <div class="circle">\n        <span style="position:absolute; bottom:0; left:0; width:100%; background:#FF3DC1; height:0%; transition:height 600ms; z-index:1;"></span>\n      </div>\n      <p style="color:#333!important; font-size:22px; font-weight:bold;">Balance: ${{b.bucketfill}}</p>\n      <p style="color:#333!important;">Bucket Capacity: ${{b.bucketsize}}</p>\n      <p style="color:#008899; font-size:15px;">{{b.bucketname}}</p>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__["a" /* TestServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=23.js.map