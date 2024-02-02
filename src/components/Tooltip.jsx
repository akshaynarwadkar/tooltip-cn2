import { useState } from "react";

const Tooltip = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="tooltip-container"
    >
      {children}
      {isVisible && <div className="tooltip">Hello to CN</div>}
    </div>
  );
};
export default Tooltip;
