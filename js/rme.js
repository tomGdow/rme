(function () {
    'use strict';
    var pageCounter = 0;
    const pageOrder = ["mime_rme.html", "rme_1_script_tag.html", "rme_2_noscript_tag.html",
        "rme_3_link.html"];
    //Functions
    function insertContents(cb) {
        return function insert() {
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(this.responseText, 'text/html');
            document.getElementsByTagName('header')[0].innerHTML = htmlDoc.body.firstElementChild.children[0].innerHTML;
            document.getElementsByClassName('counter')[0].innerHTML = pageCounter + 1;
            document.getElementsByTagName('main')[0].innerHTML = htmlDoc.body.firstElementChild.children[2].innerHTML;
            document.getElementsByClassName('syntax')[0].innerHTML = htmlDoc.body.firstElementChild.children[3].innerHTML;
            document.getElementsByClassName('examples')[0].innerHTML = htmlDoc.body.firstElementChild.children[4].innerHTML;
            document.getElementsByClassName('notes')[0].innerHTML = htmlDoc.body.firstElementChild.children[5].innerHTML;
            cb();
            console.log(htmlDoc.body.firstElementChild.children[1].innerHTML);
        };
    }

    function makeRequest(url, insertHTML) {
        let oReq = new XMLHttpRequest();
        oReq.addEventListener("load", insertHTML);
        oReq.open('GET', url);
        oReq.send();
    }


    function callback() {
        console.log('hello');
    }

    function sectionForward() {
        if (pageCounter < pageOrder.length-1) { ++pageCounter; }
        makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
        // document.getElementsByClassName('counter')[0].innerHTML=pageCounter+1;

    }

    function sectionBack() {
        if (pageCounter > 0) {
            --pageCounter;
            makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
        }
    }

    // Event Listeners
    document.getElementById('btn-forward').addEventListener('click', sectionForward);
    document.getElementById('btn-back').addEventListener('click', sectionBack);

    // Event Listeners
    window.addEventListener('DOMContentLoaded', function () {
        makeRequest("./html/mime_rme.html", insertContents(callback));
    });
})();