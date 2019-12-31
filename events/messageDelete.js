const Discord = require("discord.js");
module.exports = async (client, message) => {

    let logchannel = message.guild.channels.find(ch => ch.name === "logs");

    if (!logchannel) return;

let entry = await message.guild.fetchAuditLogs({type: "messageDelete"}).then(audit => { 
    
    
   let o = audit.entries.first()

// now we will make sure we got the right log

let deletedBy = o.executor;


let e = new Discord.RichEmbed()
.setTitle("Message Deleted")
.setDescription(`A message was deleted in <#${message.channel.id}>`)
.addField("Content", message.content)
.addField("Author", message.author)
.addField("Deleted By", deletedBy)
.setFooter(message.author.id)
.setTimestamp();


logchannel.send(e);


})


}