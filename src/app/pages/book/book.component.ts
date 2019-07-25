import { Component, OnInit } from '@angular/core';
import data from '../../../data/book-data';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public data;
  constructor() { }

  ngOnInit() {
    this.data = data;
    console.log(this.data);
  }

}
