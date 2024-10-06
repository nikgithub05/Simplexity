document.getElementById('date-picker').addEventListener('change', function () {
    const selectedDate = new Date(this.value);

    // Define your date ranges and corresponding image URLs
    const imageMap = [
        { start: new Date('2024-03-01'), end: new Date('2024-03-31'), image: '../Assests/Result/test1.png' },
        { start: new Date('2024-04-01'), end: new Date('2024-04-30'), image: '../Assests/Result/test2.png' },
        { start: new Date('2024-05-01'), end: new Date('2024-05-31'), image: '../Assests/Result/test3.png' },
        { start: new Date('2024-06-01'), end: new Date('2024-06-30'), image: '../Assests/Result/test4.png' },
        { start: new Date('2024-07-01'), end: new Date('2024-07-31'), image: '../Assests/Result/test5.png' },
        { start: new Date('2024-08-01'), end: new Date('2024-08-31'), image: '../Assests/Result/test6.png' },
        { start: new Date('2024-09-01'), end: new Date('2024-09-30'), image: '../Assests/Result/test7.png' }
    ];

    // Find the matching image based on the selected date
    const mapImage = imageMap.find(entry => selectedDate >= entry.start && selectedDate <= entry.end);

    // Update the image source if a matching range is found
    if (mapImage) {
        document.getElementById('mapImage').src = mapImage.image;
    } else {
        document.getElementById('mapImage').src = '';
        alert('No Data Available');
    }
});

// Code to make unavailable dates visible with reduced opacity
const datePicker = document.getElementById('date-picker');
datePicker.addEventListener('click', function() {
    const unavailableDates = [
        { start: '2024-10-01', end: '2024-12-31' }
    ];
    // Add logic to disable unavailable dates with reduced visibility here.
});
