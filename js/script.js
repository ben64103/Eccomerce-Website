const productDisplay = document.getElementById("productNum");

const websiteProducts = [
  {
    id: 1,
    productType: "Audio Speakers",
    productName: "Wireless Audio System Multiroom 360",
    productImage: "/img/WirelessSound-300x300.png",
    oldProductPrice: "$2,999.00",
    productPrice: "$2,2990.00",
  },
  {
    id: 2,
    productType: "Laptops, Tablets",
    productName: "Tablet White EliteBook Revolve 810 G2",
    productImage: "/img/apptablet-300x300.png",
    oldProductPrice: "$2,200.00",
    productPrice: "$2,100.00",
  },
  {
    id: 3,
    productType: "Headphones",
    productName: "White Solo 2 Wireless",
    productImage: "/img/uniheadphone-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$248.99",
  },
  {
    id: 4,
    productType: "SmartPhones",
    productName: "Smartphone 6S 32GB LTE",
    productImage: "/img/GoldPhone-1-300x300.png",
    oldProductPrice: "$1,215.00",
    productPrice: "$1,000.00",
  },
  {
    id: 5,
    productType: "Cameras",
    productName: "Purple Nx Mini F1 <br> SMART NX",
    productImage: "/img/camera2-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$559.00",
  },
  {
    id: 6,
    productType: "Printers",
    productName: "Full Color LaserJet Pro <br> M452dn",
    productImage: "/img/printer-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$1,050.00",
  },
  {
    id: 7,
    productType: "Games",
    productName: "GameConsole Destiny Special",
    productImage: "/img/game1-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$3,000.00",
  },
  {
    id: 8,
    productType: "Cameras",
    productName: "Camera C430W4k WaterProof",
    productImage: "/img/cam4k-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$590.00",
  },
  {
    id: 9,
    productType: "Computer Cases, Servers",
    productName: "Aerocool En52377 Dead <br> Silence Gaming",
    productImage: "/img/gamecabin-300x300.png",
    oldProductPrice: "$180.00",
    productPrice: "$150.00",
  },
  {
    id: 10,
    productType: "Powerbanks",
    productName: "Powerbank 1130mAh Blue",
    productImage: "/img/powerbank-300x300.png",
    oldProductPrice: "$210.00",
    productPrice: "$200.00",
  },
  {
    id: 10,
    productType: "Headphone Cases",
    productName: "Universal Headphone Cases",
    productImage: "/img/headphonecase-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$159.00",
  },
  {
    id: 11,
    productType: "Smartwatches",
    productName: "Smartwatch 2.0 LTE Wifi Waterproof",
    productImage: "/img/smartwatches-resized.png",
    oldProductPrice: "$725.00",
    productPrice: "$700.00",
  },
  {
    id: 12,
    productType: "Laptops",
    productName: "Laptop WiFi CX61 <br> 2QF 15.6 4120M",
    productImage: "/img/macpro-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$2,299.00",
  },
  {
    id: 13,
    productType: "Laptops",
    productName: "Tablet White <br> EliteBook Revolve 810",
    productImage: "/img/Ultrabooks-300x300.png",
    oldProductPrice: "NA",
    productPrice: "$1,300.00",
  },
  {
    id: 14,
    productType: "Headphones",
    productName: "Purple Solo 2 Wireless",
    productImage: "/img/heade1-300x300.png",
    oldProductPrice: "$230.00",
    productPrice: "$248.00",
  },
  {
    id: 15,
    productType: "Headphones",
    productName: "Headphone USB <br> wires",
    productImage: "/img/usbheadphone-300x300.png  ",
    oldProductPrice: "$230.00",
    productPrice: "$55.00",
  },
  {
    id: 16,
    productType: "Laptops",
    productName: "Asus Laptops",
    productImage: "/img/asuaslap-300x300.png",
    oldProductPrice: "$1500.00",
    productPrice: "$1450.00",
  },
];

let productItem;
let productInfo;
let storage;

const cartArray = JSON.parse(localStorage.getItem("product")) || [];

const cartLength = document.getElementById("cart-length");
let cartlength = 0;
window.addEventListener("DOMContentLoaded", () => {
  displayProducts(websiteProducts);
  // productToStorage(cartArray)
  // addProduct()
});

