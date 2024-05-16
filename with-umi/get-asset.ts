import { DasApiAsset } from '@metaplex-foundation/digital-asset-standard-api'
import { publicKey } from '@metaplex-foundation/umi'
import { getUmi } from './get-umi'

export async function getAsset({ asset }:{ asset: string }): Promise<DasApiAsset> {
  return getUmi().rpc.getAsset(publicKey(asset))
}
