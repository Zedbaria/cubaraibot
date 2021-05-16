module.exports=
{
    name:'count',
    description : "compteur",
    execute(client,message,args,Discord)
    {
        const guild = client.guilds.cache.get('836500571590098966');
        const  memberCount= guild.memberCount;
        message.channel.send('nous sommes : '+memberCount+"pirates");
        console.log(memberCount);
}
}