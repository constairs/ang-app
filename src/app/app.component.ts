import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Item {
  by: string;
  depends: string;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  item: any;
  name: string = '';
  age: number;
  isUnknown: boolean = false;

  text: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const testUrl = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty';
    this.http.get(testUrl).subscribe((data) => {
      console.log(data);
      this.item = data;
    })
  }

  getDateString(time: number): string {
    const dateObj = new Date(time);
    const date = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() < 10 ? '0' + (dateObj.getUTCMonth() + 1) : dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear();
    return `${date}.${month}.${year}`;
  }

  onChange(checked: boolean) {
    this.isUnknown = checked;
  }
}
