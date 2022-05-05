const repo = {
    name: "LaunchX",
    author: "jesusBeB",
    languaje: "JavaScript",
    numberOfCommits: 30,
    star: 85,
    forks: 6,
    issues_open: 3,
    issues_close: 2,
    getTotalIssues: function(){     /* Funcion para sumar el numero de issues */
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){     /* Funcion para regresar la informacion general del repo*/
        return `This repository ${this.name} was created by ${this.author}`; // uso de comillas  invertidas
    }
}

console.log("EJERCICIO 1");
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());