import Book from "../models/book.model"

export const getBooks = async () => {
    return Book.find();
}

export const getPageBooks = async (page:any, limit:any) => {
    const queryPage = parseInt(page || "1");
    const queryLimit = parseInt(limit || "5");
    return Book.paginate({}, { page : queryPage, limit : queryLimit });
}

export const getBook = async (id:string) => {
    return Book.findById(id);
}

export const putBook = async (id:String) => {
    return Book.findByIdAndUpdate(id);
}

export const deleteBook = async (id:any) => {
    Book.deleteOne(id);
}

export const postBook = async (body:string) => {
    const book = new Book(body);
    return book.save();
}