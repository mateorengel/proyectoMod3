import logger from "../logs/logger.js";
import bycript from 'bcrypt'
import 'dotenv/config';
export const encriptar= async (text)=>{
    try {
        const saltRounds=+process.env.BCRYPT_SALT_ROUNDS;
        return await bycript.hash(text, saltRounds);
    } catch (error) {
        logger.error(error.message)
        throw new Error('Error al encriptar');
    }
};
export const comparar=async (text,hash)=>{
      try {
        return await bycript.compare(text,hash);
      } catch (error) {
        logger.error(error.message)
        throw new Error('Error al encriptar');
      }  
}