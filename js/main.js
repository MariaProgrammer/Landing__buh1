//открытие попапов из слайдера
$(document).ready(function() {
  $(".swiper-slide__link1").fancybox();
  $(".swiper-slide__link2").fancybox();
  $(".swiper-slide__link3").fancybox();
  $(".swiper-slide__link4").fancybox();
  $(".swiper-slide__link5").fancybox();
  $(".swiper-slide__link6").fancybox();
  $(".swiper-slide__link7").fancybox();
  $(".swiper-slide__link8").fancybox();
  $(".swiper-slide__link9").fancybox();
  $(".swiper-slide__link10").fancybox();
  $(".swiper-slide__link11").fancybox();
  $(".swiper-slide__link12").fancybox();
});

// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Маска для тел

let selector = document.getElementById("tel");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

// Валидация и отправка

let validation = new JustValidate("form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Это обязательное поле для заполнения!",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимум 2 символа!",
    },
  ])
  .addField("#tel", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      rule: "minLength",
      value: 10,
      errorMessage: "Введите телефон",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: "Введите телефон полностью",
    },
  ])
  .onSuccess(async function () {
    let data = {
      name: document.getElementById("name").value,
      tel: selector.inputmask.unmaskedvalue(),
      msg: document.getElementById("msg").value,
    };

    let response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    let result = await response.text();

    // alert(result)
  });

//подключение слайдера-1
const swiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 0,	
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
  
	pagination:	{
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewhell: true,
	keyboard: true,
	});


const slides = document.querySelectorAll('.swiper-slide')
const buttonPrev1 = document.querySelector('.swiper-button-prev1')
const buttonPrev2 = document.querySelector('.swiper-button-prev2')
const buttonNext1 = document.querySelector('.swiper-button-next1')
const buttonNext2 = document.querySelector('.swiper-button-next2')

if (slides[0].classList.contains('swiper-slide-active') && (!slides[0].classList.contains('swiper-button-disabled'))) {
  buttonPrev1.classList.add('swiper-button-disabled');
} else {
  buttonPrev1.classList.remove('swiper-button-disabled');
}
if (slides[2].classList.contains('swiper-slide-active') ) {
  buttonNext1.classList.add('swiper-button-disabled');
} else {
  buttonNext1.classList.remove('swiper-button-disabled');
}
if (slides[4].classList.contains('swiper-slide-active') ) {
  buttonNext2.classList.add('swiper-button-disabled');
} else {
  buttonNext2.classList.remove('swiper-button-disabled');
}

buttonNext1.addEventListener('click', function() {
  if (slides[0].classList.contains('swiper-slide-active') ) {
    buttonPrev1.classList.add('swiper-button-disabled');
  } else {
    buttonPrev1.classList.remove('swiper-button-disabled');
  }
})

//подключение слайдера-2

const swiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 4,
	spaceBetween: 0,	
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,        
  // },
	breakpoints: {
     // when window width is >= 320px
		300: {
      slidesPerView: 1,
      spaceBetween: 12
    },
		576: {
      slidesPerView: 2,
      spaceBetween: 12
    },
   
    //when window width is >= 480px
    767: {
      slidesPerView: 4,
      spaceBetween: 12
    }
  //   // when window width is >= 640px
  //   958: {
  //     slidesPerView: 2,
  //     spaceBetween: 12
  //   },
	// 	1279: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   }
  },
	// pagination:	{
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	mousewhell: true,
	keyboard: true,
	});

//hover эффект для слайдов в слайдере-2

const slide1 = document.querySelector('.slide-1')
const slide2 = document.querySelector('.slide-2')
const slide3 = document.querySelector('.slide-3')
const slide4 = document.querySelector('.slide-4')
const slide5 = document.querySelector('.slide-5')

const cover1 = document.querySelector('.cover1')
const cover2 = document.querySelector('.cover2')
const cover3 = document.querySelector('.cover3')
const cover4 = document.querySelector('.cover4')
const cover5 = document.querySelector('.cover5')

