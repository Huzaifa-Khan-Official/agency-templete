var news = [
    {
        newsHeading: "What is the Progressive Web App (PWA) and how it works?",
        newsWriter: `by <a href="#">John Williams</a>`,
        newsImg : "./assets/newsImg1.webp"
    },
    {
        newsHeading: "Knowing Your User. The importance of User Research.",
        newsWriter: `by <a href="#">John Williams</a>`,
        newsImg : "./assets/newsImg2.webp"
    },
    {
        newsHeading: "Best Calligraphy Fonts for Logos",
        newsWriter: `by <a href="#">John Williams</a>`,
        newsImg : "./assets/brandingImg.webp"
    },
    {
        newsHeading: "A Simple Guide to Design Thinking",
        newsWriter: `by <a href="#">John Williams</a>`,
        newsImg : "./assets/our-storyImg.webp"
    },
    {
        newsHeading: "Web Design Trends for 2022",
        newsWriter: `by <a href="#">John Williams</a>`,
        newsImg : "./assets/webDesignImg.webp"
    },
    {
        newsHeading: "5 UX Principles for Creating a Great Website",
        newsWriter: `by <a href="#">Rodica1</a> / <a href="#">Comment</a>`,
        newsImg : "./assets/featuredWorkImg1.webp"
    }
];
var newsIndex = localStorage.getItem("index"); // newsIndex
var newsTitle = news[newsIndex].newsHeading; // newsTitle
var coverImg = news[newsIndex].newsImg ; // newsImg
var postCoverDiv = document.querySelector(".post-cover"); // get postCoverDiv
postCoverDiv.style.backgroundImage = `url("${coverImg}")`; // set image for postCoverDiv
var postHeading = document.querySelector("#postHeading"); // get postHeading
postHeading.innerHTML = news[newsIndex].newsHeading; // set post heading
var postWriter = document.querySelector("#postWriter"); // get postWrierDiv
postWriter.innerHTML = news[newsIndex].newsWriter; // set post Writer
document.title = newsTitle + " - Agency";