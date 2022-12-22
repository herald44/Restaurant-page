export function contact() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    //DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "welcome to HERALD'S tech talk restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //DOM for phone image
    const phoneImage = document.createElement("img");
    phoneImage.classList.add('image');
    phoneImage.src = "../src/assets/phone.png";
    phoneImage.alt = "image of phone";
    contentDiv.appendChild(phoneImage);

    //DOM for p tag for phoneImage
    const para1PhoneImage = document.createElement("p");
    para1PhoneImage.classList.add("contact-copy");
    para1PhoneImage.textContent = "call us";
    contentDiv.appendChild(para1PhoneImage);

    //DOM for emailImage
    const emailImage = createElement("img");
    emailImage.classList.add("image");
    emailImage.src = "../src/assets/email.jpg";
    emailImage.alt = "image of email";
    contentDiv.appendChild(emailImage);

    //DOM for p tag for emailImage
    const para2EmailImage = document.createElement("p");
    para2EmailImage.classList.add("contact-copy");
    para2EmailImage.textContent = "email us at hale@hales.com";
    contentDiv.appendChild(para2EmailImage);

    //DOM for addressImage
    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = "../src/assets/mail.jpg";
    topImage.alt = "image of mailing address";
    contentDiv.appendChild(topImage)

    //DOM for p tag for addressImage
    const para3AddressImage = document.createElement("p");
    para3AddressImage.classList.add("content-copy");
    para3AddressImage.textContent = "our address is 1234 no name, no town, in X country";
    contentDiv.appendChild(para3AddressImage);

}