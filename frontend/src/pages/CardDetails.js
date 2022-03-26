import React from "react";
import Card from "react-credit-cards";
import {Redirect,Link,useHistory} from 'react-router-dom';

// import SupportedCards from "./Cards";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import { addUserCard } from "../apis/user";

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

  handleSubmit = async e => {
    e.preventDefault();

    let obj = {}
    obj.bankName = "ICICI"
    obj.cardNumber = this.state.number
    obj.type = "Debit"
    obj.expiry = this.state.expiry
    obj.cvv = this.state.cvc

    console.log(obj)
    
    await addUserCard(obj)

    window.open('/dashboard',"_blank")
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <h1 style={{textAlign:'center',color:"orange",marginTop:"10px"}}>Card Details</h1>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group" style={{width:"80%",margin:"auto",marginTop:"20px"}}>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              
            </div>
            <div className="form-group" style={{width:"80%",margin:"auto",marginTop:"20px"}}>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <>
              <div style={{width:"80%",margin:"auto",marginTop:"20px"}}>
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div style={{width:"80%",margin:"auto",marginTop:"20px"}}>
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVV"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </>
            <div className="form-actions"  style={{width:"80%",margin:"auto",marginTop:"20px"}}>
              <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
          <hr style={{ margin: "60px 0 30px" }} />
        </div>
      </div>
    );
  }
}
