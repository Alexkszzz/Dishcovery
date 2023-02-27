import React from "react";
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box, useTheme } from "@mui/system";
import styles from "./Modal.css";
export default function Modal({
    children,
    open,
    handleClose,
    handleSave,
    saveText,
    len,
}) {
    const theme = useTheme();
    const handleClick = () => {
        handleSave();
        handleClose();
    };
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>
                <Avatar />
                <form className={styles.form}>
                    <input className={styles.input}
                        placeholder={`What recipe 's in your thoughts?`}
                    />
                    <input className={styles.input} placeholder="Upload an image" />
                </form>
                {/* <Box textAlign="right" borderBottom="1px solid #ccc">
                    <Typography variant="h6">What recipe's in your thoughts?</Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box> */}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    disabled={len === 0}
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                        borderRadius: theme.shape.borderRadius,
                        fontSize: "12px",
                    }}
                    onClick={handleClick}
                >
                    {saveText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}