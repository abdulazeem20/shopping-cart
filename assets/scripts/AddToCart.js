import { Quantity } from "./Quanity.js";
import { ProductCard } from "./ProductCard.js";
let goods = await $.get("/assets/scripts/content.json", "null", "null", "json");
export function AddToCart() {
	let handleClick = function () {
		let parent = $(this).parents(".product");
		let id = parent.data("id");
		$(this).replaceWith(Quantity());
		let badge = $(".header .badge");
		let inCart = badge.text();
		badge.text(++inCart);
		let good = goods.filter((good) => good.id == id)[0];
		$(".cart").prop({ disabled: false });
		$(".cart-products").append(ProductCard({ ...good, inCart: true }));
	};
	let button = $(`
    <button class="addCart">
        Add to cart
    </button>
    `);
	button.on("click", handleClick);
	return button;
}
