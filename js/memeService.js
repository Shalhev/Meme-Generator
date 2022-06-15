'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

function renderMeme() {
    gCtx.fillStyle = gUserFillStyle
    gCtx.strokeStyle = gUserStrokeStyle
    gCtx.font = gUserFontSize + 'px ' + gUserFontFamily
    gCtx.textAlign = gUserTextAlign

    // Draw IMG
    var img = new Image()
    img.src = gCurrMemeImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend

        if (!gUserText) return
        setLineTxt(gUserText)
    }
}


function setLineTxt(text, x = gCanvas.width / 2, y = 50) {
    gCtx.lineWidth = 2;
    gCtx.fillText(text, x, y);//Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y);//Draws (strokes) a given text at the given (x, y) position.
}


function getMeme() {
    const idx = gImgs.findIndex(img => img.id === gMeme.selectedImgId)
    const meme = gImgs[idx]
}