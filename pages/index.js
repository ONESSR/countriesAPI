import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { Container } from "@mui/system";
import { Input } from "../components/Input";
import { Card } from "../components/Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";

export const getServerSideProps = async () => {
  const res = await axios.get("https://restcountries.com/v3.1/all");

  return {
    props: {
      data: res.data
    }
  };
};

export default function Home({ data }) {
  const [filteredCountries, setFilteredCountries] = useState(data);

  function filter(value) {
    const newFilteredCountries = data.filter((country) =>
      country.name.common.toLowerCase().startsWith(value.toLowerCase().trim())
    );
    setFilteredCountries(newFilteredCountries);
  }

  console.log(data);
  return (
    <Container className="home" maxWidth="lg">
      <Input filter={filter} />
      <Grid container spacing={3}>
        {/* <Grid item xs={6} sm={4} md={3}>
          <Card />
        </Grid> */}
        {filteredCountries.map((country) => {
          return (
            <Grid key={country} item xs={6} sm={4} md={3}>
              <Card country={country} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
