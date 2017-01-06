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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var hero_service_1 = require('../shared/services/hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .subscribe(function () { return _this.goBack(); });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-detail',
            templateUrl: 'hero-detail.component.html',
            styleUrls: ['hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvL2hlcm8tZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JDLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUd6RCw2QkFBNEIsaUNBQWlDLENBQUMsQ0FBQTtBQVE5RDtJQUdFLDZCQUNVLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLFFBQWtCO1FBRmxCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQztJQUVKLHNDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNkLFNBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXZDLENBQXVDLENBQUM7YUFDdEUsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0NBQUksR0FBSjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQTVCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBRTtTQUMzQyxDQUFDOzsyQkFBQTtJQXdCRiwwQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksMkJBQW1CLHNCQXVCL0IsQ0FBQSIsImZpbGUiOiJhcHAvaGVyby9oZXJvLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBIZXJvIH0gICAgICAgIGZyb20gJy4uL3NoYXJlZC9tb2R1bGVzL2hlcm8nO1xuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvaGVyby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnaGVyby1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ2hlcm8tZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICdoZXJvLWRldGFpbC5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBoZXJvOiBIZXJvO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuaGVyb1NlcnZpY2UuZ2V0SGVybygrcGFyYW1zWydpZCddKSlcbiAgICAgIC5zdWJzY3JpYmUoaGVybyA9PiB0aGlzLmhlcm8gPSBoZXJvKTtcbiAgfVxuXG4gIHNhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5oZXJvU2VydmljZS51cGRhdGUodGhpcy5oZXJvKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdvQmFjaygpKTtcbiAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxufVxuXG5cbi8qXG5Db3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi8iXX0=
