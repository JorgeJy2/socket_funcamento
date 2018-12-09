var socket = io();

socket.on('connect', function() {
    console.log('Conectado');
});


socket.on('disconnect', function() {
    console.log("Perdimos conexión con el servidor");
});

socket.emit('enviarMensaje', {
    usuario: "fernando",
    message: "Hola muindo"
}, function(mensaje) {
    console.log(mensaje);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});