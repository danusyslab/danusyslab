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
      })

})();