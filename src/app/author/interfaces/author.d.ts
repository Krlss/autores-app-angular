export interface ResponseAuthors {
  authors: string[];
}

export interface ResponseBooks {
  author: string;
  linecount: string;
  title: string;
  lines: string[];
}

export interface ResponseBooksWithId extends ResponseBooks {
  id: string;
}
