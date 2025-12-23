
function selectCharacter(char) {
    document.querySelectorAll('.character').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    selectedCharacter = char;
    
    document.getElementById("startBtn").addEventListener("click", function () {
        const playerName = document.getElementById("playerName").value;
        if (!selectedCharacter) {
            alert('Pilih karakter terlebih dahulu!');
            return;
        }

        if (!playerName) {
            alert('Masukkan nama Anda!');
            return;
        }

        // Redirect ke game.html dengan parameter karakter dan nama pemain
        window.location.href = `game.html?character=${selectedCharacter}&player=${encodeURIComponent(playerName)}`;
    });
    
    
    
}
