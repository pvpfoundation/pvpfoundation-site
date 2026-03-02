document.addEventListener("DOMContentLoaded", function () {

  fetch("header.html")
    .then(res => {
      if (!res.ok) throw new Error("Header not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("layout-header").innerHTML = html;

      if (typeof initNav === "function") {
        initNav();
      }
    })
    .catch(err => {
      console.error("Header failed to load:", err);
    });

});
