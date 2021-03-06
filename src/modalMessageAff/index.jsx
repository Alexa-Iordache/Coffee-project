import React from "react";
import { Modal, Box, Typography } from '@mui/material';

// the modal that appears when the user is the admin
export default function ModalMessageAff(props) {

   const open = props.open;
   const handleClose = props.handleClose;

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={styleModal}>
                <Typography variant="h6" >
                    <div>You can edit these details</div>
                </Typography>
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