(()=>{

    const toggleList = document.querySelectorAll('.toggle_wrapper');

    toggleList.forEach((toggle) => {
        toggle.onclick = () => {
        toggle.classList.toggle('active');
        }
    });


    // disabled
    const toggleBtns = document.querySelectorAll('.toggle_appearance');

    toggleBtns.forEach((toggleBtn)=>{

        const toggleWrapper = toggleBtn.closest('.toggle_wrapper');
        console.log('dd');
        
        toggleBtn.addEventListener('change', ()=>{
            if(toggleBtn.disabled) {
                toggleWrapper.classList.add('disabled');
            } else if(toggleBtn.enabled) {
                toggleWrapper.classList.remove('disabled');
            }
        });
    });

})();