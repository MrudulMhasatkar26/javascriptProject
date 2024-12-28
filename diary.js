document.getElementById('saveButton').addEventListener('click', function () {
  const entry = document.getElementById('entry').value;
  if (entry.trim() === "") {
      alert("Please write something!");
      return;
  }

  // Save to Local Storage
  const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
  entries.push(entry);
  localStorage.setItem('diaryEntries', JSON.stringify(entries));

  // Clear text area
  document.getElementById('entry').value = "";

  // Update the displayed entries
  displayEntries();
});

function displayEntries() {
  const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
  const entriesContainer = document.getElementById('entries');
  entriesContainer.innerHTML = ""; // Clear current entries

  entries.forEach((entry, index) => {
      const entryDiv = document.createElement('div');
      entryDiv.classList.add('entry');
      entryDiv.innerHTML = `
          <p>${entry}</p>
          <button onclick="deleteEntry(${index})">&times;</button>
      `;
      entriesContainer.appendChild(entryDiv);
  });
}

function deleteEntry(index) {
  const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
  entries.splice(index, 1); // Remove the selected entry
  localStorage.setItem('diaryEntries', JSON.stringify(entries));
  displayEntries();
}

// Display entries on page load
displayEntries();
