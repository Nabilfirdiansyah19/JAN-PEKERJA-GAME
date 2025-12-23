const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const overlappingDiv = document.querySelector('#overlappingDiv');
//console.log(overlappingDiv); // Pastikan elemen ditemukan
//console.log(areaTomeathouseData)

canvas.width = 1450;
canvas.height = 740;



let isActionInProgress = false;

const collisionMap = []
for(let i = 0; i < collision.length; i+=70){
    collisionMap.push(collision.slice(i,i+70));
}
const areaMap = []
for(let i = 0; i < areaData.length; i+=70){
    areaMap.push(areaData.slice(i,i+70));
}
const collisionMarketMap = []
for(let i = 0; i < collisionMarket.length; i+=70){
    collisionMarketMap.push(collisionMarket.slice(i,i+70));
}
const areaMarket = []
for(let i = 0; i < areaMarketData.length; i+=70){
    areaMarket.push(areaMarketData.slice(i,i+70));
}
const homeCollision = []
for(let i = 0; i < homeCollisionData.length; i+=70){
    homeCollision.push(homeCollisionData.slice(i,i+70));
}
const areaHouseMuncul = []
for(let i = 0; i < areaHomeData.length; i+=70){
    areaHouseMuncul.push(areaHomeData.slice(i,i+70));
}
const collisionForestMap = []
for(let i = 0; i < collisionForestData.length; i+=70){
    collisionForestMap.push(collisionForestData.slice(i,i+70));
}
const collisionForestMuncul = []
for(let i = 0; i < collisionForestData.length; i+=70){
    collisionForestMuncul.push(collisionForestData.slice(i,i+70));
}
const collisionMeathouseMap = []
for(let i = 0; i < collisionMeathouseData.length; i+=70){
    collisionMeathouseMap.push(collisionMeathouseData.slice(i,i+70));
}
const collisionFarmMap = []
for(let i = 0; i < collisionFarmData.length; i+=70){
    collisionFarmMap.push(collisionFarmData.slice(i,i+70));
}
const collisionCaveMap = []
for(let i = 0; i < collisionCaveData.length; i+=70){
    collisionCaveMap.push(collisionCaveData.slice(i,i+70));
}
const collisionCaveMuncul = []
for(let i = 0; i < collisionCaveData.length; i+=70){
    collisionCaveMuncul.push(collisionCaveData.slice(i,i+70));
}



class Sprite {
    constructor({ position, image }) {
        this.position = position;
        this.image = image;
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Warna merah dengan transparansi 30%
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}


class Boundary {
    static width = 30
    static height = 30
    constructor({position}){
        this.position = position
        this.width = 30
        this.height = 30
    }

    draw(){
        c.fillStyle = 'rgba(255, 0, 0, 0)'; // Warna merah dengan transparansi 30%
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class BoundaryMarket {
    static width = 19.9
    static height = 19
    constructor({position}){
        this.position = position
        this.width = 19.8
        this.height = 19
    }

    draw(){
        c.fillStyle = 'rgba(255, 0, 0, 0)'; // Warna merah dengan transparansi 30%
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class AreaMarket {
    static width = 19.9
    static height = 19
    constructor({position}){
        this.position = position
        this.width = 19.8
        this.height = 19
    }

    draw(){
        c.fillStyle = 'rgba(255, 0, 0, 0)'; // Warna merah dengan transparansi 30%
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class BoundaryHouse {
    static width = 20.7;
    static height = 19;

    constructor({ position }) {
        this.position = position;
        this.width = BoundaryHouse.width;
        this.height = BoundaryHouse.height;
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0)'; // Warna hijau transparan
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}


const boundaries = []
const offset = {
    x: -350,
    y: 0
}

collisionMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 7226)
            boundaries.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }}))
    })
})
const boundariesHome = []
const areaHouseMap = []
homeCollision.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1555)
            boundariesHome.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width,
                y: i * BoundaryHouse.height
            }}))
    })
})
homeCollision.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1024)
            areaHouseMap.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width - 10,
                y: i * BoundaryHouse.height
            }}))
    })
})
function drawAreaHouseMap() {
    areaHouseMap.forEach(boundaryMap => {
        boundaryMap.draw();
    });
}

const boundariesForest = []
const areaForestMap = []
collisionForestMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 7522)
            boundariesForest.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width,
                y: i * BoundaryHouse.height-5
            }}))
    })
})
collisionForestMuncul.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1024)
            areaForestMap.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width,
                y: i * BoundaryHouse.height-5
            }}))
    })
})

const boundariesMeathouse = []
const areaMeathouseMuncul = []
collisionMeathouseMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 8976)
            boundariesMeathouse.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width + 2,
                y: i * BoundaryHouse.height  
        }}))
    })
})
collisionMeathouseMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1024)
            areaMeathouseMuncul.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width,
                y: i * BoundaryHouse.height
        }}))
    })
})

const boundariesFarm = []
const areaFarmMuncul = []
collisionFarmMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 7538)
            boundariesFarm.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width,
                y: i * BoundaryHouse.height - 10
        }}))
    })
})
collisionFarmMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1024)
            areaFarmMuncul.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width,
                y: i * BoundaryHouse.height - 10
        }}))
    })
})

const boundariesCave = []
const areaCaveMuncul = []
collisionCaveMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 7226)
            boundariesCave.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width - 3  ,
                y: i * BoundaryHouse.height - 7
        }}))
    })
})
collisionCaveMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1024)
            areaCaveMuncul.push(new BoundaryHouse({position: {
                x: j * BoundaryHouse.width,
                y: i * BoundaryHouse.height - 7
        }}))
    })
})



const batasMarket = []
const jarak = {
    x: 20 ,
    y: -50
}  
collisionMarketMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 9296)
            batasMarket.push(new BoundaryMarket({position: {
                x: j * BoundaryMarket.width + 20,
                y: i * BoundaryMarket.height
            }}))
    })
})

function drawCollisionMarketMap() {
    batasMarket.forEach(boundaryMap => {
        boundaryMap.draw();
    });
}

const areaMarketMap = []
areaMarket.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2048)
            areaMarketMap.push(new AreaMarket({position: {
                x: j * AreaMarket.width + 30,
                y: i * AreaMarket.height
            }}))
    })
})

function drawAreaMarketMap() {
    areaMarketMap.forEach(boundaryMap => {
        boundaryMap.draw();
    });
}



const area = []
const areaHouse = []
const areaMeathouse = []
const areaFarm = []
const areaCave = []
const areaForest = []

areaMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1024)
            area.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }}))
    })
})
areaMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 512)
            areaHouse.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }}))
    })
})
areaMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 4096)
            areaCave.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }}))
    })
})
areaMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 926)
            areaMeathouse.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }}))
    })
})
areaMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 9296)
            areaFarm.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }}))
    })
})
areaMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2048)
            areaForest.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }}))
    })
})


// Ini buat ngeload gambar map
const image = new Image();
image.src = '../designmap/jlnawalzoom.png';
console.log(image);

// Ambil nama karakter
const urlParams = new URLSearchParams(window.location.search);
const character = urlParams.get("character");
console.log("Karakter dari URL:", character);

// Ambil nama player dari URL parameter
const playerName = urlParams.get("player");
console.log("Nama Pemain:", playerName);

// Ini buat ngeload gambar character
const playerImage = {
    down: new Image(),
    up: new Image(),
    left: new Image(),
    right: new Image(),
}
playerImage.down.src = "../image/" + character + ".png";
playerImage.up.src = `../image/${character.replace('down', 'up')}.png`;
playerImage.left.src = `../image/${character.replace('down', 'left')}.png`;
playerImage.right.src = `../image/${character.replace('down', 'right')}.png`;


const workImage = new Image();
function loadWorkImage(mapType) {
    //const workImage = new Image();
    workImage.src = `../image/${character}${mapType}.png`; // Ganti gambar berdasarkan map
    workImage.onload = () => {
        console.log(`Gambar kerja untuk ${mapType} berhasil dimuat.`);
    };
    workImage.onerror = () => {
        console.error(`Gagal memuat gambar kerja untuk ${mapType}.`);
    };
    return workImage;
}


let currentDirection = 'down'

function drawBar(x, y, barWidth, barHeight, percentage, color, logo) {
    const logoSize = 40; 

    // Gambar logo masing-masing bar
    c.drawImage(logo, x - logoSize - 10, y - 9, logoSize, logoSize);

    // Bar awalnya yang abu-abu
    c.fillStyle = '#555'; 
    c.fillRect(x, y, barWidth, barHeight);

    // Bar berwarna yang menggambarkan status
    c.fillStyle = color;
    c.fillRect(x, y, (barWidth * percentage) / 100, barHeight);

    // Border bar
    c.strokeStyle = '#000'; 
    c.strokeRect(x, y, barWidth, barHeight);

    // Teks status di tengah bar
    c.fillStyle = '#fff'; 
    c.font = '16px Arial'; 
    c.textAlign = 'center'; 
    c.textBaseline = 'middle'; 
    c.fillText(`${percentage.toFixed(1)}%`, x + barWidth / 2, y + barHeight / 2);
}


// Preload logo untuk status bar agar bisa dipakai di setiap frame
const healthLogo = new Image();
healthLogo.src = '../image/health.png';

const energyLogo = new Image();
energyLogo.src = '../image/energy.png';

const hungerLogo = new Image();
hungerLogo.src = '../image/hunger.png';

const hygieneLogo = new Image();
hygieneLogo.src = '../image/hygiene.png';

const happinessLogo = new Image();
happinessLogo.src = '../image/happiness.png';

const goldLogo = new Image();
goldLogo.src = '../image/gold.png';

// ini buat tempat jual
const sellerNPC = {
    position: { x: 695, y: 150   }, 
    width: 40,
    height: 40
};

// ini buat tempat beli
const shelves = [
    { position: { x: 265, y: 250 }, category: 'HEALTH' },
    { position: { x: 370, y: 250 }, category: 'FOOD' },
    { position: { x: 495, y: 250 }, category: 'WORKITEMS' },
    { position: { x: 845, y: 250 }, category: 'TOYS' },
    { position: { x: 970, y: 250 }, category: 'TOOLS' },
    { position: { x: 1115, y: 250 }, category: 'MISC' }
];

// Variabel setiap bar
let health = 50;
let energy = 50;
let hunger = 50;
let hygiene = 50;
let happiness = 50;
let gold = 250;

// Variabel waktu
let gameMinutes = 0;
let gameHours = 6; 
let gameDays = 1;


let currentOverlay = { r: 0, g: 0, b: 0, a: 0 }; 
let targetOverlay = { r: 0, g: 0, b: 0, a: 0 }; 

// Variabel posisi karakter
let characterX = 685; // Initial character X position
let characterY = 70; // Initial character Y position
const startX = 705;
const startY = 254;

characterWidth = 35;
characterHeight = 35;

const frameWidth =16 ; // Lebar satu frame
const frameHeight =16; // Tinggi satu frame.

let currentFrame = 0; // Frame saat ini
const totalFrames = 4; // Total jumlah frame
const frameDuration = 120; // Durasi setiap frame dalam milidetik
let lastFrameTime = 0; // Waktu terakhir frame diperbarui

// Definisikan offset (jumlah pixel yang perlu dilewati dari atas)
const spriteOffsetY = 1; // Ganti dengan nilai yang sesuai



// Posisi background
let backgroundX = -350; 
let backgroundY = 0  ;
let startbackgroundX = -350;
let startbackgroundY = 0;



//level item
let pickaxe=1;
let axe=1;
let hoe=1;
let cleaver=1;

// Keyboard input tracking
let keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

let lastKey = ''
// Event listeners for keyboard input
window.addEventListener('keydown', (event) => {
    if (isActionInProgress) return;
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            keys.up = true;
            lastKey = 'w'
            currentDirection = 'up';
            break;
        case 'ArrowDown':
        case 's':
            keys.down = true;
            lastKey = 's'
            currentDirection = 'down';
            break;
        case 'ArrowLeft':
        case 'a':
            keys.left = true;
            lastKey = 'a'
            currentDirection = 'left';
            break;
        case 'ArrowRight':
        case 'd':
            keys.right = true;
            lastKey = 'd'
            currentDirection = 'right';
            break;
    }
});

window.addEventListener('keyup', (event) => {
    if (isActionInProgress) return;
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            case 'W':
            keys.up = false;
            break;
        case 'ArrowDown':
        case 's':
            keys.down = false;
            break;
        case 'ArrowLeft':
        case 'a':
            keys.left = false;
            break;
        case 'ArrowRight':
        case 'd':
            keys.right = false;
            break;
    }
});

// Function to display greeting and time
function displayTime() {
    console.log("Displaying time...");

    let greeting = '';
    if (gameHours >= 6 && gameHours < 12) {
        greeting = 'Good Morning';
    } else if (gameHours >= 12 && gameHours < 18) {
        greeting = 'Good Afternoon';
    } else if (gameHours >= 18 && gameHours < 21) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }

    const timeText = `Day ${gameDays}, ${String(gameHours).padStart(2, '0')}:${String(gameMinutes).padStart(2, '0')}`;

    c.fillStyle = 'white'; 
    c.font = '20px Arial';
    c.textAlign = 'left';
    c.textBaseline = 'top';
    c.fillText(`${greeting}, ${playerName} - ${timeText}`, 50, 50);
}

// function nunjukin gold
function displayGold() {
    c.fillStyle = 'white'; 
    c.font = '20px sans-serif';
    c.textAlign = 'right';
    c.textBaseline = 'top';
    c.drawImage(goldLogo, canvas.width - 65, 5, 50, 50);
    c.fillText(`${gold}`, canvas.width - 65, 22); 
}

// Function to update time
function updateTime() {
    gameMinutes += 1;

    if (gameMinutes >= 60) {
        gameMinutes = 0;
        gameHours += 1;
    }

    if (gameHours >= 24) {
        gameHours = 0;
        gameDays += 1;
    }
}


function lerp(start, end, t) {
    return start + (end - start) * t;
}

// function buat ngeupdate overlaynya
function updateOverlay() {
    currentOverlay.r = lerp(currentOverlay.r, targetOverlay.r, 0.1);
    currentOverlay.g = lerp(currentOverlay.g, targetOverlay.g, 0.1);
    currentOverlay.b = lerp(currentOverlay.b, targetOverlay.b, 0.1);
    currentOverlay.a = lerp(currentOverlay.a, targetOverlay.a, 0.1);

    c.fillStyle = `rgba(${Math.round(currentOverlay.r)}, ${Math.round(currentOverlay.g)}, ${Math.round(currentOverlay.b)}, ${currentOverlay.a})`;
    c.fillRect(0, 0, canvas.width, canvas.height);
}

