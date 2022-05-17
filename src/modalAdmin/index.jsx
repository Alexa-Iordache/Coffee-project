import React from "react";
import { Modal, Box, Typography, TextField } from '@mui/material';

export default function ModalAdmin(props) {
    const open = props.open;
    const handleClose = props.handleClose;

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={styleModal}>
                <Typography variant="h5" >
                    Admin login
                </Typography>

                <Typography sx={{ marginTop: 2, fontStyle: 'italic', color: 'red' }} >
                    You should be an admin in order to modify the info about this drink.
                </Typography>

                <Typography sx={{ marginTop: 3 }} >
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=" Username"
                    />
                </Typography>

                <Typography sx={{ marginTop: 3 }} >
                <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=" Password"
                    />
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