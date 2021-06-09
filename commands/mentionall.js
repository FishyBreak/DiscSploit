const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('@everyone I am a bot.');
        message.channel.send('@FishyBreak is a pro.');
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "mentionall",
    desc: "Mentions everyone.",

}
