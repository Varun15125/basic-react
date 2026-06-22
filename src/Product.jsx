import "./Product.css";
import Price from "./Price";

function Product({ title,idx}) {
    let oldPrices =["1000","399","1099","69999"]
    let newPrices =["499","999","1299","79999"]
    let description =[["3600DPI","Rechargeable"], ["2nd Generation Apple Pencil", "Enhanced Grip"], ["Mechanical Switches","Ergonomic Design"], ["Apple M2 Chip", "High Performance"]]

    return (
        <div className="Product">
            <h4>{title}</h4>
    
          <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
             <Price oldPrice ={oldPrices[idx]} newPrice={newPrices[idx]}/> 
        </div>
    )
}

export default Product;