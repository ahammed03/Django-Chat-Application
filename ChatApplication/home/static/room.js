const roomName = JSON.parse(document.getElementById('json-roomname').textContent);
console.log(roomName);

const chatSocket = new WebSocket(
    'ws://' 
    + window.location.host 
    +'/rooms/ws/' 
    +roomName
    +'/'
    
);

chatSocket.onopen = function(event) {
    console.log('WebSocket connection established.');
};

chatSocket.onmessage = function(event) {
    console.log('Received a message:', event.data);
};

chatSocket.onclose = function(event) {
    console.log('WebSocket connection closed.');
};

chatSocket.onerror = function(event) {
    console.error('WebSocket error observed:', event);
};
