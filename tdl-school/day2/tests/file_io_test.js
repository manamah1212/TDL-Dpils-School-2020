//const url = 'https://www.google.com';
module.exports = {
        function (client) {
            client
                .url('https://www.file.io/')
                .pause(3 * 1000)
                .waitForElementVisible('body', 5 * 1000)
                .waitForElementPresent('input[type="file"]', 5 * 1000)
                .setValue('input[type="file"]', require('path').resolve('.', 'assets', 'Cat03.jpg')) // zagruzka faila na sait
                .pause(5 * 1000)
                .getText('a[href*="https://file.io"]', result => {
                        const url = result.value; //soxranenie polucenoj ssilki v peremennuju
                        console.log(url) //polucenie ssilki zagruzenogo faila
                        client.execute(
                                function (url) {
                                    window.open(url);//otkritie ssilki polucenoj v peremennoj url
                                },
                                [url]
                            )
                            .pause(3 * 1000); //otkritie polucennogo adressa
                    }
                )}
            }
        