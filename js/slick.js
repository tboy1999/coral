$('.sellers__content').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 4000,
  // adaptiveHeight: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 1L1 17L17 33" stroke="black"/>
  </svg>
    </button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L17 17L1 33" stroke="black"/>
  </svg>
  </button>`,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});

const html = `
<div class="content__hover facb">
  <div class="content__hover-left facenter">
    <a href="">
      <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.45067 10.9082L10.4033 17.4395C10.6428 17.6644 10.7625 17.7769 10.9037 17.8046C10.9673 17.8171 11.0327 17.8171 11.0963 17.8046C11.2375 17.7769 11.3572 17.6644 11.5967 17.4395L18.5493 10.9082C20.5055 9.07059 20.743 6.0466 19.0978 3.92607L18.7885 3.52734C16.8203 0.99058 12.8696 1.41601 11.4867 4.31365C11.2913 4.72296 10.7087 4.72296 10.5133 4.31365C9.13037 1.41601 5.17972 0.990584 3.21154 3.52735L2.90219 3.92607C1.25695 6.0466 1.4945 9.07059 3.45067 10.9082Z" stroke="white" stroke-width="2"/>
        </svg>
    </a>
    <a href="">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.8" cy="7.8" r="6.8" stroke="white" stroke-width="2"/>
        <path d="M18 18L14.6 14.6" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg> 
    </a>                       
  </div>
  <div class="content__hover-right facenter">
    <a href="">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="white" stroke-width="2"/>
        </svg>
    </a>
    <a href="">
      <span class="fz18">shop now</span> 
    </a>                     
  </div>
</div>
`
const contentItems = document.querySelectorAll(".content__item-js")
const contentHovers = document.querySelectorAll(".content__hover")
console.log(contentItems);
contentItems.forEach((contentItem, index) => {
  contentItem.onmouseover = function() {
    console.log("asd");
    contentHovers[index].innerHTML= html
  }
})

const scrollTop = document.querySelector(".payment__container span")

scrollTop.onclick = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const headerMenu = document.querySelector(".header__menu")

headerMenu.onclick = () => {
  document.querySelector(".header__right").classList.toggle("header__right--active")
}
