const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()


/* Motor de plantillas*/
app.set('view engine', 'ejs')

/* Seteamos la carpeta public para archibvos estaticos */
app.use(express.static('public'))

// Para procesar los datos del form
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// Seteamos las variables de entorno
dotenv.config({path:'./env/.env'})

// Setear las cookies
app.use(cookieParser())

// Llamar al router
app.use('/', require('./routes/router'))

// para borrar caché
app.use(function(req, res, next){
    if(!req.user)
        res.header('Cache-Control','private,no-cache, no-store,must-revalidate');
        next();
});

app.listen(3005, () => {
    console.log('SERVER UP!')
}) 