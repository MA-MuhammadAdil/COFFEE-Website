 
        var menu = document.querySelector('#menu-icon');
        var navlist = document.querySelector('.navlist');

        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        };   