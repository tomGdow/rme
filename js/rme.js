let pageData = (function () {
  return [
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
    "9_html_entities_entity.html",
    "x_35_unicode.html",
    "x_38_utf-8.html",
    "x_37_0Aa_mnemonic.html",
    "x_39_punycode.html",
    "10_comments.html",
    "10b_title_tag.html",
    "x_2_rme_validation.html",
    "x_3_rme_href_and_src.html",
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
    "30_a_anchor_tag.html",
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
    "67_positioning_float.html",
    "68_positioning_relative.html",
    "69_positioning_absolute.html",
    "x_20_rme_positioning_fixed.html",
    "x_21_rme_positioning_sticky.html",
    "70_overflow_settings.html",
    "71_alignment.html",
    "72_inline_vs_block_vs_inline-block.html",
    "73_visibility.html",
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
    "x_8_rme_css_variables.html",
    "x_9_rme_css_selectors.html",
    "x_26_css_cascade_specificity.html",
    "x_46_selectors_kevin_powell.html",
    "x_40_example_checkbox_label_adj_sibling_selector.html",
    "x_41_inheritance_css.html",
    "x_10_rme_semantic_markup.html",
    "x_11_rme_css_measure_units.html",
    "x_12_rme_form_one.html",
    "x_13_rme_form_two.html",
    "x_14_rme_form_three.html",
    "x_15_rme_form_four.html",
    "x_16_rme_form_five.html",
    "x_17_rme_form_six.html",
    "x_18_rme_shorthands_trbl.html",
    "x_22_rme_position_txt_vertically.html",
    "x_23_rme_dom_document_object_model.html",
    "x_24_rme_disabled_attribute.html",
    "x_25_content_type_categories_html.html",
    "x_27_regex_regular_expressions.html",
    "x_28_mnemonics.html",
    "x_29_box_model.html",
    "x_30_responsive_site_media.html",
    "x_31_text_decoration.html",
    "x_32_shorthand_properties_trbl.html",
    "x_33_margin_collapse.html",
    "x_34_border_shorthand.html",
    "x_36_html5_w3c_css.html",
    "x_42_triangles_css.html",
    "x_44_font-face_at-rule.html",
    "x_45_css_counter.html",
    "x_47_flexbox.html",
    "x_48_translate_attribute.html"
  ];

})();

