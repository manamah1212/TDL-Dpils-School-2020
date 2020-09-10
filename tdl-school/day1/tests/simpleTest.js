module.exports = {
    function (client) {
        client
        .url('https://www.google.com')
        .pause(5 * 1000);
    }
}