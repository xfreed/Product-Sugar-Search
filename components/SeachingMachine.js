import { find } from "xpath-react";



export const FindBarcode = async function (barcode) {
    const Url = "https://uk.openfoodfacts.org/product/";
    console.log("tyt" + barcode);

    let response = await fetch(Url + barcode);
    let responseText = await response.text();
    const result = find(responseText,`//*[@id="nutriment_sugars_tr"]/td[2]`);

    console.log(result);
}
export default FindBarcode;