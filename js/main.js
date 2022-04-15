// 轮播图js实现

const maxCount = 4;
let currCount = 0;
let interval = null;
// 跳转到第n张图片
function toImage(n) {
    currCount = n
    Array.from(document.getElementsByClassName('swiper-item')).forEach((image, index) => index === n ? image.classList.add('curr-item') : image.classList.remove('curr-item'))
    Array.from(document.getElementsByClassName('dot')).forEach((dot, index) => index === n ? dot.classList.add('curr-dot') : dot.classList.remove('curr-dot'))
}

// 设置自动播放
function doOnload() {
    doSetInterval()
}

function doSetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        toImage((currCount + 1) % maxCount);
    }, 3000)
}