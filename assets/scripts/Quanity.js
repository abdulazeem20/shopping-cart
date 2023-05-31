export function Quantity() {
	let handleIncrement = function () {
		let product = [...$(".product")].filter(
			(product) =>
				$(product).data("id") == $(this).parents(".product").data("id")
		);
		let quantity = section.find(".quantity");
		let value = Number(quantity.val());
		let newValue;
		if ($(this).hasClass("add")) {
			newValue = ++value;
			product.forEach((pr) => {
				$(pr).find(".sub").prop({ disabled: false });
			});
		} else if ($(this).hasClass("sub")) {
			newValue = --value;
			if (newValue <= 1) {
				newValue = 1;
				product.forEach((pr) => {
					$(pr).find(".sub").prop({ disabled: true });
				});
			}
		}
		product.forEach((pr) => {
			$(pr).find(".quantity").val(newValue);
		});
	};
	let section = $(`
    <div class="add-and-sub">
        <button class="btn sub" disabled>
            <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <input type="text" name="" value="" id="" class="quantity" />
        <button class="btn add">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
    </div>
    `);
	section.find(".quantity").val(1);
	section.find(".btn").click(handleIncrement);
	return section;
}
