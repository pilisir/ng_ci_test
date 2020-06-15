import { Component, OnInit } from '@angular/core';
import { Demo2Service } from 'src/app/service/demo2.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(
    private demo2service: Demo2Service
  ) { }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }

  isOn = false;

  ngOnInit(): void {
  }

  clicked() {
    // console.log(this.demo2service.getValue('str'));
    // if (this.demo2service.getValue('str') === 'str') {
    this.isOn = !this.isOn;
    // }
  }
}
