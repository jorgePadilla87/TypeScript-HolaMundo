interface Persona {
    id: number,
    nombre: string,
    edad: number,
    fechaIngreso?: Date
}

var personas: Persona[] = [];

const crearPersonas = (total: number) => {
    for (let i = 1; i <= total; i++) {
        personas.push({
            id: i,
            nombre: `Persona ${i}`,
            edad: 4 + (i * 3)
        });
    }
};

const saludarPersonas = () => {
    const content = document.getElementById('content');
    personas.forEach(persona => {
        console.log(`Hola ${persona.nombre}`);
        const p = document.createElement('p');
        p.textContent = `Hola ${persona.nombre}`;
        content?.appendChild(p)
    });
};

crearPersonas(15);

saludarPersonas();