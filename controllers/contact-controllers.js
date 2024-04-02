//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({
        "message": "Get all contacts"
    })
}

//@desc Get contact by Id
//@route GET /api/contacts/:id
//@access public
const getContactById = (req, res) => {
    res.status(200).json({
        "message": `Get contacts by id(${req.params.id})`
    })
}

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContacts = (req, res) => {
    console.log("The request body : ", req.body)
    res.status(201).json({
        "message": "Save a contact"
    })
}

//@desc Update contact by id
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({
        "message": `Update a contact by id(${req.params.id})`
    })
}

//@desc Delete contacts
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({
        "message": `Delete a contact by id(${req.params.id})`
    })
}

module.exports = { getContacts, getContactById, createContacts, updateContact, deleteContact }