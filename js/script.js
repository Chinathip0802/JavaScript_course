const a = document.querySelector('a')
//const a = document.getElementsByTagName('a')
//console.log(a);
a.setAttribute('href', 'https://www.google.co.th')
a.setAttribute('targrt', '_blank')

const crru = document.getElementById('crru')
console.log(crru);
crru.innerHTML = '<br> GO TO CRRU'
crru.setAttribute('href', 'https://www.crru.ac.th')
a.setAttribute('targrt', '_blank')

const result = { first_name: " Fluke ", last_name: "  Chinathip "}
const fullname = `${result.first_name}${result.last_name}`

const p = document.querySelector('p')
p.innerHTML=fullname
