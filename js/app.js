// Wait until the DOM is ready
$(document).ready(function () {
    
    // Add student event handler
    $("#addStudentButton").click(function () {
        // Retrieve the input values
        let idNumber = $("#idNumber").val();
        let firstName = $("#firstName").val();
        let middleName = $("#middleName").val();
        let lastName = $("#lastName").val();

        // Check if all fields are filled out
        if (idNumber && firstName && middleName && lastName) {
            // Create a new row for the table
            let newRow = `
                <tr>
                    <td>${idNumber}</td>
                    <td>${firstName}</td>
                    <td>${middleName}</td>
                    <td>${lastName}</td>
                </tr>
            `;

            // Append the new row to the table
            $("#table-content").append(newRow);

            // Clear the input fields
            $("#idNumber").val('');
            $("#firstName").val('');
            $("#middleName").val('');
            $("#lastName").val('');
        } else {
            // Alert the user if any fields are empty
            alert("Please fill in all the fields.");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to the button
    document.getElementById('addSubject').addEventListener('click', function() {
        // Get values from input fields
        var subjectCode = document.getElementById('subjectCode').value.trim();
        var subjectName = document.getElementById('subjectName').value.trim();
        var units = document.getElementById('units').value.trim();
        
        // Validate input
        if (subjectCode === '' || subjectName === '' || units === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        // Reference to tbody where rows will be added
        var tableBody = document.getElementById('table-content');
        
        // Create new row and add cells
        var newRow = document.createElement('tr');

        var codeCell = document.createElement('td');
        codeCell.textContent = subjectCode;

        var nameCell = document.createElement('td');
        nameCell.textContent = subjectName;

        var unitsCell = document.createElement('td');
        unitsCell.textContent = units;

        newRow.appendChild(codeCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(unitsCell);

        tableBody.appendChild(newRow);

        // Clear input fields
        document.getElementById('subjectCode').value = '';
        document.getElementById('subjectName').value = '';
        document.getElementById('units').value = '';
    });
});
