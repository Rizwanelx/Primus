import { Component,OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lat: number = 30.7333;
  lng: number = 76.7794;
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}




