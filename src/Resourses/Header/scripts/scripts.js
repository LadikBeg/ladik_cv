

 export function showMenu(){
    let menu = document.getElementById("show_menu")
    let button = document.getElementById("button_menu")
     if (menu.style.visibility === 'hidden'){
         menu.style.top = '0'
         menu.style.display = 'grid'
         menu.style.visibility = 'visible'
         button.textContent = 'close'
     }else {
         menu.style.top = '-100%'
         menu.style.visibility = 'hidden'
         button.textContent = 'menu'
     }
}
