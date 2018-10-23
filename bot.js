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
 if (message.content === "1help-ad") {
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

client.on('message', message => {
    if (message.content.startsWith("p!invserver")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', function(msg) {
  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

 client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO ZeusSHOP Community ©`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ p! ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | أحمد#3933')
    })
}
});
 
client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
	   
	   client.on('message', message => {
              if(!message.channel.guild) return;

    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Pixel Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server :earth_africa: ', message.guild.name)
       .addField('Sender :loudspeaker:', message.author.username)
       .addField('Message :envelope_with_arrow: ', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**اوكي شكرأ لك**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
