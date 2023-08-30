console.log("js/utilites.js");
let isDiscountAdded = false;
function getElementInnerTextById(elementId){
    const element = document.getElementById(elementId);
    const elementInnerTextStr = element.innerText;
    const elementInnerTextNum = parseFloat(elementInnerTextStr);
    return elementInnerTextNum;
}

function setElementInnerTextById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value.toFixed(2);
}

function makeBtnEnable(btnId){
    const btn = document.getElementById(btnId);
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "#E527B2";
}

function discountCalulationAndUpdate(addDiscount){
    const totalPrice = getElementInnerTextById("total-price");
    if(addDiscount){
        const discount = totalPrice * 0.2;
        setElementInnerTextById("discount-element", discount);

        const newDiscoutTotalPrice =  totalPrice - discount;
        setElementInnerTextById("discount-total-price", newDiscoutTotalPrice)
    }
    else{
        setElementInnerTextById("discount-element", 0);
        setElementInnerTextById("discount-total-price", totalPrice);
       
    }
}

function addToCarts(productPriceId, productNameElementId){
    const previousTotalPrice = getElementInnerTextById("total-price");
    const productPrice =getElementInnerTextById(productPriceId);
    const newTotalPrice = previousTotalPrice + productPrice;
    setElementInnerTextById("total-price", newTotalPrice);
    
    if(newTotalPrice >= 200) {
        makeBtnEnable("btn-coupon-apply");
        document.getElementById("coupon-field").removeAttribute("disabled");
    }
    newTotalPrice > 0 && makeBtnEnable("btn-make-purchase");

    // extra
    
    isDiscountAdded ? discountCalulationAndUpdate(true) : discountCalulationAndUpdate(false);

    const productName= document.getElementById(productNameElementId).innerText;
    
    const addedProductsContainer = document.getElementById("added-products-container");
    const li = document.createElement("li");
    li.innerText = productName;
    li.classList.add("text-xl","font-medium");
    addedProductsContainer.appendChild(li);

    // extra 
    document.getElementById("total-added").innerText = document.getElementById("added-products-container").childElementCount;
}