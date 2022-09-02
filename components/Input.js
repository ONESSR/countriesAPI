import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Input = ({ filter }) => {
  const [inputValue, setInputValue] = useState("");

  function getValue(e) {
    setInputValue(e.target.value);
    filter(inputValue);
    console.log(inputValue);
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "40px 0px"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={inputValue}
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          onChange={getValue}
        />
      </Box>
    </>
  );
};
