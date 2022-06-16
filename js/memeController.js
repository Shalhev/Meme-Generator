'use stirct'
var gCanvas;
var gCtx;


// Settings:
var gUserText;
var gUserFontSize = 40
var gUserFontFamily = 'Impact'
var gUserFillStyle = 'white'
var gUserStrokeStyle = 'black'
var gUserTextAlign = 'center'

function init() {
    renderGallery()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

}


function onInputText(text) {
    if (!gMeme.lines.length) addNewLine()
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = text

    renderMeme()
    // gUserText = text
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
function onSetLineWidth(){
    setLineWidth()
    renderMeme()
}
function onMoveLineDown(){
    moveLineDown()
    renderMeme()
}
function onMoveLineUp(){
    moveLineUp()
    renderMeme()
}

function downloadCanvas(elLink) {
    //protect the image soo attacker could not download imgs from diff domain
    const data = gCanvas.toDataURL()// for security reason you can`t do toDataUrl on tainted canvas
    //This protects users from having private data exposed by using images
    // to pull information from remote web sites without permission.
    elLink.href = data
    elLink.download = 'my-img.jpg'
}

function showEditor() {
    document.querySelector('.meme-editor').style.display = 'grid'
}