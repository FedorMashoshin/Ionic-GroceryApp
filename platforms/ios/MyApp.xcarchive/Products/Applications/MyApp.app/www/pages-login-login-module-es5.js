(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "H+1c":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function H1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  padding: 0 2rem;\n}\n\n.login__flip--container {\n  perspective: 1000px;\n  width: 100%;\n  height: 500px;\n}\n\n.login__flip--container.flip .login__flip--flipper {\n  transform: rotateY(180deg);\n}\n\n.login__flip--container.flip .login__flip--flipper-front, .login__flip--container.flip .login__flip--flipper-back {\n  width: 100%;\n  height: 500px;\n}\n\n.login__flip--flipper {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n\n.login__flip--flipper-front, .login__flip--flipper-back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.login__flip--flipper-front {\n  z-index: 2;\n}\n\n.login__flip--flipper-back {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFFRTtFQUVBLDBCQUFBO0FBREY7O0FBRUU7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBR0k7RUFFRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUZOOztBQUlJO0VBQ0UsVUFBQTtBQUZOOztBQUlJO0VBQ0UsMEJBQUE7QUFGTiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuLy8gRkxJUCBDQVJEIEVGRkVDVFxuLmxvZ2luX19mbGlwe1xuICAmLS1jb250YWluZXIge1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICAmLS1jb250YWluZXIuZmxpcCBcbiAgJi0tZmxpcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAmLWZyb250LFxuICAmLWJhY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgfSBcbiAgJi0tZmxpcHBlciB7XG4gICAgdHJhbnNpdGlvbjogMC42cztcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmLWZyb250LFxuICAgICYtYmFjayB7XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmLWZyb250IHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgICYtYmFjayB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "TuYN":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TuYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"login__flip--container\" #flipcontainer>\n    <div class=\"login__flip--flipper\">\n      <div class=\"login__flip--flipper-front\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <div class=\"form__img--box\">\n            <img class=\"form__img--box-img\" src=\"https://cdn.gobankingrates.com/wp-content/uploads/2019/03/fresh-produce-in-grocery-bag-iStock-936387810.jpg\" alt=\"\">\n            <div class=\"form__img--box-label\">\n              Online Grocery\n            </div>\n          </div>\n          <h2 class=\"form__header\">Log In</h2>\n          <ion-item lines=\"full\">\n              <ion-label position=\"stacked\">\n                Email\n              </ion-label>\n              <ion-input type=\"email\" placeholder=\"youremail@email.com\" formControlName=\"email\">\n              </ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"stacked\">\n              Password\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n      \n         <div class=\"form__buttons\">\n          <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!loginForm.valid\">\n            Login\n          </ion-button>\n      \n          <div class=\"form__text\">\n            Don'have an account yet?\n          <ion-button expand=\"block\" type=\"button\" color=\"secondary\" fill=\"clear\" (click)=\"toggleRegister()\">\n            Register\n          </ion-button>\n          </div>\n         </div>\n        </form>\n      </div>\n      <div class=\"login__flip--flipper-back\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n          <div class=\"form__img--box\">\n            <img class=\"form__img--box-img\" src=\"https://cdn.gobankingrates.com/wp-content/uploads/2019/03/fresh-produce-in-grocery-bag-iStock-936387810.jpg\" alt=\"\">\n            <div class=\"form__img--box-label\">\n              Online Grocery\n            </div>\n          </div>\n          <h2 class=\"form__header\">Register new user</h2>\n          <ion-item lines=\"full\">\n              <ion-label position=\"stacked\">\n                Email\n              </ion-label>\n              <ion-input type=\"email\" placeholder=\"youremail@email.com\" formControlName=\"email\">\n              </ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"stacked\">\n              Name\n            </ion-label>\n            <ion-input placeholder=\"Your name\" formControlName=\"name\"></ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"stacked\">\n              Password\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"stacked\">User type</ion-label>\n            <ion-select formControlName=\"type\">\n                <ion-select-option value=\"BUYER\">Buyer</ion-select-option>\n                <ion-select-option value=\"SELLER\">Seller</ion-select-option>\n            </ion-select>\n          </ion-item>\n      \n         <div class=\"form__buttons\">\n          <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!registerForm.valid\">\n            Register\n          </ion-button>\n      \n          <div class=\"form__text\">\n            Already have an account?\n          <ion-button expand=\"block\" type=\"button\" color=\"secondary\" fill=\"clear\" (click)=\"toggleRegister()\">\n            Login\n          </ion-button>\n          </div>\n         </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "TuYN");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "H+1c");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(formBuilder, authService, loadingCtrl, toastCtrl, router) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.router = router;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)]],
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              type: ['BUYER', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.loginForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)]]
            });
          }
        }, {
          key: "navigateByType",
          value: function navigateByType(type) {
            if (type === 'BUYER') {
              this.router.navigateByUrl('/buyer');
            } else if (type === 'SELLER') {
              this.router.navigateByUrl('/seller');
            }
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        message: "Logging you in..."
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.signIn(this.loginForm.value).subscribe(function (user) {
                        loading.dismiss();

                        _this.loginForm.reset();

                        _this.navigateByType(user['type']);
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  _context.next = 4;
                                  return this.toastCtrl.create({
                                    position: 'top',
                                    color: 'danger',
                                    duration: 4000,
                                    message: err.message
                                  });

                                case 4:
                                  toast = _context.sent;
                                  toast.present();

                                case 6:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingCtrl.create({
                        message: "Creating your new account, ".concat(this.registerForm.value.name)
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.signUp(this.registerForm.value).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  _context3.next = 4;
                                  return this.registerForm.reset();

                                case 4:
                                  _context3.next = 6;
                                  return this.toastCtrl.create({
                                    position: 'top',
                                    color: 'success',
                                    duration: 3000,
                                    message: "Your account has been created!"
                                  });

                                case 6:
                                  toast = _context3.sent;
                                  toast.present();
                                  this.navigateByType(this.registerForm.value['type']);

                                case 9:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  _context4.next = 4;
                                  return this.toastCtrl.create({
                                    position: 'top',
                                    color: 'danger',
                                    duration: 4000,
                                    message: err.message
                                  });

                                case 4:
                                  toast = _context4.sent;
                                  toast.present();

                                case 6:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "toggleRegister",
          value: function toggleRegister() {
            this.flipcontainer.nativeElement.classList.toggle('flip');
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      LoginPage.propDecorators = {
        flipcontainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['flipcontainer']
        }]
      };
      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map