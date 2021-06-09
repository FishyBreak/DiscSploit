const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('@everyone listen to this man.');
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "mentionall",
    desc: "Mentions everyone?.",

}
