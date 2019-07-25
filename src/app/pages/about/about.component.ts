import { Component, OnInit } from '@angular/core';
import data from '../../../data/about-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public data;
  constructor() { }

  ngOnInit() {
    this.data = data;
  }

}
