const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = config.prefix;

client.on("ready", () => {

    console.log("Bot has Started :)")

    client.user.setActivity("everyone", {type: "WATCHING"});

});

client.on("message", message => {

let command = message.content.slice(prefix.length).split(" ")[0];

let args = message.content.slice(1).split(" ");

if (message.author.bot) return;

if (!message.guild) return;

if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":( You fool; You have no permission to control me.");

if (command === "ping") {

    message.channel.send(`Pong! \`${client.pings.length}ms\``);


}


if (command === "rmchannel") {

    if (!message.mentions.channels.first()) return message.channel.send("Please mention a channel to delete.");

    if (message.mentions.channels.first() === message.channel) return message.channel.send("Nah bro, lets not delete the channel we're in.");

    let channel = message.mentions.channels.first();

    channel.delete();

    message.channel.send(`**${message.author.tag}**, The channel **${channel.name}** was deleted.`);


}

});

client.login(config.token);