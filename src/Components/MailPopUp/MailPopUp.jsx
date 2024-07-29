// Material UI
import { Box } from "@mui/material";

// Icons
import { Email } from '@mui/icons-material';

// Theme
import useStyles from './Theme';

const MailPopUp = () => {
    const { classes } = useStyles();

    return (
        <>
            <Box className={classes.email}>
                <Email />
            </Box>
        </>
    )
}

export default MailPopUp;