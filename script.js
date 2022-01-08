function clickimage(passedImg, passedCap){
    var allImg = document.getElementsByTagName('img');

    var landingImg = document.getElementById("change-img");
    var landingCap = document.getElementById("change-cap");
    var landingP = document.getElementById("change-p");

    for (var x of allImg) 
    {
        if (passedImg.id == x.id)
        {
            console.log(passedCap.innerHTML);
            landingImg.src = passedImg.src;
            landingImg.alt = passedImg.alt
            landingCap.innerHTML = passedCap.innerHTML;
            landingP.innerHTML = passedImg.alt;
        }
    }
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
