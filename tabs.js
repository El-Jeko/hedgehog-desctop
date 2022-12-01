let tabsBtn = document.querySelectorAll('.btn-form-top');
let tabBtn = document.querySelector('.btn-form-top');

tabsBtn.forEach(function (item) { 
    item.addEventListener('click', function () { 
        tabsBtn.forEach(function (item) { 
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});

tabBtn.click();