// Event listeners for dpad button clicks
document.querySelector('.dpad-up').addEventListener('mousedown', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.up = true;
});
document.querySelector('.dpad-down').addEventListener('mousedown', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.down = true;
});
document.querySelector('.dpad-left').addEventListener('mousedown', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.left = true;
});
document.querySelector('.dpad-right').addEventListener('mousedown', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.right = true;
});

// Event listeners for when dpad button is released
document.querySelector('.dpad-up').addEventListener('mouseup', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.up = false;
});
document.querySelector('.dpad-down').addEventListener('mouseup', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.down = false;
});
document.querySelector('.dpad-left').addEventListener('mouseup', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.left = false;
});
document.querySelector('.dpad-right').addEventListener('mouseup', () => {
    if (isGameOver) return; // Abaikan input jika game over
    keys.right = false;
});

// Optionally, you can also listen to the `mouseleave` event in case the mouse goes outside the dpad.
document.querySelectorAll('.dpad-button').forEach(button => {
    button.addEventListener('mouseleave', () => {
        keys.up = keys.down = keys.left = keys.right = false;
    });
});



function checkCollision(newX, newY) {
    return boundaries.some(boundary => {
        return (
            newX < boundary.position.x + Boundary.width &&
            newX + characterWidth > boundary.position.x &&
            newY < boundary.position.y + Boundary.height &&
            newY + characterHeight > boundary.position.y
        );
    });
}

function checkMarketCollision(newX, newY) {
    return batasMarket.some(boundaryMap => {
        return (
            newX < boundaryMap.position.x + BoundaryMarket.width &&
            newX + characterWidth > boundaryMap.position.x &&
            newY < boundaryMap.position.y + BoundaryMarket.height &&
            newY + characterHeight > boundaryMap.position.y
        );
    });
}
function checkHouseCollision(newX, newY) {
    return boundariesHome.some(boundaryhouse => {
        return (
            newX < boundaryhouse.position.x + BoundaryHouse.width &&
            newX + characterWidth > boundaryhouse.position.x &&
            newY < boundaryhouse.position.y + BoundaryHouse.height &&
            newY + characterHeight > boundaryhouse.position.y
        );
    });
}
function checkForestCollision(newX, newY) {
    return boundariesForest.some(boundaryforest  => {
        return (
            newX < boundaryforest.position.x + BoundaryHouse.width &&
            newX + characterWidth > boundaryforest.position.x &&
            newY < boundaryforest.position.y + BoundaryHouse.height &&
            newY + characterHeight > boundaryforest.position.y
        );
    });
}
function checkMeathouseCollision(newX, newY) {
    return boundariesMeathouse.some(boundarymeathouse  => {
        return (
            newX < boundarymeathouse.position.x + BoundaryHouse.width &&
            newX + characterWidth > boundarymeathouse.position.x &&
            newY < boundarymeathouse.position.y + BoundaryHouse.height &&
            newY + characterHeight > boundarymeathouse.position.y
        );
    });
}
function checkFarmCollision(newX, newY) {
    return boundariesFarm.some(boundaryfarm  => {
        return (
            newX < boundaryfarm.position.x + BoundaryHouse.width &&
            newX + characterWidth > boundaryfarm.position.x &&
            newY < boundaryfarm.position.y + BoundaryHouse.height &&
            newY + characterHeight > boundaryfarm.position.y
        );
    });
}
function checkCaveCollision(newX, newY) {
    return boundariesCave.some(boundarycave  => {
        return (
            newX < boundarycave.position.x + BoundaryHouse.width &&
            newX + characterWidth > boundarycave.position.x &&
            newY < boundarycave.position.y + BoundaryHouse.height &&
            newY + characterHeight > boundarycave.position.y
        );
    });
}

// ini gambar tempat jual
function drawSellerNPC() {
    c.globalAlpha = 0;
    c.fillStyle = 'lightbrown'; 
    c.fillRect(sellerNPC.position.x, sellerNPC.position.y, sellerNPC.width, sellerNPC.height);
    c.globalAlpha = 1.0; // biar alphanya 1 lgi buat yang lain

    c.fillStyle = 'Black';
    c.font = '16px Arial';
    c.fillText('SELL ITEMS', sellerNPC.position.x + 17, sellerNPC.position.y - 85);
}

// ini gambar tempat beli
function drawShelves() {
    shelves.forEach(shelf => {
        c.globalAlpha = 0;
        c.fillStyle = 'brown';
        c.fillRect(shelf.position.x, shelf.position.y, 50, 50); 
        c.globalAlpha = 1.0; // biar alphanya 1 lgi buat yang lain

        c.fillStyle = 'BLACK';
        c.font = '16px bold Arial';
        c.fillText(shelf.category, shelf.position.x + 30, shelf.position.y - 50); 
    });
}

let isSellMenuOpen = false; // buat nentuin lgi buka menu ga

// buat ngecek collision sama seller
function checkSellerCollision() {
    const isInsideSellerBox = (
        characterX < sellerNPC.position.x + sellerNPC.width &&
        characterX + characterWidth > sellerNPC.position.x &&
        characterY < sellerNPC.position.y + sellerNPC.height &&
        characterY + characterHeight > sellerNPC.position.y
    );

    if (isInsideSellerBox) {
        if (!isSellMenuOpen) {
            openSellMenu(); 
            isSellMenuOpen = true;
        }
    } else {
        if (isSellMenuOpen) {
            closeSellMenu(); 
            isSellMenuOpen = false;
        }
    }
}

let isBuyMenuOpen = false; 
let currentShelfCategory = null; 

// buat ngecek collision sama shelf
function checkShelfCollision() {
    let isInsideAnyShelf = false;

    shelves.forEach(shelf => {
        const isInsideShelfBox = (
            characterX < shelf.position.x + 50 && 
            characterX + characterWidth > shelf.position.x &&
            characterY < shelf.position.y + 50 && 
            characterY + characterHeight > shelf.position.y
        );

        if (isInsideShelfBox) {
            isInsideAnyShelf = true;

            // buka buy menu
            if (!isBuyMenuOpen || currentShelfCategory !== shelf.category) {
                openBuyMenu(shelf.category);
                isBuyMenuOpen = true;
                currentShelfCategory = shelf.category;
            }
        }
    });

    // tutup buy menu kalo ga ada di shelf
    if (!isInsideAnyShelf && isBuyMenuOpen) {
        closeBuyMenu();
        isBuyMenuOpen = false;
        currentShelfCategory = null;
    }
}

// function buka sell menu
function openSellMenu() {
    console.log('Opening sell menu...');
    const sellMenu = document.createElement('div');
    sellMenu.id = 'sellMenu';
    sellMenu.style.position = 'absolute';
    sellMenu.style.top = '150px';
    sellMenu.style.left = '550px';
    sellMenu.style.width = '300px';
    sellMenu.style.height = '220px';
    sellMenu.globalAlpha = 0.8;
    sellMenu.style.backgroundColor = 'rgba(229, 190, 110, 0.8)';
    sellMenu.globalAlpha = 1;
    sellMenu.style.color = 'white';
    sellMenu.style.padding = '20px';
    sellMenu.style.border = '2px solid white';
    sellMenu.style.zIndex = '1000';

    const itemsToSell = ['Wood', 'Stone', 'Grains', 'Meat'];
    itemsToSell.forEach(itemName => {
        const itemDiv = document.createElement('div');
        itemDiv.style.display = 'flex';
        itemDiv.style.alignItems = 'center';
        itemDiv.style.marginBottom = '10px';

        // tambahin gambar di dalam menu
        const itemImage = document.createElement('img');
        itemImage.src = `../image/item/${itemName.toLowerCase()}.png`; 
        itemImage.alt = itemName;
        itemImage.style.width = '50px';
        itemImage.style.height = '50px';
        itemImage.style.marginRight = '10px';
        itemImage.style.cursor = 'pointer';

        // click buat jual
        itemImage.onclick = () => {
            sellItem(itemName, 1); 
            updateSellMenu(); 
        };

        // nambahin nama sama harga
        const itemInfo = document.createElement('div');
        itemInfo.innerHTML = `
            <strong>${itemName}</strong><br>
            <span>${sellPrices[itemName]} gold</span>
        `;

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemInfo);
        sellMenu.appendChild(itemDiv);
    });

    document.body.appendChild(sellMenu);
}

// ini function tutup sell menu
function closeSellMenu() {
    const sellMenu = document.getElementById('sellMenu');
    if (sellMenu) {
        document.body.removeChild(sellMenu); 
    }
}

// ini function jual item
function sellItem(itemName, quantity) {
    const itemIndex = inventory.findIndex(item => item.name === itemName);

    if (itemIndex > -1) {
        const item = inventory[itemIndex];

        if (item.quantity >= quantity) {
            // ngurangin jumlah itemny
            item.quantity -= quantity;

            // nambahin gold sesuai item
            if (sellPrices[itemName]) {
                gold += sellPrices[itemName] * quantity;
                console.log(`${quantity} ${itemName}(s) sold for ${sellPrices[itemName] * quantity} gold. Current gold: ${gold}`);
            } else {
                console.log(`No sell price found for ${itemName}.`);
            }

            // hilangin item klo 0
            if (item.quantity <= 0) {
                inventory.splice(itemIndex, 1);
            }


            updateInventoryUI();
        } else {
            console.log(`You don't have enough ${itemName} to sell. You only have ${item.quantity}.`);
            alert(`You don't have enough ${itemName} to sell. You only have ${item.quantity}.`);
        }
    } else {
        console.log(`You don't have any ${itemName} to sell.`);
        alert(`You don't have any ${itemName} to sell.`);
    }
}

// ini function buat buka buy menu
function openBuyMenu(category) {
    console.log(`Opening buy menu for category: ${category}`);
    
    // ngedelete buy menu kalo ada
    const existingMenu = document.getElementById('buyMenu');
    if (existingMenu) {
        document.body.removeChild(existingMenu);
    }

    // bikin buy menu
    const buyMenu = document.createElement('div');
    buyMenu.id = 'buyMenu';
    buyMenu.style.position = 'absolute';
    buyMenu.style.top = '150px';
    buyMenu.style.left = '580px';
    buyMenu.style.width = '250px';
    buyMenu.style.height = '300px';
    buyMenu.style.backgroundColor = 'rgba(229, 190, 10, 0.8)';
    buyMenu.style.color = 'white';
    buyMenu.style.padding = '10px';
    buyMenu.style.border = '2px solid white';
    buyMenu.style.zIndex = '1000';
    buyMenu.style.overflowY = 'auto'; 

    // tambahin tulisan category
    const title = document.createElement('h3');
    title.innerText = category.charAt(0).toUpperCase() + category.slice(1); 
    title.style.textAlign = 'center';
    title.style.marginBottom = '10px';
    buyMenu.appendChild(title);

    // nambahin item sesuai category
    const items = shopItems[category.toLowerCase()];
    if (!items) {
        console.error(`No items found for category: ${category}`);
        return;
    }

    for (const itemName in items) {
        const item = items[itemName];
        const itemDiv = document.createElement('div');
        itemDiv.style.display = 'flex';
        itemDiv.style.alignItems = 'center';
        itemDiv.style.marginBottom = '10px';

        // tambahin gambar di dalam menu
        const itemImage = document.createElement('img');
        itemImage.src = `../image/item/${itemName.toLowerCase().replace(/\s+/g, '_')}.png`; 
        itemImage.alt = itemName;
        itemImage.style.width = '40px';
        itemImage.style.height = '40px';
        itemImage.style.marginRight = '10px';
        itemImage.style.cursor = 'pointer';

        // pencet buat beli
        itemImage.onclick = () => {
            buyItem(category.toLowerCase(), itemName);
        };

        // nambahin nama sama harga
        const itemInfo = document.createElement('div');
        itemInfo.innerHTML = `
            <strong>${itemName}</strong><br>
            <span>${item.price} gold</span>
        `;

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemInfo);
        buyMenu.appendChild(itemDiv);
    }
    document.body.appendChild(buyMenu);
}

// function buat tutup buy menu
function closeBuyMenu() {
    const buyMenu = document.getElementById('buyMenu');
    if (buyMenu) {
        document.body.removeChild(buyMenu);
    }
}

