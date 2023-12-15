import months from `./module.js`

const getData = async function() {
    const day = 26;
    const months = months ;
    const getData = async function () {
        const res = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/1WtCF9-CNk-Hmb0AcY6UQOHImGXKnuecOPtMrF28kz2A/values/'SPL%20Labeler${day}%2F11'!A1:BS270?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
        );
        
        // Check the status of the response
        if (!res.ok) {
          console.log(`HTTP error! status: ${res.status}`);
          // Log the response text
          const text = await res.text();
          console.log(text);
          return;
        }
}