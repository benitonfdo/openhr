import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ohmainpane',
  templateUrl: './ohmainpane.component.html',
  styleUrls: ['./ohmainpane.component.css']
})
export class OhmainpaneComponent implements OnInit {
  appName = '';
  constructor() {}

  ngOnInit() {
  }

  onAddApp(event: Event) {
      this.appName = (<HTMLInputElement>event.target).value;
  }
}
