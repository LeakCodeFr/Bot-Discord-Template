const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports =  {
    name: "help",
    description: "Voici mon help.",
    permission : "Aucune",
    type: "CHAT_INPUT",  

    async run(bot, message, args) {

        const embed = new EmbedBuilder()
        .setColor("00001")
        .setTitle("**__Help__**")
        .setDescription("**Voici mes commandes : \n /help pour connaître mes commandes \n /ping pour connaître la latence du bot. \n /kick pour exclure une personne du serveur. \n /mute pour rendre un membre muet. \n /unmute pour démuter une personne mute et ainsi la laisser discuter. \n /ban pour bannir une personne du serveur (pas obligatoirement présente si l'ID est utilisé) \n /unban pour débannir une personne bannie** ");

        message.reply({ embeds: [embed] })

    } 
}