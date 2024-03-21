import React from 'react';

interface WhatsappProps {
    phoneNumber: string;
    message: string;
}

export default function WhatsappButton ({ phoneNumber, message }: WhatsappProps) {
  const handleClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleClick}>Hubungi via WhatsApp</button>
  );
};
