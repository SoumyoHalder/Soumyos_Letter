// Function to close any open text boxes
function closeTextBoxes() {
  var openTextBox = document.querySelector(".text-box");
  if (openTextBox) {
    openTextBox.parentNode.removeChild(openTextBox);
  }
  
  var openButton = document.querySelector(".text-box-button");
  if (openButton) {
    openButton.parentNode.removeChild(openButton);
  }
}

document.getElementById("write-button").addEventListener("click", function() {
  // Close any open text boxes
  closeTextBoxes();
  
  // Reduce opacity of envelope and letter
  document.getElementById("wrapper").style.opacity = "0.5";
  
  // Create a text area
  var textArea = document.createElement("textarea");
  textArea.setAttribute("class", "text-box"); // Add a class for identification
  textArea.style.width = "70%";
  textArea.style.height = "70%";
  textArea.style.position = "absolute";
  textArea.style.top = "50%";
  textArea.style.left = "50%";
  textArea.style.transform = "translate(-50%, -50%)";
  textArea.style.fontSize = "20px";
  textArea.style.padding = "10px";
  textArea.style.borderRadius = "5px";
  textArea.style.border="solid black";
  textArea.style.fontFamily="Handlee";

  
  // Append text area to body
  document.body.appendChild(textArea);
  
  // Create a "Done" button
  var doneButton = document.createElement("button");
  doneButton.innerHTML = "Done";
  doneButton.setAttribute("class", "text-box-button"); // Add a class for identification
  doneButton.style.position = "absolute";
  doneButton.style.bottom = "100px";
  doneButton.style.right = "120px";
  doneButton.style.padding = "5px 10px";
  doneButton.style.fontSize = "14px";
  doneButton.style.border = "none";
  doneButton.style.borderRadius = "5px";
  doneButton.style.background = "#3760C9";
  doneButton.style.color = "white";
  doneButton.style.cursor = "pointer";
  
  // Append "Done" button to body
  document.body.appendChild(doneButton);
  
  // Set focus on text area
  textArea.focus();
  
  // Function to handle "Done" button click
  doneButton.addEventListener("click", function() {
    var newContent = textArea.value;
    document.getElementById("letter").innerHTML = "<p>" + newContent + "</p>";
    
    // Remove text area and "Done" button
    document.body.removeChild(textArea);
    document.body.removeChild(doneButton);
    
    // Restore opacity of envelope and letter
    document.getElementById("wrapper").style.opacity = "1";
  });
});

document.getElementById("read-button").addEventListener("click", function() {
  // Close any open text boxes
  closeTextBoxes();
  
  // Reduce opacity of envelope and letter
  document.getElementById("wrapper").style.opacity = "0.5";
  
  // Create a read-only text area
  var textArea = document.createElement("textarea");
  textArea.setAttribute("class", "text-box"); // Add a class for identification
  textArea.style.width = "70%";
  textArea.style.height = "70%";
  textArea.style.position = "absolute";
  textArea.style.top = "50%";
  textArea.style.left = "50%";
  textArea.style.transform = "translate(-50%, -50%)";
  textArea.style.fontSize = "20px";
  textArea.style.padding = "10px";
  textArea.style.borderRadius = "5px";
  textArea.style.border="2px dotted black";
  textArea.style.fontFamily="Handlee";
  
  
  textArea.readOnly = true; // Make text area read-only
  
  // Get content of the letter
  var letterContent = document.getElementById("letter").innerText;
  textArea.value = letterContent; // Set content of the text area
  
  // Append text area to body
  document.body.appendChild(textArea);
  
  // Create a "Close" button
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.setAttribute("class", "text-box-button"); // Add a class for identification
  closeButton.style.position = "absolute";
  closeButton.style.bottom = "100px";
  closeButton.style.right = "120px";
  closeButton.style.padding = "5px 10px";
  closeButton.style.fontSize = "14px";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.background = "#3760C9";
  closeButton.style.color = "white";
  closeButton.style.cursor = "pointer";
  
  // Append "Close" button to body
  document.body.appendChild(closeButton);
  
  // Function to handle "Close" button click
  closeButton.addEventListener("click", function() {
    // Remove text area and "Close" button
    document.body.removeChild(textArea);
    document.body.removeChild(closeButton);
    
    // Restore opacity of envelope and letter
    document.getElementById("wrapper").style.opacity = "1";
  });
});
