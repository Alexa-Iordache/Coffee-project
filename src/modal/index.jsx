import React, { useState } from "react";
import './modal.css';
import ModalAdmin from "../modalAdmin";
import { Modal, Box, Typography, Button } from '@mui/material';

// modal with the details about a drink
export default function ModalInfo(props) {
    const item = props.itemNeeded;
    const open = props.open;
    const handleClose = props.handleClose;
    const value = props.value;

    // the modal that verifies the user is an admin of the page
    const [openAdminVerif, setOpenAdminVerif] = useState(false);

    const handleOpenAdminVerif = () => {
        setOpenAdminVerif(true);
    }

    const handleCloseAdminVerif = () => {
        setOpenAdminVerif(false);
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={styleModal}>
                <Typography variant="h6" >
                    <div className="modal__title">{item[value].title}</div>
                </Typography>

                <Typography sx={{ marginTop: 2 }} >
                    <div> <span className="modal__subtitle">Price: </span>{item[value].price}</div>
                    <div><span className="modal__subtitle">Quantity: </span>{item[value].quantity}</div>
                    <div><span className="modal__subtitle">Description: </span>{item[value].description}</div>
                </Typography>

                <Typography variant="h6" sx={styleButton} >
                    <Button variant="contained" 
                        style={{ backgroundColor: 'rgb(205, 134, 1)' }}
                        onClick={() => { handleOpenAdminVerif() }}
                    >Edit</Button> 
                    {/* when the 'edit' button is pressed, the user is qustioned if he is an admin
                    as only the admin can edit the info about a drink -> so, another modal will pop up
                    giving the user the chance to log in  */}
                </Typography>

                <ModalAdmin
                    open={openAdminVerif}
                    handleClose={() => {handleCloseAdminVerif()}}
                />

            </Box>
        </Modal>
    );
}

// the style I added for the modal
const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '5px double #000',
    boxShadow: 24,
    p: 4,
};

const styleButton = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
    paddingTop: '10px',
};