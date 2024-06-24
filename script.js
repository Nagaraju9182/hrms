document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.getElementById('searchContainer');
    const searchToggle = document.getElementById('searchToggle');
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    searchToggle.addEventListener('click', function() {
      searchContainer.classList.toggle('active');
      searchInput.focus(); 
    });
    document.addEventListener('click', function(event) {
      if (!searchContainer.contains(event.target) && event.target !== searchToggle) {
        searchContainer.classList.remove('active');
      }
    });
    
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
    
      let searchTerm = searchInput.value.trim();
      alert('Searching for: ' + searchTerm);
    });
  });
  