import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  public cafeName: string = 'GoodBona '

}
