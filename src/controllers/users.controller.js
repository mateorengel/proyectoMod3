import {User} from '../models/user.js';
import logger from '../logs/logger.js';
async function getUsers(req,res){
    try {
        const users = await User.findAll({
            attributes:['id','username','password','status'],
            order:['id','DESC'],
            where: {
                where:{
                    status: Status.ACTIVE
                }
            }
        })
        res.json(users)
    } catch (error) {
        logger.error(error.message)
        res.status(500).json({
            message:error.message
        })
    }
}
async function createUser(req,res){
    //res.send('Crear de usuarios');
    /* const body=req.body;
    const username=body.username;
    const password=body.password; */
    
    const{username,password}=req.body;
    try {

        logger.info('[userController] createUser: '+ username)
        const user=await User.create({
            username,
            password,
        });
        return res.json(user);
    } catch (error) {
        logger.error(error.message)
        res.status(500).json({
            message:error.message
        })
    }
   
}

export default{
    getUsers,
    createUser,
};