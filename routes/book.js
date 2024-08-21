const bookController = require("../controllers/bookController");


const router = require("express").Router();


// ADD a Book


router.post("/", bookController.addABook); 

router.get("/", bookController.getAllBook);


router.get("/:id", bookController.getABook);


router.put("/:id", bookController.updateBook); 

router.delete("/:id", bookController.deleteBook);


module.exports = router;    