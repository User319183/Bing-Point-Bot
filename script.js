javascript: (function () {

const bing = "http://www.bing.com/search?q=";

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


const searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

let i = 0;
const interval = setInterval(function () {
if (i == 10) {
clearInterval(interval);
}
const newTab = window.open(bing + searchTerm, "_blank");
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
