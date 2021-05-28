function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
    }
);
const menuIcons = [
    {
        parentId:   "menu__anchor-news",
        id:         "menu__icon-news",
        idle:       "../img/menu__icon-news.png",
        active:     "../img/menu__icon-news-white.png"
    },
    {   
        parentId:   "menu__anchor-events",
        id:         "menu__icon-events",
        idle:       "../img/menu__icon-events.png",
        active:     "../img/menu__icon-events-white.png"
    },
    {
        parentId:   "menu__anchor-compet",
        id:         "menu__icon-compet",
        idle:       "../img/menu__icon-compet.png",
        active:     "../img/menu__icon-compet-white.png"
    },
    {   
        parentId:   "menu__anchor-dvizh",
        id:         "menu__icon-dvizh",
        idle:       "../img/menu__icon-dvizh.png",
        active:     "../img/menu__icon-dvizh-white.png"
    },
    {
        parentId:   "menu__anchor-courses",
        id:         "menu__icon-courses",
        idle:       "../img/menu__icon-courses.svg",
        active:     "../img/menu__icon-courses-white.png"
    }
]

document.getElementById("re").addEventListener("click", () => {
    window.open("../../newsItemPage.html","_self")
})
var x = document.getElementById('dropdown-content');
function myFunction() {
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

for(var menuItem = 0; menuItem < menuIcons.length; menuItem++) {
    var elem = document.getElementById(menuIcons[menuItem].id)
    elem.style.backgroundImage = `url(${menuIcons[menuItem].idle})`
    if(document.getElementById(menuIcons[menuItem].parentId).classList.contains("menu__item_active")) {
        elem.style.backgroundImage = `url(${menuIcons[menuItem].active})`

        // document.getElementById(menuIcons[menuItem].parentId).addEventListener("mouseenter",()=>{
        //     elem.style.backgroundImage = `url(${menuIcons[menuItem].idle})`
        // })
    }
    
}