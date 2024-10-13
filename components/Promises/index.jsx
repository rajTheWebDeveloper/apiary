import { Grid,Flex } from "@mantine/core";
import { FaTruck } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";




export default function Promises()
{
    return <section  className="w-[100vw] bg-white text-[#333333] h-auto py-12 px-8">
        <Grid justify="center" align="center" gutter="lg">
            <Grid.Col span={{base:12,sm:6,lg:3}}>
                <Flex justify="flex-start">
                    <FaTruck className="mx-6 my-4" size={26}/>
                    <div>
                        <h2 className='text-lg font-semibold'>Free Shipping</h2>
                        <p>on all orders above ₹1000</p>
                    </div>
                </Flex>
            </Grid.Col>
            <Grid.Col span={{base:12,sm:6,lg:3}}>
                <Flex justify="flex-start">
                    <IoMdMail className="mx-6 my-4" size={26}/>
                    <div>
                        <h2 className='text-lg font-semibold'>Mail support</h2>
                        <p>to answer all your queries</p>
                    </div>
                </Flex>
            </Grid.Col>
            <Grid.Col span={{base:12,sm:6,lg:3}}>
                 <Flex justify="flex-start">
                    <FaCreditCard className="mx-6 my-4" size={26}/>
                    <div>
                        <h2 className='text-lg font-semibold'>Safe Transactions</h2>
                        <p>for worry-free shopping</p>
                    </div>
                </Flex>
            </Grid.Col>
            <Grid.Col span={{base:12,sm:6,lg:3}}>
                <Flex justify="flex-start">
                        <MdOutlineWorkspacePremium className="mx-6 my-4" size={26}/>
                        <div>
                            <h2 className='text-lg font-semibold'>Premium Quality</h2>
                            <p>to ensure your satisfaction</p>
                        </div>
                </Flex>
            </Grid.Col>
        </Grid>
    </section>
}