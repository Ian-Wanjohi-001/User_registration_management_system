// define variables
const userForm = document.getElementById('userForm');
const userTable = document.getElementById('userTable');
const membersList = document.getElementById('members-list');

// add event listener for form submit
userForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const country = document.getElementById('country').value;
  const languages = document.getElementById('languages').value;
  // create new table row and cells
  const newRow = userTable.insertRow();
  const nameCell = newRow.insertCell();
  const idCell = newRow.insertCell();
  const countryCell = newRow.insertCell();
  const languagesCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  // add values to cells
  nameCell.innerHTML = name;
  idCell.innerHTML = id;
  countryCell.innerHTML = country;
  languagesCell.innerHTML = languages;
  deleteCell.innerHTML = '<button class="deleteBtn">Delete User</button>';
  // add event listener for delete button
  const deleteBtn = deleteCell.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', function() {
    newRow.remove();
  });
  // clear form inputs
  userForm.reset();
  // show members list section if it was hidden
  membersList.style.display = 'block';
});

