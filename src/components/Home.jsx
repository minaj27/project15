import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Button,Grid,Card,CardContent } from "@mui/material";

export const Home=()=>{
    const dispatch = useDispatch();
    const fruitselect=useSelector((state)=>state.greetReducer.fruit);


    const handleCat = (curr)=>{
        const type = "SELECTED_CAT";
        const payload =curr;
        const action={type,payload};
        dispatch(action);

    }
    return(
     
        <Grid container spacing={2}>
             <Grid item xs={12}>
                  <Card sx={{textAlign:"center"}}>
                    <CardContent>
                        <h1>{fruitselect.toUpperCase()}</h1>
                    </CardContent>
                  </Card>
                </Grid>
            <Grid item xs={3}>
             <Button onClick={()=>handleCat("Women")} variant="contained" color="secondary" fullWidth>Womens</Button>
             
            </Grid>
            <Grid item xs={3}>
              <Button onClick={()=>handleCat("Men")} variant="contained" color="secondary" fullWidth>Mens</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={()=>handleCat("Fashion")} variant="contained" color="secondary" fullWidth>fashion</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={()=>handleCat("Cosmetics")} variant="contained" color="secondary" fullWidth>cosmetics</Button>
            </Grid>
            <Grid item xs={3}>
               <Button onClick={()=>handleCat("electronics")} variant="contained" color="secondary" fullWidth>Electronics</Button>
            </Grid>
            <Grid item xs={3}>
               <Button onClick={()=>handleCat("jewellary")} variant="contained" color="secondary" fullWidth>Jewellary</Button>  
            </Grid>
        </Grid>
    )
}