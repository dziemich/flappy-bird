# Podstawy tworzenia gier w frameworku Phaser.js

## Czym jest Phaser?
Phaser jest opartym na HTML5 frameworkiem służącym do tworzenia gier. Jego celem jest usprawnienie i przyśpieszenie procesu pisania zaawansowanych, przenośnych gier. Został on stworzony po to by wykorzystać zalety nowoczesnych przeglądarek, zarówno tych mobilnych jak i desktopowych. Jedynym wymaganiem Phasera jest obsługa znacznika canvas.


## Ptak
```javascript
{
preload: () => { 
    // Załaduj obrazek ptaka
    game.load.image('bird', 'assets/bird.png'); 
},
create: () => { 
    // Ustaw kolor tła
    game.stage.backgroundColor = '#71c5cf';

    // Włącz fizykę
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Załaduj ptaka w pozycji początkowej
    this.bird = game.add.sprite(100, 245, 'bird');

    // Włącz zachowania fizyczne na ptaku.
    game.physics.arcade.enable(this.bird);

    // Dodaj grawitacji dla ptaka
    this.bird.body.gravity.y = 1000;  

    // Dodaj reakcję na naciśnięcie klawisza spacji
    var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);     
    }
}
```

### Zadanie 1
Zmodyfikuj funkcję __update()__, tak by gra restartowała się gdy ptak jest poza ekranem w pionie.

### Zadanie 2
Zmodyfikuj funkcję __jump()__, tak by ptak podskakiwał do góry. (Podpowiedź: użyj parametru velocity.y na obiekcie ptaka)

### Zadanie 3
Zmodyfikuj funkcję __restartGame()__, tak by rozpoczynała grę od nowa.


## Przygotowanie rur
Dodaj poniższą linijkę w funkcji __create()__. Stworzy ona grupę sprite'ów do której dodawać będziemy kolejne rury.
```javascript
this.pipes = game.add.group(); 
```

Uzupełnij funkcję __addOnePipe(x,y)__. 
```javascript

// Stwórz fragment rury w zadanych koordynatach [x,y]
var pipe = game.add.sprite(x, y, 'pipe');

// Dodaj stworzony wcześniej fragment do grupy sprite'ów
this.pipes.add(pipe);

// Włącz zachowania fizyczne na fragmencie
game.physics.arcade.enable(pipe);

// Dodaj parametr velocity aby rura poruszała się w lewo
pipe.body.velocity.x = -200;

// Usuń fragment, gdy znajduję się on poza ekranem
pipe.checkWorldBounds = true;
pipe.outOfBoundsKill = true;
```

### Zadanie 4
Zmodyfikuj __addRowOfPipes()__ w taki sposób, by wyświetlała 6 fragmentów wraz z przerwą gdzieś w środku. Koordynaty przerwy zostały już wylosowane i są krotką [hole, hole + 1]

## Wywoływanie funkcji tworzącej rury
Dodaj w  funkcji __create()__ timer, który co 1.5 sekundy wywoła funkcję __addRowOfPipes()__
```javascript
this.timer = game.time.events.loop(1500, this.addRowOfPipes, this); 
```

## Dodanie wyniku
W funkcji __create()__ stwórz zmienną score. Następnie umieść ją w lewym górnym rogu ekranu
```javascript
this.score = 0;
this.labelScore = game.add.text(20, 20, "0", 
    { font: "30px Arial", fill: "#ffffff" });   
```

### Zadanie 5
Zmodyfikuj kod tak, by za każdym razem gdy pojawia się nowa rura inkrementowany był wynik gracza. (Podpowiedź: aby wyświetlić wynik na ekranie należy zmodyfikować pole __this.labelScore.text__)

## Kolizje
W funkcji __update()__ włącz aktywowanie kolizji:
```javascript
game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);
```

## Dżwięki
W funkcji __preload()__ dodaj linijkę, która załaduje dźwięk skoku.
```javascript
game.load.audio('jump', 'assets/jump.wav'); 
```

Następnie w funkcji __create()__ załaduj odpowiedni dźwięk.
```javascript
this.jumpSound = game.add.audio('jump'); 
```

### Zadanie 6
Zmodyfikuj kod, tak by każdemu skokowi ptaka towarzyszył dźwięk. (Podpowiedź: na obiekcie dźwięku należy wywołać metodę __play()__)

# KONIEC, DZIĘKUJEMY ZA WSPÓLNĄ ZABAWĘ