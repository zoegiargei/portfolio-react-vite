// const bgAnimation = document.getElementById('mainLayout')
const bgAnimation = this.mainLayout.ref
const height = bgAnimation.clientHeight
const width = bgAnimation.clientWidth

bgAnimation.addEventListener('mousemove', (e) => {
    const {layerX, layerY} = e

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20

    const xRotation = (
        (layerY - height / 2) / height
    ) * 20

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation})deg
        rotateY(${yRotation})deg
    `
    bgAnimation.style.transform = string
})

bgAnimation.addEventListener('mouseout', () => {
    const string = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
    `
    bgAnimation.style.transform = string
})