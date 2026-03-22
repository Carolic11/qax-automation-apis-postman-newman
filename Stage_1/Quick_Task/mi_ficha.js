
var nombre = "carolina";
var edad = 37+1;
var estoyEstudiandoAutomatizacionEnAPIs = true;
var miListaDeHobbies = ["leer", "bailar", "aprender"];

const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question ('¿Cuál es tu hobby?',function(hobby){

    console.log(`Mi Nombre es:`,typeof nombre ,nombre ,`nombre.length`, nombre.length)
    console.log(`Mi edad es:`,typeof edad,edad )
    console.log(`Estoy estudiando Automatizacion en APIs:`,typeof estoyEstudiandoAutomatizacionEnAPIs,estoyEstudiandoAutomatizacionEnAPIs);

    miListaDeHobbies.push(hobby);

    console.log(`Mis Hobbies son:`, typeof miListaDeHobbies.length, miListaDeHobbies, miListaDeHobbies.join(','));

 rl.close();
});