import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography'
export default function ShowWidth(){
    const [ w , setW ] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setW(window.innerWidth)
        }
    
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    },[])
    return (
      <>
        <Typography variant="h6" color="initial">
            width: {w} px
        </Typography>
      </>
    )
    
}