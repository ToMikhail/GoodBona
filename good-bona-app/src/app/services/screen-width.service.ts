import { Injectable } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

export type ScreenSize = 'mobile' | 'tablet' | 'laptops' | 'desktop';

@Injectable({
  providedIn: 'root',
})
export class ScreenWidthService {
  getScreenWidth(): Observable<any> {
    return fromEvent(window, 'resize').pipe(
      map((event: any): ScreenSize => {

        if (event.target.innerWidth > 1200) return 'desktop'
        else if (event.target.innerWidth > 768) return 'laptops'
        else if (event.target.innerWidth > 480) return 'tablet'
        else return 'mobile';
      })
    );
  }
}
