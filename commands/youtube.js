module.exports=
{
    name:'youtube',
    description : "lien youtube",
    execute(client,message,args)
    {

        //verifier si il a la permission de faire un truc
        /*if(message.member.permissions.has("KICK_MEMBERS"))
        {
            message.channel.send('Tu peux kick des gens');
        }else{
            message.channel.send('Tu peux pas kick des gens');
        }*/




        //si il a le role \@*role*
        //if(message.member.roles.cache.has('843195280701915166')){//r => r.name ==="ROI" pour verifier le nom precis du role
        message.channel.send('https://www.youtube.com/channel/UCEBgqVMs1GALveFTXIIMXHw');
       /* }
        else{
        message.channel.send("Tu n'as pas le droit, veux-tu y acceder ?");
        message.member.roles.add("843195280701915166").catch(console);
        }*/
    }
}