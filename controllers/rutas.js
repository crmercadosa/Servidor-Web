//npm run

//const authUtils = require('../middleware/authUtils');



let cadena = [];

  // a) Crear una nueva tarea.
  exports.agregarTarea = (req, res) => {
    const {title, description, completed=false, createdAt=new Date()} = req.body;
  
    const nuevoTodo = {
      idTask: cadena.length+1,
      title: title,
      description: description,
      completed: completed,
      createdAt: createdAt
    };
    cadena.push(nuevoTodo);
    res.json(nuevoTodo);
  };
  
    
  // b) Leer todas las tareas.
  exports.obtenerTarea = (req, res) => {
    res.json(cadena);
  };

  // c) Leer una tarea especifica por su ID.
  exports.obtenerTareaID = (req, res) => {
    const idTask = parseInt(req.params.id); // Convertir el ID a número
  
    // Busca la tarea por su ID en el arreglo 'cadena'
    const tareaEncontrada = cadena.find(todo => todo.idTask === idTask);
  
    if (tareaEncontrada) {
      res.json(tareaEncontrada);
    } else {
      res.status(404).json({ error: 'No se encontro la tarea' });
    }
  };
  
  // d) Actualizar tarea existente
  exports.actualizarTareID = (req, res) => {
    const idTask = parseInt(req.params.id);
    const { title, createdAt, description, completed } = req.body;
    // Busca la tarea por su ID en el arreglo 'cadena'
    const tareaIndex = cadena.findIndex(todo => todo.idTask === idTask);
    if (tareaIndex !== -1) {
      // Actualiza la tarea si se encuentra
      cadena[tareaIndex] = {
        ...cadena[tareaIndex],
        title: title || cadena[tareaIndex].title,
        createdAt: createdAt || cadena[tareaIndex].createdAt,
        description: description || cadena[tareaIndex].description,
        completed: completed || cadena[tareaIndex].completed
      };
      res.json(cadena[tareaIndex]);
    } else {
      res.status(404).json({ error: 'No se encontro la tarea' });
    }
  };
  
  // e) Eliminar una tarea por su ID.
  exports.eliminarTareaID = (req, res) => {
    const idTask = parseInt(req.params.id);
  
    // Busca la tarea por su ID en el arreglo 'cadena'
    const tareaIndex = cadena.findIndex(todo => todo.idTask === idTask);
  
    if (tareaIndex !== -1) {
      // Elimina la tarea si se encuentra
      const eliminarTarea = cadena.splice(tareaIndex, 1);
      res.json(eliminarTarea[0]);
    } else {
      res.status(404).json({ error: 'No se encontro la tarea' });
    }
  };
//--------------------------------------------------------------------------------------------------- 
  //3. Implementar una funcionalidad para calcular estadisticas sobre las tareas.
  // a) Cantidad total de tareas.
  exports.getCantidadTareas = (req, res) => {
    const cantidadTareas = cadena.length;
    res.json({ cantidadTareas });
  };

  // b) Leer todas las tareas ordenadas por el ID del más reciente a la más antigua.
  exports.obtenerTareaReciente = (req, res) => {
    const tareasOrdenadas = cadena.sort((a, b) => {
      b.idTask - a.idTask;
    });
    res.json(tareasOrdenadas);
  };

  // c) Leer todas las tareas ordenadas por el ID de la más antigua a la más reciente.
  exports.obtenerTareaAntiguo = (req, res) => {
    const tareasOrdenadas = cadena.sort((a, b) => {
      return  b.idTask - a.idTask;
    });
    res.json(tareasOrdenadas);
  };

  // d) Cantidad total de tareas.
  exports.getCantTareasCYP = (req, res) => {
    const cantTCompletas = todos.filter(tarea => tarea.completed === 'Completado ').length;
    const cantTendientes = todos.filter(tarea => tarea.completed === 'Pendiente').length;
  
    res.json({
      completas: cantTCompletas,
      pendientes: cantTendientes
    });
  };
/*
  exports.login = (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    //const {username, password} = req.body

    if(username === 'admin' && password === 'admin'){
        const token = authUtils.generateToken({id: 1, username: username});
        res.json({token});
    }else{
        res.json(401).json({error: "Unauthorized"});
    }
  };*/

