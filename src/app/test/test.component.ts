import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private myService: MyServiceService) {}

  callService() {
    this.myService.toDo("Hello Test Component");
  }
}
