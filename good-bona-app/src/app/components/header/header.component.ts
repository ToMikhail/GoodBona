import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenWidthService } from '../../services/screen-width.service';
import { SocialComponent } from '../shared/social/social.component';
import { ConnectionComponent } from './componets/connection/connection.component';
import { HeaderNavBarComponent } from './componets/header-nav-bar/header-nav-bar.component';
import { LogoComponent } from './componets/logo/logo.component';
import { ScreenSize } from '../../services/screen-width.service';
import { MenuButtonComponent } from '../shared/menu-button/menu-button.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    HeaderNavBarComponent,
    SocialComponent,
    ConnectionComponent,
    MenuButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private screenWidthService = inject(ScreenWidthService);

  public screenWidth$: Observable<ScreenSize>

  constructor() {
    this.screenWidth$ = this.screenWidthService.getScreenWidth();
    // screenWidth.subscribe((width: any) => console.log('width:',  width))
  }
}
