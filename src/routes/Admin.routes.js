const express = require('express')
const router = express.Router()
const { AdminController } = require("../controllers");
const { list, listUser, deleteUser, updateUser, createUser, createFol } =
	new AdminController();


//router.use(bodyParser.json())

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/users', list);

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', listUser);

// DELETES A USER FROM THE DATABASE
router.delete('/:id', deleteUser);

//UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', updateUser);

router.post('/create', createUser);

router.post('/createFol', createFol);

module.exports = router
