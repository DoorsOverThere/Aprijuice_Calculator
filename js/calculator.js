const urlParams = new URLSearchParams(window.location.search);

let recipe = {
    'apricornColor': urlParams.get('apricornColor') ?? 'Red',
    'berries': [],
};
let aprijuiceName = '';

['1', '2', '3'].forEach(berryNum => {
    if(urlParams.get('berry' + berryNum)) {
        const berry = berries.find(berry => berry.name === decodeURIComponent(urlParams.get('berry' + berryNum)));
        recipe.berries.push(berry);
    }
});


const apricornSlot = document.getElementById("apricornSlot");
const berrySlots = [
    document.getElementById("berrySlot1"),
    document.getElementById("berrySlot2"),
    document.getElementById("berrySlot3")
    ];
const outputSlot = document.getElementById("outputSlot");
const outputCalculations = document.getElementById("outputCalculations");

function setRecipe(recipe) {
    recipe = recipe || {};
    updateUI();
}

function selectApricorn(color) {
    recipe.apricornColor = color;
    updateUI();
}

function addBerry(berry) {
    if(recipe.berries.length < 3) {
        recipe.berries.push(berry);
        updateUI();
    }
}

function removeBerry(index) {
    recipe.berries.splice(index, 1);
    updateUI()
}

function updateUI() {
    apricornSlot.innerHTML = itemHTML[recipe.apricornColor+" Apricorn"];
    berrySlots.forEach((berrySlot, index) => {
        berrySlot.innerHTML = recipe.berries.length > index ? itemHTML[recipe.berries[index].name] : '';
    });
    calculate();
}

function calculate() {
    let aprijuice = {
        acceleration: aprijuices[recipe.apricornColor].acceleration,
        skill: aprijuices[recipe.apricornColor].skill,
        speed: aprijuices[recipe.apricornColor].speed,
        stamina: aprijuices[recipe.apricornColor].stamina,
        jump: aprijuices[recipe.apricornColor].jump
    }
    let berryPoints = {
        acceleration: 0,
        skill: 0,
        speed: 0,
        stamina: 0,
        jump: 0
    }
    recipe.berries.forEach(berry => {
        ['spicy', 'sour', 'dry', 'bitter', 'sweet'].forEach(flavor => {
            berryPoints[flavorMap[flavor]] += berry[flavor];
        });
    });
    Object.keys(berryPoints).forEach(stat => {
        flavorThresholds.forEach(threshold => {
            if(berryPoints[stat] >= threshold) {
                aprijuice[stat]++;
            }
        });
    });

    let totalPoints = 0;
    Object.keys(berryPoints).forEach(stat => {
        totalPoints += aprijuice[stat];
    });

    aprijuiceName = "";
    prefixThresholds.forEach((prefix, threshold) => {
        if(totalPoints >= threshold) {
            aprijuiceName = prefix;
        }
    });
    aprijuiceName += recipe.apricornColor + " Aprijuice";
    aprijuice.name = aprijuiceName;
    aprijuice.berryPoints = berryPoints;
    aprijuice.apricorn

    updateOutput(aprijuice);
}

