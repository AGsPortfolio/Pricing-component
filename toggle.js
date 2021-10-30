document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.getElementById('Monthly').style="display:block";
        document.getElementById('Monthly').style="row-gap:2.5%";
        document.getElementById('Annually').style="display:none";
    
      } else {
        document.getElementById('Monthly').style="display:none ";
        document.getElementById('Annually').style="display:block";
        document.getElementById('Annually').style="row-gap:2.5%";
      }
    });
  });

