function onAdd() {

//step1	
	const input = document.querySelector('.to-do-list .block1 input');
	const block2 = document.querySelector('.to-do-list .block2');

	if (!input.value) {    
	}

	const div = document.createElement('div');

	div.classList.add('new-item');

	const text = document.createTextNode(input.value);
	div.appendChild(text);

	block2.appendChild(div);

	input.value = '';

//step2
	div.addEventListener('click', function() {
		div.classList.toggle('new-item_green');
	});


//step 3
	 const deleteButton = document.createElement('button');
	 const deleteButtonText = document.createTextNode('X');

	 deleteButton.appendChild(deleteButtonText);

	 div.appendChild(deleteButton);

   deleteButton.addEventListener('click', function() {
		 div.classList.add('delete');
   })
}



