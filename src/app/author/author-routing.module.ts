import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresListComponent } from './pages/autores-list/autores-list.component';
import { AutorObrasComponent } from './pages/autor-obras/autor-obras.component';
import { VerAutorObraComponent } from './pages/ver-autor-obra/ver-autor-obra.component';
import { FavoritesComponent } from '@app/author/pages/favorites/favorites.component';
import { favGuard } from './guards/fav.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'authors',
        component: AutoresListComponent,
      },
      {
        path: 'author/:author/books',
        component: AutorObrasComponent,
      },
      {
        path: 'author/:author/books/:title',
        component: VerAutorObraComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [favGuard],
      },
      {
        path: '**',
        redirectTo: 'authors',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
