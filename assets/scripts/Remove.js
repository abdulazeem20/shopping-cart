import { AddToCart } from "./AddToCart.js";
import { closeCart } from "./main.js";

export function Remove() {
	let handleRemove = function () {
		let parent = $(this).parents(".product");
		let id = parent.data("id");
		let badge = $(".header .badge");
		let text = badge.text();
		parent.remove();
		let otherProduct = [...$(".product")].filter(
			(prod) => $(prod).data("id") == id
		)[0];
		badge.text(--text);
		if (text <= 0) {
			$(".cart").prop({ disabled: true });
			closeCart();
		}
		$(otherProduct).find(".add-and-sub").replaceWith(AddToCart());
	};

	let button = $(`
    <button class="remove">
        <span><i class="fas fa-trash-can" aria-hidden="true"></i></span>
        <span>Remove</span>
    </button>
    `);
	button.on("click", handleRemove);
	return button;
}
