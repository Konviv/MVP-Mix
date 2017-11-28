webpackJsonp([41],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, appSettings, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appSettings = appSettings;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.apiUrl = this.appSettings.getApiUrl();
        this.token = String;
        this.user = {};
        this.user = this.user;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.events.publish('token:added', { stuff: 'stuff' });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        // this.navCtrl.setRoot('MenuPage')
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.apiUrl + 'login', JSON.stringify(this.user), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('>>>>>>>>>>>> ', data);
            // this.events.publish('token:added', data.token)
            if (data.login === 'yes') {
                _this.token = data.token;
                _this.navCtrl.setRoot('MenuPage');
            }
            else if (data.login === 'no') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Bad Request',
                    subTitle: 'Email or Password is incorrect, please try again',
                    buttons: ['Dismiss']
                });
                alert_1.present();
            }
        });
    };
    LoginPage.prototype.registerUser = function () {
        this.navCtrl.setRoot('RegisterOnePage');
    };
    LoginPage.prototype.tellMeMore = function () {
        this.navCtrl.push('TellonePage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/login/login.html"*/'<ion-header class="toptool">\n\n  <ion-navbar>\n    <ion-title>Log in</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item style="margin:50px 10px 10px 10px;">\n    <h1 style="color:#222; font-size:28px;"><span style="font-size:48px; font-family:\'Sounds Good\';">konviv</span><br /> financial empowerment for all</h1><br />\n<h3 style="width:350px;">We make managing your money as easy as talking to a friend.</h3>\n  </ion-item>\n\n    <form (ngSubmit)="doLogin()" style="margin-top:40px;">\n       <ion-item>\n         <ion-input placeholder="email" type="text" [(ngModel)]="user.email" name="email" style="border-bottom:1px solid #ddd;"></ion-input>\n       </ion-item>\n       <ion-item>\n         <ion-input placeholder="password" type="password" [(ngModel)]="user.password" name="password" style="border-bottom:1px solid #ddd;"></ion-input>\n       </ion-item>\n       <button style="margin-left:26px;" ion-button class="btn" small type="submit" block><span style="color:white;">Login</span></button>\n     </form>\n\n    <ion-item>\n      <button ion-button class="btn" small block (click)="registerUser()"><span style="color:white;">Create an Account</span></button>\n    </ion-item>\n    <ion-item>\n      <button ion-button class="btn" small block (click)="tellMeMore()"><span style="color:white;">Tell Me More!</span></button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__["a" /* AppSettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdjustBucketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdjustBucketPage = (function () {
    function AdjustBucketPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AdjustBucketPage.prototype.exitModal = function () {
        this.viewCtrl.dismiss();
    };
    return AdjustBucketPage;
}());
AdjustBucketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-adjust-bucket',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/adjust-bucket/adjust-bucket.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adjust Bucket Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Bucket name: </ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Bucket capacity: </ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label id="type">Bucket type: </ion-label>\n    <ion-select>\n      <ion-option>Main</ion-option>\n      <ion-option>Savings</ion-option>\n      <ion-option>Bills</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <button class="small btn" float-left ion-button (click)="exitModal()"><span style="color:white;">Save</span></button>\n    <button class="small btn" float-left ion-button (click)="exitModal()"><span style="color:white;">Cancel</span></button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/adjust-bucket/adjust-bucket.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], AdjustBucketPage);

//# sourceMappingURL=adjust-bucket.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferMoneyPage = (function () {
    function TransferMoneyPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.buckets = [];
        this.buckets = navParams.get('buckets');
    }
    TransferMoneyPage.prototype.exitModal = function () {
        this.viewCtrl.dismiss();
    };
    return TransferMoneyPage;
}());
TransferMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transfer-money',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/transfer-money/transfer-money.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transfer Money</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>From current bucket to:</ion-label>\n    <ion-select>\n      <ion-option *ngFor="let b of buckets">{{b.bucketname}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Amount to transfer: </ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <button class="small btn" float-left ion-button (click)="exitModal()"><span style="color:white;">Save</span></button>\n    <button class="small btn" float-left ion-button (click)="exitModal()"><span style="color:white;">Cancel</span></button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/transfer-money/transfer-money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], TransferMoneyPage);

//# sourceMappingURL=transfer-money.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-transactions/account-transactions.module": [
		279,
		40
	],
	"../pages/accounts/accounts.module": [
		280,
		30
	],
	"../pages/adjust-bucket/adjust-bucket.module": [
		281,
		39
	],
	"../pages/all-insights/all-insights.module": [
		282,
		38
	],
	"../pages/all-transactions/all-transactions.module": [
		283,
		37
	],
	"../pages/bills/bills.module": [
		284,
		29
	],
	"../pages/buckets/buckets.module": [
		285,
		36
	],
	"../pages/checking/checking.module": [
		286,
		35
	],
	"../pages/help/help.module": [
		288,
		28
	],
	"../pages/home/home.module": [
		287,
		27
	],
	"../pages/insights/insights.module": [
		289,
		26
	],
	"../pages/linkuseraccount/linkuseraccount.module": [
		290,
		25
	],
	"../pages/login/login.module": [
		291,
		34
	],
	"../pages/logout/logout.module": [
		292,
		24
	],
	"../pages/main/main.module": [
		294,
		23
	],
	"../pages/menu/menu.module": [
		293,
		22
	],
	"../pages/notifications/notifications.module": [
		295,
		21
	],
	"../pages/overview/overview.module": [
		296,
		20
	],
	"../pages/profile/profile.module": [
		297,
		19
	],
	"../pages/register-one/register-one.module": [
		298,
		18
	],
	"../pages/register/register.module": [
		299,
		17
	],
	"../pages/registerfive/registerfive.module": [
		300,
		16
	],
	"../pages/registerfour/registerfour.module": [
		302,
		15
	],
	"../pages/registerseven/registerseven.module": [
		301,
		14
	],
	"../pages/registersix/registersix.module": [
		303,
		13
	],
	"../pages/registerthree/registerthree.module": [
		304,
		12
	],
	"../pages/registertwo/registertwo.module": [
		305,
		11
	],
	"../pages/savings-bucket/savings-bucket.module": [
		306,
		10
	],
	"../pages/savings/savings.module": [
		307,
		33
	],
	"../pages/settings/settings.module": [
		308,
		9
	],
	"../pages/signup/signup.module": [
		309,
		8
	],
	"../pages/spend-tracker/spend-tracker.module": [
		310,
		7
	],
	"../pages/tabs/tabs.module": [
		311,
		6
	],
	"../pages/tellfour/tellfour.module": [
		312,
		5
	],
	"../pages/tellone/tellone.module": [
		313,
		4
	],
	"../pages/tellthree/tellthree.module": [
		314,
		3
	],
	"../pages/telltwo/telltwo.module": [
		315,
		2
	],
	"../pages/transactions/transactions.module": [
		316,
		1
	],
	"../pages/transfer-money/transfer-money.module": [
		317,
		32
	],
	"../pages/tutorial/tutorial.module": [
		318,
		0
	],
	"../pages/update-account/update-account.module": [
		319,
		31
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareServiceProvider = (function () {
    function ShareServiceProvider() {
        this.lowBucketTrigger = false;
        this.incomeTrigger = false;
        this.billDueTrigger = false;
        this.billPaidTrigger = false;
    }
    ShareServiceProvider.prototype.setLowBucketTrigger = function (trigger) {
        this.lowBucketTrigger = trigger;
    };
    ShareServiceProvider.prototype.getLowBucketTrigger = function () {
        return this.lowBucketTrigger;
    };
    ShareServiceProvider.prototype.setIncomeTrigger = function (trigger) {
        this.incomeTrigger = trigger;
    };
    ShareServiceProvider.prototype.getIncomeTrigger = function () {
        return this.incomeTrigger;
    };
    ShareServiceProvider.prototype.setBillDueTrigger = function (trigger) {
        this.billDueTrigger = trigger;
    };
    ShareServiceProvider.prototype.getBillDueTrigger = function () {
        return this.billDueTrigger;
    };
    ShareServiceProvider.prototype.setBillPaidTrigger = function (trigger) {
        this.billPaidTrigger = trigger;
    };
    ShareServiceProvider.prototype.getBillPaidTrigger = function () {
        return this.billPaidTrigger;
    };
    return ShareServiceProvider;
}());
ShareServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShareServiceProvider);

//# sourceMappingURL=share-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountTransactionsPage; });
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



/**
 * Generated class for the AccountTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountTransactionsPage = (function () {
    function AccountTransactionsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.accTransactions = [];
        this.accId = this.navParams.get('id');
    }
    AccountTransactionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3001/transactions', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.accTransactions = data.transactions.filter(function (data) {
                console.log('------------- ', data);
                if (data.account_id === _this.accId) {
                    return {
                        amount: data.amount,
                        name: data.name
                    };
                }
            });
            console.log('>>>>>>>>>>>>>>> ', _this.accTransactions);
        });
    };
    return AccountTransactionsPage;
}());
AccountTransactionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-transactions',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/account-transactions/account-transactions.html"*/'<!--\n  Generated template for the AccountTransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button float-left clear></button>\n\n    <ion-title>AccountTransactions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-title>\n      All Transactions\n    </ion-card-title>\n\n    <ion-item *ngFor="let a of accTransactions let i=index">\n      <div *ngIf="i<4" float-left>{{a.name}}</div>\n      <div *ngIf="i<4" float-right>${{a.amount}}</div>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/account-transactions/account-transactions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], AccountTransactionsPage);

//# sourceMappingURL=account-transactions.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllInsightsPage; });
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



var AllInsightsPage = (function () {
    function AllInsightsPage(navCtrl, navParams, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.amount = 0;
        this.numTransactions = 0;
        this.monthlySpending = 0;
        this.previousMonthlySpending = 0;
        this.weeklyAvg = 0;
        this.allTransactions = [];
        // Get current month
        var currentDate = new Date();
        var currentMonth = currentDate.getUTCMonth();
        var currentYear = currentDate.getUTCFullYear();
        this.getInsights(currentMonth, currentYear);
    }
    AllInsightsPage.prototype.getInsights = function (currentMonth, currentYear) {
        var _this = this;
        this.testService.getTransactions()
            .subscribe(function (data) {
            var category = "Food and Drink";
            _this.allTransactions = data.result.map(function (data) {
                return {
                    name: data.name,
                    amount: data.amount,
                    category: data.category,
                    date: data.date
                };
            });
            _this.allTransactions.forEach(function (i) {
                // Get month of transaction
                var date = new Date(i.date);
                var month = date.getUTCMonth();
                var prevMonth = month - 1; // Get previous month
                // Get amounts spent this month and previous month
                if (currentMonth == month) {
                    _this.monthlySpending += i.amount;
                }
                if (currentMonth - 1 == prevMonth) {
                    _this.previousMonthlySpending += i.amount;
                }
            });
            // Get all transaction of given category
            _this.allTransactions = _this.allTransactions.filter(function (i) {
                return (i.category == category);
            });
            _this.location = _this.allTransactions[1].name; // Get name of location
            _this.allTransactions.forEach(function (i) {
                var monthSpend = 0;
                // Get month of transaction
                var date = new Date(i.date);
                var month = date.getUTCMonth();
                // Get amount spent this month
                if (currentMonth == month) {
                    monthSpend += i.amount;
                }
                _this.weeklyAvg = monthSpend / 4; // Get weekly average spent on food
                if (i.name == _this.location && i.amount != null) {
                    _this.amount += i.amount;
                    _this.numTransactions++;
                }
            });
        });
    };
    return AllInsightsPage;
}());
AllInsightsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-all-insights',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/all-insights/all-insights.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button float-left style="opacity:0;"></button>\n\n    <ion-title>Past Insights</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item class="past" text-wrap>This month you’ve made {{numTransactions}} transactions at {{location}}, spending a total of ${{amount}}</ion-item>\n\n  <ion-item class="past" text-wrap>Last month you spent ${{previousMonthlySpending}}. So far this month, you have spent ${{monthlySpending}}</ion-item>\n\n  <ion-item class="past" text-wrap>This week, you spent an average of ${{weeklyAvg}} for "Eating Out".</ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/all-insights/all-insights.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], AllInsightsPage);

//# sourceMappingURL=all-insights.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adjust_bucket_adjust_bucket__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfer_money_transfer_money__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_test_service_test_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BucketsPage = (function () {
    function BucketsPage(navCtrl, navParams, modalCtrl, viewCtrl, actionSheetCtrl, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.testService = testService;
        this.listOfBuckets = [];
        this.allTransactions = [];
        this.bucketTransactions = [];
        this.bucket = navParams.get("bucket");
        this.bucketArray = navParams.get("bucketArray");
        this.getTransactions(this.bucket);
        // Make sure bucketArray is not altered by copying buckets into another array
        for (var i = 0; i < this.bucketArray.length; i++) {
            this.listOfBuckets[i] = this.bucketArray[i];
        }
        // Get index of the current bucket
        var currentBucketIndex = this.listOfBuckets.indexOf(this.bucket);
        // Make sure item was found before removing
        if (currentBucketIndex > -1) {
            this.listOfBuckets.splice(currentBucketIndex, 1); // Removes one item
        }
    }
    BucketsPage.prototype.getTransactions = function (bucket) {
        var _this = this;
        this.testService.getTransactions()
            .subscribe(function (data) {
            _this.bucketTransactions = data.result.map(function (data) {
                var d = new Date(data.date);
                return {
                    name: data.name,
                    amount: data.amount,
                    date: d.toLocaleDateString()
                };
            });
        });
    };
    // Create modal for adjust bucket page
    BucketsPage.prototype.pushAdjustBucketPage = function () {
        var adjustBucketModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__adjust_bucket_adjust_bucket__["a" /* AdjustBucketPage */]);
        adjustBucketModal.present();
    };
    // Create modal for transfer money page
    BucketsPage.prototype.pushTransferMoneyPage = function () {
        var transferMoneyModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__transfer_money_transfer_money__["a" /* TransferMoneyPage */], { buckets: this.listOfBuckets });
        transferMoneyModal.present();
    };
    // Open action sheet to move transaction to another bucket
    BucketsPage.prototype.openMoveTransaction = function (t) {
        var date = new Date(t.date);
        var month = date.getMonth();
        var day = date.getDate();
        var moveTxnSheet = this.actionSheetCtrl.create({
            title: month + "/" + day + " " + t.name + " $" + t.amount,
            subTitle: "Move transaction to:",
            buttons: [
                {
                    text: this.listOfBuckets[0].bucketname
                },
                {
                    text: this.listOfBuckets[1].bucketname
                },
                {
                    text: this.listOfBuckets[2].bucketname
                },
                {
                    text: this.listOfBuckets[3].bucketname
                },
                {
                    text: "Cancel",
                    role: "cancel"
                }
            ]
        });
        moveTxnSheet.present();
    };
    // Close modal
    BucketsPage.prototype.exitModal = function () {
        this.viewCtrl.dismiss();
    };
    return BucketsPage;
}());
BucketsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buckets',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/buckets/buckets.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button clear float-left (click)="exitModal()"><span style="margin-top:10px;"><ion-icon\n      name="md-arrow-back"></ion-icon></span></button>\n    <ion-title mode="ios">{{bucket.bucketname}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item style="margin-top:20px;" float-center>\n\n    <!--Display bucket-->\n    <!--Green buckets-->\n    <div class="circle4" float-center *ngIf="(bucket.bucketfill / bucket.bucketsize) * 100 >= 100">\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00CD00; height:100%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle4" float-center *ngIf="(bucket.bucketfill / bucket.bucketsize) * 100 < 100 && (bucket.bucketfill / bucket.bucketsize) * 100 >= 75">\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00CD00; height:80%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <!--Blue buckets-->\n    <div class="circle4" float-center *ngIf="(bucket.bucketfill / bucket.bucketsize) * 100 < 75 && (bucket.bucketfill / bucket.bucketsize) * 100 > 50">\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00CCCC; height:65%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle4" float-center *ngIf="(bucket.bucketfill / bucket.bucketsize) * 100 == 50">\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#00CCCC; height:50%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <!--Yellow Bucket-->\n    <div class="circle4" float-center *ngIf="(bucket.bucketfill / bucket.bucketsize) * 100 < 50 && (bucket.bucketfill / bucket.bucketsize) * 100 >= 25">\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#FFFF00; height:35%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <!--Pink buckets-->\n    <div class="circle4" float-center *ngIf="(bucket.bucketfill / bucket.bucketsize) * 100 < 25 && (bucket.bucketfill / bucket.bucketsize) * 100 > 0">\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#FF3DC1; height:15%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <div class="circle4" float-center *ngIf="(bucket.bucketfill / bucket.bucketsize) * 100 <= 0">\n      <span\n        style="position:absolute; bottom:0; left:0; width:100%; background:#FF3DC1; height:0%; transition:height 600ms; z-index:1;"></span>\n    </div>\n\n    <!--Bucket details-->\n    <div style="margin-top:200px;">\n      <div><p style="color:#AAA;">Amount in Bucket: ${{bucket.bucketfill}}</div>\n      <div>Total Bucket Capacity: ${{bucket.bucketsize}}</div>\n    </div>\n  </ion-item>\n\n  <!--Buttons to edit bucket-->\n  <button style="margin-left:40px;" class="btn" ion-button (click)="pushAdjustBucketPage()"><span\n    style="color:white; padding:10px 30px;">Adjust bucket</span></button>\n\n  <button style="margin:20px 0px" class="btn" ion-button (click)="pushTransferMoneyPage()"><span\n    style="color:white; padding:10px 30px;">Transfer Money</span></button>\n\n  <!--List of transactions for bucket-->\n  <ion-card id="innerbox">\n    <h1 style="text-align:center; font-size:12px; padding:10px 0px; border-bottom:1px solid #eee; color:#999;">Transaction History</h1>\n\n    <ion-item *ngFor="let t of bucketTransactions | slice:0:6" (click)="openMoveTransaction(t)" class="item">\n      <ion-row>\n        <ion-col text-left>{{t.date}}</ion-col>\n        <ion-col>{{t.name}}</ion-col>\n        <ion-col text-right class="number">${{t.amount}}</ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/buckets/buckets.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], BucketsPage);

