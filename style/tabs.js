const tabsBtn = document.querySelectorAll(".tabButton"); //перемещаем все кнопки в переменную tabsBtn
const tabsItems = document.querySelectorAll(".window");  

tabsBtn.forEach(function(item){                   //проходимся по каждой кнопке циклом for 
    item.addEventListener("click",function(){     //отслеживаем событие клика
        let currentBtn = item;                    //текущую отслеживаемую кнопку называем currentBtn
        let tabId = currentBtn.getAttribute('data-tab');  //вытащить из кнопки её id, чтоб понять, какой текст выводить
        let currentTab = document.querySelector(tabId);   //вытащить нужный для показа текст

        tabsBtn.forEach(function(item){           //проходимя ещё раз по всем кнопкам
            item.classList.remove('active');      // cо всех кнопок убираем класс active (обновляем как бы)
        })
        tabsItems.forEach(function(item){           //проходимя ещё раз по всем кнопкам
            item.classList.remove('active');      // cо всех кнопок убираем класс active (обновляем как бы)
        })
        currentBtn.classList.add('active');       //добавляем текущей кнопке класс active
        currentTab.classList.add('active');       //добавляем текущему табу класс active
    });
});