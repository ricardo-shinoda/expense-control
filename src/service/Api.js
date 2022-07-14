const data = async () => {
    const URL = await fetch('https://economia.awesomeapi.com.br/json/all');
    const URLJson = await URL.json();
    return URLJson;
}

export default data;