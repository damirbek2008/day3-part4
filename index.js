// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select on or multiple  HTML elements
//                     from the DOM (Document Object Model)
// 1. document.getElementByID()            ELEMENT OR NULL  
// 2. document.getElementsClassName()      HTML COLLECTION
// 3. document.getElementsByTagName()      HTML COLLECTION
// 4. document.querySelectorAll()          ELEMENT OR NULL
// 5. document.querySelector()             NODELIST
// 



// const fruits=document.getElementsByClassName("fruits")


// Array.from(fruits).forEach((fruit) =>{
//     fruit.style.backgroundColor="Green"
// })


// for (let fruit of fruits){
//     fruit.style.backgroundColor="yellow"


// }







// const h4Elements = document.getElementsByTagName("h4")
// console.log(h4Elements);
// const li =document.getElementsByTagName("li")


// h4Elements[1].style.backgroundColor="yellow"

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor="yellow"

// }


// for (let li1 of li){
//     li1.style.backgroundColor="blue"

// }


// Array.from(h4Elements).forEach((h4Element)=>{
//     h4Element.style.backgroundColor="Yellow"
// })

// Array.from(li).forEach((li1)=>{
//     li1.style.backgroundColor="gray"
//     li1.style.color="white"
// })













// const element = document.querySelector(".fruits")
// element.style.backgroundColor="yellow"



// const foods = document.querySelectorAll("l 
























//    DOM Navigation =The process of navigaring through the structure
//                    of an HTML dcument using Javascript.
// 
// 
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



// ................................ .firstElementChild ---------------------

// const element =document.getElementById("desserts")
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow"

// const ulElements=document.querySelectorAll("ul")
// ulElements.forEach(ulElement =>{
    // const firstChild=firstElementChild;
    // ulElement.firstElementChild.style.backgroundColor="blue"
// })





// ................................ .lastElementChild ---------------------

// const ulElements=document.querySelectorAll("ul")
// ulElements.forEach(ulElement =>{
//     // const firstChild=firstElementChild;
//     ulElement.lastElementChild.style.backgroundColor="blue"
// })






// ................................ .nextElementSibling ---------------------

// const element= document.getElementById("apple")
// const nextSiblin= element.nextElementSibling;
// nextSiblin.style.backgroundColor="green"







// ................................ .previousElementSibling ---------------------


// const element=document.getElementById("orange")
// element.previousElementSibling.style.backgroundColor="yellow"









// ................................ .parentElement ---------------------
// const element=document.getElementById("pie")
// element.parentElement.style.backgroundColor="red"