function clickimage(passedImg, passedCap, passedLink){
    var allImg = document.getElementsByTagName('img');

    var landingImg = document.getElementById("change-img");
    var landingCap = document.getElementById("change-cap");
    var landingP = document.getElementById("change-p");
    var landingLink = document.getElementById("change-link");

    for (var x of allImg) 
    {
        if (passedImg.id == x.id)
        {
            landingImg.src = passedImg.src;
            landingImg.alt = passedImg.alt;
            landingCap.innerHTML = passedCap.innerHTML;
            landingP.innerHTML = passedImg.alt;
            landingLink.innerHTML = "https://" +  passedLink + "/";
        }
    }
}

function clickbutton(passedLink){
    console.log(passedLink.innerHTML);
    window.open(passedLink.innerText);
}

var midway = document.querySelector('#intro');

var midwayObserver = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
};

var observer = new IntersectionObserver(handleObserver, midwayObserver);

function handleObserver(entry){
    if (entry[0].isIntersecting) 
    {
        document.getElementById('intro').style.opacity = '1';
    }
}

observer.observe(midway);
