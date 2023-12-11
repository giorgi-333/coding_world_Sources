
let stars = document.querySelectorAll("#stars i")

stars.forEach((el,i) => {
    el.addEventListener('click', item => {
        console.log(i+1);

        stars.forEach((star, starIndex) => {
            
            if(starIndex <= i) {
                star.classList.replace('fa-regular','fa-solid')
            } else {
                star.classList.replace('fa-solid','fa-regular')
            }
        })
    })
})