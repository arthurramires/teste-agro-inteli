

export default { 
    async fetchPragas() {
        try {
                let response = await fetch('https://www.mocky.io/v2/5e56eb9230000046d228eae4');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}
