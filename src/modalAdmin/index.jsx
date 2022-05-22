import React, { useState } from "react";
import ModalMessage from "../modalMessage";
import ModalMessageAff from "../modalMessageAff";
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

export default function ModalAdmin(props) {
    const open = props.open;
    const handleClose = props.handleClose;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // function that updates the text from tge 'username' input 
    const handleUsername = e => {
        setUsername(e.target.value);
    }

    // function that updates the text from tge 'password' input 
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    // for the modal
    const [openMessage, setOpenMessage] = useState(false);

    const handleCloseMessage = () => {
        setOpenMessage(false);
    }


    const handleClick = () => {
        setOpenMessage(true);
        console.log(openMessage);

        (username !== 'admin' || password !== 'admin')
            ? 
            <ModalMessage
                open={openMessage}
                handleClose={() => { handleCloseMessage() }} />
            :  <ModalMessageAff
            open={openMessage}
            handleClose={() => { handleCloseMessage() }} />
    }


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
                        value={username}
                        onChange={(e) => { handleUsername(e) }}
                    />
                </Typography>

                <Typography sx={{ marginTop: 3 }} >
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Password"
                        value={password}
                        onChange={(e) => { handlePassword(e) }}
                    />
                </Typography>

                <Typography sx={styleButton} >
                    <Button
                        onClick={(e) => { handleClick(e) }} // when the user clickes the 'login' button, 
                        // they are redirected to the 'dashboard' page
                        disabled={username === '' || password === '' ? true : false} // if username or password is not written, 
                        // then the user can not log in (the 'login' button is disabled) 

                        // the color of the button will be grey if it is disabled, and it will turn blue when it is abled
                        style={{
                            backgroundColor: username === '' || password === '' ? 'grey' : 'white',
                            borderColor: username === '' || password === '' ? 'grey' : 'white'
                        }}>
                        Login </Button>
                </Typography>

                {username !== 'admin' || password !== 'admin'
                ? 
                    <ModalMessage
                        open={openMessage}
                        handleClose={() => {handleCloseMessage()}}/>
                :  <ModalMessageAff
                open={openMessage}
                handleClose={() => {handleCloseMessage()}}/>
                }

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