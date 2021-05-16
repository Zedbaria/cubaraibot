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
            {value : '&count = compteur des personnes'},
            {value : '&ip = ip du serveur'},
            {value : '&live = lien twitch'},
            {value : "&site = site web"},
            {value : "&serveur = status du serveur"},
            {value : "&youtube = lien youtube"}
        )
        .setImage("https://img.chefdentreprise.com/Img/BREVE/2020/6/347512/Reglement-interieur-pourquoi-est-crucial--F.jpg")
        .setFooter("Regardez bien les règles");
        message.channel.send(newEmbed);
    }
    
}