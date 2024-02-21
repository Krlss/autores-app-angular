import { Component, OnInit } from '@angular/core';
import { AuthorService } from '@app/author/services/author.service';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrl: './autores-list.component.css',
})
export class AutoresListComponent implements OnInit {
  authors: string[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(({ authors }) => {
      this.authors = authors;
    });
  }

  addToFavorites(author: string) {}
}
