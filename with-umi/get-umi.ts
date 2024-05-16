import { dasApi, DasApiAsset } from '@metaplex-foundation/digital-asset-standard-api'
import { createUmi, Umi } from '@metaplex-foundation/umi'
import { web3JsRpc } from '@metaplex-foundation/umi-rpc-web3js'
import 'dotenv/config'

const endpoint = process.env['SOLANA_RPC_ENDPOINT']

if (!endpoint) {
  throw new Error('SOLANA_RPC_ENDPOINT is not set')
}

export function getUmi(): Umi {
  return createUmi()
    .use(web3JsRpc(endpoint as string, 'confirmed'))
    .use(dasApi())
}

export type DasApiAssetMintExtension = DasApiAsset & { mint_extensions?: Record<string, Record<string, string>> }
