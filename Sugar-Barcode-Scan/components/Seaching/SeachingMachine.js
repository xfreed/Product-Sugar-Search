const Url = "https://uk.openfoodfacts.org/product/";

export const FindBarcode = (barcode) => {
    console.log("tyt")
    fetch(Url + barcode)
        .then(function (response) {
            // console.log(url + " -> " + response.ok);
            if (response.ok) {
                console.log("200 OK")
                // return response.text();
                var HTMLParser = require('fast-html-parser');
                var root = HTMLParser.parse(response.text());
                console.log(root.querySelector("nutriment_value"));
            }
            throw new Error('Error message.');
        })
        .then(function (data) {
            console.log("data: ", data);
            this.setState({ content: data });
        }.bind(this))
        .catch(function (err) {
            console.log("failed to load ", url, err.message);
        });
}
export default FindBarcode;