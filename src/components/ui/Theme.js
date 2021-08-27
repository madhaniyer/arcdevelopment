import { createTheme } from '@material-ui/core/styles';
const arcBlue = "#0B72B9";
const arcGreen = "#194035";
const arcOrange = "#FFBA60";
const arcDocTopGold = "#ffc51d"

export default createTheme({
    palette : {
        common : {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`,
            arcGreen: `${arcGreen}`,
            arcDocTopGold:`${arcDocTopGold}`

        },
        primary: {
            main: `${arcGreen}`
        },
        secondary: {
            main: `${arcOrange}`
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