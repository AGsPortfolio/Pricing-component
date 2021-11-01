document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {

      if (checkbox.checked) {
        document.getElementById('monthly').style="display:block";
        document.getElementById('monthly').style="row-gap:2.5%";
        document.getElementById('annually').style="display:none";
    
      } else {
        document.getElementById('monthly').style="display:none";
        document.getElementById('annually').style="display:block";
        document.getElementById('annually').style="row-gap:2.5%";
      }
    });
  });