function displayProducts(product) {
  let displayMenu = product.map((item, index) => {
    const display = `
      <div class="product" id="product">
        <small class="p-name gray-text">${item.productType}</small>
        <h4 class="type white">${item.productName}</h4>

        <img src="${item.productImage}" alt="${item.productName}" class="prod-type-img">
        <div class="price-list">
          <small class="gray-text line-t">${item.oldProductPrice}</small>
          <div class="prod-flex">
            <h2 class="clr-blue">${item.productPrice}</h2>
            <span class="fas fa-cart-arrow-down" id="shopping-cart"></span>
          </div>
          <div>

          </div>
        </div>  
    
      </div>
    `;

    return display;
  });

  displayMenu = displayMenu.join("");
  productDisplay.innerHTML = displayMenu;

  console.log(product);

  const carts = document.querySelectorAll(".fas.fa-cart-arrow-down");
  carts.forEach((cart, index) => {
    cart.addEventListener("click", (e) => {
      console.log(product[index]);

      productItem = {
        img: product[index].productImage,
        name: product[index].productName,
        amount: product[index].productPrice,
      };

      cartArray.push(productItem);

      // displayProducts(websiteProducts);
      localStorage.setItem("product", JSON.stringify(cartArray));
      productToStorage();
    });
  });
  console.log(carts);

  const prodInfo = document.getElementById("product-info");
  const products = document.querySelectorAll("#product");
  products.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      console.log(product[index]);
      prodInfo.style.transform = `translate(-50%, -50%) scale(${1})`;

      productInfo = {
        name: product[index].productName,
        img: product[index].productImage,
        oldPrice: product[index].oldProductPrice,
        price: product[index].productPrice,
        type: product[index].productType,
      };

      prodInfo.innerHTML = `
      <i class="fas fa-times " id="cancel-info"></i>
      <div class="info-ab">
        <img src="${productInfo.img}" alt="">
  
        <div class="about-info">
          <div class="ab-names">
            <h4 class="ab-type">${productInfo.type}s</h4>
            <h1 class="ab-name">${productInfo.name}</h1>
          </div>
          <div class="prices">
            <h5 class="ab-old-price">
              ${productInfo.oldPrice}
            </h5>
            <h2 class="ab-new-price">
              ${productInfo.price}
            </h2>
          </div>
  
          <div class="info-msg">
            <div>
              <button><i class="fa fa-repeat"></i>Compare</button>
            </div>
            <div>
              <button><i class="fas fa-heart"></i>Add to Wishlist</button>
            </div>
          </div>
          <span class="fas fa-cart-arrow-down" id="shopping-cart"></span>
  
        </div>
      </div>
      `;
      const cancelInfo = document.getElementById("cancel-info");
      cancelInfo.addEventListener("click", (e) => {
        prodInfo.style.transform = "translate(-50%, -50%) scale(0)";
        console.log(e.target);
      });

      console.log(productInfo.name);
    });
  });
}

const cartStorage = document.getElementById("cart-storage");

// addProduct()

function productToStorage() {
  cartStorage.innerHTML = "";
  cartArray.forEach((item, index) => {
    cartStorage.innerHTML += `
      <div class="storage-product st-prod">
        <div class="img">
          <img src="${item.img}" alt="">
        </div>
        <div class="cart-info">
          <h4 class="name blue">${item.name}</h4>
          <p class="price danger">${item.amount}</p>
        </div>
        <i class=""></i>
      </div>
    `;

    cartlength = cartArray.length;
    cartLength.innerHTML = cartlength;
    checkLength();

    console.log(cartlength);

    // cartArray.length === 0 ? cartStorage.innerHTML = "Nothing to show here" &&  cartLength = 0 :
  });
}

productToStorage();

function checkLength() {
  if (cartArray.length === 0) {
    // cartLength.innerHTML = 0
    cartLength.style.opacity = 0;
    cartStorage.innerHTML = `<p>You have not saved anything to cart</p>`;
  } else {
    cartLength.style.opacity = 1;
  }
}

checkLength();
// productToStorage();

function deleteFromCart(index) {
  cartArray.slice(0, index);
}