(function (arg) {
  'use strict';
  var pageCounter = 0;
  const pageOrder = arg;

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
      document.getElementsByClassName('file_name')[0].innerHTML = `<a href="../html/${pageOrder[pageCounter]}" target="_blank">${pageOrder[pageCounter]}</a>`;
      drawOnCanvas();
      cb();
      closeAllTwo();
      form();
      toggleClass('div-two', 'relative', 'Relative');
      toggleClass('div-one', 'relative', 'Relative');
      toggleClass('div-three', 'relative', 'Relative');
      toggleClass('div-four', 'absolute', 'Absolute');
      toggleClass('div-five', 'absolute', 'Absolute');
      toggleClass('div-six', 'absolute', 'Absolute');
      createStyleSheet();
      inheritanceEventListener();
      togVisEventListener();
      togDisplayEventListener();
      viewportEventListenerHelper();
    };
  }

  function makeRequest(url, fn) {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", fn);
    oReq.open('GET', url);
    oReq.send();
  }

  function makePostRequest(url, params, fn) {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", fn);
    oReq.open('POST', url);
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // oReq.setRequestHeader("Content-length", params.length);
    // oReq.setRequestHeader("Connection", "close");
    oReq.send(params);
  }

  function callback() {
    console.log('hello from callback');
  }

  function sectionForward() {
    if (pageCounter < pageOrder.length - 1) { ++pageCounter; }
    makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
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

  function toggleClass(id, toggleClass, toggleMsg) {
    if (document.getElementById(id)) {
      document.getElementById(id).addEventListener('click', function () {
        if (this.classList.contains(toggleClass)) {
          this.classList.remove(toggleClass);
          this.innerHTML = "Static";

        } else {
          this.classList.add(toggleClass);
          this.innerHTML = toggleMsg;

        }
      });
    }
  }

  // function toggleClass(id, toggleClass, toggleMsg) {
  //     document.getElementById(id).addEventListener('click', function () {
  //         if (this.classList.contains(toggleClass)) {
  //             this.classList.remove(toggleClass);
  //             this.innerHTML = "Static";

  //         } else {
  //             this.classList.add(toggleClass);
  //             this.innerHTML = toggleMsg;

  //         }
  //     })

  // }

  (function populateDatalist() {
    for (let i = 0; i < pageOrder.length; i++) {
      var el = document.createElement('option');
      el.textContent = pageOrder[i];
      document.getElementById('dlist_data').appendChild(el);
    }

  })();

  function selectFromDatalist() {
    if (document.getElementById('dlist_search').value.length > 4) {
      makeRequest(`./html/${document.getElementById('dlist_search').value}`, insertContents(callback));
      pageCounter = parseInt(pageOrder.indexOf(document.getElementById('dlist_search').value), 10);
      // console.log(document.getElementById('dlist_search').value.length);
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

  function generateParams(...args) {
    var tmp = "";
    if (args.length < 3) {
      tmp += `${args[0]}=${args[1]}`;
    }
    else {
      tmp += `${args[0]}=${args[1]}`;
      for (let i = 2; i < args.length; i += 2) {
        tmp += `&${args[i]}=${args[i + 1]}`;
      }
    }
    return tmp;
  }

  function upperCaseFirstLetter(str) {
    return `${str.trim().charAt(0).toUpperCase()}${str.trim().substring(1)}`;
  }

  function form() {
    if (document.getElementById('form_one')) {
      document.getElementById('form_one').addEventListener('submit', function (event) {
        if (checkField(event, 'uid')) {
          event.preventDefault();
          var name = document.getElementById('form_one')[1].value;
          var param2 = document.getElementById('form_one')[2].value;
          var params = generateParams('name', name, 'param2', param2);
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe());
        }
      });
    }

    if (document.getElementById('form_two')) {
      document.getElementById('form_two').addEventListener('submit', function (event) {
        if (checkField(event, 'uname')) {
          event.preventDefault();
          var name = document.getElementById('form_two')[1].value;
          var param2 = document.getElementById('form_two')[2].value;
          makeRequest(
            addQueryStringToUrl('http://phptwo.tomgdow.com', 'name', name, 'param2', param2), ajaxCallMe2()
          );
        }
      });
    }

    if (document.getElementById('form_three')) {
      document.getElementById('form_three').addEventListener('submit', function (event) {
        if (checkField(event, 'uname2')) {
          event.preventDefault();
          var name = document.getElementById('form_three')[1].value;
          var colors = document.getElementsByName('color');
          var color_val;
          for (var i = 0; i < colors.length; i++) {
            if (colors[i].checked) {
              color_val = colors[i].value;
            }
          }
          var param2 = color_val;
          var params = generateParams('name', name, 'param2', param2);
          // console.log('%c %s', 'color:red', params);
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe3());
        }

      });
    }

    if (document.getElementById('form_four')) {
      document.getElementById('form_four').addEventListener('submit', function (event) {
        if (checkField(event, 'uname4')) {
          event.preventDefault();
          var name = document.getElementById('form_four')[1].value;
          let cbox = document.querySelectorAll('.clang-checkbox');

          var tmparr = [];
          for (let i = 0; i < cbox.length; i++) {
            if (cbox[i].checked) {
              tmparr.push(cbox[i].name);
              tmparr.push(cbox[i].value);
            }
          }

          makeRequest(
            addQueryStringToUrl('http://phptwo.tomgdow.com', 'name', name, ...tmparr), ajaxCallMe4()
          );
        }

      });
    }

    if (document.getElementById('form_five')) {
      document.getElementById('form_five').addEventListener('submit', function (event) {
        if (checkField(event, 'uname5')) {
          event.preventDefault();
          let name = document.getElementById('form_five')[1].value;
          let county = document.getElementById('form_five')[2].value;

          // console.log("%c %s", "color:red", name);
          var param2 = county;
          var params = generateParams('name', name, 'param2', param2);
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe5());

        }

      });
    }

    if (document.getElementById('form_six')) {
      document.getElementById('form_six').addEventListener('submit', function (event) {
        if (true) {
          event.preventDefault();
          let name = document.getElementById('form_six')[1].value;
          let txt = document.getElementById('form_six')[2].innerHTML;

          console.log("%c %s", "background-color:blue", name);
          var param2 = txt;
          var params = generateParams('name', name, 'param2', param2);
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe6());

        }

      });
    }

    if (document.getElementById('uid')) {
      document.getElementById('uid').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white";
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-name').innerText = "";
        document.getElementById('out-email').innerText = "";
      });
    }

    if (document.getElementById('uname')) {
      document.getElementById('uname').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('name-county').innerText = "";
      });
    }

    if (document.getElementById('uname2')) {
      document.getElementById('uname2').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-name-two').innerText = "";
        document.getElementById('name-color').innerText = "";
      });
    }

    if (document.getElementById('uname4')) {
      document.getElementById('uname4').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-name-clang').innerText = "";
      });
    }

    if (document.getElementById('uname5')) {
      document.getElementById('uname5').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-county').innerText = "";
      });
    }
  }

  function checkField(event, in_id) {
    event.preventDefault();
    let tmp = document.getElementById(in_id);
    if (tmp.value === '') {
      var msgName = document.getElementsByClassName('msg_name')[0];
      msgName.innerHTML = "!Required field";
      msgName.style.backgroundColor = "red";
      return false;
    }
    return true;
  }

  function addQueryStringToUrl(url, ...args) {
    var tmp = url + '?=';
    if (args.length < 3) {
      // console.log(args);
      tmp = `${tmp}${args[0]}=${args[1]}`;
    }
    else {
      tmp = `${tmp}${args[0]}=${args[1]}`;
      for (let i = 2; i < args.length; i += 2) {
        tmp += `&${args[i]}=${args[i + 1]}`;
      }
    }
    return tmp;
  }

  function ajaxCallMe() {
    return function ajax() {
      let response = this.responseText.split(',');
      let responseString = `Greetings from PHP Server (POST Method),
             ${upperCaseFirstLetter(response[0])}`;
      let responseString2 = `Your email address is ${response[1]}`;
      document.getElementById('out-name').value = responseString;
      document.getElementById('out-email').value = responseString2;
    };
  }

  function ajaxCallMe2() {
    return function ajax2() {
      let response = this.responseText.substring(2).split('&');
      let responseString = `Greetings from the PHP Server (GET Method), ${(response[0].split('=')[1]).toUpperCase()}, from ${(response[1].split('=')[1]).toUpperCase()} `;
      document.getElementById('name-county').value = responseString;
    };
  }

  function ajaxCallMe3() {
    return function ajax() {
      let response = this.responseText.split(',');
      let responseString = `Greetings from PHP Server (POST Method), ${upperCaseFirstLetter(response[0])}.`;
      let responseString2 = `Your favourite color is ${response[1]}`;
      document.getElementById('out-name-two').value = responseString;
      document.getElementById('name-color').value = responseString2;
    };
  }

  function ajaxCallMe4() {
    return function ajax2() {
      let response = this.responseText.substring(2).split('&');
      console.log(response);
      let responseStringName = `Greetings from the PHP Server (GET Method), ${(response[0].split('=')[1]).toUpperCase()}. `
      document.getElementById('out-name-clang').value = responseStringName + favLangHelper(response)
    };
  }

  function ajaxCallMe4() {
    return function ajax2() {
      let response = this.responseText.substring(2).split('&');
      console.log(response);
      let responseStringName = `Greetings from the PHP Server (GET Method), ${(response[0].split('=')[1]).toUpperCase()}. `
      document.getElementById('out-name-clang').value = responseStringName + favLangHelper(response)
    };
  }

  function ajaxCallMe5() {
    return function ajax2() {
      let response = this.responseText.split(',');
      // console.log("%c %s", "color:green", response);
      let responseStringName = `Greetings from the PHP Server (POST Method), ${upperCaseFirstLetter(response[0])}. `
      let responseStringFavCounty = `Your favourite county is ${upperCaseFirstLetter(response[1])}`;
      document.getElementById('out-county').value = responseStringName + responseStringFavCounty;
    };
  }

  function ajaxCallMe6() {
    return function ajax2() {
      let response = this.responseText.split(',');
      // console.log("%c %s", "color:green", response);
      let responseStringName = `Greetings from the PHP Server (POST Method), ${upperCaseFirstLetter(response[0])}. `
      let responseStringCommentPreamble = `Your comment is: `;
      let responseStringComment = response[1];
      document.getElementById('out-txtarea').value = responseStringName + responseStringCommentPreamble;
      document.getElementById('out-txtarea-user-comment').value = responseStringComment;
    };
  }


  function favLangHelper(arr) {
    let tmp = "";
    let responseStringNone = "Your have not chosen any favourite language! ";
    let responseStringSingular = "Your favourite language is ";
    let responseStringPlural = "Your favourite languages are ";
    if (arr.length === 1) {
      tmp = responseStringNone;
    }
    if (arr.length === 2) {
      tmp = responseStringSingular + arr[1].split('=')[1];
    }
    if (arr.length > 2) {
      tmp = `${responseStringPlural} ${arr[1].split('=')[1]}`;

      if (arr.length > 3) {
        for (let i = 2; i < arr.length - 1; i++) {
          tmp += `, ${arr[i].split('=')[1]}`
        }
      }
      tmp += ` and ${arr[arr.length - 1].split('=')[1]}`;
    }

    return tmp;
  }

  function createStyleSheet() {
    if (document.getElementById('inheritance_example_btn')) {
      var sheet = document.createElement('style');
      var txt = document.createTextNode("a {color:red}");
      sheet.appendChild(txt);
      sheet.id = 'sheet';
      document.getElementsByTagName('head')[0].appendChild(sheet);
      sheet.disabled = true;
    }

  }

  function toggle_anchor_class() {
    var sheet = document.getElementById('sheet');
    if (sheet.disabled === true) {
      sheet.disabled = false;
      this.innerHTML = "Remove Class"
      document.getElementById('inheritance_added_css_class').style.visibility = "visible";
    } else {
      sheet.disabled = true;
      this.innerHTML = 'Add Class';
      document.getElementById('inheritance_added_css_class').style.visibility = "hidden";
    }
  }

  function inheritanceEventListener() {
    let x = document.getElementById('inheritance_example_btn');
    if (x) {
      x.addEventListener('click', toggle_anchor_class);
    }
  }


  function toggleVis(x) {
    x.style.visibility !== 'hidden' ? x.style.visibility = 'hidden' : x.style.visibility = 'visible';
  }
  function toggleDisplay(x) {
    x.style.display !== 'none' ? x.style.display = 'none' : x.style.display = '';
  }
  function togVisEventListener() {
    let y = document.getElementById('tog_vis');
    if (y) {
      y.addEventListener('click', function (event) {
        event.preventDefault();
        toggleVis(document.getElementsByClassName('vis_one')[0]);
      });
    }

  }

  function togDisplayEventListener() {
    let x = document.getElementById('tog_display');
    if (x) {
      x.addEventListener('click', function () {
        toggleDisplay(document.getElementsByClassName('vis_one')[0]);
      });
    }
  }

  function viewportTableHover(x, y, color) {
    x.addEventListener('mouseover', function () {
      x.style.backgroundColor = color;
      y.style.backgroundColor = color;
    })

    y.addEventListener('mouseover', function () {
      x.style.backgroundColor = color;
      y.style.backgroundColor = color;
    })

    x.addEventListener('mouseout', function () {
      x.style.backgroundColor = 'initial';
      y.style.backgroundColor = 'initial';

    })

    y.addEventListener('mouseout', function () {
      x.style.backgroundColor = 'initial';
      y.style.backgroundColor = 'initial';

    })
  }

  function viewportEventListenerHelper() {
    if (document.getElementById('viewport_expt_3')) {
      let temp = document.getElementById('viewport_expt_3');
      let x = temp.querySelectorAll('tr')[1];
      let y = temp.querySelectorAll('tr')[2];
      let x2 = temp.querySelectorAll('tr')[3];
      let y2 = temp.querySelectorAll('tr')[4];
      let x3 = temp.querySelectorAll('tr')[5];
      let y3 = temp.querySelectorAll('tr')[6];
      viewportTableHover(x, y, 'lightgray');
      viewportTableHover(x2, y2, 'lightgray');
      viewportTableHover(x3, y3, 'lightgray');
    }
  }


})(pageData);

