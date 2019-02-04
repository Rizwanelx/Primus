import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automation-services',
  templateUrl: './automation-services.component.html',
  styleUrls: ['./automation-services.component.css']
})
export class AutomationServicesComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

}
