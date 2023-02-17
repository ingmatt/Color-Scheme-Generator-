const color = document.getElementById("color")
const scheme = document.getElementById("scheme")
const getScheme = document.getElementById("get-scheme")
let colorContainer = document.getElementById("color-container")
let hexContainer = document.getElementById("hex-container")



getScheme.addEventListener("click", function(e){
    e.preventDefault()
    console.log(color.value.slice(1), scheme.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${scheme.value}`)
        .then(res => res.json())
        .then(data => {
            let html = ``
            data.colors.map(e => html += `
                <div class="bar" style="background-color:${e.hex.value};"></div>`)
            colorContainer.innerHTML = html
            let hexHtml = ``
            data.colors.map(e => hexHtml += `
                <button id="hex-value" value="${e.hex.value}"> ${e.hex.value} </button>`)
            console.log(document.getElementById("hex-value"))
            hexContainer.innerHTML = hexHtml
     
       });  
            })


