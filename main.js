const state = {
    productCount: 0,
    catCount: 0
}

const products = [
    {
        priceOld: '99,95',
        priceNew: '39,95',
        productNr: 'PSW000402-9073',
        productName: 'Sweat Hoodie',
        productNameLink: 'sweat-hoodie-psw000402-9073',
        brand: 'PME Legend',
        brandShort: 'pme'
    },
    {
        priceOld: '39,95',
        priceNew: '19,95',
        productNr: 'PTSS194532-7003',
        productName: 'T-shirt',
        productNameLink: 'short-sleeve-t-shirt-ptss194532-7003',
        brand: 'PME Legend',
        brandShort: 'pme'
    },
    {
        priceOld: '109,95',
        priceNew: '39,95',
        productNr: 'PTR170-EBS',
        productName: 'Skyhawk Jeans',
        productNameLink: 'skyhawk-jeans-ptr170-ebs',
        brand: 'PME Legend',
        brandShort: 'pme'
    },
    {
        priceOld: '109,95',
        priceNew: '39,95',
        productNr: 'PTR170-EBS',
        productName: 'Skyhawk Jeans',
        productNameLink: 'skyhawk-jeans-ptr170-ebs',
        brand: 'PME Legend',
        brandShort: 'pme'
    },
    {
        priceOld: '109,95',
        priceNew: '39,95',
        productNr: 'PTR170-EBS',
        productName: 'Skyhawk Jeans',
        productNameLink: 'skyhawk-jeans-ptr170-ebs',
        brand: 'PME Legend',
        brandShort: 'pme'
    },
];

const categories = [
    {
        catName: 'jackets',
        catImg: 'jackets',
        catLink: '/jassen',
        catKey: 1,
    },
    {
        catName: 'colberts',
        catImg: 'colberts',
        catLink: '/jassen/colberts',
        catKey: 2,
    },
    ,
    {
        catName: 'shirts',
        catImg: 'shirts',
        catLink: '/tops/overhemden',
        catKey: 3,
    },
    ,
    {
        catName: 'polo\'s',
        catImg: 'polo',
        catLink: '/tops/polo-shirts',
        catKey: 4,
    },
    {
        catName: 'jeans',
        catImg: 'jeans',
        catLink: '/jeans',
        catKey: 5,
    }
]

function renderProductCard(priceOld, priceNew, productNr, productName, productNameLink, brand, brandShort) {
    const productCardTemplate = `
    <a href="/${productNameLink}" class="productCardLinkWrapper hovered">
        <div class="productCard">
            <div class="productCard__top">
                <picture class="flatImg">
                    <source media="only screen and (-webkit-min-device-pixel-ratio: 1.5),
                    only screen and (min--moz-device-pixel-ratio: 1.5),
                    only screen and (min-device-pixel-ratio: 1.5),
                    only screen and (min-resolution: 144dpi),
                    only screen and (min-resolution: 1.5dppx)" srcset="https://webcdn.justbrands.nl/resize?url=https%3A%2F%2Fwww.justbrands.nl%2Ftime-1579610470%2Fmedia%2Fcatalog%2Fproduct%2Fupload%2F${productNr}~front.png&width=1600&height&type=webp">
                    <source media="only screen and (-webkit-min-device-pixel-ratio: 1.5),
                    only screen and (min--moz-device-pixel-ratio: 1.5),
                    only screen and (min-device-pixel-ratio: 1.5),
                    only screen and (min-resolution: 144dpi),
                    only screen and (min-resolution: 1.5dppx)" srcset="https://webcdn.justbrands.nl/resize?url=https%3A%2F%2Fwww.justbrands.nl%2Ftime-1579610470%2Fmedia%2Fcatalog%2Fproduct%2Fupload%2F${productNr}~front.png&width=820&height&type">
                    <img src="https://webcdn.justbrands.nl/resize?url=https%3A%2F%2Fwww.justbrands.nl%2Ftime-1579610470%2Fmedia%2Fcatalog%2Fproduct%2Fupload%2F${productNr}~front.png&width=410&height&type" alt="">
                </picture>  
            </div>
            <div class="productCard__bottom">
                <div class="productDesc">
                    <div class="productDesc__name">${productName}</div>
                    <div class="productDesc__brand">
                        <img src="https://www.justbrands.nl/media/catalog/product/upload/images_jb/greatdaysof/svg/logo/square/${brandShort}.svg" alt="">
                    <span>${brand}</span>
                    </div>
                    <div class="productDesc__price"><span class="productDesc__price--old">€ ${priceOld}</span> <span class="productDesc__price--new">€ ${priceNew}</span></div>
                </div>
            </div>
        </div>
    </a>
    `
    return productCardTemplate;
};

