menu_button = document.getElementsByClassName('menu_icon')[0]
menu_close = document.getElementsByClassName('menu_close')[0]
menu = document.getElementsByClassName('menu_mobile')[0]
body = document.getElementsByTagName('body')[0]
bar1 = document.getElementsByClassName('menu_bar')[0]
bar2 = document.getElementsByClassName('menu_bar')[1]
bar3 = document.getElementsByClassName('menu_bar')[2]

menu_button.addEventListener('click', () => {
    menu.style.display = 'flex'
})

menu_close.addEventListener('click', () =>{
    menu.style.display = 'none'
})

menu.addEventListener('click', () => {
    menu.style.display = 'none'
})