import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseBooks } from '@app/author/interfaces/author';
import { AuthorService } from '@app/author/services/author.service';
import { FavsService } from '@app/author/services/favs.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-autor-obras',
  templateUrl: './autor-obras.component.html',
  styleUrl: './autor-obras.component.css',
})
export class AutorObrasComponent implements OnInit {
  data: ResponseBooks[] = [];
  author: string = '';
  booksFavorites: ResponseBooks[] = [];
  loading = true;

  constructor(
    private authorService: AuthorService,
    private activedRoute: ActivatedRoute,
    private favService: FavsService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({ author }) => {
          this.author = author;
          return this.authorService.getBooksByAuthor(author);
        })
      )
      .subscribe((data) => {
        this.data = data;
        this.removeFromListFavs();
        this.loading = false;
      });

    this.favService.getFavoritesBooks().subscribe((books) => {
      this.booksFavorites = books;
    });
  }

  addToFavorites(book: ResponseBooks) {
    this.favService.addFavoriteBook(book);

    this.removeFromListFavs();
  }

  removeFromListFavs() {
    this.data = this.data.filter((book) => {
      return !this.booksFavorites.some((fav) => fav.title === book.title);
    });
  }
}
