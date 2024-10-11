const btn = document.querySelector('#btn');

btn.addEventListener('click' , () =>{
        window.scrollTo({
            top : 0,
            left:0,
            behavior: 'smooth'
        })
})


//MENU-SECTION
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-button');
    const items = document.querySelectorAll('.menu-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Set default filter to 'all'
    document.querySelector('.filter-button[data-category="all"]').click();
});



//counter-section
        const coolproject = 15; // replace this part with the your numbers
        const teammembers = 69;  // replace this part with the your numbers
        const totalawards = 20; // replace this part with the your numbers
        const foodspecialities = 15;  // replace this part with the your numbers
        
        // this will make the counter to animate
        function animateCounter(id, finalCount) {
            let currentCount = 0;
            const counterElement = document.getElementById(id);
             const increment = Math.ceil(finalCount / 100);   //here you can add the speed at which you want it to move with
            
            const timer = setInterval(() => {
                currentCount += increment;
                counterElement.textContent = currentCount;
                if (currentCount >= finalCount) {
                    clearInterval(timer);
                    counterElement.textContent = finalCount;
                }
            }, 20); // you can adjust the interval
        }
        
        // this will make it that when you load or reload the page the counter starts counting
        document.addEventListener('DOMContentLoaded', () => {
            animateCounter('cool-project', coolproject);
            animateCounter('team-members', teammembers);
            animateCounter('total-awards', totalawards);
            animateCounter('food-specialities', foodspecialities);
        });