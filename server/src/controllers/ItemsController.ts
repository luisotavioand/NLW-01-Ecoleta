import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        //serialização de dados
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                titulo: item.titulo,
                image_url: `http://192.168.0.11:3333/uploads/${item.image}`,
            }
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;