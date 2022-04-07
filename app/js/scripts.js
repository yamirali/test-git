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


const header__dropdown = document.getElementById('header__dropdown')
header__dropdown.style.display = "none"

document.addEventListener("click", (evt) => {
    const header__profile = document.getElementById("header__account")
    let targetElement = evt.target    

    do {
        if (targetElement == header__profile && header__dropdown.style.display == "none") {
            header__dropdown.style.display = "block"
            return
        }
        targetElement = targetElement.parentNode
    } while(targetElement);
    header__dropdown.style.display = "none"
})

for(var menuItem = 0; menuItem < menuIcons.length; menuItem++) {
    var elem = document.getElementById(menuIcons[menuItem].id)
    elem.style.backgroundImage = `url(${menuIcons[menuItem].idle})`
    if(document.getElementById(menuIcons[menuItem].parentId).classList.contains("menu__item_active")) {
        elem.style.backgroundImage = `url(${menuIcons[menuItem].active})`
    }
}

var isToggle = true;
function toggle() {
    var myVarVal = getComputedStyle(document.documentElement).getPropertyValue('--menu-width');
    
    if(window.innerWidth <= 768) {
        const header__menu = document.getElementById('header__menu')
        document.getElementById("hello").style.display = "none"
        
        document.addEventListener("click", (evt) => {
            const header__profile = document.getElementById("header__humburger")
            let targetElement = evt.target    
        
            do {
                if (targetElement == header__profile &&document.getElementById("hello").style.display == "none") {
                    document.getElementById("hello").style.display = "block"
                    header__menu.style.height = "305px"
                    return
                }
                targetElement = targetElement.parentNode
            } while(targetElement);
            document.getElementById("hello").style.display = "none"
            header__menu.style.height = "0px"
        })
        
    } else {
        if(isToggle) {
            console.log(myVarVal)
            let width = "0px"
            if(width === "0px") {
                console.log("aa")
                document.getElementById("header").style.width = `calc(100% - ${width} - 1%)`;
                document.getElementById("content").style.marginLeft = `calc(${width} + 0.5%)`;
            } else {
                document.getElementById("header").style.width = `calc(100% - ${width} - 1.5%)`;
                document.getElementById("content").style.marginLeft = `calc(${width} + 1%)`;
            }
            document.getElementById("menu").style.width = width;
            document.getElementById("logo").style.display = "none";
            document.getElementById("nav").style.display = "none";
            
            isToggle = false;
        } else {
            console.log(myVarVal)
            document.getElementById("menu").style.width = `${myVarVal}`;
            document.getElementById("logo").style.display = "flex";
            document.getElementById("nav").style.display = "block";
            document.getElementById("header").style.width = `calc(100% - ${myVarVal} - 1.5%)`;
            document.getElementById("content").style.marginLeft = `calc(${myVarVal} + 1%)`;
            isToggle = true;
        }
    }

}

function mobileToggle() {
    var myVarVal = getComputedStyle(document.documentElement).getPropertyValue('--menu-width');
    if(isToggle) {
        console.log(myVarVal)
        let width = "0px"
        if(width === "0px") {
            console.log("aa")
            document.getElementById("header").style.width = `calc(100% - ${width} - 1%)`;
            document.getElementById("content").style.marginLeft = `calc(${width} + 0.5%)`;
        } else {
            document.getElementById("header").style.width = `calc(100% - ${width} - 1.5%)`;
            document.getElementById("content").style.marginLeft = `calc(${width} + 1%)`;
        }
        document.getElementById("menu").style.width = width;
        document.getElementById("logo").style.display = "none";
        document.getElementById("nav").style.display = "none";
        
        isToggle = false;
    } else {
        console.log(myVarVal)
        
        isToggle = true;
    }
}
console.log(window.innerWidth)