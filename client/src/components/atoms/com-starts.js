import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../../theme';
import { FaStar } from 'react-icons/fa';
function Starts(props){
return (
        <React.Fragment>
            <div className="container p-0 m-0" >
            <div className="row">
            <div className="col-5 col-xxl-7 " ></div>
            <div className="col-7 col-xxl-5  pb-1 pl-2 m-0" style={styles.cont}>           
                <FaStar style={styles.fontStart}/>
                <FaStar style={styles.fontStart}/>
                <FaStar style={styles.fontStart}/>
                <FaStar style={styles.fontStart}/>
                <FaStar style={styles.fontStart}/>
            </div>
            </div>
            </div>
        </React.Fragment>
    );
}

const styles = {
    fontStart: {
      fontSize: theme.StyleStar.fontSize,
      color: theme.StyleStar.color,
      marginRight: '2px',
    },
    cont:{
        textAlign: 'right',
        backgroundColor: 'rgb(68 83 106 / 46%)',
        borderRadius: '8px 0px 0px 8px',
        position: 'absolute',
        top: '170px',
        right: '0px',
    }
  };

export default Starts;