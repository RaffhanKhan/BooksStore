import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';


@Injectable({
  providedIn: 'root'
})
export class AddserviceService {


  private baseURL="http://localhost:4202/add";
  constructor(private _http:HttpClient) { 
  }

  getBook():Observable<Books[]>{
    return this._http.get<Books[]>("http://localhost:4202/get");
  }
  
  addBook(book:Books):Observable<any>{
    return this._http.post<any>("http://localhost:4202/add",book);
  }
}
