const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const {Client, RichEmbed} = require('discord.js');
const Enmap = require('enmap');


client.on("ready", () => {

    console.log("Bot has Started :)")

    client.user.setActivity("everyone", {type: "WATCHING"});

});

client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });
  

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded ${commandName}`);
    client.commands.set(commandName, props);
  });
});


client.login(config.token);