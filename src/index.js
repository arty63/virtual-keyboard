//import './styles/styles.css'
import "./styles/main.scss" //импортим стили из scss

import {firstRow, firstRowShift,firstRowRu, firstRowShiftRu,
     secRow, secRowShift, secRowRu, secRowShiftRu,
      thirdRow, thirdRowShift, thirdRowRu, thirdRowShiftRu,
       fourRow, fourRowShift,  fourRowRu, fourRowShiftRu,
        fivRow, fivRowShift, fivRowRu, fivRowShiftRu
    } from './symbols.js'  //импортим массивы с буквами для создания кнопок

const WRAPPER = document.createElement('div')
WRAPPER.classList = 'wrapper'
document.body.appendChild(WRAPPER)//создаем див враппер и кладем в документ

const TITLE = document.createElement('h1')//создаем заголовок
TITLE.classList = 'title'
WRAPPER.appendChild(TITLE)
TITLE.textContent = 'RSS Виртуальная клавиатура'

const COVER = document.createElement('div')//создаем псевдомонитор
COVER.classList = 'frame'
WRAPPER.appendChild(COVER)

const MAIN_SCREEN = document.createElement('div')
MAIN_SCREEN.classList = 'main-screen'
COVER.appendChild(MAIN_SCREEN)//создаем псевдомонитор

const AREA = document.createElement('textarea')
AREA.classList = 'area'
COVER.appendChild(AREA)//создаем локацию для ввода с клавиатуры и нажатия мышкой

const BOARD = document.createElement('div')
BOARD.classList = 'board'
WRAPPER.appendChild(BOARD)

const DISC = document.createElement('p')
DISC.classList = 'discription'
WRAPPER.appendChild(DISC)
DISC.textContent = 'Клавиатура создана в операционной системе Windows'

const LANG = document.createElement('p')
LANG.classList = 'lang'
WRAPPER.appendChild(LANG)
LANG.textContent = 'Для переключения языка комбинация: левыe ctrl + alt'

const row = (symbols, symbolsShift) =>{
    const newRow = document.createElement('div')
    newRow.classList = 'row'
    BOARD.appendChild(newRow)
    for (let i=0; i<symbols.length; i++){
        const btn = document.createElement('div')
        btn.classList = 'btn'
        btn.classList.add(`${symbols[i]}`)
        newRow.appendChild(btn)
        const btnEn = document.createElement('span')
        btnEn.classList = 'btn-en'
        btn.appendChild(btnEn)
        btnEn.textContent = `${symbols[i]}`
        const btnEnShift = document.createElement('span')
        btnEnShift.classList = 'btn-en-shift'
        btnEnShift.classList.add('unvisible')
        btn.appendChild(btnEnShift)
        btnEnShift.textContent = `${symbolsShift[i]}`
        document.addEventListener('keydown', function(event) {
            if (event.code == 'CapsLock') {
                btnEnShift.classList.toggle('unvisible')
                btnEn.classList.toggle('unvisible')
            }
          });

    } 
}
row(firstRow, firstRowShift)
row(secRow, secRowShift)
row(thirdRow, thirdRowShift)
row(fourRow,fourRowShift)
row(fivRow, fivRowShift)

document.addEventListener('keydown', function(event) {
            if (event.code == 'CapsLock') {  
                document.querySelector('.CapsLock').classList.toggle('active')
            }
          });

const pushBtn = (event) =>{
    //console.log(event.target.closest())   нужно доделать
    if(event.target.textContent.length < 3){
        AREA.textContent+=event.target.textContent
    }
}
const btn = document.querySelectorAll('.btn')
btn.forEach((element) => element.addEventListener('click', pushBtn));        

document.addEventListener('keydown', function(event) {
    console.log(event.key)
    document.querySelector(`.${event.key}`).classList.add('active')
    if(event.key.length < 3){
        AREA.textContent+=event.key
    }
})
document.addEventListener('keyup', function(event) {
    document.querySelector(`.${event.key}`).classList.remove('active')
})