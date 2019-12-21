Discord = require("discord.js");
module.exports.run = (client, message, args) => {

message.channel.send(`Pong \`${client.pings.length}ms\``);

}