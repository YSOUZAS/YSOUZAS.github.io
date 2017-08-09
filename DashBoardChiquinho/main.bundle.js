webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-background-color=\"padrao\" data-active-color=\"white\">\n    <sidebar-cmp></sidebar-cmp>\n  </div>\n  <div class=\"main-panel\">\n    <navbar-cmp></navbar-cmp>\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n    <footer-cmp></footer-cmp>\n  </div>\n</div>\n\n<!--\n<fixedplugin-cmp></fixedplugin-cmp>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__ = __webpack_require__("../../../../../src/app/services/comanda/comanda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_notification_service__ = __webpack_require__("../../../../../src/app/services/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_products_products_create_products_create_component__ = __webpack_require__("../../../../../src/app/components/products/products-create/products-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_promotions_promotions_service__ = __webpack_require__("../../../../../src/app/services/promotions/promotions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_possibility_possibility_service__ = __webpack_require__("../../../../../src/app/services/possibility/possibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_category_list_service__ = __webpack_require__("../../../../../src/app/services/category/category-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_products_products_list_service__ = __webpack_require__("../../../../../src/app/services/products/products-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_products_products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_category_category_create_category_create_component__ = __webpack_require__("../../../../../src/app/components/category/category-create/category-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_category_category_list_category_list_component__ = __webpack_require__("../../../../../src/app/components/category/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_possibility_possibility_list_possibility_list_component__ = __webpack_require__("../../../../../src/app/components/possibility/possibility-list/possibility-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_possibility_possibility_create_possibility_create_component__ = __webpack_require__("../../../../../src/app/components/possibility/possibility-create/possibility-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_promotions_promotions_create_promotions_create_component__ = __webpack_require__("../../../../../src/app/components/promotions/promotions-create/promotions-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_promotions_promotions_list_promotions_list_component__ = __webpack_require__("../../../../../src/app/components/promotions/promotions-list/promotions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_trucante_pipe__ = __webpack_require__("../../../../../src/app/pipes/trucante.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_notifications_notitification_create_notitification_create_component__ = __webpack_require__("../../../../../src/app/components/notifications/notitification-create/notitification-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_comanda_comanda_list_comanda_list_component__ = __webpack_require__("../../../../../src/app/components/comanda/comanda-list/comanda-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_comanda_comanda_comanda_component__ = __webpack_require__("../../../../../src/app/components/comanda/comanda/comanda.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_20__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_21__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__upgrade_upgrade_component__["a" /* UpgradeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_products_products_list_products_list_component__["a" /* ProductsListComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_category_category_create_category_create_component__["a" /* CategoryCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_category_category_list_category_list_component__["a" /* CategoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_possibility_possibility_list_possibility_list_component__["a" /* PossibilityListComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_possibility_possibility_create_possibility_create_component__["a" /* PossibilityCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_promotions_promotions_create_promotions_create_component__["a" /* PromotionsCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_promotions_promotions_list_promotions_list_component__["a" /* PromotionsListComponent */],
            __WEBPACK_IMPORTED_MODULE_38__pipes_trucante_pipe__["a" /* TrucantePipe */],
            __WEBPACK_IMPORTED_MODULE_2__components_products_products_create_products_create_component__["a" /* ProductsCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_notifications_notitification_create_notitification_create_component__["a" /* NotitificationCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_comanda_comanda_list_comanda_list_component__["a" /* ComandaListComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_comanda_comanda_comanda_component__["a" /* ComandaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_13__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_15__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_26__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_27__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY' })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_products_products_list_service__["a" /* ProductsListService */], __WEBPACK_IMPORTED_MODULE_5__services_category_category_list_service__["a" /* CategoryListService */], __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__["a" /* ComandaService */],
            __WEBPACK_IMPORTED_MODULE_4__services_possibility_possibility_service__["a" /* PossibilityService */], __WEBPACK_IMPORTED_MODULE_3__services_promotions_promotions_service__["a" /* PromotionsService */], __WEBPACK_IMPORTED_MODULE_38__pipes_trucante_pipe__["a" /* TrucantePipe */], __WEBPACK_IMPORTED_MODULE_1__services_notification_notification_service__["a" /* NotificationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_comanda_comanda_comanda_component__ = __webpack_require__("../../../../../src/app/components/comanda/comanda/comanda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_comanda_comanda_list_comanda_list_component__ = __webpack_require__("../../../../../src/app/components/comanda/comanda-list/comanda-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_notifications_notitification_create_notitification_create_component__ = __webpack_require__("../../../../../src/app/components/notifications/notitification-create/notitification-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_promotions_promotions_list_promotions_list_component__ = __webpack_require__("../../../../../src/app/components/promotions/promotions-list/promotions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_promotions_promotions_create_promotions_create_component__ = __webpack_require__("../../../../../src/app/components/promotions/promotions-create/promotions-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_possibility_possibility_create_possibility_create_component__ = __webpack_require__("../../../../../src/app/components/possibility/possibility-create/possibility-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_possibility_possibility_list_possibility_list_component__ = __webpack_require__("../../../../../src/app/components/possibility/possibility-list/possibility-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_category_category_create_category_create_component__ = __webpack_require__("../../../../../src/app/components/category/category-create/category-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_category_category_list_category_list_component__ = __webpack_require__("../../../../../src/app/components/category/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_products_products_create_products_create_component__ = __webpack_require__("../../../../../src/app/components/products/products-create/products-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_products_products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });



















var AppRoutes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_10__components_products_products_list_products_list_component__["a" /* ProductsListComponent */]
    },
    {
        path: 'products-create',
        component: __WEBPACK_IMPORTED_MODULE_9__components_products_products_create_products_create_component__["a" /* ProductsCreateComponent */]
    },
    {
        path: 'categories',
        component: __WEBPACK_IMPORTED_MODULE_8__components_category_category_list_category_list_component__["a" /* CategoryListComponent */]
    },
    {
        path: 'category-create',
        component: __WEBPACK_IMPORTED_MODULE_7__components_category_category_create_category_create_component__["a" /* CategoryCreateComponent */]
    },
    {
        path: 'options',
        component: __WEBPACK_IMPORTED_MODULE_6__components_possibility_possibility_list_possibility_list_component__["a" /* PossibilityListComponent */]
    }, {
        path: 'option-create',
        component: __WEBPACK_IMPORTED_MODULE_5__components_possibility_possibility_create_possibility_create_component__["a" /* PossibilityCreateComponent */]
    }, {
        path: 'promotion-create',
        component: __WEBPACK_IMPORTED_MODULE_4__components_promotions_promotions_create_promotions_create_component__["a" /* PromotionsCreateComponent */]
    }, {
        path: 'promotions',
        component: __WEBPACK_IMPORTED_MODULE_3__components_promotions_promotions_list_promotions_list_component__["a" /* PromotionsListComponent */]
    }, {
        path: 'product-create',
        component: __WEBPACK_IMPORTED_MODULE_9__components_products_products_create_products_create_component__["a" /* ProductsCreateComponent */]
    }, {
        path: 'notification',
        component: __WEBPACK_IMPORTED_MODULE_2__components_notifications_notitification_create_notitification_create_component__["a" /* NotitificationCreateComponent */]
    }, {
        path: 'order-list',
        component: __WEBPACK_IMPORTED_MODULE_1__components_comanda_comanda_list_comanda_list_component__["a" /* ComandaListComponent */]
    }, {
        path: 'order/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__components_comanda_comanda_comanda_component__["a" /* ComandaComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'table',
        component: __WEBPACK_IMPORTED_MODULE_13__table_table_component__["a" /* TableComponent */]
    },
    {
        path: 'typography',
        component: __WEBPACK_IMPORTED_MODULE_14__typography_typography_component__["a" /* TypographyComponent */]
    },
    {
        path: 'icons',
        component: __WEBPACK_IMPORTED_MODULE_15__icons_icons_component__["a" /* IconsComponent */]
    },
    {
        path: 'maps',
        component: __WEBPACK_IMPORTED_MODULE_16__maps_maps_component__["a" /* MapsComponent */]
    },
    {
        path: 'notifications',
        component: __WEBPACK_IMPORTED_MODULE_17__notifications_notifications_component__["a" /* NotificationsComponent */]
    },
    {
        path: 'upgrade',
        component: __WEBPACK_IMPORTED_MODULE_18__upgrade_upgrade_component__["a" /* UpgradeComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_18__upgrade_upgrade_component__["a" /* UpgradeComponent */]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/class/basic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Basic; });
var Basic = (function () {
    function Basic() {
    }
    return Basic;
}());

//# sourceMappingURL=basic.js.map

/***/ }),

/***/ "../../../../../src/app/class/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__("../../../../../src/app/class/basic.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Category;
}(__WEBPACK_IMPORTED_MODULE_0__basic__["a" /* Basic */]));

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/class/comanda.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__("../../../../../src/app/class/basic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comanda; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Comanda = (function (_super) {
    __extends(Comanda, _super);
    function Comanda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comanda;
}(__WEBPACK_IMPORTED_MODULE_0__basic__["a" /* Basic */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], Comanda.prototype, "price", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], Comanda.prototype, "endereco", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], Comanda.prototype, "bairro", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], Comanda.prototype, "numero", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], Comanda.prototype, "telefone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], Comanda.prototype, "productitens", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], Comanda.prototype, "state", void 0);
//# sourceMappingURL=comanda.js.map

/***/ }),

/***/ "../../../../../src/app/class/possibility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__("../../../../../src/app/class/basic.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Possibility; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Possibility = (function (_super) {
    __extends(Possibility, _super);
    function Possibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Possibility;
}(__WEBPACK_IMPORTED_MODULE_0__basic__["a" /* Basic */]));

//# sourceMappingURL=possibility.js.map

/***/ }),

