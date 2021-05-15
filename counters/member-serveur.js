const util = require('minecraft-server-util');
module.exports = async(client)=>
{
    const guild = client.guilds.cache.get('836500571590098966');
    setInterval(()=>{

        util.status('play.cubaraibe.fr',{port : 25565}).then((response)=>
       {
            
        const memberServeur = response.onlinePlayers;
        const channel = guild.channels.cache.get('843252720843358238');
        channel.setName(`Membres en Jeu: ${memberServeur.toLocaleString()}`);

       }).catch((error)=>
       {
        message.channel.send('Une erreur est survenue lors de la recherche du serveur');
        throw error;
       });

        console.log('Updating');
    },10000);
}