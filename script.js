const share = document.querySelector('.share')
share.style.display = 'none'
const icon = document.querySelector('#arrow-icon')

icon.addEventListener ('click', function(ev) {
  ev.preventDefault()

  if (share.style.display == 'none') {
    share.style.display = 'flex'
  } else {
    share.style.display = 'none'
  }  
})

// OUTRA MANEIERA DE ESCREVER O EVENTO. TERÍAMOS QUE ADICIONAR NO HTML O EVENTO 'ONMOUSEENTER' NA TAG DO 'ICON'
// function linksShare() {

//   if (share.style.display == 'none') {
//     share.style.display = 'flex'
//   } else {
//     share.style.display = 'none'
//   }  
// }