/***/ "../../../../../src/app/class/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__("../../../../../src/app/class/basic.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Product = (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Product;
}(__WEBPACK_IMPORTED_MODULE_0__basic__["a" /* Basic */]));

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/class/promotion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__("../../../../../src/app/class/basic.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Promotion; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Promotion = (function (_super) {
    __extends(Promotion, _super);
    function Promotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Promotion;
}(__WEBPACK_IMPORTED_MODULE_0__basic__["a" /* Basic */]));

//# sourceMappingURL=promotion.js.map

/***/ }),

/***/ "../../../../../src/app/components/category/category-create/category-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category-create/category-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">Categoria</h4>\n  </div>\n  <div class=\"content\">\n    <form #categoryForm=\"ngForm\" (ngSubmit)=\"add()\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\" class=\"form-group\" [ngClass]=\"{'has-error':(name.touched && name.invalid) , 'has-success':(name.valid) }\">\n            <label>Nome</label>\n            <input type=\"text\" [(ngModel)]=\"this.category.name\" class=\"validate\" #name=\"ngModel\" name=\"name\" placeholder=\"Nome\" class=\"form-control\" class=\"form-control border-input\" required>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error':(description.touched && description.invalid) , 'has-success':(description.valid) }\">\n            <label>Descrição</label>\n            <textarea rows=\"5\" class=\"form-control border-input\" [(ngModel)]=\"this.category.description\" class=\"validate\" #description=\"ngModel\" name=\"description\" placeholder=\"Nome\" class=\"form-control\" class=\"form-control border-input\" required></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.form.valid\" class=\"btn btn-info btn-fill btn-wd\">{{this.namebutton}}</button>\n      </div>\n      <div class=\"clearfix\"></div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/category/category-create/category-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_category_category_list_service__ = __webpack_require__("../../../../../src/app/services/category/category-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_category__ = __webpack_require__("../../../../../src/app/class/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryCreateComponent = (function () {
    function CategoryCreateComponent(route, router, cls) {
        this.route = route;
        this.router = router;
        this.cls = cls;
    }
    CategoryCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = 0;
        this.category = new __WEBPACK_IMPORTED_MODULE_1__class_category__["a" /* Category */]();
        this.route.params.subscribe(function (params) {
            id = params['id'];
            _this.update = params['update'];
        });
        if (this.update) {
            this.namebutton = 'Editar';
        }
        else {
            this.namebutton = "Adicionar";
        }
        /*
        if (id) {
          this.cs.getById(id).then((res) => {
            this.category = res.response;
          }).cath((error) => {
            console.log(error)
          })
        }
        else {
          this.category = new Category();
        }
    */
    };
    CategoryCreateComponent.prototype.add = function () {
        var _this = this;
        this.cls.add(this.category).then(function (response) {
            console.log(_this.category);
            console.log(response);
            _this.router.navigate(['/categories']);
        }).cath(function (error) {
            console.log(error);
        });
        /*
            if (this.update) {
              this.cs.edit(this.category).then((response) => {
                this.nl.sucess("Categoria Editada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            } else {
              this.cs.add(this.category).then((response) => {
                this.nl.sucess("Categoria Cadastrada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            }
        */
    };
    return CategoryCreateComponent;
}());
CategoryCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_2" /* Component */])({
        selector: 'app-category-create',
        template: __webpack_require__("../../../../../src/app/components/category/category-create/category-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/category/category-create/category-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_category_category_list_service__["a" /* CategoryListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_category_category_list_service__["a" /* CategoryListService */]) === "function" && _c || Object])
], CategoryCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=category-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/category/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">Tabela de Categorias</h4>\n        </div>\n        <div class=\"content table-responsive table-full-width\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let row of categories\">\n                <td>{{row.id}}</td>\n                <td>{{row.name}}</td>\n                <td [routerLink]=\"['/category-create',row.id,true]\"><i class=\"ti-pencil\"></i></td>\n                <td (click)=\"delete(row)\"><i class=\"ti-close\"></i></td>\n\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/category/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_category_category_list_service__ = __webpack_require__("../../../../../src/app/services/category/category-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryListComponent = (function () {
    function CategoryListComponent(cls) {
        this.cls = cls;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.list();
        this.tableData1 = {
            headerRow: ['ID', 'Nome', 'Editar', 'Excluir'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
    };
    CategoryListComponent.prototype.list = function () {
        var _this = this;
        this.cls.returnCategories().then(function (res) {
            _this.categories = res.response;
            console.log(_this.categories);
        });
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-category-list',
        template: __webpack_require__("../../../../../src/app/components/category/category-list/category-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/category/category-list/category-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_category_category_list_service__["a" /* CategoryListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_category_category_list_service__["a" /* CategoryListService */]) === "function" && _a || Object])
], CategoryListComponent);

var _a;
//# sourceMappingURL=category-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comanda/comanda-list/comanda-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comanda/comanda-list/comanda-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">Tabela de Pedidos</h4>\n        </div>\n        <div class=\"content table-responsive table-full-width\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr [routerLink]=\"['/order',row.id]\" *ngFor=\"let row of comandas\">\n                <td>{{row.id}}</td>\n                <td>{{row.name}}</td>\n                <td>{{row.create | date:'dd/MM/yyyy' }}</td>\n                <td>{{row.price}}</td>\n                <td [routerLink]=\"['/products-create',row.id,true]\"><i class=\"ti-pencil\"></i></td>\n                <td (click)=\"delete(row)\"><i class=\"ti-close\"></i></td>\n\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/comanda/comanda-list/comanda-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__ = __webpack_require__("../../../../../src/app/services/comanda/comanda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandaListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComandaListComponent = (function () {
    function ComandaListComponent(cs) {
        this.cs = cs;
    }
    ComandaListComponent.prototype.ngOnInit = function () {
        this.list();
        this.tableData1 = {
            headerRow: ['ID', 'Nome', 'Data Criação', 'Valor(R$)', 'Editar', 'Excluir'],
        };
    };
    ComandaListComponent.prototype.list = function () {
        var _this = this;
        this.cs.returnOrders().then(function (res) {
            _this.comandas = res.response;
            console.log(_this.comandas);
        });
    };
    return ComandaListComponent;
}());
ComandaListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* Component */])({
        selector: 'app-comanda-list',
        template: __webpack_require__("../../../../../src/app/components/comanda/comanda-list/comanda-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comanda/comanda-list/comanda-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__["a" /* ComandaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__["a" /* ComandaService */]) === "function" && _a || Object])
], ComandaListComponent);

var _a;
//# sourceMappingURL=comanda-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comanda/comanda/comanda.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comanda/comanda/comanda.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">Comanda - {{id}}</h4>\n  </div>\n  <div class=\"content\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Telefone</label>\n            <input style=\"color: black\" [(ngModel)]=\"this.comanda.telefone\" name=\"telefone\" type=\"text\" class=\"form-control border-input\" disabled>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Preço(R$)</label>\n            <input style=\"color: black\" [(ngModel)]=\"this.comanda.price\" name=\"price\" type=\"text\" class=\"form-control border-input\" disabled>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Bairro</label>\n            <input [(ngModel)]=\"this.comanda.bairro\" name=\"bairro\" type=\"text\" style=\"color: black\" class=\"form-control border-input\" disabled>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Numero:</label>\n            <input [(ngModel)]=\"this.comanda.numero\" name=\"numero\" type=\"text\" style=\"color: black\" class=\"form-control border-input\" disabled>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Endereço</label>\n            <input [(ngModel)]=\"this.comanda.endereco\" name=\"telefone\" style=\"color: black\" type=\"text\" class=\"form-control border-input\" disabled>\n          </div>\n        </div>\n\n        <label>Produtos</label>\n        <div *ngFor=\"let item of this.comanda.productitens\">\n\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Categoria</label>\n                <input [value]=\"item.category.name\" style=\"color: black\" class=\"form-control border-input\" disabled>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Produto</label>\n                <input style=\"color: black\" [value]=\"item.name\" class=\"form-control border-input\" disabled> </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Tamanho</label>\n                <input style=\"color: black\" [value]=\"item.possibilities[0].name\" class=\"form-control border-input\" disabled> </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/comanda/comanda/comanda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__ = __webpack_require__("../../../../../src/app/services/comanda/comanda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_comanda__ = __webpack_require__("../../../../../src/app/class/comanda.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComandaComponent = (function () {
    function ComandaComponent(route, router, cs) {
        this.route = route;
        this.router = router;
        this.cs = cs;
    }
    ComandaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comanda = new __WEBPACK_IMPORTED_MODULE_1__class_comanda__["a" /* Comanda */]();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.cs.returnOrder(_this.id).then(function (res) {
                _this.comanda = res.response;
                console.log("comanda" + _this.comanda);
            });
        });
    };
    return ComandaComponent;
}());
ComandaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_2" /* Component */])({
        selector: 'app-comanda',
        template: __webpack_require__("../../../../../src/app/components/comanda/comanda/comanda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comanda/comanda/comanda.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__["a" /* ComandaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_comanda_comanda_service__["a" /* ComandaService */]) === "function" && _c || Object])
], ComandaComponent);

