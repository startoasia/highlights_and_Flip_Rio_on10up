// 畫重點
const btn = document.querySelectorAll(".marker")
const btn2 = document.querySelector(".marker2")

window.addEventListener('scroll', function(e) {
    btn.forEach(item => {
        let position = item.offsetTop;
        let scroll = window.scrollY;
        if (scroll > position - 350) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
    btn2.classList.add('marker2-show')
})

// 翻牌
const cards = document.querySelectorAll('.card');

cards.forEach((card,cardInd) => {
  card.addEventListener('click', () => {
    cards.forEach((item,ind)=>{
      if(cardInd == ind){
        console.log("hi")
        item.querySelector('.card-inner').classList.add("card--active")
        return
      }else{
        item.querySelector('.card-inner').classList.remove("card--active")
      }

    })
  });
});


// POP
function popUpShow(showElement){
  document.body.style.overflow="hidden"
const show = document.querySelector(showElement)
show.classList.add("popControl--active");
document.body.style.overflow="hidden";
show.style.overflowY="scroll";
}
function popUpClose(showElement){
  document.body.style.overflow="visible"
  const show = document.querySelector(showElement)
  show.classList.remove("popControl--active");
  document.body.style.overflow="visible";
  show.style.overflowY="hidden";
}