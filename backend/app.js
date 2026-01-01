import express from 'express'

//Crear instancia de la aplicacion
const app = express()


const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Pedro' }
]


//Definir una ruta de ejemplo
app.get('/', (req, res) => {
    res.send('<h1>Hola desde el backend!</h1>')
})

app.get('/usuarios', (req, res) => {



    res.json(usuarios)
})

app.get('/usuarios/:id', (req, res) => {

    const userId = req.params.id


    res.json(usuarios)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:3001')
})