function updateOutput(aprijuice) {
    let berryStatTotals = {
        acceleration: 0,
        skill: 0,
        speed: 0,
        stamina: 0,
        jump: 0
    }
    Object.keys(aprijuice.berryPoints).forEach(stat => {
        flavorThresholds.forEach(threshold => {
            if (aprijuice.berryPoints[stat] >= threshold) {
                berryStatTotals[stat]++;
            }
        });
    });

    outputSlot.innerHTML = itemHTML[aprijuice.name];
    outputSlot.getElementsByClassName('item-tooltip')[0].innerHTML = '<div>' + aprijuice.name + '</div>' +
        '<div style="color: var(--spicy); text-shadow: 4px 4px var(--spicyShadow);">Acceleration: ' + aprijuice.acceleration + '</div>' +
        '<div style="color: var(--sour); text-shadow: 4px 4px var(--sourShadow);">Stamina: ' + aprijuice.stamina + '</div>' +
        '<div style="color: var(--dry); text-shadow: 4px 4px var(--dryShadow);">Skill: ' + aprijuice.skill + '</div>' +
        '<div style="color: var(--bitter); text-shadow: 4px 4px var(--bitterShadow);">Jump: ' + aprijuice.jump + '</div>' +
        '<div style="color: var(--sweet); text-shadow: 4px 4px var(--sweetShadow);">Speed: ' + aprijuice.speed + '</div>';

    let calcStr = '<div class="grid">';
    calcStr +=
        '<div></div>' +
        '<div class="grid-item" style="color: var(--spicy);">Accel.</div>' +
        '<div class="grid-item" style="color: var(--sour);">Stamina</div>' +
        '<div class="grid-item" style="color: var(--dry);">Skill</div>' +
        '<div class="grid-item" style="color: var(--bitter);">Jump</div>' +
        '<div class="grid-item" style="color: var(--sweet);">Speed</div>' +
        '<div></div>';
    calcStr += '<div class="grid-hr"></div>';
    if(recipe.berries.length > 0) {
        recipe.berries.forEach((berry, index) => {
            calcStr +=
                '<div class="mini-item grid-item">' + itemHTML[berry.name] + '</div>' +
                '<div class="grid-item" style="color: var(--spicy);">' + (berry.spicy === 0 ? '' : berry.spicy) + '</div>' +
                '<div class="grid-item" style="color: var(--sour);">' + (berry.sour === 0 ? '' : berry.sour) + '</div>' +
                '<div class="grid-item" style="color: var(--dry);">' + (berry.dry === 0 ? '' : berry.dry) + '</div>' +
                '<div class="grid-item" style="color: var(--bitter);">' + (berry.bitter === 0 ? '' : berry.bitter) + '</div>' +
                '<div class="grid-item" style="color: var(--sweet);">' + (berry.sweet === 0 ? '' : berry.sweet) + '</div>' +
                ((index+1 === recipe.berries.length && recipe.berries.length > 1) ? '<div class="grid-item">+</div>' : '<div class="grid-item"></div>');
        });
        if(recipe.berries.length > 1) {
            calcStr += '<div class="grid-hr-light"></div>';
            calcStr +=
                '<div></div>' +
                '<div class="grid-item" style="color: var(--spicy);">' + (aprijuice.berryPoints.acceleration === 0 ? '' : aprijuice.berryPoints.acceleration) + '</div>' +
                '<div class="grid-item" style="color: var(--sour);">' + (aprijuice.berryPoints.stamina === 0 ? '' : aprijuice.berryPoints.stamina) + '</div>' +
                '<div class="grid-item" style="color: var(--dry);">' + (aprijuice.berryPoints.skill === 0 ? '' : aprijuice.berryPoints.skill) + '</div>' +
                '<div class="grid-item" style="color: var(--bitter);">' + (aprijuice.berryPoints.jump === 0 ? '' : aprijuice.berryPoints.jump) + '</div>' +
                '<div class="grid-item" style="color: var(--sweet);">' + (aprijuice.berryPoints.speed === 0 ? '' : aprijuice.berryPoints.speed) + '</div>' +
                '<div class="grid-item"></div>';
        }
        calcStr +=
            '<div></div>' +
            '<div class="grid-item">' + (berryStatTotals.acceleration > 0 ? '↓' : '') + '</div>' +
            '<div class="grid-item">' + (berryStatTotals.stamina > 0 ? '↓' : '') + '</div>' +
            '<div class="grid-item">' + (berryStatTotals.skill > 0 ? '↓' : '') + '</div>' +
            '<div class="grid-item">' + (berryStatTotals.jump > 0 ? '↓' : '') + '</div>' +
            '<div class="grid-item">' + (berryStatTotals.speed > 0 ? '↓' : '') + '</div>' +
            '<div></div>';
        calcStr += '<div class="grid-hr-light"></div>';
        calcStr += '<div></div>' +
            '<div class="grid-item" style="color: var(--spicy);">' + (berryStatTotals.acceleration > 0 ? berryStatTotals.acceleration : '') + '</div>' +
            '<div class="grid-item" style="color: var(--sour);">' + (berryStatTotals.stamina > 0 ? berryStatTotals.stamina : '') + '</div>' +
            '<div class="grid-item" style="color: var(--dry);">' + (berryStatTotals.skill > 0 ? berryStatTotals.skill : '') + '</div>' +
            '<div class="grid-item" style="color: var(--bitter);">' + (berryStatTotals.jump > 0 ? berryStatTotals.jump : '') + '</div>' +
            '<div class="grid-item" style="color: var(--sweet);">' + (berryStatTotals.speed > 0 ? berryStatTotals.speed : '') + '</div>' +
            '<div></div>';
    }
    let showPlus = false;
    Object.keys(berryStatTotals).forEach(stat => {
        if(berryStatTotals[stat] > 0) {
            showPlus = true;
        }
    });
    calcStr +=
        '<div class="mini-item grid-item">' + itemHTML[recipe.apricornColor + ' Apricorn'] + '</div>' +
        '<div class="grid-item" style="color: var(--spicy);">' + (aprijuices[recipe.apricornColor].acceleration === 0 ? '' : aprijuices[recipe.apricornColor].acceleration) + '</div>' +
        '<div class="grid-item" style="color: var(--sour);">' + (aprijuices[recipe.apricornColor].stamina === 0 ? '' : aprijuices[recipe.apricornColor].stamina) + '</div>' +
        '<div class="grid-item" style="color: var(--dry);">' + (aprijuices[recipe.apricornColor].skill === 0 ? '' : aprijuices[recipe.apricornColor].skill) + '</div>' +
        '<div class="grid-item" style="color: var(--bitter);">' + (aprijuices[recipe.apricornColor].jump === 0 ? '' : aprijuices[recipe.apricornColor].jump) + '</div>' +
        '<div class="grid-item" style="color: var(--sweet);">' + (aprijuices[recipe.apricornColor].speed === 0 ? '' : aprijuices[recipe.apricornColor].speed) + '</div>' +
        '<div class="grid-item">' + (showPlus ? '+' : '') + '</div>';
    calcStr += '<div class="grid-hr"></div>';
    calcStr += '<div class="mini-item grid-item">' + itemHTML[aprijuice.name] + '</div>' +
        '<div class="grid-item-large" style="color: var(--spicy);">' + (aprijuice.acceleration !== 0 ? aprijuice.acceleration : '') + '</div>' +
        '<div class="grid-item-large" style="color: var(--sour);">' + (aprijuice.stamina !== 0 ? aprijuice.stamina : '') + '</div>' +
        '<div class="grid-item-large" style="color: var(--dry);">' + (aprijuice.skill !== 0 ? aprijuice.skill : '') + '</div>' +
        '<div class="grid-item-large" style="color: var(--bitter);">' + (aprijuice.jump !== 0 ? aprijuice.jump : '') + '</div>' +
        '<div class="grid-item-large" style="color: var(--sweet);">' + (aprijuice.speed !== 0 ? aprijuice.speed : '') + '</div>' +
        '<div></div>';
    calcStr += '</div>';

    outputCalculations.innerHTML = calcStr;
}

function resetRecipe() {
    recipe = {
        'apricornColor': 'Red',
        'berries': [],
    }
    updateUI();
}

async function shareRecipe() {
    const shareData = {
        title: aprijuiceName,
        text: 'Aprijuice Calculator',
        url:  window.location.href
    };
    shareData.url += '?apricornColor=' + recipe.apricornColor;
    recipe.berries.forEach((berry, index) => {
        shareData.url += '&berry' + (index + 1) + '=' + encodeURIComponent(berry.name);
    });
    navigator.share(shareData);
}

updateUI();