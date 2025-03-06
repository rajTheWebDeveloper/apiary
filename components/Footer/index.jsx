import { Grid, Stack } from "@mantine/core";
import logo from '../../public/logo.png'
import Image from "next/image";

export default function Footer()
{
   return <section className="w-full text-white mt-8">
        <Grid>
            <Grid.Col span={{base:12,md:4}}>
                <Image src={logo}/>
            </Grid.Col>
            <Grid.Col span={{base:12,md:4}}>
                <div className="pt-6 px-8 md:pt-8 md:py-6 md:px-6">
                    <Stack gap={7}>
                        <h2 className="font-bold text-lg text-[#FE9700] mb-4">Contact Info</h2>
                        <p>Trade Name: MandM Apiaries</p>
                        <h2>Founders</h2>
                        <div className="flex gap-4">
                            <p className="text-[#FE9700]">Muni Babu</p>
                            <p className="text-[#FE9700]">Manoj Kumar</p>
                        </div>
                        <p>Customer care number</p>
                        <p>8008241610</p>
                    </Stack>
                </div>
            </Grid.Col>
            <Grid.Col span={{base:12,md:4}}>
                <div className="pt-6 px-8 md:pt-8 md:py-6 md:px-6">
                    <Stack gap={7}>
                        <h2 className="font-bold text-lg text-[#FE9700] mb-4">Helpful links</h2>
                        <p>FAQ</p>
                        <p>Shipping Policy</p>
                        <p>Refund Policy</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Contact us</p>
                    </Stack>
                </div>
            </Grid.Col>
        </Grid>
        <p className="text-center mt-8 bg-[#FE9700] py-2">&copy; All rights reserved MandM Apiaries</p>
   </section>
}