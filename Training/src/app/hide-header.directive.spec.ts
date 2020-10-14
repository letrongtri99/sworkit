import { HideHeaderDirective } from './hide-header.directive';
import { Directive, HostListener, Input, Renderer2, OnInit, ElementRef } from '@angular/core';
import { DomController } from '@ionic/angular'
describe('HideHeaderDirective', () => {
  it('should create an instance', () => {
    const directive = new HideHeaderDirective();
    expect(directive).toBeTruthy();
  });
});
