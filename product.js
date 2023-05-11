const mainImg = document.querySelector('.p-main__img')
const prodImage = document.querySelectorAll('.tb__image')
const arrowIcons = document.querySelectorAll('.arrow')
const popUpArrowIcons = document.querySelectorAll('.p-u-arrow')
const firstImg = document.querySelectorAll('.tb__image')[0]
const firstImgPopUp = document.querySelectorAll('.imgtest')[0]
const carousel = document.querySelector('.thumbnail-image')
const closeButton = document.querySelector('.pop-up__image')
const popedUpImgs = document.querySelectorAll('.pop-item')
const varOne = document.querySelectorAll('.imgtest')
const thumbnailImg = document.querySelector('.board-images')
const thumbnailImage = document.querySelector('.thumbnail-image')
const firstArrImgMain = document.querySelector('.p-main__img__container')

let firstImgWidth = firstImg.clientWidth
let firstImgWidthPopUp = firstImgPopUp.clientWidth


// Shift Thumbnail img to main img
prodImage.forEach(image => {
  image.onclick = () => {
    const thumbnailImgSrc = image.src;
    const mainImgSrc = mainImg.src;
    mainImg.src = thumbnailImgSrc;
  }
})

// Close btn
document.querySelector('.pop-up__image span').onclick = () => {
  closeButton.style.display = 'none'
  nodeReset()
}

// Product page carousel
arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => { 
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
  })
})

// Pop up page carousel
popUpArrowIcons.forEach(icon => {
  icon.addEventListener("click", () => { 
    thumbnailImg.scrollLeft += icon.id == "p-u-left" ? -firstImgWidthPopUp : firstImgWidthPopUp
  })
})

// Handles pop up
mainImg.addEventListener("click", () => {
  document.querySelector('.pop-up__image').style.display = 'block'

  checkImg()
  closeBtn()
  setImage()
  const images = document.querySelectorAll('.tb__image') 
  images.forEach((img) => {
  })
})

function closeBtn() {
  const x = document.querySelector('.pop-up__image span')
  x.addEventListener('click', () => {
//     varOne.forEach((item) => {

//     })

    const firstArrImg = document.querySelector('.super__main')
    const firstArrImgs = document.querySelectorAll('.hide')

    firstArrImgMain.append(firstArrImg)
    firstArrImgs.forEach((arrImgs) => {
      arrImgs.classList.remove('hide')
    })
  })
}
console.log('aff')
function checkImg() {
  const images = document.querySelectorAll('.imgtest')

  images.forEach((imgs, i) => {
    imgs.setAttribute('id', i) 
    const imgsSrc = imgs.src
    const arr = [imgs]
    thumbnailImg.append(imgs)



    //     varOne.forEach((item) => {
    imgs.addEventListener('click', () => {
      console.log(imgsSrc)
      open(imgsSrc)
    })
    //     })
  })
}

function setImage() {
  const mainImg = document.querySelector('.super__main')
  const mainImgSrc = mainImg.src
  const images = document.querySelectorAll('.imgtest')

  images.forEach((imgs) => {
    const imgsSrc = imgs.src
    if (mainImgSrc === imgsSrc) {
      const varTwo = imgs
      varTwo.classList.add('hide')
    } 
  })
}


