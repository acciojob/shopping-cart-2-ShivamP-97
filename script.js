//your code here
const addButton = document.getElementById('add-button');
const nameInput = document.getElementById('item-name-input');
const priceInput = document.getElementById('item-price-input');
const tableBody = document.getElementById('item-body');
const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');

let grandTotal = 0;

addButton.addEventListener('click', () => {
	const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value.trim());
	
	if (name === '' || isNaN(price) || price <= 0) {
		alert('Please enter a valid name and a positive price.');
        return;
	}
	
	const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const priceCell = document.createElement('td');
	
	nameCell.setAttribute('data-ns-test', 'item-name');
	priceCell.setAttribute('data-ns-test', 'item-price');
	
	nameCell.textContent = name;
    priceCell.textContent = price.toFixed(2);
	
	const grandTotalRow = tableBody.lastElementChild;
	tableBody.insertBefore(newRow, grandTotalRow);
	
	newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
	
	grandTotal += price;
	grandTotalCell.textContent = grandTotal.toFixed(2);
	
	nameInput.value = '';
    priceInput.value = '';
});