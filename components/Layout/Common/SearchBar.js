import { useState, useCallback } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  LinkBox,
  LinkOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getProfiles } from "../../../firebase/services/User/index";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDebounce } from "@uidotdev/usehooks";
import { SearchIcon } from "../../Icons";

const Results = ({ results }) => {
  const ProfileResult = ({ name, id, avatar, position }) => {
    return (
      <LinkBox
        cursor={"pointer"}
        _hover={{ bg: "gray.100", transitionDuration: "0.3s" }}
        p={"5px 10px"}
      >
        <LinkOverlay as={NextLink} href={`/Profile/${id}`}>
          <Flex gap={3} align={"center"}>
            <Avatar size={"md"} src={avatar} />
            <Box>
              <Text fontSize={"15px"} fontWeight={700}>
                {name}
              </Text>
              <Text color={"#71767b"} fontSize={"15px"} fontWeight={"normal"}>
                {position}
              </Text>
            </Box>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    );
  };

  return (
    <Box
      bg={"black.50"}
      layerStyle={"primaryBox"}
      mt={"10px"}
      overflow={"hidden"}
    >
      <Flex direction={"column"} gap={3}>
        {results.map((profile) => (
          <>
            <ProfileResult {...profile} />
          </>
        ))}
      </Flex>
    </Box>
  );
};

export const SearchBar = () => {
  const router = useRouter();

  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchTerm(formData.get("search"));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const searchProfiles = async () => {
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const data = await getProfiles(debouncedSearchTerm);
        setResults(data);
      }
      setIsSearching(false);
    };

    searchProfiles();
  }, [debouncedSearchTerm]);

  return (
    <Box mb={"24px"}>
      <form
        onSubmit={handleSubmit}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={0}
      >
        <Box
          borderRadius="full"
          borderWidth="1px"
          borderColor={isFocused ? "brand.100" : "black.50"}
          display="flex"
          alignItems="center"
          bg="black.50"
        >
          <Flex w={"15%"} justify={"center"} align={"center"}>
            {isSearching ? (
              <Spinner color="brand.100" size={"xs"} />
            ) : (
              <Box p={"0px"}>
                <SearchIcon strokeColor={isFocused ? "brand.100" : "gray.50"} />
              </Box>
            )}
          </Flex>
          <Box>
            <Input
              name="search"
              placeholder="Buscar"
              onChange={handleChange}
              autoComplete="off"
              border={"none"}
              _focus={{
                boxShadow: "none",
              }}
              _placeholder={{
                color: "gray.50",
              }}
            />
          </Box>
        </Box>
      </form>
      {/* ---- Resultados ----- */}
      {/* {isFocused && ( */}
      <Box position={"relative"}>
        {results.length != 0 && (
          <Box
            position={"absolute"}
            w={"100%"}
            borderRadius={"2xl"}
            bg={"black.100"}
            p={"0px 5px 10px"}
            boxShadow={"lg"}
            zIndex={99}
            border={"2px"}
            borderColor={"black.50"}
          >
            <Results results={results} />
            <Box mt={"10px"} fontSize={"15px"} _hover={{ color: "brand.100" }}>
              <NextLink href={`/search?q=${searchTerm}`}>Ver mas</NextLink>
            </Box>
          </Box>
        )}
      </Box>
      {/* )} */}
    </Box>
  );
};
