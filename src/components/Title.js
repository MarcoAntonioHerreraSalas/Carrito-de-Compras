import { Component } from "react";
import Button from './Button';


const styles = {
    title:{
        marginButton:'30px',
        textAlign:'center'
    },

}
class Title extends Component{
    render(){
        return(
            <div >
               <h1 style={styles.title}>Tienda de Verduras</h1>
            </div>
        )
    }
}

export default Title;