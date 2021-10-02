import React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function SnackBarComponent({stateSB, setStateSB, messageSB}) {

    const { vertical, horizontal, openSB } = stateSB;

  return (        
        <Snackbar     
        open={openSB}
        autoHideDuration={3000}      
        anchorOrigin={{ vertical, horizontal }}        
        onClose={()=>setStateSB({ ...stateSB, openSB: false })}
        message={messageSB}
        key={vertical + horizontal}
      />    
  );
}
