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
      });



      // config sel con

      const openConfigBtn = document.getElementById('open_config_sel_btn');
      const openConfigBtnDark = document.getElementById('open_config_sel_btn2');
      const closeConfigBtnLight = document.getElementById('closeConfigBtnLight');
      const closeConfigBtnDark = document.getElementById('closeConfigBtnDark');
      const accodionConfigLight = document.getElementById('sortingAreaLight');
      const accodionConfigDark = document.getElementById('sortingAreaDark');

      function accodionConfigHandler(e) {

        if(e.target === openConfigBtn) {
          accodionConfigLight.style.display = 'block';
        } else if(e.target === closeConfigBtnLight) {
          accodionConfigLight.style.display = 'none';
        }

        if(e.target === openConfigBtnDark) {
          accodionConfigDark.style.display = 'block';
        } else if(e.target === closeConfigBtnDark) {
          accodionConfigDark.style.display = 'none';
        }
      }

      openConfigBtn.addEventListener('click', accodionConfigHandler);
      openConfigBtnDark.addEventListener('click', accodionConfigHandler);

      closeConfigBtnLight.addEventListener('click', accodionConfigHandler);
      closeConfigBtnDark.addEventListener('click', accodionConfigHandler);


})();