fetch('../infos.json')
.then((response) => response.json())
.then((json) => {
    let banners = json['banners']
    banners.forEach((element, index) => {
        let banner_img = document.createElement('img')
        banner_img.setAttribute('class', 'banner_img')
        banner_img.src = element
        let carousel = document.getElementsByClassName('carousel_banners')[0]
        carousel.appendChild(banner_img)
        console.log('add img')
    })
    $('.single-item').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true
    })
    
})

function get_emp(emp){
    fetch('../infos.json')
    .then((response) => response.json())
    .then((json) => {
        
        let popup_div = document.getElementsByClassName('popup')[0]
        popup_div.style.display = 'flex'
        localStorage.setItem('open', 'true')
        let ul = document.getElementsByClassName('popup_ul')[0]
        while( ul.firstChild ){
            ul.removeChild( ul.firstChild );
          }
        json[emp]['arquivos'].forEach(file => {
            let li = document.createElement('li')
            ul.appendChild(li)
            
            let a = document.createElement('a')
            a.innerText = file['nome']
            a.setAttribute('href', file['link'])
            a.setAttribute('target', '_blank')
            li.appendChild(a)
        }) 
    })
}       

function cclose(){
    let popup_div = document.getElementsByClassName('popup')[0]
    popup_div.style.display = 'none'
}

function load_cards(){
    cards_box = document.getElementsByClassName('cards')[0]

    fetch('../infos.json')
    .then((response) => response.json())
    .then((json) => {
        json['empresas'].forEach(element => {
            let emp = json[element]
            let card = document.createElement('div')
            card.classList.add('card')
            card.setAttribute('onclick', `get_emp('${element}')`)
            
            let img = document.createElement('img')
            img.classList.add('img')
            img.setAttribute('src', emp['logo'])
            card.appendChild(img)

            cards_box.appendChild(card)
            console.log('loaded: ' + element)
        });
    })
}