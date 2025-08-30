const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস মেহেদী রে হাঙ্গা করো😶👻😘",
    "😘": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "👍": "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
    "Khaicho": "না ঝাং 🥹 কিভাবে খাবো ধরলেই তে চিল্লাউ..!😒😡🙈",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "bc": "SAME TO YOU😊",
    "xudi tore": "এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️",
    "good morning": "GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚",
    "tor bal": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
    "mehedi": "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",
    "owner": "‎[𝐎𝐖𝐍𝐄𝐑:☞ [𝐎𝐖𝐍𝐄𝐑:☞ Mehedi Ahamed☜\nFacebook: https://www.facebook.com/profile.php?id=100035088489972\nWhatsApp: 01603566588",
    "farhana": "খবরদার কেউ এই নাম ধরে ডাক দিবানা এটা আমার বস মেহেদীর  বউয়ের নাম..!😠🥰⛏️",
    "baby": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
    "chup": "তুই চুপ কর পাগল ছাগল",
    "assalamu alaikum": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 💖",
    "Hmm": ""হুম বলিও না মাথা এমনিতেই গরম আছে🤬⛏️😷",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস মেহেদী রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মেয়ে হলে আমার বস মেহেদীর ইনবক্সে এখুনি গুঁতা দিন🫢😻",
    "by": "কিরে তুই কই যাস কার সাথে চিপায় যাবি..!🌚🌶️",
    "ami mehedi": "হ্যা বস কেমন আছেন..?☺️",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "I Love You": "সব মুতার জায়গায় গুঁতা দেওয়ার ধান্দা 😪🥱",
    "pic de": "এন থেকে সর দূরে গিয়া মর😒",
    "cudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
    "bal": "রাগ করে না সোনা পাখি 🥰",
    "heda": "ভিডিও কল দেও দেখি.!!😗🥵",
    "voda": "তোর গালফ্রেন্ড কে বল ভিডিও কল দিয়ে দেখাইতে..!🌚🤣🌚",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Boss মেহেদীর ইনবক্সে গুতা দিন 😘",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈"
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
