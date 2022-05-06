// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  console.log("Ejemplo  9: Herencia entre dos clases")
  const jesusDev = new Developer("Jesus", "js", ["elixir", "groovy", "lisp"])
  console.log(jesusDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y reutilizar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const jesusLaunchXDev = new LaunchXStudent("Jesus", "js", ["elixir", "groovy", "lisp"])
  console.log(jesusLaunchXDev)
  console.log(jesusLaunchXDev.getName) // getter de la clase padre reutilizada en la clase hija  