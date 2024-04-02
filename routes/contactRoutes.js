const express = require("express");
const router = express.Router();

router.route("/").get((req, res)=>{
    res.status(200).json({
        "message": "Get all contacts"
    })}
);
router.route("/:id").get((req, res)=>{
    res.status(200).json({
        "message": `Get contacts by id(${req.params.id})`
    })}
);
router.route("/").post((req, res)=>{
    res.status(201).json({
        "message": "Save a contact"
    })}
);
router.route("/:id").put((req, res)=>{
    res.status(200).json({
        "message": `Update a contact by id(${req.params.id})`
    })}
);
router.route("/:id").delete((req, res)=>{
    res.status(200).json({
        "message": `Delete a contact by id(${req.params.id})`
    })}
);

module.exports = router;