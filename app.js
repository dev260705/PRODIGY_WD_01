const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        const countdownElement = document.getElementById('countdown');
        const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

        function updateCountdown() {
            const now = new Date().getTime();
            const remainingTime = endTime - now;

            if (remainingTime > 0) {
                const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
                const seconds = Math.floor((remainingTime / 1000) % 60);

                countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
            } else {
                countdownElement.textContent = 'Offer Expired';
            }
        }

        setInterval(updateCountdown, 1000);
