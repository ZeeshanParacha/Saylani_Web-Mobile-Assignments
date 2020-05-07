// FIXED NAVBAR ON SCROLL 

const nav = document.getElementById('nav')

window.onscroll = function ()
{
    if (window.pageYOffset > 100)
    {
        nav.style.position = 'fixed';
        nav.style.top = 0;
        console.log('hello');
    }

    else
    {
        nav.style.position = 'static';
        nav.style.top = 200;
    }
}