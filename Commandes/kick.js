const Discord = require("discord.js")

module.exports = {

    name: "kick",
    description: "Exclure un membre",
    permission: Discord.PermissionFlagsBits.KickMembers,
    dm: false,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à exclure",
            required: true
        }, {
            type: "string",
            name: "raison",
            description: "La raison de l'exclusion",
            required: false
        }
    ],

    async run(bot, message, args) {


        let user = args.getUser("membre")
        if(!user) return message.reply("Pas de membre à exclure !")
        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.reply("Pas de membre à exclure !")

        let reason = args.getString("raison")
        if(!reason) reason = "Pas de raison fournie.";

        if(message.user.id === user.id) return message.reply("Vous ne pouvez pas vous exclure vous-même")
        if((await message.guild.fetchOwner()).id === user.id) return message.reply("Impossible d'exclure le propriétaire du serveur !")
        if(member && !member.kickable) return message.reply("Impossible d'exclure ce membre !")
        if(member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas exclure un membre ayant un rôle supérieur au tien !")

        try {await user.send(`Tu as été kick du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\``)} catch(err) {}

        await message.reply(`${message.user} a kick ${user.tag} pour la raison : \`${reason}\``)

        await member.kick(reason)

    }
}