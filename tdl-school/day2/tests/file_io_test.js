//const url = 'https://www.google.com';
module.exports = {
    function (client) {
        const selectors = {
            fileInput: 'input[type="file"]',
            dowloadLink: 'a[href*="https://file.io"]'
        };
        const filePath = ['.', 'assets', 'Cat03.jpg'];
        const timeout = 5 * 1000;
        const uploadTimeout = 10 * 1000;

        prepare();
        uploadFile();
        openLink();

        function prepare() {
            client
                .url('https://www.file.io/')
                .waitForElementVisible('body', timeout)
                .waitForElementPresent(selectors.fileInput, timeout);
        }

        function uploadFile() {
            client
                .setValue(selectors.fileInput, require('path').resolve(...filePath)) // zagruzka faila na sait
                .waitForElementVisible(selectors.dowloadLink,uploadTimeout);
        }

        function openLink() {
            client.getText(selectors.dowloadLink, result => {
                    openNewTab(result.value);
                    // const url = result.value; //soxranenie polucenoj ssilki v peremennuju
                    // console.log(url)
                    //polucenie ssilki zagruzenogo faila

                    function openNewTab() {
                        client
                            .execute(
                                function (url) {
                                    window.open(url); //otkritie ssilki polucenoj v peremennoj url
                                },
                                [url]
                            )
                            .pause(timeout); //otkritie polucennogo adressa
                    }
                });
            }
        }
    };
