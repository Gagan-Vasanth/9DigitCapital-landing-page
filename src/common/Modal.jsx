import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  const [portalNode, setPortalNode] = useState(null);

  useEffect(() => {
    const node = document.createElement('div');
    node.className = 'modal-portal';
    document.body.appendChild(node);
    setPortalNode(node);

    return () => {
      document.body.removeChild(node);
    };
  }, []);

  if (!portalNode) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    portalNode
  );
};

export default Modal;