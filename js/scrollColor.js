(()=>{

  let yScroll = 0;
  let prevScrollHeight = 0;
  let currentSection = 0;

  const scrollSection = [
    {
      // 0
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scrollSection0'),
      },
    },
    {
      // 1
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scrollSection1'),
      }

    },{
      // 2
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scrollSection2'),
        logoArea1: document.querySelector('.primary_col_con .primary_col_area .primary_col_item .primary_color_1'),
      },
      values: {
        logoOpacity: [200, 900],
      }

    },
    {
      // 3
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scrollSection3'),
      }

    }
  ];

  function setScroll(){
    for(let i = 0; i < scrollSection.length; i++) {
      scrollSection[i].scrollHeight = scrollSection[i].objs.container.offsetHeight;
      scrollSection[i].objs.container.style.height = `${scrollSection[i].scrollHeight}px`;

    }
  }

  function calcValues(values, currentYscroll){
    let rv;
    let scrollRatio = currentYscroll / scrollSection[currentSection].scrollHeight;

    // rv = parseInt(scrollRatio * (values[1] - values[0]) + values[0]);

    rv = parseInt(scrollRatio * (values[1] - values[0]) );
    return rv;
  }

  function playAnimation() {
    const objs = scrollSection[currentSection].objs;
    const values = scrollSection[currentSection].values;
    const currentYscroll = yScroll - prevScrollHeight;


    switch(currentSection) {
      case 0:
        break;

      case 1:
        break;
      
      case 2:

        let logoOpacity_0 = values.logoOpacity[0];
        let logoOpacity_1 = values.logoOpacity[1];

        console.log (  calcValues(values.logoOpacity, currentYscroll)  );

        break;
      
      case 3:
        break;
    }
  }

  function scrollLoop () {
    prevScrollHeight = 0;
    for(let i = 0; i < currentSection; i++) {
      prevScrollHeight += scrollSection[i].scrollHeight;
    }

    if(yScroll > prevScrollHeight + scrollSection[currentSection].scrollHeight){
      currentSection++;
    }

    if(yScroll < prevScrollHeight){
      if(currentSection === 0) return;
      currentSection--;
    }

    playAnimation();
  }




  window.addEventListener('resize', setScroll);
  window.addEventListener('scroll', ()=>{
    yScroll = window.scrollY;
    scrollLoop();
  })

  setScroll();
})();