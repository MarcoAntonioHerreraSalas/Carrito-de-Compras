import { Component } from "react";
import Carro from './Carro';


const styles = {
    navbar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        heigh:'100px',
        justifyContent:'space-between',
        position:'relative',
        padding:'0 50px',
        boxShadow:'0px 2px 3px rgb(0,0,0,0.1)',

    },
    logo:{
        width:'150px',
    }
}
class Navbar extends Component{

    render(){
        const {carro,esCarroVisible,mostrarCarro} = this.props;
        return(
            <nav style={styles.navbar}>
                <img  style={styles.logo} src="/shop-logo.png"></img>
                <Carro esCarroVisible = {esCarroVisible}  mostrarCarro ={mostrarCarro} carro ={carro}/>
            </nav>
        )
    }
}

export default Navbar;