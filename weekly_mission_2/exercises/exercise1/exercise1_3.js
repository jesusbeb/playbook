const pullrequest = {
    title: "Solicitud",
    branchName: "Master",
    dateCreated: "10/04/2022",
    status: "Closed",
    repositoruNameAssociated: "Spoon-Knife",
    author: "jesusBeB",
    getstatus: function(){
        console.log(`El estado del pullrequest es: ${this.status}`);
    },
    getTitleAndAuthor: function(){
        console.log(`El titulo es: ${this.title} y el autor es: ${this.author}`)
    }
}

console.log("EJERCICIO 1.3");
console.log(pullrequest.getstatus());
console.log(pullrequest.getTitleAndAuthor());