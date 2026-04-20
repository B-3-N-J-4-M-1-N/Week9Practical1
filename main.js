const webAppURL = "https://script.google.com/macros/s/AKfycbytkRpIK4qDmrADe3M3fApSZ1UO6ERapsJ6CgPVohgPpQIA6CqMxDi6ocKRVLhg3v_IUQ/exec";

async function readData(table) {
    try {
        // Step 1. Request data from the database
        const response = await fetch(`${webAppURL}?table=${table}`);
        // Step 2. Convert the response to JSON format
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function addData(table, dataToAdd) {
    try {
        // Step 1. Send a POST request to the database with the data to add
        const response = await fetch(`${webAppURL}?table=${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                action: "add",
                data: dataToAdd
            })
        });
        // Step 2. Convert the response to JSON format
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error adding data:", error);
    }
}