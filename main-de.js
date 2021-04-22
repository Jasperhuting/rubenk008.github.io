const state = {
  productCount: 0,
  catCount: 0,
  catGrid: {
    arrowLeft: false,
    arrowRight: true,
  },
  productGrid: {
    arrowLeft: false,
    arrowRight: true,
  },
};

const products = [
  {
    priceOld: "119,95",
    priceNew: "40,-",
    productNr: "PTR550-FGC",
    productName: "Curtis jeans",
    productNameLink: "curtis-jeans-ptr550-fgc",
    brand: "PME Legend",
    brandShort: "pme",
  },
  {
    priceOld: "49,95",
    priceNew: "20,-",
    productNr: "PTSS201553-959",
    productName: "R-neck Single Jersey Cold dye",
    productNameLink: "r-neck-single-jersey-cold-dye-ptss201553-959",
    brand: "PME Legend",
    brandShort: "pme",
  },
  {
    priceOld: "109,95",
    priceNew: "40,-",
    productNr: "PTR550-GCL",
    productName: "CURTIS JEANS",
    productNameLink: "curtis-jeans-ptr550-gcl",
    brand: "PME Legend",
    brandShort: "pme",
  },
  {
    priceOld: "59,95",
    priceNew: "30,-",
    productNr: "PPSS202864-5287",
    productName: "Light pique short sleeve polo",
    productNameLink: "light-pique-short-sleeve-polo-ppss202864-5287",
    brand: "PME Legend",
    brandShort: "pme",
  },
  {
    priceOld: "99,95",
    priceNew: "35,-",
    productNr: "PSH202761-BGS",
    productName: "Commander Shorts",
    productNameLink: "commander-shorts-psh202761-bgs",
    brand: "PME Legend",
    brandShort: "pme",
  },
  {
    priceOld: "79,95",
    priceNew: "40,-",
    productNr: "PKW201300-6149",
    productName: "Crewneck Cotton Pullover",
    productNameLink: "crewneck-cotton-pullover-pkw201300-6149",
    brand: "PME Legend",
    brandShort: "pme",
  },
];

const categories = [
  {
    catName: "Jeans",
    catImg: "jeans",
    catLink: "/de/jeans",
    catKey: 1,
  },
  {
    catName: "Tops",
    catImg: "tops",
    catLink: "/de/tops",
    catKey: 2,
  },
  {
    catName: "Hosen",
    catImg: "broeken",
    catLink: "/de/hosen",
    catKey: 3,
  },
  {
    catName: "Jacken",
    catImg: "jackets",
    catLink: "/de/jacken",
    catKey: 4,
  },
  {
    catName: "Schuhe",
    catImg: "schoenen",
    catLink: "/de/schuhe",
    catKey: 5,
  },
  {
    catName: "Gear",
    catImg: "accessoires",
    catLink: "/de/gear",
    catKey: 6,
  },
];

// RENDER PRODUCT CARD
function renderProductCard(
  priceOld,
  priceNew,
  productNr,
  productName,
  productNameLink,
  brand,
  brandShort
) {
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
    `;
  return productCardTemplate;
}

function renderProductCards(productArray) {
  const productGrid = document.getElementById("productGrid");

  productArray.forEach((el) => {
    const productCard = renderProductCard(
      el.priceOld,
      el.priceNew,
      el.productNr,
      el.productName,
      el.productNameLink,
      el.brand,
      el.brandShort
    );
    productGrid.innerHTML += productCard;

    state.productCount += 1;
  });
}

// RENDER CAT CARD
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
                    only screen and (min-resolution: 1.5dppx)" srcset="https://webcdn.justbrands.nl/resize?url=https://www.justbrands.nl/media/catalog/product/upload/images_jbfo/monsterverkoop/cats/desktop/${catImg}.jpg?v=1&width=1600&height&type=webp">
                    <source media="only screen and (-webkit-min-device-pixel-ratio: 1.5),
                    only screen and (min--moz-device-pixel-ratio: 1.5),
                    only screen and (min-device-pixel-ratio: 1.5),
                    only screen and (min-resolution: 144dpi),
                    only screen and (min-resolution: 1.5dppx)" srcset="https://webcdn.justbrands.nl/resize?url=https://www.justbrands.nl/media/catalog/product/upload/images_jbfo/monsterverkoop/cats/desktop/${catImg}.jpg?v=1&width=820&height&type">
                    <img src="https://webcdn.justbrands.nl/resize?url=https://www.justbrands.nl/media/catalog/product/upload/images_jbfo/monsterverkoop/cats/mobile/${catImg}.jpg?v=1&width=410&height&type" alt="">
                </picture>  
            </div>
            <div class="catCard__bottom">
                <div class="catDesc">
                    ${catName}
                </div>
            </div>
        </div>
    </a>
    `;
  return catCardTemplate;
}