var _a, _b, _c;
//# sourceMappingURL=comanda.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notifications/notitification-create/notitification-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notifications/notitification-create/notitification-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Noticações Gerais</h2>\n<h5>Digite no campo abaixo uma mensagem que será enviada para todos os usuários do seu aplicativo.</h5>\n<form #pushnotificationForm=\"ngForm\" (ngSubmit)=\"send()\">\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error':(description.touched && description.invalid) , 'has-success':(description.valid) }\">\n    <textarea type=\"text\" [(ngModel)]=\"this.message\" class=\"validate\" #description=\"ngModel\" name=\"description\" placeholder=\"Descrição\" class=\"form-control\" required id=\"description\" cols=\"30\" rows=\"5\"></textarea>\n  </div>\n\n\n  <button type=\"submit\" class=\"btn  btn-lg btn-success\" [disabled]=\"!pushnotificationForm.form.valid\" style=\"float: right\">Enviar</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/notifications/notitification-create/notitification-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notification_notification_service__ = __webpack_require__("../../../../../src/app/services/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotitificationCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotitificationCreateComponent = (function () {
    function NotitificationCreateComponent(ns) {
        this.ns = ns;
    }
    NotitificationCreateComponent.prototype.ngOnInit = function () {
    };
    NotitificationCreateComponent.prototype.send = function () {
        var _this = this;
        this.ns.send(this.message).then(function () {
            _this.message = null;
        }).catch(function () {
        });
    };
    return NotitificationCreateComponent;
}());
NotitificationCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* Component */])({
        selector: 'app-notitification-create',
        template: __webpack_require__("../../../../../src/app/components/notifications/notitification-create/notitification-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/notifications/notitification-create/notitification-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_notification_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], NotitificationCreateComponent);

var _a;
//# sourceMappingURL=notitification-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/possibility/possibility-create/possibility-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/possibility/possibility-create/possibility-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">Opção</h4>\n  </div>\n  <div class=\"content\">\n    <form #categoryForm=\"ngForm\" (ngSubmit)=\"add()\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" class=\"form-group\" [ngClass]=\"{'has-error':(name.touched && name.invalid) , 'has-success':(name.valid) }\">\n            <label>Nome</label>\n            <input type=\"text\" [(ngModel)]=\"this.possibility.name\" class=\"validate\" #name=\"ngModel\" name=\"name\" placeholder=\"Nome\" class=\"form-control\" class=\"form-control border-input\" required>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error':(price.touched && price.invalid) , 'has-success':(price.valid) }\">\n            <label>Preço</label>\n            <input type=\"number\" [(ngModel)]=\"this.possibility.price\" class=\"validate\" #price=\"ngModel\" name=\"price\" placeholder=\"Preço\" class=\"form-control\" class=\"form-control border-input\" required>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error':(this.possibility.type == 0) , 'has-success':(this.possibility.type != 0) }\">\n            <label>Tipo</label>\n            <select [(ngModel)]=\"this.possibility.type\" #type=\"ngModel\" name=\"type\" class=\"validate\" class=\"form-control\" required>\n              <option  [value]=\"0\" selected>Escolha um tipo de opção</option >\n              <option  [value]=\"1\" selected>Tamanho</option >\n              <option  [value]=\"2\" selected>Adicional</option >\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.form.valid\" class=\"btn btn-info btn-fill btn-wd\">{{this.namebutton}}</button>\n      </div>\n      <div class=\"clearfix\"></div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/possibility/possibility-create/possibility-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_possibility_possibility_service__ = __webpack_require__("../../../../../src/app/services/possibility/possibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_possibility__ = __webpack_require__("../../../../../src/app/class/possibility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossibilityCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PossibilityCreateComponent = (function () {
    function PossibilityCreateComponent(route, router, ps) {
        this.route = route;
        this.router = router;
        this.ps = ps;
    }
    PossibilityCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = 0;
        this.possibility = new __WEBPACK_IMPORTED_MODULE_1__class_possibility__["a" /* Possibility */]();
        this.possibility.type = 0;
        this.route.params.subscribe(function (params) {
            id = params['id'];
            _this.update = params['update'];
        });
        if (this.update) {
            this.namebutton = 'Editar';
        }
        else {
            this.namebutton = "Adicionar";
        }
        /*
        if (id) {
          this.cs.getById(id).then((res) => {
            this.category = res.response;
          }).cath((error) => {
            console.log(error)
          })
        }
        else {
          this.category = new Category();
        }
    */
    };
    PossibilityCreateComponent.prototype.add = function () {
        var _this = this;
        this.ps.add(this.possibility).then(function (response) {
            console.log(_this.possibility);
            console.log(response);
            _this.router.navigate(['/options']);
        }).cath(function (error) {
            console.log(error);
        });
        /*
            if (this.update) {
              this.cs.edit(this.category).then((response) => {
                this.nl.sucess("Categoria Editada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            } else {
              this.cs.add(this.category).then((response) => {
                this.nl.sucess("Categoria Cadastrada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            }
        */
    };
    return PossibilityCreateComponent;
}());
PossibilityCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_2" /* Component */])({
        selector: 'app-possibility-create',
        template: __webpack_require__("../../../../../src/app/components/possibility/possibility-create/possibility-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/possibility/possibility-create/possibility-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_possibility_possibility_service__["a" /* PossibilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_possibility_possibility_service__["a" /* PossibilityService */]) === "function" && _c || Object])
], PossibilityCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=possibility-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/possibility/possibility-list/possibility-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/possibility/possibility-list/possibility-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">Tabela de Opções</h4>\n        </div>\n        <div class=\"content table-responsive table-full-width\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let row of possibilies\">\n                <td>{{row.id}}</td>\n                <td>{{row.name}}</td>\n                <td>{{row.price}}</td>\n                <td *ngIf=\"row.type == 1\">Tamanho</td>\n                <td *ngIf=\"row.type == 2\">Tamanho</td>\n                <td [routerLink]=\"['/category-create',row.id,true]\"><i class=\"ti-pencil\"></i></td>\n                <td (click)=\"delete(row)\"><i class=\"ti-close\"></i></td>\n\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/possibility/possibility-list/possibility-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_possibility_possibility_service__ = __webpack_require__("../../../../../src/app/services/possibility/possibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossibilityListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PossibilityListComponent = (function () {
    function PossibilityListComponent(pls) {
        this.pls = pls;
    }
    PossibilityListComponent.prototype.ngOnInit = function () {
        this.list();
        this.tableData1 = {
            headerRow: ['ID', 'Nome', 'Preço', 'Tipo', 'Editar', 'Excluir'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
    };
    PossibilityListComponent.prototype.list = function () {
        var _this = this;
        this.pls.returnPossibilities().then(function (res) {
            _this.possibilies = res.response;
        });
    };
    return PossibilityListComponent;
}());
PossibilityListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* Component */])({
        selector: 'app-possibility-list',
        template: __webpack_require__("../../../../../src/app/components/possibility/possibility-list/possibility-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/possibility/possibility-list/possibility-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_possibility_possibility_service__["a" /* PossibilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_possibility_possibility_service__["a" /* PossibilityService */]) === "function" && _a || Object])
], PossibilityListComponent);

var _a;
//# sourceMappingURL=possibility-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-create/products-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-create/products-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">Produto</h4>\n  </div>\n  <div class=\"content\">\n    <form #categoryForm=\"ngForm\" (ngSubmit)=\"add()\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" class=\"form-group\" [ngClass]=\"{'has-error':(name.touched && name.invalid) , 'has-success':(name.valid) }\">\n            <label>Nome</label>\n            <input type=\"text\" [(ngModel)]=\"this.product.name\" class=\"validate\" #name=\"ngModel\" name=\"name\" placeholder=\"Nome\" class=\"form-control\" required>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error':(this.product.category.id == 0) , 'has-success':(this.product.category.id != 0) }\">\n            <label>Categoria</label>\n            <select [(ngModel)]=\"this.product.category.id\" name=\"category\" class=\"validate\" class=\"form-control\" required>\n              <option [value]=\"0\">Escolha uma categoria</option >\n      <option *ngFor=\"let item of categories\" [value]=\"item.id\" >{{item.name}}</option >\n    </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" class=\"form-group\" [ngClass]=\"{'has-error':(possivel) , 'has-success':(!possivel) }\">\n            <label>Opções</label>\n            <div *ngFor=\"let item of possibilities\">\n              <div>\n                <input type=\"checkbox\" value=\"{{item}}\" name=\"possibilities1\" (change)=\"escolha(item)\">{{item.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"text-center\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.form.valid\" class=\"btn btn-info btn-fill btn-wd\">{{this.namebutton}}</button>\n      </div>\n      <div class=\"clearfix\"></div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/products/products-create/products-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_products_products_list_service__ = __webpack_require__("../../../../../src/app/services/products/products-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_possibility_possibility_service__ = __webpack_require__("../../../../../src/app/services/possibility/possibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_category_category_list_service__ = __webpack_require__("../../../../../src/app/services/category/category-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_category__ = __webpack_require__("../../../../../src/app/class/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_product__ = __webpack_require__("../../../../../src/app/class/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductsCreateComponent = (function () {
    function ProductsCreateComponent(route, router, cls, pls, prls) {
        this.route = route;
        this.router = router;
        this.cls = cls;
        this.pls = pls;
        this.prls = prls;
        this.possibilities2 = [];
        this.update = false;
        this.possivel = false;
    }
    ProductsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new __WEBPACK_IMPORTED_MODULE_4__class_product__["a" /* Product */]();
        this.product.category = new __WEBPACK_IMPORTED_MODULE_3__class_category__["a" /* Category */]();
        this.product.category.id = 0;
        this.posssibilitiestam = 0;
        this.cls.returnCategories().then(function (res) {
            _this.categories = res.response;
            console.log(_this.categories);
        });
        this.pls.returnPossibilities().then(function (res) {
            _this.possibilities = res.response;
            console.log(_this.possibilities);
        });
        var id = 0;
        this.route.params.subscribe(function (params) {
            id = params['id'];
            _this.update = params['update'];
        });
        if (this.update) {
            this.namebutton = 'Editar';
        }
        else {
            this.namebutton = "Adicionar";
        }
        /*
        if (id) {
          this.cs.getById(id).then((res) => {
            this.category = res.response;
          }).cath((error) => {
            console.log(error)
          })
        }
        else {
          this.category = new Category();
        }
        
    */
    };
    ProductsCreateComponent.prototype.escolha = function (item) {
        if (this.possibilities2[item.id] == 1) {
            this.possibilities2[item.id] = 0;
        }
        else {
            this.possibilities2[item.id] = 1;
        }
    };
    ProductsCreateComponent.prototype.add = function () {
        var _this = this;
        console.log(JSON.stringify(this.product.category));
        console.log(this.possibilities2);
        this.prls.add(this.product, this.possibilities2).then(function (response) {
            _this.router.navigate(['/products']);
        }).cath(function (error) {
            console.log(error);
        });
        /*
            if (this.update) {
              this.cs.edit(this.category).then((response) => {
                this.nl.sucess("Categoria Editada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            } else {
              this.cs.add(this.category).then((response) => {
                this.nl.sucess("Categoria Cadastrada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            }
        */
    };
    return ProductsCreateComponent;
}());
ProductsCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_2" /* Component */])({
        selector: 'app-products-create',
        template: __webpack_require__("../../../../../src/app/components/products/products-create/products-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-create/products-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_category_category_list_service__["a" /* CategoryListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_category_category_list_service__["a" /* CategoryListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_possibility_possibility_service__["a" /* PossibilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_possibility_possibility_service__["a" /* PossibilityService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_products_products_list_service__["a" /* ProductsListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_products_products_list_service__["a" /* ProductsListService */]) === "function" && _e || Object])
], ProductsCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=products-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">Tabela de Produtos</h4>\n        </div>\n        <div class=\"content table-responsive table-full-width\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let row of products\">\n                <td>{{row.id}}</td>\n                <td>{{row.name}}</td>\n                <td>{{row.create | date:'dd/MM/yyyy' }}</td>\n                <td>{{row.category.name}}</td>\n                <td [routerLink]=\"['/products-create',row.id,true]\"><i class=\"ti-pencil\"></i></td>\n                <td (click)=\"delete(row)\"><i class=\"ti-close\"></i></td>\n\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_products_products_list_service__ = __webpack_require__("../../../../../src/app/services/products/products-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsListComponent = (function () {
    function ProductsListComponent(pls) {
        this.pls = pls;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.list();
        this.tableData1 = {
            headerRow: ['ID', 'Nome', 'Data Criação', 'Categoria', 'Editar', 'Excluir'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
    };
    ProductsListComponent.prototype.list = function () {
        var _this = this;
        this.pls.returnProducts().then(function (res) {
            _this.products = res.response;
            console.log(_this.products);
        });
    };
    return ProductsListComponent;
}());
ProductsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* Component */])({
        selector: 'app-products-list',
        template: __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_products_products_list_service__["a" /* ProductsListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_products_products_list_service__["a" /* ProductsListService */]) === "function" && _a || Object])
], ProductsListComponent);

