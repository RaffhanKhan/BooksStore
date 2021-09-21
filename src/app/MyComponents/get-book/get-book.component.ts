import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/addservice.service';
import { Books } from 'src/app/books';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {

  data:any  ;
  constructor(private _service:AddserviceService) { }

  ngOnInit(): void {

    
        this._service.getBook().subscribe((res)=>{
          console.log(res)
        this.data=res},
        error=>console.log("error occured"));
  }

}
