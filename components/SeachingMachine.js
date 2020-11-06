
export const FindBarcode = async function (barcode) {
    const Url = "https://uk.openfoodfacts.org/product/";
    console.log("tyt" + barcode);
    try {

        let response = await fetch("https://cors-anywhere.herokuapp.com/" + Url + barcode, {
            method: "GET",
            mode: "cors"
        });
        // console.log(response);
        let responseText = await response.text();
        // console.log(responseText.slice(35710, 35725).trim().split(" ")[0]);  
        // console.log(responseText.slice(35710, 35725).trim().split(" ")[0]);  
        return responseText.slice(35710, 35725).trim().split(" ")[0];
    } catch (error) {
        alert(error)
    }
}
export default FindBarcode;