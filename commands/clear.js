module.exports=
{
    name:'clear',
    description : "this is a ping command",
    async execute(client,message,args,Discord)
    {
        if(message.member.roles.caches.has('837306210734571571')||message.member.roles.caches.has('836500837244862514'))
        {
        if(!args[0])return message.reply("Entre un nombre de messages à supprimer");
        if(isNaN(args[0])) return message.reply("Renseigne un nombre plutôt");

        if(args[0]>100) return message.reply("la limite est de 100");
        if(args[0]<1) return message.reply("Il me faut un chiffre positif");


        await message.channel.messages.fetch({limit : args[0]}).then(messages =>
            {
                message.channel.bulkDelete(messages);
            })
    }
    else
    {
        return message.reply("tu n'as pas les permissions nécessaires");
    }
}
}