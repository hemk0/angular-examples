import { Inject, Injectable, OnDestroy, Optional, PLATFORM_ID, PlatformRef } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Request } from 'express';
import { BehaviorSubject, distinctUntilChanged, filter, map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {
  private resizeObserver: ResizeObserver | undefined;
  private _currentScreen$ = new BehaviorSubject<number | null>(null);

  isBrowser: boolean;
  isServer: boolean;


  constructor(
    @Inject(PLATFORM_ID) private platformId: PlatformRef,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isServer = !this.isBrowser;
  }

}

export enum Screens {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  UNKNOWN = 'unknown'
}
