const authorController = require("../controllers/authorController");

const router = require("express").Router();


// add author

router.post("/", authorController.addAuthor );


router.get("/", authorController.getAllAuthor);


router.get("/:id", authorController.getAnAuthor);

router.put("/:id", authorController.updateAnAuthor);

router.delete("/:id", authorController.deleteAuthor);


module.exports = router;    