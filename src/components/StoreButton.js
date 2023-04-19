import React,{useEffect,useState} from "react";
import { Button } from "@mui/material";

export default function StoreButton(props)
{
    const StoreStudent = () =>
    {
        
    }

    return (
        <div>
            <Button onClick={StoreStudent} variant="outlined" color="primary">Create</Button>
        </div>
    );

}