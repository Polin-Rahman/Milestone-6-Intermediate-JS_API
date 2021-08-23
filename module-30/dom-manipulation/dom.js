// specific element get: using getElementById

document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('frind-container').style.border = '3px solid yellow';
});

// multiple element get: using getElementsByClassName

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}

// add new element using innerHTML

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('frind-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Veritatis, eaque!</p>
    `;
    container.appendChild(friendDiv);
});