const drumPads = document.querySelectorAll('.drum-pad');
        drumPads.forEach(pad => {
            pad.addEventListener('click', () => {
                const audio = pad.querySelector('.clip');
                audio.currentTime = 0;
                audio.play();
                document.getElementById('display').innerText = pad.id;
            });
        });
        
        // Handle keyboard events
        document.addEventListener('keydown', (event) => {
            const key = event.key.toUpperCase();
            const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
            
            if (validKeys.includes(key)) {
                const audio = document.getElementById(key);
                const pad = audio.parentElement;
                audio.currentTime = 0;
                audio.play();
                document.getElementById('display').innerText = pad.id;
            }
        });