// var per vue js
var app = new Vue(
    {
        // elemento con id root
        el: "#root",

        // data
        data: {
            todoInserito: "",
            todos: [
                {
                    testo: "Seguire la lezione",
                    fatto: true,
                    visibile: true
                },
                {
                    testo: "Leggere la documentazione",
                    fatto: false,
                    visibile: true
                },
                {
                    testo: "Fare gli esercizi",
                    fatto: false,
                    visibile: true
                },
                {
                    testo: "Riposarsi",
                    fatto: false,
                    visibile: true
                }
            ]
        },

        // methods (funzioni)
        methods: {

            // funzione per aggiungere un elemento nell'array delle todos
            aggiungiTodo() {

                // funzione per rendere la prima lettera maiuscola
                this.todoInserito = this.todoInserito.charAt(0).toUpperCase() + this.todoInserito.slice(1);

                // aggiunge solo se la lunghezza dell'input inserito è > di 0
                if (this.todoInserito.length > 0) {

                    // quindi pusha
                    this.todos.push({
                        testo: this.todoInserito,
                        fatto: false,
                        visibile: true
                    });

                    // poi svuota l'input
                    this.todoInserito = "";

                // altrimenti avvisa l'utente
                } else {
                    alert("Non hai inserito nulla");
                }
            },

            // funzione per cambiare lo stato di "fatto"
            todoFatto(todo) {

                // con l'operatore ternario
                todo.fatto = todo.fatto ? false : true;

                // o con l'uguaglianza della sua negazione
                // todo.fatto = !todo.fatto;
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