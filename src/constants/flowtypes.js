// @flow
export type Author = {
  id?: string | number,
  firstName: string,
  lastName: string,
  createdAt?: string,
  updatedAt?: string,
}

export type Book = {
  id?: string | number,
  title: string,
  author: Author,
  createdAt?: string,
  updatedAt?: string,
}

export type User = {
  id?: string | number,
  email: string,
  createdAt?: string,
  updatedAt?: string,
}
