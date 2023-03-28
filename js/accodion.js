(()=>{
    const accordionButtons = document.querySelectorAll('.side_submenu');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          this.classList.toggle('active');
          console.log(this.nextElementSibling);
          const accordionList = this.nextElementSibling;
          if (accordionList.style.display === 'block') {
            accordionList.style.display = 'none';
          } else {
            accordionList.style.display = 'block';
          } 
        });
      });


      // mobile menu
      const hamburgerBtn = document.querySelector('.hamburger_btn');
      const hamCloseBtn = document.querySelector('.ham_cancel_btn');

      hamburgerBtn.addEventListener('click', ()=> {
        document.querySelector('.side_menu_wrapper_mo').style.transform = 'none';
        hamburgerBtn.style.display = 'none';
        hamCloseBtn.style.display = 'flex';
      });

      hamCloseBtn.addEventListener('click', ()=> {
        document.querySelector('.side_menu_wrapper_mo').style.transform = 'translateX(-100%)';
        hamburgerBtn.style.display = 'flex';
        hamCloseBtn.style.display = 'none';
      });

      const bxTab = document.getElementById('bxTab');
      const bxList = document.getElementById('bxList');
      const designTab = document.getElementById('designTab');
      const designList = document.getElementById('designList');

      
      bxTab.addEventListener('click', ()=>{
        designTab.classList.remove('active');
        bxTab.classList.add('active');
        designList.style.display = 'none';
        bxList.style.display = 'block';
      });

      designTab.addEventListener('click', ()=>{
        designTab.classList.add('active');
        bxTab.classList.remove('active');
        designList.style.display = 'block';
        bxList.style.display = 'none';
      })

})();