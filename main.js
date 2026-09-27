// ===== ここだけ書き換える =====
const CONFIG = {
  // メールアドレスを「@」の前後に分けて書く（ロボットに拾われにくくするため）
  mailUser: "sasakureberry",
  mailDomain: "gmail.com",
  // 販売サイトのサークルページURL（決まるまでは空のまま）
  shops: {
    dlsite: "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG01081329.html",
  },
};
// ==============================

(function () {
  const el = document.getElementById("mail");
  if (el) {
    const addr = CONFIG.mailUser + "@" + CONFIG.mailDomain;
    const a = document.createElement("a");
    a.href = "mailto:" + addr;
    a.textContent = addr;
    el.replaceWith(a);
  }
  document.querySelectorAll("[data-shop]").forEach(function (a) {
    const url = CONFIG.shops[a.dataset.shop];
    if (url) {
      a.href = url;
      a.target = "_blank";
    } else {
      a.removeAttribute("href");
      a.classList.add("disabled");
      a.textContent += "（準備中）";
    }
  });
})();
