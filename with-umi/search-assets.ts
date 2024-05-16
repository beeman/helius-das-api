import { publicKey } from '@metaplex-foundation/umi'
import { DasApiAssetMintExtension, getUmi } from './get-umi'

export async function searchAssets({ owner }: { owner: string }): Promise<DasApiAssetMintExtension[]> {
  const assets = await getUmi().rpc.searchAssets({
    owner: publicKey(owner),
    limit: 1000,
    page: 1,
    sortBy: { sortBy: 'updated', sortDirection: 'desc' },
    conditionType: 'all',
  })

  return assets.items
}
