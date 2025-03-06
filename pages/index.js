import ImageCarousel from "@/components/Carousel";
import { Grid, Stack } from '@mantine/core';
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Rating } from '@mantine/core';
import { Button } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { Select } from '@mantine/core';
import Promises from "@/components/Promises";


export default function Home()
{

  let [details,setDetails]=useState({quantity:"2 Kg",net:"1"})
  let [variant,setVariant]=useState({variant:"Multiflora"})
  const [domLoaded, setDomLoaded] = useState(false);


  const openWhatsApp = () => {
    const countryCode = '91'; 
    const phoneNumber = '8008241610'; 
    const message = `Hello, I would like to purchase ${details.quantity} of ${variant.variant} with a quantity of ${details.net} bottles`; 
    const whatsappURL = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  let handleQuantity=(quan)=>
  {
    setDetails((prev)=>
    {
      return {...prev,quantity:quan}
    })
  }

  let handleNetChange=(value)=>
  {
    setDetails((prev)=>
    {
      return {...prev,net:value}
    })
  }

  let handleVariantChange=(value)=>
    {
      setVariant((prev)=>
      {
        return {...prev,variant:value}
      })
    }

  useEffect(()=>
  {
    setDomLoaded(true)
  },[])

  useEffect(()=>
  {
    console.log(variant,"This is Variant")
  },[variant])

  if(!domLoaded)
  {
    return null
  }
  return <Stack gap="xl">
        <section className="flex flex-col justify-center w-[90%] max-w-[1200px] bg-white mx-auto mt-10 rounded-lg overflow-hidden">
          <Grid gutter={30}>
          <Grid.Col span={{base:12,md:6}}>
          <ImageCarousel/>
          </Grid.Col>
          <Grid.Col span={{base:12,md:6}}>
              <div className="py-4 px-6 md:py-8 md:px-4">
                <Stack
                  h="100%"
                  bg="var(--mantine-color-body)"
                  align="flex-start"
                  justify="flex-start"
                  gap="sm">
                    <div className="flex items-center">
                      <Rating value={4.5} fractions={2} readOnly /> 
                      <span className="ml-2">89 Reviews</span>
                    </div>

                    <div className="">
                        <Select
                          label="Variant"
                          placeholder="Multiflora"
                          data={['Multiflora', 'Ajwain', 'Wild Honey']}
                          value={variant.variant}
                          onChange={handleVariantChange}
                        />
                    </div>

                    {console.log(variant.variant,"VV")}

                   {variant.variant=="Multiflora" &&  <Tabs defaultValue="chat" inverted>
                      <Tabs.Panel value="chat" pb="xs">
                        <div className="md:flex">
                          <h3 className="text-lg">Rs. 599.00 <span className="line-through text-gray-500 ml-2">Rs. 999.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 400.00</Button>
                        </div>
                      </Tabs.Panel>
                      <Tabs.Panel value="gallery" pb="xs">
                      
                        <div className="md:flex">
                          <h3 className="text-lg">Rs. 299.00 <span className="line-through text-gray-500 ml-2">Rs. 599.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 300.00</Button>
                        </div>
                      </Tabs.Panel>

                      <Tabs.List className="mt-1 md:mt-2">
                        <Tabs.Tab value="chat">
                          <Button onClick={()=>handleQuantity("1 Kg")} variant="outline" color="#FC9800" size="xs">1 Kg</Button>
                        </Tabs.Tab>
                        <Tabs.Tab value="gallery">
                          <Button onClick={()=>handleQuantity("0.5 Kg")} variant="outline" color="#FC9800" size="xs">0.5 Kg</Button>
                        </Tabs.Tab>
                      </Tabs.List>
                    </Tabs>}

                    {variant.variant=="Ajwain" &&  <Tabs defaultValue="chat" inverted>
                      <Tabs.Panel value="chat" pb="xs">
                        <div className="md:flex">
                          <h3 className="text-lg">Rs. 599.00 <span className="line-through text-gray-500 ml-2">Rs. 999.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 400.00</Button>
                        </div>
                      </Tabs.Panel>
                      <Tabs.Panel value="gallery" pb="xs">
                      
                        <div className="md:flex">
                          <h3 className="text-lg">Rs. 349.00 <span className="line-through text-gray-500 ml-2">Rs. 599.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 250.00</Button>
                        </div>
                      </Tabs.Panel>

                      <Tabs.List className="mt-1 md:mt-2">
                        <Tabs.Tab value="chat">
                          <Button onClick={()=>handleQuantity("1 Kg")} variant="outline" color="#FC9800" size="xs">1 Kg</Button>
                        </Tabs.Tab>
                        <Tabs.Tab value="gallery">
                          <Button onClick={()=>handleQuantity("0.5 Kg")} variant="outline" color="#FC9800" size="xs">0.5 Kg</Button>
                        </Tabs.Tab>
                      </Tabs.List>
                    </Tabs>}

                    {variant.variant=="Wild Honey" &&  <Tabs defaultValue="chat" inverted>
                      <Tabs.Panel value="chat" pb="xs">
                        <div className="md:flex">
                          <h3 className="text-lg">Rs. 599.00 <span className="line-through text-gray-500 ml-2">Rs. 999.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 400.00</Button>
                        </div>
                      </Tabs.Panel>
                      <Tabs.Panel value="gallery" pb="xs">
                      
                        <div className="md:flex">
                          <h3 className="text-lg">Rs. 299.00 <span className="line-through text-gray-500 ml-2">Rs. 599.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 300.00</Button>
                        </div>
                      </Tabs.Panel>

                      <Tabs.List className="mt-1 md:mt-2">
                        <Tabs.Tab value="chat">
                          <Button onClick={()=>handleQuantity("1 Kg")} variant="outline" color="#FC9800" size="xs">1 Kg</Button>
                        </Tabs.Tab>
                        <Tabs.Tab value="gallery">
                          <Button onClick={()=>handleQuantity("0.5 Kg")} variant="outline" color="#FC9800" size="xs">0.5 Kg</Button>
                        </Tabs.Tab>
                      </Tabs.List>
                    </Tabs>}


                    <div className="">
                        <Select
                          label="No of units"
                          placeholder="1"
                          data={['1', '2', '3', '4','5+']}
                          value={details.net}
                          onChange={handleNetChange}
                        />
                    </div>
                    <Button onClick={openWhatsApp} variant="filled" color="#FC9800" size="md" className="mt-4">Buy Now</Button>
                </Stack>
              </div>
          </Grid.Col>
        </Grid>
        </section>
        <Promises/>
      </Stack>
}