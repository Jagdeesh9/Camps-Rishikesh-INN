//start navi gation bar -------------------------------------------------------------------------------------------------
    const sidebar = document.querySelector(".sidebar");
    const cross = document.querySelector('#cross');
    const faBars = document.querySelector(".fa-bars")

    cross.addEventListener("click",()=>{
        sidebar.style.left = "-100%";
    })

    faBars.addEventListener('click',()=>{
        sidebar.style.left = "0";
    })
//end navi gation ba----------------------------------------------------------------------------------------------


// gallary --------------------------------------------------------------------------------------------
// const gallary = document.querySelector('#gallary');
const gallaryInner = document.querySelector('#gallaryInner');
// const tag = document.querySelector("#tag");
const fullImg = document.querySelector('.fullImg')
const clickedImg = document.querySelector('#clickedImg')
const times = document.querySelector('.times')


// const camps = ['./images/4.jpeg','./images/2.jpeg','./images/3.jpeg','./images/4.jpeg']
// const activities = ['./images/4.jpeg','./images/2.jpeg','./images/3.jpeg','./images/4.jpeg']
// const pool = ['./images/4.jpeg','./images/2.jpeg','./images/3.jpeg','./images/4.jpeg']
// const nature = ['./images/4.jpeg','./images/2.jpeg','./images/3.jpeg','./images/4.jpeg']
// let clutter = ''

// gallary.addEventListener("click",(event)=>{
//     console.log(event.target.id);

//     if(event.target.id === 'camps'){
//         tag.innerHTML = 'Camps'
//         camps.map(ele => clutter+= `
//         <div class="lg:w-1/4 md:w-1/2 p-4 w-full" >
//             <a class="block relative h-48 rounded overflow-hidden">
//                 <img  alt="ecommerce" class="object-cover object-center w-full h-full block" src="${ele}">
//             </a>
//         </div>`
//         )
//     }

//     else if(event.target.id === 'activities'){
//         tag.innerHTML = 'Activities'
//         activities.map(ele => clutter+= `
//         <div class="lg:w-1/4 md:w-1/2 p-4 w-full" >
//             <a class="block relative h-48 rounded overflow-hidden">
//                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${ele}">
//             </a>
//         </div>`
//         )
//     }

//     else if(event.target.id === 'pool'){
//         tag.innerHTML = 'Pool'
//         pool.map(ele => clutter+= `
//         <div class="lg:w-1/4 md:w-1/2 p-4 w-full" >
//             <a class="block relative h-48 rounded overflow-hidden">
//                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${ele}">
//             </a>
//         </div>`
//         )
//     }

//     else if(event.target.id === 'nature'){
//         tag.innerHTML = 'Nature'
//         nature.map(ele => clutter+= `
//         <div class="lg:w-1/4 md:w-1/2 p-4 w-full" >
//             <a class="block relative h-48 rounded overflow-hidden">
//                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${ele}">
//             </a>
//         </div>`
//         )
//     }

//     gallaryInner.innerHTML = clutter


// })

gallaryInner.addEventListener('click',(event)=>{
    console.log(event.target.src)

    clickedImg.src = event.target.src
    fullImg.style.display = 'block'
})
times.addEventListener('click',()=>{
    fullImg.style.display = 'none'
})