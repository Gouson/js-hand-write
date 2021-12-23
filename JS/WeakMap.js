const oBtn1 = document.querySelector('#btn1')
const oBtn2 = document.querySelector('#btn2')

const oBtnMap = new WeakMap()
oBtnMap.set(oBtn1, handleBtn1Click)
oBtnMap.set(oBtn2, handleBtn2Click)

oBtn1.addEventListener('click', oBtnMap.get(oBtn1), false)
oBtn2.addEventListener('click', oBtnMap.get(oBtn2), false)

function handleBtn1Click() {}

function handleBtn2Click() {}

oBtn1.remove()
oBtn2.remove()