import { FormControl, FormLabel } from "@mui/material"

const FormInput = ({formClass, label, children}) => {
    return(
        <FormControl variant="standard" className={formClass}>
            <FormLabel htmlFor="input-with-icon-adornment" style={{color:"#666"}}>{label}</FormLabel>
            {children}
        </FormControl>
    )
}

export default FormInput
