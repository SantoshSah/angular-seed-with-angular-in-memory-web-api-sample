"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_component_1 = require('./hero.component');
var hero_detail_component_1 = require('./hero-detail.component');
var HeroRoutingModule = (function () {
    function HeroRoutingModule() {
    }
    HeroRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'hero', component: hero_component_1.HeroComponent },
                    { path: 'hero/detail/:id', component: hero_detail_component_1.HeroDetailComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroRoutingModule);
    return HeroRoutingModule;
}());
exports.HeroRoutingModule = HeroRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvL2hlcm8tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCxzQ0FBb0MseUJBQXlCLENBQUMsQ0FBQTtBQVc5RDtJQUFBO0lBQWlDLENBQUM7SUFUbEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtvQkFDMUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO2lCQUM1RCxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O3lCQUFBO0lBQytCLHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQix5QkFBaUIsb0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvaGVyby9oZXJvLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZXJvQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJ2hlcm8nLCBjb21wb25lbnQ6IEhlcm9Db21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2hlcm8vZGV0YWlsLzppZCcsIGNvbXBvbmVudDogSGVyb0RldGFpbENvbXBvbmVudCB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSGVyb1JvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
