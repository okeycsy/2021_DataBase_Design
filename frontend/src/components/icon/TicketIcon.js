import React from "react";

const TicketIcon =  ({size=24}) => {
  return (
    <svg 
      width={size} 
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M13.777 19.49l-.466 1.739-12.569-3.378c-.447-.119-.742-.523-.742-.965l.035-.26c.626-2.338 2.22-8.286 2.847-10.625.143-.533.691-.85 1.224-.707 2.381.638 7.892 2.12 12.571 3.371l-.473 1.768.965.262.474-1.772 5.613 1.501c.446.12.741.524.741.966l-.034.259-2.847 10.61c-.12.446-.525.741-.966.741l-.26-.034-5.613-1.478.465-1.736-.965-.262zm5.665 1.301l.259-.966-2.716-.717-.259.966 2.716.717zm-5.406-2.267l.965.261.444-1.658-.965-.262-.444 1.659zm-8.907-4.783l2.594-1.037-2.384-2.386.822-.328 4.03 1.727 2.055-.822c.542-.22 1.399-.081 1.563.329l.028.215c-.034.403-.481.917-.932 1.101l-2.057.822-1.727 4.029-.823.329.083-3.372-2.594 1.038-.614 1.199-.575.23-.044-1.89-1.271-1.399.575-.231 1.271.446zm15.349 3.186l.259-.966-2.717-.717-.259.966 2.717.717zm-5.739-1.028l.965.262.503-1.876-.965-.261-.503 1.875zm6.257-.904l.259-.966-2.717-.717-.259.966 2.717.717zm-5.495-1.937l.964.261.445-1.659-.965-.261-.444 1.659zm6.012.005l.259-.966-2.717-.716-.258.965 2.716.717zm-14.083-8.681l12.528-3.348.259-.034c.442 0 .846.294.966.741l1.833 6.828-15.586-4.187z"
        fill="white"
      />
    </svg>
  );
};

export default TicketIcon;