var _a;
//# sourceMappingURL=products-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/promotions/promotions-create/promotions-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/promotions/promotions-create/promotions-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">Promoção</h4>\n  </div>\n  <div class=\"content\">\n    <form #categoryForm=\"ngForm\" (ngSubmit)=\"add()\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\" class=\"form-group\" [ngClass]=\"{'has-error':(name.touched && name.invalid) , 'has-success':(name.valid) }\">\n            <label>Nome</label>\n            <input type=\"text\" [(ngModel)]=\"this.promotion.name\" class=\"validate\" #name=\"ngModel\" name=\"name\" placeholder=\"Nome\" class=\"form-control\" class=\"form-control border-input\" required>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error':(date.touched && date.invalid) , 'has-success':(date.valid) }\">\n            <label>Preço</label>\n            <input type=\"date\" [(ngModel)]=\"this.promotion.date\" class=\"validate\" #date=\"ngModel\" name=\"date\" class=\"form-control\" class=\"form-control border-input\" required>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error':(description.touched && description.invalid) , 'has-success':(description.valid) }\">\n            <label>Descrição</label>\n            <textarea rows=\"5\" class=\"form-control border-input\" [(ngModel)]=\"this.promotion.description\" class=\"validate\" #description=\"ngModel\" name=\"description\" placeholder=\"Nome\" class=\"form-control\" class=\"form-control border-input\" required></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.form.valid\" class=\"btn btn-info btn-fill btn-wd\">{{this.namebutton}}</button>\n      </div>\n      <div class=\"clearfix\"></div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/promotions/promotions-create/promotions-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_promotions_promotions_service__ = __webpack_require__("../../../../../src/app/services/promotions/promotions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_promotion__ = __webpack_require__("../../../../../src/app/class/promotion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PromotionsCreateComponent = (function () {
    function PromotionsCreateComponent(route, router, ps) {
        this.route = route;
        this.router = router;
        this.ps = ps;
    }
    PromotionsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = 0;
        this.promotion = new __WEBPACK_IMPORTED_MODULE_1__class_promotion__["a" /* Promotion */]();
        this.route.params.subscribe(function (params) {
            id = params['id'];
            _this.update = params['update'];
        });
        if (this.update) {
            this.namebutton = 'Editar';
        }
        else {
            this.namebutton = "Adicionar";
        }
        /*
        if (id) {
          this.cs.getById(id).then((res) => {
            this.category = res.response;
          }).cath((error) => {
            console.log(error)
          })
        }
        else {
          this.category = new Category();
        }
    */
    };
    PromotionsCreateComponent.prototype.add = function () {
        var _this = this;
        this.ps.add(this.promotion).then(function (response) {
            console.log(_this.promotion);
            console.log(response);
            _this.router.navigate(['/promotions']);
        }).cath(function (error) {
            console.log(error);
        });
        /*
            if (this.update) {
              this.cs.edit(this.category).then((response) => {
                this.nl.sucess("Categoria Editada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            } else {
              this.cs.add(this.category).then((response) => {
                this.nl.sucess("Categoria Cadastrada");
                this.router.navigate(['/categories']);
              }).cath((error) => {
                console.log(error)
              })
            }
        */
    };
    return PromotionsCreateComponent;
}());
PromotionsCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_2" /* Component */])({
        selector: 'app-promotions-create',
        template: __webpack_require__("../../../../../src/app/components/promotions/promotions-create/promotions-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/promotions/promotions-create/promotions-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_promotions_promotions_service__["a" /* PromotionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_promotions_promotions_service__["a" /* PromotionsService */]) === "function" && _c || Object])
], PromotionsCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=promotions-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/promotions/promotions-list/promotions-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/promotions/promotions-list/promotions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">Tabela de Promoções</h4>\n        </div>\n        <div class=\"content table-responsive table-full-width\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let row of promotions\">\n                <td>{{row.id}}</td>\n                <td>{{row.name}}</td>\n                <td>{{row.description | trucante : 40}}</td>\n                <td *ngIf=\"row.date\">{{row.date | date:'dd/MM/yyyy'}}</td>\n                <td *ngIf=\"!row.date\">Indeterminado</td>\n                <td [routerLink]=\"['/promotion-create',row.id,true]\"><i class=\"ti-pencil\"></i></td>\n                <td (click)=\"delete(row)\"><i class=\"ti-close\"></i></td>\n\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/promotions/promotions-list/promotions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_promotions_promotions_service__ = __webpack_require__("../../../../../src/app/services/promotions/promotions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromotionsListComponent = (function () {
    function PromotionsListComponent(ps) {
        this.ps = ps;
    }
    PromotionsListComponent.prototype.ngOnInit = function () {
        this.list();
        this.tableData1 = {
            headerRow: ['ID', 'Nome', 'Descrição', 'Expira em', 'Editar', 'Excluir'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
    };
    PromotionsListComponent.prototype.list = function () {
        var _this = this;
        this.ps.list().then(function (res) {
            _this.promotions = res.response;
        });
    };
    return PromotionsListComponent;
}());
PromotionsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* Component */])({
        selector: 'app-promotions-list',
        template: __webpack_require__("../../../../../src/app/components/promotions/promotions-list/promotions-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/promotions/promotions-list/promotions-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_promotions_promotions_service__["a" /* PromotionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_promotions_promotions_service__["a" /* PromotionsService */]) === "function" && _a || Object])
], PromotionsListComponent);

var _a;
//# sourceMappingURL=promotions-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-warning text-center\">\n                                    <i class=\"ti-server\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Capacity</p>\n                                    105GB\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated now\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-success text-center\">\n                                    <i class=\"ti-wallet\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Revenue</p>\n                                    $1,345\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-calendar\"></i> Last day\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-danger text-center\">\n                                    <i class=\"ti-pulse\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Errors</p>\n                                    23\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-timer\"></i> In the last hour\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-info text-center\">\n                                    <i class=\"ti-twitter-alt\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Followers</p>\n                                    +45\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated now\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Users Behavior</h4>\n                        <p class=\"category\">24 Hours performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartHours\" class=\"ct-chart\"></div>\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Click\n                                <i class=\"fa fa-circle text-warning\"></i> Click Second Time\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated 3 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Email Statistics</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartPreferences\" class=\"ct-chart ct-perfect-fourth\"></div>\n\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Bounce\n                                <i class=\"fa fa-circle text-warning\"></i> Unsubscribe\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-timer\"></i> Campaign sent 2 days ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card \">\n                    <div class=\"header\">\n                        <h4 class=\"title\">2015 Sales</h4>\n                        <p class=\"category\">All products including Taxes</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartActivity\" class=\"ct-chart\"></div>\n\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Tesla Model S\n                                <i class=\"fa fa-circle text-warning\"></i> BMW 5 Series\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-check\"></i> Data information certified\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };
        var optionsSales = {
            low: 0,
            high: 1000,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartHours', dataSales, optionsSales, responsiveSales);
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartActivity', data, options, responsiveOptions);
        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };
        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', dataPreferences, optionsPreferences);
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">320+ Themify Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://themify.me/\">Themify</a>.</p>\n                    </div>\n                    <div class=\"content all-icons\">\n\n                        <div class=\"icon-section\">\n                            <h3>Arrows &amp; Direction Icons </h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-up\"></span><span class=\"icon-name\"> ti-arrow-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-right\"></span><span class=\"icon-name\"> ti-arrow-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-left\"></span><span class=\"icon-name\"> ti-arrow-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-down\"></span><span class=\"icon-name\"> ti-arrow-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-vertical\"></span><span class=\"icon-name\"> ti-arrows-vertical</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-horizontal\"></span><span class=\"icon-name\"> ti-arrows-horizontal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-up\"></span><span class=\"icon-name\"> ti-angle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-right\"></span><span class=\"icon-name\"> ti-angle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-left\"></span><span class=\"icon-name\"> ti-angle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-down\"></span><span class=\"icon-name\"> ti-angle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-up\"></span><span class=\"icon-name\"> ti-angle-double-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-right\"></span><span class=\"icon-name\"> ti-angle-double-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-left\"></span><span class=\"icon-name\"> ti-angle-double-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-down\"></span><span class=\"icon-name\"> ti-angle-double-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-move\"></span><span class=\"icon-name\"> ti-move</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-fullscreen\"></span><span class=\"icon-name\"> ti-fullscreen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-right\"></span><span class=\"icon-name\"> ti-arrow-top-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-left\"></span><span class=\"icon-name\"> ti-arrow-top-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-up\"></span><span class=\"icon-name\"> ti-arrow-circle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-right\"></span><span class=\"icon-name\"> ti-arrow-circle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-left\"></span><span class=\"icon-name\"> ti-arrow-circle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-down\"></span><span class=\"icon-name\"> ti-arrow-circle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-corner\"></span><span class=\"icon-name\"> ti-arrows-corner</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v\"></span><span class=\"icon-name\"> ti-split-v</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v-alt\"></span><span class=\"icon-name\"> ti-split-v-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-h\"></span><span class=\"icon-name\"> ti-split-h</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-up\"></span><span class=\"icon-name\"> ti-hand-point-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-right\"></span><span class=\"icon-name\"> ti-hand-point-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-left\"></span><span class=\"icon-name\"> ti-hand-point-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-down\"></span><span class=\"icon-name\"> ti-hand-point-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-right\"></span><span class=\"icon-name\"> ti-back-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-left\"></span><span class=\"icon-name\"> ti-back-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-exchange-vertical\"></span><span class=\"icon-name\"> ti-exchange-vertical</span>\n                            </div>\n\n                        </div> <!-- Arrows Icons -->\n\n\n\n                        <h3>Web App Icons</h3>\n\n                        <div class=\"icon-section\">\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wand\"></span><span class=\"icon-name\"> ti-wand</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save\"></span><span class=\"icon-name\"> ti-save</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save-alt\"></span><span class=\"icon-name\"> ti-save-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction\"></span><span class=\"icon-name\"> ti-direction</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction-alt\"></span><span class=\"icon-name\"> ti-direction-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-user\"></span><span class=\"icon-name\"> ti-user</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-link\"></span><span class=\"icon-name\"> ti-link</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlink\"></span><span class=\"icon-name\"> ti-unlink</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trash\"></span><span class=\"icon-name\"> ti-trash</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-target\"></span><span class=\"icon-name\"> ti-target</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tag\"></span><span class=\"icon-name\"> ti-tag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-desktop\"></span><span class=\"icon-name\"> ti-desktop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tablet\"></span><span class=\"icon-name\"> ti-tablet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mobile\"></span><span class=\"icon-name\"> ti-mobile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-email\"></span><span class=\"icon-name\"> ti-email</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-star\"></span><span class=\"icon-name\"> ti-star</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-spray\"></span><span class=\"icon-name\"> ti-spray</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-signal\"></span><span class=\"icon-name\"> ti-signal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart\"></span><span class=\"icon-name\"> ti-shopping-cart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart-full\"></span><span class=\"icon-name\"> ti-shopping-cart-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-settings\"></span><span class=\"icon-name\"> ti-settings</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-search\"></span><span class=\"icon-name\"> ti-search</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-in\"></span><span class=\"icon-name\"> ti-zoom-in</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-out\"></span><span class=\"icon-name\"> ti-zoom-out</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cut\"></span><span class=\"icon-name\"> ti-cut</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler\"></span><span class=\"icon-name\"> ti-ruler</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt-2\"></span><span class=\"icon-name\"> ti-ruler-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-pencil\"></span><span class=\"icon-name\"> ti-ruler-pencil</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt\"></span><span class=\"icon-name\"> ti-ruler-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark\"></span><span class=\"icon-name\"> ti-bookmark</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark-alt\"></span><span class=\"icon-name\"> ti-bookmark-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reload\"></span><span class=\"icon-name\"> ti-reload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plus\"></span><span class=\"icon-name\"> ti-plus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-minus\"></span><span class=\"icon-name\"> ti-minus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-close\"></span><span class=\"icon-name\"> ti-close</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin\"></span><span class=\"icon-name\"> ti-pin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil\"></span><span class=\"icon-name\"> ti-pencil</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt\"></span><span class=\"icon-name\"> ti-pencil-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-roller\"></span><span class=\"icon-name\"> ti-paint-roller</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-bucket\"></span><span class=\"icon-name\"> ti-paint-bucket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-na\"></span><span class=\"icon-name\"> ti-na</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall\"></span><span class=\"icon-name\"> ti-medall</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall-alt\"></span><span class=\"icon-name\"> ti-medall-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker\"></span><span class=\"icon-name\"> ti-marker</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker-alt\"></span><span class=\"icon-name\"> ti-marker-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-lock\"></span><span class=\"icon-name\"> ti-lock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlock\"></span><span class=\"icon-name\"> ti-unlock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-arrow\"></span><span class=\"icon-name\"> ti-location-arrow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout\"></span><span class=\"icon-name\"> ti-layout</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers\"></span><span class=\"icon-name\"> ti-layers</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers-alt\"></span><span class=\"icon-name\"> ti-layers-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-key\"></span><span class=\"icon-name\"> ti-key</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-image\"></span><span class=\"icon-name\"> ti-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart\"></span><span class=\"icon-name\"> ti-heart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart-broken\"></span><span class=\"icon-name\"> ti-heart-broken</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-stop\"></span><span class=\"icon-name\"> ti-hand-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-open\"></span><span class=\"icon-name\"> ti-hand-open</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-drag\"></span><span class=\"icon-name\"> ti-hand-drag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag\"></span><span class=\"icon-name\"> ti-flag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt\"></span><span class=\"icon-name\"> ti-flag-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt-2\"></span><span class=\"icon-name\"> ti-flag-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eye\"></span><span class=\"icon-name\"> ti-eye</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-import\"></span><span class=\"icon-name\"> ti-import</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-export\"></span><span class=\"icon-name\"> ti-export</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cup\"></span><span class=\"icon-name\"> ti-cup</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-crown\"></span><span class=\"icon-name\"> ti-crown</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments\"></span><span class=\"icon-name\"> ti-comments</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment\"></span><span class=\"icon-name\"> ti-comment</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment-alt\"></span><span class=\"icon-name\"> ti-comment-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thought\"></span><span class=\"icon-name\"> ti-thought</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clip\"></span><span class=\"icon-name\"> ti-clip</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check\"></span><span class=\"icon-name\"> ti-check</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check-box\"></span><span class=\"icon-name\"> ti-check-box</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-camera\"></span><span class=\"icon-name\"> ti-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-announcement\"></span><span class=\"icon-name\"> ti-announcement</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush\"></span><span class=\"icon-name\"> ti-brush</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush-alt\"></span><span class=\"icon-name\"> ti-brush-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-palette\"></span><span class=\"icon-name\"> ti-palette</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-briefcase\"></span><span class=\"icon-name\"> ti-briefcase</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt\"></span><span class=\"icon-name\"> ti-bolt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt-alt\"></span><span class=\"icon-name\"> ti-bolt-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-blackboard\"></span><span class=\"icon-name\"> ti-blackboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bag\"></span><span class=\"icon-name\"> ti-bag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-world\"></span><span class=\"icon-name\"> ti-world</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wheelchair\"></span><span class=\"icon-name\"> ti-wheelchair</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-car\"></span><span class=\"icon-name\"> ti-car</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-truck\"></span><span class=\"icon-name\"> ti-truck</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-timer\"></span><span class=\"icon-name\"> ti-timer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ticket\"></span><span class=\"icon-name\"> ti-ticket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-up\"></span><span class=\"icon-name\"> ti-thumb-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-down\"></span><span class=\"icon-name\"> ti-thumb-down</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-up\"></span><span class=\"icon-name\"> ti-stats-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-down\"></span><span class=\"icon-name\"> ti-stats-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shine\"></span><span class=\"icon-name\"> ti-shine</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right\"></span><span class=\"icon-name\"> ti-shift-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left\"></span><span class=\"icon-name\"> ti-shift-left</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right-alt\"></span><span class=\"icon-name\"> ti-shift-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left-alt\"></span><span class=\"icon-name\"> ti-shift-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shield\"></span><span class=\"icon-name\"> ti-shield</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-notepad\"></span><span class=\"icon-name\"> ti-notepad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-server\"></span><span class=\"icon-name\"> ti-server</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pulse\"></span><span class=\"icon-name\"> ti-pulse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-printer\"></span><span class=\"icon-name\"> ti-printer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-power-off\"></span><span class=\"icon-name\"> ti-power-off</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plug\"></span><span class=\"icon-name\"> ti-plug</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pie-chart\"></span><span class=\"icon-name\"> ti-pie-chart</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-panel\"></span><span class=\"icon-name\"> ti-panel</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-package\"></span><span class=\"icon-name\"> ti-package</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music\"></span><span class=\"icon-name\"> ti-music</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music-alt\"></span><span class=\"icon-name\"> ti-music-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse\"></span><span class=\"icon-name\"> ti-mouse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse-alt\"></span><span class=\"icon-name\"> ti-mouse-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-money\"></span><span class=\"icon-name\"> ti-money</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone\"></span><span class=\"icon-name\"> ti-microphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu\"></span><span class=\"icon-name\"> ti-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu-alt\"></span><span class=\"icon-name\"> ti-menu-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map\"></span><span class=\"icon-name\"> ti-map</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map-alt\"></span><span class=\"icon-name\"> ti-map-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-pin\"></span><span class=\"icon-name\"> ti-location-pin</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-light-bulb\"></span><span class=\"icon-name\"> ti-light-bulb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info\"></span><span class=\"icon-name\"> ti-info</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-infinite\"></span><span class=\"icon-name\"> ti-infinite</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-id-badge\"></span><span class=\"icon-name\"> ti-id-badge</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hummer\"></span><span class=\"icon-name\"> ti-hummer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-home\"></span><span class=\"icon-name\"> ti-home</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help\"></span><span class=\"icon-name\"> ti-help</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone\"></span><span class=\"icon-name\"> ti-headphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrives\"></span><span class=\"icon-name\"> ti-harddrives</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrive\"></span><span class=\"icon-name\"> ti-harddrive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gift\"></span><span class=\"icon-name\"> ti-gift</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-game\"></span><span class=\"icon-name\"> ti-game</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-filter\"></span><span class=\"icon-name\"> ti-filter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-files\"></span><span class=\"icon-name\"> ti-files</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-file\"></span><span class=\"icon-name\"> ti-file</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zip\"></span><span class=\"icon-name\"> ti-zip</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-folder\"></span><span class=\"icon-name\"> ti-folder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-envelope\"></span><span class=\"icon-name\"> ti-envelope</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dashboard\"></span><span class=\"icon-name\"> ti-dashboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud\"></span><span class=\"icon-name\"> ti-cloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-up\"></span><span class=\"icon-name\"> ti-cloud-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-down\"></span><span class=\"icon-name\"> ti-cloud-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clipboard\"></span><span class=\"icon-name\"> ti-clipboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-calendar\"></span><span class=\"icon-name\"> ti-calendar</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-book\"></span><span class=\"icon-name\"> ti-book</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bell\"></span><span class=\"icon-name\"> ti-bell</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-basketball\"></span><span class=\"icon-name\"> ti-basketball</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart\"></span><span class=\"icon-name\"> ti-bar-chart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart-alt\"></span><span class=\"icon-name\"> ti-bar-chart-alt</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-archive\"></span><span class=\"icon-name\"> ti-archive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-anchor\"></span><span class=\"icon-name\"> ti-anchor</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alert\"></span><span class=\"icon-name\"> ti-alert</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alarm-clock\"></span><span class=\"icon-name\"> ti-alarm-clock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-agenda\"></span><span class=\"icon-name\"> ti-agenda</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-write\"></span><span class=\"icon-name\"> ti-write</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wallet\"></span><span class=\"icon-name\"> ti-wallet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-clapper\"></span><span class=\"icon-name\"> ti-video-clapper</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-camera\"></span><span class=\"icon-name\"> ti-video-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vector\"></span><span class=\"icon-name\"> ti-vector</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-support\"></span><span class=\"icon-name\"> ti-support</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stamp\"></span><span class=\"icon-name\"> ti-stamp</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-slice\"></span><span class=\"icon-name\"> ti-slice</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shortcode\"></span><span class=\"icon-name\"> ti-shortcode</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-receipt\"></span><span class=\"icon-name\"> ti-receipt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin2\"></span><span class=\"icon-name\"> ti-pin2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin-alt\"></span><span class=\"icon-name\"> ti-pin-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt2\"></span><span class=\"icon-name\"> ti-pencil-alt2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eraser\"></span><span class=\"icon-name\"> ti-eraser</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more\"></span><span class=\"icon-name\"> ti-more</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more-alt\"></span><span class=\"icon-name\"> ti-more-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone-alt\"></span><span class=\"icon-name\"> ti-microphone-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-magnet\"></span><span class=\"icon-name\"> ti-magnet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-double\"></span><span class=\"icon-name\"> ti-line-double</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dotted\"></span><span class=\"icon-name\"> ti-line-dotted</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dashed\"></span><span class=\"icon-name\"> ti-line-dashed</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ink-pen\"></span><span class=\"icon-name\"> ti-ink-pen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info-alt\"></span><span class=\"icon-name\"> ti-info-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help-alt\"></span><span class=\"icon-name\"> ti-help-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone-alt\"></span><span class=\"icon-name\"> ti-headphone-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gallery\"></span><span class=\"icon-name\"> ti-gallery</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-smile\"></span><span class=\"icon-name\"> ti-face-smile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-sad\"></span><span class=\"icon-name\"> ti-face-sad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-credit-card\"></span><span class=\"icon-name\"> ti-credit-card</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments-smiley\"></span><span class=\"icon-name\"> ti-comments-smiley</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-time\"></span><span class=\"icon-name\"> ti-time</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share\"></span><span class=\"icon-name\"> ti-share</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share-alt\"></span><span class=\"icon-name\"> ti-share-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rocket\"></span><span class=\"icon-name\"> ti-rocket</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-new-window\"></span><span class=\"icon-name\"> ti-new-window</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss\"></span><span class=\"icon-name\"> ti-rss</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss-alt\"></span><span class=\"icon-name\"> ti-rss-alt</span>\n                            </div>\n\n                        </div><!-- Web App Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Control Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-stop\"></span><span class=\"icon-name\"> ti-control-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-shuffle\"></span><span class=\"icon-name\"> ti-control-shuffle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-play\"></span><span class=\"icon-name\"> ti-control-play</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-pause\"></span><span class=\"icon-name\"> ti-control-pause</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-forward\"></span><span class=\"icon-name\"> ti-control-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-backward\"></span><span class=\"icon-name\"> ti-control-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-volume\"></span><span class=\"icon-name\"> ti-volume</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-forward\"></span><span class=\"icon-name\"> ti-control-skip-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-backward\"></span><span class=\"icon-name\"> ti-control-skip-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-record\"></span><span class=\"icon-name\"> ti-control-record</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-eject\"></span><span class=\"icon-name\"> ti-control-eject</span>\n                            </div>\n                        </div> <!-- Control Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Text Editor</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paragraph\"></span><span class=\"icon-name\"> ti-paragraph</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-uppercase\"></span><span class=\"icon-name\"> ti-uppercase</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-underline\"></span><span class=\"icon-name\"> ti-underline</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-text\"></span><span class=\"icon-name\"> ti-text</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-Italic\"></span><span class=\"icon-name\"> ti-Italic</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-smallcap\"></span><span class=\"icon-name\"> ti-smallcap</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list\"></span><span class=\"icon-name\"> ti-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list-ol\"></span><span class=\"icon-name\"> ti-list-ol</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-right\"></span><span class=\"icon-name\"> ti-align-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-left\"></span><span class=\"icon-name\"> ti-align-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-justify\"></span><span class=\"icon-name\"> ti-align-justify</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-center\"></span><span class=\"icon-name\"> ti-align-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-right\"></span><span class=\"icon-name\"> ti-quote-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-left\"></span><span class=\"icon-name\"> ti-quote-left</span>\n                            </div>\n\n                        </div> <!-- Text Editor -->\n\n\n\n                        <div class=\"icon-section\">\n                            <h3>Layout Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-full\"></span><span class=\"icon-name\"> ti-layout-width-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default\"></span><span class=\"icon-name\"> ti-layout-width-default</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default-alt\"></span><span class=\"icon-name\"> ti-layout-width-default-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab\"></span><span class=\"icon-name\"> ti-layout-tab</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-window\"></span><span class=\"icon-name\"> ti-layout-tab-window</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-v\"></span><span class=\"icon-name\"> ti-layout-tab-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-min\"></span><span class=\"icon-name\"> ti-layout-tab-min</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider\"></span><span class=\"icon-name\"> ti-layout-slider</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider-alt\"></span><span class=\"icon-name\"> ti-layout-slider-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-right\"></span><span class=\"icon-name\"> ti-layout-sidebar-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-none\"></span><span class=\"icon-name\"> ti-layout-sidebar-none</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-left\"></span><span class=\"icon-name\"> ti-layout-sidebar-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-placeholder\"></span><span class=\"icon-name\"> ti-layout-placeholder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu\"></span><span class=\"icon-name\"> ti-layout-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-v\"></span><span class=\"icon-name\"> ti-layout-menu-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-separated\"></span><span class=\"icon-name\"> ti-layout-menu-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-full\"></span><span class=\"icon-name\"> ti-layout-menu-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right\"></span><span class=\"icon-name\"> ti-layout-media-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right-alt\"></span><span class=\"icon-name\"> ti-layout-media-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay\"></span><span class=\"icon-name\"> ti-layout-media-overlay</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt-2\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left\"></span><span class=\"icon-name\"> ti-layout-media-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left-alt\"></span><span class=\"icon-name\"> ti-layout-media-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center\"></span><span class=\"icon-name\"> ti-layout-media-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center-alt\"></span><span class=\"icon-name\"> ti-layout-media-center-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb\"></span><span class=\"icon-name\"> ti-layout-list-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb-alt\"></span><span class=\"icon-name\"> ti-layout-list-thumb-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-post\"></span><span class=\"icon-name\"> ti-layout-list-post</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-large-image\"></span><span class=\"icon-name\"> ti-layout-list-large-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-line-solid\"></span><span class=\"icon-name\"> ti-layout-line-solid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4\"></span><span class=\"icon-name\"> ti-layout-grid4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3\"></span><span class=\"icon-name\"> ti-layout-grid3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2\"></span><span class=\"icon-name\"> ti-layout-grid2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-thumb\"></span><span class=\"icon-name\"> ti-layout-grid2-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-right\"></span><span class=\"icon-name\"> ti-layout-cta-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-left\"></span><span class=\"icon-name\"> ti-layout-cta-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-center\"></span><span class=\"icon-name\"> ti-layout-cta-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-right\"></span><span class=\"icon-name\"> ti-layout-cta-btn-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-left\"></span><span class=\"icon-name\"> ti-layout-cta-btn-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4\"></span><span class=\"icon-name\"> ti-layout-column4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3\"></span><span class=\"icon-name\"> ti-layout-column3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2\"></span><span class=\"icon-name\"> ti-layout-column2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-separated\"></span><span class=\"icon-name\"> ti-layout-accordion-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-merged\"></span><span class=\"icon-name\"> ti-layout-accordion-merged</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-list\"></span><span class=\"icon-name\"> ti-layout-accordion-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widgetized\"></span><span class=\"icon-name\"> ti-widgetized</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget\"></span><span class=\"icon-name\"> ti-widget</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget-alt\"></span><span class=\"icon-name\"> ti-widget-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list\"></span><span class=\"icon-name\"> ti-view-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list-alt\"></span><span class=\"icon-name\"> ti-view-list-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-grid\"></span><span class=\"icon-name\"> ti-view-grid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-upload\"></span><span class=\"icon-name\"> ti-upload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-download\"></span><span class=\"icon-name\"> ti-download</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-loop\"></span><span class=\"icon-name\"> ti-loop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-2\"></span><span class=\"icon-name\"> ti-layout-sidebar-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4-alt\"></span><span class=\"icon-name\"> ti-layout-grid4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3-alt\"></span><span class=\"icon-name\"> ti-layout-grid3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-alt\"></span><span class=\"icon-name\"> ti-layout-grid2-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4-alt\"></span><span class=\"icon-name\"> ti-layout-column4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3-alt\"></span><span class=\"icon-name\"> ti-layout-column3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2-alt\"></span><span class=\"icon-name\"> ti-layout-column2-alt</span>\n                            </div>\n\n\n                        </div> <!-- Layout Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Brand Icons</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr\"></span><span class=\"icon-name\"> ti-flickr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr-alt\"></span><span class=\"icon-name\"> ti-flickr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-instagram\"></span><span class=\"icon-name\"> ti-instagram</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-google\"></span><span class=\"icon-name\"> ti-google</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-github\"></span><span class=\"icon-name\"> ti-github</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-facebook\"></span><span class=\"icon-name\"> ti-facebook</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox\"></span><span class=\"icon-name\"> ti-dropbox</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox-alt\"></span><span class=\"icon-name\"> ti-dropbox-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dribbble\"></span><span class=\"icon-name\"> ti-dribbble</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-apple\"></span><span class=\"icon-name\"> ti-apple</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-android\"></span><span class=\"icon-name\"> ti-android</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-yahoo\"></span><span class=\"icon-name\"> ti-yahoo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trello\"></span><span class=\"icon-name\"> ti-trello</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stack-overflow\"></span><span class=\"icon-name\"> ti-stack-overflow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-soundcloud\"></span><span class=\"icon-name\"> ti-soundcloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis\"></span><span class=\"icon-name\"> ti-sharethis</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis-alt\"></span><span class=\"icon-name\"> ti-sharethis-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reddit\"></span><span class=\"icon-name\"> ti-reddit</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft\"></span><span class=\"icon-name\"> ti-microsoft</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft-alt\"></span><span class=\"icon-name\"> ti-microsoft-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linux\"></span><span class=\"icon-name\"> ti-linux</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-jsfiddle\"></span><span class=\"icon-name\"> ti-jsfiddle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-joomla\"></span><span class=\"icon-name\"> ti-joomla</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-html5\"></span><span class=\"icon-name\"> ti-html5</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-css3\"></span><span class=\"icon-name\"> ti-css3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-drupal\"></span><span class=\"icon-name\"> ti-drupal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wordpress\"></span><span class=\"icon-name\"> ti-wordpress</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr\"></span><span class=\"icon-name\"> ti-tumblr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr-alt\"></span><span class=\"icon-name\"> ti-tumblr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-skype\"></span><span class=\"icon-name\"> ti-skype</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-youtube\"></span><span class=\"icon-name\"> ti-youtube</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo\"></span><span class=\"icon-name\"> ti-vimeo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo-alt\"></span><span class=\"icon-name\"> ti-vimeo-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter\"></span><span class=\"icon-name\"> ti-twitter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter-alt\"></span><span class=\"icon-name\"> ti-twitter-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linkedin\"></span><span class=\"icon-name\"> ti-linkedin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest\"></span><span class=\"icon-name\"> ti-pinterest</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest-alt\"></span><span class=\"icon-name\"> ti-pinterest-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-logo\"></span><span class=\"icon-name\"> ti-themify-logo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon\"></span><span class=\"icon-name\"> ti-themify-favicon</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon-alt\"></span><span class=\"icon-name\"> ti-themify-favicon-alt</span>\n                            </div>\n\n                        </div> <!-- brand Icons -->\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'icons-cmp',
        template: __webpack_require__("../../../../../src/app/icons/icons.component.html")
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"card card-map\">\n        <div class=\"header\">\n            <h4 class=\"title\">Google Maps</h4>\n        </div>\n        <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" >\n         <marker [position]=\"[40.748817,-73.985428]\"></marker>\n           <map-circle\n               [center]=\"{lat: 40.748817, lng: -73.985428}\">\n           </map-circle>\n       </ngui-map>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        // var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        // var mapOptions = {
        //   zoom: 13,
        //   center: myLatlng,
        //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        //   styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        //
        // }
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //
        // var marker = new google.maps.Marker({
        //     position: myLatlng,
        //     title:"Hello World!"
        // });
        //
        // // To add the marker to the map, call setMap();
        // marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'maps-cmp',
        template: __webpack_require__("../../../../../src/app/maps/maps.component.html")
    })
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-pie-chart\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-9\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'notifications-cmp',
        template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html")
    })
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/trucante.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrucantePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrucantePipe = (function () {
    function TrucantePipe() {
    }
    TrucantePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 40) : 40;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TrucantePipe;
}());
TrucantePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'trucante'
    })
], TrucantePipe);

