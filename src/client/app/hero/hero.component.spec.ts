import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  async
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http, HttpModule
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { HeroService } from '../shared/index';
import { HeroModule } from './hero.module';

export function main() {
  describe('Home component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, HeroModule],
        declarations: [TestComponent],
        providers: [
          HeroService,
          BaseRequestOptions,
          MockBackend,
          {provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
              return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
        ]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            let heroInstance = fixture.debugElement.children[0].componentInstance;
            let heroDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(heroInstance.heroService).toEqual(jasmine.any(HeroService));
            expect(heroDOMEl.querySelectorAll('li').length).toEqual(0);

            heroInstance.newName = 'Minko';
            heroInstance.addName();

            fixture.detectChanges();

            expect(heroDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(heroDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-hero></sd-hero>'
})
class TestComponent { }
