document.addEventListener('DOMContentLoaded', () => {
    // Set the launch date (Year, Month (0-11), Day, Hour, Minute)
    // Example: 14 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14); 

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const currentTime = new Date();
        const diff = launchDate - currentTime;

        if (diff <= 0) {
            // If the countdown is finished
            document.getElementById('countdown').innerHTML = "<h3>We have Launched! Refresh the page.</h3>";
            return;
        }

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        daysEl.innerHTML = d < 10 ? '0' + d : d;
        hoursEl.innerHTML = h < 10 ? '0' + h : h;
        minutesEl.innerHTML = m < 10 ? '0' + m : m;
        secondsEl.innerHTML = s < 10 ? '0' + s : s;
    }

    // Update every second
    setInterval(updateCountdown, 1000);
    
    // Run immediately on load
    updateCountdown();
});