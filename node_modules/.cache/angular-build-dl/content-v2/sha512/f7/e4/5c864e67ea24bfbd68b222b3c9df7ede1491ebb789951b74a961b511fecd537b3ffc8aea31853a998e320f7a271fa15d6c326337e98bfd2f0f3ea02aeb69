(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-list-buyer-list-module"], {
    /***/
    "/vFS":
    /*!***************************************************************!*\
      !*** ./src/app/pages/buyer-list/buyer-list-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: BuyerListPageRoutingModule */

    /***/
    function vFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyerListPageRoutingModule", function () {
        return BuyerListPageRoutingModule;
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


      var _buyer_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buyer-list.page */
      "SB3h");

      var routes = [{
        path: '',
        component: _buyer_list_page__WEBPACK_IMPORTED_MODULE_3__["BuyerListPage"]
      }];

      var BuyerListPageRoutingModule = function BuyerListPageRoutingModule() {
        _classCallCheck(this, BuyerListPageRoutingModule);
      };

      BuyerListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BuyerListPageRoutingModule);
      /***/
    },

    /***/
    "27Tr":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer-list/buyer-list.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Buy products</ion-title>\n    <span>Hello {{ user?.name }}</span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"seller__card\" *ngFor=\"let product of products\" [routerLink]=\"[product.id]\">\n    <img class=\"seller__card--image\"*ngIf=\"product.data.img\" [src]=\"product.data.img\" alt=\"\">\n      <div class=\"seller__card--box\">\n        <div class=\"seller__card--box-left\">\n          <span class=\"seller__card--box-left-header\">{{ product.data.name | uppercase}}</span>\n          <span class=\"seller__card--box-left-price\">{{ product.data.price | currency:'USD'}}</span>\n        </div>\n    </div>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "SB3h":
    /*!*****************************************************!*\
      !*** ./src/app/pages/buyer-list/buyer-list.page.ts ***!
      \*****************************************************/

    /*! exports provided: BuyerListPage */

    /***/
    function SB3h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyerListPage", function () {
        return BuyerListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buyer_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buyer-list.page.html */
      "27Tr");
      /* harmony import */


      var _buyer_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buyer-list.page.scss */
      "dY9s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");

      var BuyerListPage = /*#__PURE__*/function () {
        function BuyerListPage(authService, productService) {
          _classCallCheck(this, BuyerListPage);

          this.authService = authService;
          this.productService = productService;
        }

        _createClass(BuyerListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.authService.user.subscribe(function (res) {
                        _this.user = res;
                      });
                      this.productService.getAllProducts().subscribe(function (res) {
                        _this.products = res;
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return this.authService.signOut();
          }
        }]);

        return BuyerListPage;
      }();

      BuyerListPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }];
      };

      BuyerListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buyer-list',
        template: _raw_loader_buyer_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buyer_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BuyerListPage);
      /***/
    },

    /***/
    "dY9s":
    /*!*******************************************************!*\
      !*** ./src/app/pages/buyer-list/buyer-list.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function dY9s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url(\"https://www.kolpaper.com/wp-content/uploads/2020/06/Iphone-Blueberries-Wallpaper.jpg\");\n}\n\n.seller__card {\n  background-color: #fff;\n  margin: 1rem;\n  border-radius: 10px;\n  height: 100px;\n  display: flex;\n}\n\n.seller__card--image {\n  padding: 0.5rem;\n  width: 25%;\n}\n\n.seller__card--box {\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n\n.seller__card--box-left {\n  display: flex;\n  flex-direction: column;\n}\n\n.seller__card--box-left-header {\n  font-size: 1.2rem;\n  margin-bottom: 0.4rem;\n}\n\n.seller__card--box-left-price {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1eWVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUdBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBR0o7O0FBRkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFJTjs7QUFITTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFLUjs7QUFITTtFQUNFLGlCQUFBO0FBS1IiLCJmaWxlIjoiYnV5ZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vd3d3LmtvbHBhcGVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNi9JcGhvbmUtQmx1ZWJlcnJpZXMtV2FsbHBhcGVyLmpwZycpO1xufVxuLnNlbGxlcl9fY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAmLS1pbWFnZXtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gICYtLWJveHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogNzUlO1xuICAgICYtbGVmdHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgJi1oZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gICAgICB9XG4gICAgICAmLXByaWNle1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "qLCV":
    /*!*******************************************************!*\
      !*** ./src/app/pages/buyer-list/buyer-list.module.ts ***!
      \*******************************************************/

    /*! exports provided: BuyerListPageModule */

    /***/
    function qLCV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyerListPageModule", function () {
        return BuyerListPageModule;
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


      var _buyer_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buyer-list-routing.module */
      "/vFS");
      /* harmony import */


      var _buyer_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buyer-list.page */
      "SB3h");

      var BuyerListPageModule = function BuyerListPageModule() {
        _classCallCheck(this, BuyerListPageModule);
      };

      BuyerListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buyer_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyerListPageRoutingModule"]],
        declarations: [_buyer_list_page__WEBPACK_IMPORTED_MODULE_6__["BuyerListPage"]]
      })], BuyerListPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-buyer-list-buyer-list-module-es5.js.map