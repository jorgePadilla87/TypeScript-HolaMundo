var personas = [];
var crearPersonas = function (total) {
    for (var i = 1; i <= total; i++) {
        personas.push({
            id: i,
            nombre: "Persona " + i,
            edad: 4 + (i * 3)
        });
    }
};
var saludarPersonas = function () {
    var content = document.getElementById('content');
    personas.forEach(function (persona) {
        console.log("Hola " + persona.nombre);
        var p = document.createElement('p');
        p.textContent = "Hola " + persona.nombre;
        content === null || content === void 0 ? void 0 : content.appendChild(p);
    });
};
crearPersonas(15);
saludarPersonas();
