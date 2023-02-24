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

})();