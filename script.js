function mouseUp() {
    target.style.pointerEvents ="auto";

    let insert = document.querySelector(".space");
    insert.replaceWith(target);
    target.style.position = "static";
    target.style.zIndex = null;
    target.style.left = null;
    target.style.top = null;
    target = null;
}

function mouseMove(e) {
    if(target){
        target.style.left = e.clientX-gapX + "px";
        target.style.top = e.clientY-gapY + "px";
    }
}

function mouseOver(e) {
    console.log("mouseOver")
    if(target){
        if(e.target.tagName=="LI"){
            if(document.querySelector(".space")){
                document.querySelectorAll(".space").forEach(elm => {
                    elm.remove();
                })
            }
            e.target.insertAdjacentHTML("beforebegin", '<div class="space">ここに挿入</div>');
        }
    }
}

document.addEventListener("mousedown", e=> {
    target = e.target;

    //mouseoverにdragoverの役割をさせるため
    target.style.pointerEvents ="none";

    target.style.zIndex = "100";
    target.style.position = "absolute";
    
    elmX = target.getBoundingClientRect().left;
    elmY = target.getBoundingClientRect().top;
    gapX = e.clientX - elmX;
    gapY = e.clientY - elmY;
    console.log(e.clientX-gapX)
    console.log(e.clientY-gapY)
    
    target.style.left = elmX + "px";
    target.style.top = elmY + "px";
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener("mouseover", mouseOver);
})
