async function getTasks(req,res){
    res.send('Lista de tareas');
}
async function createTask(req,res){
    res.send('Crear una tarea');
}

export default{
    getTasks,
    createTask,
};