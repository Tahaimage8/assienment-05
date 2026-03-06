const singInBtn = document.getElementById('singIn-btn');

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");




document.getElementById('singIn-btn').addEventListener('click',function(){
    const username = usernameInput.value;
    const password = passwordInput.value; 
    if (username == 'admin' && password == 'admin123') {
     alert("login successful");
     window.location.assign("main.html");
    }
    else{
       return alert("login unsuccessful")
    }

})


