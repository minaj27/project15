import React from "react";
import { Link } from "react-router-dom";
import { Grid,Button,Card ,CardContent } from "@mui/material";
import { navdata } from "./data";

export const Nav=()=>{
    return(
        <Card>
            <CardContent>
            <Grid container spacing={2}>
               {
                navdata.map((item)=>
                  <Grid item xs={2}>
                      <Link to={item.path}>
                      <Button variant="contained" fullWidth color="warning">
                         {item.title}
                      </Button>
                      </Link>
                    </Grid>
                )
               }
             </Grid>
            </CardContent>
        </Card>

    
    )
}