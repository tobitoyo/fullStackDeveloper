let socials = document.getElementById('social');
let sclLinks =  document.getElementById('social-links');
let sclLinkDispl = sclLinks.style.display;
let sclLinkDispl2 = document.getElementById('social-links').style.display;
console.log(socials);
console.log(sclLinks);
console.log(typeof sclLinkDispl);
console.log(typeof sclLinkDispl2);
// console.log(sclLinks.style.display);

// FUNCTION TO CHANGE THE DISPLAY PROPERTY

const sclDiv = () => {
    // let sclLinks =  document.getElementById('social-links');
     
}

// CLICK EVENT FUNCTION

const sciDiv = () => {

    let sclLinks =  document.getElementById('social-links');

    if (sclLinks.style.display == "none") {
        sclLinks.style.display = "flex";
        console.log("if");
    }

    else {
        sclLinks.style.display = "none";
        console.log("else");
    } 

}

// console.log(sclDiv);
// console.log(socials);

socials.addEventListener("click", sciDiv);

sclDiv()
// sclLinkDispl = "none";
// sclLinkDispl = "flex";