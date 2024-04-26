import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-nav-bar',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header-nav-bar.component.html',
  styleUrl: './header-nav-bar.component.scss'
})

export class HeaderNavBarComponent {

  public isChecked: Boolean = false;

  public switchState() {
    console.log('this.isChecked before: ', this.isChecked);
    this.isChecked = !this.isChecked
    console.log('this.isChecked: ', this.isChecked);
  }
}
