const wrapper = document.querySelector(".sliderWrapper")
const menuIthems = document.querySelectorAll(".menuitem")

menuIthems.forEach((item,index)=>{
    item.addEventListener("click", () => {
        console.log("you Clicked!" + index);
    });
})