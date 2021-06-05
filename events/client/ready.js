module.exports=()=>
{
    
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setPresence({
            status: "online",  //You can show online, idle....
            game: {
                name: "PLAY.CUBARAIBE.FR",  //The message shown
                type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
            }
        });
    
}