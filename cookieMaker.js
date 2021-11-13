getCookie();

function setCookie()
{
    const cookie = document.getElementsByName("cookieValue")[0].value;
    // console.log("set cookie called: " + cookie);   
    
    document.cookie = cookie;
    window.location.reload();
}

function getCookie()
{
    // console.log("get cookie called");   
    // console.log("cookie = " + document.cookie);   
}