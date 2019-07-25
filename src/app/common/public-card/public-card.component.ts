import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-card',
  templateUrl: './public-card.component.html',
  styleUrls: ['./public-card.component.css']
})
export class PublicCardComponent implements OnInit {
  @Input() data;
  public dataObj;
  constructor() { }

  ngOnInit() {
    this.dataObj = this.data;
  }

}
