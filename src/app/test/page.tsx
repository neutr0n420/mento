'use client'
import { Framework } from "@superfluid-finance/sdk-core"
import { useWeb3ModalProvider } from "@web3modal/ethers5/react"
import { ethers } from "ethers"

export default function Tests() {
    const { walletProvider } = useWeb3ModalProvider()
    const getEtherProvider = async () => {
        const rpcKey = 'https://polygon-amoy.infura.io/v3/ff5577e6419540079b7ecfa263ac5e6c'
        const provider = new ethers.providers.JsonRpcProvider(rpcKey)
        return provider
    }
    const superToken = '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4'
    const sfInit = async () => {
        const provider = await getEtherProvider()
        const sf = await Framework.create({
            chainId: 80002,
            provider: provider
        })
        const sT = await sf.loadSuperToken(superToken)
        return sT
    }
    const startFlow = async () => {
        const provider = new ethers.providers.JsonRpcProvider(walletProvider as string)
        const signer = provider.getSigner()

        const xSuperToken = await sfInit()
        const createFlowOperations = xSuperToken.createFlow({
            sender: '0x0540d716c6d621948F5A0d33680E2969c33E66c5',
            receiver: '0x3Ca1C47D50162a95424693d943814462f2D9EA36',
            flowRate: '0.05',
        })
        const txResponse = await createFlowOperations.exec(signer);
        const txRecipt = await txResponse.wait();
        console.log("started")
        console.log(txRecipt);
    }
    return <>
        <div>
            <button className="" onClick={startFlow}>Start the Flow</button>
        </div>
    </>
}