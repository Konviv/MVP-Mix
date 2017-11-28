webpackJsonp([30],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsPageModule", function() { return AccountsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountsPageModule = (function () {
    function AccountsPageModule() {
    }
    return AccountsPageModule;
}());
AccountsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__accounts__["a" /* AccountsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accounts__["a" /* AccountsPage */]),
        ],
    })
], AccountsPageModule);

//# sourceMappingURL=accounts.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_transactions_account_transactions__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_test_service_test_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountsPage = (function () {
    function AccountsPage(navCtrl, navParams, testService, http, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.http = http;
        this.shareService = shareService;
        this.accounts = [];
        this.transactions = [];
        this.accTransactions = [];
        this.amountSpent = 0;
        this.loadAccounts();
    }
    // Get accounts
    AccountsPage.prototype.loadAccounts = function () {
        var _this = this;
        this.testService.getAccounts()
            .subscribe(function (data) {
            // this.accounts = data.accounts.map((data) => {
            _this.accounts = data.result.map(function (data) {
                return {
                    subtype: data.subtype,
                    balance: data.balances.available,
                    accountId: data.account_id
                };
            });
        });
    };
    AccountsPage.prototype.listSingleAccTrans = function (accId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_transactions_account_transactions__["a" /* AccountTransactionsPage */], { id: accId });
    };
    // Push all transactions page
    AccountsPage.prototype.ionViewDidEnter = function () {
        // this.testService.getTransactions()
        // .subscribe(data => {
        //     this.transactions = data.transactions.map((data) => {
        //       return {
        //         amount: data.amount,
        //         name: data.name
        //       }
        //     })
        // })
        var _this = this;
        this.testService.getList()
            .subscribe(function (data) {
            console.log("data: ", data);
            _this.transactions = data;
        });
    };
    // ionViewDidEnter() {
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   this.http.post('http://localhost:3001/transactions', {headers:headers})
    //     .map(res => res.json())
    //     .subscribe(data => {
    //         this.transactions = data.transactions.map((data) => {
    //           return {
    //             amount: data.amount,
    //             name: data.name
    //           }
    //         })
    //     })
    // }
    AccountsPage.prototype.pushAllTransactions = function (transactions) {
        this.navCtrl.push('TransactionsPage');
    };
    AccountsPage.prototype.getAmountSpent = function (firstMonth, firstDay, secondMonth, secondDay, thirdMonth, thirdDay) {
        var _this = this;
        this.testService.getList()
            .subscribe(function (data) {
            console.log('====================== ', data);
            _this.transactions = data;
            _this.transactions.forEach(function (i) {
                // Get month and day of transaction
                var date = new Date(i.date);
                var month = date.getUTCMonth();
                var day = date.getUTCDate();
                // Get amount from last 3 days
                if (firstMonth == month && firstDay == day || secondMonth == month && secondDay == day ||
                    thirdMonth == month && thirdDay == day) {
                    _this.amountSpent += i.amount;
                }
            });
        }, function (error) { return alert(error); });
    };
    return AccountsPage;
}());
AccountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accounts',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/accounts/accounts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Accounts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding onload="getAmountSpent()">\n  <!--<ion-content class="card-background-page">-->\n\n  <button ion-button small icon-start full color="light" (click)="loadAccounts()">\n    <span style="font-size:10px;">Update Account</span>\n  </button>\n\n  <ion-card style="padding-top:10px;" class="bumpbox">\n    <!--Show first 3 accounts-->\n    <ion-card-title>\n      Bank Name\n    </ion-card-title>\n\n    <!--Push transaction page with name of account and id-->\n    <ion-item *ngFor="let a of accounts let i=index">\n      <div *ngIf="i<4" float-left (click)="listSingleAccTrans(a.accountId)">{{a.subtype}}</div>\n      <div *ngIf="i<4" float-right>${{a.balance}}</div>\n    </ion-item>\n  </ion-card>\n\n  <!--List of recent transactions-->\n  <ion-card id="transactions" style="padding-top:10px;" class="bumpbox">\n    <ion-card-title>\n      Last Transactions\n      <button id="read-all" ion-button icon-end small round float-right (click)="pushAllTransactions(transactions)">\n        Read All\n      </button>\n    </ion-card-title>\n\n    <ion-item style="color:#333;" *ngFor="let t of transactions | slice:0:3; let i=index">\n      <div *ngIf="i<4" float-left>{{t.name}}</div>\n      <div *ngIf="i<4" float-right>${{t.amount}}</div>\n    </ion-item>\n  </ion-card>\n\n  <!--Amount spent in 3 days-->\n<ion-card>\n  <div id="card">\n    <div><span style="font-size:16px; color:#fff; line-height:1.5em; font-weight: 400; font-family:\'Avenir\';">You have spent <br /><span style="font-size:30px; color:white;">${{amountSpent}}</span><br /> in the last 3 days</span></div>\n  </div>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/accounts/accounts.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_test_service_test_service__["a" /* TestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_test_service_test_service__["a" /* TestServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], AccountsPage);

//# sourceMappingURL=accounts.js.map

/***/ })

});
//# sourceMappingURL=30.js.map