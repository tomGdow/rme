(function () {
    'use strict';
    var pageCounter = 0;
    // sectionForward();
    const pageOrder = [
        "x_1_rme_mime.html",
        "1_rme_script_tag.html",
        "2_rme_noscript_tag.html",
        "3_rme_link.html",
        "4_meta_tag.html",
        "5_doctype.html",
        "5b_html_tag.html",
        "6_head_tag.html",
        "7_body_tag.html",
        "8_void_self_closing_tag.html",
        "9_entities.html",
        "10_comments.html",
        "10b_title_tag.html",
        "x_2_rme_validation.html",
        "x_3_href_and_src.html",
        "11_tables.html",
        "13_heading_tag.html",
        "14_p_tag.html",
        "15_br_tag.html",
        "16_hr_tag.html",
        "17_div_tag.html",
        "18_span_tag.html",
        "19_ul_and_li_tags.html",
        "20_ol_and_li_tags.html",
        "21_header_tags.html",
        "x_4_rme_definition_list.html",
        "22_nav_tag.html",
        "23_section_tag.html",
        "24_article_tag.html",
        "24b_aside_tag.html",
        "25_footer_tag.html",
        "26_details_summary.html",
        "27_figure_tag.html",
        "28_caption_tag.html",
        "29_img_tag.html",
        "30_a_tag.html",
        "31_targets.html",
        "32_bookmarks.html",
        "33_relative_vs_absolute.html",
        "34_folder_hierarchy_navigation.html",
        "35_form_action_and_method_attr.html",
        "36_form_submission_methods.html",
        "37_accessibility.html",
        "38_form_input_types_and_restrictions.html",
        "39_select_tag.html",
        "40_textarea_tag.html",
        "41_button_tag.html",
        "42_output_tag.html",
        "43_option_tag.html",
        "44_datalist_tag.html",
        "45_fieldset_tag.html",
        "46_video.html",
        "x_6_rme_vtt.html",
        "x_5_rme_file_formats.html",
        "x_7_rme_picture.html",
        "47_image_layouts.html",
        "48_image_links.html",
        "49_svg_tag.html",
        "50_canvas_tag.html",
        "51_video_and_source_tags.html",
        "52_audio.html",
        "53_track_tag.html",
        "54_iframe.html",
        "55_inline_internal_external_stylesheets.html",
        "56_style_sheet_precedence.html",
        "57_css_valid_syntax.html",
        "58_css_apply_classes.html",
        "59_css_apply_id.html",
        "60_css_pseudo_classes.html",
        "61_css_reusing_rules.html",
        "62_css_comments.html",
        "63_multiple_browser_tests.html",
        "64_web_safe_fonts.html",
        "65_height_width.html",
        "66_max-width_uses.html",
        "67_float_positioning.html",
        "68_relative_position.html",
        "69_absolute_position.html",
        "70_overflow_settings.html",
        "71_alignment.html",
        "72_inline_vs_block.html",
        "73_visibility.html",
        "74_box_model_margins.html",
        "75_box_model_padding.html",
        "76_font_family.html",
        "77_color.html",
        "78_font_style.html",
        "79_font_weight.html",
        "80_link_colors.html",
        "81_text_alignment.html",
        "82_text_decoration.html",
        "83_indentation.html",
        "84_border_color.html",
        "85_border_style.html",
        "86_border_width.html",
        "87_backgrounds.html",
        "88_divs.html",
        "89_working_with_colors.html",
        "90_units_of_measure.html",
        "91_viewport.html",
        "92_percentages_and_pixes.html",
        "93_frameworks_and_templates.html",
        "94_max_width_property.html",
        "x_8_rme_css_variables.html"
    ];

    5
    //Functions
    function insertContents(cb) {
        return function insert() {
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(this.responseText, 'text/html');
            document.getElementsByTagName('header')[0].firstElementChild.innerHTML = htmlDoc.body.firstElementChild.children[0].innerHTML;
            document.getElementsByClassName('counter')[0].innerHTML = pageCounter + 1;
            document.getElementsByTagName('main')[0].innerHTML = htmlDoc.body.firstElementChild.children[2].innerHTML;
            document.getElementsByClassName('syntax')[0].innerHTML = htmlDoc.body.firstElementChild.children[3].innerHTML;
            document.getElementsByClassName('examples')[0].innerHTML = htmlDoc.body.firstElementChild.children[4].innerHTML;
            document.getElementsByClassName('notes')[0].innerHTML = htmlDoc.body.firstElementChild.children[5].innerHTML;
            document.getElementsByClassName('file_name')[0].innerHTML = pageOrder[pageCounter];
            drawOnCanvas();
            cb();
            closeAllTwo();
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
        if (pageCounter < pageOrder.length - 1) { ++pageCounter; }
        makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
        // document.getElementsByClassName('counter')[0].innerHTML=pageCounter+1;
        document.getElementsByClassName('file_name')[0].innerHTML = pageOrder[pageCounter];

    }

    function sectionBack() {
        if (pageCounter > 0) {
            --pageCounter;
            makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
            document.getElementsByClassName('file_name')[0].innerHTML = pageOrder[pageCounter];
        }
    }

    function openAll() {
        let temp = document.getElementsByTagName('details');

        for (let i = 0; i < temp.length; i++) {
            temp[i].open = "open";
        }

        document.getElementById('open_all').style.display = 'none';
        document.getElementById('close_all_two').style.display = 'inline';
        document.getElementById('close_all').style.display = 'none';
        document.getElementById('open_all_two').style.display = 'inline';

    }

    function openAllTwo() {
        let temp = document.getElementsByTagName('details');

        for (let i = 0; i < temp.length; i++) {
            temp[i].open = "open";
        }

        document.getElementById('close_all_two').style.display = 'none';
        document.getElementById('open_all').style.display = 'inline';
        document.getElementById('close_all').style.display = 'inline';
        document.getElementById('open_all_two').style.display = 'none';
    }

    function closeAll() {
        let temp = document.getElementsByTagName('details');

        for (let i = 0; i < temp.length; i++) {
            temp[i].removeAttribute('open');
        }
        document.getElementById('open_all').style.display = 'none';
        document.getElementById('close_all_two').style.display = 'inline';
        document.getElementById('close_all').style.display = 'none';
        document.getElementById('open_all_two').style.display = 'inline';

    }

    function closeAllTwo() {
        let temp = document.getElementsByTagName('details');

        for (let i = 0; i < temp.length; i++) {
            temp[i].removeAttribute('open');
        }

        document.getElementById('open_all').style.display = 'inline';
        document.getElementById('close_all_two').style.display = 'none';
        document.getElementById('close_all').style.display = 'inline';
        document.getElementById('open_all_two').style.display = 'none';

    }

    (function populateDatalist() {
        for (let i = 0; i < pageOrder.length; i++) {
            var el = document.createElement('option');
            el.textContent = pageOrder[i];
            document.getElementById('dlist_data').appendChild(el);
        }

    })();
    // populateDatalist();

    function selectFromDatalist() {
        if (document.getElementById('dlist_search').value.length > 4) {
            makeRequest(`./html/${document.getElementById('dlist_search').value}`, insertContents(callback));
            pageCounter = parseInt(pageOrder.indexOf(document.getElementById('dlist_search').value), 10);
            console.log(document.getElementById('dlist_search').value.length);
        }
    }

    function resetInputBox() {
        document.getElementById('dlist_search').value = "";
    }

    // Event Listeners
    document.getElementById('btn-forward').addEventListener('click', sectionForward);
    document.getElementById('btn-back').addEventListener('click', sectionBack);
    document.getElementById('open_all').addEventListener('click', openAll);
    document.getElementById('close_all_two').addEventListener('click', closeAllTwo);
    document.getElementById('close_all').addEventListener('click', closeAll);
    document.getElementById('open_all_two').addEventListener('click', openAllTwo);
    document.getElementById('dlist_search').addEventListener('input', selectFromDatalist);
    document.getElementById('dlist_search').addEventListener('blur', resetInputBox);
    window.addEventListener('DOMContentLoaded', function () {
        makeRequest(`./html/${pageOrder[0]}`, insertContents(callback));
    });

    function drawOnCanvas() {

            let el = document.getElementsByTagName('canvas')[0] || null;
        if (el && el.getContext) {
            let ctx = el.getContext('2d');
            ctx.fillStyle = "red";
            ctx.fillRect(25, 50, 50, 50);
            ctx.clearRect(37.5, 62.5, 25, 25);
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--stroke-style')
            ctx.beginPath();
            ctx.arc(150, 75, 25, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            // ctx.fillStyle="green";
            ctx.arc(150, 75, 12.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(250, 50);
            ctx.lineTo(275, 100);
            ctx.lineTo(225, 100);
            ctx.fill();
            ctx.closePath();

        }
    }

})();