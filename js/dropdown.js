(() => {
    const selectBoxes = document.querySelectorAll('.dropdown_select_box');
    const selectList = document.getElementById('dropdown_select_list');
    const selectItems = document.querySelectorAll('#dropdown_select_list li');
    const selectBtn = document.getElementById('dropdown_select_btn');

    // multi select
    const multiList = document.getElementById('dropdown_multi_list');
    const multiItems = document.querySelectorAll('#dropdown_multi_list .check_button_wrapper input[type="checkbox"]');
    const multiLi = document.querySelectorAll('#dropdown_multi_list li');
    const multiBtn = document.getElementById('dropdown_multi_btn');

    // multi select2
    const multiList2 = document.getElementById('dropdown_multi_list2');
    const multiItems2 = document.querySelectorAll('#dropdown_multi_list2 .check_button_wrapper input[type="checkbox"]');
    const multiLi2 = document.querySelectorAll('#dropdown_multi_list2 li');
    const multiBtn2 = document.getElementById('dropdown_multi_btn2');
    const allSelectBtn = document.getElementById('all_select_btn');

    let activeSelectItem = null;
    let activeSelectBox = null;
  
    selectBoxes.forEach((selectBox) => {
      selectBox.addEventListener('click', () => {
        selectBox.classList.add('active');
        selectBox.nextElementSibling.classList.add('show');
        activeSelectBox = selectBox;
      });
    });
  
    selectItems.forEach((selectItem) => {
      selectItem.addEventListener('click', () => {
        selectBtn.textContent = selectItem.textContent;
  
        if (activeSelectItem) {
          activeSelectItem.classList.remove('active');
        }
  
        selectList.classList.remove('show');
        selectItem.classList.add('active');
        selectBtn.classList.add('active');
  
        const selectBox = selectItem.closest('.dropdown_wrapper').querySelector('.dropdown_select_box');
        selectBox.classList.remove('active');
  
        activeSelectItem = selectItem;
        activeSelectBox = selectBox;

        if (selectBtn.textContent === 'Select menu options') {
            selectBtn.classList.remove('active');
        }
      });
    });
  
    multiItems.forEach((multiItem) => {
        multiItem.addEventListener('change', (e) => {
            const checkedItems = multiList.querySelectorAll('input:checked');
            multiBtn.classList.add('active');
      
            for (let i = 0; i < multiLi.length; i++) {
                if (multiLi[i].querySelector('input').checked) {
                    multiLi[i].classList.add('active');
                } else {
                    multiLi[i].classList.remove('active');
                }
            }
      
            let value = '';
      
            for (let i = 0; i < checkedItems.length; i++) {
                value += checkedItems[i].nextElementSibling.textContent + ', '; 
            }
      
            value = value.slice(0, -2);
            multiBtn.textContent = value || 'Select menu options';

            if (multiBtn.textContent === 'Select menu options') {
                multiBtn.classList.remove('active');
              }
        });
    });

    multiItems2.forEach((multiItem2) => {
        multiItem2.addEventListener('change', (e) => {
            const checkedItems2 = multiList2.querySelectorAll('input:checked');
            multiBtn2.classList.add('active');
      
            for (let i = 0; i < multiLi2.length; i++) {
                if (multiLi2[i].querySelector('input').checked) {
                    multiLi2[i].classList.add('active');
                } else {
                    multiLi2[i].classList.remove('active');
                }
            }
      
            let value = '';
      
            for (let i = 0; i < checkedItems2.length; i++) {
                value += checkedItems2[i].nextElementSibling.textContent + ','; 
            }
      
            value = value.slice(0, -2);
            multiBtn2.textContent = value || 'Select menu options';

            if (multiBtn2.textContent === 'Select menu options') {
                multiBtn2.classList.remove('active');
              }
        });
    });

    allSelectBtn.addEventListener('change', (e) => {
        if (e.target.checked) {
          multiItems2.forEach((item) => {
            item.checked = true;
          });
        } else {
          multiItems2.forEach((item) => {
            item.checked = false;
          });
        }
        const checkedItems2 = multiList2.querySelectorAll('input:checked');
        for (let i = 0; i < multiLi2.length; i++) {
          if (checkedItems2.length === multiItems2.length) {
            multiLi2[i].classList.add('active');
          } else {
            multiLi2[i].classList.remove('active');
          }
        }
        let value = '';
        for (let i = 0; i < checkedItems2.length; i++) {
          value += checkedItems2[i].nextElementSibling.textContent + ', '; 
        }
        value = value.slice(0, -2);
        multiBtn2.textContent = value || 'Select menu options';
      });
  
    document.addEventListener('click', (e) => {
      if (!selectList.contains(e.target) && !selectBtn.contains(e.target)) {
        selectList.classList.remove('show');
        activeSelectBox.classList.remove('active');
      }
  
      if (!multiList.contains(e.target) && !multiBtn.contains(e.target)) {
        multiList.classList.remove('show');
      }

      if (!multiList2.contains(e.target) && !multiBtn2.contains(e.target)) {
        multiList2.classList.remove('show');
      }
    });
  })();