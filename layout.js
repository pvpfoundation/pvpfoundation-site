fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("layout-header").innerHTML = html;
  });
