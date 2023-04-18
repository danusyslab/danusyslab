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
    }

    document.getElementById('code-tab-area-1').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-2').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-3').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-4').addEventListener ('click', sourceTabHandler);



    // config selector

    // light version
    const tagSolidLight = document.getElementById('tag-style-light-1');
    const tagOutlinedLight = document.getElementById('tag-style-light-2');

    // dark version
    const tagSolidDark = document.getElementById('tag-style-dark-1');
    const tagOutlinedDark = document.getElementById('tag-style-dark-2');

    function radioButtonHandler() {

        // light version
        if(tagSolidLight.checked) {
            document.getElementById('tag-solid-light').style.display = 'flex';
            document.getElementById('tag-outlined-light').style.display = 'none';
                
            document.getElementById('tag-solid-light-code').style.display = 'flex';
            document.getElementById('tag-outlined-light-code').style.display = 'none';
        }

        if(tagOutlinedLight.checked) {
            document.getElementById('tag-solid-light').style.display = 'none';
            document.getElementById('tag-outlined-light').style.display = 'flex';
                
            document.getElementById('tag-solid-light-code').style.display = 'none';
            document.getElementById('tag-outlined-light-code').style.display = 'flex';
        }




        // dark version
        if(tagSolidDark.checked) {
            document.getElementById('tag-solid-dark').style.display = 'flex';
            document.getElementById('tag-outlined-dark').style.display = 'none';
                
            document.getElementById('tag-solid-dark-code').style.display = 'flex';
            document.getElementById('tag-outlined-dark-code').style.display = 'none';
        }

        if(tagOutlinedDark.checked) {
            document.getElementById('tag-solid-dark').style.display = 'none';
            document.getElementById('tag-outlined-dark').style.display = 'flex';
                
            document.getElementById('tag-solid-dark-code').style.display = 'none';
            document.getElementById('tag-outlined-dark-code').style.display = 'flex';
        }
    }

    tagSolidLight.addEventListener('change', radioButtonHandler);
    tagOutlinedLight.addEventListener('change', radioButtonHandler);
    tagSolidDark.addEventListener('change', radioButtonHandler);
    tagOutlinedDark.addEventListener('change', radioButtonHandler);
})();