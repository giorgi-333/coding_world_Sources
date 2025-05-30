
let copyTextBtn = document.querySelector(".btn.copy-text")
let textElement = document.querySelector("#text")
let inputText = document.querySelector("#inputText")

copyTextBtn.addEventListener("click", async () => {
    // await navigator.clipboard.writeText(textElement.textContent)
    await navigator.clipboard.writeText(inputText.value)
    copyTextBtn.textContent = "დაკოპირებულია"
    setTimeout(() => {
        copyTextBtn.textContent = "დაკოპირება"
    }, 2000);
})