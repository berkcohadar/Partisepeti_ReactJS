import React from 'react';


const stars= (value)=>{
    let tmp = parseFloat(value)
    let result = [];
    while(tmp>=1){
        result.push(1);
        tmp--;
    }
    if(tmp>=0.75) result.push(1);
    else if (tmp>=0.25) result.push(0);
    let empty = 5-result.length;
    while (empty>0){
        result.push(-1);
        empty--;
    }
    return result.map((item)=>{
        return item==1?<i className="fa fa-star"></i>:item==0?<i className="fa fa-star-half-o"></i>:<i className="fa fa-star-o"></i>
    })
}

const Rating = ({value}) => (
    <span className="ps-rating">
        {stars(value)}
    </span>
);

export default Rating;