function updateBars() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    const mapWidth = image.width;
    const mapHeight = image.height;
    
    // Ukuran tengah layar untuk pergerakan kamera
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 30;

    
    
    

    // 🔹 Pergerakan ke atas
    // Update character position based on input
    if (keys.up && characterY > 0 && lastKey === 'w') {
        let newY = characterY - 4;
        if (!checkCollision(characterX, newY)) { 
            if (characterY > centerY || backgroundY >= 0) {
                characterY = newY; 
            } else if (backgroundY < 0) {
                backgroundY += 4;
                boundaries.forEach(boundary => boundary.position.y += 4);
                area.forEach(boundary => boundary.position.y += 4);
                areaHouse.forEach(boundary => boundary.position.y += 4);
                areaMeathouse.forEach(boundary => boundary.position.y += 4);
                areaFarm.forEach(boundary => boundary.position.y += 4);
                areaCave.forEach(boundary => boundary.position.y += 4);
                areaForest.forEach(boundary => boundary.position.y += 4);
            }
        }
    }
    if (keys.down && lastKey === 's' && characterY < mapHeight - 10) {
        let newY = characterY + 4;
        if (!checkCollision(characterX, newY)) { 
            if (characterY <= centerY || backgroundY <= -(mapHeight - canvas.height)) {
                characterY = newY; 
            } else {
                backgroundY -= 4;
                boundaries.forEach(boundary => boundary.position.y -= 4);
                area.forEach(boundary => boundary.position.y -= 4);
                areaHouse.forEach(boundary => boundary.position.y -= 4);
                areaMeathouse.forEach(boundary => boundary.position.y -= 4);
                areaFarm.forEach(boundary => boundary.position.y -= 4);
                areaCave.forEach(boundary => boundary.position.y -= 4);
                areaForest.forEach(boundary => boundary.position.y -= 4);
            }
        }
    }
    if (keys.left && lastKey === 'a' && characterX > 0) {
        let newX = characterX - 4;
        if (!checkCollision(newX, characterY)) { 
            if (characterX > centerX || backgroundX >= 0) {
                characterX = newX; 
            } else if (backgroundX < 0) {
                backgroundX += 4;
                boundaries.forEach(boundary => boundary.position.x += 4);
                area.forEach(boundary => boundary.position.x += 4);
                areaHouse.forEach(boundary => boundary.position.x += 4);
                areaMeathouse.forEach(boundary => boundary.position.x += 4);
                areaFarm.forEach(boundary => boundary.position.x += 4);
                areaCave.forEach(boundary => boundary.position.x += 4);
                areaForest.forEach(boundary => boundary.position.x += 4);
            }
        }
    }
    if (keys.right && lastKey === 'd' && characterX < mapWidth - 60) {
        let newX = characterX + 4;
        if (!checkCollision(newX, characterY)) { 
            if (characterX < centerX || backgroundX <= -(mapWidth - canvas.width)) {
                characterX = newX; 
            } else {
                backgroundX -= 4;
                boundaries.forEach(boundary => boundary.position.x -= 4);
                area.forEach(boundary => boundary.position.x -= 4);
                areaHouse.forEach(boundary => boundary.position.x -= 4);
                areaMeathouse.forEach(boundary => boundary.position.x -= 4);
                areaFarm.forEach(boundary => boundary.position.x -= 4);
                areaCave.forEach(boundary => boundary.position.x -= 4);
                areaForest.forEach(boundary => boundary.position.x -= 4);
            }
        }
    }
    
    



    // 🔹 Pastikan background tidak keluar dari batas peta
    backgroundX = Math.max(-(mapWidth - canvas.width), Math.min(0, backgroundX));
    backgroundY = Math.max(-(mapHeight - canvas.height), Math.min(0, backgroundY));

    // 🔹 Gambar ulang background sesuai posisi kamera
    c.drawImage(image, backgroundX, backgroundY);

    // 🔹 Gambar ulang batas (jika diperlukan)
    

    for(let i = 0; i < boundaries.length; i++){
        const boundary = boundaries[i]
        if(kotakCollision({
            kotak2: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y
            }}
        })) {
            console.log('colliding');
        }
    }

    // Gambar ulang karakter
    c.drawImage(
        playerImage[currentDirection],
        0,
        (currentFrame * frameHeight) + spriteOffsetY,
        frameWidth,
        frameHeight,
        characterX,
        characterY,
        40,
        40
    );
  

    // 🔹 Gambar ulang status bar
    drawBar(50, 20, 200, 20, health, '#4caf50', healthLogo);
    drawBar(310, 20, 200, 20, energy, '#2196f3', energyLogo);
    drawBar(570, 20, 200, 20, hunger, '#ff9800', hungerLogo);
    drawBar(830, 20, 200, 20, hygiene, '#9c27b0', hygieneLogo);
    drawBar(1090, 20, 200, 20, happiness, '#ffc107', happinessLogo);

    if (gameHours >= 6 && gameHours < 12) { // pago
        targetOverlay = { r: 255, g: 255, b: 240, a: 0.08 };
        } else if (gameHours >= 12 && gameHours < 16) { // siang
            targetOverlay = { r: 0, g: 0, b: 0, a: 0 };
        } else if (gameHours >= 16 && gameHours < 18) { // sunset
            targetOverlay = { r: 255, g: 94, b: 77, a: 0.3 };
        } else if (gameHours >= 18 && gameHours < 21) { // sore
            targetOverlay = { r: 70, g: 130, b: 180, a: 0.3 };
        } else { // malam
            targetOverlay = { r: 10, g: 10, b: 30, a: 0.6 };
        }
    
    // perbarui overlay biar halus transisinya
    updateOverlay();

    // gambar ulang gold
    displayGold();

    console.log(keys)
    
    // 🔹 Gambar waktu di atas elemen lain
    displayTime();
    
}




function initializeGame() {
    
    console.log("Initializing game...");
    updateInventoryUI();
        
    // Gambar latar belakang
    c.drawImage(image, backgroundX, backgroundY);

    // Gambar ulang karakter
    c.drawImage(
        playerImage,
        0,
        (currentFrame * frameHeight) + spriteOffsetY,
        frameWidth,
        frameHeight,
        characterX,
        characterY,
        40,
        40
    );
    
    
    // Gambar bar dan waktu
    updateBars();
    
    // Mulai interval untuk memperbarui elemen
    
    const gameInterval = setInterval(() => {
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        // health berkurang berdasarkan kondisinya
        if (hunger === 0) health = Math.max(0, health - (3/60)); 
        if (energy === 0) health = Math.max(0, health - (4/60)); 
        if (hygiene === 0) health = Math.max(0, health - (1/60)); 
        if (happiness === 0) health = Math.max(0, health - (2/60)); 

        // ngecek nyawa kalo 0 gameover
        if (health === 0) {
            clearInterval(gameInterval); 
            gameOver(); 
            return;
        }

        updateBars(); // Gambar ulang semua elemen
        updateTime(); // Perbarui waktu
    }, 1000);
}

// Melacak apakah game sudah berakhir
let isGameOver = false; 


//const movables = [testBoundary]

function kotakCollision({ kotak2}){
    return (
        characterX < kotak2.position.x + kotak2.width && 
        characterX + 40 > kotak2.position.x &&
        characterY < kotak2.position.y + kotak2.height &&
        characterY + 40 > kotak2.position.y);
}

const areaEvent = {
    initiated: false
}

let lastUpdateTime = Date.now();
// Fungsi untuk memperbarui posisi karakter dan gambar ulang
function animate() {
    const animationId = window.requestAnimationFrame(animate);
    // Jika game sudah berakhir, hentikan animasi
    if (isGameOver) return; 

    if (areaEvent.initiated) {
        console.log('Animation stopped due to area event.');
        window.cancelAnimationFrame(animationId) // Hentikan animasi saat ini
        
        if (areaEvent.initiated) {
            console.log('Animation stopped due to area event.');
            window.cancelAnimationFrame(animationId); // Hentikan animasi saat ini
            
            gsap.to('#overlappingDiv', {
                opacity: 1,
                duration: 0.7,
                repeat: 1,
                yoyo: true,
                //ease: 'power1.inOut',
                onComplete() {
                    gsap.to('#overlappingDiv', {
                        opacity: 0,
                        duration: 0.7,
                        onComplete(){
                            if (targetMap === 'house') {
                                housemap(); // Panggil fungsi housemap jika targetMap adalah 'house'
                            } else if (targetMap === 'market') {
                                newMap(); // Panggil fungsi newMap untuk map lainnya
                            } else if (targetMap === 'forest') {
                                forestmap(); // Panggil fungsi forestMap jika targetMap adalah 'forest'
                            } else if (targetMap === 'meathouse') {
                                meathousemap(); // Panggil fungsi meathousemap jika targetMap adalah '
                            } else if (targetMap === 'cave') {
                                cavemap(); // Panggil fungsi caveMap jika targetMap adalah 'cave'
                            } else if (targetMap === 'farm') {
                                farmmap(); // Panggil fungsi farmmap jika targetMap adalah 'farm'
                            }
                            gsap.to('#overlappingDiv', {
                                opacity: 0,
                                duration: 0.7
                            })
                            //newMap();
                        }
                    })
                }
            });
            
        }  return; // Hentikan animasi
    }// Hentikan animasi

    for(let i = 0; i < boundaries.length; i++){
        const boundary = boundaries[i]
        if(kotakCollision({
            kotak2: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y
            }}
        })) {
            console.log('colliding');
        }
    }
    updateBars();
    

    const now = Date.now();
    if (now - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % totalFrames;
        lastFrameTime = now;
    }
    if (now - lastUpdateTime >= 1000) { // Perbarui setiap 1 detik
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        if (hunger === 0) health = Math.max(0, health - (3 / 60));
        if (energy === 0) health = Math.max(0, health - (4 / 60));
        if (hygiene === 0) health = Math.max(0, health - (1 / 60));
        if (happiness === 0) health = Math.max(0, health - (2 / 60));

        if (health === 0) {
            gameOver();
            return;
        }

        updateTime(); // Perbarui waktu
        lastUpdateTime = now;
    }

    boundaries.forEach((boundary) => {
        boundary.draw(backgroundX, backgroundY)
    })
    //console.log("Position of Area Meathouse:", areatomeathouse.map(area => area.position));
    area.forEach((Area) => {
        Area.draw(backgroundX, backgroundY)
    })
    areaHouse.forEach((AreaHouse) => {
        AreaHouse.draw(backgroundX, backgroundY)
    })
    areaMeathouse.forEach((AreaMeathouse) => {
        AreaMeathouse.draw(backgroundX, backgroundY)
    })
    areaFarm.forEach((AreaFarm) => {
        AreaFarm.draw(backgroundX, backgroundY)
    })
    areaCave.forEach((AreaCave) => {
        AreaCave.draw(backgroundX, backgroundY)
    })
    areaForest.forEach((AreaForest) => {
        AreaForest.draw(backgroundX, backgroundY)
    })

    // Gambar ulang karakter
    c.drawImage(
        playerImage[currentDirection],
        0,
        (currentFrame * frameHeight) + spriteOffsetY,
        frameWidth,
        frameHeight,
        characterX,
        characterY,
        40,
        40
    );
    

    for(let i = 0; i < area.length; i++){
        const Area = area[i]
        const overlappingArea = 
            (Math.min(characterX + characterWidth, Area.position.x + Area.width) - Math.max(characterX, Area.position.x)) *
            (Math.min(characterY + characterHeight, Area.position.y + Area.height) - Math.max(characterY, Area.position.y));
        if(kotakCollision({
            kotak2: Area
        }) && overlappingArea > (characterWidth * characterHeight) / 3 &&
            Math.random() < 0.2  // 50% chance to trigger the event
        ) {
            console.log('activate area');
            areaEvent.initiated = true; // Set areaEvent initiated to true
            targetMap = 'market';
        }
    }
    for(let i = 0; i < areaHouse.length; i++){
        const Areahouse = areaHouse[i]
        const overlappingArea = 
            (Math.min(characterX + characterWidth, Areahouse.position.x + Areahouse.width) - Math.max(characterX, Areahouse.position.x)) *
            (Math.min(characterY + characterHeight, Areahouse.position.y + Areahouse.height) - Math.max(characterY, Areahouse.position.y));
        if(kotakCollision({
            kotak2: Areahouse
        }) && overlappingArea > (characterWidth * characterHeight) / 3 &&
            Math.random() < 0.3  // 50% chance to trigger the event
        ) {
            console.log('activate area');
            areaEvent.initiated = true; // Set areaEvent initiated to true
            targetMap = 'house'; // Set targetMap to 'house'
        }
    }
    for(let i = 0; i < areaForest.length; i++){
        const Areaforest = areaForest[i]
        const overlappingArea = 
            (Math.min(characterX + characterWidth, Areaforest.position.x + Areaforest.width) - Math.max(characterX, Areaforest.position.x)) *
            (Math.min(characterY + characterHeight, Areaforest.position.y + Areaforest.height) - Math.max(characterY, Areaforest.position.y));
        if(kotakCollision({
            kotak2: Areaforest
        }) && overlappingArea > (characterWidth * characterHeight) / 3 &&
            Math.random() < 0.2  // 50% chance to trigger the event
        ) {
            console.log('activate area');
            areaEvent.initiated = true; // Set areaEvent initiated to true
            targetMap = 'forest'; // Set targetMap to 'house'
        }
    }
    for(let i = 0; i < areaMeathouse.length; i++){
        const Areameathouse = areaMeathouse[i]
        const overlappingArea = 
            (Math.min(characterX + characterWidth, Areameathouse.position.x + Areameathouse.width) - Math.max(characterX, Areameathouse.position.x)) *
            (Math.min(characterY + characterHeight, Areameathouse.position.y + Areameathouse.height) - Math.max(characterY, Areameathouse.position.y));
        if(kotakCollision({
            kotak2: Areameathouse
        }) && overlappingArea > (characterWidth * characterHeight) / 3 &&
            Math.random() < 0.2  // 50% chance to trigger the event
        ) {
            console.log('activate area');
            areaEvent.initiated = true; // Set areaEvent initiated to true
            targetMap = 'meathouse'; // Set targetMap to 'house'
        }
    }
    for(let i = 0; i < areaCave.length; i++){
        const Areacave = areaCave[i]
        const overlappingArea = 
            (Math.min(characterX + characterWidth, Areacave.position.x + Areacave.width) - Math.max(characterX, Areacave.position.x)) *
            (Math.min(characterY + characterHeight, Areacave.position.y + Areacave.height) - Math.max(characterY, Areacave.position.y));
        if(kotakCollision({
            kotak2: Areacave
        }) && overlappingArea > (characterWidth * characterHeight) / 3 &&
            Math.random() < 0.5  // 50% chance to trigger the event
        ) {
            console.log('activate area');
            areaEvent.initiated = true; // Set areaEvent initiated to true
            targetMap = 'cave'; // Set targetMap to 'house'
        }
    }
    for(let i = 0; i < areaFarm.length; i++){
        const Areafarm = areaFarm[i]
        const overlappingArea = 
            (Math.min(characterX + characterWidth, Areafarm.position.x + Areafarm.width) - Math.max(characterX, Areafarm.position.x)) *
            (Math.min(characterY + characterHeight, Areafarm.position.y + Areafarm.height) - Math.max(characterY, Areafarm.position.y));
        if(kotakCollision({
            kotak2: Areafarm
        }) && overlappingArea > (characterWidth * characterHeight) / 3 &&
            Math.random() < 0.2  // 50% chance to trigger the event
        ) {
            console.log('activate area');
            areaEvent.initiated = true; // Set areaEvent initiated to true
            targetMap = 'farm'; // Set targetMap to 'house'
        }
    }


    //drawAreaMarketMap(); // Gambar area market map
     // Jalankan animasi secara terus menerus
    
};
    

animate()

const marketMapImage = new Image();
marketMapImage.src = '../designmap/marketzoom.png';
console.log(marketMapImage);
const marketMap = new Sprite({position: {
    x: 0,
    y: 0
    },
    image: marketMapImage,
    width: 1450,
    height: 740,
})
const houseMapImage = new Image();
houseMapImage.src = '../designmap/homezoom.png';
console.log(houseMapImage);
const houseMap = new Sprite({position: {
    x: 0,
    y: 0
    },
    image: houseMapImage,
    width: 1450,
    height: 740,
})
const forestMapImage = new Image();
forestMapImage.src = '../designmap/forestzoom.png';
console.log(forestMapImage);
const forestMap = new Sprite({position: {
    x: 0,
    y: 0
    },
    image: forestMapImage,
    width: 1450,
    height: 740,
})
const meathouseMapImage = new Image();
meathouseMapImage.src = '../designmap/meathousezoom.png';
console.log(meathouseMapImage);
const meathouseMap = new Sprite({position: {
    x: 0,
    y: 0
    },
    image: meathouseMapImage,
    width: 1450,
    height: 740,
})
const caveMapImage = new Image();
caveMapImage.src = '../designmap/cavezoom.png';
console.log(caveMapImage);
const caveMap = new Sprite({position: {
    x: 0,
    y: 0
    },
    image: caveMapImage,
    width: 1450,
    height: 740,
})
const farmMapImage = new Image();
farmMapImage.src = '../designmap/farmzoom.png';
console.log(farmMapImage);
const farmMap = new Sprite({position: {
    x: 0,
    y: 0
    },
    image: farmMapImage,
    width: 1450,
    height: 740,
})