slide1.addEventListener('mouseover', function() {
  cover1.classList.add('hover')
})
slide1.addEventListener('mouseout', function() {
  cover1.classList.remove('hover')
})
slide2.addEventListener('mouseover', function() {
  cover2.classList.add('hover')
})
slide2.addEventListener('mouseout', function() {
  cover2.classList.remove('hover')
})
slide3.addEventListener('mouseover', function() {
  cover3.classList.add('hover')
})
slide3.addEventListener('mouseout', function() {
  cover3.classList.remove('hover')
})
slide4.addEventListener('mouseover', function() {
  cover4.classList.add('hover')
})
slide4.addEventListener('mouseout', function() {
  cover4.classList.remove('hover')
})
slide5.addEventListener('mouseover', function() {
  cover5.classList.add('hover')
})
slide5.addEventListener('mouseout', function() {
  cover5.classList.remove('hover')
})

//появление кружочков по скроллу
const circle1 = document.querySelector('.circle-1')
const circle2 = document.querySelector('.circle-2')
const circle3 = document.querySelector('.circle-3')

const header = document.querySelector('.header')
const inner = document.querySelector('.inner')
const mainWrapH3 = document.querySelector('.main__wrap-h3')
const swiperOne = document.querySelector('.swiper1')
const aboutFeaturesTop = document.querySelector('.about__features-top')
const aboutFeaturesBottom = document.querySelector('.about__features-bottom')

document.addEventListener('scroll', function () {
  let scrollTop = window.scrollY;

  let headerHeight = header.offsetHeight;
  let innerHeight = headerHeight + inner.offsetHeight;
  let mainWrapH3Height = innerHeight + mainWrapH3.offsetHeight
  let swiperOneHeight = mainWrapH3Height + swiperOne.offsetHeight
  let aboutFeaturesTopHeight = swiperOneHeight + aboutFeaturesTop.offsetHeight
  let aboutFeaturesBottomHeight = aboutFeaturesTopHeight + (aboutFeaturesBottom.offsetHeight / 7)

  if (scrollTop >= aboutFeaturesBottomHeight) {
    
      circle1.classList.add('active')
      setTimeout(() => {
        circle2.classList.add('active')
        circle3.classList.add('active')
        
    
      }, 500)
   
  } else {
    circle1.classList.remove('active')
    circle2.classList.remove('active')
    circle3.classList.remove('active')
    
  }
})

//подключение слайдера-3
const swiper3 = new Swiper('.swiper3', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 140,
  slidesPerGroup: 1,
	spaceBetween: 'auto',
  // freemode: true,
  	
  // createElements: true,
  cssMode: true,
  allowTouchMove: true,
  grabCursor: true,
  centeredSlides: true,
  centerInsufficientSlides: true,

  // slidesOffsetBefore: 170,
	// slidesOffsetAfter: 170,
	// watchSlidesVisibility: false,
	// watchSlidesProgress: false,
	// simulateTouch: false,  
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3'
	},
  autoplay: {
    delay: 3000,
    disableOnInteraction: false        
  },
	breakpoints: {
    // when window width is >= 300px
		300: {
      slidesPerView: 1,
      spaceBetween: 12
      
    },
    340: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1,
      centeredSlides: false,
      centerInsufficientSlides: true
    },
      
    
		360: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1,
      centeredSlides: true,
      centerInsufficientSlides: true
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 1,
      centeredSlides: false,
  centerInsufficientSlides: false
    },
   
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 60,
      centeredSlides: true,
  centerInsufficientSlides: true
    },
    // when window width is >= 640px
    958: {
      slidesPerView: 3,
      spaceBetween: 100
    },
		1600: {
      slidesPerView: 4,
      spaceBetween: 140,
      centeredSlides: true,
  centerInsufficientSlides: true
    }
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
	// pagination:	{
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	mousewhell: true,
	keyboard: true,
	});

