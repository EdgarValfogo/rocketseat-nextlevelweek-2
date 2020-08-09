// Instalar @types/express para remoção de erro, -D para dependencia de DEV
import express from 'express';
import routes from './routes';

const app = express();

// Para habilitar o uso de json no express
app.use( express.json() );
app.use( routes );

// Route params: rota/:id
// Query params: request.query

app.use(routes);

app.listen(3333);