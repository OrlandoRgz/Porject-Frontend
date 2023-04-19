import React,{useEffect,useState} from "react";
import { Button } from "@mui/material";

export default function UpdateButton(props)
{

    const UpdateStudent = () =>
    {
        
    }
    return (
        <div>
            <Button onClick={props.handleClickOpen} variant="outlined" color="success">Update</Button>
        </div>
    );

}