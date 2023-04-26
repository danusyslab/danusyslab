(()=>{
    function sourceTabHandler(e) {
        const currentTab = e.target;

        if(currentTab === document.getElementById('html-tab-1')) {
            document.getElementById('html-1').style.display = 'block';
            document.getElementById('scss-1').style.display = 'none';
            // document.getElementById('js-1').style.display = 'none';
            document.getElementById('html-tab-1').classList.add('active');
            document.getElementById('scss-tab-1').classList.remove('active');
            // document.getElementById('js-tab-1').classList.remove('active');
        }
        
        if(currentTab === document.getElementById('scss-tab-1')) {
            document.getElementById('html-1').style.display = 'none';
            document.getElementById('scss-1').style.display = 'block';
            // document.getElementById('js-1').style.display = 'none';
            document.getElementById('html-tab-1').classList.remove('active');
            document.getElementById('scss-tab-1').classList.add('active');
            // document.getElementById('js-tab-1').classList.remove('active');
        }

        if(currentTab === document.getElementById('js-tab-1')) {
            document.getElementById('html-1').style.display = 'none';
            document.getElementById('scss-1').style.display = 'none';
            // document.getElementById('js-1').style.display = 'block';
            document.getElementById('html-tab-1').classList.remove('active');
            document.getElementById('scss-tab-1').classList.remove('active');
            // document.getElementById('js-tab-1').classList.add('active');
        }



        if(currentTab === document.getElementById('html-tab-2')) {
            document.getElementById('html-2').style.display = 'block';
            document.getElementById('scss-2').style.display = 'none';
            // document.getElementById('js-2').style.display = 'none';
            document.getElementById('html-tab-2').classList.add('active');
            document.getElementById('scss-tab-2').classList.remove('active');
            // document.getElementById('js-tab-2').classList.remove('active');
        }
        
        if(currentTab === document.getElementById('scss-tab-2')) {
            document.getElementById('html-2').style.display = 'none';
            document.getElementById('scss-2').style.display = 'block';
            // document.getElementById('js-2').style.display = 'none';
            document.getElementById('html-tab-2').classList.remove('active');
            document.getElementById('scss-tab-2').classList.add('active');
            // document.getElementById('js-tab-2').classList.remove('active');
        }

        if(currentTab === document.getElementById('js-tab-2')) {
            document.getElementById('html-2').style.display = 'none';
            document.getElementById('scss-2').style.display = 'none';
            // document.getElementById('js-2').style.display = 'block';
            document.getElementById('html-tab-2').classList.remove('active');
            document.getElementById('scss-tab-2').classList.remove('active');
            // document.getElementById('js-tab-2').classList.add('active');
        }
    }

    document.getElementById('code-tab-area-1').addEventListener ('click', sourceTabHandler);
    document.getElementById('code-tab-area-2').addEventListener ('click', sourceTabHandler);

})();