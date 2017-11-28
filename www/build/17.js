webpackJsonp([17],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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





var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, http, appSettings, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appSettings = appSettings;
        this.alertCtrl = alertCtrl;
        this.apiUrl = this.appSettings.getApiUrl();
        this.user = {};
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.user.email.match(/@/g)) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            this.http.post(this.apiUrl + 'register', JSON.stringify(this.user), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.success === true) {
                    _this.navCtrl.push('RegistersixPage');
                }
                else if (data.success === false) {
                    var alert = _this.alertCtrl.create({
                        title: 'Bad Request',
                        subTitle: 'Email already exists, please a different email',
                        buttons: ['Dismiss']
                    });
                    alert.present();
                }
            });
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Not A Valid Email',
                subTitle: 'Please Try Again',
                buttons: ['Dismiss']
            });
            alert.present();
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="toptool">\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="reg">\n  <div style="margin-top:280px;">\n  <form (ngSubmit)="register()">\n     <ion-item>\n       <ion-label style="font-size:25px!important; color:white;">Email</ion-label>\n    </ion-item>\n    <ion-item>\n       <ion-input type="text" [(ngModel)]="user.email" name="email"></ion-input>\n     </ion-item>\n     <ion-item>\n       <ion-label style="font-size:25px!important; color:white;">Password</ion-label>\n    </ion-item>\n     <ion-item>\n       <ion-input type="password" [(ngModel)]="user.password" name="password"></ion-input>\n     </ion-item>\n     <button class="btn big" style="margin-top:40px;" ion-button type="submit" block><span style="color:white;">Register</span></button>\n   </form>\n </div>\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <span style="color:white; font-size:14px;">By clicking Register, you agree to the:</span><br /><br />\n    <span style="color:white; font-size:14px;"><a href="#">Terms of Service</a></span><br /><br />\n    <span style="color:white; font-size:12px;">You will receive a confirmation code</span>\n  </ion-item>\n</ion-footer>\n'/*ion-inline-end:"/Users/deepdatta/Desktop/MVP-Mix/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__["a" /* AppSettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__["a" /* AppSettingsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object])
], RegisterPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=17.js.map