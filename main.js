// Stworzenie stanu gry
const mainState = {
    preload: () => {
        // Uruchamia się jako pierwsza w momencie startu
        // Funkcja w której ładowane są wszystkie pliki będące teksturami lub dźwiękami. Wszystkie znajdują się w folderze assets
    },

    create: () => {
        // Uruchamia się natychmiast po zakonczeniu funkcji preload, gdy zostaną załadowane wszystkie zasobie
        // Tutaj przygotowujemy sobie wszystko co będzie nam potrzebne w grze, np. inicjalizacja obiektów, lub obrazków
    },

    update: () => {
        // Ta funkcja zawiera logikę gry. Wywoływana jest ciągle, 60 razy na sekundę.
        // Zadanie 1
    },

    jump: () => {
        // Zadanie 2
    },

    restartGame: () => {
        // Zadanie 3
    },
    addOnePipe: (x, y) => {

    },
    addRowOfPipes: function() {
        // Wylosuj pozycję dziury
        var hole = Math.floor(Math.random() * 5) + 1;

        // Zadanie 4
        // Zadanie 5
    },
};

// Inicjalizacja gry
const game = new Phaser.Game(400, 490);

// Dodanie stanu do gry
game.state.add('main', mainState);

// Start gry
game.state.start('main');