function search() {
    var postcode = document.getElementById('postcode').value;
    fetch('/search?postcode=' + postcode)
        .then(response => response.json())
        .then(data => {
            document.getElementById('address').textContent = data.address;
            document.getElementById('openMap').style.display = "block";
        });
}

function openMap() {
    var address = document.getElementById('address').textContent;
    var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
    window.open(url, '_blank');
}
