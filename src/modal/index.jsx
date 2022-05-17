import { Button } from "@mui/material";
import React, { useState } from "react";
import './modal.css';


export default function Modal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <Button onClick={handleOpen}>Open Modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                Modal deschis
            </Modal>
        </div>
    );

}