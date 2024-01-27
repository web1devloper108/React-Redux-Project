import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeToCart} from '../service/action/action'

const mapStateToProps=state=>({ 
    // cardData:state
    // data:state.cardItems
    // data:state.cardItems.cardData
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home; 