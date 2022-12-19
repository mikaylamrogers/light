let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
    {
      "title" : "De Wallen on Map",
      "picture_url" : "ams/L1.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meetthecities.com%2Fguide%2Famsterdam%2Famsterdam-nightlife-redlightdistrict-map%2F&psig=AOvVaw3Ua79Jue0xLEOJ4vZ6y0v7&ust=1671433438419000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKj9yvTMgvwCFQAAAAAdAAAAABAE",
       "category" : "Location",
    },
    {
      "title" : "De Wallen on Map",
      "picture_url" : "ams/L2.jpg",
      "link" : "https://www.google.com/mymaps/viewer?mid=1wCZ4UMhH8ksk69v82yo2SX4fBhY&hl=en",
      "category" : "Location",
    },
    {
      "title" : "Red Light District Map",
      "picture_url" : "ams/L3.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mr-amsterdam.com%2Fattractions-sights-red-light-district-amsterdam.htm&psig=AOvVaw3Ua79Jue0xLEOJ4vZ6y0v7&ust=1671433438419000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKj9yvTMgvwCFQAAAAAdAAAAABAO",
      "category" : "Location",
    },
    {
      "title" : "Real Time Weather App",
      "picture_url" : "ams/I1.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2Ftravel%2Farticle%2Famsterdam-ban-red-light-district-tours%2Findex.html&psig=AOvVaw2CnpWYLcuir7CWXfLyo0ED&ust=1671433502082000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDyg5PNgvwCFQAAAAAdAAAAABAI",
      "category" : "Intensity",
    },
    {
      "title" : "Wheel of Songs",
      "picture_url" : "ams/I2.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fabcnews.go.com%2FInternational%2Fprostitution-coming-scrutiny-amsterdam-red-light-capital-world%2Fstory%3Fid%3D62375896&psig=AOvVaw2CnpWYLcuir7CWXfLyo0ED&ust=1671433502082000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDyg5PNgvwCFQAAAAAdAAAAABAv",
      "category" : "Intention",
    },
    {
        "title" : "Self Portrait Stamp",
        "picture_url" : "ams/I3.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F03%2F21%2Fworld%2Feurope%2Famsterdam-tours-red-light-district.html&psig=AOvVaw2CnpWYLcuir7CWXfLyo0ED&ust=1671433502082000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDyg5PNgvwCFQAAAAAdAAAAABA3",
        "category" : "Intention",
    },
    {
        "title" : "Webcam Waterfall",
        "picture_url" : "ams/I4.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amsterdamredlightdistricttour.com%2Fnews%2Famsterdam-red-light-district-prices%2F&psig=AOvVaw2CnpWYLcuir7CWXfLyo0ED&ust=1671433502082000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDyg5PNgvwCFQAAAAAdAAAAABBQ",
        "category" : "Intention",
    },
    {
      "title" : "Girls Inside the Red Light",
      "picture_url" : "ams/G1.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.in%2Fphotos%2Famsterdam-red-light-district&psig=AOvVaw2CnpWYLcuir7CWXfLyo0ED&ust=1671433502082000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDyg5PNgvwCFQAAAAAdAAAAABBj",
      "category" : "Girls",
    },
    {
      "title" : "Girls Inside the Red Light",
      "picture_url" : "ams/G2.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.earth%2Famsterdams-red-light-district-the-dos-and-donts%2F&psig=AOvVaw2CnpWYLcuir7CWXfLyo0ED&ust=1671433502082000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDyg5PNgvwCFQAAAAAdAAAAABBr",
      "category" : "Girls",
    },
    {
      "title" : "Red Heat of the Red Light",
      "picture_url" : "ams/H1.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.frommers.com%2Fblogs%2Farthur-frommer-online%2Fblog_posts%2Famsterdam-to-move-red-light-district-and-restrict-cannabis-cafes&psig=AOvVaw2tmUxBz7qcrnc30n4ZcPTn&ust=1671433763108000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIC1xI_OgvwCFQAAAAAdAAAAABAS",
      "category" : "Heat",
    },
    {
      "title" : "Red Heat of the Red Light",
      "picture_url" : "ams/H2.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthecreativeadventurer.com%2Fan-alternative-guide-to-the-exciting-and-historic-red-light-district-in-amsterdam%2F&psig=AOvVaw2tmUxBz7qcrnc30n4ZcPTn&ust=1671433763108000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIC1xI_OgvwCFQAAAAAdAAAAABAe",
      "category" : "Heat",
    },
    {
      "title" : "Red Heat of the Red Light",
      "picture_url" : "ams/H3.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.getyourguide.com%2Famsterdam-l36%2Famsterdam-s-red-light-district-with-spanish-speaking-guide-t67175%2F&psig=AOvVaw0UmeDAlkpTSB5dQgeaL_ra&ust=1671433917677000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCLkNnOgvwCFQAAAAAdAAAAABAR",
      "category" : "Heat",
    },
    {
      "title" : "Red Heat of the Red Light",
      "picture_url" : "ams/H4.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Famsterdam-red-light-district&psig=AOvVaw0UmeDAlkpTSB5dQgeaL_ra&ust=1671433917677000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCLkNnOgvwCFQAAAAAdAAAAABAp",
      "category" : "Heat",
    },
    {
      "title" : "Red Heat of the Red Light",
      "picture_url" : "ams/H5.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bautrip.com%2Ftravel-guide%2Famsterdam%2Fred-light-district-amsterdam&psig=AOvVaw0UmeDAlkpTSB5dQgeaL_ra&ust=1671433917677000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCLkNnOgvwCFQAAAAAdAAAAABAv",
      "category" : "Heat",
    },
    {
      "title" : "Red Light Tech",
      "picture_url" : "ams/T1.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dataiq.global%2Farticles%2Farticles%2Fwhen-a-red-light-is-a-red-line-for-privacy&psig=AOvVaw2HRV0OZyARcN8jnHc23SaX&ust=1671434049381000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMj3gpjPgvwCFQAAAAAdAAAAABAE",
      "category" : "Technology",
    },
    {
        "title" : "Red Light Tech",
        "picture_url" : "ams/T2.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amsterdamredlightdistricttour.com%2Fnews%2F10-best-amsterdam-red-light-district-photos%2F&psig=AOvVaw2U-HUgAin3QkguMV-syTMV&ust=1671434106339000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjCyrPPgvwCFQAAAAAdAAAAABAJ",
        "category" : "Technology",
    }
]
  
