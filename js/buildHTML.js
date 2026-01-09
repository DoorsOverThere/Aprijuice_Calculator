const berryTable = document.getElementById('berryTable');
const berryTableBody = document.getElementById('berryTableBody');
const apricornTable = document.getElementById('apricornTable');
const apricornTableBody = document.createElement('tbody');

buildBerryTable();
buildApricornTable();

function buildBerryTable(inBerries = berries) {
    berryTableBody.innerHTML = '';
    inBerries.forEach(berry => {
        const berryTr = document.createElement('tr');

        const imgTd = document.createElement('td');
        imgTd.innerHTML = '<span style="font-size: 20px;">+ </span><img src="imgs/berries/' + berry.img + '" alt="' + berry.name + '">';
        imgTd.onclick = () => addBerry(berry);
        berryTr.appendChild(imgTd);

        const nameTd = document.createElement('td');
        nameTd.innerHTML = berry.name;
        berryTr.appendChild(nameTd);

        ['spicy', 'sour', 'dry', 'bitter', 'sweet'].forEach(flavor => {
            const flavorTd = document.createElement('td');
            flavorTd.style.color = 'var(--' + flavor + ')';
            flavorTd.innerHTML = '<span style="font-size: 20px;">' + (berry[flavor] === 0 ? '' : berry[flavor]) + '</span>';
            berryTr.appendChild(flavorTd);

        });

        const totalTd = document.createElement('td');
        totalTd.innerHTML = '<span style="font-size: 20px;">' + berry.total + '</span>';
        berryTr.appendChild(totalTd);

        berryTableBody.appendChild(berryTr);
    });
}
function buildApricornTable() {
    Object.keys(aprijuices).forEach(color => {
        const apricornTr = document.createElement('tr');

        const imgTd = document.createElement('td');
        imgTd.innerHTML = '<span style="font-size: 20px;">+ </span><img src="imgs/apricorns/' + color + '_Apricorn.png" alt="' + color + ' Apricorn">';
        imgTd.onclick = () => selectApricorn(color);
        apricornTr.appendChild(imgTd);

        const nameTd = document.createElement('td');
        nameTd.innerHTML = color + ' Apricorn';
        apricornTr.appendChild(nameTd);

        ['spicy', 'sour', 'dry', 'bitter', 'sweet'].forEach(flavor => {
            const flavorTd = document.createElement('td');
            flavorTd.style.color = 'var(--' + flavor + ')';
            flavorTd.innerHTML = '<span style="font-size: 20px;">' + (aprijuices[color][flavorMap[flavor]] === 0 ? '' : (aprijuices[color][flavorMap[flavor]] > 0 ? '+' + aprijuices[color][flavorMap[flavor]] : aprijuices[color][flavorMap[flavor]])) + '</span>';
            apricornTr.appendChild(flavorTd);
        });

        apricornTableBody.appendChild(apricornTr);
    });
    apricornTable.appendChild(apricornTableBody);
}