import React,{useState,useEffect} from "react";
import Student from "../api/Student";
import StudentCRUD from "../components/StudentCRUD";
import constansts from "../static/constants";
import { Grid } from "@mui/material";
import StoreButton from "../components/StoreButton";
export default function Index()
{
    const [students,setStudent] = useState([]);
    useEffect(() => {
        Student[constansts.index](setStudent);
    }, [])

    return (
        <Grid style={{marginTop:"20px"}} container spacing={2}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
            <StudentCRUD setStudent={setStudent} students={students}></StudentCRUD>
        </Grid>
        <Grid item xs={2}>  
        <StoreButton></StoreButton> 
        </Grid>
        </Grid>
    );
}