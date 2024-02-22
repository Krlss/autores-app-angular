import { Component, OnInit, Output } from '@angular/core';
import { ResponseBooks } from '@app/author/interfaces/author';
import { FavsService } from '@app/author/services/favs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  authors: string[] = [];
  books: ResponseBooks[] = [];

  constructor(private favService: FavsService) {}

  ngOnInit(): void {
    this.favService.getFavoritesAuthors().subscribe((authors) => {
      this.authors = authors;
    });

    this.favService.getFavoritesBooks().subscribe((books) => {
      this.books = books;
    });
  }
}
