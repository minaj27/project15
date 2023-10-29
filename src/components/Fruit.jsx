import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Grid,Button,Card,CardContent } from "@mui/material";

export const Fruit=()=>{
    const dispatch=useDispatch();
    const fruitselect=useSelector((state)=>state.greetReducer.fruit);
    console.log("Redux Data",fruitselect);

    const fruit=["orange","kiwi","banana","mango","pineapple","cherry","strawberry","apple","Pear","Guava"]

    const handleFruit=(str)=>{
      const type="ADDFRUIT";
      const payload=str;
      const action={type,payload};
      dispatch(action);
    }
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card sx={{textAlign:"center"}}>
                    <CardContent>
                        <h1>{fruitselect.toUpperCase()}</h1>
                    </CardContent>
                  </Card>
                </Grid>
             {
                fruit.map((item)=>
                <Grid item xs={3}>
                    <Card  sx={{height:200,bgcolor:"cadetblue",textAlign:"center"}}>
                        <CardContent>
                            <h1>{item.toUpperCase()}</h1>
                            <Button onClick={()=>handleFruit(item)} variant="contained" color="warning">Add to cart</Button>
                        </CardContent>
                    </Card>
                    </Grid>
                )
             }
      </Grid>
        </div>

    )
}