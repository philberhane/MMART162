function currentYear() {
    const footer = document.getElementById('footer')
    footer.innerText += ' ' + new Date().getFullYear()
    console.log(new Date().getFullYear())
}