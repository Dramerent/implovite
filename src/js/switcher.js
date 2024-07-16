console.log('1')

tumbler = 0
 tumblerRightLeft = function(el){
    if(document.documentElement.scrollWidth>1280){
        if(tumbler == 0){
            el.children[1].children[1].style.marginLeft = "auto"
            el.children[1].children[1].style.transition = "0.3s"
            el.children[0].style.color = "rgba(189, 189, 189, 1)"
            el.children[2].style.color = "black"

            tumbler = 1
        }
        else if(tumbler == 1){
            el.children[1].children[1].style.marginLeft = "0"
            el.children[2].style.color = "rgba(189, 189, 189, 1)"
            el.children[0].style.color = "black"
            tumbler = 0

        }
    }
}

 tumblerRightLeft_1280 = function(el){
    if(document.documentElement.scrollWidth<=1280){
        if(tumbler == 0){
            el.children[1].style.marginLeft = "auto"
            el.children[1].style.transition = "0.3s"
            el.children[0].style.color = "rgba(189, 189, 189, 1)"
            el.children[2].style.color = "black"
    
            tumbler = 1
        }
        else if(tumbler == 1){
            el.children[1].style.marginLeft = "0"
            el.children[2].style.color = "rgba(189, 189, 189, 1)"
            el.children[0].style.color = "black"
            tumbler = 0
    
        }
    }
}
 activeTumblerHoverLeft = function(el){
    console.dir(el)
    if(tumbler != 0){
        el.style.color = "rgb(70, 192, 193)"
    }
}
 activeTumblerHoverLeftActive = function(el){
    if(document.documentElement.scrollWidth>=1280){
        activeTumblerHoverLeft(el);
    }
}
 anactiveTumblerHoverLeft= function(el){
    if(el.style.color == "rgb(70, 192, 193)"){
        el.style.color ="rgba(189, 189, 189, 1)"
    }
}
 activeTumblerHoverRight= function(el) {
    console.dir(el)
    if(tumbler == 0){
        el.style.color = "rgb(70, 192, 193)"
    }
}
 anactiveTumblerHoverRight= function(el){
    if(el.style.color == "rgb(70, 192, 193)"){
        el.style.color ="rgba(189, 189, 189, 1)"
    }
}
 Lefttumblerchangecolor = function(el){
    if(tumbler == 0){
        el.style.color = "black"
    }
}