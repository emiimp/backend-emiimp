const fs = require('fs');
const express = require('express');

module.exports = class Contenedor {
    constructor(file) {
        this.file = file;
    }

    save = async (object) => {
        try {
            const data = await this.getAll();
            const id = data.length + 1;
            const newObject = { ...object, id };
            data.push(newObject);
            await fs.promises.writeFile(this.file, JSON.stringify(data, null, 2));
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    getById = async (id) => {
        try {
            const data = await this.getAll();
            const object = data.find((object) => object.id === id);
            return object;
        } catch (error) {
            console.log(error);
        }
    };

    getAll = async () => {
        try {
            const data = await fs.promises.readFile
            (this.file, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.log(error);
        }
    };  

}
    
    deleteById = async (id) => {
        try {
            const data = await this.getAll();
            const newData = data.filter((object) => object.id !== id);
            await fs.promises.writeFile(this.file, JSON.stringify(newData, null, 2));
        } catch (error) {
            console.log(error);
        }
    }

    save = async (object) => {
        try {
            const data = await this.getAll();
            const id = data.length + 1;
            const newObject = { ...object, id };
            data.push(newObject);
            await fs.promises.writeFile(this.file, JSON.stringify(data, null, 2));
            return id;
        } catch (error) {
            console.log(error);
        }
    };

