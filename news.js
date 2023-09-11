function news(index){
    var newsIndex = localStorage.setItem("index", index);
    location.href = "./news-description.html";
}