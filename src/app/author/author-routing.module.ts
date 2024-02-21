import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutoresListComponent } from './pages/autores-list/autores-list.component';
import { AutorObrasComponent } from './pages/autor-obras/autor-obras.component';
import { VerAutorObraComponent } from './pages/ver-autor-obra/ver-autor-obra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'authors',
        component: AutoresListComponent,
      },
      {
        path: 'author/:id/works',
        component: AutorObrasComponent,
      },
      {
        path: 'author/:id/works/:idWork',
        component: VerAutorObraComponent,
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
