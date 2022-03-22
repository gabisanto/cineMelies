const el = document.getElementById('selectMesAgenda');

const box = document.getElementsByClassName('months');

for (var i = 0, len = box.length; i < len; i++) {
    box[i].style.display = 'none';
      };

el.addEventListener('change', function handleChange(event) {
for (var i = 0, len = box.length; i < len; i++) {
    if (event.target.value === box[i].id) {
        box[i].style.display = 'block';
      } else {
        box[i].style.display = 'none';
      }
    };
  
});