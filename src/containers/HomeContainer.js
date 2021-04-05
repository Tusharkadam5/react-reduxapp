import {connect} from 'react-redux';
import {addToCart} from '../services/actions/action'
import Home from '../components/Home';

const mapStateTpProps=state=>({
data:state.cartItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateTpProps, mapDispatchToProps)(Home)
// export default Home;