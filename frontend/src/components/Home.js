import React from 'react'

function Home(props) {
    console.log(props.data)
    return (
        <div >
            {/* <span>{props.data.length}</span>*/}
            <h1 style={{marginRight:'40px'}}>Online Shopping</h1>
            <div style={{marginLeft:'350px', marginTop:'100px',width:'700px', height:'130px'}} className="cart-wrapper" >
                <div className="img-wrapper item" style={{marginBottom:'100px'}} > 
                    <img src="https://www.courts.com.sg/media/catalog/product/i/p/ip179417_00.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=770&width=770&canvas=770:770" />
                </div> 
                <div className="text-wrapper item"  style={{marginBottom:'100px'}}>
                    <span> 
                        i-Phone  
                    </span>  
                    <br />
                    <span>  
                        Price: $1800.00 
                    </span>
                </div>  
             <div style={{display:'flex', marginRight:'0px'}}>  
             <div className="btn-wrapper item">
                    <button
                        onClick={   
                            () => { props.addToCartHandler({ pice: 2000, name: 'i phone 11' }) } 
                        }> 
                        Add To Cart</button>
                </div>
                <div className="btn-wrapper1 item1 " style={{marginTop:'20px'}} >

                    <button
                        onClick={
                            () => { props.removeToCartHandler() }
                        }>  
                        Remove To Cart</button>
                </div>
             </div>
            </div>
        </div>
    )
}

export default Home