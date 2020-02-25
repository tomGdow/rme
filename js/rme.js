(function () {
    'use strict';
    var pageCounter = 0;
    // sectionForward();
    const pageOrder = ["mime_rme.html", 
                       "1_rme_script_tag.html",
                       "2_rme_noscript_tag.html", 
                       "3_rme_link.html",
                       "4_meta_tag.html", 
                       "5_doctype_and_html_tag.html",
                       "6_head_tag.html",
                       "7_body_tag.html",
                       "8_closing_tag.html",
                       "9_entities.html",
                       "10_comments.html"];
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
            document.getElementsByClassName('file_name')[0].innerHTML=pageOrder[pageCounter];
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
        document.getElementsByClassName('file_name')[0].innerHTML=pageOrder[pageCounter];

    }

    function sectionBack() {
        if (pageCounter > 0) {
            --pageCounter;
            makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
            document.getElementsByClassName('file_name')[0].innerHTML=pageOrder[pageCounter];
        }
    }

    function openAll () {
        let temp=document.getElementsByTagName('details');
        for(let i=0; i< temp.length; i++) {
            temp[i].open="open";
        }

    }
    function closeAll () {
        let temp=document.getElementsByTagName('details');
        for(let i=0; i< temp.length; i++) {
            temp[i].removeAttribute('open');
        }

    }
    

    // Event Listeners
    document.getElementById('btn-forward').addEventListener('click', sectionForward);
    document.getElementById('btn-back').addEventListener('click', sectionBack);
    document.getElementById('open_all').addEventListener('click', openAll);
    document.getElementById('close_all').addEventListener('click', closeAll);

    // Event Listeners
    window.addEventListener('DOMContentLoaded', function () {
        makeRequest("./html/mime_rme.html", insertContents(callback));
    });
})();