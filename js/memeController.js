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
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderMeme()
}

function renderMeme() {
    gCtx.fillStyle = 'white';
    gCtx.strokeStyle = 'black';
    gCtx.font = gUserFontSize + 'px ' + gUserFontFamily
    gCtx.textAlign = gUserTextAlign
    drawImgFromlocal()
    setTimeout(function () {
        if (!gUserText) return
        drawText(gUserText)
    }, 100)

}

function drawImgFromlocal() {
    var img = new Image()
    img.src = 'meme-imgs/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}
function drawText(text, x = gCanvas.width / 2, y = 50) {
    gCtx.lineWidth = 2;

    gCtx.fillText(text, x, y);//Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y);//Draws (strokes) a given text at the given (x, y) position.
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