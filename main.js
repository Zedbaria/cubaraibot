const { countReset } = require('console');
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE","CHANNEL","REACTION"]});
const memberCounter = require("./counters/member-counter.js");
/*const memberServeur = require("./counters/member-serveur.js");*/


client.commands= new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler =>
    {
        require (`./handlers/${handler}`)(client,Discord);
    })

client.on('ready',()=>
{
    memberCounter(client);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "PLAY.CUBARAIBE.FR",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
    /*memberServeur(client);*/
});
//connexion à la fin
client.login(process.env.DJS_KEY);