function renderProductCards(productArray) {
    const productGrid = document.getElementById('productGrid');

    productArray.forEach((el) => {
        const productCard = renderProductCard(el.priceOld, el.priceNew, el.productNr, el.productName, el.productNameLink, el.brand, el.brandShort);
        productGrid.innerHTML += productCard;

        state.productCount += 1;
    })
};

function renderCatCard(catName, catLink, catImg) {
    const catCardTemplate = `
    <a href="${catLink}" class="catCardLinkWrapper">
        <div class="catCard">
            <div class="catCard__top catCard__top--model">
                <picture class="modelImg">
                    <source media="only screen and (-webkit-min-device-pixel-ratio: 1.5),
                    only screen and (min--moz-device-pixel-ratio: 1.5),
                    only screen and (min-device-pixel-ratio: 1.5),
                    only screen and (min-resolution: 144dpi),
                    only screen and (min-resolution: 1.5dppx)" srcset="https://webcdn.justbrands.nl/resize?url=https://www.justbrands.nl/media/catalog/product/upload/images_jbfo/monsterverkoop/cats/desktop/${catImg}.jpg&width=1600&height&type=webp">
                    <source media="only screen and (-webkit-min-device-pixel-ratio: 1.5),
                    only screen and (min--moz-device-pixel-ratio: 1.5),
                    only screen and (min-device-pixel-ratio: 1.5),
                    only screen and (min-resolution: 144dpi),
                    only screen and (min-resolution: 1.5dppx)" srcset="https://webcdn.justbrands.nl/resize?url=https://www.justbrands.nl/media/catalog/product/upload/images_jbfo/monsterverkoop/cats/desktop/${catImg}.jpg&width=820&height&type">
                    <img src="https://webcdn.justbrands.nl/resize?url=https://www.justbrands.nl/media/catalog/product/upload/images_jbfo/monsterverkoop/cats/mobile/${catImg}.jpg&width=410&height&type" alt="">
                </picture>  
            </div>
            <div class="catCard__bottom">
                <div class="catDesc">
                    ${catName}
                </div>
            </div>
        </div>
    </a>
    `
    return catCardTemplate;
}

function renderCatCards(catArray) {
    const catGrid = document.getElementById('catGrid');

    catArray.forEach((el) => {
        const catCard = renderCatCard(el.catName, el.catLink, el.catImg);
        catGrid.innerHTML += catCard;

        state.catCount += 1;
    })
};

// RENDER CARD SIZE + CARD CONTAINER SIZE
function getSetCssVars(){
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    let colNumProductGrid = parseInt(htmlStyles.getPropertyValue("--colNumProductGrid"));
    document.documentElement.style.setProperty("--colNumProductGrid", state.productCount);
}


function calcColWidth(colContainerParent, colInView){
    const colContainerParentWidth = document.getElementById(colContainerParent).offsetWidth;
    const colWidth = colContainerParentWidth / colInView;
    return colWidth - 12;
}

function setColWidth(colWidth, colNodeName) {
    const cols = document.getElementsByClassName(colNodeName);
    for (let i = 0; i < cols.length; i++){
        cols[i].style.width = colWidth + 'px';
    }
}

function renderColContainer(colContainer, colNode, totalCol, colInView){
    const colContainerParent = document.getElementById(colContainer).parentNode.id;
    const colWidth = calcColWidth(colContainerParent, colInView);
    setColWidth(colWidth, colNode);
}

function onResizeEvents(){
    renderColContainer('productGrid', 'productCard', state.productCount, 3);
}

function init(){
    renderProductCards(products);
    renderCatCards(categories);
    renderColContainer('productGrid', 'productCard', state.productCount, 3);
    getSetCssVars()
    
    window.addEventListener("resize", onResizeEvents);

}

