

 export function showMenu(){
    let menu = document.getElementById("show_menu")
    let button = document.getElementById("button_menu")
     if (button.textContent === "menu"){
         menu.style.visibility = 'visible'
         menu.style.display = 'grid'
         menu.style.top = '0'
         button.textContent = 'close'
     }else {
         menu.style.top = '-100%'
         menu.style.visibility = 'hidden'
         button.textContent = 'menu'
     }
}
