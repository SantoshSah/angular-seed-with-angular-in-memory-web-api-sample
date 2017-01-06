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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var index_1 = require('./toolbar/index');
var index_2 = require('./navbar/index');
var index_3 = require('./name-list/index');
var index_4 = require('./services/index');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [index_3.NameListService]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(index_4.InMemoryHeroDataService, { delay: 500, passThruUnknownUrl: true })
            ],
            declarations: [index_1.ToolbarComponent, index_2.NavbarComponent],
            exports: [index_1.ToolbarComponent, index_2.NavbarComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDBDQUFxQywyQkFBMkIsQ0FBQyxDQUFBO0FBRWpFLHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUFnQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELHNCQUF3QyxrQkFBa0IsQ0FBQyxDQUFBO0FBZ0IzRDtJQUFBO0lBT0EsQ0FBQztJQU5RLG9CQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyx1QkFBZSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBaEJIO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLHFCQUFZO2dCQUNaLGdEQUFvQixDQUFDLE9BQU8sQ0FBQywrQkFBdUIsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUcsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUM7YUFDOUY7WUFDSCxZQUFZLEVBQUUsQ0FBQyx3QkFBZ0IsRUFBRSx1QkFBZSxDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLHdCQUFnQixFQUFFLHVCQUFlO2dCQUN6QyxxQkFBWSxFQUFFLG1CQUFXLEVBQUUscUJBQVksQ0FBQztTQUMzQyxDQUFDOztvQkFBQTtJQVFGLG1CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxvQkFBWSxlQU94QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9pbmRleCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9pbmRleCc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuL25hbWUtbGlzdC9pbmRleCc7XG5pbXBvcnQgeyBJbk1lbW9yeUhlcm9EYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsIFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtb3J5SGVyb0RhdGFTZXJ2aWNlLCB7IGRlbGF5OiA1MDAgLCBwYXNzVGhydVVua25vd25Vcmw6IHRydWV9KVxuICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1Rvb2xiYXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb29sYmFyQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXX0=
