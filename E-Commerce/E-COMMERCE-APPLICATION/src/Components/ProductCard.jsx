import React from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import logo from "../../public/wired-gradient-680-it-developer.gif";
import logo2 from "../../public/system-regular-146-label.gif";
import logo3 from "../../public/system-regular-28-info.gif";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  rating,
}) => {
  const numFilledStars = rating && rating.rate;
  const numReviews = rating && rating.count;

  const navigate = useNavigate();

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="py-2 "
      boxShadow="outline"
      rounded="md"
      bg="white"
    >
      <Image src={image} alt={title} className="h-44 m-auto" />

      <Box className="px-2">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            noOfLines={1}
          >
            {title}
          </Box>
        </Box>

        <Box className="flex gap-5 mt-2" alignItems="center">
          <img className="w-6 h-6" src={logo3} alt={logo3} />
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {description}
          </Box>
        </Box>

        <Box className="flex gap-5 mt-2" alignItems="center">
          <img className="w-8" src={logo2} alt={logo2} />
          <Box as="span" color="gray.600" fontSize="md" className="font-bold">
            {price}
          </Box>
        </Box>
        <Box className="flex" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < numFilledStars ? "teal.500" : "gray.300"}
              />
            ))}
          <Box className="flex justify-end w-[100%]" alignItems="center">
            <img className="w-10" src={logo} alt={logo} />
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {numReviews}{" "}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className=" flex justify-between px-2">
        <Button
        color="white"
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={() => navigate(`/products/${id}`)}
        >
          View Details
        </Button>
        <Button className="">Add To Cart</Button>
      </Box>
    </Box>
  );
};
