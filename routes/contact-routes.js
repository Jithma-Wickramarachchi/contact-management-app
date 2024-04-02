const express = require("express");
const router = express.Router();
const {getContacts, getContactById, updateContact, createContacts, deleteContact} = require("../controllers/contact-controllers") 

router.route("/")
    .get(getContacts)
    .post(createContacts);

router.route("/:id")
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;