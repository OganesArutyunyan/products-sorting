"use strict"

document.querySelector('#sort-asc').onclick = function () {
    mySort('data-price')
};
document.querySelector('#sort-desc').onclick = function () {
    mySortDesc('data-price')
};
document.querySelector('#sort-rating').onclick = function () {
    mySortDesc('data-rating')
};

//Функция для сортировки списка по возрастанию
function mySort(sortType) {
    let nav = document.querySelector('.goods-wrap');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

//Функция для сортировки списка по убыванию
function mySortDesc(sortType) {
    let nav = document.querySelector('.goods-wrap');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}