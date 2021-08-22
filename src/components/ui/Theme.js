import { createTheme } from '@material-ui/core/styles';
const arcBlue = "#0B72B9";
const arcGreen = "#194035";
const arecOrange = "#FFBA60";

export default createTheme({
    palette : {
        common : {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arecOrange}`,
            arcGreen: `${arcGreen}`,

        },
        primary: {
            main: `${arcGreen}`
        },
        secondary: {
            main: `${arecOrange}`
        }
    },
    typography : {
        tab: {
            fontSize: "1rem",
            textTransform: "none",
            fontWeight: 700,
            fontFamily: "Raleway",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "purple"
        }
    }
})