//# sourceMappingURL=buckets.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionsPage; });
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



var AllTransactionsPage = (function () {
    function AllTransactionsPage(navCtrl, navParams, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.transactions = []; // Empty array for account info
        this.listAccounts();
    }
    AllTransactionsPage.prototype.listAccounts = function () {
        var _this = this;
        this.testService.getList()
            .subscribe(function (data) { return _this.transactions = data; }, function (error) { return alert(error); }, function () { return console.log('finished list' + _this.transactions); });
    };
    return AllTransactionsPage;
}());
AllTransactionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-all-transactions',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/all-transactions/all-transactions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button float-left clear></button>\n\n    <ion-title>All Transactions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let t of transactions">\n      <div float-left>{{t.name}}</div>\n      <div float-right>${{t.amount}}</div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/all-transactions/all-transactions.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], AllTransactionsPage);

//# sourceMappingURL=all-transactions.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckingPage; });
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



var CheckingPage = (function () {
    function CheckingPage(navCtrl, navParams, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.showMore = false;
        this.transactions = []; // Empty array for account info
        this.listAccounts();
    }
    CheckingPage.prototype.listAccounts = function () {
        var _this = this;
        this.testService.getList()
            .subscribe(function (data) { return _this.transactions = data; }, function (error) { return alert(error); }, function () { return console.log('finished list' + _this.transactions); });
    };
    // Toggle SHOW MORE
    CheckingPage.prototype.toggleShowMore = function () {
        this.showMore = !this.showMore;
    };
    return CheckingPage;
}());
CheckingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checking',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/checking/checking.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!--Available balance-->\n  <ion-card>\n    <ion-card-header>\n      Available balance $1204.35\n    </ion-card-header>\n  </ion-card>\n\n  <!--List of transactions-->\n  <ion-card>\n    <ion-card-header>\n      Transactions\n      <button ion-button>Most Recent</button>\n      <button ion-button (click)="toggleShowMore()">Show more</button>\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item *ngFor="let t of transactions">\n        <div float-left>{{t.name}}</div>\n        <div float-right>{{t.amount}}</div>\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/checking/checking.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], CheckingPage);

