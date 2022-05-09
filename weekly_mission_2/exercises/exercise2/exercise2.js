const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log ("------ 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH");
explorers.forEach(explorer => console.log(explorer.name));

console.log("------ 2. Imprime el stack de cada explorer, usa FOR EACH");
explorers.forEach(item => console.log(item.stack));     // "item" puede ser cualquier nombre descriptivo, pudo haber sido "explorer"

console.log("------ 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP");
const explorerStacks = explorers.map(my_explorer => my_explorer.stack); // "my_explorer" pudo haber sido "item" o cualquier otra palabra
console.log(explorerStacks);

console.log("------ 4. Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en una lista se usa el método includes)")
const explorersWithJs = explorers.filter(itemJS => itemJS.stack.includes("js"));
console.log(explorersWithJs);

console.log("------ 5. Busca el primer explorer que sea de la CDMX, usa FIND");
const firstExplorerInCdmx = explorers.find(itemCity => itemCity.city === "CDMX");
console.log(firstExplorerInCdmx);

console.log("------ 6. Obtén la suma de todos los exercises_completed, usa REDUCE");
const all_exercises = explorers.reduce( (acc, manzana) => acc + manzana.exercises_completed, 0 ); // "acc" es un acumulador, variable por default que se tiene que poner
console.log(all_exercises);

console.log("------ 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME");
const finishedFrontend = explorers.some((item) => item.missions.frontend.exercisesFinished === true);
console.log("Por lo menos alguno de los explorers ha finalizado todos los ejercicios de frontend: " +finishedFrontend);

console.log("------ 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.");
const finishedOnboarding = explorers.every((NombreDescriptivo) => NombreDescriptivo.missions.onboarding.exercisesFinished === true)
console.log("Todos los explorers han finalizado el onboarding: " +finishedOnboarding);