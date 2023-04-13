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
    // radio selectors

    // light version
    const checkboxLight = document.getElementById('light-check-state-1');
    const checkboxErrorLight = document.getElementById('light-check-state-2');
    const checkboxDisabledLight = document.getElementById('light-check-state-3');
    const checkboxIndeterminateLight = document.getElementById('light-check-state-4');


    // dark version
    const checkboxDark = document.getElementById('dark-check-state-1');
    const checkboxErrorDark = document.getElementById('dark-check-state-2');
    const checkboxDisabledDark = document.getElementById('dark-check-state-3');
    const checkboxIndeterminateDark = document.getElementById('dark-check-state-4');


    function radioButtonHandler() {

        // light version
        if(checkboxLight.checked) {
            document.getElementById('check_default').style.display = 'flex';
            document.getElementById('error_default').style.display = 'none';
            document.getElementById('disabled_default').style.display = 'none';
            document.getElementById('indeterminate_default').style.display = 'none';
                
            document.getElementById('check_default_code').style.display = 'flex';
            document.getElementById('error_default_code').style.display = 'none';
            document.getElementById('disabled_default_code').style.display = 'none';
            document.getElementById('indeterminate_default_code').style.display = 'none';
        }

        if(checkboxErrorLight.checked) {
            document.getElementById('check_default').style.display = 'none';
            document.getElementById('error_default').style.display = 'flex';
            document.getElementById('disabled_default').style.display = 'none';
            document.getElementById('indeterminate_default').style.display = 'none';
                
            document.getElementById('check_default_code').style.display = 'none';
            document.getElementById('error_default_code').style.display = 'flex';
            document.getElementById('disabled_default_code').style.display = 'none';
            document.getElementById('indeterminate_default_code').style.display = 'none';
        }

        if(checkboxDisabledLight.checked) {
            document.getElementById('check_default').style.display = 'none';
            document.getElementById('error_default').style.display = 'none';
            document.getElementById('disabled_default').style.display = 'flex';
            document.getElementById('indeterminate_default').style.display = 'none';
                
            document.getElementById('check_default_code').style.display = 'none';
            document.getElementById('error_default_code').style.display = 'none';
            document.getElementById('disabled_default_code').style.display = 'flex';
            document.getElementById('indeterminate_default_code').style.display = 'none';
        }

        if(checkboxIndeterminateLight.checked) {
            document.getElementById('check_default').style.display = 'none';
            document.getElementById('error_default').style.display = 'none';
            document.getElementById('disabled_default').style.display = 'none';
            document.getElementById('indeterminate_default').style.display = 'flex';
                
            document.getElementById('check_default_code').style.display = 'none';
            document.getElementById('error_default_code').style.display = 'none';
            document.getElementById('disabled_default_code').style.display = 'none';
            document.getElementById('indeterminate_default_code').style.display = 'flex';
        }




        // dark version
        if(checkboxDark.checked) {
            document.getElementById('check_default_dark').style.display = 'flex';
            document.getElementById('error_default_dark').style.display = 'none';
            document.getElementById('disabled_default_dark').style.display = 'none';
            document.getElementById('indeterminate_default_dark').style.display = 'none';
                
            document.getElementById('check_default_code_dark').style.display = 'flex';
            document.getElementById('error_default_code_dark').style.display = 'none';
            document.getElementById('disabled_default_code_dark').style.display = 'none';
            document.getElementById('indeterminate_default_code_dark').style.display = 'none';
        }

        if(checkboxErrorDark.checked) {
            document.getElementById('check_default_dark').style.display = 'none';
            document.getElementById('error_default_dark').style.display = 'flex';
            document.getElementById('disabled_default_dark').style.display = 'none';
            document.getElementById('indeterminate_default_dark').style.display = 'none';
                
            document.getElementById('check_default_code_dark').style.display = 'none';
            document.getElementById('error_default_code_dark').style.display = 'flex';
            document.getElementById('disabled_default_code_dark').style.display = 'none';
            document.getElementById('indeterminate_default_code_dark').style.display = 'none';
        }

        if(checkboxDisabledDark.checked) {
            document.getElementById('check_default_dark').style.display = 'none';
            document.getElementById('error_default_dark').style.display = 'none';
            document.getElementById('disabled_default_dark').style.display = 'flex';
            document.getElementById('indeterminate_default_dark').style.display = 'none';
                
            document.getElementById('check_default_code_dark').style.display = 'none';
            document.getElementById('error_default_code_dark').style.display = 'none';
            document.getElementById('disabled_default_code_dark').style.display = 'flex';
            document.getElementById('indeterminate_default_code_dark').style.display = 'none';
        }

        if(checkboxIndeterminateDark.checked) {
            document.getElementById('check_default_dark').style.display = 'none';
            document.getElementById('error_default_dark').style.display = 'none';
            document.getElementById('disabled_default_dark').style.display = 'none';
            document.getElementById('indeterminate_default_dark').style.display = 'flex';
                
            document.getElementById('check_default_code_dark').style.display = 'none';
            document.getElementById('error_default_code_dark').style.display = 'none';
            document.getElementById('disabled_default_code_dark').style.display = 'none';
            document.getElementById('indeterminate_default_code_dark').style.display = 'flex';
        }
    }

    checkboxLight.addEventListener('change', radioButtonHandler);
    checkboxErrorLight.addEventListener('change', radioButtonHandler);
    checkboxDisabledLight.addEventListener('change', radioButtonHandler);
    checkboxIndeterminateLight.addEventListener('change', radioButtonHandler);


    // dark version
    checkboxDark.addEventListener('change', radioButtonHandler);
    checkboxErrorDark.addEventListener('change', radioButtonHandler);
    checkboxDisabledDark.addEventListener('change', radioButtonHandler);
    checkboxIndeterminateDark.addEventListener('change', radioButtonHandler);


})();