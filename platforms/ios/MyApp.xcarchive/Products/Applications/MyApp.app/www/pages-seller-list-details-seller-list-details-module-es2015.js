(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-list-details-seller-list-details-module"],{

/***/ "2So8":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-list-details/seller-list-details.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"seller/list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"createProduct()\">\n    <div class=\"form__img--box\">\n      <img class=\"form__img--box-img form__img--box-img-create\" src=\"https://i.pinimg.com/originals/2d/b8/18/2db818297d1cac3289cf34537d988856.png\" alt=\"\">\n      <div class=\"form__img--box-label form__img--box-label-create\" (click)=\"selectImage()\">\n        Upload Picture\n      </div>\n    </div>\n    <div class=\"form__product--img\">\n      <img [src]=\"productImageBase64\" *ngIf=\"productImageBase64\" alt=\"Product Img\">\n      <!-- <ion-button class=\"form__buttons ion-margin-bottom\" type=\"button\" expand=\"block\" fill=\"outline\" (click)=\"selectImage()\">\n        Upload product image\n      </ion-button> -->\n    </div>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\"> Name </ion-label>\n      <ion-input formControlName=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\"> Price </ion-label>\n      <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\"> Description </ion-label>\n      <ion-textarea formControlName=\"description\" rows=\"6\"></ion-textarea>\n    </ion-item>\n\n    <ion-button [disabled]=\"!productForm.valid\" class=\"form__buttons\" expand=\"block\" type=\"submit\">Create Product</ion-button>\n\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "Agjh":
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form__product--img {\n  z-index: -2;\n  -webkit-clip-path: polygon(50% -3%, 100% 15%, 100% 100%, 0 100%, 0 15%);\n          clip-path: polygon(50% -3%, 100% 15%, 100% 100%, 0 100%, 0 15%);\n  margin-top: -3.5rem;\n  height: 200px;\n  background: #ffe6e3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.form__product--img ion-button {\n  margin-top: 0;\n}\n.form__product--img img {\n  margin-top: 4 0px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGxlci1saXN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHVFQUFBO1VBQUEsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic2VsbGVyLWxpc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV9fcHJvZHVjdC0taW1ne1xuICB6LWluZGV4OiAtMjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAtMyUsIDEwMCUgMTUlLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxNSUpO1xuICBtYXJnaW4tdG9wOiAtMy41cmVtO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZlNmUzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuIFxuICBpbWcge1xuICAgIG1hcmdpbi10b3A6IDQgMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLy8gaGVpZ2h0OiAyMDBweDtcbiAgICAvLyB3aWR0aDogYXV0bztcbiAgICAvLyBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59Il19 */");

/***/ }),

/***/ "WpXu":
/*!***********************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: SellerListDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListDetailsPage", function() { return SellerListDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_list_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-list-details.page.html */ "2So8");
/* harmony import */ var _seller_list_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-list-details.page.scss */ "Agjh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");








let SellerListDetailsPage = class SellerListDetailsPage {
    constructor(formBuilder, productService, navCtrl, camera) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.productImageBase64 = null;
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            img: ''
        });
    }
    createProduct() {
        this.productService.addProduct(this.productForm.value).then(res => {
            this.navCtrl.navigateBack('/seller/list');
        });
    }
    selectImage() {
        const options = {
            quality: 70,
            destinationType: 0,
            mediaType: 0,
            sourceType: 1,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(data => {
            console.log(data);
            this.productImageBase64 = 'data:image/jpeg;base64,' + data;
            this.productForm.patchValue({ img: data });
        }, (err) => {
            this.productImageBase64 = `https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg`;
            this.productForm.patchValue({ img: this.productImageBase64 });
            console.warn(this.productForm);
        });
    }
};
SellerListDetailsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
];
SellerListDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-list-details',
        template: _raw_loader_seller_list_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_list_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerListDetailsPage);



/***/ }),

/***/ "tnXD":
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: SellerListDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListDetailsPageModule", function() { return SellerListDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-list-details-routing.module */ "zyBD");
/* harmony import */ var _seller_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-list-details.page */ "WpXu");







let SellerListDetailsPageModule = class SellerListDetailsPageModule {
};
SellerListDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerListDetailsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_seller_list_details_page__WEBPACK_IMPORTED_MODULE_6__["SellerListDetailsPage"]]
    })
], SellerListDetailsPageModule);



/***/ }),

/***/ "zyBD":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SellerListDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListDetailsPageRoutingModule", function() { return SellerListDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_list_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-list-details.page */ "WpXu");




const routes = [
    {
        path: '',
        component: _seller_list_details_page__WEBPACK_IMPORTED_MODULE_3__["SellerListDetailsPage"]
    }
];
let SellerListDetailsPageRoutingModule = class SellerListDetailsPageRoutingModule {
};
SellerListDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerListDetailsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-seller-list-details-seller-list-details-module-es2015.js.map