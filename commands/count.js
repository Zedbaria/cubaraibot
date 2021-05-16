module.exports = async(client)=>
{
        const guild = client.guilds.cache.get('836500571590098966');
        const  memberCount= guild.memberCount;
        message.channel.send(memberCount);
        console.log(memberCount);
 
}