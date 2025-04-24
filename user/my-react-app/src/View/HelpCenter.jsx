import React from 'react';

const HelpCenter = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Help Center</h1>

      <div style={{ marginTop: '30px' }}>
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. How do I place an order?</h3>
          <p>If you want to place an order, simply browse our catalog, add items to your cart, and follow the checkout process.</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Can I change or cancel my order?</h3>
          <p>Once an order is placed, it cannot be changed or canceled. Please make sure the details are correct before completing the purchase.</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>3. How do I track my order?</h3>
          <p>Once your order has shipped, you'll receive a tracking number via email to track the status of your delivery.</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>4. What is your return policy?</h3>
          <p>We offer a 30-day return policy on all products. Please visit our Return Policy page for more details.</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>5. How can I get support?</h3>
          <p>If you need further assistance, feel free to reach out via the Contact Us page, or use our live chat service available on the website.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