//# sourceMappingURL=trucante.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/category/category-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoryListService = (function () {
    //public url: string = 'http://localhost:1337/';
    function CategoryListService(http) {
        this.http = http;
        this.url = 'https://acess.azurewebsites.net/';
    }
    CategoryListService.prototype.add = function (category) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var Category = {
            Category: category
        };
        return this.http.post(this.url + 'category', Category, options).map(function (res) { return res.json(); }).toPromise();
    };
    CategoryListService.prototype.returnCategories = function () {
        return this.http.get(this.url + 'category').map(function (res) { return res.json(); }).toPromise()
            .catch(this.handleError);
    };
    CategoryListService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return CategoryListService;
}());
CategoryListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CategoryListService);

var _a;
//# sourceMappingURL=category-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/comanda/comanda.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComandaService = (function () {
    function ComandaService(http) {
        this.http = http;
        //public url: string = 'http://localhost:1337/';
        this.url = 'https://acess.azurewebsites.net/';
    }
    ComandaService.prototype.returnOrders = function () {
        return this.http.get(this.url + 'comanda').map(function (res) { return res.json(); }).toPromise()
            .catch(this.handleError);
    };
    ComandaService.prototype.returnOrder = function (id) {
        return this.http.get(this.url + 'comanda/' + id).map(function (res) { return res.json(); }).toPromise()
            .catch(this.handleError);
    };
    ComandaService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ComandaService;
}());
ComandaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ComandaService);

