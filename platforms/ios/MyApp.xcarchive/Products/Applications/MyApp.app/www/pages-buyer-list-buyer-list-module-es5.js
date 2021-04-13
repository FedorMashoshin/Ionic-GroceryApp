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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Buy products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
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

      var BuyerListPage = /*#__PURE__*/function () {
        function BuyerListPage(authService) {
          _classCallCheck(this, BuyerListPage);

          this.authService = authService;
        }

        _createClass(BuyerListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXllci1saXN0LnBhZ2Uuc2NzcyJ9 */";
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