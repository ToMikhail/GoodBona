import { Component } from '@angular/core';
import { HeaderNavBarComponent } from './componets/header-nav-bar/header-nav-bar.component';
import { LogoComponent } from './componets/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, HeaderNavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
