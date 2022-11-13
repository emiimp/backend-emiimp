// Class

class Usuario {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.books = [];
        this.pets = []
    }

// Metodos

    getFullName = () => { console.log(`El nombre del usuario es ${this.name} ${this.lastName}`) }

    addPet = (newPet) => {
        this.pets.push(newPet)
        console.log(this.pets)
    }

    addBook = (author, book) => {
        const newEntrie = {
            author: author,
            book: book
        }
        this.books.push(newEntrie)
        console.log(this.books)
    }

    getBookNames = () => console.log(this.books.map(a => a.book))

}

// Creo el usuario

const usuarioUno = new Usuario('Emi', 'Imp')
console.log(usuarioUno)

// Llamo a los metodos

usuarioUno.getFullName()
usuarioUno.addPet('Alien')
usuarioUno.addPet('Predator')
usuarioUno.addBook('Harper Lee', 'To Kill a Mockingbird')
usuarioUno.addBook('Charlote Brontë', 'Jane Eyre')
usuarioUno.getBookNames()

if (typeof module !== 'undefined') {
    module.exports = Usuario;
}



// DESAFÍO CLASE 6 - EXPRESS SERVER



// --------- AGREGO para el desafío clase 6 

const express = require('express');

const fs = require('fs');

const app = express();

const server = app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
});

// --------- 

class Contenedor {
    constructor() {
        this.id = undefined,
            this.title = undefined,
            this.price = undefined,
            this.thumbnail = undefined
    }

    save = (title, price, thumbnail, obj) => {
        try {
            if (fs.existsSync('./desafio.txt')) {
                const data = JSON.parse(fs.readFileSync('./desafio.txt', 'utf-8'))
                const lastProd = data[data.length - 1].id
                this.title = title
                this.price = price
                this.thumbnail = thumbnail
                this.id = lastProd + 1
                data.push(obj)
                fs.writeFileSync('./desafio.txt', `${JSON.stringify(data)}`)
            } else {
                const array = []
                this.title = title
                this.price = price
                this.thumbnail = thumbnail
                this.id = 1
                array.push(obj)
                fs.writeFileSync('./desafio.txt', `${JSON.stringify(array)}`)
            }

        } catch (error) {
            console.log(error)
        }

        console.log('Archivo guardado')
    }


    // --------- AGREGO para el desafío clase 6 

    getAll = async () => {

        try {
            if (fs.existsSync('./desafio.txt')) {
                const data = JSON.parse(fs.readFileSync('./desafio.txt', 'utf-8'))
                console.log(data)
            } else {
                console.log('No hay productos')
            }
        } catch (error) {
            console.log(error)
        }
    }

    getRandom = async () => {
        try {
            if (fs.existsSync('./desafio.txt')) {
                const data = JSON.parse(fs.readFileSync('./desafio.txt', 'utf-8'))
                const random = Math.floor(Math.random() * data.length)
                console.log(data[random])
            } else {
                console.log('No hay productos')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const contenedor = new Contenedor()

contenedor.save('cartera', 102, 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', contenedor);
contenedor.save('book', 5, 'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', contenedor);
contenedor.save('umbrella', 100, 'https://images.pexels.com/photos/1715161/pexels-photo-1715161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', contenedor);


app.get('/productos', (req, res) => {
    contenedor.getAll()
    res.send('Productos')
})

app.get('/productosRandom', (req, res) => {
    contenedor.getRandom()
    res.send('Productos Random')
})

// --------- 




// DESAFÍO CLASE 7 