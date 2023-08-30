console.log("js/index.js");

document.getElementById("product1").addEventListener("click", function () {
    addToCarts("product1-price", "product1-name");
});

document.getElementById("product2").addEventListener("click", function () {
    addToCarts("product2-price", "product2-name");
});

document.getElementById("product3").addEventListener("click", function () {
    addToCarts("product3-price", "product3-name");
});

document.getElementById("product4").addEventListener("click", function () {
    addToCarts("product4-price", "product4-name");
});

document.getElementById("product5").addEventListener("click", function () {
    addToCarts("product5-price", "product5-name");
});

document.getElementById("product6").addEventListener("click", function () {
    addToCarts("product6-price", "product6-name");
});
document.getElementById("product7").addEventListener("click", function () {
    addToCarts("product7-price", "product7-name");
});
document.getElementById("product8").addEventListener("click", function () {
    addToCarts("product8-price", "product8-name");
});
document.getElementById("product9").addEventListener("click", function () {
    addToCarts("product9-price", "product9-name");
});

document.getElementById("btn-coupon-apply").addEventListener("click", function (e) {
    e.preventDefault();

    const availableCoupon = "SELL200";

    const couponField = document.getElementById("coupon-field");
    const userCoupon = couponField.value;
    couponField.value = "";
    
    if (userCoupon == availableCoupon) {
        isDiscountAdded = true;
        discountCalulationAndUpdate(true);
        document.getElementById("discount-status").classList.remove("hidden");
    }
    else{
        discountCalulationAndUpdate(false);
        isDiscountAdded = false;
        document.getElementById("discount-status").classList.add("hidden");
        alert("Invalid coupon.");
    }

});

document.getElementById("btn-make-purchase").addEventListener("click", function(){
    my_modal_1.showModal();
}
);

document.getElementById("btn-go-home").addEventListener("click", function(){
    window.location.reload();
});