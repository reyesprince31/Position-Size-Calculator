import React from "react";

function AccountSizeSection({ formattedAccountSize }) {
  return (
    <div className="account-size">
      <p className="result-p">Account Size:</p>
      <span>{formattedAccountSize}</span>
    </div>
  );
}

export default AccountSizeSection;
