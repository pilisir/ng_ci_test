import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.scss']
})
export class ChildDemoComponent implements OnInit {

  @Input() obj: any;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.selected.emit(this.obj);
  }
}
