// slider swipper
console.log('1')
disMenu = 0
var enable = 0;
var groupChild = (document.getElementsByClassName("header__Group")[0].children)
var time = 0;
var searchGroup = document.getElementsByClassName("Anactive-Lupa")[0]
var products = document.getElementsByClassName("Header-Menu__Products")[0]
var prodMini = document.getElementsByClassName("Header-Group__Products")[0]
var locate = 0
ret = function(){
    time = 1;
    
    enable = 0
    document.getElementsByClassName("Search-Group_anactive")[0].style.display = "flex"
    document.getElementsByClassName("Search-Group__Input")[0].placeholder = "поиск товара";
    document.getElementsByClassName("Search-Group__Lupa_Enabled")[0].style.display = "block"
    document.getElementsByClassName("Anactive-close")[0].style.display = "none"
    searchGroup.style.display = "none"
    document.getElementsByClassName("SearchLine")[0].style.width = "377px"
    document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "white"
    document.getElementsByClassName("Search-Group__Input")[0].value = ""
    setTimeout(timer, 0.1)
    setTimeout(() => {enable = 2}, 1)

    
}

 changeActiveSearch =function (el){
    
    if(time != 1){

        time = 1
        enable = 0
        for(i = 2; i <=8; i++){
            groupChild[i].style.display = "flex"
        }
        el.children[1].placeholder = "Введите первые буквы";
        el.children[1].style.backgroundColor = "rgba(0, 89, 176, 0.2) ";
        el.children[1].style.fontWeight = "lighter";
        console.dir(el) 
        searchGroup.style.display = "block"
        document.getElementsByClassName("Search-Group__Lupa_Enabled")[0].style.display = "none"
        document.getElementsByClassName("Anactive-close")[0].style.display = "block"
        document.getElementsByClassName("SearchLine")[0].style.width = "395px"
        setTimeout(timer, 1)
    }
    
    setTimeout(timer, 1)
    setTimeout(() => {enable = 2}, 1)
        
        
}

timer = function (){
 time = 0
}
 ReturnToHomePage = function (){
    time = 1
    window.open("index.html");  
    setTimeout(timer, 1)
}


 baseHeaderOff = function (){
    if(time < 1 && document.documentElement.scrollWidth >=1280 && disMenu == 0){
        for(i = 2; i <=8; i++){
            groupChild[i].style.display = "flex"
           
        }
        document.getElementsByClassName("Search-Group_anactive")[0].style.cssText = "display: none; margin-left:50px; padding: 0 30px"

         enable = 2;       
         time = 1
         document.getElementsByClassName("header__NameLogo-And-Search")[0].style.display = "none"
         document.getElementsByClassName("Header__Menu")[0].style.display = "none"
         document.getElementsByClassName("Header__Group_Disabled")[0].style.display = "flex"
         document.getElementsByClassName("Like Search-Group__like")[0].style.display = "none"
         
         
            
       
        document.getElementsByClassName("Search-Group_anactive")[0].style.display = "none"
        document.getElementsByClassName("Like ")[0].style.display = "flex"
        document.getElementsByClassName("Lupa ")[0].style.display = "flex"
      
       
     } 
     else if(time < 1 && document.documentElement.scrollWidth >=1500 && disMenu == 1){
        headerGroupEnable()
        disMenu = 0 
     }
     
}  

 baseHeaderOn = function (){
    if(enable == 2 && disMenu == 0){
        enable = 0
        time = 1
        document.getElementsByClassName("header__NameLogo-And-Search")[0].style.display = "flex"
        document.getElementsByClassName("Header__Menu")[0].style.display = "flex"
        document.getElementsByClassName("Header__Group_Disabled")[0].style.display = "none"
        document.getElementsByClassName("Like Search-Group__like")[0].style.display = "block"
        document.getElementsByClassName("Search-Group_anactive")[0].style.display = "none"
          for(i = 2; i <=8; i++){
            groupChild[i].style.display = "none"
            
        }
        
    }
    else if(enable == 2 && disMenu == 1){
        headerGroupEnable()
        disMenu = 0
    }

    setTimeout(timer, 1)
    
}

document.onclick = function(){
    if(time != 1 && enable == 0 && disMenu == 0){
        ret()
    }
}
document.getElementsByClassName("Search-Group__Input")[0].oninput = function(){
    if(document.getElementsByClassName("Search-Group__Input")[0].selectionStart>0){
        document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "white"
        console.dir(document.getElementsByClassName("Search-Group__Input")[0])
    }
    else{
        document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "rgba(0, 89, 176, 0.2) "
    }
}
 menuover = function (el){ 
    time = 1
    
    el.style.backgroundColor = "rgba(160, 220, 228, 1)"
    el.style.border = "1px transparent"
    el.style.borderStyle = "none none solid none"
    el.style.borderColor = "rgba(70, 192, 193, 1)"
    if(el.classList.contains("Header-Menu__Products")){
        enable = 0
        console.dir(enable)
    }
    
    
}
 menuleave = function (el){
    time = 0;
    enable = 2
    el.style.backgroundColor = "white"
    el.style.border = "0px none transparent"
    if(el.classList.contains("Header-Menu__Products")){
       
            el.style.backgroundColor = "rgba(160, 220, 228, 1)";
            el.style.border = "1px transparent";
            el.style.borderStyle = "none none solid none";
            el.style.borderColor = "rgba(70, 192, 193, 1)";
            console.log("ekem epta")
            
        }  
}


 products.style.backgroundColor = "rgba(160, 220, 228, 1)";
 products.style.border = "1px transparent"; 
    products.style.borderStyle = "none none solid none";
    products.style.borderColor = "rgba(70, 192, 193, 1)";


 headerGroupDisable = function (){
    enable = 0
    time = 1 
    document.getElementsByClassName("Search-Group_anactive")[0].style.cssText = "display: flex; margin-left:50px; padding: 0 30px"
    
    for(i = 2; i <=8; i++){
         groupChild[i].style.display = "none"
    }
    setTimeout(() => {enable = 2}, 1)
    document.getElementsByClassName("Like header-group__like")[0].style.display = "none"
    document.getElementsByClassName("Lupa header-group__Lupa")[0].style.display = "none" 
    setInterval(timer, 1)
    disMenu = 1

}

 headerGroupEnable = function (){
    enable = 0
    time = 1 
    document.getElementsByClassName("Search-Group_anactive")[0].style.display = ""
    for(i = 2; i <=8; i++){
         groupChild[i].style.display = "flex"
         console.dir("w")
    }
    document.getElementsByClassName("Like header-group__like")[0].style.display = ""
    document.getElementsByClassName("Lupa header-group__Lupa")[0].style.display = ""
    setTimeout(() => {enable = 2}, 1)
}
 text = function (){
    time = 1
    enable = 0
    setTimeout(() => {enable = 2}, 1)
    setInterval(timer, 1)
}









