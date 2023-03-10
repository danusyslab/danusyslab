(()=>{


    const stickyArea3 = document.getElementById('sticky3');
    let selectedElem;

    function activation(check) {
        check.classList.add('active');
        selectedElem = check;
    }

    function inactivation(check) {
        check.classList.remove('active');
    }

    function stickyHandler(e) {
        const currentElem = e.target;

        if(selectedElem) {
            inactivation(selectedElem);
        }

        if(currentElem.parentNode === stickyArea3) {
            activation(currentElem);
        }

        if(currentElem === document.getElementById('headingTab')) {
            document.getElementById('headingCon').style.display ='flex';
            document.getElementById('bodyCon').style.display = 'none';
            document.getElementById('utilityCon').style.display = 'none';

            document.getElementById('headingCon_mo').style.display ='none';
            document.getElementById('bodyCon_mo').style.display ='none';
            document.getElementById('utilityCon_mo').style.display ='none';

            if(window.innerWidth < 767) {
                document.getElementById('headingCon_mo').style.display ='flex';
                document.getElementById('bodyCon_mo').style.display ='none';
                document.getElementById('utilityCon_mo').style.display ='none';
            }
        } 

        if(currentElem === document.getElementById('bodyTab')) {
            document.getElementById('headingCon').style.display ='none';
            document.getElementById('bodyCon').style.display = 'flex';
            document.getElementById('utilityCon').style.display = 'none';

            document.getElementById('headingCon_mo').style.display ='none';
            document.getElementById('bodyCon_mo').style.display ='none';
            document.getElementById('utilityCon_mo').style.display ='none';

            if(window.innerWidth < 767) {
                document.getElementById('headingCon_mo').style.display ='none';
                document.getElementById('bodyCon_mo').style.display ='flex';
                document.getElementById('utilityCon_mo').style.display ='none';
            }
        }

        if(currentElem === document.getElementById('utilityTab')) {
            document.getElementById('headingCon').style.display ='none';
            document.getElementById('bodyCon').style.display = 'none';
            document.getElementById('utilityCon').style.display = 'flex';
            
            document.getElementById('headingCon_mo').style.display ='none';
            document.getElementById('bodyCon_mo').style.display ='none';
            document.getElementById('utilityCon_mo').style.display ='none';

            if(window.innerWidth < 767) {
                document.getElementById('headingCon_mo').style.display ='none';
                document.getElementById('bodyCon_mo').style.display ='none';
                document.getElementById('utilityCon_mo').style.display ='flex';
            }
        }
    }


    function mobileVerHandler() {

        if(window.innerWidth > 767) {
            document.getElementById('headingCon_mo').style.display ='none';
            document.getElementById('bodyCon_mo').style.display ='none';
            document.getElementById('utilityCon_mo').style.display ='none';
        }

        if(window.innerWidth < 767) {

            if(document.getElementById('headingTab').classList.contains('active')) {
                document.getElementById('headingCon_mo').style.display ='flex';
                document.getElementById('bodyCon_mo').style.display ='none';
                document.getElementById('utilityCon_mo').style.display ='none';
            }

            if(document.getElementById('bodyTab').classList.contains('active')) {
                document.getElementById('headingCon_mo').style.display ='none';
                document.getElementById('bodyCon_mo').style.display ='flex';
                document.getElementById('utilityCon_mo').style.display ='none';
            }

            if(document.getElementById('utilityTab').classList.contains('active')) {
                document.getElementById('headingCon_mo').style.display ='none';
                document.getElementById('bodyCon_mo').style.display ='none';
                document.getElementById('utilityCon_mo').style.display ='flex';
            }
        }
    }

    activation(document.querySelector('#headingTab'));



    stickyArea3.addEventListener('click', stickyHandler);

    window.addEventListener('resize', mobileVerHandler);
    mobileVerHandler();

    



})();