// Variabel untuk tombol farming
let farmButton = null;

// Fungsi untuk menghapus tombol farming
function removeFarmButton() {
    if (farmButton) {
        farmButton.remove(); // Hapus tombol dari DOM
        farmButton = null; // Set variabel ke null
    }
}

// Fungsi untuk membuat tombol farming
function createFarmButton() {
                if (!farmButton) {
                    farmButton = document.createElement('button');
                    farmButton.innerText = 'Kerja';
                    farmButton.style.position = 'absolute';
                    farmButton.style.top = '50%';
                    farmButton.style.left = '50%';
                    farmButton.style.transform = 'translate(-50%, -50%)';
                    farmButton.style.padding = '10px 20px';
                    farmButton.style.fontSize = '16px';
                    farmButton.style.zIndex = '1000';
                    farmButton.style.display = 'block'; 
                    document.body.appendChild(farmButton);

                    // Tambahkan event listener untuk tombol farming
                    farmButton.addEventListener('click', () => {
                    if (characterX <= 606 && characterX >= 562 && characterY >= 144  && characterY <= 200){
                    if (hoe==2){
                        startFarming();
                        workAtFarm(2)
                    }
                    else{
                        alert ("hoe harus level 2");
                    }
                }
                else if (characterX <= 751 && characterX >= 726 && characterY >= 376  && characterY <= 392){
                    if (hoe==3){
                        startFarming();
                        workAtFarm(3)
                    }
                    else{
                        alert ("hoe harus level 3");
                    }
                }
                else{
                    startFarming();
                    workAtFarm(1)
                }
            
        });
    }
}


// Fungsi untuk memulai farming
function startFarming() {
    isActionInProgress = true;
    removeFarmButton();

    //function animasi Farming
  
    isActionInProgress = false; 
        
    }