for (var i = 0; i < jsonDatabase.length; i++ ) {
    createElementProper(jsonDatabase[i]);
}
  
// APPEND //
function createElementProper(incomingJSON) {
let newContentElement = document.createElement("DIV");

// ADD TITLE //
let newContentHeading = document.createElement("H3");
newContentHeading.innerHTML = "<a href='" + incomingJSON['link'] + "'>" + incomingJSON['title'] + "</a>";
newContentElement.appendChild(newContentHeading);
// change color on mouseover
newContentHeading.addEventListener("mouseover", function(){
    newContentHeading.style.color = "rgb(219, 72, 39)";
    newContentHeading.style.transition = "0.5s";
})
newContentHeading.addEventListener("mouseout", function(){
    newContentHeading.style.color = "black";
})
  
// ADD IMAGES //
let newImage = document.createElement("IMG");
newImage.classList.add("profilePicture");
newImage.src = incomingJSON['picture_url'];
newContentElement.appendChild(newImage);
contentGridElement.appendChild(newContentElement);
// rotate images on mouseover
// newImage.addEventListener("mouseover", function(){
//     newImage.style.transform = "rotate(360deg)";
//     newImage.style.transition = "3s";
// })
// newImage.addEventListener("mouseout", function(){
//     newImage.style.transform = "rotate(0deg)";
// })
  
// ADD CATEGORY //
let newContentSubheading = document.createElement("H5");
newContentSubheading.innerHTML = incomingJSON['category'];
newContentElement.appendChild(newContentSubheading);
// change color on mouseover
// newContentSubheading.addEventListener("mouseover", function(){
//     newContentSubheading.style.color = "rgb(255, 194, 217)";
//     newContentSubheading.style.transform = "scale(1.2)";
//     newContentSubheading.style.transition = "1s";
// })
// newContentSubheading.addEventListener("mouseout", function(){
//     newContentSubheading.style.color = "black";
//     newContentSubheading.style.transform = "scale(1)";
// })
}