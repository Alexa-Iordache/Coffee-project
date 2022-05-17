import React from "react";
import './modal.css';
import { Modal, Box, Typography } from '@mui/material';

export default function ModalInfo(props) {
    const item = props.itemNeeded;
    const open = props.open;
    const handleClose = props.handleClose;
    const value = props.value;

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={styleModal}>
                <Typography variant="h6">
                    {item[value].title}
                </Typography>

                <Typography sx={{ marginTop: 2 }} >
                {item[value].description}
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