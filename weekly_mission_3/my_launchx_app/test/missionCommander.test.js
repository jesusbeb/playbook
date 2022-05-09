const MissionCommander = require('./../app/missionCommander'); // importamos la clase MissionCommander del archivo missionCommander para hacerle prueba

/* // Ejemplo de una prueba
describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        const result = 1 + 2;
        expect(result).toBe(2);
    })
})*/

// Test de unidad para la clase importada
describe("Unit Tests for Mission Commander Class", () => {
    test('1. Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa");   // instanciamos el objeto, enviando el nombre de Woopa a la clase
        expect(myMissionCommander.name).toBe("Woopa"); // expect(propiedad que queremos probar).toBe("Valor que esperamos obtener")
    })
})
