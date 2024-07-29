import { useEffect, useState } from "react";

// Translation
import i18next from "i18next";

// Material UI
import { Box } from "@mui/material";

// Icons
import { Email } from '@mui/icons-material';

// Theme
import useStyles from './Theme';

const MailPopUp = () => {
    const { classes } = useStyles();
    const [position, setPosition] = useState(localStorage.language === 'ar' ? false : true);

    const ChangeLanguage = () => {
        setPosition(!position);
    }

    useEffect(() => {
        const htmlRoot = document.querySelector("html");
        htmlRoot.setAttribute("dir", position ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", position ? "en" : "ar");
        localStorage.language = position ? "en" : "ar";
        localStorage.languageDir = position ? "ltr" : "rtl";
        i18next.changeLanguage(position ? "en" : "ar");
    }, [position])

    return (
        <>
            <Box className={classes.email + ` ${localStorage.language === 'ar' ? 'dirRight' : ''}`} onClick={ChangeLanguage}>
                <Email />
            </Box>
        </>
    )
}

export default MailPopUp;