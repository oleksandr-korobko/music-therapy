// Scroling by ID

window.onload = function () {
  if (window.location.hash === "#scrollToArticle") {
    const scrollToElement = document.getElementById("scrollToArticle");
    scrollToElement.scrollIntoView({ behavior: "smooth" });
  }
};