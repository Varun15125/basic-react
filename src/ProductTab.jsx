import Product from "./Product.jsx"

function ProductTab() {
  let style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center",
    alignItem:"center", 
    textAlign:"center",
  }
   
  return (
        <div style={style}>
         
          <Product title="Logitech Signature M650" idx={0}/>
          <Product title="Apple Pencil" idx={1}/>
          <Product title="LMKDB Wired Keyboard" idx={2}/>
          <Product title="Apple MacBook" idx={3}/>

        </div>
    )
    
}

export default ProductTab;