window.addEventListener('DOMContentLoaded', () => {

    //Menu

    const menuContent = document.querySelector('.hamburger-menu'),
          menuTrigger = document.querySelector('.hamburger'),
          menuClose = document.querySelector('.hamburger-menu__close'),
          headerChange = document.querySelector('.header-top');

    menuTrigger.addEventListener('click', () => {
        menuContent.style.display = 'block';
        menuTrigger.classList.add('active');
        headerChange.style.backgroundColor = '#FFA500';
    })

    menuClose.addEventListener('click', () => {
        menuContent.style.display = 'none';
        menuTrigger.classList.remove('active');
        if (window.pageYOffset < 150) {
           headerChange.style.backgroundColor = 'transparent'; 
        } else {
            headerChange.style.backgroundColor = '#FFA500';
        }
        
    })

    document.addEventListener('click', e => {
        if (!e.target.closest('.header-top') && !e.target.closest('.hamburger-menu')) {
            menuContent.style.display = 'none';
            menuTrigger.classList.remove('active');
            if (window.pageYOffset < 150) {
                headerChange.style.backgroundColor = 'transparent'; 
            } else {
                 headerChange.style.backgroundColor = '#FFA500';
            }
        }
    })

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 150 || menuTrigger.classList.contains('active')) {
            headerChange.style.backgroundColor = '#FFA500';
        } else {
            headerChange.style.backgroundColor = 'transparent';
        }
    })

    const menuItems = document.querySelectorAll('.hamburger-menu__link');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuContent.style.display = 'none';
            menuTrigger.classList.remove('active');
            if (window.pageYOffset < 150) {
                headerChange.style.backgroundColor = 'transparent'; 
            } else {
                 headerChange.style.backgroundColor = '#FFA500';
            }
        })
    })


    //Tabs
    const tabs = document.querySelectorAll('.reviews-photos__item'),
        tabsContent = document.querySelectorAll('.reviews-item'),
        tabsParent = document.querySelector('.reviews-photos');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('reviews-photos__item-active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('reviews-photos__item-active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target)
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
    });

});