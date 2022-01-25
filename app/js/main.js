window.addEventListener('DOMContentLoaded', () => {


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