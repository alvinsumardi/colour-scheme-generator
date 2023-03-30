function renderColor() {
    const colorInput = document.getElementById('color-picker').value
    const colorMode = document.getElementById('scheme-select').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.substr(1)}&mode=${colorMode}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const colorData = data.colors
            let colorHtml = ''
            console.log(colorData)
            for (let colorValue of colorData) {
                colorHtml += `
                <div class="color-column">
                    <div class="color-strip" style="background-color: ${colorValue.hex.value};">&nbsp;</div>
                    <div class="hex-value">${colorValue.hex.value}</div>
                </div>
                `
            }
            document.getElementById('color-container').innerHTML = colorHtml
        })

}


renderColor()

document.getElementById('get-color-button').addEventListener('click', renderColor)