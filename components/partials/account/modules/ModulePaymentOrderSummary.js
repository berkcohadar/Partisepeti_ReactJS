import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import ProductOnPayment from '~/components/elements/products/ProductOnPayment';

const ModulePaymentOrderSummary = ({ shipping, amount, cartItems }) => {
    let listItemsView, shippingView, totalView;
    let productItemsView;
    if (cartItems && cartItems.length > 0) {
        productItemsView = cartItems.map((item,index) => (
            <ProductOnPayment product={item} key={item.id} />
        ));
    }
    // if (cartItems && cartItems.length > 0) {
    //     listItemsView = cartItems.map(product => (
    //         <Link href={"/urun-detayi/"+product.item.id} key={product.item.id}>
    //             <a>
    //                 <strong>
    //                     {product.item.title}
    //                     <span>x{product.quantity}</span>
    //                 </strong>
    //                 <small>₺{product.quantity * product.product.price}</small>
    //             </a>
    //         </Link>
    //     ));
    // } 
    else {
        listItemsView = <p>Ürün Yok.</p>;
    }
    if (shipping === true) {
        shippingView = (
            <figure>
                <figcaption>
                    <strong>Kargo Ücreti</strong>
                    <small>₺20.00</small>
                </figcaption>
            </figure>
        );
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Toplam
                    <strong>₺{parseInt(amount) + 20}.00</strong>
                </h3>
            </figure>
        );
    } else {
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Toplam
                    <strong>₺{parseInt(amount)}.00</strong>
                </h3>
            </figure>
        );
    }
    return (
        // <div className="ps-block--checkout-order">
        //     <div className="ps-block__content">
        //         <figure>
        //             <figcaption>
        //                 <strong>Ürün</strong>
        //                 <strong>Fiyat</strong>
        //             </figcaption>
        //         </figure>
        //         <figure className="ps-block__items">{listItemsView}</figure>
        //         {/* <figure>
        //             <figcaption>
        //                 <strong>Sepet Toplamı</strong>
        //                 <small>₺{amount}</small>
        //             </figcaption>
        //         </figure> */}
        //         {shippingView}
        //         {totalView}
        //     </div>
        // </div>
        <aside className="widget widget_same-brand">
            <h3>Sepetim</h3>
            <div className="widget__content">{productItemsView}</div>
        </aside>
    );
};
export default connect(state => state.cart)(ModulePaymentOrderSummary);
