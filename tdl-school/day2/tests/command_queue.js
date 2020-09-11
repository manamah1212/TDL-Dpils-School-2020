module.exports = {
    function(client) {
        let value;

        client
            .url('https://duckduckgo.com/', () => (value = 'TestDevLab'))
            .waitForElementVisible('body', 5 * 1000)
            .setValue('#search_form_input_homepage', value, () => {
                client
                    .clearValue('#search_form_input_homepage')
                    .setValue('#search_form_input_homepage', value);
            })
            .getValue('#search_form_input_homepage', () => {
                client
                    .clearValue('#search_form_input_homepage', () => {
                        value1 = 'Pikachu';
                    })
                    .setValue('#search_form_input_homepage', value1, () => {
                        console.log(value1);
                    });
            })
            .pause(5 * 1000);

        let value1;
    }
};