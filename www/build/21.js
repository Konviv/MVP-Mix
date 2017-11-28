webpackJsonp([21],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = (function () {
    function NotificationsPageModule() {
    }
    return NotificationsPageModule;
}());
NotificationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
        ],
    })
], NotificationsPageModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(206);
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





var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, plt, localNotifications, alertCtrl, testService, events, shareService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.testService = testService;
        this.events = events;
        this.shareService = shareService;
        this.badgeCount = 0; // Number of new notifications to display in badge
        this.newNotifications = [];
        this.oldNotifications = [];
        this.allNotifications = [
            {
                title: "Buckets running low",
                text: "You have buckets that are below 15% capacity",
            },
            {
                title: "Income received",
                text: "Your income has come in",
            },
            {
                title: "Upcoming bill",
                text: "You have a bill that is due soon",
            },
            {
                title: "Bill paid",
                text: "You have paid off a bill",
            }
        ];
        this.getNotifications();
        this.plt.ready().then(function (readySource) {
            _this.localNotifications.on('schedule', function (notification, state) {
                var json = JSON.parse(notification.data);
                var alert = alertCtrl.create({
                    title: notification.title,
                    subTitle: json.message
                });
                alert.present();
            });
        });
        // Find out if trigger is true
        this.lowBucketTrigger = this.shareService.getLowBucketTrigger();
        this.incomeTrigger = this.shareService.getIncomeTrigger();
        this.billDueTrigger = this.shareService.getBillDueTrigger();
        this.billPaidTrigger = this.shareService.getBillPaidTrigger();
        // Create notifications if trigger is true
        if (this.lowBucketTrigger == true) {
            this.bucketsAreLowNotification();
        }
        if (this.incomeTrigger == true) {
            this.incomeReceivedNotification();
        }
        if (this.billDueTrigger == true) {
            this.upcomingBillNotification();
        }
        if (this.billPaidTrigger == true) {
            this.billPaidNotification();
        }
    }
    // API Calls ---------------------------------------------------------------------------------------------------------
    // Get past notifications to display
    NotificationsPage.prototype.getNotifications = function () {
        var _this = this;
        this.testService.getNotifications()
            .subscribe(function (data) { return _this.oldNotifications = data; }, function (error) { return alert(error); });
    };
    // Post notification to database after it has been clicked
    NotificationsPage.prototype.postNotifications = function (notification) {
        console.log(notification);
        this.testService.postNotifications({
            name: notification.text,
            date: new Date()
        }).subscribe();
        var index = this.newNotifications.indexOf(notification);
        if (index > -1) {
            this.newNotifications.splice(index, 1); // Remove from new notifications
        }
        this.decrementBadgeCount(); // Decrement badge count
    };
    // Notifications -----------------------------------------------------------------------------------------------------
    // Create notification for when buckets are below 15%
    NotificationsPage.prototype.bucketsAreLowNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: this.allNotifications[0].title,
            text: this.allNotifications[0].text,
            at: new Date()
        });
        this.newNotifications.push(this.allNotifications[0]); // Add new notification to array being displayed
        this.incrementBadgeCount();
    };
    // Create notification when income is received
    NotificationsPage.prototype.incomeReceivedNotification = function () {
        this.localNotifications.schedule({
            id: 2,
            title: this.allNotifications[1].title,
            text: this.allNotifications[1].text,
            at: new Date()
        });
        this.newNotifications.push(this.allNotifications[1]); // Add new notification to array being displayed
        this.incrementBadgeCount();
    };
    // Create notification when bill due date is coming up
    NotificationsPage.prototype.upcomingBillNotification = function () {
        this.localNotifications.schedule({
            id: 3,
            title: this.allNotifications[2].title,
            text: this.allNotifications[2].text,
            at: new Date()
        });
        this.newNotifications.push(this.allNotifications[2]); // Add new notification to array being displayed
        this.incrementBadgeCount();
    };
    // Create notification when a bill has been paid
    NotificationsPage.prototype.billPaidNotification = function () {
        this.localNotifications.schedule({
            id: 4,
            title: this.allNotifications[3].title,
            text: this.allNotifications[3].text,
            at: new Date()
        });
        this.newNotifications.push(this.allNotifications[3]); // Add new notification to array being displayed
        this.incrementBadgeCount();
    };
    // Badge count handlers ----------------------------------------------------------------------------------------------
    // Increment badge count for new notifications
    NotificationsPage.prototype.incrementBadgeCount = function () {
        this.events.publish('badge:updated', ++this.badgeCount);
    };
    // Decrement badge count for new notifications
    NotificationsPage.prototype.decrementBadgeCount = function () {
        // Make sure notifications are never negative
        if (this.badgeCount == 0) {
            this.events.publish('badge:updated', this.badgeCount = 0);
        }
        else {
            this.events.publish('badge:updated', --this.badgeCount);
        }
    };
    // Clear notification badge number and move notifications to old array
    NotificationsPage.prototype.resetBadgeCount = function () {
        this.events.publish('badge:updated', this.badgeCount = 0);
        for (var i = 0; i < this.newNotifications.length; i++) {
            this.oldNotifications.push(this.newNotifications[i]);
        }
        this.newNotifications.splice(0, this.newNotifications.length);
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/notifications/notifications.html"*/'<ion-header>\n\n  <ion-navbar id="nav">\n\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!--New notifications-->\n  <div>\n    <p class="smalltitle" id="top">\n      NEW\n      <ion-badge badge item-end>{{badgeCount}}</ion-badge>\n      <span class="smalltitle" style="border:0px!important; margin-left:200px;">Mark All Read</span>\n    </p>\n  </div>\n\n  <ion-card *ngFor="let n of newNotifications" style="border-bottom:1px solid #eee;">\n    <ion-card-title class="active" (click)="postNotifications(n)">{{n.text}}</ion-card-title>\n  </ion-card>\n\n  <!--Past notifications-->\n  <div>\n    <p class="smalltitle" id="bottom">PAST NOTIFICATIONS</p>\n  </div>\n\n  <ion-item class="old" *ngFor="let n of oldNotifications | slice:0:5" style="padding-top:10px;" class="bumpbox">\n    <ion-icon name="ios-arrow-dropright"></ion-icon>\n    {{n.name}}\n    <div>{{n.date}}</div>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_test_service_test_service__["a" /* TestServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=21.js.map