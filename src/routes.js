import exp from "constants";
import { Router } from "express";

const router = Router();


let variables = {
    titulo: "Mi Pagina WEB",
    parrafo: "HOla a todos asdsadasd asd sad as"
}




router.get('/', (req, res) => {res.render('index', variables)})
router.get('/hola', (req, res) => {res.render('hola')})


export default router;