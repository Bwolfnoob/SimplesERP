webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(452);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/main.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(618),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_superior_menu_superior_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_main_principal_main_principal_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_menu_right_menu_right_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_menu_left_menu_left_component__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_superior_menu_superior_component__["a" /* MenuSuperiorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_main_principal_main_principal_component__["a" /* MainPrincipalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_menu_right_menu_right_component__["a" /* MenuRightComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_menu_left_menu_left_component__["a" /* MenuLeftComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(619),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/footer.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPrincipalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPrincipalComponent = (function () {
    function MainPrincipalComponent() {
    }
    MainPrincipalComponent.prototype.ngOnInit = function () {
    };
    MainPrincipalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-main-principal',
            template: __webpack_require__(620),
            styles: [__webpack_require__(614)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainPrincipalComponent);
    return MainPrincipalComponent;
}());
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/main-principal.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuLeftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuLeftComponent = (function () {
    function MenuLeftComponent() {
    }
    MenuLeftComponent.prototype.ngOnInit = function () {
    };
    MenuLeftComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-menu-left',
            template: __webpack_require__(621),
            styles: [__webpack_require__(615)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuLeftComponent);
    return MenuLeftComponent;
}());
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/menu-left.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuRightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuRightComponent = (function () {
    function MenuRightComponent() {
    }
    MenuRightComponent.prototype.ngOnInit = function () {
    };
    MenuRightComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-menu-right',
            template: __webpack_require__(622),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuRightComponent);
    return MenuRightComponent;
}());
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/menu-right.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSuperiorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuSuperiorComponent = (function () {
    function MenuSuperiorComponent() {
    }
    MenuSuperiorComponent.prototype.ngOnInit = function () {
    };
    MenuSuperiorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-menu-superior',
            template: __webpack_require__(623),
            styles: [__webpack_require__(617)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuSuperiorComponent);
    return MenuSuperiorComponent;
}());
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/menu-superior.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/WorkSpace/Facebook/FacebookClone/src/environment.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "\r\n/** Esconder os Scrolls */\r\n::-webkit-scrollbar\r\n{           \r\nwidth: 0px;\r\n}\r\n::-webkit-scrollbar-track-piece\r\n{\r\nbackground-color: transparent;\r\n-webkit-border-radius: 6px;\r\n}\r\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "footer {        \r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: #f5f5f5;\r\n     text-align: center;\r\n     position: fixed;\r\n}"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style: none;\r\n    padding: 5px;\r\n}\r\n\r\n.contato{\r\n  padding: 5px;\r\n}\r\n\r\n.lastLogin {\r\n        float: right;\r\n    padding-top: 5px;\r\n}\r\n\r\n.link {\r\n    text-decoration: none;\r\n}\r\n\r\n.contato:hover{\r\n  background-color: lightblue;\r\n}\r\n.image {\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "#flipkart-navbar {\r\n    background-color: #2874f0;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.row {\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n}\r\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<app-menu-superior></app-menu-superior>\n\n\n<app-menu-left class=\"col-lg-2\" style=\"padding: 10px;\"></app-menu-left>\n\n\n<span class=\"col-lg-8\" style=\"padding: 10px;height: 1000px;overflow: scroll\">\n    <app-main-principal ></app-main-principal>\n    </span>\n\n<span class=\"col-lg-2\" style=\"top:50px;right: 10px;\"><app-menu-right></app-menu-right></span>\n\n<app-footer></app-footer>"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer col-lg-12\">\n<div class=\"container\">\n<p class=\"text-muted \">Place sticky footer content here.</p>\n</div>\n</footer>"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Primary</div>\n  Desta maneira, a execução dos pontos do programa aponta para a melhoria de todos os recursos funcionais envolvidos.</div>\n<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">Success</div>\n  No entanto, não podemos esquecer que a contínua expansão de nossa atividade é uma das consequências do sistema de formação\n  de quadros que corresponde às necessidades.</div>\n<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">Info</div>\n  Gostaria de enfatizar que o desenvolvimento contínuo de distintas formas de atuação oferece uma interessante oportunidade\n  para verificação dos paradigmas corporativos.</div>\n<div class=\"panel panel-warning\">\n  <div class=\"panel-heading\">Warning</div>\n  Caros amigos, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar\n  na mudança das condições inegavelmente apropriadas.</div>\n<div class=\"panel panel-danger\">\n  <div class=\"panel-heading\">Danger</div>\n  Desta maneira, a consulta aos diversos militantes possibilita uma melhor visão global dos relacionamentos verticais entre\n  as hierarquias.</div>\n  <div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Primary</div>\n  Desta maneira, a execução dos pontos do programa aponta para a melhoria de todos os recursos funcionais envolvidos.</div>\n<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">Success</div>\n  No entanto, não podemos esquecer que a contínua expansão de nossa atividade é uma das consequências do sistema de formação\n  de quadros que corresponde às necessidades.</div>\n<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">Info</div>\n  Gostaria de enfatizar que o desenvolvimento contínuo de distintas formas de atuação oferece uma interessante oportunidade\n  para verificação dos paradigmas corporativos.</div>\n<div class=\"panel panel-warning\">\n  <div class=\"panel-heading\">Warning</div>\n  Caros amigos, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar\n  na mudança das condições inegavelmente apropriadas.</div>\n<div class=\"panel panel-danger\">\n  <div class=\"panel-heading\">Danger</div>\n  Desta maneira, a consulta aos diversos militantes possibilita uma melhor visão global dos relacionamentos verticais entre\n  as hierarquias.</div>\n  <div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Primary</div>\n  Desta maneira, a execução dos pontos do programa aponta para a melhoria de todos os recursos funcionais envolvidos.</div>\n<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">Success</div>\n  No entanto, não podemos esquecer que a contínua expansão de nossa atividade é uma das consequências do sistema de formação\n  de quadros que corresponde às necessidades.</div>\n<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">Info</div>\n  Gostaria de enfatizar que o desenvolvimento contínuo de distintas formas de atuação oferece uma interessante oportunidade\n  para verificação dos paradigmas corporativos.</div>\n<div class=\"panel panel-warning\">\n  <div class=\"panel-heading\">Warning</div>\n  Caros amigos, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar\n  na mudança das condições inegavelmente apropriadas.</div>\n<div class=\"panel panel-danger\">\n  <div class=\"panel-heading\">Danger</div>\n  Desta maneira, a consulta aos diversos militantes possibilita uma melhor visão global dos relacionamentos verticais entre\n  as hierarquias.</div>\n  <div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Primary</div>\n  Desta maneira, a execução dos pontos do programa aponta para a melhoria de todos os recursos funcionais envolvidos.</div>\n<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">Success</div>\n  No entanto, não podemos esquecer que a contínua expansão de nossa atividade é uma das consequências do sistema de formação\n  de quadros que corresponde às necessidades.</div>\n<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">Info</div>\n  Gostaria de enfatizar que o desenvolvimento contínuo de distintas formas de atuação oferece uma interessante oportunidade\n  para verificação dos paradigmas corporativos.</div>\n<div class=\"panel panel-warning\">\n  <div class=\"panel-heading\">Warning</div>\n  Caros amigos, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar\n  na mudança das condições inegavelmente apropriadas.</div>\n<div class=\"panel panel-danger\">\n  <div class=\"panel-heading\">Danger</div>\n  Desta maneira, a consulta aos diversos militantes possibilita uma melhor visão global dos relacionamentos verticais entre\n  as hierarquias.</div>"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item active\">\n    Cras justo odio\n  </a>\n  <a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n  <a href=\"#\" class=\"list-group-item\">Morbi leo risus</a>\n  <a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac</a>\n  <a href=\"#\" class=\"list-group-item\">Vestibulum at eros</a>\n</div>"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<div data-testid=\"chat_sidebar\">\n  <div></div>\n  <div style=\"border-left: 2px inset\">\n    <ul >\n      <li *ngFor=\"let item of [0,1,2,3,4,5,6,7,8,9]\" class=\"contato\" data-id=\"100002651682442\">\n        <a class=\"link\" href=\"#\">\n            <div class=\"image\">\n              <div size=\"32\" class=\"_55lt\" style=\"width: 32px; height: 32px;\">\n                <img src=\"https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.0-1/p32x32/13707748_974643242634056_2635517795921635185_n.jpg?oh=eb1dbb2333300caccc2e3ef33dca362d&amp;oe=596C1E31\"\n                  width=\"32\" height=\"32\" alt=\"\" class=\"img\"></div>\n            </div>\n            <div class=\"lastLogin\">\n                <div >4m</div>\n            </div>\n            <div class=\"name\" style=\"display: inline-block\">Lucas Abreu</div>\n        </a>\n      </li>     \n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div id=\"flipkart-navbar\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-2\">               \n                <h1 style=\"margin:0px;\">SocialClone</h1>\n            </div>          \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[636]);
//# sourceMappingURL=main.bundle.map