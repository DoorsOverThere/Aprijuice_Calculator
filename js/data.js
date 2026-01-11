//aprijuice stat modifiers
const aprijuices = {
    "Red": {
        acceleration: 2,
        skill: 0,
        speed: 0,
        stamina: -1,
        jump: 0
    },
    "Blue": {
        acceleration: 0,
        skill: 2,
        speed: 0,
        stamina: 0,
        jump: -1
    },
    "Pink": {
        acceleration: -1,
        skill: 0,
        speed: 2,
        stamina: 0,
        jump: 0
    },
    "Yellow": {
        acceleration: 0,
        skill: -1,
        speed: 0,
        stamina: 2,
        jump: 0
    },
    "Green": {
        acceleration: 0,
        skill: 0,
        speed: -1,
        stamina: 0,
        jump: 2
    },
    "Black": {
        acceleration: 0,
        skill: 0,
        speed: 0,
        stamina: 0,
        jump: 0
    },
    "White": {
        acceleration: -2,
        skill: -2,
        speed: -2,
        stamina: -2,
        jump: -2
    },
};

//flavor to stat mapping
const flavorMap = {
    "spicy": "acceleration",
    "dry": "skill",
    "sweet": "speed",
    "sour": "stamina",
    "bitter": "jump"
}

//for each number the value is greater than or equal to, +1 to the stat point
const flavorThresholds = [15, 35, 45, 55, 75, 105];

//prefix => min stat boost required for it
const prefixThresholds = new Map([
    [0, "Plain "],
    [1, ""],
    [4, "Tasty "],
    [8, "Delicious "]
]);