var _a;
//# sourceMappingURL=comanda.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationService = (function () {
    //public url: string = 'http://localhost:1337/';
    function NotificationService(http) {
        this.http = http;
        this.url = 'https://acess.azurewebsites.net/';
    }
    NotificationService.prototype.send = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var messaging = {
            Notification: {
                message: message
            }
        };
        return this.http.post(this.url + 'notification', messaging, options).map(function (res) { return res.json(); }).toPromise();
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/possibility/possibility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossibilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PossibilityService = (function () {
    //public url: string = 'http://localhost:1337/';
    function PossibilityService(http) {
        this.http = http;
        this.url = 'https://acess.azurewebsites.net/';
    }
    PossibilityService.prototype.add = function (possibility) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var Possibility = {
            Possibility: possibility
        };
        return this.http.post(this.url + 'possibility', Possibility, options).map(function (res) { return res.json(); }).toPromise();
    };
    PossibilityService.prototype.returnPossibilities = function () {
        return this.http.get(this.url + 'possibility').map(function (res) { return res.json(); }).toPromise()
            .catch(this.handleError);
    };
    PossibilityService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return PossibilityService;
}());
PossibilityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PossibilityService);

var _a;
//# sourceMappingURL=possibility.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products/products-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductsListService = (function () {
    function ProductsListService(http) {
        this.http = http;
        this.url = 'https://acess.azurewebsites.net/';
    }
    //public url: string = 'http://localhost:1337/';
    ProductsListService.prototype.add = function (product, possibilities) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var ne = [];
        for (var key in possibilities) {
            if (possibilities.hasOwnProperty(key)) {
                var element = possibilities[key];
                if (element > 0) {
                    ne.push(key);
                }
            }
        }
        var Product = {
            Product: product,
            Category: {
                id: product.category.id
            }, Possibility: {
                ids: ne
            }
        };
        console.log(Product);
        return this.http.post(this.url + 'product', Product, options).map(function (res) { return res.json(); }).toPromise();
    };
    ProductsListService.prototype.returnProducts = function () {
        return this.http.get(this.url + 'product').map(function (res) { return res.json(); }).toPromise()
            .catch(this.handleError);
    };
    ProductsListService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ProductsListService;
}());
ProductsListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProductsListService);

