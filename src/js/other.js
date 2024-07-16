console.log('1')

var disMenu = 0;
 pinktext = function(el){
    el.children[0].style.color = "#F4ACBA";
    el.style.transition = "0.3s"
}
 bluetextButton = function(el){
    el.children[0].style.color = "rgba(70, 192, 193, 1)"
    el.children[0].style.transition = "0.3s"

}
 bluetext = function(el){
    el.style.color = "rgba(70, 192, 193, 1)"
    el.style.transition = "0.3s"

}
 hover_fill = function(el){
    
   
    var max = 0
    
    for(i = 0; i < el.children[0].children.length; i++){
        max = Math.max(i)
    }
  
console.log("максимальное:" + max)
   var maxChild = 0
    for(i = 0; i < el.children[1].children.length; i++){
            maxChild = Math.max(i)
      }

    el.children[0].children[max].style.cssText = "transition:1s ease-in-out; transform:scale(20000%);"
    el.children[0].children[max-1].style.cssText = "transition:1s ease-in-out;transform:scale(20000%); "
    if(el.className != "brends__block brends__block_grid3" && el.className != "brends__block brends__block_grid6"&&el.className!="brends__block brends__block_grid7"&&el.className!="brends__block brends__block_grid8"){  
        
        el.children[1].children[1].style.color = "white"
        el.children[1].children[maxChild].style.color = "white"
        if(el.className == "brends__block brends__block_grid1"){
            el.children[1].children[0].style.cssText = "content:url('images/footer-implovit.svg')"
        }
      


    }

}
 hover_nofill = function(el){
    var maxChild = 0
    for(i = 0; i < el.children[1].children.length; i++){
        maxChild = Math.max(i)
        console.dir(maxChild)
    }

    for(i = 0; i < el.children[0].children.length; i++){
        console.dir(i)
        max = Math.max(i)

    }
    el.children[1].children[1].style.color = "black"
    el.children[0].children[max].style.cssText = "transition: 0.3s ease-in-out; transform:scale(100%)"
    el.children[0].children[max-1].style.cssText = "transition: 0.3s ease-in-out; transform:scale(100%)"

    if(el.className == "brends__block brends__block_grid1"){
        el.children[1].children[maxChild].style.color = "rgba(70, 192, 193, 1)"
        el.children[1].children[0].style.cssText = "transition: 0.3s ease-in-out;content:url('images/brends/brends__name/импловит.svg')"
    }

    else if(el.className == "brends__block brends__block_grid2" || el.className == "brends__block brends__block_grid4"){
        el.children[1].children[maxChild].style.color = "transition: 0.3s ease-in-out;rgba(228, 0, 70, 1)"
    }
   
    else if(el.className == "brends__block brends__block_grid5"){
        el.children[1].children[maxChild].style.color = "transition: 0.3s ease-in-out;rgba(70, 192, 193, 1)"

    }
}
fm_ierh = 0
 next = function(){
    if(fm_ierh == 0){
    document.getElementsByClassName("full-menu__body_group1")[0].style.display = "none"
    document.getElementsByClassName("full-menu__body_group2")[0].style.display = "flex"
    document.getElementsByClassName("menu-text_anactive-gray")[0].style.display = "flex"
    document.getElementsByClassName("full-menu__implovit")[0].style.display ="none"
    fm_ierh =1
    }
    else if(fm_ierh == 1){
        document.getElementsByClassName("full-menu__body_group2")[0].style.display = "none"
        document.getElementsByClassName("full-menu__body_group3")[0].style.display = "flex"
        fm_ierh = 2
        console.dir(fm_ierh)
        document.getElementsByClassName("full-menu__liked")[0].style.display = "none"
    }

}

 back = function(){
    if(fm_ierh == 2){
        document.getElementsByClassName("full-menu__body_group2")[0].style.display = "flex"
        document.getElementsByClassName("full-menu__body_group3")[0].style.display = "none"
        fm_ierh = 1
        document.getElementsByClassName("full-menu__liked")[0].style.display = "flex"

    }  
    else if(fm_ierh == 1){
    document.getElementsByClassName("full-menu__body_group1")[0].style.display = "flex"
    document.getElementsByClassName("full-menu__body_group2")[0].style.display = "none"
    document.getElementsByClassName("menu-text_anactive-gray")[0].style.display = "none"
    document.getElementsByClassName("full-menu__implovit")[0].style.display ="flex"
    fm_ierh=0
}
}
 fullMenu_enable = function(){
    
    document.getElementsByClassName("full-menu")[0].style.transition = "0.3s"

    document.getElementsByClassName("full-menu")[0].style.right = "0px"
    document.getElementsByClassName("stop-scroll")[0].style.display = "block"

}
 fullMenu_disable = function(){
    
    document.getElementsByClassName("full-menu")[0].style.transition = "0.3s"
    document.getElementsByClassName("stop-scroll")[0].style.display = "none"

    document.getElementsByClassName("full-menu")[0].style.right = "-360px"

}

 tumblerMouseEnter = function(el){
    if(el.style.color != "black")
        el.style.color ="rgba(70, 192, 193, 1)"
    
}
 whitetextButton = function(el){
 el.children[0].style.color = "white"
}
 whitetext = function(el){
    el.style.color = "white"
}
 icebluetext = function(el){
    el.style.color = "rgba(160, 220, 228, 1)"
    el.style.transition = "0.3s"
}
 blacktext = function(el){
    el.style.color = "black"
    el.style.transition = "0.3s"
}


 Citiesblacktext = function(el){
    el.children[0].style.color = "black"
    el.children[0].style.transition = "0.3s"
}
 Citiesbluetext = function(el){
    el.children[0].style.color = "rgba(70, 192, 193, 1)"
    el.children[0].style.transition = "0.3s"

}

kardiolaCitataCount = 0
kardiola_text_Fulltext = function(el){
    if(kardiolaCitataCount == 0){
        document.querySelector(".kardiola-citata__text").style.height = "auto"
        document.querySelector(".kardiola-citata__opis").style.height = "auto"
        document.querySelector(".kardiola-citata").style.height = "667px"
        document.querySelector(".slide-zagolovok_pink_active").style.display = "block"
        document.querySelector(".kardiola-citata__gradient_anactive").style.display = "none"
        el.innerText = "свернуть"
        kardiolaCitataCount = 1
    }
    else if(kardiolaCitataCount == 1){
        document.querySelector(".kardiola-citata__text").style.height = "127px"
        document.querySelector(".kardiola-citata__opis").style.height = "204px"
        document.querySelector(".kardiola-citata").style.height = "260px"
        document.querySelector(".kardiola-sales").style.margin = "90px auto 0 auto "
        document.querySelector(".slide-zagolovok_pink_active").style.display = "none"
        document.querySelector(".kardiola-citata__gradient_anactive").style.display = "block"
        el.innerText = "Еще"
        kardiolaCitataCount = 0
    }
}
kardiolaOpisCount = 0
kardiolaOpis_text_Fulltext = function(el){
    if(kardiolaOpisCount == 0){
        el.innerText = "свернуть"
        document.querySelector(".kardiola-opis__text").style.height = "540px"
        document.querySelector('.kardiola-opis').style.height = "1100px"
        kardiolaOpisCount = 1
    }
    else if(kardiolaOpisCount == 1){
        el.innerText = "Еще"
        document.querySelector(".kardiola-opis__text").style.height = "340px"
        document.querySelector('.kardiola-opis').style.height = "900px"
        kardiolaOpisCount = 0
    }
}
