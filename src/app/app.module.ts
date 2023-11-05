import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { IndexComponent } from './Pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {UsersComponent} from './Pages/Admin/users/users.component';
import {PerfilComponent} from './Pages/Admin/perfil/perfil.component';
import {DashboardComponent} from './Pages/Admin/dashboard/dashboard.component';
import {SliderbarComponent}from './Pages/Admin/sliderbar/sliderbar.component';
import {PageNotFoundComponent} from './Pages/page-not-found/page-not-found.component';
import {AdminIndexComponent} from './Pages/Admin/admin-index/admin-index.component';
import { AddBooksComponent } from './Pages/Admin/Books/add-books/add-books.component';
import { EditBooksComponent } from './Pages/Admin/Books/edit-books/edit-books.component';
import { ViewBooksComponent } from './Pages/Admin/Books/view-books/view-books.component';
import { AddEventsComponent } from './Pages/Admin/Events/add-events/add-events.component';
import { EditEventsComponent } from './Pages/Admin/Events/edit-events/edit-events.component';
import { ViewEventsComponent } from './Pages/Admin/Events/view-events/view-events.component';
import { UsersIndexComponent } from './Pages/Users/users-index/users-index.component';
import { BooksComponent } from './Pages/Users/Books/books/books.component';
import { BooksDetailsComponent } from './Pages/Users/Books/books-details/books-details.component';
import { BooksBuyComponent } from './Pages/Users/Books/books-buy/books-buy.component';
import { NavsComponent } from './Pages/Users/navs/navs.component';
import { UsersPerfilComponent } from './Pages/Users/users-perfil/users-perfil.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
    UsersComponent,
    PerfilComponent,
    DashboardComponent,
    SliderbarComponent,
    PageNotFoundComponent,
    AdminIndexComponent,
    AddBooksComponent,
    EditBooksComponent,
    ViewBooksComponent,
    AddEventsComponent,
    EditEventsComponent,
    ViewEventsComponent,
    UsersIndexComponent,
    BooksComponent,
    BooksDetailsComponent,
    BooksBuyComponent,
    NavsComponent,
    UsersPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatTreeModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
