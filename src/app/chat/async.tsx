import { config } from "dotenv";
config()

// pseudo-code:
// the user clicks a button after sending the message, which says their intention: 
/*
    Thinking: "I believe," "I think," "In my opinion," "From my perspective," "It seems to me," "Considering that," "To me, it appears," "In my view," "From what I can tell," "As far as I'm concerned," "My take on this is," "The way I see it," "It strikes me that."

    Assuming Something: "It appears that," "One might assume," "Seems like," "Presumably," "Perhaps," "Likely," "Probably," "I'd bet," "It's possible that," "Chances are."

    Argumenting: "I argue that," "My point is," "I believe strongly that," "It's evident that," "My stance is," "In defense of," "Supporting the idea that," "The way I see it," "Based on the evidence," "My reasoning is," "I'm convinced that."

    Positioning: "From my perspective," "In my eyes," "To me, it's clear that," "I stand by," "I align with," "I advocate for," "My position is," "I firmly believe," "It's my belief that," "In support of."

    Not Considering the Consequences: "Ignoring the impact," "Without thinking about," "Overlooking the consequences," "Neglecting the repercussions," "Disregarding the aftermath," "Acting without foreseeing," "Without heeding the effects."

    Questioning: "What are you hoping to achieve or understand with this question?"

*/

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${process.env.API_KEY}`,
  },
  body: JSON.stringify({
    providers: "openai",
    text: "Hello i need your help ! ",
    chatbot_global_action: "Act as an assistant",
    previous_history: [],
    temperature: 0.0,
    max_tokens: 150,
    fallback_providers: "",
  }),
};

fetch("https://api.edenai.run/v2/text/chat", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

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
export { testing  };
