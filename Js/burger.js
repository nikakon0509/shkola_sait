const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.menu')
burgerButton.addEventListener('click' , () => {
    burgerMenu.classList.remove('hide')
    setTimeout( () => {
        burgerButton.classList.toggle('active')
        burgerMenu.classList.toggle('active')

        if (burgerMenu.classList.contains('active')){
            document.documentElement.style.overflow = 'hidden';
    
        }
        else{
            document.documentElement.style.overflow = 'auto';
            setTimeout( () => {
                burgerMenu.classList.add('hide')
            }, 300 )
        }
    }, 1 )

    
})