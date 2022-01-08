function clickimage(id){
    var img = document.getElementsByTagName('img');

    for (var x of img) 
    {
        if (id == x.id)
        {
            x.style.height = "75%";
            x.style.width = "75%";

            x.focus;
        }
        else
        {
            x.style.height = "25%";
            x.style.width = "25%";
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
        console.log("Yes");
    } 
    else 
    {
        console.log('Element is NOT Intersecting');
    }
}

observer.observe(midway);
