module.exports=
{
    name:'embed',
    description : "Embed",
    execute(client,message,args,Discord)
    {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00cc00')
        .setTitle('Commandes')
        .setURL('https://cubaraibe.fr')
        .setDescription('Voici les commandes')
        .addFields(
            {name :"&count",value : 'compteur des personnes'},
            {name :"&ip",value : 'ip du serveur'},
            {name :"&twitch",value : 'lien twitch'},
            {name :"&site",value : "site web"},
            {name :"&serveur",value : "status du serveur"},
            {name :"&youtube",value : "lien youtube"}
        )
        .setImage("https://i.ibb.co/S33Bkjk/bateaunice.png")
        .setFooter("Pour profiter au max du serveur discord");
        message.channel.send(newEmbed);
    }
    
}