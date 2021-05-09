//Search bar to work
document.getElementById("search_btn").onsubmit = function () {
  window.location =
    "http://www.google.com/search?q=http://127.0.0.1:5500/JFSD_mar2021" +
    document.getElementById("search_bar").value;
  return false;
};
