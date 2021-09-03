import ProductItemComp from "../Shimmers/ProductItemComp";
import './AllProductsRowCompStyle.css'

export default function AllProductsRowComp({products}){
    return(
      <div className='all-products-products-comp-wrapper'>
        {
          products.map((product) => (
            <ProductItemComp product={product} />
          ))
        }
      </div>
    );
  }