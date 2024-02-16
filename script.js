document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  // Validate inputs
  if (!name || !age) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a promise to handle asynchronous processing
  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Resolves after 4 seconds
  });

  // Handle promise resolution or rejection
  agePromise
    .then((message) => {
      alert(message);
    })
    .catch((errorMessage) => {
      alert(errorMessage);
    });
});
