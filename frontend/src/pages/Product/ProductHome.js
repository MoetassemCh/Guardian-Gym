import { CartState } from "../../Context";
import SingleProduct from "../../components/Product/SingleProduct";
import Filters from "../../components/Product/Filters";
import './styles.css'

const ProductHome = (event) => {

  const {state: {products},productState:{sort, byStock, searchQuery}} = event.target.CartState();

    this.setState({
      [state]:productState
    });

 const transformProducts=()=>{
  let sortedProducts=products;

  if(sort){
    sortedProducts= sortedProducts.sort((a, b)=>
     sort === "lowToHigh" ? a.price -b.price : b.price - a.price
  );
}

  if (!byStock) {
  sortedProducts = sortedProducts.filter((prod) => prod.inStock);
}

  if(searchQuery){
    sortedProducts= sortedProducts.filter((prod)=>
    prod.name.toString().toLowerCase().includes(searchQuery)//check if the prod  in the search is present in prod (comparing with prod name)
    );
  }
return sortedProducts;
};
  return (
     <div className="home">
        <Filters/>
        <div className="productContainer">
          {transformProducts().map((prod)=>{
            return <SingleProduct prod={prod} key={prod.id}/>
          })}
        </div>
     </div>
  );
};

export default ProductHome;