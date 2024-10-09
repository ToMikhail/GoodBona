import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/main/pages/about-us/about-us.component';
import { ContactComponent } from './components/main/pages/contact/contact.component';
import { HomeComponent } from './components/main/pages/home/home.component';
import { MenuComponent } from './components/main/pages/menu/menu.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  // { path: '**', component: ErrorComponent },
];
