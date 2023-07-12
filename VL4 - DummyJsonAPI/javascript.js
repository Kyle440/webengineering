function getProduct() {
  fetch('https://dummyjson.com/api/product')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error));
}

function getAllProducts() {
  fetch('https://dummyjson.com/api/products')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error));
}

function addProduct() {
  fetch('https://dummyjson.com/api/product', {
    method: 'POST',
    body: JSON.stringify({ name: 'New Product' }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error));
}

function updateProduct() {
  fetch('https://dummyjson.com/api/product/1', {
    method: 'PUT',
    body: JSON.stringify({ name: 'Updated Product' }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error));
}

function deleteProduct() {
  fetch('https://dummyjson.com/api/product/1', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error));
}

function displayData(data) {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = JSON.stringify(data, null, 2);
}