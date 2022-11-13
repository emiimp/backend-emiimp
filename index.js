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

const fs = require('fs')


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

        console.log('Archivo guardado!')
    }


    getByID = (id) => {
        const data = fs.readFileSync('./desafio.txt', 'utf-8')
        console.log('getById', JSON.parse(data).find(x => x.id === id))
    }

    getAll = () => {
        const data = fs.readFileSync('./desafio.txt', 'utf-8')
        console.log(data)
    }

    deleteById =  (id) => {
        try {
            const data = fs.readFileSync('./desafio.txt', 'utf-8')
            const newArray = JSON.parse(data)
             const filteredArray = newArray.filter(x => x.id !== id)
            
            fs.writeFileSync('./desafio.txt', `${JSON.stringify(filteredArray)}`)
            console.log('Producto eliminado', filteredArray)
        } catch (error) {
            console.log(error)
        }
    }

    deleteAll = async () => {
        await fs.promises.writeFile('./desafio.txt', ``)
        console.log('Productos eliminados')
    }
}

// Instancio y guardo los productos nuevos
const contenedor = new Contenedor()
contenedor.save('cartuchera', 100, 'www.dsfsd.com', contenedor)
contenedor.save('lapiz', 20, 'www.dsfsdsss.com', contenedor)
contenedor.save('hoja', 5, 'www.dsfsd111.com',contenedor)
//Obtengo todos los productos
// contenedor.getAll()
//Obtengo el producto con ID 2
// contenedor.getByID(2)
//Elimino el producto con ID 2
contenedor.deleteById(2)
//Metodo para borrar todo
// contenedor.deleteAll()




//--------------- DESAFÍO CLASE 6 -------------- hiiiii