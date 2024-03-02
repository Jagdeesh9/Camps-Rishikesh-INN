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

// testimonial owl-carousel 
