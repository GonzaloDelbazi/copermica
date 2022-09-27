import { Component } from '@angular/core';
import { BaseCrudService } from './services/base-crud-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'copermica-task';
  constructor(public service: BaseCrudService<any>) {

  }
}

