import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavsService } from '@app/author/services/favs.service';

@Component({
  selector: 'app-card-authors-fav',
  templateUrl: './card-authors-fav.component.html',
  styleUrl: './card-authors-fav.component.css',
})
export class CardAuthorsFavComponent {
  @Input() authors: string[] = [];

  constructor(private favService: FavsService) {}

  removeFavoriteAuthor(author: string) {
    this.favService.removeFavoriteAuthor(author);
  }

  removeAllFavoritesAuthors() {
    this.favService.removeAllFavoritesAuthors();
  }
}
