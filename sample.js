function buildImg(){
    fetch('https://dog.ceo/api/breeds/image/random').then((reponse)=> {
        return reponse.json();
    }).then((res)=>{
        var html = `
            <div class="oc">
                <a href="info.html"><img src='${res.message}'></a>
            </div>
        `;
        $(".oc-scroll").append(html);
    })
}

function loadImage(n){
    for (let index = 0; index < n; index++) {
        buildImg();       
    }
}

for (let index = 0; index < 10; index++) {
    $("#l1").append("<ul>teset</ul>")
    $("#l2").append("<ul>teset</ul>") 
    buildImg()
}



let div = $('.oc-scroll');

div.scroll(() => {
    let scr = $('.oc-scroll');
    if (scr[0].scrollHeight - scr.scrollTop() <= scr.innerHeight() +1) {
        loadImage(10);
    }
  });