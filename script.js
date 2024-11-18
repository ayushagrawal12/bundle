function toggleBox(selectedId) {
  // Hide all bundle-content sections
  document.querySelectorAll('.bundle-content').forEach((content) => {
      content.style.display = 'none';
  });

  // Show the selected content
  const selectedContent = document.getElementById(`content-${selectedId}`);
  if (selectedContent) {
      selectedContent.style.display = 'block';
  }

  // Remove 'selected' class from all bundle-box elements
  const allBoxes = document.querySelectorAll('.bundle-box');
  allBoxes.forEach((box) => box.classList.remove('selected'));

  // Add 'selected' class to the selected bundle-box
  const selectedBox = document.querySelector(`#${selectedId}`).closest('.bundle-box');
  if (selectedBox) {
      selectedBox.classList.add('selected');
  }
}

// Hide all bundle-content sections by default on page load
window.onload = () => {
  document.querySelectorAll('.bundle-content').forEach((content) => {
      content.style.display = 'none';
  });
};
