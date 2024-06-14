import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import "../cart.css";

const ParcelModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="cartModalStyles"
            contentLabel="Cart Modal"
        >
            <div className="cartModal">

            </div>
        </Modal>
    )
}

export default ParcelModal;