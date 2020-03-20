
        if (document.getElementById('form_five')) {
            document.getElementById('form_five').addEventListener('submit', function (event) {
                if (true) {
                    event.preventDefault();
                    var name = document.getElementById('form_five')[1].value;
                    console.log("%c %s", "color:red", name);


                }

            });
        }