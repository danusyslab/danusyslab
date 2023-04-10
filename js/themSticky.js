(()=>{
    const tabArea = document.getElementById('sticky1');

    const radioLightTab = document.getElementById('lightTab');
    const radioDarkTab = document.getElementById('darkTab');

    const radioLightCon = document.getElementById('lightCon');
    const radioDarkCon = document.getElementById('darkCon');

    function modeTabHandler(e) {
        const currentTab = e.target;

        if(currentTab === radioLightTab) {
            currentTab.classList.add('active');
            radioDarkTab.classList.remove('active');

            radioLightCon.style.display = 'block';
            radioDarkCon.style.display = 'none';
        }

        if(currentTab === radioDarkTab) {
            radioLightTab.classList.remove('active');
            radioDarkTab.classList.add('active');

            radioLightCon.style.display = 'none';
            radioDarkCon.style.display = 'block';
        }
    } 
    
    tabArea.addEventListener('click', modeTabHandler);
})();