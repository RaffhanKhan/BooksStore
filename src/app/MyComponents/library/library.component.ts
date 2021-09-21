import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/addservice.service';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
