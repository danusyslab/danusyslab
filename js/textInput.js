(()=>{
    function sourceTabHandler(e) {
        const currentTab = e.target;

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
    }

    document.getElementById('code-tab-area-1').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-2').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-3').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-4').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-5').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-6').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-7').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-8').addEventListener ('click', sourceTabHandler);


    // config selector

    // light version
    const horizontalLight = document.getElementById('input-direction-light-1');
    const verticalLight = document.getElementById('input-direction-light-2');

    const defaultLight = document.getElementById('input-state-light-1');
    const readOnlyLight = document.getElementById('input-state-light-2');
    const errorLight = document.getElementById('input-state-light-3');
    const disabledLight = document.getElementById('input-state-light-4');

    // dark version
    const horizontalDark = document.getElementById('input-direction-dark-1');
    const verticalDark = document.getElementById('input-direction-dark-2');

    const defaultDark = document.getElementById('input-state-dark-1');
    const readOnlyDark = document.getElementById('input-state-dark-2');
    const errorDark = document.getElementById('input-state-dark-3');
    const disabledDark = document.getElementById('input-state-dark-4');

    function radioButtonHandler() {

        // light version
        if(horizontalLight.checked) {

            if(defaultLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'flex';
                document.getElementById('input-read-only-light').style.display = 'none';
                document.getElementById('input-error-light').style.display = 'none';
                document.getElementById('input-disabled-light').style.display = 'none';
                document.getElementById('input-default-light-vertical').style.display = 'none';
                document.getElementById('input-read-only-light-vertical').style.display = 'none';
                document.getElementById('input-error-light-vertical').style.display = 'none';
                document.getElementById('input-disabled-light-vertical').style.display = 'none';

                document.getElementById('input-default-light-code').style.display = 'flex';
                document.getElementById('input-read-only-light-code').style.display = 'none';
                document.getElementById('input-error-light-code').style.display = 'none';
                document.getElementById('input-disabled-light-code').style.display = 'none';
                document.getElementById('input-default-light-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'none';
                document.getElementById('input-error-light-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'none';
            }

            if(readOnlyLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'none';
                document.getElementById('input-read-only-light').style.display = 'flex';
                document.getElementById('input-error-light').style.display = 'none';
                document.getElementById('input-disabled-light').style.display = 'none';
                document.getElementById('input-default-light-vertical').style.display = 'none';
                document.getElementById('input-read-only-light-vertical').style.display = 'none';
                document.getElementById('input-error-light-vertical').style.display = 'none';
                document.getElementById('input-disabled-light-vertical').style.display = 'none';

                document.getElementById('input-default-light-code').style.display = 'none';
                document.getElementById('input-read-only-light-code').style.display = 'flex';
                document.getElementById('input-error-light-code').style.display = 'none';
                document.getElementById('input-disabled-light-code').style.display = 'none';
                document.getElementById('input-default-light-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'none';
                document.getElementById('input-error-light-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'none';
            }

            if(errorLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'none';
                document.getElementById('input-read-only-light').style.display = 'none';
                document.getElementById('input-error-light').style.display = 'flex';
                document.getElementById('input-disabled-light').style.display = 'none';
                document.getElementById('input-default-light-vertical').style.display = 'none';
                document.getElementById('input-read-only-light-vertical').style.display = 'none';
                document.getElementById('input-error-light-vertical').style.display = 'none';
                document.getElementById('input-disabled-light-vertical').style.display = 'none';

                document.getElementById('input-default-light-code').style.display = 'none';
                document.getElementById('input-read-only-light-code').style.display = 'none';
                document.getElementById('input-error-light-code').style.display = 'flex';
                document.getElementById('input-disabled-light-code').style.display = 'none';
                document.getElementById('input-default-light-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'none';
                document.getElementById('input-error-light-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'none';
            }

            if(disabledLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'none';
                document.getElementById('input-read-only-light').style.display = 'none';
                document.getElementById('input-error-light').style.display = 'none';
                document.getElementById('input-disabled-light').style.display = 'flex';
                document.getElementById('input-default-light-vertical').style.display = 'none';
                document.getElementById('input-read-only-light-vertical').style.display = 'none';
                document.getElementById('input-error-light-vertical').style.display = 'none';
                document.getElementById('input-disabled-light-vertical').style.display = 'none';

                document.getElementById('input-default-light-code').style.display = 'none';
                document.getElementById('input-read-only-light-code').style.display = 'none';
                document.getElementById('input-error-light-code').style.display = 'none';
                document.getElementById('input-disabled-light-code').style.display = 'flex';
                document.getElementById('input-default-light-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'none';
                document.getElementById('input-error-light-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'none';
            }
        }

        if(verticalLight.checked) {

            if(defaultLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'none';
                document.getElementById('input-read-only-light').style.display = 'none';
                document.getElementById('input-error-light').style.display = 'none';
                document.getElementById('input-disabled-light').style.display = 'none';
                document.getElementById('input-default-light-vertical').style.display = 'flex';
                document.getElementById('input-read-only-light-vertical').style.display = 'none';
                document.getElementById('input-error-light-vertical').style.display = 'none';
                document.getElementById('input-disabled-light-vertical').style.display = 'none';

                document.getElementById('input-default-light-code').style.display = 'none';
                document.getElementById('input-read-only-light-code').style.display = 'none';
                document.getElementById('input-error-light-code').style.display = 'none';
                document.getElementById('input-disabled-light-code').style.display = 'none';
                document.getElementById('input-default-light-vertical-code').style.display = 'flex';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'none';
                document.getElementById('input-error-light-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'none';
            }

            if(readOnlyLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'none';
                document.getElementById('input-read-only-light').style.display = 'none';
                document.getElementById('input-error-light').style.display = 'none';
                document.getElementById('input-disabled-light').style.display = 'none';
                document.getElementById('input-default-light-vertical').style.display = 'none';
                document.getElementById('input-read-only-light-vertical').style.display = 'flex';
                document.getElementById('input-error-light-vertical').style.display = 'none';
                document.getElementById('input-disabled-light-vertical').style.display = 'none';

                document.getElementById('input-default-light-code').style.display = 'none';
                document.getElementById('input-read-only-light-code').style.display = 'none';
                document.getElementById('input-error-light-code').style.display = 'none';
                document.getElementById('input-disabled-light-code').style.display = 'none';
                document.getElementById('input-default-light-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'flex';
                document.getElementById('input-error-light-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'none';
            }

            if(errorLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'none';
                document.getElementById('input-read-only-light').style.display = 'none';
                document.getElementById('input-error-light').style.display = 'none';
                document.getElementById('input-disabled-light').style.display = 'none';
                document.getElementById('input-default-light-vertical').style.display = 'none';
                document.getElementById('input-read-only-light-vertical').style.display = 'none';
                document.getElementById('input-error-light-vertical').style.display = 'flex';
                document.getElementById('input-disabled-light-vertical').style.display = 'none';

                document.getElementById('input-default-light-code').style.display = 'none';
                document.getElementById('input-read-only-light-code').style.display = 'none';
                document.getElementById('input-error-light-code').style.display = 'none';
                document.getElementById('input-disabled-light-code').style.display = 'none';
                document.getElementById('input-default-light-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'none';
                document.getElementById('input-error-light-vertical-code').style.display = 'flex';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'none';
            }

            if(disabledLight.checked) {
                
                document.getElementById('input-default-light').style.display = 'none';
                document.getElementById('input-read-only-light').style.display = 'none';
                document.getElementById('input-error-light').style.display = 'none';
                document.getElementById('input-disabled-light').style.display = 'none';
                document.getElementById('input-default-light-vertical').style.display = 'none';
                document.getElementById('input-read-only-light-vertical').style.display = 'none';
                document.getElementById('input-error-light-vertical').style.display = 'none';
                document.getElementById('input-disabled-light-vertical').style.display = 'flex';

                document.getElementById('input-default-light-code').style.display = 'none';
                document.getElementById('input-read-only-light-code').style.display = 'none';
                document.getElementById('input-error-light-code').style.display = 'none';
                document.getElementById('input-disabled-light-code').style.display = 'none';
                document.getElementById('input-default-light-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-light-vertical-code').style.display = 'none';
                document.getElementById('input-error-light-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-light-vertical-code').style.display = 'flex';
            }
        }





        // dark version
        if(horizontalDark.checked) {

            if(defaultDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'flex';
                document.getElementById('input-read-only-dark').style.display = 'none';
                document.getElementById('input-error-dark').style.display = 'none';
                document.getElementById('input-disabled-dark').style.display = 'none';
                document.getElementById('input-default-dark-vertical').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical').style.display = 'none';
                document.getElementById('input-error-dark-vertical').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical').style.display = 'none';

                document.getElementById('input-default-dark-code').style.display = 'flex';
                document.getElementById('input-read-only-dark-code').style.display = 'none';
                document.getElementById('input-error-dark-code').style.display = 'none';
                document.getElementById('input-disabled-dark-code').style.display = 'none';
                document.getElementById('input-default-dark-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'none';
                document.getElementById('input-error-dark-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'none';
            }

            if(readOnlyDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'none';
                document.getElementById('input-read-only-dark').style.display = 'flex';
                document.getElementById('input-error-dark').style.display = 'none';
                document.getElementById('input-disabled-dark').style.display = 'none';
                document.getElementById('input-default-dark-vertical').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical').style.display = 'none';
                document.getElementById('input-error-dark-vertical').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical').style.display = 'none';

                document.getElementById('input-default-dark-code').style.display = 'none';
                document.getElementById('input-read-only-dark-code').style.display = 'flex';
                document.getElementById('input-error-dark-code').style.display = 'none';
                document.getElementById('input-disabled-dark-code').style.display = 'none';
                document.getElementById('input-default-dark-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'none';
                document.getElementById('input-error-dark-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'none';
            }

            if(errorDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'none';
                document.getElementById('input-read-only-dark').style.display = 'none';
                document.getElementById('input-error-dark').style.display = 'flex';
                document.getElementById('input-disabled-dark').style.display = 'none';
                document.getElementById('input-default-dark-vertical').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical').style.display = 'none';
                document.getElementById('input-error-dark-vertical').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical').style.display = 'none';

                document.getElementById('input-default-dark-code').style.display = 'none';
                document.getElementById('input-read-only-dark-code').style.display = 'none';
                document.getElementById('input-error-dark-code').style.display = 'flex';
                document.getElementById('input-disabled-dark-code').style.display = 'none';
                document.getElementById('input-default-dark-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'none';
                document.getElementById('input-error-dark-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'none';
            }

            if(disabledDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'none';
                document.getElementById('input-read-only-dark').style.display = 'none';
                document.getElementById('input-error-dark').style.display = 'none';
                document.getElementById('input-disabled-dark').style.display = 'flex';
                document.getElementById('input-default-dark-vertical').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical').style.display = 'none';
                document.getElementById('input-error-dark-vertical').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical').style.display = 'none';

                document.getElementById('input-default-dark-code').style.display = 'none';
                document.getElementById('input-read-only-dark-code').style.display = 'none';
                document.getElementById('input-error-dark-code').style.display = 'none';
                document.getElementById('input-disabled-dark-code').style.display = 'flex';
                document.getElementById('input-default-dark-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'none';
                document.getElementById('input-error-dark-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'none';
            }
        }

        if(verticalDark.checked) {

            if(defaultDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'none';
                document.getElementById('input-read-only-dark').style.display = 'none';
                document.getElementById('input-error-dark').style.display = 'none';
                document.getElementById('input-disabled-dark').style.display = 'none';
                document.getElementById('input-default-dark-vertical').style.display = 'flex';
                document.getElementById('input-read-only-dark-vertical').style.display = 'none';
                document.getElementById('input-error-dark-vertical').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical').style.display = 'none';

                document.getElementById('input-default-dark-code').style.display = 'none';
                document.getElementById('input-read-only-dark-code').style.display = 'none';
                document.getElementById('input-error-dark-code').style.display = 'none';
                document.getElementById('input-disabled-dark-code').style.display = 'none';
                document.getElementById('input-default-dark-vertical-code').style.display = 'flex';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'none';
                document.getElementById('input-error-dark-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'none';
            }

            if(readOnlyDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'none';
                document.getElementById('input-read-only-dark').style.display = 'none';
                document.getElementById('input-error-dark').style.display = 'none';
                document.getElementById('input-disabled-dark').style.display = 'none';
                document.getElementById('input-default-dark-vertical').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical').style.display = 'flex';
                document.getElementById('input-error-dark-vertical').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical').style.display = 'none';

                document.getElementById('input-default-dark-code').style.display = 'none';
                document.getElementById('input-read-only-dark-code').style.display = 'none';
                document.getElementById('input-error-dark-code').style.display = 'none';
                document.getElementById('input-disabled-dark-code').style.display = 'none';
                document.getElementById('input-default-dark-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'flex';
                document.getElementById('input-error-dark-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'none';
            }

            if(errorDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'none';
                document.getElementById('input-read-only-dark').style.display = 'none';
                document.getElementById('input-error-dark').style.display = 'none';
                document.getElementById('input-disabled-dark').style.display = 'none';
                document.getElementById('input-default-dark-vertical').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical').style.display = 'none';
                document.getElementById('input-error-dark-vertical').style.display = 'flex';
                document.getElementById('input-disabled-dark-vertical').style.display = 'none';

                document.getElementById('input-default-dark-code').style.display = 'none';
                document.getElementById('input-read-only-dark-code').style.display = 'none';
                document.getElementById('input-error-dark-code').style.display = 'none';
                document.getElementById('input-disabled-dark-code').style.display = 'none';
                document.getElementById('input-default-dark-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'none';
                document.getElementById('input-error-dark-vertical-code').style.display = 'flex';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'none';
            }

            if(disabledDark.checked) {
                
                document.getElementById('input-default-dark').style.display = 'none';
                document.getElementById('input-read-only-dark').style.display = 'none';
                document.getElementById('input-error-dark').style.display = 'none';
                document.getElementById('input-disabled-dark').style.display = 'none';
                document.getElementById('input-default-dark-vertical').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical').style.display = 'none';
                document.getElementById('input-error-dark-vertical').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical').style.display = 'flex';

                document.getElementById('input-default-dark-code').style.display = 'none';
                document.getElementById('input-read-only-dark-code').style.display = 'none';
                document.getElementById('input-error-dark-code').style.display = 'none';
                document.getElementById('input-disabled-dark-code').style.display = 'none';
                document.getElementById('input-default-dark-vertical-code').style.display = 'none';
                document.getElementById('input-read-only-dark-vertical-code').style.display = 'none';
                document.getElementById('input-error-dark-vertical-code').style.display = 'none';
                document.getElementById('input-disabled-dark-vertical-code').style.display = 'flex';
            }
        }
    }

    horizontalLight.addEventListener('change', radioButtonHandler);
    verticalLight.addEventListener('change', radioButtonHandler);

    defaultLight.addEventListener('change', radioButtonHandler);
    readOnlyLight.addEventListener('change', radioButtonHandler);
    errorLight.addEventListener('change', radioButtonHandler);
    disabledLight.addEventListener('change', radioButtonHandler);



})();