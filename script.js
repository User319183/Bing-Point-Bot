
javascript: (function () {
var bing = "http://www.bing.com/search?q=";
console.log("%cBing Auto Searcher by Sathvik", "font-size: 30px; color: cyan; font-style: italic; font-weight: bold;");

const searchTerms = [
"dogs",
"cats",
"windows 10",
"windows 11",
"javascript",
"Users Development",
"sathvik.info",
"google",
"facebook",
"twitter",
"instagram",
"youtube",
"tiktok",
"twitch",
"reddit",
"amazon",
"microsoft",
"visual studio code",
"visual studio",
"iMac",
"MacBook",
"Bing",
];
console.log("%cSearchTerms Loaded", "font-size: 30px; color: cyan; font-style: italic; font-weight: bold;");



var searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
console.log("%cSearchTerms will now be randomly selected and opened in new tabs", "font-size: 30px; color: cyan; font-style: italic; font-weight: bold;");

var i = 0;
var interval = setInterval(function () {
if (i == 10) {
clearInterval(interval);
}
var newTab = window.open(bing + searchTerm, "_blank");
setTimeout(function () {
newTab.close();
}
, 2000);
searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
i++;
}
, 3000);
}
)();
