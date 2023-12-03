import { config } from "dotenv";
config()

async function fetchData(){
  const response = await fetch ("https://api.openai.com/v1/completions", {
    method:"POST",
    headers : {
      Authorization : `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json"
    },
    body:JSON.stringify ({
      model:"text-davinci-003",
      prompt: "hello, how are you today?",
      max_tokens:7
    })
  })
  const data = await response.json()
  return data
}

fetchData()

function testing() {
  return true;
} 
// successful API Calls:

//     Aim: Verify that the frontend successfully fetches data from the API and updates the UI accordingly.
//     Example: Test that a GET request to /users retrieves the expected user data and renders it in the application.

// Error Response Handling:

//     Aim: Ensure that your application handles error responses from the API gracefully.
//     Example: Simulate a 404 response when fetching a non-existent resource and verify that your app displays an appropriate error message or handles the error state.

// Loading States:

//     Aim: Test how your application handles loading states while waiting for API responses.
//     Example: Check that a loading spinner or indicator appears during API requests and disappears when the data is fetched.

// Data Manipulation and POST/PUT Requests:

//     Aim: Validate that your frontend correctly sends data to the API for creation or updates.
//     Example: Test a form submission by making a POST request to /create and confirm that the data is sent correctly.

// Authentication and Authorization:

//     Aim: Ensure that your frontend handles authentication/authorization-related scenarios properly.
//     Example: Test accessing a restricted resource without proper authentication and verify that the app redirects to a login page or displays an error.

// Network Failures and Timeouts:

//     Aim: Check how your frontend responds to network failures or timeouts when making API requests.
//     Example: Simulate a network timeout and verify that your app handles it gracefully, potentially displaying an error message.
export { testing, fetchData };
