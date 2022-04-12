document.getElementById("vidform").onsubmit=(e)=>{

    e.preventDefault();

    if(document.getElementById("vid").value != ""){
    localStorage.setItem("link", document.getElementById("vid").value)
    
    window.open("index.html")
    
    }else{
        window.open("index.html")
    }
    }