let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
    {
      "title" : "Neon Lights in Hong Kong",
      "picture_url" : "media/L1.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhyperallergic.com%2F152810%2Fsaving-the-memory-of-hong-kongs-neon-before-it-goes-dark%2F&psig=AOvVaw2rvArQCrZJaIHL9MK8fraT&ust=1671424040913000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMD84vOpgvwCFQAAAAAdAAAAABAO",
       "category" : "Location",
    },
    {
      "title" : "Neon Lights in Hong Kong",
      "picture_url" : "media/L2.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yatzer.com%2Fneonsigns-hk&psig=AOvVaw2rvArQCrZJaIHL9MK8fraT&ust=1671424040913000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMD84vOpgvwCFQAAAAAdAAAAABAW",
      "category" : "Location",
    },
    {
        "title" : "Intensity of Neon Lights",
        "picture_url" : "media/I1.jpg",
        "link" : "https://imgur.com/eH1lIfL",
        "category" : "Intensity",
    },
    {
      "title" : "Intensity of Neon Lights",
      "picture_url" : "media/I2.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FThe-Hong-Kong-Light-Pollution-Map-using-Google-Maps-Icon-colors-represent-the-averaged_fig3_51452355&psig=AOvVaw2393iTUj0P4PI1GrHszekk&ust=1671423853974000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPijxZqpgvwCFQAAAAAdAAAAABAY",
      "category" : "Intensity",
    },
    {
      "title" : "Intensity of Neon Lights",
      "picture_url" : "media/I3.jpg",
      "link" : " https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mapshop.com%2Fhong-kong-at-night%2F&psig=AOvVaw2393iTUj0P4PI1GrHszekk&ust=1671423853974000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPijxZqpgvwCFQAAAAAdAAAAABBC",
      "category" : "Intensity",
    },
    {
        "title" : "Intention of Neon Lights",
        "picture_url" : "media/I4.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fweburbanist.com%2F2015%2F08%2F29%2Flights-out-hong-kong-bans-iconic-neon-signs-from-city-streets%2F&psig=AOvVaw2rvArQCrZJaIHL9MK8fraT&ust=1671424040913000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMD84vOpgvwCFQAAAAAdAAAAABAe",
        "category" : "Intention",
    },
    {
        "title" : "Intention of Neon Lights",
        "picture_url" : "media/I5.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fweburbanist.com%2F2015%2F08%2F29%2Flights-out-hong-kong-bans-iconic-neon-signs-from-city-streets%2F&psig=AOvVaw2rvArQCrZJaIHL9MK8fraT&ust=1671424040913000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMD84vOpgvwCFQAAAAAdAAAAABAe",
        "category" : "Intention",
    },
    {
      "title" : "Intention of Neon Lights",
      "picture_url" : "media/I6.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40aalokrathod%2Fthe-gradual-death-of-neon-lights-in-hong-kong-8585beb1dbad&psig=AOvVaw1qt-iuerTy8Y6uscag4uBS&ust=1671424191251000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDVrruqgvwCFQAAAAAdAAAAABAJ",
      "category" : "Intention",
    },
    {
      "title" : "Intention of Neon Lights",
      "picture_url" : "media/I7.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Frandomwire.com%2Fhong-kong-nights%2F&psig=AOvVaw1qt-iuerTy8Y6uscag4uBS&ust=1671424191251000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDVrruqgvwCFQAAAAAdAAAAABAO",
      "category" : "Intention",
    },
    {
      "title" : "Intention of Neon Lights",
      "picture_url" : "media/I8.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fbusy-street-scene-with-neon-signs-in-hong-kong-gm503888764-82835855&psig=AOvVaw1qt-iuerTy8Y6uscag4uBS&ust=1671424191251000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDVrruqgvwCFQAAAAAdAAAAABAY",
      "category" : "Intention",
    },
    {
      "title" : "Intention of Neon Lights",
      "picture_url" : "media/G1.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebneel.com%2Fneon-light-night-photography-zaki-abdelmounim&psig=AOvVaw0ZNSbMVjx-i8akOxq66K2Z&ust=1671432164742000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMCbspXIgvwCFQAAAAAdAAAAABAE",
      "category" : "Intention",
    },
    {
      "title" : "Girls Portrayed in the Neon Lights",
      "picture_url" : "media/G2.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.ae%2Fdetail%2Fphoto%2Fyoung-smiling-asian-woman-looking-back-in-front-of-royalty-free-image%2F1425538558&psig=AOvVaw09zRTSxCf7IeDm0KbCKJRr&ust=1671432237748000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDlqLjIgvwCFQAAAAAdAAAAABAE",
      "category" : "Girls",
    },
    {
      "title" : "Girls Portrayed in the Neon Lights",
      "picture_url" : "media/G3.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.scmp.com%2Flifestyle%2Farts-culture%2Farticle%2F3157466%2Fneon-artist-karen-chan-reclaims-hong-kong-icon-and-forges&psig=AOvVaw09zRTSxCf7IeDm0KbCKJRr&ust=1671432237748000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDlqLjIgvwCFQAAAAAdAAAAABAX",
      "category" : "Girls",
    },
    {
      "title" : "Girls Portrayed in the Neon Lights",
      "picture_url" : "media/G4.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.japantimes.co.jp%2Fnews%2F2019%2F08%2F26%2Fbusiness%2Feconomy-business%2Fprotest-weary-hong-kong-faces-economic-recession-well-existential-crisis%2F&psig=AOvVaw09zRTSxCf7IeDm0KbCKJRr&ust=1671432237748000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDlqLjIgvwCFQAAAAAdAAAAABAj",
      "category" : "Girls",
    },
    {
      "title" : "Girls Portrayed in the Neon Lights",
      "picture_url" : "media/G5.jpg",
      "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fneon-lights-hong-kong.html&psig=AOvVaw09zRTSxCf7IeDm0KbCKJRr&ust=1671432237748000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDlqLjIgvwCFQAAAAAdAAAAABAo",
      "category" : "Girls",
    },
    {
        "title" : "Girls Portrayed in the Neon Lights",
        "picture_url" : "media/G6.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fneon-signboard-in-hong-kong&psig=AOvVaw09zRTSxCf7IeDm0KbCKJRr&ust=1671432237748000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDlqLjIgvwCFQAAAAAdAAAAABAw",
        "category" : "Girls",
    },
    {
        "title" : "Neon Light",
        "picture_url" : "media/H1.jpg",
        "link" : "https://www.architectural-review.com/essays/neon-crisis-in-hong-kong",
        "category" : "Heat",
    },
    {
        "title" : "Neon Light",
        "picture_url" : "media/H2.jpg",
        "link" : "https://inductionlightingfixtures.com/blog/2018/09/11/hong-kong-replacing-iconic-neon-lighting/",
        "category" : "Heat",
    },
    {
        "title" : "Neon Light",
        "picture_url" : "media/H3.jpg",
        "link" : "https://inductionlightingfixtures.com/blog/2018/09/11/hong-kong-replacing-iconic-neon-lighting/",
        "category" : "Heat",
    },
    {
        "title" : "Neon Light Tech",
        "picture_url" : "media/T1.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thejakartapost.com%2Flife%2F2018%2F04%2F26%2Fneon-nostalgia-in-hong-kong-as-lights-go-out.html&psig=AOvVaw1Jt3BPruST4WoiJ3Yv16i4&ust=1671432465384000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjT6aTJgvwCFQAAAAAdAAAAABAJ",
        "category" : "Technology",
    },
    {
        "title" : "Neon Light Tech",
        "picture_url" : "media/T2.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.architectural-review.com%2Fessays%2Fneon-crisis-in-hong-kong&psig=AOvVaw1Jt3BPruST4WoiJ3Yv16i4&ust=1671432465384000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjT6aTJgvwCFQAAAAAdAAAAABAR",
        "category" : "Technology",
    },
    {
        "title" : "Neon Light Tech",
        "picture_url" : "media/T3.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.houseofforme.com%2Fmood%2Fa-resurrection-of-neon-signs-in-hong-kong&psig=AOvVaw1Jt3BPruST4WoiJ3Yv16i4&ust=1671432465384000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjT6aTJgvwCFQAAAAAdAAAAABAe",
        "category" : "Technology",
    },
    {
        "title" : "Neon Light Tech",
        "picture_url" : "media/T4.jpg",
        "link" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthehkhub.com%2Fmaking-neon-signs-with-a-hong-kong-master%2F&psig=AOvVaw1Jt3BPruST4WoiJ3Yv16i4&ust=1671432465384000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjT6aTJgvwCFQAAAAAdAAAAABAm",
        "category" : "Technology",
    },
    {
        "title" : "Neon Light Tech",
        "picture_url" : "media/T5.jpg",
        "link" : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.xinhuanet.com%2Fenglish%2F2019-03%2F31%2Fc_137938714_5.htm&psig=AOvVaw1Jt3BPruST4WoiJ3Yv16i4&ust=1671432465384000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjT6aTJgvwCFQAAAAAdAAAAABBC",
        "category" : "Technology",
    },
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
  
// ADD CATEGORY //
let newContentSubheading = document.createElement("H5");
newContentSubheading.innerHTML = incomingJSON['category'];
newContentElement.appendChild(newContentSubheading);
}