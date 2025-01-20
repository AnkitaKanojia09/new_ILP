function redirectTo(page) {
  window.location.href = page;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');
  sidebar.classList.toggle('active');
  content.classList.toggle('sidebar-active');
}
function redirectToEmotionAnalysis() {
  // Open the first link in the same tab
  // window.location.href = 'emotionAnalysis.html';

  // Open the second link in a new tab
  window.open('https://u77saz4v7a.execute-api.us-east-1.amazonaws.com/prod/latest-result', '_blank');
}

function redirectToLiveAnalysis() {
  // Open the first link in the same tab
  // window.location.href = 'emotionAnalysis.html';

  // Open the second link in a new tab
  window.open('https://cflcdt4v68.execute-api.us-east-1.amazonaws.com/Data/uploads', '_blank');
}

// function redirectTo(page) {
//   window.location.href = page;
// }

// function toggleSidebar() {
//   const sidebar = document.getElementById('sidebar');
//   const content = document.querySelector('.content');
//   sidebar.classList.toggle('active');
//   content.classList.toggle('sidebar-active');
// }
// function redirectToEmotionAnalysis() {
//   // Open the first link in the same tab
//   // window.location.href = 'emotionAnalysis.html';

//   // Open the second link in a new tab
//   window.open('https://u77saz4v7a.execute-api.us-east-1.amazonaws.com/prod/latest-result', '_blank');
// }

// function redirectToLiveAnalysis() {
//   // Open the first link in the same tab
//   // window.location.href = 'emotionAnalysis.html';

//   // Open the second link in a new tab
//   window.open('https://cflcdt4v68.execute-api.us-east-1.amazonaws.com/Data/VIDEO', '_blank');
// }

function redirectTo(page) {
  window.location.href = page;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');
  sidebar.classList.toggle('active');
  content.classList.toggle('sidebar-active');
}
function redirectToEmotionAnalysis() {
  
  window.open('https://u77saz4v7a.execute-api.us-east-1.amazonaws.com/prod/latest-result', '_blank');
}

function redirectToLiveAnalysis() {
  // Open the first link in the same tab
  // window.location.href = 'emotionAnalysis.html';

  // Open the second link in a new tab
  window.open('https://cflcdt4v68.execute-api.us-east-1.amazonaws.com/Data/VIDEO', '_blank');
}


let audio;

// Helper function to create a popup with custom content and close functionality
function createPopup(content, callback, delay = 20000) {
    const popupDiv = document.createElement("div");
    popupDiv.style.position = "fixed";
    popupDiv.style.top = "50%";
    popupDiv.style.left = "50%";
    popupDiv.style.transform = "translate(-50%, -50%)";
    popupDiv.style.backgroundColor = "#ff4c4c";
    popupDiv.style.color = "#fff";
    popupDiv.style.padding = "20px";
    popupDiv.style.borderRadius = "10px";
    popupDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    popupDiv.style.fontFamily = "Arial, sans-serif";
    popupDiv.style.fontSize = "18px";
    popupDiv.style.textAlign = "center";
    popupDiv.style.zIndex = "9999";
    popupDiv.style.maxWidth = "400px";

    // Add the content to the popup
    popupDiv.innerHTML = content;

    // Create a close button
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&#10006;"; // Unicode for the cross (X)
    closeButton.style.position = "absolute";
    closeButton.style.top = "5px";
    closeButton.style.right = "5px";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.border = "none";
    closeButton.style.fontSize = "24px";
    closeButton.style.color = "#fff";
    closeButton.style.cursor = "pointer";

    // Append the close button to the popup
    popupDiv.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popupDiv);

    // Handle close button click
    closeButton.onclick = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the beginning
        }
        document.body.removeChild(popupDiv);
        if (callback) callback();
    };

    // Automatically close the popup after the specified delay
    setTimeout(() => {
        if (document.body.contains(popupDiv)) {
            if (audio) {
                audio.pause();
                audio.currentTime = 0; // Reset audio
            }
            document.body.removeChild(popupDiv);
            if (callback) callback();
        }
    }, delay);
}

// Start the sequence of popups
// Start the sequence of popups
setTimeout(() => {
  // Step 1: Initial alert
  createPopup(
      "<strong>Alert:</strong><br>The baby is crying. Actions are <strong>processing</strong>.",
      () => {
          // Step 2: Lower AC temperature after 2 minutes
          setTimeout(() => {
              createPopup(
                  "<strong>Action: after 2 minutes</strong><br>Lowering AC temperature to ensure baby comfort.",
                  () => {
                      // Step 3: Play lullabies after 3 minutes
                      setTimeout(() => {
                          createPopup(
                              "<strong>Action: after 3 minutes</strong><br>Lullabies music started playing to soothe the baby.",
                              () => {
                                  // Step 4: Crib starts swinging after 5 minutes
                                  setTimeout(() => {
                                      createPopup(
                                          "<strong>Action: after 5 minutes</strong><br>The crib is now swinging to calm the baby.",
                                          () => {
                                              // Step 5: Final alert to the parent after 5 minutes
                                              setTimeout(() => {
                                                  // Play alert sound simultaneously with the popup
                                                  audio = new Audio("alert.mp3"); // Ensure this file is in the correct directory
                                                  audio.loop = true; // Set looping to keep the audio playing until dismissed
                                                  audio.play();

                                                  createPopup(
                                                      "<strong>Alert:</strong><br>The baby is still crying. Parents are being alerted now.",
                                                      null, // No callback required here
                                                      10000 // Show for 10 seconds
                                                  );
                                              }, 10000); // Delay for 5 minutes
                                          },
                                          10000 // Show for 10 seconds
                                      );
                                  }, 10000); // Delay for 3 minutes
                              },
                              10000 // Show for 10 seconds
                          );
                      }, 10000); // Delay for 2 minutes
                  },
                  10000 // Show for 10 seconds
              );
          }, 10000); // Delay for 2 minutes
      },
      10000 // Show for 10 seconds
  );
}, 10000); // Initial delay of 10 seconds