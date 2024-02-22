import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresListComponent } from './pages/autores-list/autores-list.component';
import { AutorObrasComponent } from './pages/autor-obras/autor-obras.component';
import { VerAutorObraComponent } from './pages/ver-autor-obra/ver-autor-obra.component';
import { AuthorRoutingModule } from './author-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CardAuthorsFavComponent } from './components/card-authors-fav/card-authors-fav.component';
import { CardBooksFavComponent } from './components/card-books-fav/card-books-fav.component';

@NgModule({
  declarations: [
    AutoresListComponent,
    AutorObrasComponent,
    VerAutorObraComponent,
    FavoritesComponent,
    CardAuthorsFavComponent,
    CardBooksFavComponent,
  ],
  imports: [CommonModule, AuthorRoutingModule, SharedModule, RouterModule],
})
export class AuthorModule {}
