const data = async () => {
    const URL = await fetch('https://economia.awesomeapi.com.br/json/all');
    const URLJson = await URL.json();
    // return URLJson;
    const URLJsonArr = Object.keys(URLJson).filter((val) => val !== 'USDT');
    return URLJsonArr;
}

export default data;