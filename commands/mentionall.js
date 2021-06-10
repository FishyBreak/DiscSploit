const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('@everyone I am a bot.');
        message.delete();
        console.log(`Log: Successfully send mass ping`);

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "mentionall",
    desc: "Mentions @everyone.",

}
