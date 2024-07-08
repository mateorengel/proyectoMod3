import { DataTypes } from "sequelize";
import { Status } from "../constants/index.js";
import {sequelize} from '../database/database.js'
import { Task } from "./tasks.js";
import { encriptar } from "../common/bycript.js";

export const User=sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'Ingrese nombre de usuario',
            },
        },
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'Ingrese password',
            },
        },
    },
    status:{
        type:DataTypes.STRING,
        DefaultValue:Status.ACTIVE,
        validate:{
            isIn:{
                args:[[Status.ACTIVE, Status.INACTIVE]],
                msg:`Debe ser ${Status.ACTIVE} o ${Status.INACTIVE}`,
            },
        },
    },
});

//un usuario tiene muchas tareas
User.hasMany(Task);

Task.belongsTo(User);
/* User.hasMany(Task,{
    foreingKey:'user_Id',
    sourceKey:'id',
}
);
//pero una tarea tiene un solo usuario
Task.belongsTo(User,{
    foreingKey:'user_Id',
    sourceKey:'id',
}); */

User.beforeCreate(async(user)=>{
    try {
      user.password=await encriptar(user.password) 
    } catch (error) {
        logger.error(error.message)
        throw new Error('Error al encriptar la contraseña');
    }
})

User.beforeUpdate(async(user)=>{
    try {
      user.password=await encriptar(user.password) 
    } catch (error) {
        logger.error(error.message)
        throw new Error('Error al encriptar la contraseña');
    }
})