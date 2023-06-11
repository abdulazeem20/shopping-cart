import { AddToCart } from "./AddToCart.js";
import { Remove } from "./Remove.js";
import { Quantity } from "./Quanity.js";

export function ProductCard({ image, id, price, inCart }) {
	let section = $(`
    <div class="product" data-id="${id}">
        <img src="assets/images/${image}" alt="" class="product-image" />
        <div class="details">
           <div class="top-detail">
                <h3 class="product-name"> Product ${id}</h3>
               
                <h3 class="price">₦ ${new Intl.NumberFormat().format(
					price
				)}</h3>
           </div>
           <div class="bottom">
           
           </div>
        </div>
    </div>
    `);
	let description = $(`
    <h5 class="description"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta, repudiandae esse modi ea recusandae accusantium praesentium, nisi, excepturi est quis sint iusto libero culpa? Ab animi odio veniam deleniti.
    </h5>
    `);
	if (inCart) {
		section.find(".details .bottom").append(Remove());
		section.find(".details .bottom").append(Quantity());
	} else {
		description.insertAfter(section.find(".product-name"));
		section.find(".details .bottom").append(AddToCart());
	}
	return section;
}
