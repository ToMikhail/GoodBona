import { Component } from '@angular/core';
import { WorkingHoursComponent } from './components/working-hours/working-hours.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [WorkingHoursComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
