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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.heroesUrl = '../services/heroes';
    }
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .map(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.addHeroes = function (name) {
        return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .map(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.deleteHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .map(function () { return null; });
    };
    HeroService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvaGVyby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBUTdDO0lBVUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBUnRCLFlBQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDNUQsY0FBUyxHQUFHLG9CQUFvQixDQUFDO0lBT1IsQ0FBQztJQU9sQyw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTthQUNYLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbkIsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBZixDQUFlLENBQUM7YUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLElBQVk7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQzthQUMzRSxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQzthQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLEVBQUksQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQ3ZELEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQzthQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxTQUFTLFNBQUksRUFBSSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFLTyxpQ0FBVyxHQUFuQixVQUFxQixLQUFVO1FBRzdCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBM0RIO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUE0RGIsa0JBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLG1CQUFXLGNBMkR2QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvaGVyby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVycywgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQge0hlcm99IGZyb20gJy4uL21vZHVsZXMvaGVybyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVyb1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gIHByaXZhdGUgaGVyb2VzVXJsID0gJy4uL3NlcnZpY2VzL2hlcm9lcyc7ICAvLyBVUkwgdG8gd2ViIGFwaVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEhlcm9TZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXG4gICAqIEBwYXJhbSB7SHR0cH0gaHR0cCAtIFRoZSBpbmplY3RlZCBIdHRwLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCBHRVQgcmVxdWVzdCBmb3IgdGhlIEpTT04gcmVzb3VyY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSBUaGUgT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG5cbiAgZ2V0SGVybyhpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIZXJvPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SGVyb2VzKClcbiAgICAgICAgICAgICAgIC5tYXAoaGVyb2VzID0+IGhlcm9lcy5maW5kKGhlcm8gPT4gaGVyby5pZCA9PT0gaWQpKTtcbiAgfVxuXG4gIGdldEhlcm9lcygpOiBPYnNlcnZhYmxlPEhlcm9bXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaGVyb2VzVXJsKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGFkZEhlcm9lcyhuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEhlcm8+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5oZXJvZXNVcmwsIEpTT04uc3RyaW5naWZ5KHtuYW1lOiBuYW1lfSksIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHVwZGF0ZShoZXJvOiBIZXJvKTogT2JzZXJ2YWJsZTxIZXJvPiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5oZXJvZXNVcmx9LyR7aGVyby5pZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQodXJsLCBKU09OLnN0cmluZ2lmeShoZXJvKSwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXG4gICAgICAubWFwKCgpID0+IGhlcm8pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBkZWxldGVIZXJvKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhlcm9lc1VybH0vJHtpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKCkgPT4gbnVsbClcbiAgfVxuICBcbiAgLyoqXG4gICAgKiBIYW5kbGUgSFRUUCBlcnJvclxuICAgICovXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIC8vIFdlJ2QgYWxzbyBkaWcgZGVlcGVyIGludG8gdGhlIGVycm9yIHRvIGdldCBhIGJldHRlciBtZXNzYWdlXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgfVxufVxuXG4iXX0=
