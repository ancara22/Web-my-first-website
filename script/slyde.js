let slider = document.querySelectorAll('.slider-item'), //all slider item
    prev = document.getElementsByClassName('arrow-left')[0],// left button
    next = document.getElementsByClassName('arrow-right')[0], //right button
    
    sliderIndex = 1;

function showSlider() {
    if(sliderIndex>slider.length) {
        sliderIndex=1;
    } else if(sliderIndex<1) {
        sliderIndex=slider.length;
    }   

    slider.forEach((item)=> item.style.display = 'none');
    slider[sliderIndex-1 ].style.display= 'block';

}

showSlider();

next.addEventListener('click', function() {
    sliderIndex++;
    showSlider();
});

prev.addEventListener('click', function() {
    sliderIndex--;
    showSlider();
});

function goS() {
    sliderIndex++;
    showSlider();
    setTimeout(goS, 3000);
}

goS();