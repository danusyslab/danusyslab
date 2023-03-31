(()=>{
    
    const tabArea = document.getElementById('sticky1');

    const radioLightTab = document.getElementById('radioLightTab');
    const radioDarkTab = document.getElementById('radioDarkTab');

    const radioLightCon = document.getElementById('radioLightCon');
    const radioDarkCon = document.getElementById('radioDarkCon');

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


    function sourceTabHandler(e) {
        const currentTab = e.target;
        console.log(currentTab);

        if(currentTab === document.getElementById('html-tab-1')) {
            document.getElementById('html-1').style.display = 'block';
            document.getElementById('scss-1').style.display = 'none';
            document.getElementById('html-tab-1').classList.add('active');
            document.getElementById('scss-tab-1').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-1')) {
            document.getElementById('html-1').style.display = 'none';
            document.getElementById('scss-1').style.display = 'block';
            document.getElementById('html-tab-1').classList.remove('active');
            document.getElementById('scss-tab-1').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-2')) {
            document.getElementById('html-2').style.display = 'block';
            document.getElementById('scss-2').style.display = 'none';
            document.getElementById('html-tab-2').classList.add('active');
            document.getElementById('scss-tab-2').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-2')) {
            document.getElementById('html-2').style.display = 'none';
            document.getElementById('scss-2').style.display = 'block';
            document.getElementById('html-tab-2').classList.remove('active');
            document.getElementById('scss-tab-2').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-3')) {
            document.getElementById('html-3').style.display = 'block';
            document.getElementById('scss-3').style.display = 'none';
            document.getElementById('html-tab-3').classList.add('active');
            document.getElementById('scss-tab-3').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-3')) {
            document.getElementById('html-3').style.display = 'none';
            document.getElementById('scss-3').style.display = 'block';
            document.getElementById('html-tab-3').classList.remove('active');
            document.getElementById('scss-tab-3').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-4')) {
            document.getElementById('html-4').style.display = 'block';
            document.getElementById('scss-4').style.display = 'none';
            document.getElementById('html-tab-4').classList.add('active');
            document.getElementById('scss-tab-4').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-4')) {
            document.getElementById('html-4').style.display = 'none';
            document.getElementById('scss-4').style.display = 'block';
            document.getElementById('html-tab-4').classList.remove('active');
            document.getElementById('scss-tab-4').classList.add('active');
        }
    }

    document.getElementById('code-tab-area-1').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-2').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-3').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-4').addEventListener ('click', sourceTabHandler);


    // radio selectors
    const directionRadio = document.querySelectorAll('#directionRadio input[name="option-1"]');
    const directionRadioDark = document.querySelectorAll('#directionRadioDark input[name="option-101"]');

    directionRadio.forEach((directRadio) => {
        directRadio.addEventListener('click', ()=>{
            if(directRadio.checked && directRadio.value === 'horizontal') {
                document.getElementById('horizontal_default').style.display = 'flex';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_default_code').style.display = 'flex';
                document.getElementById('vertical_default_code').style.display = 'none';
            } else if(directRadio.checked && directRadio.value === 'vertical') {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'flex';
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'flex';
            }
        });
    });

    directionRadioDark.forEach((directRadioDark) => {
        directRadioDark.addEventListener('click', ()=>{
            if(directRadioDark.checked && directRadioDark.value === 'horizontal2') {
                document.getElementById('horizontal_default2').style.display = 'flex';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_default_code2').style.display = 'flex';
                document.getElementById('vertical_default_code2').style.display = 'none';
            } else if(directRadioDark.checked && directRadioDark.value === 'vertical2') {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'flex';
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'flex';
            }
        });
    });



})();