function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee') //fetch data from BE
    .then(response => response.json()) //convert response to json
    .then(data => { 
      const tableBody = document.getElementById('dataTable') //get table body
      tableBody.innerHTML = '' //clear table body
      const list = data.data //get data from response
      list.forEach(item => {
        const row = document.createElement('tr') //create row
        const idCell = document.createElement('td') //create cell
        idCell.textContent = item.id 
        row.appendChild(idCell) 

        const nameCell = document.createElement('td') 
        nameCell.textContent = item.name 
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
document.getElementById('submitButton').addEventListener('click', createEmployee);

// TODO
// add event listener to delete button
document.getElementById('dataTable').addEventListener('click', function (event) {
  if (event.target && event.target.nodeName == "BUTTON") {
    deleteEmployee(event.target.parentNode.parentNode.firstChild.textContent);
  } // EXPLAIN : event.target is the clicked element, event.target.nodeName is the name of the clicked element which is supposed to be 'BUTTON'
});

// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees

  const id = document.getElementById('employeeId').value;
  const name = document.getElementById('employeeName').value;

  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, name })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to create employee');
    })
    .then(() => {
      fetchEmployees();
      document.getElementById('employeeId').value = '';
      document.getElementById('employeeName').value = '';
    })
    .catch(error => console.error(error));
}

// TODO
function deleteEmployee (id){
  // get id
  // send id to BE
  // call fetchEmployees
  const response = fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to delete employee');
    })
    .then(() => fetchEmployees())
    .catch(error => console.error(error));
}

fetchEmployees()