var _a;
//# sourceMappingURL=products-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/promotions/promotions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PromotionsService = (function () {
    function PromotionsService(http) {
        this.http = http;
        this.url = 'https://acess.azurewebsites.net/';
    }
    //public url: string = 'http://localhost:1337/';
    PromotionsService.prototype.add = function (promotion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var Promotion = {
            Promotion: promotion
        };
        return this.http.post(this.url + 'promotion', Promotion, options).map(function (res) { return res.json(); }).toPromise();
    };
    PromotionsService.prototype.list = function () {
        return this.http.get(this.url + 'promotion').map(function (res) { return res.json(); }).toPromise()
            .catch(this.handleError);
    };
    PromotionsService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return PromotionsService;
}());
PromotionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PromotionsService);

var _a;
//# sourceMappingURL=promotions.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <!--\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>-->\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n      <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!--<li>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"ti-panel\"></i>\n            <p>Stats</p>\n          </a>\n        </li>-->\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"ti-bell\"></i>\n\n            <p>Ações</p>\n            <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a [routerLink]=\"['/product-create']\">Adicionar Produto</a></li>\n            <li><a [routerLink]=\"['/promotion-create']\">Adicionar Promoção</a></li>\n            <li><a [routerLink]=\"['/option-create']\">Adicionar Opção</a></li>\n            <li><a [routerLink]=\"['/category-create']\">Adicionar Categoria</a></li>\n          </ul>\n        </li>\n        <!--   <li>\n          <a href=\"#\">\n            <i class=\"ti-settings\"></i>\n            <p>Settings</p>\n          </a>\n        </li>-->\n      </ul>\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"https://www.hexxar.com.br\" class=\"simple-text\">\n      <div class=\"logo-img\">\n        <img src=\"../../assets/img/logo2.png\" alt=\"\">\n      </div>\n      Hexxar\n    </a>\n  </div>\n  <ul class=\"nav\">\n    <!--<li *ngIf=\"isNotMobileMenu()\">\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"ti-panel\"></i>\n        <p>Stats</p>\n      </a>\n    </li>-->\n    <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"ti-bell\"></i>\n\n        <p>Ações</p>\n        <b class=\"caret\"></b>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li><a [routerLink]=\"['/product-create']\">Adicionar Produto</a></li>\n        <li><a [routerLink]=\"['/promotion-create']\">Adicionar Promoção</a></li>\n        <li><a [routerLink]=\"['/option-create']\">Adicionar Opção</a></li>\n        <li><a [routerLink]=\"['/category-create']\">Adicionar Categoria</a></li>\n      </ul>\n    </li>\n    <!-- <li *ngIf=\"isNotMobileMenu()\">\n      <a href=\"#\">\n        <i class=\"ti-settings\"></i>\n        <p>Settings</p>\n      </a>\n    </li>-->\n    <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\n    <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n      <a [routerLink]=\"[menuItem.path]\">\n        <i class=\"{{menuItem.icon}}\"></i>\n        <p>{{menuItem.title}}</p>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ROUTES = [
    { path: 'order-list', title: 'Pedidos', icon: 'ti-pencil-alt', class: '' },
    { path: 'products', title: 'Produtos', icon: 'ti-package', class: '' },
    { path: 'categories', title: 'Categorias', icon: 'ti-bookmark', class: '' },
    { path: 'options', title: 'Opções', icon: 'ti-view-list-alt', class: '' },
    { path: 'promotions', title: 'Promoções', icon: 'ti-target', class: '' },
    { path: 'notification', title: 'Notificações', icon: 'ti-comment-alt', class: '' }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

