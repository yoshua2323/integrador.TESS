const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json()); // Permite manejar solicitudes JSON

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/gestion_cliente', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado a MongoDB');
})
.catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Gestión de Clientes');
});

app.get('/clientes', (req, res) => {
  res.send('Ruta para obtener todos los clientes');
});

app.post('/clientes', (req, res) => {
  // Aquí deberías agregar lógica para guardar el cliente en la base de datos
  res.send('Cliente agregado');
});

app.get('/clientes/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Cliente con ID: ${id}`);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
