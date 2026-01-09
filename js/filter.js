const tableHeaders = berryTable.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0].getElementsByTagName('th');
const tableRows = berryTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
let filter = {sortValue: null, type: null};
Array.from(tableHeaders).forEach(header => {
    const arrowFilter = document.createElement("img");
    arrowFilter.style.width = '14px';
    arrowFilter.style.height = '14px';
    arrowFilter.style.imageRendering = 'pixelated';
    arrowFilter.setAttribute("src", 'imgs/ui/arrowFilterNone.png');
    header.getElementsByTagName('div')[0].appendChild(arrowFilter);

    header.onclick = () => applyFilter(header.dataset.sort); //+1 to account for colspan: 2 (image column)
});

function applyFilter(sort) {
    Array.from(tableHeaders).forEach(header => {
        header.getElementsByTagName('div')[0].getElementsByTagName('img')[0].src = 'imgs/ui/arrowFilterNone.png';
    });

    if(filter.sortValue === sort) {
        switch(filter.type) {
            case null:
                filter.type = 'desc';
                break;
            case 'desc':
                filter.type = 'asc';
                break;
            case 'asc':
                filter.type = null;
                filter.column = null;
                break;
        }
    } else {
        filter.sortValue = sort;
        filter.type = 'desc';
    }

    switch (filter.type) {
        case null:
            buildBerryTable();
            Array.from(tableHeaders).find(header => header.dataset.sort === sort).getElementsByTagName('div')[0].getElementsByTagName('img')[0].src = 'imgs/ui/arrowFilterNone.png';
            break;
        case 'asc':
            if(sort === 'name') {buildBerryTable([...berries].sort((a, b) => a.name.localeCompare(b.name)));}
            else {buildBerryTable([...berries].sort((a, b) => a[sort] - b[sort]));}
            Array.from(tableHeaders).find(header => header.dataset.sort === sort).getElementsByTagName('div')[0].getElementsByTagName('img')[0].src = 'imgs/ui/arrowFilterAsc.png';
            break;
        case 'desc':
            if(sort === 'name') {buildBerryTable([...berries].sort((a, b) => b.name.localeCompare(a.name)));}
            else {buildBerryTable([...berries].sort((a, b) => b[sort] - a[sort]));}
            Array.from(tableHeaders).find(header => header.dataset.sort === sort).getElementsByTagName('div')[0].getElementsByTagName('img')[0].src = 'imgs/ui/arrowFilterDesc.png';
            break;
    }
}