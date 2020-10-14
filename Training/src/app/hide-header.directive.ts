import { HtmlTagDefinition } from '@angular/compiler';
import { Directive, HostListener, Input, Renderer2, OnInit, ElementRef } from '@angular/core';
import { DomController } from '@ionic/angular'

@Directive({
  selector: '[appHideHeader]',
})
export class HideHeaderDirective implements OnInit {  

  @Input("header") header: any;
  private lastY = 0;
  headerHeight: number;
  private mainContent: HTMLDivElement;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
    private element: ElementRef,
  ) { }

  ngOnInit(): void {
    this.header = this.header.el;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    this.mainContent = this.element.nativeElement.querySelector('.main-content');
    this.domCtrl.read(() => {
      let translateAmt, scaleAmt;
      if ($event.detail.scrollTop > this.lastY) {
        translateAmt = -($event.detail.scrollTop / 2);
	      scaleAmt = 1;
      } else {
        translateAmt = 0;
        scaleAmt = -$event.detail.scrollTop / this.headerHeight + 1;
      }

      this.domCtrl.write(() => {
        this.renderer.setStyle(this.header, 'transform', 'translate3d(0,'+translateAmt+'px,0) scale('+scaleAmt+','+scaleAmt+')');
        this.renderer.setStyle(this.mainContent, 'transform', 'translate3d(0, '+(-$event.detail.scrollTop) + 'px, 0');
      });
    })
    

  }
}
