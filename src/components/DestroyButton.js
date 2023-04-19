import React,{useEffect,useState} from "react";
import { Button } from "@mui/material";
import Student from "../api/Student";
import constants from "../static/constants";
import apiconstants from "../static/apiconstants";
export default function DestroyButton(props)
{
    const DestroyStudent = () =>
    {
        Student[constants.destroy](props.serial_number,props.setStudent);
    }
    return (
        <div>
            <Button onClick={DestroyStudent} variant="outlined" color="error">Delete</Button>
        </div>
    );

}