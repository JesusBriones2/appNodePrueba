import express from 'express';
import {pool} from './base.js';
import {PORT} from './config.js';

const app = express();

app.get('/', async (req, res) => {
    const [users] = await pool.query('select * from users');
    
    console.log(users);
    
    res.send("Hola mundo");
})


app.listen(PORT)
console.log(`Servidor en el puerto ${PORT}`);

