import React from "react";
import StatisticLine from "./StatisticLine";
import './statistics.css'


const Statistics = ({good, neutral, bad, avg, total}) =>{
    if(total.length === 0){
        return(
            <div className="statistic">
                No feedback given
            </div>
        )
    }
    return(<div>
        <StatisticLine  text='good'  value={good}/>
        <br/>
        neutral{neutral}
        <br/>
        bad{bad}
        <br/>
        total{total}
        <br/>
        avg{avg}
        <br/>
        percentage{total/100} %
    </div>)
  }

  export default Statistics