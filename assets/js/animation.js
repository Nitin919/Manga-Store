/*=============== SHOW MENU ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*===== search SHOW =====*/
/* Validate if constant exists */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*===== search HIDDEN =====*/

if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}
/*=============== SHOW MENU ==========*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/*===== search SHOW =====*/

if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/*===== search HIDDEN =====*/

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}
// swiper


let swiperHome = new Swiper('.home__swiper', {
   loop: true,
   spaceBetween: -24,
   grabCursor:true,
   slidesPerView:'auto',
   centeredSlides:'auto',

   autoplay:{
     delay:3000,
     disableOnInteraction:false,
   },
   breakpoints:{
    1220:{
      spaceBetween: -32,  
    }
   }
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


// faeture clas
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints:{
     1150:{
       slidesPerView: 4,
       centeredSlides: false,
     }
    }
   });

//    for discount
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    
    slidesPerView:'auto',
    
 
   
    breakpoints:{
     1150:{
       slidesPerView: 3,
      
     }
    }
   });
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',   
 
   
    breakpoints:{
     1150:{
       slidesPerView: 3,
       centeredSlides:false,
      
     }
    }
   });
 

  //  show scroll


   const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
              : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


  // section scroll
  const sections = document.querySelectorAll('section[id]')
    
  const scrollActive = () =>{
      const scrollDown = window.scrollY
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
  
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }                                                    
    })
  }
  window.addEventListener('scroll', scrollActive)




/*=============== DARK LGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
   
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





// scroollll reveal


const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.home__data, .featured__container,.new__container,.join__data, .testimonial__container`)
sr.reveal(`.home__images`,{delay:600})
sr.reveal(`.services__card`,{interval:100})
sr.reveal(`.discount__data`,{origin:'left'})
sr.reveal(`.discount__images`,{origin:'right'})

// active link
