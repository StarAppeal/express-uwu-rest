fancy = new Map();
fancy.set(65, "𝒜");
fancy.set(66, "ℬ");
fancy.set(67, "𝒞");
fancy.set(68, "𝒟");
fancy.set(69, "ℰ");
fancy.set(70, "ℱ");
fancy.set(71, "𝒢");
fancy.set(72, "ℋ");
fancy.set(73, "ℐ");
fancy.set(74, "𝒥");
fancy.set(75, "𝒦");
fancy.set(76, "ℒ");
fancy.set(77, "ℳ");
fancy.set(78, "𝒩");
fancy.set(79, "𝒪");
fancy.set(80, "𝒫");
fancy.set(81, "𝒬");
fancy.set(82, "ℛ");
fancy.set(83, "𝒮");
fancy.set(84, "𝒯");
fancy.set(85, "𝒰");
fancy.set(86, "𝒱");
fancy.set(87, "𝒲");
fancy.set(88, "𝒳");
fancy.set(89, "𝒴");
fancy.set(90, "𝒵");
fancy.set(97, "𝒶");
fancy.set(98, "𝒷");
fancy.set(99, "𝒸");
fancy.set(100, "𝒹");
fancy.set(101, "ℯ");
fancy.set(102, "𝒻");
fancy.set(103, "ℊ");
fancy.set(104, "𝒽");
fancy.set(105, "𝒾");
fancy.set(106, "𝒿");
fancy.set(107, "𝓀");
fancy.set(108, "𝓁");
fancy.set(109, "𝓂");
fancy.set(110, "𝓃");
fancy.set(111, "ℴ");
fancy.set(112, "𝓅");
fancy.set(113, "𝓆");
fancy.set(114, "𝓇");
fancy.set(115, "𝓈");
fancy.set(116, "𝓉");
fancy.set(117, "𝓊");
fancy.set(118, "𝓋");
fancy.set(119, "𝓌");
fancy.set(120, "𝓍");
fancy.set(121, "𝓎");
fancy.set(122, "𝓏");
fancy.set(228, "𝒶̈");
fancy.set(246, "𝑜̈");
fancy.set(252, "𝓊̈");
fancy.set(196, "𝒜ℰ");
fancy.set(214, "𝒪ℰ");
fancy.set(220, "𝒰ℰ");
fancy.set(223, "𝓈𝓈");

var fizieren = function (str, params) {
  let fancyfied = "";
  str.split("").forEach(function (c) {
    if (!fancy.has(c.charCodeAt(0))) fancyfied += c;
    else fancyfied += fancy.get(c.charCodeAt(0));
  });
  return fancyfied;
};

module.exports = {
  function: fizieren,
  name: "Fancify",
  show: true,
};
