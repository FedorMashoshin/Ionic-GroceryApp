(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-list-details-buyer-list-details-module"],{

/***/ "5OT0":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buyer-list-details/buyer-list-details.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ product?.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<img [src]=\"product?.img\" alt=\"\">\n<h2>{{ product?.name }}</h2>\n<p>{{ product?.description }}</p>\n<p>{{ product?.price | currency: 'USD'}}</p>\n</ion-content>\n");

/***/ }),

/***/ "67uP":
/*!***********************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXllci1saXN0LWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "TVBx":
/*!*********************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: BuyerListDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPage", function() { return BuyerListDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buyer_list_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buyer-list-details.page.html */ "5OT0");
/* harmony import */ var _buyer_list_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buyer-list-details.page.scss */ "67uP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");






let BuyerListDetailsPage = class BuyerListDetailsPage {
    constructor(route, productService) {
        this.route = route;
        this.productService = productService;
        this.id = null;
        this.product = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.productService.getOneProduct(this.id).subscribe(res => {
            this.product = res;
        });
    }
};
BuyerListDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
BuyerListDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-buyer-list-details',
        template: _raw_loader_buyer_list_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buyer_list_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuyerListDetailsPage);



/***/ }),

/***/ "Xkd8":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BuyerListDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPageRoutingModule", function() { return BuyerListDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyer-list-details.page */ "TVBx");




const routes = [
    {
        path: '',
        component: _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_3__["BuyerListDetailsPage"]
    }
];
let BuyerListDetailsPageRoutingModule = class BuyerListDetailsPageRoutingModule {
};
BuyerListDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyerListDetailsPageRoutingModule);



/***/ }),

/***/ "s2pZ":
/*!***********************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: BuyerListDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPageModule", function() { return BuyerListDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buyer_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyer-list-details-routing.module */ "Xkd8");
/* harmony import */ var _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyer-list-details.page */ "TVBx");







let BuyerListDetailsPageModule = class BuyerListDetailsPageModule {
};
BuyerListDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buyer_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyerListDetailsPageRoutingModule"]
        ],
        declarations: [_buyer_list_details_page__WEBPACK_IMPORTED_MODULE_6__["BuyerListDetailsPage"]]
    })
], BuyerListDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-buyer-list-details-buyer-list-details-module-es2015.js.map