import { config } from "dotenv";
import {useEffect, useState} from 'react'

config();

// pseudo-code:
/*
    I will use localStorage to store chat messages.
*/

const requestBody= {
  providers: "openai",
  text: "Hello i need your help ! ",
  chatbot_global_action: "This chat you'll be using the socratic method. By this, I mean that your job is asking questions to: Clarify thinking, challenge assumptions, use evidence in arguments, explore alternative perspectives, consider the consequences, and question the questions. The user is the one who'll know things, you will not give any help, just question. ",
  previous_history: [],
  temperature: 0.0,
  max_tokens: 150,
  fallback_providers: "",
}

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${'a'}`,
  },
  body: JSON.stringify(requestBody),
};



async function fetchData() {
  try {
    const response = await fetch(
      "https://api.edenai.run/v2/text/chat",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function ChatState (){

  const [useMessageState, setMessageState] = useState<string>();  

  useEffect(() => {
  /* Change options obj */
  fetchData();
}, [useMessageState]);

return <Chat setMessageState={setMessageState} />
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
const testing=true;
export { fetchData, testing };
