// var per vue js
var app = new Vue(
    {
        // elemento con id root
        el: "#root",

        // data
        data: {
            todoInserito: "",
            todos: [
                "Seguire la lezione",
                "Leggere la documentazione",
                "Fare gli esercizi",
                "Riposarsi"
            ]
        },

        // methods (funzioni)
        methods: {

            // funzione per aggiungere un elemento nell'array delle todos
            aggiungiTodo() {

                // aggiunge solo se la lunghezza dell'input inserito è > di 0
                if (this.todoInserito.length > 0) {

                    // quindi pusha
                    this.todos.push(this.todoInserito);

                    // poi svuota l'input
                    this.todoInserito = "";

                // altrimenti avvisa l'utente
                } else {
                    alert("Non hai inserito nulla");
                }
            },

            // funzione per cancellare una li nell'array delle todos
            cancellaTodo(index) {

                // con la funzione splice() dove
                // il primo argomento è l'indice dell'elemento cliccato
                // il secondo è il nuemero di elementi da eliminare
                this.todos.splice(index, 1);
            }
        },
    }
);