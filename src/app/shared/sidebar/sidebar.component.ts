import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
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
  isAuth = false;

  constructor(
    private favService: FavsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favService.getFavoritesAuthors().subscribe((authors) => {
      this.authors = authors;
    });

    this.favService.getFavoritesBooks().subscribe((books) => {
      this.books = books;
    });

    this.isAuth = this.authService.auth();
  }

  cerrarSesion() {
    const res = confirm(
      '¿Estás seguro de cerrar sesión?, se perderán tus favoritos'
    );

    if (res) {
      this.favService.removeAllFavoritesAuthors();
      this.favService.removeAllFavoritesBooks();
      this.authService.logout();
      this.router.navigate(['/auth/login']);
    }
  }
}
