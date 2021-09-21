import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './MyComponents/add-book/add-book.component';
import { GetBookComponent } from './MyComponents/get-book/get-book.component';
import { LibraryComponent } from './MyComponents/library/library.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';

const routes: Routes = [
  
    
    {path:'addbook',component:AddBookComponent},
    {path:'getbook',component:GetBookComponent},
    {path:'',redirectTo:"/addbook",pathMatch:"full"}, 
    {path:'**',component:NotFoundComponent},
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