//изменяем цвет и стиль нажатой кнопки Оставить заявку
  const btn1 = document.getElementById('btn1')
  const input = document.querySelector('.contacts__input')
  console.log(input);
  
  btn1.addEventListener('submit', function() {
    btn1.textContent = 'Заявка оставлена'
    btn1.classList.remove('btn--dark')
    btn1.classList.remove('btn')
    btn1.classList.add('active')
    setTimeout(() => {
      location.reload()
    },5000)
    
  })
//проверка валидности инпутов после blur
  const inp = document.querySelectorAll('input')
  inp.forEach(item => item.addEventListener('blur', function() {
    this.classList.add('touched'); 
  }));
//подключение бургер меню
const burgerButton = document.querySelector('.burger__button')
const burgerMenu = document.querySelector('.burger__menu')
burgerButton.addEventListener('click', function() {
  burgerMenu.classList.toggle('active')
})
const footerBurgerButton = document.querySelector('.footer-burger__button')
const footerBurgerMenu = document.querySelector('.footer-burger__menu')

footerBurgerButton.addEventListener('click', function() {
  
  footerBurgerMenu.classList.toggle('active')
})

//табы
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector('.tabs')
  const tabsBtn =document.querySelectorAll('.tabs__btn')
  const tabsContent =document.querySelectorAll('.tabs__content')
  
  if(tabs) {
    tabs.addEventListener('click', (e) => {
      if(e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath)
      }

    })
    
  };
  const tabsHandler = (path) => {
    tabsBtn.forEach(item => item.classList.remove('tabs__btn-active'))
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn-active')
    tabsContent.forEach(item => item.classList.remove('tabs__content-active'))
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content-active')

  }
  
  })

//slider2 mob
const mobCard1Cover = document.querySelector('.mob-card1__cover')
const mobCard2Cover = document.querySelector('.mob-card2__cover')
const mobCard3Cover = document.querySelector('.mob-card3__cover')
const mobCard4Cover = document.querySelector('.mob-card4__cover')

const mobButton1 = document.querySelector('.mob-button1')
const mobButton2 = document.querySelector('.mob-button2')
const mobButton3 = document.querySelector('.mob-button3')
const mobButton4 = document.querySelector('.mob-button4')

mobButton1.addEventListener('click', ()=> {
  mobCard1Cover.classList.add('active')
  mobButton1.classList.add('active')
})
mobCard1Cover.addEventListener('click', ()=> {
  mobCard1Cover.classList.remove('active')
  mobButton1.classList.remove('active')
})

mobButton2.addEventListener('click', ()=> {
  mobCard2Cover.classList.add('active')
  mobButton2.classList.add('active')
})
mobCard2Cover.addEventListener('click', ()=> {
  mobCard2Cover.classList.remove('active')
  mobButton2.classList.remove('active')
})
mobButton3.addEventListener('click', ()=> {
  mobCard3Cover.classList.add('active')
  mobButton3.classList.add('active')
})
mobCard3Cover.addEventListener('click', ()=> {
  mobCard3Cover.classList.remove('active')
  mobButton3.classList.remove('active')
})
mobButton4.addEventListener('click', ()=> {
  mobCard4Cover.classList.add('active')
  mobButton4.classList.add('active')
})
mobCard4Cover.addEventListener('click', ()=> {
  mobCard4Cover.classList.remove('active')
  mobButton4.classList.remove('active')
})

//всплытие окна по ховеру на слайде
const slideLinks = Array.from(document.querySelectorAll('.swiper-slide__link'))

slideLinks.forEach(el => {
  el.addEventListener('mouseover', (e) => {
    let parent = e.currentTarget.parentNode
    parent.children[1].classList.add('active')
    
  })
})
slideLinks.forEach(el => {
  el.addEventListener('mouseleave', (e) => {
    let parent = e.currentTarget.parentNode
    parent.children[1].classList.remove('active')
    
  })
})






  
  

