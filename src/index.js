//import './styles/styles.css'
import "./styles/main.scss" //импортим стили из scss

import {firstRow, firstRowShift,firstRowRu, firstRowShiftRu, firstRowCode,
     secRow, secRowShift, secRowRu, secRowShiftRu, secRowCode,
      thirdRow, thirdRowShift, thirdRowRu, thirdRowShiftRu, thirdRowCode,
       fourRow, fourRowShift,  fourRowRu, fourRowShiftRu, fourRowCode,
        fivRow, fivRowShift, fivRowRu, fivRowShiftRu,fivRowCode,
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

const row = (symbols, symbolsShift, symbolsRu, symbolsShiftRu, symbolsCode) =>{
    const newRow = document.createElement('div')
    newRow.classList = 'row'
    BOARD.appendChild(newRow)                 //создали строку
    for (let i=0; i<symbols.length; i++){
        const btn = document.createElement('div')  //создаем контейнер для кнопки
        btn.classList = 'btn'
        btn.classList.add(`${symbolsCode[i]}`)
        newRow.appendChild(btn)

        const btnEn = document.createElement('span') //создаем содержимое EN кнопки
        btnEn.classList = 'btn-en'
        btn.appendChild(btnEn)
        btnEn.textContent = `${symbols[i]}`

        const btnEnShift = document.createElement('span') //создаем содержимое EN-shift кнопки
        btnEnShift.classList = 'btn-en-shift'
        btnEnShift.classList.add('unvisible')
        btn.appendChild(btnEnShift)
        btnEnShift.textContent = `${symbolsShift[i]}`

        const btnRu = document.createElement('span') //создаем содержимое RU кнопки
        btnRu.classList = 'btn-ru'
        btnRu.classList.add('unvisible')
        btn.appendChild(btnRu)
        btnRu.textContent = `${symbolsRu[i]}`

        const btnRuShift = document.createElement('span') //создаем содержимое RU кнопки
        btnRuShift.classList = 'btn-ru-shift'
        btnRuShift.classList.add('unvisible')
        btn.appendChild(btnRuShift)
        btnRuShift.textContent = `${symbolsShiftRu[i]}`

        
        document.addEventListener('keydown', function(event) {
            if (event.code == 'CapsLock') {
                btnEnShift.classList.toggle('unvisible')
                btnEn.classList.toggle('unvisible')
            }
          });
          document.onkeydown = function(event){
            if(event.code == "ControlLeft"){
                document.onkeyup = function(event){
                    if(event.code == "AltLeft"){ 
                        btnRu.classList.toggle('unvisible')
                        btnEn.classList.toggle('unvisible')
                    }
                }    
            }
        }  
    } 
}
row(firstRow, firstRowShift, firstRowRu, firstRowShiftRu, firstRowCode)
row(secRow, secRowShift, secRowRu, secRowShiftRu, secRowCode)
row(thirdRow, thirdRowShift, thirdRowRu, thirdRowShiftRu,thirdRowCode)
row(fourRow,fourRowShift, fourRowRu,fourRowShiftRu, fourRowCode)
row(fivRow, fivRowShift, fivRowRu, fivRowShiftRu,fivRowCode)


document.onkeydown = function(event){
    document.querySelector(`.${event.code}`).classList.add('active')
    document.onkeyup = function(event){
        document.querySelector(`.${event.code}`).classList.remove('active')
    }
}

// document.addEventListener('keydown', function(event) {
//             if (event.code == 'CapsLock') {  
//                 document.querySelector('.CapsLock').classList.toggle('active')
//             }
//           });

// const pushBtn = (event) =>{
//     //console.log(event.target.closest())   нужно доделать
//     if(event.target.textContent.length < 3){
//         AREA.textContent+=event.target.textContent
//     }
// }
// const btn = document.querySelectorAll('.btn')
// btn.forEach((element) => element.addEventListener('click', pushBtn));        

// document.addEventListener('keydown', function(event) {
//     console.log(event)
//     document.querySelector(`.${event.code}`).classList.add('active')
//     if(event.key.length < 5){
//         AREA.textContent+=event.key
//     }
// })
// document.addEventListener('keyup', function(event) {
//     if(event.code != 'CapsLock' ){
//         document.querySelector(`.${event.key}`).classList.remove('active')
//     }
// })