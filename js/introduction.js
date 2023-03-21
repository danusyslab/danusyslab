(()=>{

    const scrollImgCon = document.querySelector('.right_img_con');
    const scrollSection01 = document.getElementById('scroll-show-01');
    const scrollSectionHeight01 = scrollSection01.clientHeight;
    const scrollSection02 = document.getElementById('scroll-show-02');
    const scrollSectionHeight02 = scrollSection02.clientHeight;
    const scrollSection03 = document.getElementById('scroll-show-03');
    const scrollSectionHeight03 = scrollSection03.clientHeight;
    const imgElem0 = document.querySelector('.right_img_area[value-num="0"]');
    const imgElem1 = document.querySelector('.right_img_area[value-num="1"]');
    const imgElem2 = document.querySelector('.right_img_area[value-num="2"]');

    const imgArea = document.querySelectorAll('.right_img_area');


    function newImgHeight(){
        const newHeight = window.innerHeight-48;

        imgArea.forEach(anArea => {
            anArea.style.height = `${newHeight}px`;
        });
    }

    newImgHeight();

    window.addEventListener('resize', newImgHeight);

    window.addEventListener('scroll', ()=>{
        yScroll = window.scrollY;

        if(yScroll < scrollSectionHeight01*1) {
            imgElem0.classList.add('show');
            imgElem1.classList.remove('show');
            imgElem2.classList.remove('show');
        }

        if(yScroll > scrollSectionHeight01*1) {
            imgElem0.classList.remove('show');
            imgElem1.classList.add('show');
            imgElem2.classList.remove('show');
        }

        if(yScroll > scrollSectionHeight01*2) {
            imgElem0.classList.remove('show');
            imgElem1.classList.remove('show');
            imgElem2.classList.add('show');
        }
    });
})();