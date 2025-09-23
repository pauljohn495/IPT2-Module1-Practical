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
