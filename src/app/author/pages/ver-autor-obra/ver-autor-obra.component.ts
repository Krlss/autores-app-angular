import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseBooks } from '@app/author/interfaces/author';
import { AuthorService } from '@app/author/services/author.service';
import { FavsService } from '@app/author/services/favs.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-autor-obra',
  templateUrl: './ver-autor-obra.component.html',
  styleUrl: './ver-autor-obra.component.css',
})
export class VerAutorObraComponent implements OnInit {
  title: string = '';
  author: string = '';
  linecount: number = 0;
  lines: string[] = [];

  constructor(
    private authorService: AuthorService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({ author, title }) => {
          console.log({ author, title });
          return this.authorService.getBookByAuthorAndTitle(author, title);
        })
      )
      .subscribe((data) => {
        const { author, linecount, lines, title } = data[0];
        this.author = author;
        this.linecount = +linecount;
        this.lines = lines;
        this.title = title;
      });
  }
}