/*  { path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: 'table', title: 'Table List', icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography', icon: 'ti-text', class: '' },
    { path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps', icon: 'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'ti-export', class: 'active-pro' } */
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h4 class=\"title\">Striped Table</h4>\n                    <p class=\"category\">Here is a subtitle for this table</p>\n                </div>\n                <div class=\"content table-responsive table-full-width\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-md-12\">\n            <div class=\"card card-plain\">\n                <div class=\"header\">\n                    <h4 class=\"title\">Table on Plain Background</h4>\n                    <p class=\"category\">Here is a subtitle for this table</p>\n                </div>\n                <div class=\"content table-responsive table-full-width\">\n                    <table class=\"table table-hover\">\n                        <thead>\n                            <tr>\n                                <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let row of tableData2.dataRows\">\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'table-cmp',
        template: __webpack_require__("../../../../../src/app/table/table.component.html")
    })
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Paper Dashboard Headings</h4>\n                        <p class=\"category\">Created using <a href=\"https://www.google.com/fonts/specimen/Muli\">Muli</a> Font Family</p>\n                    </div>\n                    <div class=\"content\">\n\n                        <div class=\"typo-line\">\n                            <h1><p class=\"category\">Header 1</p>Paper Dashboard Heading </h1>\n                        </div>\n\n                            <div class=\"typo-line\">\n                            <h2><p class=\"category\">Header 2</p>Paper Dashboard Heading </h2>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h3><p class=\"category\">Header 3</p>Paper Dashboard Heading </h3>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h4><p class=\"category\">Header 4</p>Paper Dashboard Heading </h4>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h5><p class=\"category\">Header 5</p>Paper Dashboard Heading </h5>\n                        </div>\n                         <div class=\"typo-line\">\n                            <h6><p class=\"category\">Header 6</p>Paper Dashboard Heading </h6>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Quote</p>\n                            <blockquote>\n                             <p>\n                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                             </p>\n                             <small>\n                             Steve Jobs, CEO Apple\n                             </small>\n                            </blockquote>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Muted Text</p>\n                            <p class=\"text-muted\">\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <!--\n                             there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\n                             -->\n                            <p class=\"category\">Coloured Text</p>\n                            <p class=\"text-primary\">\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-info\">\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-success\">\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-warning\">\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-danger\">\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'typography-cmp',
        template: __webpack_require__("../../../../../src/app/typography/typography.component.html")
    })
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h3 class=\"title\">Paper Dashboard</h3>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Paper Dashboard Pro.</p>\n                        <br>\n                    </div>\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\n                        <table class=\"table\">\n                            <thead>\n                                <th></th>\n                                <th class=\"text-center\">Free</th>\n                                <th class=\"text-center\">PRO</th>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Components</td>\n                                    <td>16</td>\n                                    <td>160</td>\n                                </tr>\n                                <tr>\n                                    <td>Plugins</td>\n                                    <td>4</td>\n                                    <td>15</td>\n                                </tr>\n                                <tr>\n                                    <td>Example Pages</td>\n                                    <td>4</td>\n                                    <td>25</td>\n                                </tr>\n                                <tr>\n                                    <td>Documentation</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>SASS Files</td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Login/Register/Lock Pages</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Premium Support</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>Free</td>\n                                    <td>Just $49</td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                    </td>\n                                    <td>\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/paper-dashboard-pro-angular/?ref=pd-free-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'upgrade-cmp',
        template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html")
    })
], UpgradeComponent);

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-5\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"assets/img/background.jpg\" alt=\"...\" />\n        </div>\n        <div class=\"content\">\n          <div class=\"author\">\n            <img class=\"avatar border-white\" src=\"assets/img/faces/face-2.jpg\" alt=\"...\" />\n            <h4 class=\"title\">Chet Faker<br />\n              <a href=\"#\"><small>@chetfaker</small></a>\n            </h4>\n          </div>\n          <p class=\"description text-center\">\n            \"I like the way you work it <br> No diggity <br> I wanna bag it up\"\n          </p>\n        </div>\n        <hr>\n        <div class=\"text-center\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-md-offset-1\">\n              <h5>12<br /><small>Files</small></h5>\n            </div>\n            <div class=\"col-md-4\">\n              <h5>2GB<br /><small>Used</small></h5>\n            </div>\n            <div class=\"col-md-3\">\n              <h5>24,6$<br /><small>Spent</small></h5>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">Team Members</h4>\n        </div>\n        <div class=\"content\">\n          <ul class=\"list-unstyled team-members\">\n            <li>\n              <div class=\"row\">\n                <div class=\"col-xs-3\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/faces/face-0.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-xs-6\">\n                  DJ Khaled\n                  <br />\n                  <span class=\"text-muted\"><small>Offline</small></span>\n                </div>\n\n                <div class=\"col-xs-3 text-right\">\n                  <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"row\">\n                <div class=\"col-xs-3\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/faces/face-1.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-xs-6\">\n                  Creative Tim\n                  <br />\n                  <span class=\"text-success\"><small>Available</small></span>\n                </div>\n\n                <div class=\"col-xs-3 text-right\">\n                  <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"row\">\n                <div class=\"col-xs-3\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/faces/face-3.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-xs-6\">\n                  Flume\n                  <br />\n                  <span class=\"text-danger\"><small>Busy</small></span>\n                </div>\n\n                <div class=\"col-xs-3 text-right\">\n                  <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-8 col-md-7\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">Edit Profile</h4>\n        </div>\n        <div class=\"content\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <div class=\"form-group\">\n                  <label>Company</label>\n                  <input type=\"text\" class=\"form-control border-input\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control border-input\" placeholder=\"Username\" value=\"michael23\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input type=\"email\" class=\"form-control border-input\" placeholder=\"Email\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" class=\"form-control border-input\" placeholder=\"Company\" value=\"Chet\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" class=\"form-control border-input\" placeholder=\"Last Name\" value=\"Faker\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control border-input\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control border-input\" placeholder=\"City\" value=\"Melbourne\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control border-input\" placeholder=\"Country\" value=\"Australia\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control border-input\" placeholder=\"ZIP Code\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"5\" class=\"form-control border-input\" placeholder=\"Here can be your description\" value=\"Mike\">\nOh so, your weak rhyme\nYou doubt I'll bother, reading into it\nI'll probably won't, left to my own devices\nBut that's the difference in our opinions.</textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Update Profile</button>\n            </div>\n            <div class=\"clearfix\"></div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'user-cmp',
        template: __webpack_require__("../../../../../src/app/user/user.component.html")
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map