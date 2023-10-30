import React, { useState, useCallback } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getProfiles } from "../../firebase/services/User";
import { SearchBar } from "../../components/Layout/Common/SearchBar";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
import debounce from "lodash.debounce";

export default function SearchPage() {
  const router = useRouter();
  const searchParam = router.query.q;

  const [search, setSearch] = useState(searchParam || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscar");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const debouncedChangeHandler = useCallback(debounce(handleChange, 300), []);

  useEffect(() => {
    const searchProfiles = async () => {
      setLoading(true);
      const data = await getProfiles(searchParam);
      setResults(data);
      setLoading(false);
    };

    searchProfiles();
  }, [search]);

  return (
    <Layout showSearchBar={true}>
      <Box pt="10px">
        <SearchBar />
        Perfiles:
        {results.map((profile) => (
          <li>perfil</li>
        ))}
        <Box borderTop={"1px"} borderColor={"black.50"}>
          Publicacion
        </Box>
      </Box>
    </Layout>
  );
}