//berry data
const berries = [
    {
        name: 'Cheri Berry',
        img: 'Cheri_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 10
    },
    {
        name: 'Aspear Berry',
        img: 'Aspear_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 10
    },
    {
        name: 'Chesto Berry',
        img: 'Chesto_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 0,
        total: 10
    },
    {
        name: 'Rawst Berry',
        img: 'Rawst_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 10,
        sweet: 0,
        total: 10
    },
    {
        name: 'Pecha Berry',
        img: 'Pecha_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 0,
        sweet: 10,
        total: 10
    },
    {
        name: 'Razz Berry',
        img: 'Razz_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 5,
        bitter: 0,
        sweet: 0,
        total: 15
    },
    {
        name: 'Pinap Berry',
        img: 'Pinap_Berry.png',
        spicy: 5,
        sour: 10,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 15
    },
    {
        name: 'Bluk Berry',
        img: 'Bluk_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 5,
        total: 15
    },
    {
        name: 'Wepear Berry',
        img: 'Wepear_Berry.png',
        spicy: 0,
        sour: 5,
        dry: 0,
        bitter: 10,
        sweet: 0,
        total: 15
    },
    {
        name: 'Nanab Berry',
        img: 'Nanab_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 5,
        sweet: 10,
        total: 15
    },
    {
        name: 'Oran Berry',
        img: 'Oran_Berry.png',
        spicy: 10,
        sour: 10,
        dry: 10,
        bitter: 10,
        sweet: 0,
        total: 40
    },
    {
        name: 'Persim Berry',
        img: 'Persim_Berry.png',
        spicy: 10,
        sour: 10,
        dry: 10,
        bitter: 0,
        sweet: 10,
        total: 40
    },
    {
        name: 'Leppa Berry',
        img: 'Leppa_Berry.png',
        spicy: 10,
        sour: 10,
        dry: 0,
        bitter: 10,
        sweet: 10,
        total: 40
    },
    {
        name: 'Lum Berry',
        img: 'Lum_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 10,
        bitter: 10,
        sweet: 10,
        total: 40
    },
    {
        name: 'Sitrus Berry',
        img: 'Sitrus_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 10,
        bitter: 10,
        sweet: 10,
        total: 40
    },
    {
        name: 'Eggant Berry',
        img: 'Eggant_Berry.png',
        spicy: 5,
        sour: 5,
        dry: 5,
        bitter: 5,
        sweet: 5,
        total: 25
    },
    {
        name: 'Hopo Berry',
        img: 'Hopo_Berry.png',
        spicy: 10,
        sour: 10,
        dry: 10,
        bitter: 10,
        sweet: 10,
        total: 50
    },
    {
        name: 'Figy Berry',
        img: 'Figy_Berry.png',
        spicy: 15,
        sour: 0,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 15
    },
    {
        name: 'Iapapa Berry',
        img: 'Iapapa_Berry.png',
        spicy: 0,
        sour: 15,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 15
    },
    {
        name: 'Wiki Berry',
        img: 'Wiki_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 15,
        bitter: 0,
        sweet: 0,
        total: 15
    },
    {
        name: 'Aguav Berry',
        img: 'Aguav_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 15,
        sweet: 0,
        total: 15
    },
    {
        name: 'Mago Berry',
        img: 'Mago_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 0,
        sweet: 15,
        total: 15
    },
    {
        name: 'Touga Berry',
        img: 'Touga_Berry.png',
        spicy: 20,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 0,
        total: 30
    },
    {
        name: 'Nomel Berry',
        img: 'Nomel_Berry.png',
        spicy: 10,
        sour: 20,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 30
    },
    {
        name: 'Cornn Berry',
        img: 'Cornn_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 20,
        bitter: 0,
        sweet: 10,
        total: 30
    },
    {
        name: 'Rabuta Berry',
        img: 'Rabuta_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 0,
        bitter: 20,
        sweet: 0,
        total: 30
    },
    {
        name: 'Magost Berry',
        img: 'Magost_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 10,
        sweet: 20,
        total: 30
    },
    {
        name: 'Spelon Berry',
        img: 'Spelon_Berry.png',
        spicy: 30,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 0,
        total: 40
    },
    {
        name: 'Belue Berry',
        img: 'Belue_Berry.png',
        spicy: 10,
        sour: 30,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 40
    },
    {
        name: 'Pamtre Berry',
        img: 'Pamtre_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 30,
        bitter: 0,
        sweet: 10,
        total: 40
    },
    {
        name: 'Durin Berry',
        img: 'Durin_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 0,
        bitter: 30,
        sweet: 0,
        total: 40
    },
    {
        name: 'Watmel Berry',
        img: 'Watmel_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 10,
        sweet: 30,
        total: 40
    },
    {
        name: 'Pomeg Berry',
        img: 'Pomeg_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 0,
        bitter: 10,
        sweet: 10,
        total: 30
    },
    {
        name: 'Kelpsy Berry',
        img: 'Kelpsy_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 10,
        bitter: 10,
        sweet: 0,
        total: 30
    },
    {
        name: 'Qualot Berry',
        img: 'Qualot_Berry.png',
        spicy: 10,
        sour: 10,
        dry: 0,
        bitter: 0,
        sweet: 10,
        total: 30
    },
    {
        name: 'Hondew Berry',
        img: 'Hondew_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 10,
        bitter: 10,
        sweet: 0,
        total: 30
    },
    {
        name: 'Grepa Berry',
        img: 'Grepa_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 10,
        bitter: 0,
        sweet: 15,
        total: 35
    },
    {
        name: 'Tamato Berry',
        img: 'Tamato_Berry.png',
        spicy: 20,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 0,
        total: 30
    },
    {
        name: 'Occa Berry',
        img: 'Occa_Berry.png',
        spicy: 15,
        sour: 0,
        dry: 0,
        bitter: 0,
        sweet: 10,
        total: 25
    },
    {
        name: 'Yache Berry',
        img: 'Yache_Berry.png',
        spicy: 0,
        sour: 15,
        dry: 10,
        bitter: 0,
        sweet: 0,
        total: 25
    },
    {
        name: 'Passho Berry',
        img: 'Passho_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 15,
        bitter: 10,
        sweet: 0,
        total: 25
    },
    {
        name: 'Rindo Berry',
        img: 'Rindo_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 0,
        bitter: 15,
        sweet: 0,
        total: 25
    },
    {
        name: 'Shuca Berry',
        img: 'Shuca_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 0,
        bitter: 0,
        sweet: 15,
        total: 25
    },
    {
        name: 'Chople Berry',
        img: 'Chople_Berry.png',
        spicy: 15,
        sour: 0,
        dry: 0,
        bitter: 10,
        sweet: 0,
        total: 25
    },
    {
        name: 'Payapa Berry',
        img: 'Payapa_Berry.png',
        spicy: 0,
        sour: 15,
        dry: 0,
        bitter: 0,
        sweet: 10,
        total: 25
    },
    {
        name: 'Kebia Berry',
        img: 'Kebia_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 15,
        bitter: 0,
        sweet: 0,
        total: 25
    },
    {
        name: 'Coba Berry',
        img: 'Coba_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 10,
        bitter: 15,
        sweet: 0,
        total: 25
    },
    {
        name: 'Wacan Berry',
        img: 'Wacan_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 0,
        bitter: 0,
        sweet: 15,
        total: 25
    },
    {
        name: 'Tanga Berry',
        img: 'Tanga_Berry.png',
        spicy: 20,
        sour: 10,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 30
    },
    {
        name: 'Colbur Berry',
        img: 'Colbur_Berry.png',
        spicy: 0,
        sour: 20,
        dry: 0,
        bitter: 10,
        sweet: 0,
        total: 30
    },
    {
        name: 'Charti Berry',
        img: 'Charti_Berry.png',
        spicy: 10,
        sour: 0,
        dry: 20,
        bitter: 0,
        sweet: 0,
        total: 30
    },
    {
        name: 'Haban Berry',
        img: 'Haban_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 20,
        sweet: 10,
        total: 30
    },
    {
        name: 'Kasib Berry',
        img: 'Kasib_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 20,
        total: 30
    },
    {
        name: 'Babiri Berry',
        img: 'Babiri_Berry.png',
        spicy: 25,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 0,
        total: 35
    },
    {
        name: 'Chilan Berry',
        img: 'Chilan_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 25,
        bitter: 0,
        sweet: 10,
        total: 35
    },
    {
        name: 'Roseli Berry',
        img: 'Roseli_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 10,
        sweet: 25,
        total: 35
    },
    {
        name: 'Liechi Berry',
        img: 'Liechi_Berry.png',
        spicy: 30,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 30,
        total: 70
    },
    {
        name: 'Apicot Berry',
        img: 'Apicot_Berry.png',
        spicy: 10,
        sour: 30,
        dry: 30,
        bitter: 0,
        sweet: 0,
        total: 70
    },
    {
        name: 'Ganlon Berry',
        img: 'Ganlon_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 30,
        bitter: 30,
        sweet: 10,
        total: 70
    },
    {
        name: 'Petaya Berry',
        img: 'Petaya_Berry.png',
        spicy: 30,
        sour: 10,
        dry: 0,
        bitter: 30,
        sweet: 0,
        total: 70
    },
    {
        name: 'Salac Berry',
        img: 'Salac_Berry.png',
        spicy: 0,
        sour: 30,
        dry: 0,
        bitter: 10,
        sweet: 30,
        total: 70
    },
    {
        name: 'Lansat Berry',
        img: 'Lansat_Berry.png',
        spicy: 30,
        sour: 30,
        dry: 10,
        bitter: 10,
        sweet: 30,
        total: 110
    },
    {
        name: 'Starf Berry',
        img: 'Starf_Berry.png',
        spicy: 30,
        sour: 30,
        dry: 10,
        bitter: 10,
        sweet: 30,
        total: 110
    },
    {
        name: 'Kee Berry',
        img: 'Kee_Berry.png',
        spicy: 30,
        sour: 10,
        dry: 30,
        bitter: 10,
        sweet: 10,
        total: 90
    },
    {
        name: 'Maranga Berry',
        img: 'Maranga_Berry.png',
        spicy: 10,
        sour: 10,
        dry: 10,
        bitter: 30,
        sweet: 30,
        total: 90
    },
    {
        name: 'Enigma Berry',
        img: 'Enigma_Berry.png',
        spicy: 40,
        sour: 0,
        dry: 10,
        bitter: 0,
        sweet: 0,
        total: 50
    },
    {
        name: 'Rowap Berry',
        img: 'Rowap_Berry.png',
        spicy: 10,
        sour: 40,
        dry: 0,
        bitter: 0,
        sweet: 0,
        total: 50
    },
    {
        name: 'Micle Berry',
        img: 'Micle_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 40,
        bitter: 0,
        sweet: 10,
        total: 50
    },
    {
        name: 'Jaboca Berry',
        img: 'Jaboca_Berry.png',
        spicy: 0,
        sour: 10,
        dry: 0,
        bitter: 40,
        sweet: 0,
        total: 50
    },
    {
        name: 'Custap Berry',
        img: 'Custap_Berry.png',
        spicy: 0,
        sour: 0,
        dry: 0,
        bitter: 10,
        sweet: 40,
        total: 50
    },
];

