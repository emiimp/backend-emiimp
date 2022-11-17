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
