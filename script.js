let cart_shop = document.querySelector(".cart-shop")
let Result_div = document.querySelector(".cart_itmes")


//select inputs
const input_photo_name = document.getElementById("photo_name")
const input_date_created = document.getElementById("date_created")
const input_image = document.getElementById("image_item")
const form = document.querySelector("form")


// products

let products_div = document.querySelector(".products")



// aadd imge
const image_item = document.querySelector("img");
console.log(image_item);




//cart event
cart_shop.addEventListener("click", (e) => {

    Result_div.classList.toggle("active")

})

input_image.addEventListener("change", () => {
    image_item.src = URL.createObjectURL(input_image.files[0]);
    image_item.style = "display:none"
    console.log(image_item);

})

//create addproduct functions

const add_product = (img_name, Date, photo) => {
    // image_item.style = "display:none"


    products_div.innerHTML += `
            <div class="product_elemet">
            <img  src=${photo} alt="">
            <h4 id="item_name">${img_name}</h4>
            <span id="price_item"> ${Date}</span>
            <i class="fa fa-trash"></i>

    </div>

        `
    getlocalStorage()

    input_photo_name.value = "";
    input_date_created.value = "";
    input_image.value = ''
}







form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(image_item.src);
    add_product(input_photo_name.value, input_date_created.value, image_item.src)

})

//event document
document.addEventListener('click', (Event) => {
    if (Event.target.classList.contains('fa-trash')) {
        Event.target.parentElement.remove()
        getlocalStorage()
            // getlocalStorage(Event.target.parentElement.remove())
        console.log('Delet its parentElement');

    }
})



// store local storage
function getlocalStorage() {
    localStorage.setItem('store', products_div.innerHTML)

}


// Read from local Storage

document.addEventListener("DOMContentLoaded", () => {
    products_div.innerHTML = localStorage.getItem("store")

    //pass the function user information
    console.log(products_div.innerHTML = localStorage.getItem("store"));
})