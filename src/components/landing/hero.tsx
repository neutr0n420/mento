'use client'
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export default function Hero() {
    const router = useRouter()
    const { toast } = useToast();
    const { isConnected } = useWeb3ModalAccount()
    const isWalletConnected = async () => {
        toast({
            description: "Please connect your wallet first!"
        })
        if (isConnected) {
            router.push('/dashboard')
        } else {
            console.log('Reached here')

        }
    }
    return (
        <>
            <div className="mt-48 flex flex-col text-justify w-[700px] mx-auto">
                <h1 className=" text-center text-6xl font-bold">Mento: Pay for the time you spend</h1>
                <div className="flex justify-center my-8">
                    <Button className="w-36 mx-8" onClick={isWalletConnected}>Dashboard</Button>
                    <Button className="w-36 mx-8" >Learn More</Button>
                </div>
            </div>
        </>
    )
}