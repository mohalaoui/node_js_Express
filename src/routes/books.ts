import express from "express"
import * as booksController from "../controllers/booksController";

const router = express.Router();


// books with pagination 
router.get("/", booksController.getPageBooks);

// books without pagination
// router.get("/", booksController.getBooks);

router.get("/:id", booksController.getBook);

router.put("/:id", booksController.putBook);

router.delete("/:id", booksController.putBook);

router.post("/", booksController.postBook);


export default router;
