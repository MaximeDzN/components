function buildImg(){
    fetch('https://dog.ceo/api/breeds/image/random').then((reponse)=> {
        return reponse.json();
    }).then((res)=>{
        var html = `
            <div class="oc">
                <img src='${res.message}'>
            </div>
        `;
        $(".oc-scroll").append(html);
    })
}

for (let index = 0; index < 100; index++) {
    $("#l1").append("<ul>teset</ul>")
    $("#l2").append("<ul>teset</ul>") 
    buildImg()
}
