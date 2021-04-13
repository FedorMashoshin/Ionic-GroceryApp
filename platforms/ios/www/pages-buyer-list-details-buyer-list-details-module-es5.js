(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-list-details-buyer-list-details-module"], {
    /***/
    "5OT0":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer-list-details/buyer-list-details.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OT0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>buyerListDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "67uP":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/buyer-list-details/buyer-list-details.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function uP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXllci1saXN0LWRldGFpbHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "TVBx":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/buyer-list-details/buyer-list-details.page.ts ***!
      \*********************************************************************/

    /*! exports provided: BuyerListDetailsPage */

    /***/
    function TVBx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPage", function () {
        return BuyerListDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buyer_list_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buyer-list-details.page.html */
      "5OT0");
      /* harmony import */


      var _buyer_list_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buyer-list-details.page.scss */
      "67uP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BuyerListDetailsPage = /*#__PURE__*/function () {
        function BuyerListDetailsPage() {
          _classCallCheck(this, BuyerListDetailsPage);
        }

        _createClass(BuyerListDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BuyerListDetailsPage;
      }();

      BuyerListDetailsPage.ctorParameters = function () {
        return [];
      };

      BuyerListDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buyer-list-details',
        template: _raw_loader_buyer_list_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buyer_list_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BuyerListDetailsPage);
      /***/
    },

    /***/
    "Xkd8":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/buyer-list-details/buyer-list-details-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: BuyerListDetailsPageRoutingModule */

    /***/
    function Xkd8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPageRoutingModule", function () {
        return BuyerListDetailsPageRoutingModule;
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


      var _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buyer-list-details.page */
      "TVBx");

      var routes = [{
        path: '',
        component: _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_3__["BuyerListDetailsPage"]
      }];

      var BuyerListDetailsPageRoutingModule = function BuyerListDetailsPageRoutingModule() {
        _classCallCheck(this, BuyerListDetailsPageRoutingModule);
      };

      BuyerListDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BuyerListDetailsPageRoutingModule);
      /***/
    },

    /***/
    "s2pZ":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/buyer-list-details/buyer-list-details.module.ts ***!
      \***********************************************************************/

    /*! exports provided: BuyerListDetailsPageModule */

    /***/
    function s2pZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPageModule", function () {
        return BuyerListDetailsPageModule;
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


      var _buyer_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buyer-list-details-routing.module */
      "Xkd8");
      /* harmony import */


      var _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buyer-list-details.page */
      "TVBx");

      var BuyerListDetailsPageModule = function BuyerListDetailsPageModule() {
        _classCallCheck(this, BuyerListDetailsPageModule);
      };

      BuyerListDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buyer_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyerListDetailsPageRoutingModule"]],
        declarations: [_buyer_list_details_page__WEBPACK_IMPORTED_MODULE_6__["BuyerListDetailsPage"]]
      })], BuyerListDetailsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-buyer-list-details-buyer-list-details-module-es5.js.map