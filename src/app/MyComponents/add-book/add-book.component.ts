import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AddserviceService } from 'src/app/addservice.service';


import { Books } from 'src/app/books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})


export class AddBookComponent implements OnInit {

book =  new Books();
  
  msg!: String;
  constructor(private _route:Router,private _service:AddserviceService) { 
     
  }

 
  
  ngOnInit(): void {
  }

  addBookFormSubmit() {
    this._service.addBook(this.book).subscribe(
      data=>{
        console.log("Data added sucessfully");
        
        this._route.navigate(['/addbook']);
        this.msg="Form Submitted"

        
      },
      
      error=>console.log("Error in adding data"));
       
      

  }
   
}
