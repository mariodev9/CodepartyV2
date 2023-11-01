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
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getProfiles } from "../../../firebase/services/User/index";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDebounce } from "@uidotdev/usehooks";
import { SearchIcon } from "../../Icons";
import { motion, isValidMotionProp } from "framer-motion";

const Results = ({ results }) => {
  const ProfileResult = ({ name, id, avatar, position }) => {
    return (
      <LinkBox
        cursor={"pointer"}
        bg={"black.100"}
        _hover={{ bg: "black.50", transitionDuration: "0.3s" }}
        p={"4px 8px"}
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
    <Box borderRadius={"0px"} mt={"10px"} overflow={"hidden"}>
      <Flex direction={"column"} gap={3}>
        {results.map((profile) => (
          <ProfileResult {...profile} />
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
    // const formData = new FormData(e.target);
    // setSearchTerm(formData.get("search"));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNavigation = (e) => {
    router.push(`/search?q=${searchTerm}`);
    setIsFocused(false);
  };

  useEffect(() => {
    const searchProfiles = async () => {
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const data = await getProfiles(debouncedSearchTerm);
        console.log(data, "que trajo");
        setResults(data);
      }
      setIsSearching(false);
    };

    searchProfiles();

    if (debouncedSearchTerm.length == 0) {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <Box mb={"24px"}>
      <form
        onSubmit={handleSubmit}
        onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
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
          <Box w={"full"}>
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
      {isFocused && (
        <Box position={"relative"}>
          {results.length === 0 &&
            debouncedSearchTerm.length != 0 &&
            !isSearching && (
              <Box
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                position={"absolute"}
                w={"100%"}
                borderRadius={"2xl"}
                bg={"black.100"}
                boxShadow={"lg"}
                zIndex={99}
                border={"2px"}
                borderColor={"black.50"}
                cursor={"pointer"}
                onClick={handleNavigation}
              >
                <NextLink href={`/search?q=${debouncedSearchTerm}`}>
                  <Text p={"5px 10px"}>Buscar "{debouncedSearchTerm}"</Text>
                </NextLink>
              </Box>
            )}

          {results.length != 0 && (
            <Box
              position={"absolute"}
              w={"100%"}
              borderRadius={"2xl"}
              bg={"black.100"}
              boxShadow={"lg"}
              zIndex={99}
              border={"2px"}
              borderColor={"black.50"}
            >
              <Results results={results} />
              <Box
                p={"5px 10px"}
                fontSize={"15px"}
                _hover={{ color: "brand.100" }}
                onClick={handleNavigation}
              >
                Ver todo
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
