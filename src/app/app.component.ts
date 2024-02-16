import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'filter_using_button';

  listData: any;
  constructor() {
    this.listData = [
      {
        name: 'ranjith',
        age: 25,
        phone: 9524414213,
        location: 'tvmalai',
      },
      {
        name: 'ranjith',
        age: 22,
        phone: 123456789,
        location: 'chennai',
      },
      {
        name: 'Hari',
        age: 42,
        phone: 66666,
        location: 'pondicheri',
      },
      {
        name: 'Hari',
        age: 12,
        phone: 222,
        location: 'Vellore',
      },
      {
        name: 'Dinesh',
        age: 16,
        phone: 222,
        location: 'Chennai',
      },
      {
        name: 'Dinesh',
        age: 22,
        phone: 5555,
        location: 'tvmalai',
      },
    ];
  }

  ranjith() {
    this.listData = this.listData.filter((item: any) => item.name === "ranjith")
  }
  hari() {
    this.listData = this.listData.filter((item: any) => item.phone === 222)
  }
  dinesh() {
    this.listData = this.listData.filter((item: any) => item.location === "tvmalai")
  }
}
