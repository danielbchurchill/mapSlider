// JavaScript
// Assuming you have an array of image URLs ordered by year
var images = [];
var slider = document.getElementById('timeline-slider');
var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
slider.appendChild(tooltip);


for (var year = 1822; year <= 1828; year++) {
    images.push("/lib/img" + year + ".jpg");
}

noUiSlider.create(slider, {
    start: [1822],
    orientation: 'vertical', // this makes the slider vertical
    direction: 'rtl', // this reverses the slider

    step: 1,
    range: {
        'min': [1822],
        'max': [1828]
    }
});

slider.noUiSlider.on('update', function(values, handle) {
    var year = Math.round(values[handle]);
    var percentage = (year - 1822) / (1828 - 1822) * 100;
    tooltip.style.top = (100 - percentage) + '%';
    tooltip.innerText = year;
    document.getElementById('image-display').innerHTML = '<img src="' + images[year - 1822] + '">';
});