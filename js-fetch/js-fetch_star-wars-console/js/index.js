console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.results[3], data.results[4]);
    console.log(data.results[2].eye_color);
    return data;
}

fetchData();
