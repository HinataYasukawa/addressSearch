let searchCount = 0;

async function search() {
    let postcode = document.getElementById('postcode').value;
    let response = await fetch('/search?postcode=' + postcode);
    let data = await response.json();
    document.getElementById('address').textContent = data.address;
    document.getElementById('openMap').style.display = "block";

    searchCount += 1;
    updateHistory(searchCount, postcode, data.address);
}

function updateHistory(count, postcode, address) {
    let historyBody = document.getElementById('historyBody');
    
    let tr = document.createElement('tr');
    let tdCount = document.createElement('td');
    let tdPostcode = document.createElement('td');
    let tdAddress = document.createElement('td');

    tdCount.textContent = count;
    tdPostcode.textContent = postcode;
    tdAddress.textContent = address;
    
    tr.appendChild(tdCount);
    tr.appendChild(tdPostcode);
    tr.appendChild(tdAddress);
    
    historyBody.appendChild(tr);
}

function openMap() {
    var address = document.getElementById('address').textContent;
    var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
    window.open(url, '_blank');
}

window.onload = updateHistory;
