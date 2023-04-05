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

        if(currentTab === document.getElementById('html-tab-5')) {
            document.getElementById('html-5').style.display = 'block';
            document.getElementById('scss-5').style.display = 'none';
            document.getElementById('html-tab-5').classList.add('active');
            document.getElementById('scss-tab-5').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-5')) {
            document.getElementById('html-5').style.display = 'none';
            document.getElementById('scss-5').style.display = 'block';
            document.getElementById('html-tab-5').classList.remove('active');
            document.getElementById('scss-tab-5').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-6')) {
            document.getElementById('html-6').style.display = 'block';
            document.getElementById('scss-6').style.display = 'none';
            document.getElementById('html-tab-6').classList.add('active');
            document.getElementById('scss-tab-6').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-6')) {
            document.getElementById('html-6').style.display = 'none';
            document.getElementById('scss-6').style.display = 'block';
            document.getElementById('html-tab-6').classList.remove('active');
            document.getElementById('scss-tab-6').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-7')) {
            document.getElementById('html-7').style.display = 'block';
            document.getElementById('scss-7').style.display = 'none';
            document.getElementById('html-tab-7').classList.add('active');
            document.getElementById('scss-tab-7').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-7')) {
            document.getElementById('html-7').style.display = 'none';
            document.getElementById('scss-7').style.display = 'block';
            document.getElementById('html-tab-7').classList.remove('active');
            document.getElementById('scss-tab-7').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-8')) {
            document.getElementById('html-8').style.display = 'block';
            document.getElementById('scss-8').style.display = 'none';
            document.getElementById('html-tab-8').classList.add('active');
            document.getElementById('scss-tab-8').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-8')) {
            document.getElementById('html-8').style.display = 'none';
            document.getElementById('scss-8').style.display = 'block';
            document.getElementById('html-tab-8').classList.remove('active');
            document.getElementById('scss-tab-8').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-9')) {
            document.getElementById('html-9').style.display = 'block';
            document.getElementById('scss-9').style.display = 'none';
            document.getElementById('html-tab-9').classList.add('active');
            document.getElementById('scss-tab-9').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-9')) {
            document.getElementById('html-9').style.display = 'none';
            document.getElementById('scss-9').style.display = 'block';
            document.getElementById('html-tab-9').classList.remove('active');
            document.getElementById('scss-tab-9').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-10')) {
            document.getElementById('html-10').style.display = 'block';
            document.getElementById('scss-10').style.display = 'none';
            document.getElementById('html-tab-10').classList.add('active');
            document.getElementById('scss-tab-10').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-10')) {
            document.getElementById('html-10').style.display = 'none';
            document.getElementById('scss-10').style.display = 'block';
            document.getElementById('html-tab-10').classList.remove('active');
            document.getElementById('scss-tab-10').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-11')) {
            document.getElementById('html-11').style.display = 'block';
            document.getElementById('scss-11').style.display = 'none';
            document.getElementById('html-tab-11').classList.add('active');
            document.getElementById('scss-tab-11').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-11')) {
            document.getElementById('html-11').style.display = 'none';
            document.getElementById('scss-11').style.display = 'block';
            document.getElementById('html-tab-11').classList.remove('active');
            document.getElementById('scss-tab-11').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-12')) {
            document.getElementById('html-12').style.display = 'block';
            document.getElementById('scss-12').style.display = 'none';
            document.getElementById('html-tab-12').classList.add('active');
            document.getElementById('scss-tab-12').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-12')) {
            document.getElementById('html-12').style.display = 'none';
            document.getElementById('scss-12').style.display = 'block';
            document.getElementById('html-tab-12').classList.remove('active');
            document.getElementById('scss-tab-12').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-13')) {
            document.getElementById('html-13').style.display = 'block';
            document.getElementById('scss-13').style.display = 'none';
            document.getElementById('html-tab-13').classList.add('active');
            document.getElementById('scss-tab-13').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-13')) {
            document.getElementById('html-13').style.display = 'none';
            document.getElementById('scss-13').style.display = 'block';
            document.getElementById('html-tab-13').classList.remove('active');
            document.getElementById('scss-tab-13').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-14')) {
            document.getElementById('html-14').style.display = 'block';
            document.getElementById('scss-14').style.display = 'none';
            document.getElementById('html-tab-14').classList.add('active');
            document.getElementById('scss-tab-14').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-14')) {
            document.getElementById('html-14').style.display = 'none';
            document.getElementById('scss-14').style.display = 'block';
            document.getElementById('html-tab-14').classList.remove('active');
            document.getElementById('scss-tab-14').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-15')) {
            document.getElementById('html-15').style.display = 'block';
            document.getElementById('scss-15').style.display = 'none';
            document.getElementById('html-tab-15').classList.add('active');
            document.getElementById('scss-tab-15').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-15')) {
            document.getElementById('html-15').style.display = 'none';
            document.getElementById('scss-15').style.display = 'block';
            document.getElementById('html-tab-15').classList.remove('active');
            document.getElementById('scss-tab-15').classList.add('active');
        }

        if(currentTab === document.getElementById('html-tab-16')) {
            document.getElementById('html-16').style.display = 'block';
            document.getElementById('scss-16').style.display = 'none';
            document.getElementById('html-tab-16').classList.add('active');
            document.getElementById('scss-tab-16').classList.remove('active');
        }

        if(currentTab === document.getElementById('scss-tab-16')) {
            document.getElementById('html-16').style.display = 'none';
            document.getElementById('scss-16').style.display = 'block';
            document.getElementById('html-tab-16').classList.remove('active');
            document.getElementById('scss-tab-16').classList.add('active');
        }
        
    }

    document.getElementById('code-tab-area-1').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-2').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-3').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-4').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-5').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-6').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-7').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-8').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-9').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-10').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-11').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-12').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-13').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-14').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-15').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-16').addEventListener ('click', sourceTabHandler);


    // radio selectors
    const directionRadioLight = document.getElementById('directionRadio');
    const statesRadioLight = document.getElementById('statesRadio');

    const horizontalRadioLight = document.getElementById('light-radio-1');
    const verticalRadioLight = document.getElementById('light-radio-2');
    const defaultRadioLight = document.getElementById('light-radio-state-1');
    const readonlyRadioLight = document.getElementById('light-radio-state-2');
    const errorRadioLight = document.getElementById('light-radio-state-3');
    const disabledRadioLight = document.getElementById('light-radio-state-4');



    const directionRadioDark = document.getElementById('directionRadioDark');
    const statesRadioDark = document.getElementById('statesRadioDark');

    const horizontalRadioDark = document.getElementById('dark-radio-1');
    const verticalRadioDark = document.getElementById('dark-radio-2');
    const defaultRadioDark = document.getElementById('dark-radio-state-1');
    const readonlyRadioDark = document.getElementById('dark-radio-state-2');
    const errorRadioDark = document.getElementById('dark-radio-state-3');
    const disabledRadioDark = document.getElementById('dark-radio-state-4');

    function radioButtonHandler() {

        if(horizontalRadioLight.checked) {
            if(defaultRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'flex';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_readonly').style.display = 'none';
                document.getElementById('vertical_readonly').style.display = 'none';
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error').style.display = 'none';
                document.getElementById('horizontal_disabled').style.display = 'none';
                document.getElementById('vertical_disabled').style.display = 'none';
                
                document.getElementById('horizontal_default_code').style.display = 'flex';
                document.getElementById('vertical_default_code').style.display = 'none';
                document.getElementById('horizontal_readonly_code').style.display = 'none';
                document.getElementById('vertical_readonly_code').style.display = 'none';
                document.getElementById('horizontal_error_code').style.display = 'none';
                document.getElementById('vertical_error_code').style.display = 'none';
                document.getElementById('horizontal_disabled_code').style.display = 'none';
                document.getElementById('vertical_disabled_code').style.display = 'none';
                

            } else if(readonlyRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_readonly').style.display = 'flex';
                document.getElementById('vertical_readonly').style.display = 'none';
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error').style.display = 'none';
                document.getElementById('horizontal_disabled').style.display = 'none';
                document.getElementById('vertical_disabled').style.display = 'none';
                
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'none';
                document.getElementById('horizontal_readonly_code').style.display = 'flex';
                document.getElementById('vertical_readonly_code').style.display = 'none';
                document.getElementById('horizontal_error_code').style.display = 'none'; 
                document.getElementById('vertical_error_code').style.display = 'none';
                document.getElementById('horizontal_disabled_code').style.display = 'none';
                document.getElementById('vertical_disabled_code').style.display = 'none';

            } else if(errorRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_readonly').style.display = 'none';
                document.getElementById('vertical_readonly').style.display = 'none';
                document.getElementById('horizontal_error').style.display = 'flex';
                document.getElementById('vertical_error').style.display = 'none';
                document.getElementById('horizontal_disabled').style.display = 'none';
                document.getElementById('vertical_disabled').style.display = 'none';
                
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'none';
                document.getElementById('horizontal_readonly_code').style.display = 'none';
                document.getElementById('vertical_readonly_code').style.display = 'none';
                document.getElementById('horizontal_error_code').style.display = 'flex';
                document.getElementById('vertical_error_code').style.display = 'none';
                document.getElementById('horizontal_disabled_code').style.display = 'none';
                document.getElementById('vertical_disabled_code').style.display = 'none';

            } else if(disabledRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_readonly').style.display = 'none';
                document.getElementById('vertical_readonly').style.display = 'none';
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error').style.display = 'none';
                document.getElementById('horizontal_disabled').style.display = 'flex';
                document.getElementById('vertical_disabled').style.display = 'none';
                
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'none';
                document.getElementById('horizontal_readonly_code').style.display = 'none';
                document.getElementById('vertical_readonly_code').style.display = 'none';
                document.getElementById('horizontal_error_code').style.display = 'none';
                document.getElementById('vertical_error_code').style.display = 'none';
                document.getElementById('horizontal_disabled_code').style.display = 'flex';
                document.getElementById('vertical_disabled_code').style.display = 'none';
            }
        }

        if(verticalRadioLight.checked) {
            if(defaultRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'flex';
                document.getElementById('horizontal_readonly').style.display = 'none';
                document.getElementById('vertical_readonly').style.display = 'none';
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error').style.display = 'none';
                document.getElementById('horizontal_disabled').style.display = 'none';
                document.getElementById('vertical_disabled').style.display = 'none';
                
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'flex';
                document.getElementById('horizontal_readonly_code').style.display = 'none';
                document.getElementById('vertical_readonly_code').style.display = 'none'; 
                document.getElementById('horizontal_error_code').style.display = 'none';
                document.getElementById('vertical_error_code').style.display = 'none';
                document.getElementById('horizontal_disabled_code').style.display = 'none';
                document.getElementById('vertical_disabled_code').style.display = 'none';

            } else if(readonlyRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_readonly').style.display = 'none';
                document.getElementById('vertical_readonly').style.display = 'flex';
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error').style.display = 'none';
                document.getElementById('horizontal_disabled').style.display = 'none';
                document.getElementById('vertical_disabled').style.display = 'none';
                
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'none';
                document.getElementById('horizontal_readonly_code').style.display = 'none';
                document.getElementById('vertical_readonly_code').style.display = 'flex'; 
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error_code').style.display = 'none';
                document.getElementById('horizontal_disabled_code').style.display = 'none';
                document.getElementById('vertical_disabled_code').style.display = 'none';

            } else if(errorRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_readonly').style.display = 'none';
                document.getElementById('vertical_readonly').style.display = 'none';
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error').style.display = 'flex';
                document.getElementById('horizontal_disabled').style.display = 'none';
                document.getElementById('vertical_disabled').style.display = 'none';
                
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'none';
                document.getElementById('horizontal_readonly_code').style.display = 'none';
                document.getElementById('vertical_readonly_code').style.display = 'none'; 
                document.getElementById('horizontal_error_code').style.display = 'none';
                document.getElementById('vertical_error_code').style.display = 'flex';
                document.getElementById('horizontal_disabled_code').style.display = 'none';
                document.getElementById('vertical_disabled_code').style.display = 'none';

            } else if(disabledRadioLight.checked) {
                document.getElementById('horizontal_default').style.display = 'none';
                document.getElementById('vertical_default').style.display = 'none';
                document.getElementById('horizontal_readonly').style.display = 'none';
                document.getElementById('vertical_readonly').style.display = 'none';
                document.getElementById('horizontal_error').style.display = 'none';
                document.getElementById('vertical_error').style.display = 'none';
                document.getElementById('horizontal_disabled').style.display = 'none';
                document.getElementById('vertical_disabled').style.display = 'flex';
                
                document.getElementById('horizontal_default_code').style.display = 'none';
                document.getElementById('vertical_default_code').style.display = 'none';
                document.getElementById('horizontal_readonly_code').style.display = 'none';
                document.getElementById('vertical_readonly_code').style.display = 'none'; 
                document.getElementById('horizontal_error_code').style.display = 'none';
                document.getElementById('vertical_error_code').style.display = 'none';
                document.getElementById('horizontal_disabled_code').style.display = 'none';
                document.getElementById('vertical_disabled_code').style.display = 'flex';
            }
        }

        if(horizontalRadioDark.checked) {
            if(defaultRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'flex';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_readonly2').style.display = 'none';
                document.getElementById('vertical_readonly2').style.display = 'none';
                document.getElementById('horizontal_error2').style.display = 'none';
                document.getElementById('vertical_error2').style.display = 'none';
                document.getElementById('horizontal_disabled2').style.display = 'none';
                document.getElementById('vertical_disabled2').style.display = 'none';
                
                document.getElementById('horizontal_default_code2').style.display = 'flex';
                document.getElementById('vertical_default_code2').style.display = 'none';
                document.getElementById('horizontal_readonly_code2').style.display = 'none';
                document.getElementById('vertical_readonly_code2').style.display = 'none';
                document.getElementById('horizontal_error_code2').style.display = 'none';
                document.getElementById('vertical_error_code2').style.display = 'none';
                document.getElementById('horizontal_disabled_code2').style.display = 'none';
                document.getElementById('vertical_disabled_code2').style.display = 'none';

            } else if(readonlyRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_readonly2').style.display = 'flex';
                document.getElementById('vertical_readonly2').style.display = 'none';
                document.getElementById('horizontal_error2').style.display = 'none';
                document.getElementById('vertical_error2').style.display = 'none';
                document.getElementById('horizontal_disabled2').style.display = 'none';
                document.getElementById('vertical_disabled2').style.display = 'none';
                
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'none';
                document.getElementById('horizontal_readonly_code2').style.display = 'flex';
                document.getElementById('vertical_readonly_code2').style.display = 'none'; 
                document.getElementById('horizontal_error_code2').style.display = 'none';
                document.getElementById('vertical_error_code2').style.display = 'none';
                document.getElementById('horizontal_disabled_code2').style.display = 'none';
                document.getElementById('vertical_disabled_code2').style.display = 'none';

            } else if(errorRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_readonly2').style.display = 'none';
                document.getElementById('vertical_readonly2').style.display = 'none';
                document.getElementById('horizontal_error2').style.display = 'flex';
                document.getElementById('vertical_error2').style.display = 'none';
                document.getElementById('horizontal_disabled2').style.display = 'none';
                document.getElementById('vertical_disabled2').style.display = 'none';
                
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'none';
                document.getElementById('horizontal_readonly_code2').style.display = 'none';
                document.getElementById('vertical_readonly_code2').style.display = 'none'; 
                document.getElementById('horizontal_error_code2').style.display = 'flex';
                document.getElementById('vertical_error_code2').style.display = 'none';
                document.getElementById('horizontal_disabled_code2').style.display = 'none';
                document.getElementById('vertical_disabled_code2').style.display = 'none';

            } else if(disabledRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_readonly2').style.display = 'none';
                document.getElementById('vertical_readonly2').style.display = 'none';
                document.getElementById('horizontal_error2').style.display = 'none';
                document.getElementById('vertical_error2').style.display = 'none';
                document.getElementById('horizontal_disabled2').style.display = 'flex';
                document.getElementById('vertical_disabled2').style.display = 'none';
                
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'none';
                document.getElementById('horizontal_readonly_code2').style.display = 'none';
                document.getElementById('vertical_readonly_code2').style.display = 'none'; 
                document.getElementById('horizontal_error_code2').style.display = 'none';
                document.getElementById('vertical_error_code2').style.display = 'none';
                document.getElementById('horizontal_disabled_code2').style.display = 'flex';
                document.getElementById('vertical_disabled_code2').style.display = 'none';
            }
        }

        if(verticalRadioDark.checked) {
            if(defaultRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'flex';
                document.getElementById('horizontal_readonly2').style.display = 'none';
                document.getElementById('vertical_readonly2').style.display = 'none';
                document.getElementById('horizontal_error2').style.display = 'none';
                document.getElementById('vertical_error2').style.display = 'none';
                document.getElementById('horizontal_disabled2').style.display = 'none';
                document.getElementById('vertical_disabled2').style.display = 'none';
                
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'flex';
                document.getElementById('horizontal_readonly_code2').style.display = 'none';
                document.getElementById('vertical_readonly_code2').style.display = 'none'; 
                document.getElementById('horizontal_error_code2').style.display = 'none';
                document.getElementById('vertical_error_code2').style.display = 'none';
                document.getElementById('horizontal_disabled_code2').style.display = 'none';
                document.getElementById('vertical_disabled_code2').style.display = 'none';

            } else if(readonlyRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_readonly2').style.display = 'none';
                document.getElementById('vertical_readonly2').style.display = 'flex';
                document.getElementById('horizontal_error2').style.display = 'none';
                document.getElementById('vertical_error2').style.display = 'none';
                document.getElementById('horizontal_disabled2').style.display = 'none';
                document.getElementById('vertical_disabled2').style.display = 'none';
                
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'none';
                document.getElementById('horizontal_readonly_code2').style.display = 'none';
                document.getElementById('vertical_readonly_code2').style.display = 'flex'; 
                document.getElementById('horizontal_error_code2').style.display = 'none';
                document.getElementById('vertical_error_code2').style.display = 'none';
                document.getElementById('horizontal_disabled_code2').style.display = 'none';
                document.getElementById('vertical_disabled_code2').style.display = 'none';

            } else if(errorRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_readonly2').style.display = 'none';
                document.getElementById('vertical_readonly2').style.display = 'none';
                document.getElementById('horizontal_error2').style.display = 'none';
                document.getElementById('vertical_error2').style.display = 'flex';
                document.getElementById('horizontal_disabled2').style.display = 'none';
                document.getElementById('vertical_disabled2').style.display = 'none';
                
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'none';
                document.getElementById('horizontal_readonly_code2').style.display = 'none';
                document.getElementById('vertical_readonly_code2').style.display = 'none'; 
                document.getElementById('horizontal_error_code2').style.display = 'none';
                document.getElementById('vertical_error_code2').style.display = 'flex';
                document.getElementById('horizontal_disabled_code2').style.display = 'none';
                document.getElementById('vertical_disabled_code2').style.display = 'none';

            } else if(disabledRadioDark.checked) {
                document.getElementById('horizontal_default2').style.display = 'none';
                document.getElementById('vertical_default2').style.display = 'none';
                document.getElementById('horizontal_readonly2').style.display = 'none';
                document.getElementById('vertical_readonly2').style.display = 'none';
                document.getElementById('horizontal_error2').style.display = 'none';
                document.getElementById('vertical_error2').style.display = 'none';
                document.getElementById('horizontal_disabled2').style.display = 'none';
                document.getElementById('vertical_disabled2').style.display = 'flex';
                
                document.getElementById('horizontal_default_code2').style.display = 'none';
                document.getElementById('vertical_default_code2').style.display = 'none';
                document.getElementById('horizontal_readonly_code2').style.display = 'none';
                document.getElementById('vertical_readonly_code2').style.display = 'none'; 
                document.getElementById('horizontal_error_code2').style.display = 'none';
                document.getElementById('vertical_error_code2').style.display = 'none';
                document.getElementById('horizontal_disabled_code2').style.display = 'none';
                document.getElementById('vertical_disabled_code2').style.display = 'flex';
            }
        }
    }

    directionRadioLight.addEventListener('change', radioButtonHandler);
    statesRadioLight.addEventListener('change', radioButtonHandler);

    horizontalRadioLight.addEventListener('change', radioButtonHandler);
    verticalRadioLight.addEventListener('change', radioButtonHandler);
    defaultRadioLight.addEventListener('change', radioButtonHandler);
    errorRadioLight.addEventListener('change', radioButtonHandler);


    directionRadioDark.addEventListener('change', radioButtonHandler);
    statesRadioDark.addEventListener('change', radioButtonHandler);

    horizontalRadioDark.addEventListener('change', radioButtonHandler);
    verticalRadioDark.addEventListener('change', radioButtonHandler);
    defaultRadioDark.addEventListener('change', radioButtonHandler);

    radioButtonHandler();



    // directionRadio.forEach((directRadio) => {
    //     directRadio.addEventListener('click', ()=>{
    //         if(directRadio.checked && directRadio.value === 'horizontal') {
    //             document.getElementById('horizontal_default').style.display = 'flex';
    //             document.getElementById('vertical_default').style.display = 'none';
    //             document.getElementById('horizontal_default_code').style.display = 'flex';
    //             document.getElementById('vertical_default_code').style.display = 'none';
    //             document.getElementById('horizontal_readonly').style.display = 'none';
    //                         document.getElementById('horizontal_readonly_code').style.display = 'none';


    //             statesRadio.forEach(stateRadio => {
    //                 stateRadio.addEventListener('click'), ()=>{
    //                     if(stateRadio.value === 'readOnly') {
    //                         document.getElementById('horizontal_default').style.display = 'none';
    //                         document.getElementById('vertical_default').style.display = 'none';
    //                         document.getElementById('horizontal_default_code').style.display = 'none';
    //                         document.getElementById('vertical_default_code').style.display = 'none';
    //                         document.getElementById('horizontal_readonly').style.display = 'flex';
    //                         document.getElementById('horizontal_readonly_code').style.display = 'flex';
    //                     }

    //                     if(stateRadio.value === 'default') {
    //                         document.getElementById('horizontal_default').style.display = 'flex';
    //                         document.getElementById('vertical_default').style.display = 'none';
    //                         document.getElementById('horizontal_default_code').style.display = 'flex';
    //                         document.getElementById('vertical_default_code').style.display = 'none';
    //                         document.getElementById('horizontal_readonly').style.display = 'none';
    //                         document.getElementById('horizontal_readonly_code').style.display = 'none';
    //                     }
    //                 }
    //             });


    //         } else if(directRadio.checked && directRadio.value === 'vertical') {
    //             document.getElementById('horizontal_default').style.display = 'none';
    //             document.getElementById('vertical_default').style.display = 'flex';
    //             document.getElementById('horizontal_default_code').style.display = 'none';
    //             document.getElementById('vertical_default_code').style.display = 'flex';
    //             document.getElementById('horizontal_readonly').style.display = 'none';
    //                         document.getElementById('horizontal_readonly_code').style.display = 'none';
    //         }
    //     });
    // });

    // directionRadioDark.forEach((directRadioDark) => {
    //     directRadioDark.addEventListener('click', ()=>{
    //         if(directRadioDark.checked && directRadioDark.value === 'horizontal2') {
    //             document.getElementById('horizontal_default2').style.display = 'flex';
    //             document.getElementById('vertical_default2').style.display = 'none';
    //             document.getElementById('horizontal_default_code2').style.display = 'flex';
    //             document.getElementById('vertical_default_code2').style.display = 'none';
    //         } else if(directRadioDark.checked && directRadioDark.value === 'vertical2') {
    //             document.getElementById('horizontal_default2').style.display = 'none';
    //             document.getElementById('vertical_default2').style.display = 'flex';
    //             document.getElementById('horizontal_default_code2').style.display = 'none';
    //             document.getElementById('vertical_default_code2').style.display = 'flex';
    //         }
    //     });
    // });



})();