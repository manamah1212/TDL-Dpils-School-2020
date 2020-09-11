module.exports = {
    function (client) {
        client
            .url('https://www.google.com')
            .pause(1 * 1000)
            .element('css selector', 'iframe[src]', result => {
                client.frame(result.value).click('#introAgreeButton');
            })
            .setValue('input[title="Search"]', ['TestDevLab', client.Keys.ENTER])
            .pause(5 * 1000);
        //.element('css selector', 'iframe[src]', result => {
        //   client.frame(result.value).click('input[value="Google Search"]');
        //});

    }
}