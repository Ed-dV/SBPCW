function toggleMode() {
    const body = document.body;
  
    // Check the current mode
    if (body.classList.contains('light-mode')) {
      // Switch to dark mode
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      // Switch to light mode
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  }
  
