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
var index_1 = require('../shared/index');
var HeroComponent = (function () {
    function HeroComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroName = '';
        this.heroes = [];
    }
    HeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroComponent.prototype.addHeroName = function () {
        var _this = this;
        if (!this.heroName) {
            return;
        }
        this.heroService.addHeroes(this.heroName.trim())
            .subscribe(function (hero) {
            _this.heroName = '';
            _this.heroes.push(hero);
        }, function (error) { return _this.errorMessage = error; });
    };
    HeroComponent.prototype.deleteHero = function (hero) {
        var _this = this;
        this.heroService
            .deleteHero(hero.id)
            .subscribe(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
        });
    };
    HeroComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/hero/detail', id]);
    };
    HeroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-hero',
            templateUrl: 'hero.component.html',
            styleUrls: ['hero.component.css'],
        }), 
        __metadata('design:paramtypes', [index_1.HeroService, router_1.Router])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvL2hlcm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsc0JBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFXOUM7SUFZRSx1QkFBbUIsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhuRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFRa0QsQ0FBQztJQUt2RSxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUN6QixTQUFTLENBQ1IsVUFBQSxNQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUEsQ0FBQSxDQUFDLEVBQy9CLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQ3hDLENBQUM7SUFDTixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUFBLGlCQVVDO1FBVEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUFBLE1BQU0sQ0FBQztRQUFBLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QyxTQUFTLENBQ1IsVUFBQSxJQUFJO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQ3hDLENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLElBQVU7UUFBckIsaUJBTUM7UUFMQyxJQUFJLENBQUMsV0FBVzthQUNYLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ25CLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQXpESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQXNERixvQkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFkscUJBQWEsZ0JBcUR6QixDQUFBIiwiZmlsZSI6ImFwcC9oZXJvL2hlcm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtIZXJvfSBmcm9tICcuLi9zaGFyZWQvbW9kdWxlcy9oZXJvJztcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1oZXJvJyxcbiAgdGVtcGxhdGVVcmw6ICdoZXJvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hlcm8uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaGVyb05hbWU6IHN0cmluZyA9ICcnO1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBoZXJvZXM6IEhlcm9bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIZXJvQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAqIEhlcm9TZXJ2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hlcm9TZXJ2aWNlfSBoZXJvU2VydmljZSAtIFRoZSBpbmplY3RlZCBIZXJvU2VydmljZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoZXJvU2VydmljZTogSGVyb1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGVyb2VzIE9uSW5pdFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRIZXJvZXMoKTtcbiAgfVxuXG4gIGdldEhlcm9lcygpIHtcbiAgICB0aGlzLmhlcm9TZXJ2aWNlLmdldEhlcm9lcygpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBoZXJvZXM9PiB7dGhpcy5oZXJvZXMgPSBoZXJvZXN9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICk7XG4gIH1cblxuICBhZGRIZXJvTmFtZSgpIHtcbiAgICBpZighdGhpcy5oZXJvTmFtZSkge3JldHVybjt9XG4gICAgdGhpcy5oZXJvU2VydmljZS5hZGRIZXJvZXModGhpcy5oZXJvTmFtZS50cmltKCkpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGhlcm8gPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhlcm9OYW1lID0gJyc7IFxuICAgICAgICAgICAgICB0aGlzLmhlcm9lcy5wdXNoKGhlcm8pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgICAgICk7XG4gIH1cblxuICBkZWxldGVIZXJvKGhlcm86IEhlcm8pOiB2b2lkIHtcbiAgICB0aGlzLmhlcm9TZXJ2aWNlXG4gICAgICAgIC5kZWxldGVIZXJvKGhlcm8uaWQpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGVyb2VzID0gdGhpcy5oZXJvZXMuZmlsdGVyKGggPT4gaCAhPT0gaGVybyk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZ290b0RldGFpbChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaGVyby9kZXRhaWwnLCBpZF0pO1xuICB9XG5cbn1cbiJdfQ==
