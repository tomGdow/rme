
if (document.getElementById('form_two')) {

    document.getElementById('form_two').addEventListener('submit', function (event) {

        if (checkField(event)) {

            event.preventDefault();
            var name = document.getElementById('form_two')[1].value;
            var club = document.getElementById('form_two')[2].value;
            makeGetRequest(
                addQueryStringToUrl('name', name, 'param2', param2)
            );


        }


    });
}