function renderCatCards(catArray) {
  const catGrid = document.getElementById("catGrid");

  catArray.forEach((el) => {
    const catCard = renderCatCard(el.catName, el.catLink, el.catImg);
    catGrid.innerHTML += catCard;

    state.catCount += 1;
  });
}

// RENDER CARD SIZE + CARD CONTAINER SIZE
function getSetCssVars() {
  let htmlStyles = window.getComputedStyle(document.querySelector("html"));
  let colNumProductGrid = parseInt(
    htmlStyles.getPropertyValue("--colNumProductGrid")
  );
  let colNumCAtGrid = parseInt(htmlStyles.getPropertyValue("--colNumCatGrid"));
  document.documentElement.style.setProperty(
    "--colNumProductGrid",
    state.productCount
  );
  document.documentElement.style.setProperty("--colNumCatGrid", state.catCount);
}

function calcColWidth(colContainerParent, colInView) {
  const colContainerParentWidth = document.getElementById(colContainerParent)
    .offsetWidth;
  const colWidth = colContainerParentWidth / colInView;
  return colWidth - 12;
}

function setColWidth(colWidth, colNodeName) {
  const cols = document.getElementsByClassName(colNodeName);
  for (let i = 0; i < cols.length; i++) {
    cols[i].style.width = colWidth + "px";
  }
}

function renderColContainer(colContainer, colNode, totalCol, colInView) {
  const colContainerParent = document.getElementById(colContainer).parentNode
    .id;
  const colWidth = calcColWidth(colContainerParent, colInView);
  setColWidth(colWidth, colNode);
}

// SCROLL ON CLICK ARROW
function scrollStep(el, direction, containerType) {
  const containerWidth = document.getElementById(el).offsetWidth;
  const scrollAmount = containerWidth;
  const scrollContainer = document.getElementById(el);

  if (direction === "left") {
    scrollContainer.scrollBy(scrollAmount, 0);
    changeArrowState(containerType);
  } else if (direction === "right") {
    scrollContainer.scrollBy(-scrollAmount, 0);
    changeArrowState(containerType);
  }
}

function changeArrowState(containerType) {
  if (containerType === "catGrid") {
    if (state.catGrid.arrowLeft) {
      state.catGrid.arrowLeft = false;
      state.catGrid.arrowRight = true;
    } else {
      state.catGrid.arrowLeft = true;
      state.catGrid.arrowRight = false;
    }
    renderArrows("catGrid");
  } else if (containerType === "productGrid") {
    if (state.productGrid.arrowLeft) {
      state.productGrid.arrowLeft = false;
      state.productGrid.arrowRight = true;
    } else {
      state.productGrid.arrowLeft = true;
      state.productGrid.arrowRight = false;
    }
    renderArrows("productGrid");
  }
}

function renderArrows(containerType) {
  const catGridArrowLeft = document.getElementById("catGridBtnLeft");
  const catGridArrowRight = document.getElementById("catGridBtnRight");
  const productGridArrowLeft = document.getElementById("productGridBtnLeft");
  const productGridArrowRight = document.getElementById("productGridBtnRight");

  if (containerType === "catGrid") {
    if (state.catGrid.arrowLeft) {
      catGridArrowRight.classList.add("hidden");
      catGridArrowLeft.classList.remove("hidden");
    } else {
      catGridArrowLeft.classList.add("hidden");
      catGridArrowRight.classList.remove("hidden");
    }
  } else if (containerType === "productGrid") {
    if (state.productGrid.arrowLeft) {
      productGridArrowRight.classList.add("hidden");
      productGridArrowLeft.classList.remove("hidden");
    } else {
      productGridArrowLeft.classList.add("hidden");
      productGridArrowRight.classList.remove("hidden");
    }
  }
}

// ON RESIZE TRIGGER THESE EVENTS

function onResizeEvents() {
  renderColContainer("productGrid", "productCard", state.productCount, 3);
  renderColContainer("catGrid", "catCard", state.productCount, 5);
}

// INIT SMOOTH SCROLL

function initSmoothScroll() {
  let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
  });
}

// INIT FUNCTIONS ON CONTENT LOAD
function init() {
  renderProductCards(products);
  renderCatCards(categories);
  renderColContainer("productGrid", "productCard", state.productCount, 3);
  renderColContainer("catGrid", "catCard", state.productCount, 5);
  getSetCssVars();
  window.addEventListener("resize", onResizeEvents);
  initSmoothScroll();
  renderArrows("catGrid");
  renderArrows("productGrid");
}

window.addEventListener("DOMContentLoaded", () => {
  init("domloaded");
  setTimeout(() => {
    if (!document.querySelector("#productGrid").children.length) {
      init("domloaded");
    }
  }, 1000);
});
