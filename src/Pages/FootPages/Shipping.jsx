import styles from '..//../styles/FootPages.module.css';
import React, { useEffect } from 'react';

function Shipping() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <div>
      <div className={styles.foot_page}>
        <p>
          <strong>Payment</strong>
        </p>
        <p>
          You can immediately pay for your order by credit card (VISA /
          MasterCard) on our website.
        </p>
        <p>Payment security is ensured by our partner: PulPal Ltd.</p>
        <p>
          If for any reason you are still hesitant to make online payments, you
          can use the “Cash On Delivery” method or the network of{' '}
          <i>MilliOn, ExpressPay, EManat</i> terminals. These payment methods
          are valid only on the territory of Azerbaijan.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Delivery</strong>
        </p>
        <p>
          <strong>Shipping instructions</strong>
        </p>
        <p>On the territory of Baku</p>
        <p>
          At the time of ordering, you can provide us with a contact phone
          number and shipping instructions that can help us with the shipping
          process. Typically, this may include delivering to your neighbor, or
          perhaps a safe place if you are not at home. We will give your number
          and the delivery instructions to our courier to facilitate delivery -
          then our courier will call the provided contact number and hand over
          the order.
        </p>
        <p>
          Delivery in Baku is free if the total amount of purchased goods is
          more than 50 AZN. If the amount of purchased goods is below 50 AZN,
          then the delivery price will be 5 AZN.
        </p>
        <p>
          Delivery in Baku is carried out within the same day if the order is
          made before 14.00. Delivery of orders received after 14.00 is
          postponed to the next day.
        </p>
        <p>
          <strong>To regions</strong>
        </p>
        <p>Delivery across Azerbaijan is carried out within 7 working days.</p>
        <p>Long-distance delivery prices do not exceed 3 AZN.</p>
        <p>
          <strong>Abroad</strong>
        </p>
        <p>
          Standard delivery is carried out through <i>Azerpocht</i> and can take
          from 10-14 working days.
        </p>
        <p>
          Express shipping is available via DHL, UPS or FedEx. In this case, the
          customer is provided with a tracking number for the order.
        </p>
        <p>
          <strong>Track your order</strong>
        </p>
        <p>
          In order to track the progress of your order, please visit the order
          history on the "My Account" page and view the order details. We will
          also inform you of any changes or important shipping details affecting
          your order.
        </p>
        <p>
          <strong>Unfavorable weather conditions</strong>
        </p>
        <p>We will always make every effort to deliver your order on time.</p>
        <p>
          From time to time, this is influenced by factors that are beyond our
          control, such as bad weather. If this happens, we will update our
          website with details of any delays we are experiencing.
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default Shipping;
