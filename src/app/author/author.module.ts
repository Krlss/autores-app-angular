import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresListComponent } from './pages/autores-list/autores-list.component';
import { AutorObrasComponent } from './pages/autor-obras/autor-obras.component';
import { VerAutorObraComponent } from './pages/ver-autor-obra/ver-autor-obra.component';
import { AuthorRoutingModule } from './author-routing.module';

@NgModule({
  declarations: [
    AutoresListComponent,
    AutorObrasComponent,
    VerAutorObraComponent,
  ],
  imports: [CommonModule, AuthorRoutingModule],
})
export class AuthorModule {}
