//import './styles/styles.css'
import "./styles/main.scss"

import {firstRow, firstRowShift, secRow, secRowShift, thirdRow, thirdRowShift, fourRow, fourRowShift, fivRow, fivRowShift} from './symbols.js'


const WRAPPER = document.createElement('div')
WRAPPER.classList = 'wrapper'
document.body.appendChild(WRAPPER)

const TITLE = document.createElement('h1')
TITLE.classList = 'title'
WRAPPER.appendChild(TITLE)
TITLE.textContent = 'RSS Виртуальная клавиатура'

const COVER = document.createElement('div')
COVER.classList = 'frame'
WRAPPER.appendChild(COVER)

const MAIN_SCREEN = document.createElement('div')
MAIN_SCREEN.classList = 'main-screen'
COVER.appendChild(MAIN_SCREEN)

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
            if (event.code == 'ShiftLeft') {
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


