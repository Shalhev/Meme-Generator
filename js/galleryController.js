'use strict'

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['trump', 'usa'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['funny', 'dog', 'dogs'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['funny', 'dog', 'baby'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['funny', 'man'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['funny', 'man'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['funny', 'obama'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['funny'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['funny'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['funny'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['funny'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['funny'] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: ['funny'] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: ['funny', 'putin'] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: ['funny'] },
];
var gCurrMemeImg = gImgs[0]
var gFilterBy;

function renderGallery() {
    var imgs = gImgs
    if (gFilterBy) imgs = imgs.filter(img => img.keywords.includes(gFilterBy))


    var strHTML = ''
    imgs.forEach(el => strHTML += `<img onclick="onSelectMeme(${el.id})" src="${el.url}">`)
    document.querySelector('.gallery-imgs').innerHTML = strHTML
}

function onSelectMeme(id) {
    gMeme.selectedImgId = id
    renderMeme()
    hideGallery()
    showEditor()
    resizeCanvas()
    renderFirstLinePos()
}

function onSearch(text) {
    gFilterBy = text.toLowerCase()
    renderGallery()
}

function hideGallery() {
    document.querySelector('.gallery').style.display = 'none'
}