import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlatformDetectorService } from '../@services/platform-detector.service';

@Directive({
  selector: '[appInViewPort]',
  standalone: true
})
export class InViewPortDirective implements AfterViewInit, OnDestroy {
  @Input() inViewportOptions: InViewportOptions = { rootMargin: '0px', root: null, threshold: 0.0 };

  @Output() inViewportChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _observer: IntersectionObserver | undefined;

  constructor(private _elementRef: ElementRef, private pd: PlatformDetectorService) {
  }

  ngAfterViewInit(): void {
    if (this.pd.isServer) return;

    const options = this.inViewportOptions;

    this._observer = new IntersectionObserver(this._callback, options);

    this._observer.observe(this._elementRef.nativeElement);
  }

  ngOnDestroy() {
    this._observer?.disconnect();
  }

  private _callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      this.inViewportChange.emit(entry.isIntersecting);
    });
  };
}

interface InViewportOptions {
  root?: HTMLElement | null,
  rootMargin?: string;
  threshold?: number;
}
