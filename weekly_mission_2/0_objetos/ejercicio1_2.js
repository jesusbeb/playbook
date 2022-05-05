const issue = {
    title: "Opinion",
    repositoryNameAssociated: "Ejercicio1",
    status: "Active",
    numberOfComments: 12,
    labels: 8,
    author: "jesusBeB",
    dateCreated: "11/04/2022",
    lastUpdated: "19/04/2022",
    getTitleAndAuthor: function(){
        console.log(`Titulo: ${this.title}, Autor: ${this.author}`);
    },
    getGeneralInfo: function(){
        console.log(`Este repositorio fue creado el: ${this.dateCreated}`);
    },
}

console.log("EJERCICIO 1.2")
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());