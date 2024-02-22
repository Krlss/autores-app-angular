import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { AuthorService } from '@app/author/services/author.service';
import { FavsService } from '@app/author/services/favs.service';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrl: './autores-list.component.css',
})
export class AutoresListComponent implements OnInit {
  authors: string[] = [];
  loading = true;
  isAuth = false;

  constructor(
    private authorService: AuthorService,
    private favService: FavsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(({ authors }) => {
      this.authors = authors;
      this.loading = false;
      this.removeFromListFavs();
    });
    this.isAuth = this.authService.auth();
  }

  addToFavorites(author: string) {
    this.favService.addFavoriteAuthor(author);

    this.removeFromListFavs();
  }

  removeFromListFavs() {
    this.authors = this.authors.filter(
      (author) => !this.favService.isFavoriteAuthor(author)
    );
  }
}
