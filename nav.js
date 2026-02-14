fetch("nav.json")
  .then(res => res.json())
  .then(data => {
    const nav = document.getElementById("site-nav");

    data.forEach(item => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.label;
      link.style.marginRight = "15px";
      nav.appendChild(link);
    });
  });
