import React, {Component} from 'react';
// import {connect} from "react-redux";

class Calc extends Component {
    render() {
        return (
            <div className="calc">

                <div className="calc-keyboard">
                    <div>
                        <input type="button" onClick={this.props.enterNum} value="7"/>
                        <input type="button" onClick={this.props.enterNum} value="8"/>
                        <input type="button" onClick={this.props.enterNum} value="9"/>
                        <input type="button" onClick={this.props.enterOperator} value="+"/>
                    </div>
                    <div>
                        <input type="button" onClick={this.props.enterNum} value="4"/>
                        <input type="button" onClick={this.props.enterNum} value="5"/>
                        <input type="button" onClick={this.props.enterNum} value="6"/>
                        <input type="button" onClick={this.props.enterOperator} value="-"/>
                    </div>
                    <div>
                        <input type="button" onClick={this.props.enterNum} value="1"/>
                        <input type="button" onClick={this.props.enterNum} value="2"/>
                        <input type="button" onClick={this.props.enterNum} value="3"/>
                        <input type="button" onClick={this.props.enterOperator} value="x"/>
                    </div>
                    <div>
                        <input type="button" onClick={this.props.clear} value="C"/>
                        <input type="button" onClick={this.props.enterNum} value="0"/>
                        <input type="button" onClick={this.props.calc} value="="/>
                        <input type="button" onClick={this.props.enterOperator} value="/"/>
                    </div>
                </div>
            </div>
        );
    }
}





export default Calc;
