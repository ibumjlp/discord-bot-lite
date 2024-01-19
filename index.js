const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const rudeWord = ['ควาย', 'โง่', 'หัวกะดอ', 'กลัวเมีย', 'กะโปก', 'เอ๋อ', 'ปัญญาอ่อน', 'noob', 'ไก่', 'กะโหลก'];
const member = ['เต้', 'เจ็ด', 'ทีน', 'หนึ่ง', 'นิว', 'บูม', 'เดช', 'โฟล์ค', 'แฮ่ม'];
const randomNum = () => Math.floor(Math.random() * 10);

client.on('ready', () => console.log('Your bot is ready.'));

client.on('messageCreate', msg => {
    if(msg.content == 'บูม') return msg.reply('DEV สุดหล่อ');

    member.forEach(element => {
        if (element === msg.content) return msg.reply(rudeWord[randomNum()]);
    });
});

client.login(process.env.TOKEN);