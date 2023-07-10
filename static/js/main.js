let searchCount = 0;

async function search(event) {
    event.preventDefault();

    let postcode = document.getElementById('postcode').value;
    let response = await fetch('/search?postcode=' + postcode);
    let data = await response.json();
    document.getElementById('address').textContent = data.address;

    if (data.address !== "Address not found") {
        document.getElementById('openMap').style.display = "block";
    } else {
        document.getElementById('openMap').style.display = "none";
    }

    searchCount += 1;
    updateHistory(searchCount, postcode, data.address);

    document.getElementById('postcode').value = '';
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

    tdPostcode.addEventListener('click', function() {
        document.getElementById('postcode').value = this.textContent;
        search(postcode);
    });
    
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
