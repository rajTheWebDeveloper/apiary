import ImageCarousel from "@/components/Carousel";
import { Grid, Stack } from '@mantine/core';
import { useEffect, useState } from "react";
import { Rating } from '@mantine/core';
import { Button } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { Select } from '@mantine/core';


export default function Home()
{

  let [details,setDetails]=useState({quantity:"1 Kg",net:"1"})

  const [domLoaded, setDomLoaded] = useState(false);


  const openWhatsApp = () => {
    const countryCode = '91'; 
    const phoneNumber = '8978441610'; 
    const message = `Hello, I would like to purchase ${details.quantity} of pure honey with a quantity of ${details.net} jars`; 
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
  useEffect(() => {
    setDomLoaded(true);
  }, []);


  useEffect(()=>
  {
    console.log(details)
  },[details])

  if(!domLoaded)
  {
    return null
  }
  return <main className="flex justify-center w-[90%] max-w-[1200px] bg-white mx-auto mt-10 rounded-lg overflow-hidden">
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
                
                <h2 className="text-2xl font-bold">Natural Honey</h2>

                <Tabs defaultValue="chat" inverted>
                  <Tabs.Panel value="chat" pb="xs">
                    <div className="md:flex">
                      <h3 className="text-lg">Rs. 1000.00 <span className="line-through text-gray-500 ml-2">Rs. 2,000.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 1000.00</Button>
                    </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="gallery" pb="xs">
                    <div className="md:flex">
                      <h3 className="text-lg">Rs. 600.00 <span className="line-through text-gray-500 ml-2">Rs. 1,500.00</span></h3> <Button size="xs" color="#FDA136" className="mt-2 md:mt-0 md:ml-6">Sale • Save Rs. 500.00</Button>
                    </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="account" pb="xs">
                    <div className="md:flex">
                      <h3 className="text-lg">Rs. 400.00 <span className="line-through text-gray-500 ml-2">Rs. 1,200.00</span></h3>
                    </div>
                  </Tabs.Panel>

                  <Tabs.List className="mt-2">
                    <Tabs.Tab value="chat">
                      <Button onClick={()=>handleQuantity("2 Kg")} variant="outline" color="#FC9800" size="xs">2 Kg</Button>
                    </Tabs.Tab>
                    <Tabs.Tab value="gallery">
                      <Button onClick={()=>handleQuantity("1 Kg")} variant="outline" color="#FC9800" size="xs">1 Kg</Button>
                    </Tabs.Tab>
                    <Tabs.Tab value="account">
                      <Button onClick={()=>handleQuantity("0.5 Kg")} variant="outline" color="#FC9800" size="xs">500 gm</Button>
                    </Tabs.Tab>
                  </Tabs.List>
                </Tabs>

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
  </main>
}