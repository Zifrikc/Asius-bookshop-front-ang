import { UsersPerfilComponent } from './Pages/Users/users-perfil/users-perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Pages/index/index.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

//Admin
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { AdminIndexComponent } from './Pages/Admin/admin-index/admin-index.component';
import { SliderbarComponent } from './Pages/Admin/sliderbar/sliderbar.component';
import { PerfilComponent } from './Pages/Admin/perfil/perfil.component';
import { UsersComponent } from './Pages/Admin/users/users.component';
import { ViewBooksComponent } from './Pages/Admin/Books/view-books/view-books.component';
import { EditBooksComponent } from './Pages/Admin/Books/edit-books/edit-books.component';
import { AddBooksComponent } from './Pages/Admin/Books/add-books/add-books.component';
import { ViewEventsComponent } from './Pages/Admin/Events/view-events/view-events.component';
import { EditEventsComponent } from './Pages/Admin/Events/edit-events/edit-events.component';
import { AddEventsComponent } from './Pages/Admin/Events/add-events/add-events.component';
import { UsersIndexComponent } from './Pages/Users/users-index/users-index.component';
import { BooksComponent } from './Pages/Users/Books/books/books.component';
import { BooksDetailsComponent } from './Pages/Users/Books/books-details/books-details.component';
import { BooksBuyComponent } from './Pages/Users/Books/books-buy/books-buy.component';
import { NavsComponent } from './Pages/Users/navs/navs.component';


//Users




const routes: Routes = [
  {path: '' , component: IndexComponent, pathMatch: 'full'},
  {path : 'login', component : LoginComponent,pathMatch : 'full'},
  {path : 'signup', component : SignupComponent,pathMatch : 'full'},

  {path : 'admin' ,component : DashboardComponent,
  children:[
    {
      path : '' ,component : AdminIndexComponent,
    },
    {
      path : 'sliderbar' ,component : SliderbarComponent,
    },
    {
      path : 'perfil' ,component : PerfilComponent,
    },
    {
      path : 'view-users' ,component : UsersComponent,
    },
    {
      path : 'view-books' ,component : ViewBooksComponent,
    },
    {
      path : 'edit-books' ,component : EditBooksComponent,
    },
    {
      path : 'add-books' ,component : AddBooksComponent,
    },
    {
      path : 'view-events' ,component : ViewEventsComponent,
    },
    {
      path : 'edit-events' ,component : EditEventsComponent,
    },
    {
      path : 'add-events' ,component : AddEventsComponent,
    },

   ] },


   {path : 'user' ,component : NavsComponent,
   children:[
    {
      path : '' ,component : UsersIndexComponent,
    },

    {
      path : 'books-view-user' ,component : UsersIndexComponent,
    },

    {
      path : 'books-details' ,component : BooksDetailsComponent,
    },

    {
      path : 'books-buy' ,component : BooksBuyComponent,
    },

    {
      path : 'users-perfil' ,component : UsersPerfilComponent,
    }

  ]},




   { path: '**', component: PageNotFoundComponent,pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