const itemHTML = {
    "Red Apricorn": '<img alt="Red Apricorn" src="imgs/apricorns/Red_Apricorn.png"><span class="item-tooltip details-tooltip"><div>Red Apricorn</div>' +
        '<div style="color: var(--spicy); text-shadow: 4px 4px var(--spicyShadow);">Acceleration: +2</div>' +
        '<div style="color: var(--sour); text-shadow: 4px 4px var(--sourShadow);">Stamina: -1</div>' +
        '</span>',
    "Blue Apricorn": '<img alt="Blue Apricorn" src="imgs/apricorns/Blue_Apricorn.png"><span class="item-tooltip details-tooltip"><div>Blue Apricorn</div>' +
        '<div style="color: var(--dry); text-shadow: 4px 4px var(--dryShadow);">Skill: +2</div>' +
        '<div style="color: var(--bitter); text-shadow: 4px 4px var(--bitterShadow);">Jump: -1</div>' +
        '</span>',
    "Pink Apricorn": '<img alt="Pink Apricorn" src="imgs/apricorns/Pink_Apricorn.png"><span class="item-tooltip details-tooltip"><div>Pink Apricorn</div>' +
        '<div style="color: var(--sweet); text-shadow: 4px 4px var(--sweetShadow);">Speed: +2</div>' +
        '<div style="color: var(--spicy); text-shadow: 4px 4px var(--spicyShadow);">Acceleration: -1</div>' +
        '</span>',
    "Yellow Apricorn": '<img alt="Yellow Apricorn" src="imgs/apricorns/Yellow_Apricorn.png"><span class="item-tooltip details-tooltip"><div>Yellow Apricorn</div>' +
        '<div style="color: var(--sour); text-shadow: 4px 4px var(--sourShadow);">Stamina: +2</div>' +
        '<div style="color: var(--dry); text-shadow: 4px 4px var(--dryShadow);">Skill: -1</div>' +
        '</span>',
    "Green Apricorn": '<img alt="Green Apricorn" src="imgs/apricorns/Green_Apricorn.png"><span class="item-tooltip details-tooltip"><div>Green Apricorn</div>' +
        '<div style="color: var(--bitter); text-shadow: 4px 4px var(--bitterShadow);">Jump: +2</div>' +
        '<div style="color: var(--sweet); text-shadow: 4px 4px var(--sweetShadow);">Speed: -1</div>' +
        '</span>',
    "Black Apricorn": '<img alt="Black Apricorn" src="imgs/apricorns/Black_Apricorn.png"><span class="item-tooltip details-tooltip"><div>Black Apricorn</div>' +
        '<div style="color: #808080FF; text-shadow: 4px 4px #303030;">No Stat Changes</div>' +
        '</span>',
    "White Apricorn": '<img alt="White Apricorn" src="imgs/apricorns/White_Apricorn.png"><span class="item-tooltip details-tooltip"><div>White Apricorn</div>' +
        '<div style="color: var(--spicy); text-shadow: 4px 4px var(--spicyShadow);">Acceleration: -2</div>' +
        '<div style="color: var(--dry); text-shadow: 4px 4px var(--dryShadow);">Skill: -2</div>' +
        '<div style="color: var(--sweet); text-shadow: 4px 4px var(--sweetShadow);">Speed: -2</div>' +
        '<div style="color: var(--sour); text-shadow: 4px 4px var(--sourShadow);">Stamina: -2</div>' +
        '<div style="color: var(--bitter); text-shadow: 4px 4px var(--bitterShadow);">Jump: -2</div>' +
        '</span>',

    "Aguav Berry": `<img alt="Aguav Berry" src="imgs/berries/Aguav_Berry.png"><span class="item-tooltip">Aguav Berry</span>`,
    "Apicot Berry": `<img alt="Apicot Berry" src="imgs/berries/Apicot_Berry.png"><span class="item-tooltip">Apicot Berry</span>`,
    "Aspear Berry": `<img alt="Aspear Berry" src="imgs/berries/Aspear_Berry.png"><span class="item-tooltip">Aspear Berry</span>`,
    "Babiri Berry": `<img alt="Babiri Berry" src="imgs/berries/Babiri_Berry.png"><span class="item-tooltip">Babiri Berry</span>`,
    "Belue Berry": `<img alt="Belue Berry" src="imgs/berries/Belue_Berry.png"><span class="item-tooltip">Belue Berry</span>`,
    "Bluk Berry": `<img alt="Bluk Berry" src="imgs/berries/Bluk_Berry.png"><span class="item-tooltip">Bluk Berry</span>`,
    "Charti Berry": `<img alt="Charti Berry" src="imgs/berries/Charti_Berry.png"><span class="item-tooltip">Charti Berry</span>`,
    "Cheri Berry": `<img alt="Cheri Berry" src="imgs/berries/Cheri_Berry.png"><span class="item-tooltip">Cheri Berry</span>`,
    "Chesto Berry": `<img alt="Chesto Berry" src="imgs/berries/Chesto_Berry.png"><span class="item-tooltip">Chesto Berry</span>`,
    "Chilan Berry": `<img alt="Chilan Berry" src="imgs/berries/Chilan_Berry.png"><span class="item-tooltip">Chilan Berry</span>`,
    "Chople Berry": `<img alt="Chople Berry" src="imgs/berries/Chople_Berry.png"><span class="item-tooltip">Chople Berry</span>`,
    "Coba Berry": `<img alt="Coba Berry" src="imgs/berries/Coba_Berry.png"><span class="item-tooltip">Coba Berry</span>`,
    "Colbur Berry": `<img alt="Colbur Berry" src="imgs/berries/Colbur_Berry.png"><span class="item-tooltip">Colbur Berry</span>`,
    "Cornn Berry": `<img alt="Cornn Berry" src="imgs/berries/Cornn_Berry.png"><span class="item-tooltip">Cornn Berry</span>`,
    "Custap Berry": `<img alt="Custap Berry" src="imgs/berries/Custap_Berry.png"><span class="item-tooltip">Custap Berry</span>`,
    "Durin Berry": `<img alt="Durin Berry" src="imgs/berries/Durin_Berry.png"><span class="item-tooltip">Durin Berry</span>`,
    "Eggant Berry": `<img alt="Eggant Berry" src="imgs/berries/Eggant_Berry.png"><span class="item-tooltip">Eggant Berry</span>`,
    "Enigma Berry": `<img alt="Enigma Berry" src="imgs/berries/Enigma_Berry.png"><span class="item-tooltip">Enigma Berry</span>`,
    "Figy Berry": `<img alt="Figy Berry" src="imgs/berries/Figy_Berry.png"><span class="item-tooltip">Figy Berry</span>`,
    "Ganlon Berry": `<img alt="Ganlon Berry" src="imgs/berries/Ganlon_Berry.png"><span class="item-tooltip">Ganlon Berry</span>`,
    "Grepa Berry": `<img alt="Grepa Berry" src="imgs/berries/Grepa_Berry.png"><span class="item-tooltip">Grepa Berry</span>`,
    "Haban Berry": `<img alt="Haban Berry" src="imgs/berries/Haban_Berry.png"><span class="item-tooltip">Haban Berry</span>`,
    "Hondew Berry": `<img alt="Hondew Berry" src="imgs/berries/Hondew_Berry.png"><span class="item-tooltip">Hondew Berry</span>`,
    "Hopo Berry": `<img alt="Hopo Berry" src="imgs/berries/Hopo_Berry.png"><span class="item-tooltip">Hopo Berry</span>`,
    "Iapapa Berry": `<img alt="Iapapa Berry" src="imgs/berries/Iapapa_Berry.png"><span class="item-tooltip">Iapapa Berry</span>`,
    "Jaboca Berry": `<img alt="Jaboca Berry" src="imgs/berries/Jaboca_Berry.png"><span class="item-tooltip">Jaboca Berry</span>`,
    "Kasib Berry": `<img alt="Kasib Berry" src="imgs/berries/Kasib_Berry.png"><span class="item-tooltip">Kasib Berry</span>`,
    "Kebia Berry": `<img alt="Kebia Berry" src="imgs/berries/Kebia_Berry.png"><span class="item-tooltip">Kebia Berry</span>`,
    "Kee Berry": `<img alt="Kee Berry" src="imgs/berries/Kee_Berry.png"><span class="item-tooltip">Kee Berry</span>`,
    "Kelpsy Berry": `<img alt="Kelpsy Berry" src="imgs/berries/Kelpsy_Berry.png"><span class="item-tooltip">Kelpsy Berry</span>`,
    "Lansat Berry": `<img alt="Lansat Berry" src="imgs/berries/Lansat_Berry.png"><span class="item-tooltip">Lansat Berry</span>`,
    "Leppa Berry": `<img alt="Leppa Berry" src="imgs/berries/Leppa_Berry.png"><span class="item-tooltip">Leppa Berry</span>`,
    "Liechi Berry": `<img alt="Liechi Berry" src="imgs/berries/Liechi_Berry.png"><span class="item-tooltip">Liechi Berry</span>`,
    "Lum Berry": `<img alt="Lum Berry" src="imgs/berries/Lum_Berry.png"><span class="item-tooltip">Lum Berry</span>`,
    "Mago Berry": `<img alt="Mago Berry" src="imgs/berries/Mago_Berry.png"><span class="item-tooltip">Mago Berry</span>`,
    "Magost Berry": `<img alt="Magost Berry" src="imgs/berries/Magost_Berry.png"><span class="item-tooltip">Magost Berry</span>`,
    "Maranga Berry": `<img alt="Maranga Berry" src="imgs/berries/Maranga_Berry.png"><span class="item-tooltip">Maranga Berry</span>`,
    "Micle Berry": `<img alt="Micle Berry" src="imgs/berries/Micle_Berry.png"><span class="item-tooltip">Micle Berry</span>`,
    "Nanab Berry": `<img alt="Nanab Berry" src="imgs/berries/Nanab_Berry.png"><span class="item-tooltip">Nanab Berry</span>`,
    "Nomel Berry": `<img alt="Nomel Berry" src="imgs/berries/Nomel_Berry.png"><span class="item-tooltip">Nomel Berry</span>`,
    "Occa Berry": `<img alt="Occa Berry" src="imgs/berries/Occa_Berry.png"><span class="item-tooltip">Occa Berry</span>`,
    "Oran Berry": `<img alt="Oran Berry" src="imgs/berries/Oran_Berry.png"><span class="item-tooltip">Oran Berry</span>`,
    "Pamtre Berry": `<img alt="Pamtre Berry" src="imgs/berries/Pamtre_Berry.png"><span class="item-tooltip">Pamtre Berry</span>`,
    "Passho Berry": `<img alt="Passho Berry" src="imgs/berries/Passho_Berry.png"><span class="item-tooltip">Passho Berry</span>`,
    "Payapa Berry": `<img alt="Payapa Berry" src="imgs/berries/Payapa_Berry.png"><span class="item-tooltip">Payapa Berry</span>`,
    "Pecha Berry": `<img alt="Pecha Berry" src="imgs/berries/Pecha_Berry.png"><span class="item-tooltip">Pecha Berry</span>`,
    "Persim Berry": `<img alt="Persim Berry" src="imgs/berries/Persim_Berry.png"><span class="item-tooltip">Persim Berry</span>`,
    "Petaya Berry": `<img alt="Petaya Berry" src="imgs/berries/Petaya_Berry.png"><span class="item-tooltip">Petaya Berry</span>`,
    "Pinap Berry": `<img alt="Pinap Berry" src="imgs/berries/Pinap_Berry.png"><span class="item-tooltip">Pinap Berry</span>`,
    "Pomeg Berry": `<img alt="Pomeg Berry" src="imgs/berries/Pomeg_Berry.png"><span class="item-tooltip">Pomeg Berry</span>`,
    "Qualot Berry": `<img alt="Qualot Berry" src="imgs/berries/Qualot_Berry.png"><span class="item-tooltip">Qualot Berry</span>`,
    "Rabuta Berry": `<img alt="Rabuta Berry" src="imgs/berries/Rabuta_Berry.png"><span class="item-tooltip">Rabuta Berry</span>`,
    "Rawst Berry": `<img alt="Rawst Berry" src="imgs/berries/Rawst_Berry.png"><span class="item-tooltip">Rawst Berry</span>`,
    "Razz Berry": `<img alt="Razz Berry" src="imgs/berries/Razz_Berry.png"><span class="item-tooltip">Razz Berry</span>`,
    "Rindo Berry": `<img alt="Rindo Berry" src="imgs/berries/Rindo_Berry.png"><span class="item-tooltip">Rindo Berry</span>`,
    "Roseli Berry": `<img alt="Roseli Berry" src="imgs/berries/Roseli_Berry.png"><span class="item-tooltip">Roseli Berry</span>`,
    "Rowap Berry": `<img alt="Rowap Berry" src="imgs/berries/Rowap_Berry.png"><span class="item-tooltip">Rowap Berry</span>`,
    "Salac Berry": `<img alt="Salac Berry" src="imgs/berries/Salac_Berry.png"><span class="item-tooltip">Salac Berry</span>`,
    "Shuca Berry": `<img alt="Shuca Berry" src="imgs/berries/Shuca_Berry.png"><span class="item-tooltip">Shuca Berry</span>`,
    "Sitrus Berry": `<img alt="Sitrus Berry" src="imgs/berries/Sitrus_Berry.png"><span class="item-tooltip">Sitrus Berry</span>`,
    "Spelon Berry": `<img alt="Spelon Berry" src="imgs/berries/Spelon_Berry.png"><span class="item-tooltip">Spelon Berry</span>`,
    "Starf Berry": `<img alt="Starf Berry" src="imgs/berries/Starf_Berry.png"><span class="item-tooltip">Starf Berry</span>`,
    "Tamato Berry": `<img alt="Tamato Berry" src="imgs/berries/Tamato_Berry.png"><span class="item-tooltip">Tamato Berry</span>`,
    "Tanga Berry": `<img alt="Tanga Berry" src="imgs/berries/Tanga_Berry.png"><span class="item-tooltip">Tanga Berry</span>`,
    "Touga Berry": `<img alt="Touga Berry" src="imgs/berries/Touga_Berry.png"><span class="item-tooltip">Touga Berry</span>`,
    "Wacan Berry": `<img alt="Wacan Berry" src="imgs/berries/Wacan_Berry.png"><span class="item-tooltip">Wacan Berry</span>`,
    "Watmel Berry": `<img alt="Watmel Berry" src="imgs/berries/Watmel_Berry.png"><span class="item-tooltip">Watmel Berry</span>`,
    "Wepear Berry": `<img alt="Wepear Berry" src="imgs/berries/Wepear_Berry.png"><span class="item-tooltip">Wepear Berry</span>`,
    "Wiki Berry": `<img alt="Wiki Berry" src="imgs/berries/Wiki_Berry.png"><span class="item-tooltip">Wiki Berry</span>`,
    "Yache Berry": `<img alt="Yache Berry" src="imgs/berries/Yache_Berry.png"><span class="item-tooltip">Yache Berry</span>`,

    "Delicious Black Aprijuice": `<img alt="Delicious Black Aprijuice" src="imgs/aprijuices/Delicious_Black_Aprijuice.png"><span class="item-tooltip details-tooltip">Delicious Black Aprijuice</span>`,
    "Delicious Blue Aprijuice": `<img alt="Delicious Blue Aprijuice" src="imgs/aprijuices/Delicious_Blue_Aprijuice.png"><span class="item-tooltip details-tooltip">Delicious Blue Aprijuice</span>`,
    "Delicious Green Aprijuice": `<img alt="Delicious Green Aprijuice" src="imgs/aprijuices/Delicious_Green_Aprijuice.png"><span class="item-tooltip details-tooltip">Delicious Green Aprijuice</span>`,
    "Delicious Pink Aprijuice": `<img alt="Delicious Pink Aprijuice" src="imgs/aprijuices/Delicious_Pink_Aprijuice.png"><span class="item-tooltip details-tooltip">Delicious Pink Aprijuice</span>`,
    "Delicious Red Aprijuice": `<img alt="Delicious Red Aprijuice" src="imgs/aprijuices/Delicious_Red_Aprijuice.png"><span class="item-tooltip details-tooltip">Delicious Red Aprijuice</span>`,
    "Delicious White Aprijuice": `<img alt="Delicious White Aprijuice" src="imgs/aprijuices/Delicious_White_Aprijuice.png"><span class="item-tooltip details-tooltip">Delicious White Aprijuice</span>`,
    "Delicious Yellow Aprijuice": `<img alt="Delicious Yellow Aprijuice" src="imgs/aprijuices/Delicious_Yellow_Aprijuice.png"><span class="item-tooltip details-tooltip">Delicious Yellow Aprijuice</span>`,
    "Plain Black Aprijuice": `<img alt="Plain Black Aprijuice" src="imgs/aprijuices/Plain_Black_Aprijuice.png"><span class="item-tooltip details-tooltip">Plain Black Aprijuice</span>`,
    "Plain Blue Aprijuice": `<img alt="Plain Blue Aprijuice" src="imgs/aprijuices/Plain_Blue_Aprijuice.png"><span class="item-tooltip details-tooltip">Plain Blue Aprijuice</span>`,
    "Plain Green Aprijuice": `<img alt="Plain Green Aprijuice" src="imgs/aprijuices/Plain_Green_Aprijuice.png"><span class="item-tooltip details-tooltip">Plain Green Aprijuice</span>`,
    "Plain Pink Aprijuice": `<img alt="Plain Pink Aprijuice" src="imgs/aprijuices/Plain_Pink_Aprijuice.png"><span class="item-tooltip details-tooltip">Plain Pink Aprijuice</span>`,
    "Plain Red Aprijuice": `<img alt="Plain Red Aprijuice" src="imgs/aprijuices/Plain_Red_Aprijuice.png"><span class="item-tooltip details-tooltip">Plain Red Aprijuice</span>`,
    "Plain White Aprijuice": `<img alt="Plain White Aprijuice" src="imgs/aprijuices/Plain_White_Aprijuice.png"><span class="item-tooltip details-tooltip">Plain White Aprijuice</span>`,
    "Plain Yellow Aprijuice": `<img alt="Plain Yellow Aprijuice" src="imgs/aprijuices/Plain_Yellow_Aprijuice.png"><span class="item-tooltip details-tooltip">Plain Yellow Aprijuice</span>`,
    "Tasty Black Aprijuice": `<img alt="Tasty Black Aprijuice" src="imgs/aprijuices/Tasty_Black_Aprijuice.png"><span class="item-tooltip details-tooltip">Tasty Black Aprijuice</span>`,
    "Tasty Blue Aprijuice": `<img alt="Tasty Blue Aprijuice" src="imgs/aprijuices/Tasty_Blue_Aprijuice.png"><span class="item-tooltip details-tooltip">Tasty Blue Aprijuice</span>`,
    "Tasty Green Aprijuice": `<img alt="Tasty Green Aprijuice" src="imgs/aprijuices/Tasty_Green_Aprijuice.png"><span class="item-tooltip details-tooltip">Tasty Green Aprijuice</span>`,
    "Tasty Pink Aprijuice": `<img alt="Tasty Pink Aprijuice" src="imgs/aprijuices/Tasty_Pink_Aprijuice.png"><span class="item-tooltip details-tooltip">Tasty Pink Aprijuice</span>`,
    "Tasty Red Aprijuice": `<img alt="Tasty Red Aprijuice" src="imgs/aprijuices/Tasty_Red_Aprijuice.png"><span class="item-tooltip details-tooltip">Tasty Red Aprijuice</span>`,
    "Tasty White Aprijuice": `<img alt="Tasty White Aprijuice" src="imgs/aprijuices/Tasty_White_Aprijuice.png"><span class="item-tooltip details-tooltip">Tasty White Aprijuice</span>`,
    "Tasty Yellow Aprijuice": `<img alt="Tasty Yellow Aprijuice" src="imgs/aprijuices/Tasty_Yellow_Aprijuice.png"><span class="item-tooltip details-tooltip">Tasty Yellow Aprijuice</span>`,
    "Black Aprijuice": `<img alt="Black Aprijuice" src="imgs/aprijuices/Plain_Black_Aprijuice.png"><span class="item-tooltip details-tooltip">Black Aprijuice</span>`,
    "Blue Aprijuice": `<img alt="Blue Aprijuice" src="imgs/aprijuices/Plain_Blue_Aprijuice.png"><span class="item-tooltip details-tooltip">Blue Aprijuice</span>`,
    "Green Aprijuice": `<img alt="Green Aprijuice" src="imgs/aprijuices/Plain_Green_Aprijuice.png"><span class="item-tooltip details-tooltip">Green Aprijuice</span>`,
    "Pink Aprijuice": `<img alt="Pink Aprijuice" src="imgs/aprijuices/Plain_Pink_Aprijuice.png"><span class="item-tooltip details-tooltip">Pink Aprijuice</span>`,
    "Red Aprijuice": `<img alt="Red Aprijuice" src="imgs/aprijuices/Plain_Red_Aprijuice.png"><span class="item-tooltip details-tooltip">Red Aprijuice</span>`,
    "White Aprijuice": `<img alt="White Aprijuice" src="imgs/aprijuices/Plain_White_Aprijuice.png"><span class="item-tooltip details-tooltip">White Aprijuice</span>`,
    "Yellow Aprijuice": `<img alt="Yellow Aprijuice" src="imgs/aprijuices/Plain_Yellow_Aprijuice.png"><span class="item-tooltip details-tooltip">Yellow Aprijuice</span>`
}

function getBerry(berryName) {
    return berries.find(berry => berry.name === (berryName + " Berry"))
}

const quickRecipes = {
    'acceleration': {
        'apricornColor': 'Red',
        'berries': [
            getBerry('Enigma'),
            getBerry('Enigma'),
            getBerry('Starf')
        ]
    },
    'stamina': {
        'apricornColor': 'Yellow',
        'berries': [
            getBerry('Rowap'),
            getBerry('Rowap'),
            getBerry('Apicot')
        ]
    },
    'skill': {
        'apricornColor': 'Blue',
        'berries': [
            getBerry('Micle'),
            getBerry('Micle'),
            getBerry('Ganlon')
        ]
    },
    'jump': {
        'apricornColor': 'Green',
        'berries': [
            getBerry('Jaboca'),
            getBerry('Jaboca'),
            getBerry('Maranga')
        ]
    },
    'speed': {
        'apricornColor': 'Pink',
        'berries': [
            getBerry('Custap'),
            getBerry('Custap'),
            getBerry('Starf')
        ]
    },
    'all around': {
        'apricornColor': 'Black',
        'berries': [
            getBerry('Starf'),
            getBerry('Starf'),
            getBerry('Ganlon')
        ]
    }

}