import { ProductCard } from "./ProductCard.js";
let goods = await $.get("assets/scripts/content.json", "null", "null", "json");
goods.forEach((good, index) => {
	$(".products").append(ProductCard({ ...good }));
});

function openCart() {
	$(".cart-wrapper").addClass("open");
	$("body").css({ "overflow-y": "hidden" });
}
export function closeCart() {
	$(".cart-wrapper").removeClass("open");
	$("body").css({ "overflow-y": "auto" });
}

$(".cart").click(function () {
	if ($(this).text().trim() <= 0) return;
	openCart();
});
$(".back").click(closeCart);
$(".cart-wrapper").click(closeCart);
$(".cart-container").click((e) => e.stopPropagation());
