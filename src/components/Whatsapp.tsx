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
    <button className="py-3 px-8 bg-green-400 text-white font-semibold rounded-full hover:bg-green-600" onClick={handleClick}>Hubungi via WhatsApp</button>
  );
};
