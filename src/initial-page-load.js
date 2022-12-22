export function initialPageLoad(){
    const contentDiv = document.querySelector("#content");

     //Remove any existing DOM children if present
     contentDiv.replaceChildren();
    
     //DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to HERALD'S Tech Talk Restaurant And Lounge";
    contentDiv.appendChild(heading);

    //DOM for landing page top image
    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/post-thumb-3.jpg";
    topImage.alt = "image of restaurant";
    contentDiv.appendChild(topImage);

    
    //DOM for landing page top image
    const nopImage = document.createElement("img");
    nopImage.classList.add("top-image");
    nopImage.src = "../src/assets/post-thumb-5.jpg";
    nopImage.alt = "image of restaurant";
    contentDiv.appendChild(nopImage);


    //DOM for p tag #1
    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "This an up space restaurant that touts its space";
    contentDiv.appendChild(para1);

    //DOM for p tag #2
    const para2 = document.createElement("p");
    para2.classList.add("Landing-page-copy");
    para2.textContent = "Attire required for this facility is business casual at a minimum";
    contentDiv.appendChild(para2);

    //DOM for p tag #3
    const para3 = document.createElement("p");
    para3.classList.add("Landing-page-copy");
    para3.textContent = "Thanks, management";
    contentDiv.appendChild(para3);

}