let mulaiAnimasifarm = false
function farmmap(){
    console.log("farmmap is running");

    if(mulaiAnimasifarm == false){
        if (checkFarmCollision(characterX, characterY)) {
            const targetArea = areaFarmMuncul[0]; // Ambil objek area pertama di map market
            characterX = targetArea.position.x; // Posisi aman
            characterY = targetArea.position.y; // Posisi aman/
            console.log("Collision detected with boundariesHome.");
            //isInitialPositionSetHouse = true; // Tandai bahwa posisi awal sudah diatur
        }
    }

    mulaiAnimasifarm = true

    if (!farmMap.image.complete) {
        console.error("farm map image is not loaded yet.");
        return;
    }

    const mapWidth = image.width;
    const mapHeight = image.height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 30;
    
    // Logika pergerakan karakter
    if (keys.up && lastKey === 'w' && characterY > 0) {
        let newY = characterY - 4;
        if (!checkFarmCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.down && lastKey === 's' && characterY < mapHeight - characterHeight) {
        let newY = characterY + 4;
        if (!checkFarmCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.left && lastKey === 'a' && characterX > 0) {
        let newX = characterX - 4;
        if (!checkFarmCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.right && lastKey === 'd' && characterX < mapWidth - characterWidth) {
        let newX = characterX + 4;
        if (!checkFarmCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }

    //posisi farming
    if(characterX <= 915 && characterX >= 877 && characterY >= 144  && characterY <= 200){
        createFarmButton();
    }
    else if (characterX <= 606 && characterX >= 562 && characterY >= 144  && characterY <= 200){
        createFarmButton();
    }
    else if (characterX <= 751 && characterX >= 726 && characterY >= 376  && characterY <= 388){
        createFarmButton();
    }
    else{
        removeFarmButton();
    }
     
    if (characterX <= 1116 && characterX >= 1085 && characterY >= 332  && characterY <= 352) {
        console.log("kamu berada di area");
    
        // Reset posisi karakter ke titik awal
        characterX = startX;
        characterY = startY;
    
        // Reset posisi background
        const deltaX = startbackgroundX - backgroundX;
        const deltaY = startbackgroundY - backgroundY;
        backgroundX = startbackgroundX;
        backgroundY = startbackgroundY;
    
        // Reset area event
        areaEvent.initiated = false;
    
        // Reset input keyboard
        keys.up = false;
        keys.down = false;
        keys.left = false;
        keys.right = false;
    
        // Reset posisi boundaries
    boundaries.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area berdasarkan perubahan background
    area.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area lainnya
    areaHouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaForest.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaMeathouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaFarm.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaCave.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
        // Reset variabel mulaiAnimasifarm
         mulaiAnimasifarm = false;

        // Reset target map
        targetMap = null;
    
        // Mulai ulang animasi
        animate();
    
        // Debugging
        console.log(`Character reset to X=${characterX}, Y=${characterY}`);
        console.log(`Background reset to X=${backgroundX}, Y=${backgroundY}`);
        console.log(`Target Map: ${targetMap}`);
    
        return;
    }
    backgroundX = Math.max(-(mapWidth - canvas.width), Math.min(0, backgroundX));
    backgroundY = Math.max(-(mapHeight - canvas.height), Math.min(0, backgroundY));

    // Gambar ulang semua elemen
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(image, backgroundX, backgroundY);

    c.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas


    /*boundaries.forEach((boundaryHouse) => {
        boundaryHouse.draw(backgroundX, backgroundY)
    })*/

    c.drawImage(
        farmMap.image,
        0, // Posisi X
        0, // Posisi Y
        canvas.width * 1, // Lebar market map sesuai canvas
        canvas.height * 1, // Tinggi market map sesuai canvas
    );

    boundariesFarm.forEach((boundaryFarm) => {
        boundaryFarm.draw(); // Panggil metode draw tanpa parameter
    });
    areaFarmMuncul.forEach((areaFarm) => {
        areaFarm.draw(); // Panggil metode draw tanpa parameter
    });

    drawBar(50, 20, 200, 20, health, '#4caf50', healthLogo);
    drawBar(310, 20, 200, 20, energy, '#2196f3', energyLogo);
    drawBar(570, 20, 200, 20, hunger, '#ff9800', hungerLogo);
    drawBar(830, 20, 200, 20, hygiene, '#9c27b0', hygieneLogo);
    drawBar(1090, 20, 200, 20, happiness, '#ffc107', happinessLogo);

    if (gameHours >= 6 && gameHours < 12) { // pago
        targetOverlay = { r: 255, g: 255, b: 240, a: 0.08 };
        } else if (gameHours >= 12 && gameHours < 16) { // siang
            targetOverlay = { r: 0, g: 0, b: 0, a: 0 };
        } else if (gameHours >= 16 && gameHours < 18) { // sunset
            targetOverlay = { r: 255, g: 94, b: 77, a: 0.3 };
        } else if (gameHours >= 18 && gameHours < 21) { // sore
            targetOverlay = { r: 70, g: 130, b: 180, a: 0.3 };
        } else { // malam
            targetOverlay = { r: 10, g: 10, b: 30, a: 0.6 };
        }

    //console.log("Calling drawCollisionHouse...");
    //drawCollisionHouse();
    //console.log("Finished drawing collision house.");

    
    if (isActionInProgress) {
        c.drawImage(
            workImage,
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    } else {
        c.drawImage(
            playerImage[currentDirection],
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    }
    
    const now = Date.now();
    if (now - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % totalFrames;
        lastFrameTime = now;
    }
    if (now - lastUpdateTime >= 1000) { // Perbarui setiap 1 detik
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        if (hunger === 0) health = Math.max(0, health - (3 / 60));
        if (energy === 0) health = Math.max(0, health - (4 / 60));
        if (hygiene === 0) health = Math.max(0, health - (1 / 60));
        if (happiness === 0) health = Math.max(0, health - (2 / 60));

        if (health === 0) {
            gameOver();
            return;
        }

        updateTime(); // Perbarui waktu
        lastUpdateTime = now;
    }


    updateOverlay()
    displayGold(); // Gambar ulang gold
    displayTime(); // Gambar ulang waktu

    

    // Lanjutkan animasi
    if (!isGameOver && !areaEvent.initiated) {
        window.requestAnimationFrame(farmmap);
    }
    //updateBars()
    window.requestAnimationFrame(farmmap); // Jalankan animasi terus-menerus
}

// Variabel untuk tombol mining
let caveButton = null;

// Fungsi untuk menghapus tombol mining
function removeCaveButton() {
    if (caveButton) {
        caveButton.remove(); // Hapus tombol dari DOM
        caveButton = null; // Set variabel ke null
    }
}

// Fungsi untuk membuat tombol mining
function createCaveButton() {
                if (!caveButton) {
                    caveButton = document.createElement('button');
                    caveButton.innerText = 'Kerja';
                    caveButton.style.position = 'absolute';
                    caveButton.style.top = '50%';
                    caveButton.style.left = '50%';
                    caveButton.style.transform = 'translate(-50%, -50%)';
                    caveButton.style.padding = '10px 20px';
                    caveButton.style.fontSize = '16px';
                    caveButton.style.zIndex = '1000';
                    caveButton.style.display = 'block'; 
                    document.body.appendChild(caveButton);

                    // Tambahkan event listener untuk tombol mining
                    caveButton.addEventListener('click', () => {
                    if (characterX <= 330 && characterX >= 290 && characterY >= 166  && characterY <= 202){
                    if (pickaxe==2){
                        startMining();
                        workAtCave(2);
                    }
                    else{
                        alert ("pickaxe harus level 2");
                    }
                }
                else if (characterX <= 811 && characterX >= 765 && characterY >= 450  && characterY <= 466){
                    if (pickaxe==3){
                        startMining();
                        workAtCave(3);
                    }
                    else{
                        alert ("pickaxe harus level 3");
                    }
                }
                else if (characterX <= 1079 && characterX >= 1054 && characterY >= 542  && characterY <= 582){
                    if (pickaxe==4){
                        startMining();
                        workAtCave(4);
                    }
                    else{
                        alert ("pickaxe harus level 4");
                    } 
                }
                else if (characterX <= 1099 && characterX >= 1077 && characterY >= 222  && characterY <= 278){
                    if (pickaxe==5){
                        startMining();
                        workAtCave(5);
                    }
                    else{
                        alert ("pickaxe harus level 5");
                    }
                }
                else{
                    startMining();
                    workAtCave(1)
                }
            
        });
    }
}


// Fungsi untuk memulai mining
function startMining() {
    isActionInProgress = true;
    removeCaveButton();

    //function animasi mining
  
    isActionInProgress = false; 
        
}


let mulaiAnimasicave = false
function cavemap(){
    console.log("houseMap is running");

    if(mulaiAnimasicave == false){
        if (checkCaveCollision(characterX, characterY)) {
            const targetArea = areaCaveMuncul[1] || areaCaveMuncul[0];
            characterX = targetArea.position.x; // Posisi aman
            characterY = targetArea.position.y; // Posisi aman/
            console.log("Collision detected with boundariesHome.");
            //isInitialPositionSetHouse = true; // Tandai bahwa posisi awal sudah diatur
        }
    }

    mulaiAnimasicave = true

    if (!caveMap.image.complete) {
        console.error("Market map image is not loaded yet.");
        return;
    }

    const mapWidth = image.width;
    const mapHeight = image.height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 30;
    
    // Logika pergerakan karakter
    if (keys.up && lastKey === 'w' && characterY > 0) {
        let newY = characterY - 4;
        if (!checkCaveCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.down && lastKey === 's' && characterY < mapHeight - characterHeight) {
        let newY = characterY + 4;
        if (!checkCaveCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.left && lastKey === 'a' && characterX > 0) {
        let newX = characterX - 4;
        if (!checkCaveCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.right && lastKey === 'd' && characterX < mapWidth - characterWidth) {
        let newX = characterX + 4;
        if (!checkCaveCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
      //mining level 1 - 5
      if(characterX <= 375 && characterX >= 310 && characterY >= 486  && characterY <= 506) { 
             createCaveButton();
        }else if (characterX <= 330 && characterX >= 290 && characterY >= 166  && characterY <= 202){
            createCaveButton();
        }
        else if (characterX <= 811 && characterX >= 765 && characterY >= 450  && characterY <= 466){
            createCaveButton();
        }
        else if (characterX <= 1079 && characterX >= 1054 && characterY >= 542  && characterY <= 582){
            createCaveButton();
        }
        else if (characterX <= 1099 && characterX >= 1077 && characterY >= 222  && characterY <= 278){
            createCaveButton();
        }
        else{
            removeCaveButton();
        }
        

    if (characterX <= 790 && characterX >= 765 && characterY >= 695  && characterY <= 698) {
        console.log("kamu berada di area");
    
        // Reset posisi karakter ke titik awal
        characterX = startX;
        characterY = startY;
    
        // Reset posisi background
        const deltaX = startbackgroundX - backgroundX;
        const deltaY = startbackgroundY - backgroundY;
        backgroundX = startbackgroundX;
        backgroundY = startbackgroundY;
    
        // Reset area event
        areaEvent.initiated = false;
    
        // Reset input keyboard
        keys.up = false;
        keys.down = false;
        keys.left = false;
        keys.right = false;
    
        // Reset posisi boundaries
    boundaries.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area berdasarkan perubahan background
    area.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area lainnya
    areaHouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaForest.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaMeathouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaFarm.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaCave.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });

         mulaiAnimasicave = false
        // Reset target map
        targetMap = null;
    
        // Mulai ulang animasi
        animate();
    
        // Debugging
        console.log(`Character reset to X=${characterX}, Y=${characterY}`);
        console.log(`Background reset to X=${backgroundX}, Y=${backgroundY}`);
        console.log(`Target Map: ${targetMap}`);
    
        return;
    }


    backgroundX = Math.max(-(mapWidth - canvas.width), Math.min(0, backgroundX));
    backgroundY = Math.max(-(mapHeight - canvas.height), Math.min(0, backgroundY));

    // Gambar ulang semua elemen
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(image, backgroundX, backgroundY);

    c.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas


    /*boundaries.forEach((boundaryHouse) => {
        boundaryHouse.draw(backgroundX, backgroundY)
    })*/

    c.drawImage(
        caveMap.image,
        0, // Posisi X
        0, // Posisi Y
        canvas.width * 1, // Lebar market map sesuai canvas
        canvas.height * 1, // Tinggi market map sesuai canvas
    );

    boundariesCave.forEach((boundaryCave) => {
        boundaryCave.draw(); // Panggil metode draw tanpa parameter
    });
    areaCaveMuncul.forEach((areaCave) => {
        areaCave.draw(); // Panggil metode draw tanpa parameter
    });

    drawBar(50, 20, 200, 20, health, '#4caf50', healthLogo);
    drawBar(310, 20, 200, 20, energy, '#2196f3', energyLogo);
    drawBar(570, 20, 200, 20, hunger, '#ff9800', hungerLogo);
    drawBar(830, 20, 200, 20, hygiene, '#9c27b0', hygieneLogo);
    drawBar(1090, 20, 200, 20, happiness, '#ffc107', happinessLogo);

    if (gameHours >= 6 && gameHours < 12) { // pago
        targetOverlay = { r: 255, g: 255, b: 240, a: 0.08 };
        } else if (gameHours >= 12 && gameHours < 16) { // siang
            targetOverlay = { r: 0, g: 0, b: 0, a: 0 };
        } else if (gameHours >= 16 && gameHours < 18) { // sunset
            targetOverlay = { r: 255, g: 94, b: 77, a: 0.3 };
        } else if (gameHours >= 18 && gameHours < 21) { // sore
            targetOverlay = { r: 70, g: 130, b: 180, a: 0.3 };
        } else { // malam
            targetOverlay = { r: 10, g: 10, b: 30, a: 0.6 };
        }

    //console.log("Calling drawCollisionHouse...");
    //drawCollisionHouse();
    //console.log("Finished drawing collision house.");

    
    if (isActionInProgress) {
        c.drawImage(
            workImage,
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    } else {
        c.drawImage(
            playerImage[currentDirection],
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    }
    
    const now = Date.now();
    if (now - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % totalFrames;
        lastFrameTime = now;
    }
    if (now - lastUpdateTime >= 1000) { // Perbarui setiap 1 detik
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        if (hunger === 0) health = Math.max(0, health - (3 / 60));
        if (energy === 0) health = Math.max(0, health - (4 / 60));
        if (hygiene === 0) health = Math.max(0, health - (1 / 60));
        if (happiness === 0) health = Math.max(0, health - (2 / 60));

        if (health === 0) {
            gameOver();
            return;
        }

        updateTime(); // Perbarui waktu
        lastUpdateTime = now;
    }


    updateOverlay()
    displayGold(); // Gambar ulang gold
    displayTime(); // Gambar ulang waktu

    

    // Lanjutkan animasi
    if (!isGameOver && !areaEvent.initiated) {
        window.requestAnimationFrame(cavemap);
    }
    //updateBars()
    window.requestAnimationFrame(cavemap); // Jalankan animasi terus-menerus
}


// Variabel untuk tombol kerja di meathouse
let meathouseButton = null;

// Fungsi untuk menghapus tombol cutting
function removeMeatHouseButton() {
    if (meathouseButton) {
        meathouseButton.remove(); // Hapus tombol dari DOM
        meathouseButton = null; // Set variabel ke null
    }
}

// Fungsi untuk membuat tombol cutting
function createMeatHouseButton() {
                if (!meathouseButton) {
                    meathouseButton = document.createElement('button');
                    meathouseButton.innerText = 'Kerja';
                    meathouseButton.style.position = 'absolute';
                    meathouseButton.style.top = '50%';
                    meathouseButton.style.left = '50%';
                    meathouseButton.style.transform = 'translate(-50%, -50%)';
                    meathouseButton.style.padding = '10px 20px';
                    meathouseButton.style.fontSize = '16px';
                    meathouseButton.style.zIndex = '1000';
                    meathouseButton.style.display = 'block'; 
                    document.body.appendChild(meathouseButton);

                    // Tambahkan event listener untuk tombol cutting
                    meathouseButton.addEventListener('click', () => {
                    if (characterX <= 527 && characterX >= 479 && characterY >= 192  && characterY <= 228){
                        if (cleaver==2){
                            startCutting();
                            workAtMeathouse(2)
                        }
                        else{
                            alert ("cleaver harus level 2");
                        }
                    }
                    else{
                        startCutting();
                        workAtMeathouse(1)
                    }
            
        });
    }
}


// Fungsi untuk memulai memotong daging
function startCutting() {
    isActionInProgress = true;
    removeMeatHouseButton();

    //function animasi cutting
  
    isActionInProgress = false; 
        
    }


let mulaiAnimasimeathouse = false;
function meathousemap(){
    console.log("houseMap is running");

    if(mulaiAnimasimeathouse == false)
        if (checkMeathouseCollision(characterX, characterY)) {
            const targetArea = areaMeathouseMuncul[0]; // Ambil objek area pertama di map market
            characterX = targetArea.position.x; // Posisi aman
            characterY = targetArea.position.y; // Posisi aman/
            console.log("Collision detected with boundariesHome.");
            isInitialPositionSetHouse = true; // Tandai bahwa posisi awal sudah diatur
        }
    
    
    mulaiAnimasimeathouse = true;

    if (!meathouseMap.image.complete) {
        console.error("Market map image is not loaded yet.");
        return;
    }

    const mapWidth = image.width;
    const mapHeight = image.height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 30;
    
    // Logika pergerakan karakter
    if (keys.up && lastKey === 'w' && characterY > 0) {
        let newY = characterY - 4;
        if (!checkMeathouseCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.down && lastKey === 's' && characterY < mapHeight - characterHeight) {
        let newY = characterY + 4;
        if (!checkMeathouseCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.left && lastKey === 'a' && characterX > 0) {
        let newX = characterX - 4;
        if (!checkMeathouseCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.right && lastKey === 'd' && characterX < mapWidth - characterWidth) {
        let newX = characterX + 4;
        if (!checkMeathouseCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }

    //posisi kerja di meathouse
        if(characterX <= 876 && characterX >= 831 && characterY >= 192  && characterY <= 228){  
            createMeatHouseButton();
        }
         else if (characterX <= 527 && characterX >= 479 && characterY >= 192  && characterY <= 228){
            createMeatHouseButton();
        }
        else{
            removeMeatHouseButton();
        }


    if (characterX <= 730 && characterX >= 639 && characterY >= 652  && characterY <= 704) {
        console.log("kamu berada di area");
    
        // Reset posisi karakter ke titik awal
        characterX = startX;
        characterY = startY;
    
        // Reset posisi background
        const deltaX = startbackgroundX - backgroundX;
        const deltaY = startbackgroundY - backgroundY;
        backgroundX = startbackgroundX;
        backgroundY = startbackgroundY;
    
        // Reset area event
        areaEvent.initiated = false;
    
        // Reset input keyboard
        keys.up = false;
        keys.down = false;
        keys.left = false;
        keys.right = false;
    
        // Reset posisi boundaries
    boundaries.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area berdasarkan perubahan background
    area.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area lainnya
    areaHouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaForest.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaMeathouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaFarm.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaCave.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });


        mulaiAnimasimeathouse = false;
        // Reset target map
        targetMap = null;
    
        // Mulai ulang animasi
        animate();
    
        // Debugging
        console.log(`Character reset to X=${characterX}, Y=${characterY}`);
        console.log(`Background reset to X=${backgroundX}, Y=${backgroundY}`);
        console.log(`Target Map: ${targetMap}`);
    
        return;
    }

    backgroundX = Math.max(-(mapWidth - canvas.width), Math.min(0, backgroundX));
    backgroundY = Math.max(-(mapHeight - canvas.height), Math.min(0, backgroundY));

    // Gambar ulang semua elemen
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(image, backgroundX, backgroundY);

    c.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas


    c.drawImage(
        meathouseMap.image,
        0, // Posisi X
        0, // Posisi Y
        canvas.width * 1, // Lebar market map sesuai canvas
        canvas.height * 1, // Tinggi market map sesuai canvas
    );

    boundariesMeathouse.forEach((boundaryMeathouse) => {
        boundaryMeathouse.draw(); // Panggil metode draw tanpa parameter
    });
    areaMeathouseMuncul.forEach((areaMeathouse) => {
        areaMeathouse.draw(); // Panggil metode draw tanpa parameter
    });

    drawBar(50, 20, 200, 20, health, '#4caf50', healthLogo);
    drawBar(310, 20, 200, 20, energy, '#2196f3', energyLogo);
    drawBar(570, 20, 200, 20, hunger, '#ff9800', hungerLogo);
    drawBar(830, 20, 200, 20, hygiene, '#9c27b0', hygieneLogo);
    drawBar(1090, 20, 200, 20, happiness, '#ffc107', happinessLogo);

    if (gameHours >= 6 && gameHours < 12) { // pago
        targetOverlay = { r: 255, g: 255, b: 240, a: 0.08 };
        } else if (gameHours >= 12 && gameHours < 16) { // siang
            targetOverlay = { r: 0, g: 0, b: 0, a: 0 };
        } else if (gameHours >= 16 && gameHours < 18) { // sunset
            targetOverlay = { r: 255, g: 94, b: 77, a: 0.3 };
        } else if (gameHours >= 18 && gameHours < 21) { // sore
            targetOverlay = { r: 70, g: 130, b: 180, a: 0.3 };
        } else { // malam
            targetOverlay = { r: 10, g: 10, b: 30, a: 0.6 };
        }

    //console.log("Calling drawCollisionHouse...");
    //drawCollisionHouse();
    //console.log("Finished drawing collision house.");

    
    if (isActionInProgress == true) {
        c.drawImage(
            workImage,
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    } else {
        c.drawImage(
            playerImage[currentDirection],
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    }
    
    const now = Date.now();
    if (now - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % totalFrames;
        lastFrameTime = now;
    }
    if (now - lastUpdateTime >= 1000) { // Perbarui setiap 1 detik
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        if (hunger === 0) health = Math.max(0, health - (3 / 60));
        if (energy === 0) health = Math.max(0, health - (4 / 60));
        if (hygiene === 0) health = Math.max(0, health - (1 / 60));
        if (happiness === 0) health = Math.max(0, health - (2 / 60));

        if (health === 0) {
            gameOver();
            return;
        }

        updateTime(); // Perbarui waktu
        lastUpdateTime = now;
    }


    updateOverlay()
    displayGold(); // Gambar ulang gold
    displayTime(); // Gambar ulang waktu

    

    // Lanjutkan animasi
    if (!isGameOver && !areaEvent.initiated) {
        window.requestAnimationFrame(meathousemap);
    }
    //updateBars()
    window.requestAnimationFrame(meathousemap); // Jalankan animasi terus-menerus
}


// Variabel untuk tombol nebang
let forestButton = null;

// Fungsi untuk menghapus tombol nebang
function removeForestButton() {
    if (forestButton) {
        forestButton.remove(); // Hapus tombol dari DOM
        forestButton = null; // Set variabel ke null
    }
}

// Fungsi untuk membuat tombol nebang
function createForestButton() {
                if (!forestButton) {
                    forestButton = document.createElement('button');
                    forestButton.innerText = 'Kerja';
                    forestButton.style.position = 'absolute';
                    forestButton.style.top = '50%';
                    forestButton.style.left = '50%';
                    forestButton.style.transform = 'translate(-50%, -50%)';
                    forestButton.style.padding = '10px 20px';
                    forestButton.style.fontSize = '16px';
                    forestButton.style.zIndex = '1000';
                    forestButton.style.display = 'block'; 
                    document.body.appendChild(forestButton);

                    // Tambahkan event listener untuk tombol nebang
                    forestButton.addEventListener('click', () => {
                    if (characterX <= 876 && characterX >= 847 && characterY >= 92  && characterY <= 100){
                    if (axe==2){
                        startWorking();
                        workAtForest(2)
                    }
                    else{
                        alert ("axe harus level 2");
                    }
                }
                else if (characterX <= 596 && characterX >= 583 && characterY >= 92  && characterY <= 100){
                    if (axe==3){
                        startWorking();
                        workAtForest(3)
                    }
                    else{
                        alert ("axe harus level 3");
                    }
                }
                else if(characterX <= 195 && characterX >= 167 && characterY >= 392  && characterY <= 432){
                    if (axe==4){
                        startWorking();
                        workAtForest(4)
                    }
                    else{
                        alert ("axe harus level 4");
                    }  
                }
                else{
                    startWorking();
                    workAtForest(1)
                }
            
        });
    }
}


// Fungsi untuk memulai nebang
function startWorking() {
    isActionInProgress = true;
    removeForestButton();

    //function animasi nebang
  
    isActionInProgress = false; 
        
    }


let mulaiAnimasiforest = false
function forestmap(){
    console.log("houseMap is running");

    if (mulaiAnimasiforest == false) {
        if (checkForestCollision(characterX, characterY)) {
            const targetArea = areaForestMap[0]; // Ambil objek area pertama di map market
            characterX = targetArea.position.x; // Posisi aman
            characterY = targetArea.position.y; // Posisi aman/
            console.log("Collision detected with boundariesHome.");
            //isInitialPositionSetHouse = true; // Tandai bahwa posisi awal sudah diatur
            
        }
        
    }
    mulaiAnimasiforest = true;

    if (!forestMap.image.complete) {
        console.error("Market map image is not loaded yet.");
        return;
    }

    const mapWidth = image.width;
    const mapHeight = image.height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 30;
    
    // Logika pergerakan karakter
    if (keys.up && lastKey === 'w' && characterY > 0) {
        let newY = characterY - 4;
        if (!checkForestCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.down && lastKey === 's' && characterY < mapHeight - characterHeight) {
        let newY = characterY + 4;
        if (!checkForestCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.left && lastKey === 'a' && characterX > 0) {
        let newX = characterX - 4;
        if (!checkForestCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.right && lastKey === 'd' && characterX < mapWidth - characterWidth) {
        let newX = characterX + 4;
        if (!checkForestCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }

    //posisi kerja di forest
    if(characterX <= 876 && characterX >= 850 && characterY >= 416  && characterY <= 432){
        createForestButton();
    }
    else if (characterX <= 876 && characterX >= 847 && characterY >= 92  && characterY <= 100){
        createForestButton();
    }
    else if (characterX <= 596 && characterX >= 583 && characterY >= 92  && characterY <= 100){
        createForestButton();
    }
    else if(characterX <= 195 && characterX >= 167 && characterY >= 392  && characterY <= 432){
        createForestButton();  
    }
    else{
        removeForestButton();
    }



    if (characterX <= 707 && characterX >= 683 && characterY >= 695  && characterY <= 700) {
        console.log("kamu berada di area");
    
        // Reset posisi karakter ke titik awal
        characterX = startX;
        characterY = startY;
    
        // Reset posisi background
        const deltaX = startbackgroundX - backgroundX;
        const deltaY = startbackgroundY - backgroundY;
        backgroundX = startbackgroundX;
        backgroundY = startbackgroundY;
    
        // Reset area event
        areaEvent.initiated = false;
    
        // Reset input keyboard
        keys.up = false;
        keys.down = false;
        keys.left = false;
        keys.right = false;
    
        // Reset posisi boundaries
    boundaries.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area berdasarkan perubahan background
    area.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area lainnya
    areaHouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaForest.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaMeathouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaFarm.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaCave.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });


        mulaiAnimasiforest = false
        // Reset target map
        targetMap = null;
    
        // Mulai ulang animasi
        animate();
    
        // Debugging
        console.log(`Character reset to X=${characterX}, Y=${characterY}`);
        console.log(`Background reset to X=${backgroundX}, Y=${backgroundY}`);
        console.log(`Target Map: ${targetMap}`);
    
        return;
    }

    
    backgroundX = Math.max(-(mapWidth - canvas.width), Math.min(0, backgroundX));
    backgroundY = Math.max(-(mapHeight - canvas.height), Math.min(0, backgroundY));

    // Gambar ulang semua elemen
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(image, backgroundX, backgroundY);

    c.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas


    /*boundaries.forEach((boundaryHouse) => {
        boundaryHouse.draw(backgroundX, backgroundY)
    })*/

    c.drawImage(
        forestMap.image,
        0, // Posisi X
        0, // Posisi Y
        canvas.width * 1, // Lebar market map sesuai canvas
        canvas.height * 1, // Tinggi market map sesuai canvas
    );

    boundariesForest.forEach((boundaryForest) => {
        boundaryForest.draw(); // Panggil metode draw tanpa parameter
    });
    areaForestMap.forEach((areaForest) => {
        areaForest.draw(); // Panggil metode draw tanpa parameter
    });

    drawBar(50, 20, 200, 20, health, '#4caf50', healthLogo);
    drawBar(310, 20, 200, 20, energy, '#2196f3', energyLogo);
    drawBar(570, 20, 200, 20, hunger, '#ff9800', hungerLogo);
    drawBar(830, 20, 200, 20, hygiene, '#9c27b0', hygieneLogo);
    drawBar(1090, 20, 200, 20, happiness, '#ffc107', happinessLogo);

    if (gameHours >= 6 && gameHours < 12) { // pago
        targetOverlay = { r: 255, g: 255, b: 240, a: 0.08 };
        } else if (gameHours >= 12 && gameHours < 16) { // siang
            targetOverlay = { r: 0, g: 0, b: 0, a: 0 };
        } else if (gameHours >= 16 && gameHours < 18) { // sunset
            targetOverlay = { r: 255, g: 94, b: 77, a: 0.3 };
        } else if (gameHours >= 18 && gameHours < 21) { // sore
            targetOverlay = { r: 70, g: 130, b: 180, a: 0.3 };
        } else { // malam
            targetOverlay = { r: 10, g: 10, b: 30, a: 0.6 };
        }

    //console.log("Calling drawCollisionHouse...");
    //drawCollisionHouse();
    //console.log("Finished drawing collision house.");

    
    if (isActionInProgress) {
        c.drawImage(
            workImage,
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    } else {
        c.drawImage(
            playerImage[currentDirection],
            0,
            (currentFrame * frameHeight) + spriteOffsetY,
            frameWidth,
            frameHeight,
            characterX,
            characterY,
            40,
            40
        );
    }
    
    const now = Date.now();
    if (now - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % totalFrames;
        lastFrameTime = now;
    }
    if (now - lastUpdateTime >= 1000) { // Perbarui setiap 1 detik
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        if (hunger === 0) health = Math.max(0, health - (3 / 60));
        if (energy === 0) health = Math.max(0, health - (4 / 60));
        if (hygiene === 0) health = Math.max(0, health - (1 / 60));
        if (happiness === 0) health = Math.max(0, health - (2 / 60));

        if (health === 0) {
            gameOver();
            return;
        }

        updateTime(); // Perbarui waktu
        lastUpdateTime = now;
    }


    updateOverlay()
    displayGold(); // Gambar ulang gold
    displayTime(); // Gambar ulang waktu

    

    // Lanjutkan animasi
    if (!isGameOver && !areaEvent.initiated) {
        window.requestAnimationFrame(forestmap);
    }
    //updateBars()
    window.requestAnimationFrame(forestmap); // Jalankan animasi terus-menerus
}


// Variabel untuk tombol mandi dan overlay
let showerButton = null;
let showerOverlay = null;


// Fungsi untuk menghapus tombol mandi
function removeShowerButton() {
    if (showerButton) {
        showerButton.remove(); // Hapus tombol dari DOM
        showerButton = null; // Set variabel ke null
    }
}

// Fungsi untuk membuat tombol mandi
function createShowerButton() {
    if (!showerButton) {
        showerButton = document.createElement('button');
        showerButton.innerText = 'Mandi';
        showerButton.style.position = 'absolute';
        showerButton.style.top = '50%';
        showerButton.style.left = '50%';
        showerButton.style.transform = 'translate(-50%, -50%)';
        showerButton.style.padding = '10px 20px';
        showerButton.style.fontSize = '16px';
        showerButton.style.zIndex = '1000';
        showerButton.style.display = 'block'; // Awalnya disembunyikan
        document.body.appendChild(showerButton);

        // Tambahkan event listener untuk tombol mandi
        showerButton.addEventListener('click', () => {
            startShower();
        });
    }
}


// Fungsi untuk memulai mandi
function startShower() {
    if (hygiene >= 100) {
        alert('Hygiene sudah penuh! Kamu tidak perlu mandi.');
        return;
    }
    isActionInProgress = true;
    removeShowerButton();

    // Tampilkan overlay mandi
    if (!showerOverlay) {
        showerOverlay = document.createElement('div');
        showerOverlay.style.position = 'absolute';
        showerOverlay.style.top = '0';
        showerOverlay.style.left = '0';
        showerOverlay.style.width = '100%';
        showerOverlay.style.height = '100%';
        showerOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        showerOverlay.style.zIndex = '999';
        showerOverlay.style.display = 'flex';
        showerOverlay.style.justifyContent = 'center';
        showerOverlay.style.alignItems = 'end';
        showerOverlay.style.color = 'white';
        showerOverlay.style.fontSize = '24px';
        showerOverlay.innerText = 'Karakter sedang mandi...';
        document.body.appendChild(showerOverlay);
    } else {
        showerOverlay.style.display = 'flex';
    }

    // Setelah 3 detik, sembunyikan overlay dan tingkatkan hygiene
    setTimeout(() => {
        showerOverlay.style.display = 'none';
        isActionInProgress = false; 
        if (hygiene < 100) {
            hygiene = Math.min(hygiene + 70, 100);
            console.log(`Hygiene sekarang: ${hygiene}`);
        } 
    }, 3000);
}



// Variabel untuk tombol sleep dan overlay
let sleepButton = null;
let sleepOverlay = null;


// Fungsi untuk menghapus tombol mandi
function removeSleepButton() {
    if (sleepButton) {
        sleepButton.remove(); // Hapus tombol dari DOM
        sleepButton = null; // Set variabel ke null
    }
}


// Fungsi untuk membuat tombol sleep
function createSleepButton() {
    if (!sleepButton) {
        sleepButton = document.createElement('button');
        sleepButton.innerText = 'Tidur';
        sleepButton.style.position = 'absolute';
        sleepButton.style.top = '50%';
        sleepButton.style.left = '50%';
        sleepButton.style.transform = 'translate(-50%, -50%)';
        sleepButton.style.padding = '10px 20px';
        sleepButton.style.fontSize = '16px';
        sleepButton.style.zIndex = '1000';
        sleepButton.style.display = 'block'; // Awalnya disembunyikan
        document.body.appendChild(sleepButton);

        // Tambahkan event listener untuk tombol mandi
        sleepButton.addEventListener('click', () => {
            startSleep();
        });
    }
}

// Fungsi untuk memulai mandi
function startSleep() {

    if (energy >= 100) {
        alert('energy sudah penuh! Kamu tidak perlu tidur.');
        return;
    }
    isActionInProgress = true; 
    
    removeSleepButton();
    // Tampilkan overlay mandi
    if (!sleepOverlay) {
        sleepOverlay = document.createElement('div');
        sleepOverlay.style.position = 'absolute';
        sleepOverlay.style.top = '0';
        sleepOverlay.style.left = '0';
        sleepOverlay.style.width = '100%';
        sleepOverlay.style.height = '100%';
        sleepOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        sleepOverlay.style.zIndex = '999';
        sleepOverlay.style.display = 'flex';
        sleepOverlay.style.justifyContent = 'center';
        sleepOverlay.style.alignItems = 'end';
        sleepOverlay.style.color = 'white';
        sleepOverlay.style.fontSize = '24px';
        sleepOverlay.innerText = 'Karakter sedang tidur selama 10 jam';
        document.body.appendChild(sleepOverlay);
    } else {
        sleepOverlay.style.display = 'flex';
    }

    // Setelah 3 detik, sembunyikan overlay dan tingkatkan hygiene
    setTimeout(() => {
        sleepOverlay.style.display = 'none';
        isActionInProgress = false; 
        if (energy < 100) {
            energy = Math.min(energy + 80, 100);
            updateGameClock(600);
            console.log(`energy sekarang: ${energy}`);
        } 
    }, 3000);
}


let mulaiAnimasihome = false
function housemap(){
    console.log("houseMap is running");

    if(mulaiAnimasihome == false){
        if (checkHouseCollision(characterX, characterY)) {
            const targetArea = areaHouseMap[2]; // Ambil objek area pertama di map market
            characterX = targetArea.position.x; // Posisi aman
            characterY = targetArea.position.y; // Posisi aman/
            console.log("Collision detected with boundariesHome.");
           //isInitialPositionSetHouse = true; // Tandai bahwa posisi awal sudah diatur
        }
    }

    mulaiAnimasihome = true

    if (!houseMap.image.complete) {
        console.error("Market map image is not loaded yet.");
        return;
    }

    const mapWidth = image.width;
    const mapHeight = image.height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 30;
    
    // Logika pergerakan karakter
    if (keys.up && lastKey === 'w' && characterY > 0) {
        let newY = characterY - 4;
        if (!checkHouseCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.down && lastKey === 's' && characterY < mapHeight - characterHeight) {
        let newY = characterY + 4;
        if (!checkHouseCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.left && lastKey === 'a' && characterX > 0) {
        let newX = characterX - 4;
        if (!checkHouseCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.right && lastKey === 'd' && characterX < mapWidth - characterWidth) {
        let newX = characterX + 4;
        if (!checkHouseCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    
     //mandi
     if(characterX <= 1264 && characterX >= 1220 && characterY >= 41  && characterY <= 101) {
        // Panggil fungsi untuk membuat tombol tidur
        createShowerButton();

    }else {
        // Hapus tombol mandi jika karakter keluar dari area mandi
        removeShowerButton();
    }
    

    //tidur
    if(characterX <= 1022 && characterX >= 953 && characterY >= 325  && characterY <= 345) {
                
        // Panggil fungsi untuk membuat tombol mandi
        createSleepButton();
    }else {
        // Hapus tombol mandi jika karakter keluar dari area mandi
        removeSleepButton();
    }

    if (characterX <= 1225 && characterX >= 1220 && characterY >= 638  && characterY <= 686) {
        console.log("kamu berada di area");
    
        // Reset posisi karakter ke titik awal
        characterX = startX;
        characterY = startY;
    
        // Reset posisi background
        const deltaX = startbackgroundX - backgroundX;
        const deltaY = startbackgroundY - backgroundY;
        backgroundX = startbackgroundX;
        backgroundY = startbackgroundY;
    
        // Reset area event
        areaEvent.initiated = false;
    
        // Reset input keyboard
        keys.up = false;
        keys.down = false;
        keys.left = false;
        keys.right = false;
    
        // Reset posisi boundaries
    boundaries.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area berdasarkan perubahan background
    area.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area lainnya
    areaHouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaForest.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaMeathouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaFarm.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaCave.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    mulaiAnimasihome = false
        // Reset target map
        targetMap = null;
    
        // Mulai ulang animasi
        animate();
    
        // Debugging
        console.log(`Character reset to X=${characterX}, Y=${characterY}`);
        console.log(`Background reset to X=${backgroundX}, Y=${backgroundY}`);
        console.log(`Target Map: ${targetMap}`);
    
        return;
    }

    backgroundX = Math.max(-(mapWidth - canvas.width), Math.min(0, backgroundX));
    backgroundY = Math.max(-(mapHeight - canvas.height), Math.min(0, backgroundY));

    // Gambar ulang semua elemen
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(image, backgroundX, backgroundY);

    c.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas


    c.drawImage(
        houseMap.image,
        0, // Posisi X
        0, // Posisi Y
        canvas.width * 1, // Lebar market map sesuai canvas
        canvas.height * 1, // Tinggi market map sesuai canvas
    );

    boundariesHome.forEach((boundaryHouse) => {
        boundaryHouse.draw(); // Panggil metode draw tanpa parameter
    });
    areaHouseMap.forEach((areaHouse) => {
        areaHouse.draw(); // Panggil metode draw tanpa parameter
    });

    drawBar(50, 20, 200, 20, health, '#4caf50', healthLogo);
    drawBar(310, 20, 200, 20, energy, '#2196f3', energyLogo);
    drawBar(570, 20, 200, 20, hunger, '#ff9800', hungerLogo);
    drawBar(830, 20, 200, 20, hygiene, '#9c27b0', hygieneLogo);
    drawBar(1090, 20, 200, 20, happiness, '#ffc107', happinessLogo);

    if (gameHours >= 6 && gameHours < 12) { // pago
        targetOverlay = { r: 255, g: 255, b: 240, a: 0.08 };
        } else if (gameHours >= 12 && gameHours < 16) { // siang
            targetOverlay = { r: 0, g: 0, b: 0, a: 0 };
        } else if (gameHours >= 16 && gameHours < 18) { // sunset
            targetOverlay = { r: 255, g: 94, b: 77, a: 0.3 };
        } else if (gameHours >= 18 && gameHours < 21) { // sore
            targetOverlay = { r: 70, g: 130, b: 180, a: 0.3 };
        } else { // malam
            targetOverlay = { r: 10, g: 10, b: 30, a: 0.6 };
        }



    
    c.drawImage(
        playerImage[currentDirection],
        0,
        (currentFrame * frameHeight) + spriteOffsetY,
        frameWidth,
        frameHeight,
        characterX,
        characterY,
        40,
        40
    );
    
    const now = Date.now();
    if (now - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % totalFrames;
        lastFrameTime = now;
    }
    if (now - lastUpdateTime >= 1000) { // Perbarui setiap 1 detik
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        if (hunger === 0) health = Math.max(0, health - (3 / 60));
        if (energy === 0) health = Math.max(0, health - (4 / 60));
        if (hygiene === 0) health = Math.max(0, health - (1 / 60));
        if (happiness === 0) health = Math.max(0, health - (2 / 60));

        if (health === 0) {
            gameOver();
            return;
        }

        updateTime(); // Perbarui waktu
        lastUpdateTime = now;
    }


    updateOverlay()
    displayGold(); // Gambar ulang gold
    displayTime(); // Gambar ulang waktu

    

    // Lanjutkan animasi
    if (!isGameOver && !areaEvent.initiated) {
        window.requestAnimationFrame(housemap);
    }
    //updateBars()
    window.requestAnimationFrame(housemap); // Jalankan animasi terus-menerus
}

let mulaiAnimasimarket = false
function newMap() {
    console.log("newMap is running");

    if(mulaiAnimasimarket == false){
        if (checkMarketCollision(characterX, characterY)) {
            const targetArea = areaMarketMap[0]; // Ambil objek area pertama di map market
            console.warn("Initial position collides with boundary. Adjusting position...");
            characterX = targetArea.position.x; // Posisi aman
            characterY = targetArea.position.y; // Posisi aman
        }
    }

    mulaiAnimasimarket = true

    if (!marketMap.image.complete) {
        console.error("Market map image is not loaded yet.");
        return;
    }

    const mapWidth = image.width;
    const mapHeight = image.height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 30;

    if (keys.up && lastKey === 'w' && characterY > 0) {
        let newY = characterY - 4;
        if (!checkMarketCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.down && lastKey === 's' && characterY < mapHeight - characterHeight) {
        let newY = characterY + 4;
        if (!checkMarketCollision(characterX, newY)) {
            characterY = newY;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.left && lastKey === 'a' && characterX > 0) {
        let newX = characterX - 4;
        if (!checkMarketCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }
    if (keys.right && lastKey === 'd' && characterX < mapWidth - characterWidth) {
        let newX = characterX + 4;
        if (!checkMarketCollision(newX, characterY)) {
            characterX = newX;
            console.log("Character Position:", { characterX, characterY });
        }
    }

   
    
    if (characterX <= 739 && characterX >= 641 && characterY >= 671  && characterY <= 703) {
        console.log("kamu berada di area");
    
        // Reset posisi karakter ke titik awal
        characterX = startX;
        characterY = startY;
    
        // Reset posisi background
        const deltaX = startbackgroundX - backgroundX;
        const deltaY = startbackgroundY - backgroundY;
        backgroundX = startbackgroundX;
        backgroundY = startbackgroundY;
    
        // Reset area event
        areaEvent.initiated = false;
    
        // Reset input keyboard
        keys.up = false;
        keys.down = false;
        keys.left = false;
        keys.right = false;
    
        // Reset posisi boundaries
    boundaries.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area berdasarkan perubahan background
    area.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    // Sesuaikan posisi area lainnya
    areaHouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaForest.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaMeathouse.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaFarm.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });
    
    areaCave.forEach(boundary => {
        boundary.position.x += deltaX;
        boundary.position.y += deltaY;
    });


         mulaiAnimasimarket = false
        // Reset target map
        targetMap = null;
    
        // Mulai ulang animasi
        animate();
    
        // Debugging
        console.log(`Character reset to X=${characterX}, Y=${characterY}`);
        console.log(`Background reset to X=${backgroundX}, Y=${backgroundY}`);
        console.log(`Target Map: ${targetMap}`);
    
        return;
    }

    // Pastikan background tidak keluar dari batas peta
    backgroundX = Math.max(-(mapWidth - canvas.width), Math.min(0, backgroundX));
    backgroundY = Math.max(-(mapHeight - canvas.height), Math.min(0, backgroundY));

    // Gambar ulang semua elemen
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(image, backgroundX, backgroundY);

    c.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas


    /*if (checkMarketCollision(characterX, characterY)) {
        const safePosition = findSafePosition();
        characterX = safePosition.x;
        characterY = safePosition.y;
        console.log("Adjusted Character Position:", { characterX, characterY });
    }*/
    // Gambar market map dengan ukuran tertentu
    c.drawImage(
        marketMap.image,
        0, // Posisi X
        0, // Posisi Y
        canvas.width * 1, // Lebar market map sesuai canvas
        canvas.height * 1, // Tinggi market map sesuai canvas
    ); // Gambar market map

    drawBar(50, 20, 200, 20, health, '#4caf50', healthLogo);
    drawBar(310, 20, 200, 20, energy, '#2196f3', energyLogo);
    drawBar(570, 20, 200, 20, hunger, '#ff9800', hungerLogo);
    drawBar(830, 20, 200, 20, hygiene, '#9c27b0', hygieneLogo);
    drawBar(1090, 20, 200, 20, happiness, '#ffc107', happinessLogo);

    if (gameHours >= 6 && gameHours < 12) { // pago
        targetOverlay = { r: 255, g: 255, b: 240, a: 0.08 };
        } else if (gameHours >= 12 && gameHours < 16) { // siang
            targetOverlay = { r: 0, g: 0, b: 0, a: 0 };
        } else if (gameHours >= 16 && gameHours < 18) { // sunset
            targetOverlay = { r: 255, g: 94, b: 77, a: 0.3 };
        } else if (gameHours >= 18 && gameHours < 21) { // sore
            targetOverlay = { r: 70, g: 130, b: 180, a: 0.3 };
        } else { // malam
            targetOverlay = { r: 10, g: 10, b: 30, a: 0.6 };
        }

    
    drawCollisionMarketMap();
    drawAreaMarketMap();

    c.drawImage(
        playerImage[currentDirection],
        0,
        (currentFrame * frameHeight) + spriteOffsetY,
        frameWidth,
        frameHeight,
        characterX,
        characterY,
        40,
        40
    );
    //c.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas terlebih dahulu

    //drawAreaMarketMap(); // Gambar area market
    //console.log(drawAreaMarketMap)
    
    const now = Date.now();
    if (now - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % totalFrames;
        lastFrameTime = now;
    }
    if (now - lastUpdateTime >= 1000) { // Perbarui setiap 1 detik
        health = Math.max(0, health);
        energy = Math.max(0, energy - (2 / 60));
        hunger = Math.max(0, hunger - (4 / 60));
        hygiene = Math.max(0, hygiene - (6 / 60));
        happiness = Math.max(0, happiness - (5 / 60));

        if (hunger === 0) health = Math.max(0, health - (3 / 60));
        if (energy === 0) health = Math.max(0, health - (4 / 60));
        if (hygiene === 0) health = Math.max(0, health - (1 / 60));
        if (happiness === 0) health = Math.max(0, health - (2 / 60));

        if (health === 0) {
            gameOver();
            return;
        }

        updateTime(); // Perbarui waktu
        lastUpdateTime = now;
    }


    // gambar npcnya
    drawSellerNPC();

    // ngecek collision didalam kotak ga
    checkSellerCollision();

    // gambar shelves
    drawShelves();

    // ngecek collision didalam shelves ga
    checkShelfCollision();

    updateOverlay()
    displayGold(); // Gambar ulang gold
    displayTime(); // Gambar ulang waktu

    
   
    // Lanjutkan animasi
    if (!isGameOver && !areaEvent.initiated) {
        window.requestAnimationFrame(newMap);
    }
    //updateBars()
    window.requestAnimationFrame(newMap); // Jalankan animasi terus-menerus
}


// Tunggu hingga semua gambar selesai dimuat
image.onload = () => {
    console.log("Background image loaded successfully.");
    playerImage.onload = () => {
        console.log("Player image loaded successfully.");
        initializeGame(); // Mulai game setelah semua gambar dimuat
    };
};


// function gameover
function gameOver() {
    console.log("Game Over");

    // ngeset gameover itu udah bener
    isGameOver = true;

    // bersihin satu layar
    c.clearRect(0, 0, canvas.width, canvas.height);

    // background hitam
    c.fillStyle = 'rgb(0, 0, 0)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'red';
    c.font = '50px Arial';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('GAME OVER', canvas.width / 2, 350);

    c.fillStyle = 'white'; 
    c.font = '20px Arial';
    c.fillText('Press F5 to Restart', canvas.width / 2, 400);

    // Sembunyikan D-Pad
    const dpad = document.getElementById('dpad');
    if (dpad) {
        dpad.classList.add('hidden'); 
    }
}




//array inventory
let inventory = [];


//object ttg item yang dapat dibeli
const shopItems = {
    health: {
        'MedKit': { price: 5000, effect: () => { health = Math.min(health + 20, 100); } },
        'Bandage': { price: 500, effect: () => { health = Math.min(health + 1, 100); } }
    },
    food: {
        'Bread': { price: 500, effect: () => { hunger = Math.min(hunger + 5, 100); energy = Math.max(energy - 1, 0); } },
        'Meats': { price: 5000, effect: () => { hunger = Math.min(hunger + 60, 100); energy = Math.max(energy - 1, 0); } },
        'Mineral Water': { price: 500, effect: () => { hunger = Math.min(hunger + 5, 100); energy = Math.max(energy - 1, 0); } },
        'Energy Drink': { price: 5000, effect: () => { hunger = Math.min(hunger + 60, 100); energy = Math.max(energy - 1, 0); } }
    },
    workitems: {
        'pickaxe lvl 2': { price: 1200 },
        'pickaxe lvl 3': { price: 2000 },
        'pickaxe lvl 4': { price: 5000 },
        'pickaxe lvl 5': { price: 10000 },
        'axe lvl 2': { price: 1300 },
        'axe lvl 3': { price: 2100 },
        'axe lvl 4': { price: 5500 },
        'Hoe lvl 2': { price: 1400 },
        'Hoe lvl 3': { price: 2200 },
        'Cleaver lvl 2': { price: 1500 }
    },
    toys: {
        'Puzzle': { price: 500, effect: () => { graduallyDecreaseEnergy(2, 10); increaseHappinessGradually(7, 10); } },
        'Lego': { price: 5000, effect: () => { graduallyDecreaseEnergy(2, 60); increaseHappinessGradually(70, 60); } }
    }
};

//object ttg item yang dapat dijual
const sellPrices = {
    'Stone': 5,
    'Wood': 10,
    'Meat': 15,
    'Grains': 20
};

//untuk mengupdate waktu setelah kerja ,tidur ,dll
function updateGameClock(minutesToAdd) {
    gameMinutes += minutesToAdd;
    while (gameMinutes >= 60) {
        gameMinutes -= 60;
        gameHours++;
    }
    while (gameHours >= 24) {
        gameHours -= 24;
        gameDays++;
    }
}

//function untuk beli item
function buyItem(category, itemName) {
    const item = shopItems[category][itemName];
    if (!item) {
        console.log("Item not found.");
        return;
    }

    if (item.purchased) {
        alert(`${itemName} has already been purchased!`);
        return;
    }


    const price = item.price;
    if (gold >= price) {
        gold -= price;

        if (category === 'workitems') {
            // update level tool
            if (itemName.includes('pickaxe')) {
                pickaxe = parseInt(itemName.match(/\d+/)[0]);
                alert(`Pickaxe upgraded to level ${pickaxe}. You can now mine at higher levels!`);
                console.log(`Pickaxe level upgraded to ${pickaxe}.`);
            } else if (itemName.includes('axe')) {
                axe = parseInt(itemName.match(/\d+/)[0]);
                alert(`Axe upgraded to level ${axe}. You can now chop wood at higher levels!`);
                console.log(`Axe level upgraded to ${axe}.`);
            } else if (itemName.includes('Hoe')) {
                hoe = parseInt(itemName.match(/\d+/)[0]);
                alert(`Hoe upgraded to level ${hoe}. You can now farm at higher levels!`);
                console.log(`Hoe level upgraded to ${hoe}.`);
            } else if (itemName.includes('Cleaver')) {
                cleaver = parseInt(itemName.match(/\d+/)[0]);
                alert(`Cleaver upgraded to level ${cleaver}. You can now work at the meat house at higher levels!`);
                console.log(`Cleaver level upgraded to ${cleaver}.`);
            }

            // artinya udh kebeli
            item.purchased = true;
        } else if (category === 'health') {
            item.effect();
            console.log(`${itemName} used immediately. Health is now ${health}.`);
        } else {
            // nambahin item lain
            addItemToInventory(itemName, 1);
            console.log(`${itemName} purchased and added to inventory.`);
        }

        updateInventoryUI(); 
        displayGold(); 
    } else {
        console.log("Not enough gold!");
    }
}

//function untuk menggunakan item
function useItem(itemName) {
    // Cek apakah item termasuk kategori food 
    const isFood = shopItems.food[itemName];

    if (isFood && targetMap !== 'house') {
        alert("Kamu hanya bisa makan di meja makan!");
        return;
    }

    // Jika item adalah food atau toys dan targetMap 'house', item digunakan
    if (isFood && targetMap === 'house') {
        if (characterX <= 606 && characterX >= 557 && characterY >= 77 && characterY <= 169) {
            let itemIndex = inventory.findIndex(item => item.name === itemName); // Mencari posisi item
            if (itemIndex > -1) {
                let item = inventory[itemIndex];
                if (item.effect) item.effect(); // Menjalankan efek item
                item.quantity -= 1; // Kurangi jumlah item
                if (item.quantity <= 0) inventory.splice(itemIndex, 1); // Hapus item jika jumlahnya 0
                console.log(`${itemName} digunakan`);
                updateInventoryUI();
            } else {
                console.log("Item tidak ada di inventory");
            }
            return;
        } else {
            alert("Kamu hanya bisa makan/minum di meja makan!");
            return;
        }
    }

    // Cek apakah item termasuk kategori toys
    const isToys = shopItems.toys[itemName];

    if (isToys && targetMap !== 'house') {
        alert("Kamu hanya bisa main di ruang TV!");
        return;
    }

    // Jika item adalah toys dan targetMap 'house', item digunakan
    if (isToys && targetMap === 'house') {
        if (characterX <= 353 && characterX >= 229 && characterY >= 325 && characterY <= 349) {
            let itemIndex = inventory.findIndex(item => item.name === itemName); // Mencari posisi item
            if (itemIndex > -1) {
                let item = inventory[itemIndex];
                if (item.effect) item.effect(); // Menjalankan efek item
                item.quantity -= 1; // Kurangi jumlah item
                if (item.quantity <= 0) inventory.splice(itemIndex, 1); // Hapus item jika jumlahnya 0
                console.log(`${itemName} digunakan`);
                updateInventoryUI();
            } else {
                console.log("Item tidak ada di inventory");
            }
            return;
        } else {
            alert("Kamu hanya bisa main di ruang TV!");
            return;
        }
    }

    let itemIndex = inventory.findIndex(item => item.name === itemName); // Mencari posisi item
    if (itemIndex > -1) {
        let item = inventory[itemIndex];
        if (item.effect) item.effect(); // Menjalankan efek item
        item.quantity -= 1; // Kurangi jumlah item
        if (item.quantity <= 0) inventory.splice(itemIndex, 1); // Hapus item jika jumlahnya 0
        console.log(`${itemName} digunakan`);
        updateInventoryUI();
    } else {
        console.log("Item tidak ada di inventory");
    }
}

//efek item happiness, yaitu meningkatkan happiness secara bertahap
function increaseHappinessGradually(totalIncrease, duration) {
    let perInterval = totalIncrease / (duration * 6);
    let count = 0;
    const interval = setInterval(() => {
        happiness = Math.min(happiness + perInterval, 100);
        updateGameClock(1);
        count++;
        console.log(`Happiness meningkat: ${happiness.toFixed(2)}`);
        if (count >= duration * 6 || happiness >= 100) clearInterval(interval);
    }, 10000);
} //untuk puzzle akan menambah 7 happiness dlm 10 menit, untuk lego 70 happiness dlm 60 menit

//efek item happiness, yaitu mengurangi energy secara bertahap
function graduallyDecreaseEnergy(percent, durationInMinutes) {
    let decreasePerInterval = percent / (durationInMinutes * 6);
    let count = 0;
    const interval = setInterval(() => {
        energy = Math.max(energy - decreasePerInterval, 0);
        updateGameClock(1);
        count++;
        console.log(`Energy berkurang: ${energy.toFixed(2)}`);
        if (count >= durationInMinutes * 6 || energy <= 0) clearInterval(interval);
    }, 10000); //puzzle dan lego akan mengurangi energy 2% dlm 10 menit
}

//function untuk memperbarui UI inventory
function updateInventoryUI() {
    const inventoryContainer = document.getElementById("inventory");
    inventoryContainer.innerHTML = "<h3>Inventory</h3>"; // Reset inventory UI

    inventory.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.style.display = "flex";
        itemDiv.style.alignItems = "center";
        itemDiv.style.marginBottom = "5px";

        // namabahin gambar item
        const itemImage = document.createElement("img");
        itemImage.src = `../image/item/${item.name.toLowerCase().replace(/\s+/g, '_')}.png`;
        itemImage.alt = item.name;
        itemImage.style.width = "30px";
        itemImage.style.height = "30px";
        itemImage.style.marginRight = "10px";

        // nambahin nama sama jumlah item
        const itemInfo = document.createElement("div");
        itemInfo.innerHTML = `<strong>${item.name}</strong> x${item.quantity}`;

        // nambahin use button
        if (item.effect) {
            const useButton = document.createElement("button");
            useButton.innerText = "Use";
            useButton.style.marginLeft = "10px";
            useButton.onclick = () => {
                useItem(item.name); 
            };
            itemDiv.appendChild(useButton);
        }

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemInfo);
        inventoryContainer.appendChild(itemDiv);
    });
}

//menambahkan item hasil kerja ke inventory
function addItemToInventory(itemName, quantity) {
    const existingItem = inventory.find(item => item.name === itemName);

    if (existingItem) {
        // kalo ada namabahin jumlah
        existingItem.quantity += quantity;
    } else {
        // kalo ga ada tambahin item baru
        const shopItem = Object.values(shopItems).flatMap(category => Object.entries(category))
            .find(([name]) => name === itemName);

        inventory.push({
            name: itemName,
            quantity: quantity,
            effect: shopItem ? shopItem[1].effect || null : null 
        });
    }

    updateInventoryUI(); 
    console.log(`${quantity} ${itemName}(s) added to inventory`);
}

//function untuk menambah waktu ketika kerja yaitu 1jam dan mengurangi energi ketika kerja yaitu 6%
function advanceGameTimeGradually(hours, callback) {
    let elapsed = 0;
    const interval = setInterval(() => {
        updateGameClock(6); // 0.1 jam = 6 menit
        elapsed += 0.1;
        energy = Math.max(energy - (6 / 10), 0);
        console.log(`Waktu game: ${gameHours}:${gameMinutes} | Energy: ${energy.toFixed(2)}`);

        if (elapsed >= hours) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 360);
}

//function untuk kerja di cave
function workAtCave(level) {
    if (isActionInProgress) return; // Cegah pekerjaan ganda
    isActionInProgress = true; // Tandai bahwa karakter sedang bekerja

    const previousImage = playerImage[currentDirection]; // Simpan gambar sebelumnya
    const workingImage = loadWorkImage(`mining`); // Muat gambar kerja berdasarkan level
    playerImage[currentDirection] = workingImage;

    //characterX = initialCharacterXCave; // Posisi default X (contoh)
    //characterY = initialCharacterYCave; // Posisi default Y (contoh)
    
    let predefinedPositions;
    switch (level) {
        case 1:
            predefinedPositions = [
                { x: 50, y: 600 },
                { x: 150, y: 600 },
                { x: 200, y: 600 },
                { x: 300, y: 640 },
                { x: 250, y: 550 }
            ];
            break;
        case 2:
            predefinedPositions = [
                { x: 50, y: 70 },
                { x: 150, y: 150 },
                { x: 200, y: 170 },
                { x: 50, y: 150 },
                { x: 250, y: 50 }
            ];
            break; 
        case 3:
            predefinedPositions = [
                { x: 700, y: 300 },
                { x: 750, y: 300 },
                { x: 800, y: 250 },
                { x: 850, y: 350 },
                { x: 700, y: 350 }
            ];
            break;
        case 4:
            predefinedPositions = [
                { x: 1320, y: 600 },
                { x: 1330, y: 680 },
                { x: 1250, y: 650 },
                { x: 1310, y: 500 },
                { x: 1170, y: 680 }
            ];
            break;
        case 5:
            predefinedPositions = [
                { x: 1200, y: 200 },
                { x: 1350, y: 70 },
                { x: 1300, y: 190 },
                { x: 1400, y: 320 },
                { x: 1250, y: 100 }
            ]
    }

    const moveInterval = setInterval(() => {
        // Pilih posisi acak dari array
        const randomIndex = Math.floor(Math.random() * predefinedPositions.length);
        const randomPosition = predefinedPositions[randomIndex];

        // Perbarui posisi karakter
        characterX = randomPosition.x;
        characterY = randomPosition.y;

        console.log(`Karakter berpindah ke posisi: X=${characterX}, Y=${characterY}`);
    }, 500); // Perbarui posisi setiap 500ms

    const reward = [0, 24, 50, 100, 200, 400][level] || 0;
    console.log(`Mulai bekerja di gua level ${level}...`);
    advanceGameTimeGradually(1, () => {
        clearInterval(moveInterval);
        addItemToInventory('Stone', reward);
        console.log(`Selesai bekerja, mendapatkan ${reward} Stone`);
        isActionInProgress = false; // Tandai bahwa pekerjaan selesai
        playerImage[currentDirection] = previousImage;
        characterX = 750
        characterY = 500
    });
    playerImage[currentDirection] = previousImage;
}


//function untuk kerja di farm
function workAtFarm(level) {
    if (isActionInProgress) return; // Cegah pekerjaan ganda
    isActionInProgress = true; // Tandai bahwa karakter sedang bekerja

    const reward = [0, 12, 14, 27][level] || 0;
    console.log(`Mulai bekerja di ladang level ${level}...`);
    
    const previousImage = playerImage[currentDirection]; // Simpan gambar sebelumnya
    const workingImage = loadWorkImage(`farm`); // Muat gambar kerja berdasarkan level
    playerImage[currentDirection] = workingImage;

    let predefinedPositions;
    switch (level) {
        case 1:
            predefinedPositions = [
                { x: 1200, y: 200 },
                { x: 1100, y: 150 },
                { x: 1300, y: 170 },
                { x: 1000, y: 150 },
                { x: 1250, y: 150 }
            ];
            break;
        case 2:
            predefinedPositions = [
                { x: 50, y: 200 },
                { x: 150, y: 150 },
                { x: 400, y: 170 },
                { x: 350, y: 150 },
                { x: 250, y: 150 }
            ];
            break;
        case 3:
            predefinedPositions = [
                { x: 700, y: 600 },
                { x: 500, y: 550 },
                { x: 900, y: 500 },
                { x: 1000, y: 600 },
                { x: 600, y: 600 }
            ];
            break;
    }
    let previousX = characterX;
    let previousY = characterY;
    
    const moveInterval = setInterval(() => {
        // Pilih posisi acak dari array
        const randomIndex = Math.floor(Math.random() * predefinedPositions.length);
        const randomPosition = predefinedPositions[randomIndex];

        // Perbarui posisi karakter
        characterX = randomPosition.x;
        characterY = randomPosition.y;

        console.log(`Karakter berpindah ke posisi: X=${characterX}, Y=${characterY}`);
    }, 500); // Perbarui posisi setiap 500ms

    advanceGameTimeGradually(1, () => {
        clearInterval(moveInterval); // Hentikan perpindahan posisi setelah selesai
        addItemToInventory('Grains', reward);
        console.log(`Selesai bekerja, mendapatkan ${reward} Wood`);
        isActionInProgress = false; // Tandai bahwa pekerjaan selesai
        playerImage[currentDirection] = previousImage;
        characterX = 740
        characterY = 350
    });
    playerImage[currentDirection] = previousImage;
}


//function untuk kerja di meathouse
function workAtMeathouse(level) {
    if (isActionInProgress) return; // Cegah pekerjaan ganda
    isActionInProgress = true; // Tandai bahwa karakter sedang bekerja
    const reward = [0, 8, 20][level] || 0;
    console.log(`Mulai bekerja di rumah daging level ${level}...`);
    
    const previousImage = playerImage[currentDirection]; // Simpan gambar sebelumnya
    const workingImage = loadWorkImage(`meathouse`); // Muat gambar kerja berdasarkan level
    playerImage[currentDirection] = workingImage;

    let predefinedPositions;
    switch (level) {
        case 1:
            predefinedPositions = [
                { x: 920, y: 250 },
                { x: 960, y: 250 },
                { x: 950, y: 250 },
                { x: 900, y: 290 },
                { x: 970, y: 250 }
            ];
            break;
        case 2:
            predefinedPositions = [
                { x: 400, y: 200 },
                { x: 480, y: 200 },
                { x: 420, y: 300 },
                { x: 500, y: 200 },
                { x: 550, y: 300 }
            ];
            break;
    }


    const moveInterval = setInterval(() => {
        // Pilih posisi acak dari array
        const randomIndex = Math.floor(Math.random() * predefinedPositions.length);
        const randomPosition = predefinedPositions[randomIndex];

        // Perbarui posisi karakter
        characterX = randomPosition.x;
        characterY = randomPosition.y;

        console.log(`Karakter berpindah ke posisi: X=${characterX}, Y=${characterY}`);
    }, 500); // Perbarui posisi setiap 500ms

    advanceGameTimeGradually(1, () => {
        clearInterval(moveInterval); // Hentikan perpindahan posisi setelah selesai
        addItemToInventory('Meat', reward);
        console.log(`Selesai bekerja, mendapatkan ${reward} Meat`);
        isActionInProgress = false; // Tandai bahwa pekerjaan selesai
        playerImage[currentDirection] = previousImage;
        characterX = 700
        characterY = 500
    });
    playerImage[currentDirection] = previousImage;
}    


//function untuk kerja di forest
function workAtForest(level) {
    if (isActionInProgress) return; // Cegah pekerjaan ganda
    isActionInProgress = true; // Tandai bahwa karakter sedang bekerja
    
    const reward = [0, 6, 26, 52, 110][level] || 0;
    console.log(`Mulai bekerja di hutan level ${level}...`);
    
    const previousImage = playerImage[currentDirection]; // Simpan gambar sebelumnya
    const workingImage = loadWorkImage(`forest`); // Muat gambar kerja berdasarkan level
    playerImage[currentDirection] = workingImage;

    let predefinedPositions;
    switch (level) {
        case 1:
            predefinedPositions = [
                { x: 1200, y: 500 },
                { x: 1100, y: 600 },
                { x: 1300, y: 550 },
                { x: 1000, y: 600 },
                { x: 1250, y: 500 }
            ];
            break;
        case 2:
            predefinedPositions = [
                { x: 1200, y: 200 },
                { x: 1100, y: 150 },
                { x: 1300, y: 170 },
                { x: 1000, y: 150 },
                { x: 1250, y: 150 }
            ];
            break;
        case 3:
            predefinedPositions = [
                { x: 50, y: 200 },
                { x: 150, y: 150 },
                { x: 400, y: 170 },
                { x: 350, y: 150 },
                { x: 250, y: 150 }
            ];
            break;
        case 4:
            predefinedPositions = [
                { x: 300, y: 600 },
                { x: 200, y: 500 },
                { x: 400, y: 650 },
                { x: 350, y: 520 },
                { x: 100, y: 550 }
            ];
            break;
    }


    let previousX = characterX;
    let previousY = characterY;

    // Tambahkan logika perpindahan posisi secara acak
    const moveInterval = setInterval(() => {
        // Pilih posisi acak dari array
        const randomIndex = Math.floor(Math.random() * predefinedPositions.length);
        const randomPosition = predefinedPositions[randomIndex];

        // Perbarui posisi karakter
        characterX = randomPosition.x;
        characterY = randomPosition.y;

        console.log(`Karakter berpindah ke posisi: X=${characterX}, Y=${characterY}`);
    }, 500); // Perbarui posisi setiap 500ms

    advanceGameTimeGradually(1, () => {
        clearInterval(moveInterval);
        addItemToInventory('Wood', reward);
        console.log(`Selesai bekerja, mendapatkan ${reward} Grains`);
        isActionInProgress = false; // Tandai bahwa pekerjaan selesai
        playerImage[currentDirection] = previousImage;
        characterX = 700
        characterY = 450
    });
    playerImage[currentDirection] = previousImage;
}

//function ketika tidur , energy naik 80 dan timeskip 10 jam
function sleep() {
    energy = Math.min(energy + 80, 100);
    updateGameClock(600); // 10 jam = 600 menit
    console.log(`Tidur selama 10 jam. Energy sekarang: ${energy}, waktu sekarang: ${gameHours}:${gameMinutes}`);
}

//function ketika mandi, hygiene naik 70
function shower() {
    hygiene = Math.min(hygiene + 70, 100);
    console.log(`Mandi! Hygiene sekarang: ${hygiene}`);
}
