import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/books.service';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {
  books:any []=[];
  events:any [] =[];
  constructor(private bookservice: BooksService, private eveservice: EventsService) { }

  ngOnInit(): void {
    this.bookservice.listarLibro().subscribe(
      (dato:any) => {
        this.books = dato;
        console.log(this.books);
      }
    ),
    this.eveservice.listarEvento().subscribe(
      (dato:any) => {
        this.events = dato;
        console.log(this.events);
      }
    )
  }

  }
