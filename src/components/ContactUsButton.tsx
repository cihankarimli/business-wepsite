import React from "react";

function ContactUsButton({ item, style }) {
  return (
    <div>
      <button className={style}>{item}</button>
    </div>
  );
}

export default ContactUsButton;
