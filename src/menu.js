export function menu() {
    const contentDiv = document.querySelector('#content');
    
    contentDiv.replaceChildren();

    //DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "welcom to HERALD'S tecj talk restaurant and laounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for greenBeanCass
    const greenBeanCass = document.createElement("img");
    greenBeanCass.classList.add("image");
    greenBeanCass.src = "../src/assets/greenbeancass.JPG";
    greenBeanCass.alt = "image of Green Beans Casserole";
    contentDiv.appendChild(greenBeanCass);

    //DOM for p tag for greenbeancass
    const para1GreenBeanCass = document.createElement("p");
    para1GreenBeanCass.classList.add("menu-copy");
    para1GreenBeanCass.textContent = "An amazing Green Bean casserol";
    contentDiv.appendChild(para1GreenBeanCass);

    // DOM or macncheese
    const macncheese = document.createElement("img");
    macncheese.classList.add("image");
    macncheese.src = "../src/assets/macnchees.jpg";
    contentDiv.appendChild(macncheese);

    //DOM for p tag for macncheese
    const para1macncheese = document.createElement("p");
    para1macncheese.classList.add("menu-copy");
    para1macncheese.textContent = "this simple mac and cheese is awesomely delicious";
    contentDiv.appendChild(para1macncheese);

}
