(()=>{

    const accodionContainer = document.querySelector('.list_con');
    let currentItem;

    function activate(clickedItem) {
        clickedItem.classList.add('active');
        currentItem = clickedItem;
    }

    activate(document.querySelector('.list_con li:first-child'));

    function inactivate(clickedItem){
        clickedItem.classList.remove('active');
    }

    function accodionHandler(e){
        const ct = e.target;
        listCon = ct.closest('li');

        if(ct.closest('ul') === accodionContainer) {
            inactivate(currentItem);

            if(ct.parentNode.getAttribute('data-roll') === "subMenuOpen"){
                ct.parentNode.removeAttribute('data-roll', 'subMenuOpen');
            }

        }

        if(ct.closest('ul') === accodionContainer) {
            activate(ct.parentNode);
            ct.parentNode.setAttribute('data-roll', 'subMenuOpen');
        }

       
    }

    accodionContainer.addEventListener('click', accodionHandler);

})();