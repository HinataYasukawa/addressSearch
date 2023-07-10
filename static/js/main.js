async function search() {
    let postcode = document.getElementById('postcode').value;
    let response = await fetch('/search?postcode=' + postcode);
    let data = await response.json();
    document.getElementById('address').textContent = data.address;
    document.getElementById('openMap').style.display = "block";
    updateHistory();
}

async function updateHistory() {
    let response = await fetch('/history');
    let history = await response.json();
    let historyElement = document.getElementById('history');

    historyElement.innerHTML = '';

    for (let item of history) {
        let div = document.createElement('div');
        div.textContent = item.postcode + ': ' + item.address;
        historyElement.appendChild(div);
    }
}

function openMap() {
    var address = document.getElementById('address').textContent;
    var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
    window.open(url, '_blank');
}

window.onload = updateHistory;
