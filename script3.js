document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabcontent');
    const links = document.querySelectorAll('.sidebar a');
  
    tabs.forEach(tab => {
      tab.style.display = 'none';
      tab.classList.remove('active');
    });
  
    const firstTab = document.querySelector('.tabcontent');
    firstTab.style.display = 'block';
    firstTab.classList.add('active');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
    
            tabs.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active');
            });
    
            links.forEach(link => {
            link.classList.remove('active');
            });

            const targetTab = document.getElementById(targetId);
            targetTab.style.display = 'block';
            targetTab.classList.add('active');
            this.classList.add('active');
        });
    });
});
  