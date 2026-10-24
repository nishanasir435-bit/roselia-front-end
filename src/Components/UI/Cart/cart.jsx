import React from "react";
import "./cart.css"

const Cart= () =>{
    
    
return(
<div className="cart-container">
     <div className="products">
       <h1>Add To Cart</h1>
       <p>Explore our collection & Shop Now</p>
   
   
   {/* product-1 */}
   
   <div className="product-cart"> 
   <img src={roselia} alt="Roselia" />
   <h2>ROSELIA PREMIUM</h2>
   
   
   <button>
   Add to Cart
   </button>
   
   </div>
   
   {/* product-2 */}
   
   <div className="product-carts">
   <img src={perfume} alt="Roselia " />
   <h2>ROSELIA LUXURY</h2>
   
   <button>
   Add to Cart
   </button>
   
   </div>
   
   {/* product-3 */}
   <div className="product-carts">
   <img src={fragrance} alt="Roselia " />
   <h2>ROSELIA SCENT</h2>
   
   
   <button >
   Add to Cart
   </button>
   
   </div>
   
   {/* product-4 */}
   <div className="product-carts">
   <img src={scent} alt="Roselia " />
   <h2>ROSELIA PRIME</h2>
   
   <button>
   Add to Cart
   </button>
   
   
   
   </div>
   {/* product-5 */}
   
   <div className="products-cart">
   <img src={luxury} alt="rose " />
   <h2>ROSELIA OUD</h2>
   
   <button>
   Add to Cart
   </button>
   
   </div>
   
   {/* product-6 */}
   <div className="products-cart">
   <img src={golden} alt="roseia " />
   <h2>ROSELIA ROSE</h2>
   
   <button>
   Add to Cart
   </button>
   
   
   
   </div>
   
   {/* product-7 */}
   
   <div className="products-cart">
   <img src={style} alt="roses " />
   <h2>ROSELIA BLOOM</h2>
   
   <button>
   Add to Cart
   </button>
   
   
   
   </div>
   
   {/* product-8 */}
   
   <div className="products-cart">
   <img src={skin} alt="rosia " />
   <h2>ROSELIA VELVET</h2>
   
   
   <button>
   Add to Cart
   </button>
   
   </div>
   
     </div>
</div>

   
   
   
)
}
export default Cart