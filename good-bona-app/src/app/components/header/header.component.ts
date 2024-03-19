import { Component } from '@angular/core';
import { SocialComponent } from '../shared/social/social.component';
import { ConnectionComponent } from './componets/connection/connection.component';
import { HeaderNavBarComponent } from './componets/header-nav-bar/header-nav-bar.component';
import { LogoComponent } from './componets/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, HeaderNavBarComponent, SocialComponent, ConnectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
