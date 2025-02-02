
var image = document.querySelector('.img123');
var hiddenContent = document.querySelector('.s2');
image.addEventListener('click', function() {
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display ='block';
        hiddenContent.scrollIntoView({ behavior: 'smooth' });
    } else {
        hiddenContent.style.display = 'none'; 
    }
});
