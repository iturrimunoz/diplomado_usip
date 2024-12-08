import bcrypt from 'bcrypt';
import logger from '../logs/logger.js';

export const encriptar = async (texto) => {
    try{
       const saltRounds = +process.env.BCRYPT_SALT_ROUNDS
       return await bcrypt.hash(texto, saltRounds) 

    } catch(error) {
        logger.error(error.mesasge);
        throw new Error ('Error al encriptar');
    }
};

export const comparar = async (texto, hash) => {
    try{
        return await bcrypt.compare(texto, hash);
    } catch(error){  
        logger.error(error.message);
        throw new Error ('Error al comparar'); 
    }
     
}