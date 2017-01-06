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
var common_1 = require('@angular/common');
var hero_component_1 = require('./hero.component');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_routing_module_1 = require('./hero-routing.module');
var shared_module_1 = require('../shared/shared.module');
var index_1 = require('../shared/index');
var HeroModule = (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, hero_routing_module_1.HeroRoutingModule, shared_module_1.SharedModule],
            declarations: [hero_component_1.HeroComponent, hero_detail_component_1.HeroDetailComponent],
            exports: [hero_component_1.HeroComponent, hero_detail_component_1.HeroDetailComponent],
            providers: [index_1.HeroService]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvL2hlcm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsc0NBQW9DLHlCQUF5QixDQUFDLENBQUE7QUFDOUQsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsc0JBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFROUM7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSx1Q0FBaUIsRUFBRSw0QkFBWSxDQUFDO1lBQ3hELFlBQVksRUFBRSxDQUFDLDhCQUFhLEVBQUUsMkNBQW1CLENBQUM7WUFDbEQsT0FBTyxFQUFFLENBQUMsOEJBQWEsRUFBRSwyQ0FBbUIsQ0FBQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1NBQ3pCLENBQUM7O2tCQUFBO0lBQ3dCLGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLGtCQUFVLGFBQUksQ0FBQSIsImZpbGUiOiJhcHAvaGVyby9oZXJvLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSGVyb0NvbXBvbmVudCB9IGZyb20gJy4vaGVyby5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm9Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9oZXJvLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSGVyb1JvdXRpbmdNb2R1bGUsIFNoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hlcm9Db21wb25lbnQsIEhlcm9EZXRhaWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSGVyb0NvbXBvbmVudCwgSGVyb0RldGFpbENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0hlcm9TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIZXJvTW9kdWxlIHsgfVxuIl19
