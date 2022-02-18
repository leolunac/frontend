window.onload = () => {

    const ulElement = document.getElementsByClassName('header__ul')[0];
    const menuActive = document.getElementById('menu-icon');
    
    ulElement.addEventListener('click', (e) => {
        if (e.target.classList[0] === 'header__a') menuActive.checked = false;
    });

    const sections = document.querySelectorAll('[id^="sect-"]');
    console.log(sections);

    const sectionObserver = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach(entry => {
            const menuItem = document.querySelector(`a[href$="${entry.target.id}"]`);
            console.log(menuItem);
            if (entry.isIntersecting) {
                document.querySelector('.header__a--selected').classList.remove('header__a--selected');
                menuItem.classList.add('header__a--selected');
            }
        });
    },
    {
        rootMargin: '-20% 0% -80% 0%'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}