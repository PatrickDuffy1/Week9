import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
})
export class ConnachtPage implements OnInit {

  constructor() { }

  counties:string[] = ["Mayo", "Galway", "Sligo", "Roscommon", "Leitrim"];

  ngOnInit() {
  }

}
