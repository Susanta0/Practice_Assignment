import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../Components/Loading';
import { Error } from '../Components/Error';
import axios from 'axios';
import logo from "../../public/wired-gradient-680-it-developer.gif";
import logo2 from "../../public/system-regular-146-label.gif";
import logo3 from "../../public/system-regular-28-info.gif";
import { StarIcon } from "@chakra-ui/icons";
import { Card, Stack, CardBody, CardFooter, Image, Heading, Text, Button, Box } from '@chakra-ui/react'
const reducer = (preState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...preState, loading: true, error: false };
    case "ERROR":
      return { ...preState, loading: false, error: true };
    case "SUCCESS":
      return { ...preState, loading: false, error: false, data: payload };
    default:
      return preState;
  }
};
export const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: false,
    data: {},
  });
  const { loading, error, data } = state;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const { data } = await axios({
        method: "GET",
        baseURL: import.meta.env.VITE_BASE_URL,
        url: `/products/${product_id}`,
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      dispatch({ type: "SUCCESS", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

    const {product_id}=useParams()
    // const navigate=useNavigate()
    const {image, title, description, price, rating}=data
    const numFilledStars = rating && rating.rate;
  const numReviews = rating && rating.count;
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className='px-10 py-5'
  boxShadow='dark-lg' p='6' rounded='md' bg='white'
  mt={2}

  
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>
       <Box className="flex gap-5 mt-5" >
          <img className="w-8 h-8" src={logo3} alt={logo3} />
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            // noOfLines={1}
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
        <Box className="flex gap-1" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < numFilledStars ? "teal.500" : "gray.300"}
              />
            ))}
          <Box className="flex w-[100%]" alignItems="center">
            <img className="w-10" src={logo} alt={logo} />
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {numReviews}{" "}
            </Box>
          </Box>
        </Box>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latter
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}
