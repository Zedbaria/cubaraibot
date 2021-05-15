module.exports=
{
    name:'embed',
    description : "Embed",
    execute(client,message,args,Discord)
    {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#33cc33')
        .setTitle('Rules')
        .setURL('https://youtube.com/')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name : 'Rule 1',value : 'Be nice'},
            {name : 'Rule 2',value : 'Be cool'},
            {name : 'Rule 3',value : 'Be kind'}
        )
        .setImage("https://img.chefdentreprise.com/Img/BREVE/2020/6/347512/Reglement-interieur-pourquoi-est-crucial--F.jpg")
        .setFooter("Regardez bien les règles");
        message.channel.send(newEmbed);
    }
    
}