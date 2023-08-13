import React from 'react';

type TopCarsType = {
    topCars:Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const TopCars = (props: TopCarsType) => {
    return (
        <div>
            {props.topCars.map((objectFromTopCarsArray, index)=>{
                return (
                    <table>
                        <tr>
                            <td key={index}>{objectFromTopCarsArray.manufacturer}</td>
                            <td key={index}>{objectFromTopCarsArray.model}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    );
};
