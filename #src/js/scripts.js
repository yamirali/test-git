@@include('testWebP.js')
@@include('menu_icon.js')


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