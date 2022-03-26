import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStudentHighLight]',
})
export class StudentHighLightDirective implements OnInit {
  @Input() defaultColor: string = 'red';
  @Input() highLightColor: string = 'transparent';
  @Input() mouseLeaveColor: string = 'red';

  @HostBinding('style.color') color: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    // this.backgroundColor = 'green';
    // this.color = 'red';
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseenter') mouseenter(dataEvent: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
    // this.color = 'blue';
    this.color = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(dataEvent: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    // this.color = 'red';
    this.color = this.mouseLeaveColor;
  }
}
