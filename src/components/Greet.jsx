import React from "react";
import { useDispatch } from "react-redux";
import { Grid,Button } from "@mui/material";

export const Greet = ()=>{
    const dispatch=useDispatch();

    const handleGreet=(str)=>{
       const type = "GREETING";
       const payload = str;
       const action={type,payload};
       dispatch(action);
    }
    return(
       <Grid container spacing={2}>
        <Grid item xs={3}>
        <Button onClick={()=>handleGreet("Good Afternoon")} variant="contained" color="secondary" fullWidth>Good Afternoon</Button>
        </Grid>
        <Grid item xs={3}>
         <Button onClick={()=>handleGreet("Good Evening")} variant="contained" color="secondary" fullWidth>Good Evening</Button>
        </Grid>
        <Grid item xs={3}>
         <Button onClick={()=>handleGreet("Good Night")} variant="contained" color="secondary" fullWidth>Good Night</Button>
        </Grid>

       </Grid>
    )
}