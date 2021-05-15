module.exports = async(client)=>
{
    const guild = client.guilds.cache.get('836500571590098966');
    setInterval(()=>{

        const  memberCount= guild.memberCount;
        const channel = guild.channels.cache.get('843247794558074902');
        channel.setName(`Membres: ${memberCount.toLocaleString()}`);
        console.log(memberCount);
    },5000);
}