import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ohmainpane',
  templateUrl: './ohmainpane.component.html',
  styleUrls: ['./ohmainpane.component.css']
})
export class OhmainpaneComponent implements OnInit {
  appName = '';
  apps = [];

  constructor() {}

  ngOnInit() {
  }

  onAddApplication(event: Event) {
      this.apps.push(this.appName);
  }

  onDeleteAppication(app : string) {
    this.apps.slice(this.apps.indexOf(app),1);
  }

}
