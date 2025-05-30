"use client";
//@ts-ignore
import { Button, Card, TextField, Typography } from '@mui/material';
//@ts-ignore
import React from 'react';
import { useState } from 'react';
import logo from "./logo.png"

export function Signup(props: {
    onClick: (username: string, password: string) => void;
}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            {/* <img src={logo.src} alt="My Image" /> */}
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
            Welcome to Coursera. Sign up below
            </Typography>
        </div>
    <div style={{display: "flex", justifyContent: "center"}}>
        <Card variant={"outlined"} style={{width: 400, padding: 20}}>
            <TextField
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                fullWidth={true}
                label="Email"
                variant="outlined"
            />
            <br/><br/>
            <TextField
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                fullWidth={true}
                label="Password"
                variant="outlined"
                type={"password"}
            />
            <br/><br/>

            <Button
                size={"large"}
                variant="contained"
                onClick={async() =>{
                    props.onClick(email, password)
                }}
            > Signup</Button>
        </Card>
    </div>
</div>
    );
}
