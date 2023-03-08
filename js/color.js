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
 
         console.log(currentTab.parentNode);
         console.log(checkElem);
 
         if(currentTab.parentNode === stickyArea1) {
             inactivation(checkElem);
             activation(currentTab);
 
             console.log (checkElem);
         }
         
         if(currentTab === document.getElementById('hexTab')) {
            document.getElementById('hex').style.display = 'flex';
            document.getElementById('rgb').style.display = 'none';
         }

         if(currentTab === document.getElementById('rgbTab')) {
            document.getElementById('hex').style.display = 'none';
            document.getElementById('rgb').style.display = 'flex';
         }


         if(currentTab.parentNode === stickyArea2) {
            inactivation(checkElem);
            activation(currentTab);

            console.log (checkElem);
        }

        if(currentTab === document.getElementById('darkTab')) {
            document.getElementById('darkTheme').style.display = 'flex';
            document.getElementById('lightTheme').style.display = 'none';
         }

         if(currentTab === document.getElementById('lightTab')) {
            document.getElementById('darkTheme').style.display = 'none';
            document.getElementById('lightTheme').style.display = 'flex';
         }
     }
 
     activation(document.querySelector('#sticky1 button:nth-child(1)'));
     stickyArea1.addEventListener('click', tabHandler);

     activation(document.querySelector('#sticky2 button:nth-child(1)'));
     stickyArea2.addEventListener('click', tabHandler);

 



})();