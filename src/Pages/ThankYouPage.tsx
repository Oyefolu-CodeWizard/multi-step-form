import iconThankYou from "../assets/images/icon-thank-you.svg";

// Thank you!

// Thanks for confirming your subscription! We hope you have fun
// using our platform. If you ever need support, please feel free
// to email us at support@loremgaming.com.

function ThankYouPage() {
  return (
    <div className="thank-you">
      <div className="thank-you-container">
        <div className="thank-you-icon">
          <img src={iconThankYou} alt="Thank You Icon" />
        </div>
        <div className="thank-you-message">
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at <span>support@loremgaming.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
