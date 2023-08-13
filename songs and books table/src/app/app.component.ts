import {Component} from '@angular/core';
import {Item} from "../types/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Book: string = 'Book';
  Song: string = 'Song';

  books: Item[] = [];
  songs: Item[] = [];

  constructor() {

  }

  ngOnInit() {

  }

  onItemAdded(item) {
    if (item.type === 'Book') {
      this.books.push(item)
    } else {
      this.songs.push(item)
    }
  }


  onItemDelete(item) {
    if (item.type === 'Book') {
      this.books = this.books.filter(book => book.name != item.name)
    } else {
      this.songs = this.songs.filter(song => song.name != item.name)
    }

  }
}
