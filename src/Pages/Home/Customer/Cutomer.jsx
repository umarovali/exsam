import React from 'react';
import CustomerItem from './CustomerItem';


export default function Cutomer() {
    return (
        <section className='customer'>
            <div className="container">
                <h5 className="customer_title">Our happy customers</h5>

                <ul className="customer_wrapper">
                   <CustomerItem name={"Customer A"} suptitle={"Great product, highly recommended!"} />
                   <CustomerItem name={"Customer A"} suptitle={"Great product, highly recommended!"} />
                   <CustomerItem name={"Customer A"} suptitle={"Great product, highly recommended!"} />
                   <CustomerItem name={"Customer A"} suptitle={"Great product, highly recommended!"} />
                </ul>
            </div>
        </section>
    )
}
