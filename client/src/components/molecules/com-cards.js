import React from 'react';
import Card from '../atoms/com-card';
import Img from '../../assets/Comida1.jpg';


function cards() {
    return (
        <div className="container justify-content-center">
            <div className="row">
                <div className="col-lg-3 col-md-4  col-sm-6">
                    <Card Img={Img} Restto="a" Foodto="a" Title="Ejemplo" Description="Plato del dia"></Card>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-6">
                    <Card  Img={Img} Restto="a" Foodto="a" Title="Ejemplo" Description="Plato del dia"></Card>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-6">
                    <Card  Img={Img} Restto="a" Foodto="a" Title="Ejemplo" Description="Plato del dia"></Card>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-6">
                    <Card  Img={Img} Restto="a" Foodto="a" Title="Ejemplo" Description="Plato del dia"></Card>
                </div>
            </div>
        </div>
    )
}

export default cards;