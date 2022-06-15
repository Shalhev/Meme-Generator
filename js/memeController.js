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
    gUserText = text
    renderMeme()
}

function onIncreaseFont() {
    gUserFontSize += 5
    renderMeme()
}
function onDecreaseFont() {
    if (gUserFontSize === 20) return
    gUserFontSize -= 5
    renderMeme()
}

function onSetTextAlign(align) {
    gUserTextAlign = align
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