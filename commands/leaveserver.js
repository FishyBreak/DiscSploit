const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.delete();
        message.guild.leave();
        console.log(`Log: Successfully left server`);3

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "leaveserver",
    desc: "Leaves the server.",

}
