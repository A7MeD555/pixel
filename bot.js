const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "p!";
client.on('ready', () => {
    console.log('I am ready!');
});



client.on("ready", () => {
  console.log("Vulnix | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`p!help | By أحمد`);
});


  client.on("message", message => {
 if (message.content === "p!help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM") 
      .setDescription(`
	  
	        اختر: 
 
p!help-gn ⇏ اوامر عامة
p!help-ad ⇏ اوامر ادارة السيرفر			 

`)
message.channel.sendEmbed(embed)
 
}
});



   client.on("message", message => {
	var prefix = "p!";
 if (message.content === "p!help-gn") {
	 message.channel.send('**تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`
             
===================== اوامر عامة ===================== 
p!new ➾ لعمل تذكرة
p!id ➾ معلومات عن حسابك
p!ping ➾ سرعة اتصالك بالانترنت
p!avatar ➾ يظهر صورة بروفابلك
p!image ➾ لعرض صورة السيرفر
p!server ➾ معلومات عن السيرفر
p!invserver ➾ لاخت انفيت في الخاص
p!roles ➾ لمعرفة كل رتب السيرفر
p!member ➾ لمعرفه حالات الاعضاء
p!bans ➾ لمعرفة عدد الاشخاص المبندة
p!perms ➾ يعرض لك برمشناتك بالسيرفر  
p!p!rooms ➾ لعرض كل رومات السيرفر
p!invites ➾ لمعرفة كام انفيت ليك بالسيرفر
p!emojilist ➾ لعرض كل ايموجي السيرفر
p!uptime ➾ لمعرفة كام وقت شغال البوت
p!botserver ➾ لمعرفة في كام سيرفر البوت
p!bot ➾ معلومات عن البوت
p!allbots ➾ لعرض كل بوتات السيرفر
p!count ➾ يعرضلك عدد الاشخاص الي بالسيرفر
p!contact ➾ لمراسله صاحب البوت
p!invites ➾ يعرضلك عدد انفايتاتك بالسيرفر
p!invite ➾ رابط البوت 
p!support ➾ سيرفر الدعم
=========================================================
وقريباً المزيد من الاكواد ان شاء الله انتظرونأأ
=========================================================
Support server : https://discord.gg/SyFD2rU
The bot was made By أحمد#3933
`)
   message.author.sendEmbed(embed)
    
   }
   }); 

   client.on("message", message => {
	var prefix = "p!";
 if (message.content === "p!help-ad") {
	 message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`
             
==================== اوامر ادارية ===================== 
p!bc ➾ لارسال رساله لجميع الاعضاء
p!rolebc @rolename ➾ لارسال رسالة لاعضاء برتبهم المحددة
p!fastrandom ➾ لاختيار احد من الاعضاء عشوائي
p!ct ➾ لعمل روم كتابي
p!cv ➾ لعمل روم صوتي
p!nickname [@mention] [newname] ➾ لتغير اسم شخص معين 
p!setVoice ➾ لعمل روم يحسب عدد الاشخاص المتواجدة بالرومات الصوتية
p!setCount ➾ لعمل روم يحسب عدد الاشخاص الموجودة بالسيرفر
p!setCount ➾ لعمل روم يحسب الوقت
p!setCount ➾ لعمل روم يحسب التاريخ
p!ban [@mention] [reason] ➾  لحظر شخص من السيرفر
p!kick [@mention] [reason] ➾ لطرد شخص من السيرفر
p!mute [@mention] [reason] ➾ لاعطاء ميوت لعضو
p!unmute [@mention] ➾ لفك الميوت عن عضو
p!move [@mention] ➾ لنقل عضو لرومك الصوتي
p!move all ➾ لسحب جميع الاعضاء المتواجدين بالرومات الي رومك
p!makecolors [number] ➾ لصنع عدد من الالوان
p!color [number] ➾ لأخذ رتبة لون
p!mutechannel ➾ لاقفال الشات
p!unmutechannel ➾ لفتح الشات
p!clear ➾ لمسح الشات
p!role [@mention] [role name]  ➾ لاعطاء رتبة لعضو
p!roleremove [@mention] [role name] ➾ لسحب رتبة من عضو
p!hide ➾ لاخفأء جميع الرومات 
p!unhide ➾ لاظهار جميع الرومات
=========================================================
وقريباً المزيد من الاكواد ان شاء الله انتظروونأ
=========================================================
Support server : https://discord.gg/SyFD2rU
The bot was made By أحمد#3933
`)
   message.author.sendEmbed(embed)
    
}
}); 




 







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