//# sourceMappingURL=checking.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavingsPage; });
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



var SavingsPage = (function () {
    function SavingsPage(navCtrl, navParams, testService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testService = testService;
        this.showMore = false;
        this.transactions = []; // Empty array for account info
        this.listAccounts();
    }
    SavingsPage.prototype.listAccounts = function () {
        var _this = this;
        this.testService.getList()
            .subscribe(function (data) { return _this.transactions = data; }, function (error) { return alert(error); }, function () { return console.log('finished list' + _this.transactions); });
    };
    // Toggle SHOW MORE
    SavingsPage.prototype.toggleShowMore = function () {
        this.showMore = !this.showMore;
    };
    return SavingsPage;
}());
SavingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-savings',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/savings/savings.html"*/'<ion-content padding>\n\n  <!--Available balance-->\n  <ion-card>\n    <ion-card-header>\n      Available balance $203.44\n    </ion-card-header>\n  </ion-card>\n\n  <!--List of transactions-->\n  <ion-card>\n    <ion-card-header>\n      Transactions\n      <button ion-button>Most Recent</button>\n      <button ion-button (click)="toggleShowMore()">Show more</button>\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item *ngFor="let t of transactions">\n        <div float-left>{{t.name}}</div>\n        <div float-right>{{t.amount}}</div>\n      </ion-item>\n    </ion-list>\n\n    <!--<ion-list>-->\n\n      <!--<ion-card>-->\n        <!--<div>In-n-Out</div>-->\n        <!--<div>$10.99</div>-->\n        <!--<div>2017-03-02</div>-->\n      <!--</ion-card>-->\n\n      <!--<ion-card>-->\n        <!--<div>Round Table Pizza</div>-->\n        <!--<div>$30.32</div>-->\n        <!--<div>2017-02-28</div>-->\n      <!--</ion-card>-->\n\n      <!--<ion-card *ngIf="showMore">-->\n        <!--<div>Asian Express</div>-->\n        <!--<div>$8.83</div>-->\n        <!--<div>2017-02-15</div>-->\n      <!--</ion-card>-->\n\n      <!--<ion-card *ngIf="showMore">-->\n        <!--<div>Jamba Juice</div>-->\n        <!--<div>$6.99</div>-->\n        <!--<div>2017-02-08</div>-->\n      <!--</ion-card>-->\n\n    <!--</ion-list>-->\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/savings/savings.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_test_service_test_service__["a" /* TestServiceProvider */]])
], SavingsPage);

