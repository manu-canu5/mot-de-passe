const AmountNum= document.getElementById('range')
const AmountNumero =document.getElementById('Numero')
AmountNumber.document.addEventListener('input',syncAmountNumero)
AmountNumRange.document.addEventListener('input',syncAmountNum)
function syncAmountNum(e){
    const value = e.target.value
    AmountNumber = value
    AmountNumRange.value=value
}