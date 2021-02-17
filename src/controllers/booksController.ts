import { Request, Response } from "express";
import Book from "../models/book.model";
import * as bookService from "../services/booksService"


export const getBooks = async (req: Request, resp: Response) => {
    try{
        const book = await bookService.getBooks();
        resp.send(book);
    }catch (err) {
        resp.status(500).send(err);
    }
};

export const getBook =  async (req: Request, resp: Response) => {
    try{
        const book = await bookService.getBook(req.params.id);
        resp.send(book);
    }catch (err) {
        resp.status(500).send(err);
    }
};

export const putBook =  async (req: Request, resp: Response) => {
    try{
        const updatedBook = await bookService.putBook(req.params.id);
        resp.send(updatedBook);
    }catch (err) {
        resp.status(500).send(err);
    }
};

export const deleteBook = async (req: Request, resp: Response) => {
    try{
        await bookService.deleteBook({ _id: req.params.id });
        resp.send("Book deleted successfuly...");
    }catch (err) {
        resp.status(500).send(err);
    }
};

export const postBook =  async (req: Request, resp: Response) => {
    try{
        const savedBook = await bookService.postBook({...req.body});
        resp.send(savedBook);
    }catch (err) {
        resp.status(500).send(err);
    }
};

// paginate books
export const getPageBooks = async (req: Request, resp: Response) => {
  try {
    const books = await bookService.getPageBooks(req.query.page, req.query.limit);
    resp.send(books);
  } catch (err) {
    resp.status(500).send(err);
  }
};

