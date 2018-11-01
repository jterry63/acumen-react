import React from "react";
import './Test.css'


class Test extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			value: 0,
			fillX: "30px",
			thumbLeft: "-1px"
		}
	}

	handleSliderChange(event){
		var bigVal = 500
		var thumbSize = 50
		var trackSize = bigVal - thumbSize
		var percent = event.target.value/100;
		var location = percent * trackSize

		var updatePx =  location + "px";
		var fillUpdate =  (location + 50) + "px";

		this.setState({
			value: event.target.value,
			thumbLeft: updatePx,
			fillX: fillUpdate
		});
	}
  
  
	render(){
    const { value, fillX, thumbLeft } = this.state
    
		return (
		  <div className="range">
          
        <div className="range__display">
          <p className="range__current-val">{value}</p>
        </div>
        
        <div className="range__container">
            <div className="range__overlay" id="fill" style={{ width: fillX }} >
            </div>
            <div className="range__track" id="track"></div>
            <div className="range__thumb" id="thumb" style={{ left: thumbLeft }}></div>
            <div className="range__value" id="value" style={{ left: thumbLeft }}>{value}</div>
              <input
              onChange={this.handleSliderChange.bind(this)}
              className="range__tag"
              type="range"
              min="0"
              max="100"
              value={value}
              step="1"  />

            <div className="range__points">
              <div className="range__point range__way-point--1" data-value="0"></div>
              <div className="range__point range__way-point--2" data-value="1"></div>
              <div className="range__point range__way-point--3" data-value="2"></div>
              <div className="range__point range__way-point--4" data-value="3"></div>
              <div className="range__point range__way-point--5" data-value="4"></div>
            </div>
          </div>

            <div className="range__labels">
              <div className="range__label">1</div>
              <div className="range__label">25</div>
              <div className="range__label">50</div>
              <div className="range__label range__space range__space--1">75</div>
              <div className="range__label range__space range__space--2">100</div>
            </div>
      </div>

)
}
}

export default Test;