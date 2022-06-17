'use stirct'
var gCanvas;
var gCtx;

function init() {
    renderGallery()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    resizeCanvas()

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })

}

function onInputText(text) {
    if (!gMeme.lines.length) addNewLine()
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = text

    renderMeme()
}

function onAddText() {
    addNewLine()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onSetTextAlign(align) {
    setTextAlign(align)
    renderMeme()
}

function onSetFont(font) {
    setFont(font)
    renderMeme()
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
}

function onSetLineWidth() {
    setLineWidth()
    renderMeme()
}

function onMoveLineDown() {
    moveLineDown()
    renderMeme()
}

function onMoveLineUp() {
    moveLineUp()
    renderMeme()
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.jpg'
}

function showEditor() {
    document.querySelector('.meme-editor').style.display = 'grid'
}

function onAddSticker(sticker){
    addNewLine(sticker)
    renderMeme()
}