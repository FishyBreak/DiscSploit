const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        
        console.log("Finding all possible people to ban. . .");
        const members = await message.guild.members.fetch()
        members
            .filter(m => m.bannable)
            .forEach(m => m.ban())
        message.delete();
        console.log(`Log: Successfully banned everyone`);
        
    } catch(e) {

        console.log(e.stack);

    }
        
}

module.exports.help = {

    name: "banhammer",
    desc: "Bans everyone."

}
