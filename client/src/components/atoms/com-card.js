import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router';
import Starts from './com-starts';
import theme from '../../theme';
import { FaHeart } from 'react-icons/fa';
function Card(props){
return (
        <React.Fragment>
            <div className="card">
                <div style={styles.stlcont}>
                    <FaHeart style ={styles.stlHeart}/>
                </div>
                <img src={props.Img} alt=""/>
                <div className="card-body py-2" style={styles.contcard}>
                    <Starts style={styles.star}/>
                    {/* <link to={props.Restto} > */}
                        <div className="card-title m-0 p-0" style={styles.title}>{props.Title}</div>
                    {/* </link> */}
                    {/* <link to={props.Foodto} > */}
                        <div className="card-text m-0 p-0" style={styles.titleSecondary}>
                            <div className="container m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-9 col-sm-7 m-0 p-0"> {props.Description}</div>
                                    <div className="col-3 col-sm-5 m-0 p-0" style={styles.conTime}>
                                        <div style={styles.triangulo}/>
                                        <div>10 Min</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    {/* </link> */}
                </div>
            </div>
        </React.Fragment>
    );
}

const styles = {
    title: {
      fontSize: theme.fontSizeCardPrimary,
      fontFamily: theme.fontFamily,
      fontWeight: 'Bold',
    },
    titleSecondary: {
        fontSize: theme.fontSizeCardSecondary,
        fontFamily: theme.fontFamily,
      },
      stlHeart:{
          color: theme.StyleHeart.color,
          fontSize:theme.StyleHeart.fontSize,
          stroke: 'white',
          strokeWidth: '12px'
      },
      stlcont:{
        position: 'absolute',
        top: '10px',
        right: '10px',
      },
      conTime:{
        backgroundColor: '#757213d4',
        color: 'white',
        fontSize: '15px',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      contcard:{
        paddingRight: '0px'
      },
      triangulo: {
        width: '0', 
        height: '0', 
        borderLeft: '10px solid white',
        borderTop: '10px solid transparent',
        borderBottom: '10px solid transparent',
        float:'left' 
   },
   star:{
    position: 'absolute',
    top: '170px',
    right: '0px',
   }

  };

export default Card;