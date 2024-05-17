//importar el/los modulo/s que necesitamos
const express = require('express');
const app = express();

//Asignar un puerto
const port = 4000;

const jsonAlumnos = require('./data/customers.json')

app.get('/', (req, res) => {
    // res.send('<h1>Home</h1>');
    res.sendFile('./static/index.html', {root: __dirname})
})

app.get('/gato',(req, res)=> {
     res.json(jsonAlumnos)
    // res.send(JSON.stringify(jsonAlumnos)) -> manera antigua, express lo hace directamente arriba
})
app.use(express.static( 'static'));

app.use((req, res)=>{
    // res.status(404).send("<h1>404 Not found</h1>")
    res.sendFile('./static/404.html', {root: __dirname})
})


app.listen(port, () => {
    console.log(`Servidor express en htpp://localhost:${port}`);
})