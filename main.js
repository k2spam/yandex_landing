const items = [
    {name: 'Хозе-Рауль Капабланка', desc: 'Чемпион мира по шахматам', link: '#'},
    {name: 'Эммануил Ласкер', desc: 'Чемпион мира по шахматам', link: '#'},
    {name: 'Александр Алехин', desc: 'Чемпион мира по шахматам', link: '#'},
    {name: 'Арон Нимцович', desc: 'Чемпион мира по шахматам', link: '#'},
    {name: 'Рихард Рети', desc: 'Чемпион мира по шахматам', link: '#'},
    {name: 'Остап Бендер', desc: 'Чемпион мира по шахматам', link: '#'},
    // {name: 'Остап Бендер', desc: 'Чемпион мира по шахматам', link: '#'}
]
const itemsCount = items.length
const itemsPerPage = 3
let currentPage = 1

const init = _ => {
    carousel()
}

const carousel = _ => {
    carouselPages()
    drawItems()
    carouselButtons()
}

const drawItems = _ => {
    const inner = document.querySelector('.carousel-inner')
    items.map(e => inner.appendChild(createItem(e.name, e.desc, e.link)))
}

const createItem = (title, desc, link) => {
    const item = document.createElement('div')
    const imgWrap = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h4')
    const text = document.createElement('p')
    const btn = document.createElement('a')

    item.className = 'carousel-item'
    imgWrap.className = 'carousel-item-image-wrap'
    img.className = 'carousel-item-image'
    
    img.src = 'images/body/profile.png'
    name.innerText = title
    text.innerText = desc
    btn.href = link
    btn.innerText = 'Подробнее'

    imgWrap.appendChild(img)
    item.appendChild(imgWrap)
    item.appendChild(name)
    item.appendChild(text)
    item.appendChild(btn)

    return item
}

const carouselPages = _ => {
    const element = document.getElementById('carousel-page')
    const count = itemsPerPage * currentPage
    element.innerText = `${count > itemsCount ? itemsCount : count}/${itemsCount}`
}

const carouselButtons = _ => {
    const left = document.getElementById('carousel-button-left')
    const right = document.getElementById('carousel-button-right')

    const checkLeft = _ => currentPage > 1 
        ? left.removeAttribute('disabled') 
        : left.setAttribute('disabled', true)
    const checkRight = _ => currentPage * itemsPerPage < itemsCount 
        ? right.removeAttribute('disabled')  
        : right.setAttribute('disabled', true) 

    const updateTranslate = _ => {
        const offset = -(currentPage-1) * 100
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`
    }
    checkLeft()
    checkRight()

    const upd = _ => {
        carouselPages()
        checkLeft()
        checkRight()
        updateTranslate()
    }    
    

    left.onclick = _ => {
        currentPage--
        upd()
    }

    right.onclick = _ => {
        currentPage++
        upd()
    }

}

document.addEventListener('DOMContentLoaded', init)