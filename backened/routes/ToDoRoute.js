const  {Router} = require("express");
const { getToDo, saveToDo, updateToDo, DeleteToDo } = require("../controllers/ToDoController");

const router = Router()

 router.get('/', getToDo)
 router.post('/save', saveToDo)
 router.patch('/update', updateToDo)
 router.delete('/delete/:id', DeleteToDo)

 module.exports = router;