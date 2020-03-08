import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct, changeProductQuantity } from '../../Services/cart/actions';
import { updateCart } from '../../Services/total/actions';
import CartProduct from './CartProduct';
import { formatPrice } from '../../Services/util';

import './style.scss';
import { Store } from '../../Store/store';

//_ ctrl + H { [[this., state.], NOTHING], }
//_ append all functions with "const"
//_ //_1 replace all calls to setState with useState
//_ //_2 update refs to state 
//_ //_3 consolidate all refs to top of file 
//_ 
//_ 

const FloatCart = (props) => {

    //_ import useContext
    const { state, dispatch } = useContext(Store);

    //_ add //_1 useState 
    const [isOpen, setIsOpen] = useState(false);

    //_3  
    const { cartTotal } = state;
    const { cartProducts, updateCart } = props;
    const { totalPrice, productQuantity, currencyFormat, currencyId } = cartTotal;

    // TODO: refactor when Store implemented
    const componentWillReceiveProps = (nextProps) => {
        if (nextProps.newProduct !== props.newProduct) {
            addProduct(nextProps.newProduct);
        }

        if (nextProps.productToRemove !== props.productToRemove) {
            onRemoveProduct(nextProps.productToRemove);
        }

        if (nextProps.productToChange !== props.productToChange) {
            onChangeProductQuantity(nextProps.productToChange);
        }
    }

    const openFloatCart = () => {
        setIsOpen(true);
    };

    const closeFloatCart = () => {
        setIsOpen(false);
    };

    const addProduct = product => {
        //_3 done
        let productAlreadyInCart = false;

        cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                cp.quantity += product.quantity;
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            cartProducts.push(product);
        }

        updateCart(cartProducts);
        openFloatCart();
    };

    //_Ex  
    const onRemoveProduct = product => {
        //_3 done

        const index = cartProducts.findIndex(p => p.id === product.id);
        if (index >= 0) {
            cartProducts.splice(index, 1);
            updateCart(cartProducts);
        }
    };

    const proceedToCheckout = () => {
        //_3 done

        if (!productQuantity) {
            alert('Add some product in the cart!');
        } else {
            alert(`Checkout - Subtotal: ${ currencyFormat } ${ formatPrice(totalPrice, currencyId) }`);
        }
    };

    const onChangeProductQuantity = changedProduct => {
        //_3 done

        const product = cartProducts.find(p => p.id === changedProduct.id);
        product.quantity = changedProduct.quantity;
        if (product.quantity <= 0) {
            onRemoveProduct(product);
        }
        updateCart(cartProducts);
    }

    // remove render
    //_3 done

    const products = cartProducts.map(p => {
        return (
            <CartProduct product={p} removeProduct={dispatch(removeProduct)} changeProductQuantity={dispatch(changeProductQuantity)} key={p.id} />
        );
    });

    let classes = ['float-right'];

    //_2 
    if (!!isOpen) {
        classes.push('float-right--open');
    }

    return (
        <div className={classes.join(' ')}>
            {/* If cart open, show close (x) button */}
            {isOpen && (<div onClick={() => closeFloatCart()} className="float-right__close-btn" > X </div>)}

            {/* If cart is closed, show bag with quantity of product and open cart action */}
            {!isOpen && (<span className="bag bag--float-right-closed" onClick={() => openFloatCart()}>
                <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            )}

            <div className="float-right__content">
                <div className="float-right__header">
                    <span className="bag">
                        <span className="bag__quantity">{cartTotal.productQuantity}</span>
                    </span>
                    <span className="header-title">Cart</span>
                </div>

                <div className="float-right__shelf-container">
                    {products}
                    {!products.length && (
                        <p className="shelf-empty">
                            Add some products in the cart <br />  :)
                            </p>
                    )}
                </div>

                <div className="float-right__footer">
                    <div className="sub">SUBTOTAL</div>
                    <div className="sub-price">
                        <p className="sub-price__val">
                            {`${ cartTotal.currencyFormat } ${ formatPrice(cartTotal.totalPrice, cartTotal.currencyId) }`}
                        </p>
                        <small className="sub-price__installment">
                            {!!cartTotal.installments && (
                                <span>
                                    {`OR UP TO ${ cartTotal.installments } x ${ cartTotal.currencyFormat }
                                        ${ formatPrice(cartTotal.totalPrice / cartTotal.installments, cartTotal.currencyId) }`}
                                </span>
                            )}
                        </small>
                    </div>
                    <div onClick={() => proceedToCheckout()} className="buy-btn">
                        Checkout
                        </div>
                </div>
            </div>
        </div>
    );
    // remove render
}

FloatCart.propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
    changeProductQuantity: PropTypes.func,
    productToChange: PropTypes.object,
};

export default FloatCart;
