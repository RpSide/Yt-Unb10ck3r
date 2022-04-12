let title = localStorage.getItem("title")
let icon = localStorage.getItem("icon")

if (title != undefined || title != null){

    document.getElementById("title").innerHTML = title

}
if (icon != undefined || icon != null){

    document.getElementById("icon").href = icon

}

let videoLink = localStorage.getItem("link")

let videoId = videoLink.replaceAll("/shorts/", "/watch?v=").replaceAll("m.", "www.").replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "")

let fixedLink = `https://www.youtube-nocookie.com/embed/${videoId}`

document.getElementById("player").setAttribute("src", fixedLink)

document.addEventListener("keypress", function onEvent(event) {
    if (event.ctrlKey & event.key === "Enter") {
        let newname = prompt("Tab Cloaker | What Do You Want The Tab To Be Named", "")
        localStorage.setItem("title", newname)
        document.getElementById("title").innerHTML = newname
    }
    else if (event.key === "Enter") {
        let newicon = prompt("Tab Cloaker | What Do You Want The Tab To Look Like", "")
        localStorage.setItem("icon", newicon)
        document.getElementById("icon").href = newicon
        
    }
    else if (event.ctrlKey && event.key === "Backspace") {
        window.location.href=localStorage.getItem("NT") || "https://www.google.com"
    }
});
