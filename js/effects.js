// nav

const navList = document.getElementById("list");
const searchInp = document.getElementById("searchInp");
const searchToggle = document.getElementById("search-toggle");
const navListToggle = document.getElementById("list-toggle");
navListToggle.addEventListener("click", update);
function update(e) {
  const navListHeight = listing.getBoundingClientRect().height;

  if (navList.style.height === `${0}px`) {
    navList.style.height = `${navListHeight}px`;
  } else {
    navList.style.height = `${0}px`;
  }
}
searchToggle.addEventListener("click", () => {
  searchInp.classList.toggle('active')
  searchInp.focus() 
});

// Cart
const cart = document.getElementById('cart')
// const cartStorage = document.getElementById('cart-storage')
const cartToggle = document.getElementById("cart-toggle")

cartToggle.addEventListener('click', (e) => {
  // console.log(e.target)

  let cartWidth = cartStorage.getBoundingClientRect().width;
  console.log(cartWidth)

  if(cart.style.width === `${0}px`){
    cart.style.width = `${cartWidth}px`;
  }else {
    cart.style.width = `${0}px`
  }
  // console.log(cartStorage.style.width)
})