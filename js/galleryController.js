'use strict'
var gCurrMemeImg;
var gFilterBy;

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['trump', 'usa'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['funny', 'dog', 'dogs'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['funny', 'dog', 'baby'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['funny', 'cat', 'lolo'] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: ['funny', 'cat', 'lolo'] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: ['funny', 'cat'] },
];

function renderGallery() {
    var imgs = gImgs
    if (gFilterBy) imgs = imgs.filter(img => img.keywords.includes(gFilterBy))


    var strHTML = ''
    imgs.forEach(el => strHTML += `<img onclick="onChangeMemeImg(${el.id})" src="${el.url}">`)
    document.querySelector('.gallery-imgs').innerHTML = strHTML
}

function onChangeMemeImg(id) {
    const idx = gImgs.findIndex(img => img.id === id)
    gCurrMemeImg = gImgs[idx]
    renderMeme()
    hideGallery()
    showEditor()
}

function onSearch(text) {
    gFilterBy = text.toLowerCase()
    renderGallery()
}

function hideGallery() {
    document.querySelector('.gallery').style.display = 'none'
}