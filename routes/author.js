const authorController = require("../controllers/authorController");

const router = require("express").Router();


// add author

router.post("/", authorController.addAuthor );


router.get("/", authorController.getAllAuthor);


router.get("/:id", authorController.getAnAuthor);


module.exports = router;    