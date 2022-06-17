'use strict'
const gMemesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: getRandomSent(),
        size: 25,
        align: 'center',
        color: 'white',
        font: 'Impact',
        lineWidth: 1,
        x: 300,
        y: 60
    }]
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function renderMeme() {
    updateTextInput()
    const meme = getMeme()
    // Draw IMG
    var img = new Image()
    img.src = meme.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend

        // if (!gUserText) return
        gMeme.lines.forEach(line => setLineTxt(line.txt, line.x, line.y))
        // setLineTxt(gUserText)

    }
}

function setLineTxt(text, x = gCanvas.width / 2, y = 50) {
    const idx = gMeme.lines.findIndex(line => line.txt === text)
    const line = gMeme.lines[idx]


    gCtx.fillStyle = line.color
    // gCtx.strokeStyle = gUserStrokeStyle
    gCtx.font = line.size + 'px ' + line.font
    gCtx.textAlign = line.align
    gCtx.lineWidth = line.lineWidth;
    gCtx.fillText(text, x, y);//Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y);//Draws (strokes) a given text at the given (x, y) position.
}

function addNewLine(text = 'Text') {
    const line = {
        txt: text,
        size: 50,
        align: 'center',
        color: 'white',
        font: 'Impact',
        lineWidth: 1,
        x: gCanvas.width / 2,
        y: 50
    }
    gMeme.selectedLineIdx++
    if (gMeme.lines.length === 0) line.y = 60
    else if (gMeme.lines.length === 1) line.y = gCanvas.height - 20
    else if (gMeme.lines.length >= 2) line.y = gCanvas.height / 2
    gMeme.lines.push(line)
    updateTextInput()
}



function deleteLine() {
    const lines = gMeme.lines
    if (!lines.length) return
    lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx--
    updateTextInput()
}

function switchLine() {
    const lines = gMeme.lines
    if (!lines) return
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    }
    updateTextInput()
    document.querySelector('[name=text-box]').focus()
}

function setFont(font) {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) addNewLine()
    line.font = font
}

function updateTextInput() {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return document.querySelector('[name=text-box]').value = ''
    document.querySelector('[name=text-box]').value = line.txt
    if (line.txt === 'Text') document.querySelector('[name=text-box]').select()

}

function increaseFont() {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return
    gMeme.lines[idx].size += 5

}

function decreaseFont() {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return
    if (gMeme.lines[idx].size === 15) return
    gMeme.lines[idx].size -= 5
}

function setTextAlign(align) {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return
    gMeme.lines[idx].align = align

}

function setColor(color) {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return
    line.color = color
}

function setLineWidth() {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return
    if (line.lineWidth === 1) {
        line.lineWidth = 3
    } else {
        line.lineWidth = 1
    }
}

function moveLineDown() {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return
    line.y += 5
}

function moveLineUp() {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]
    if (!line) return
    line.y -= 5
}

function openModal() {

}

function getMeme() {
    const idx = gImgs.findIndex(img => img.id === gMeme.selectedImgId)
    const meme = gImgs[idx]
    return meme
}

function getRandomSent() {
    const randomNum = getRandomInt(gMemesSentences.length)
    const memeSentence = gMemesSentences[randomNum]
    return memeSentence
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function renderFirstLinePos() {
    gMeme.lines[0].x = gCanvas.width / 2
}
function resizeCanvas() {
    const elEditor = document.querySelector('.canvas-container')
    gCanvas.width = elEditor.offsetWidth
    gCanvas.height = elEditor.offsetWidth
}