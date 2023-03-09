(()=>{

     // tap menu
     const stickyArea1 = document.getElementById('sticky1');
     const stickyArea2 = document.getElementById('sticky2');
     let checkElem;
 
     function activation(tab) {
         tab.classList.add('active');
         checkElem = tab;
     }
 
     function inactivation(tab) {
         tab.classList.remove('active');
     }
     
 
     function tabHandler(e) {
         const currentTab = e.target;
 
 
         if(currentTab.parentNode === stickyArea1) {

             if(currentTab === document.getElementById('hexTab')) {

                inactivation(document.getElementById('rgbTab'));
                activation(document.getElementById('hexTab'));

                document.getElementById('hex').style.display = 'flex';
                document.getElementById('rgb').style.display = 'none';
             }
    
             if(currentTab === document.getElementById('rgbTab')) {

                inactivation(document.getElementById('hexTab'));
                activation(document.getElementById('rgbTab'));

                document.getElementById('hex').style.display = 'none';
                document.getElementById('rgb').style.display = 'flex';
             }
 
         }

         if(currentTab.parentNode === stickyArea2) {

            if(currentTab === document.getElementById('darkTab')) {

                inactivation(document.getElementById('lightTab'));
                activation(document.getElementById('darkTab'));

                document.getElementById('darkTheme').style.display = 'flex';
                document.getElementById('lightTheme').style.display = 'none';
             }
    
             if(currentTab === document.getElementById('lightTab')) {

                inactivation(document.getElementById('darkTab'));
                activation(document.getElementById('lightTab'));

                document.getElementById('darkTheme').style.display = 'none';
                document.getElementById('lightTheme').style.display = 'flex';
             }

        }
         
     }
 
     activation(document.querySelector('#sticky1 button:nth-child(1)'));
     stickyArea1.addEventListener('click', tabHandler);

     activation(document.querySelector('#sticky2 button:nth-child(1)'));
     stickyArea2.addEventListener('click', tabHandler);

 



})();