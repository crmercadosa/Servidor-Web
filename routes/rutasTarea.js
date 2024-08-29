const express = require('express');
const todoController = require('../controllers/rutas');
/*
function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({error: "Unauthorized"});
    }
    const decodedtoken = authUtils.verifyToken(token);
    if(!decodedtoken){
        return res.status(401).json({error: 'Unauthorized'});
    }
    req.user = decodedtoken;
    next();
  }  
*/
// Funciones del CRUD
//-------------------------------------------------------------------------------//
// Nueva ruta de prueba
router.get('/prueba', (req, res) => {
    res.send('El servidor API Rest funciona correctamente.');
});

//-------------------------------------------------------------------------------//
// Agregar un nuevo elemento
router.post('/agregar',  todoController.agregarTarea);
//-------------------------------------------------------------------------------//
// Obtener todas las tareas
router.get('/obtenerTarea', todoController.obtenerTarea);
//-------------------------------------------------------------------------------//
// Obtener una tarea en especifico por ID
router.get('/buscarTarea/:id', todoController.obtenerTareaID);
//-------------------------------------------------------------------------------//
// Actualizar un elemento por ID
router.put('/actualizarTarea/:id',todoController.actualizarTareID)
//-------------------------------------------------------------------------------//
// Eliminar un elemento por ID
router.delete('/eliminarTarea/:id', todoController.eliminarTareaID);
//-------------------------------------------------------------------------------//
// Cantidad total de tareas
router.get('/obtenerTodasTareas',todoController.getCantidadTareas);
//-------------------------------------------------------------------------------//
// Cantidad total de tareas completas y pendientes
router.get('/obtTareasCYP',todoController.getCantTareasCYP);
//-------------------------------------------------------------------------------//
// Tareas de la mas reciente a la mas antigua
router.get('/obtTareasReciente',todoController.obtenerTareaReciente);
//-------------------------------------------------------------------------------//
// Tareas de la mas reciente a la mas antigua
router.get('/obtTareasAntiguo',todoController.obtenerTareaAntiguo);
//-------------------------------------------------------------------------------//
//router.post('/login', todoController.login);

module.exports = router;