//# sourceMappingURL=savings.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateAccountPage = (function () {
    function UpdateAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return UpdateAccountPage;
}());
UpdateAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-update-account',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/update-account/update-account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Bank Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block>Add account</button>\n  <button ion-button color="danger" block>Delete account</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/update-account/update-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], UpdateAccountPage);

//# sourceMappingURL=update-account.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_adjust_bucket_adjust_bucket__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_all_insights_all_insights__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_all_transactions_all_transactions__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_buckets_buckets__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_checking_checking__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_savings_savings__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_transfer_money_transfer_money__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_update_account_update_account__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_transactions_account_transactions__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_app_settings_app_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_test_service_test_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_share_service_share_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_adjust_bucket_adjust_bucket__["a" /* AdjustBucketPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_all_insights_all_insights__["a" /* AllInsightsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_all_transactions_all_transactions__["a" /* AllTransactionsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_buckets_buckets__["a" /* BucketsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_checking_checking__["a" /* CheckingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_savings_savings__["a" /* SavingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_transfer_money_transfer_money__["a" /* TransferMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_update_account_update_account__["a" /* UpdateAccountPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_account_transactions_account_transactions__["a" /* AccountTransactionsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                platforms: {
                    windows: {
                        tabsPlacement: 'bottom',
                    }
                }
            }, {
                links: [
                    { loadChildren: '../pages/account-transactions/account-transactions.module#AccountTransactionsPageModule', name: 'AccountTransactionsPage', segment: 'account-transactions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/adjust-bucket/adjust-bucket.module#AdjustBucketPageModule', name: 'AdjustBucketPage', segment: 'adjust-bucket', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/all-insights/all-insights.module#AllInsightsPageModule', name: 'AllInsightsPage', segment: 'all-insights', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/all-transactions/all-transactions.module#AllTransactionsPageModule', name: 'AllTransactionsPage', segment: 'all-transactions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bills/bills.module#BillsPageModule', name: 'BillsPage', segment: 'bills', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buckets/buckets.module#BucketsPageModule', name: 'BucketsPage', segment: 'buckets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checking/checking.module#CheckingPageModule', name: 'CheckingPage', segment: 'checking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/insights/insights.module#InsightsPageModule', name: 'InsightsPage', segment: 'insights', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/linkuseraccount/linkuseraccount.module#LinkuseraccountPageModule', name: 'LinkuseraccountPage', segment: 'linkuseraccount', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/overview/overview.module#OverviewPageModule', name: 'OverviewPage', segment: 'overview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register-one/register-one.module#RegisterOnePageModule', name: 'RegisterOnePage', segment: 'register-one', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registerfive/registerfive.module#RegisterfivePageModule', name: 'RegisterfivePage', segment: 'registerfive', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registerseven/registerseven.module#RegistersevenPageModule', name: 'RegistersevenPage', segment: 'registerseven', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registerfour/registerfour.module#RegisterfourPageModule', name: 'RegisterfourPage', segment: 'registerfour', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registersix/registersix.module#RegistersixPageModule', name: 'RegistersixPage', segment: 'registersix', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registerthree/registerthree.module#RegisterthreePageModule', name: 'RegisterthreePage', segment: 'registerthree', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registertwo/registertwo.module#RegistertwoPageModule', name: 'RegistertwoPage', segment: 'registertwo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/savings-bucket/savings-bucket.module#SavingsBucketPageModule', name: 'SavingsBucketPage', segment: 'savings-bucket', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/savings/savings.module#SavingsPageModule', name: 'SavingsPage', segment: 'savings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/spend-tracker/spend-tracker.module#SpendTrackerPageModule', name: 'SpendTrackerPage', segment: 'spend-tracker', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tellfour/tellfour.module#TellfourPageModule', name: 'TellfourPage', segment: 'tellfour', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tellone/tellone.module#TellonePageModule', name: 'TellonePage', segment: 'tellone', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tellthree/tellthree.module#TellthreePageModule', name: 'TellthreePage', segment: 'tellthree', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/telltwo/telltwo.module#TelltwoPageModule', name: 'TelltwoPage', segment: 'telltwo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transfer-money/transfer-money.module#TransferMoneyPageModule', name: 'TransferMoneyPage', segment: 'transfer-money', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/update-account/update-account.module#UpdateAccountPageModule', name: 'UpdateAccountPage', segment: 'update-account', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_adjust_bucket_adjust_bucket__["a" /* AdjustBucketPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_all_insights_all_insights__["a" /* AllInsightsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_all_transactions_all_transactions__["a" /* AllTransactionsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_buckets_buckets__["a" /* BucketsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_checking_checking__["a" /* CheckingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_savings_savings__["a" /* SavingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_transfer_money_transfer_money__["a" /* TransferMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_update_account_update_account__["a" /* UpdateAccountPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_account_transactions_account_transactions__["a" /* AccountTransactionsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_app_settings_app_settings__["a" /* AppSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_test_service_test_service__["a" /* TestServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_20__providers_share_service_share_service__["a" /* ShareServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]; // FOR TESTING
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/app/app.html"*/'<!-- <ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Konviv</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_settings_app_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { user } from '../../pages/login/login';


var TestServiceProvider = (function () {
    function TestServiceProvider(http, appSettings, events) {
        this.http = http;
        this.appSettings = appSettings;
        this.events = events;
        this.acc = [];
        this.apiUrl = this.appSettings.getApiUrl();
        this.getAccounts();
        this.getTransactions();
        this.getList();
        // this.loginUser();
    }
    // loginUser() {
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //
    //   return this.http.post( this.apiUrl + 'login', JSON.stringify(this.user), {headers:headers})
    //     .map(res => res.json())
    //     // .subscribe(data => {
    //     //   if(data.login === 'yes') {
    //     //     this.token = data.token;
    //     //     return this.navCtrl.setRoot('MenuPage')
    //     //   }
    //     //   else {
    //     //     console.log('Bad login cridentials');
    //     //   }
    //     // })
    // }
    TestServiceProvider.prototype.ionViewDidLoad = function () {
        this.events.subscribe('token:added', function (data) {
            console.log('>>>>>>>>>>>>>>>>> token added is ', data);
        });
    };
    TestServiceProvider.prototype.getAccounts = function () {
        return this.http.get(this.apiUrl + 'accounts')
            .map(function (response) { return response.json(); });
    };
    TestServiceProvider.prototype.getTransactions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiUrl + 'transactions')
            .map(function (res) { return res.json(); });
    };
    TestServiceProvider.prototype.getList = function () {
        return this.http.get(this.apiUrl + 'list')
            .map(function (response) { return response.json().result; });
    };
    TestServiceProvider.prototype.getAccountById = function (id) {
        return this.http.get(this.apiUrl + 'account/:' + id)
            .map(function (response) { return response.json().result; });
    };
    // getList(){
    //   return this.http.get(this.apiUrl+'list')
    //     .map(response=> response.json().result);
    // }
    TestServiceProvider.prototype.getBuckets = function () {
        return this.http.get(this.apiUrl + 'buckets')
            .map(function (response) { return response.json().result; });
    };
    TestServiceProvider.prototype.getNotifications = function () {
        return this.http.get(this.apiUrl + 'notifications')
            .map(function (response) { return response.json().result; });
    };
    TestServiceProvider.prototype.postNotifications = function (notification) {
        // let body = JSON.stringify(notification);
        console.log("post in test service");
        return this.http.post(this.apiUrl + 'notifications', notification)
            .map(function (response) { return response.json().result; });
        // .subscribe(
        //   data => {
        //     console.log(data['_body']);
        //   },
        //   error => alert(error)
        // )
    };
    return TestServiceProvider;
}());
TestServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__app_settings_app_settings__["a" /* AppSettingsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
], TestServiceProvider);

//# sourceMappingURL=test-service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CONFIG = {
    apiURL: 'http://localhost:3001/'
};
var AppSettingsProvider = (function () {
    function AppSettingsProvider() {
        console.log('Hello AppSettingsProvider Provider');
    }
    AppSettingsProvider.prototype.getApiUrl = function () {
        return CONFIG.apiURL;
    };
    return AppSettingsProvider;
}());
AppSettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppSettingsProvider);

//# sourceMappingURL=app-settings.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map