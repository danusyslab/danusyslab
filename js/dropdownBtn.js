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
    }

    document.getElementById('code-tab-area-1').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-2').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-3').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-4').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-5').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-6').addEventListener ('click', sourceTabHandler);



    // light version
    const singleLight = document.getElementById('dropdown-variant-light-1');
    const multiLight = document.getElementById('dropdown-variant-light-2');
    const multiLight2 = document.getElementById('dropdown-variant-light-3');


    // dark version
    const singleDark = document.getElementById('dropdown-variant-dark-1');
    const multiDark = document.getElementById('dropdown-variant-dark-2');
    const multiDark2 = document.getElementById('dropdown-variant-dark-3');

    function radioButtonHandler() {

        // light version
        if(singleLight.checked) {
            document.getElementById('dropdown-select-light').style.display = 'flex';
            document.getElementById('dropdown-multi-light').style.display = 'none';
            document.getElementById('dropdown-multi-light-2').style.display = 'none';

            document.getElementById('dropdown-select-light-code').style.display = 'flex';
            document.getElementById('dropdown-multi-light-code').style.display = 'none';
            document.getElementById('dropdown-multi-light-code-2').style.display = 'none';
        }

        if(multiLight.checked) {
            document.getElementById('dropdown-select-light').style.display = 'none';
            document.getElementById('dropdown-multi-light').style.display = 'flex';
            document.getElementById('dropdown-multi-light-2').style.display = 'none';

            document.getElementById('dropdown-select-light-code').style.display = 'none';
            document.getElementById('dropdown-multi-light-code').style.display = 'flex';
            document.getElementById('dropdown-multi-light-code-2').style.display = 'none';
        }

        if(multiLight2.checked) {
            document.getElementById('dropdown-select-light').style.display = 'none';
            document.getElementById('dropdown-multi-light').style.display = 'none';
            document.getElementById('dropdown-multi-light-2').style.display = 'flex';

            document.getElementById('dropdown-select-light-code').style.display = 'none';
            document.getElementById('dropdown-multi-light-code').style.display = 'none';
            document.getElementById('dropdown-multi-light-code-2').style.display = 'flex';
        }



        // dark version
        if(singleDark.checked) {
            document.getElementById('dropdown-select-dark').style.display = 'flex';
            document.getElementById('dropdown-multi-dark').style.display = 'none';
            document.getElementById('dropdown-multi-dark-2').style.display = 'none';

            document.getElementById('dropdown-select-dark-code').style.display = 'flex';
            document.getElementById('dropdown-multi-dark-code').style.display = 'none';
            document.getElementById('dropdown-multi-dark-code-2').style.display = 'none';
        }

        if(multiDark.checked) {
            document.getElementById('dropdown-select-dark').style.display = 'none';
            document.getElementById('dropdown-multi-dark').style.display = 'flex';
            document.getElementById('dropdown-multi-dark-2').style.display = 'none';

            document.getElementById('dropdown-select-dark-code').style.display = 'none';
            document.getElementById('dropdown-multi-dark-code').style.display = 'flex';
            document.getElementById('dropdown-multi-dark-code-2').style.display = 'none';
        }

        if(multiDark2.checked) {
            document.getElementById('dropdown-select-dark').style.display = 'none';
            document.getElementById('dropdown-multi-dark').style.display = 'none';
            document.getElementById('dropdown-multi-dark-2').style.display = 'flex';

            document.getElementById('dropdown-select-dark-code').style.display = 'none';
            document.getElementById('dropdown-multi-dark-code').style.display = 'none';
            document.getElementById('dropdown-multi-dark-code-2').style.display = 'flex';
        }
    }

    singleLight.addEventListener('change', radioButtonHandler);
    multiLight.addEventListener('change', radioButtonHandler);
    multiLight2.addEventListener('change', radioButtonHandler);


    singleDark.addEventListener('change', radioButtonHandler);
    multiDark.addEventListener('change', radioButtonHandler);
    multiDark2.addEventListener('change', radioButtonHandler);

})();