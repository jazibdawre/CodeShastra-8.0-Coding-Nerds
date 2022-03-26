import React from "react";
import Card from "react-credit-cards";

import SupportedCards from "./Cards";
import Navbar from '../components/Navbar/Navbar';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <Navbar />
        <div className="App-payment" style={{marginTop:'50px'}}>
          <Card
            number="1234567894223343"
            name="Jigar Shah"
            expiry="27/22"
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <div style={{marginTop:'20px'}}>
              <h3 style={{color:"orange",textAlign:"center"}}>Jigar Rajendra Shah</h3>
              <h3 style={{color:"orange",textAlign:"center"}}>8291114975</h3>
              <h3 style={{color:"orange",textAlign:"center"}}>shahjigar185@gmail.com</h3>
          </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
