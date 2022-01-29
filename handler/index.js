const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");

const globPromise = promisify(glob);

module.exports = async (client) => {
    // Comandos
    const commandFiles = await globPromise(`${process.cwd()}/comandos/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.comandos.set(file.name, properties);
        }
    });

    //Eventos
    const eventFiles = await globPromise(`${process.cwd()}/eventos/*.js`);
    eventFiles.map((value) => require(value));

};  
