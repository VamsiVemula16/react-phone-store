import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          return !modalOpen ? null : (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-6 md-6 col-lg-4 text-center text-capitalize p-4"
                  >
                    <h5>items added to cart</h5>

                    <img src={img} alt="product" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted"> price: ${price}</h5>

                    <Link to="/">
                      <ButtonContainer
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Continue shopping
                      </ButtonContainer>
                    </Link>

                    <Link to="/cart">
                      <ButtonContainer
                        cart
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Go To Cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;
