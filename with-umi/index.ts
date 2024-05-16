import { getAssetsByOwner } from './get-assets-by-owner'
import { searchAssets } from './search-assets'

const owner = 'CFrBAqdw7j1nPVawSP18FujnB7rjbrKRVTAQQgPxi9QX'
const asset = '3guGnPxWkjgebL8yBEZUdxqyw7oBAy77jB4zphkvu8uo'

async function main() {
  console.log(`Getting assets from owner ${owner}`)
  console.log(' --> getAssetsByOwner')
  const assetsByOwner = await getAssetsByOwner({ owner })
  const assetsByOwnerIds = assetsByOwner.map((i) => i.id)
  console.log(`     --> getAssetsByOwner found ${assetsByOwner.length} assets`)
  console.log(' --> searchAssets')
  const assetsSearch = await searchAssets({ owner })
  const assetsSearchIds = assetsSearch.map((i) => i.id)
  console.log(`     --> searchAssets found ${assetsSearch.length} assets`)

  const diff1 = assetsByOwnerIds.filter((i) => !assetsSearchIds.includes(i))
  console.log(`     --> assetsByOwnerIds not in assetsSearchIds: ${diff1.length}`)

  const diff2 = assetsSearchIds.filter((i) => !assetsByOwnerIds.includes(i))
  console.log(`     --> assetsSearchIds not in assetsByOwnerIds: ${diff2.length}`, diff2)

  const foundAsset1 = assetsByOwner.find((i) => i.id === asset)
  if (foundAsset1) {
    console.log(
      `     --> found assetByOwner ${asset}`,
      JSON.stringify(foundAsset1?.mint_extensions ? foundAsset1?.mint_extensions['metadata'] : {}, null, 2),
    )
  }
  const foundAsset2 = assetsSearch.find((i) => i.id === asset)
  if (foundAsset2) {
    console.log(
      `     --> found assetSearch ${asset}`,
      JSON.stringify(foundAsset2?.mint_extensions ? foundAsset2?.mint_extensions['metadata'] : {}, null, 2),
    )
  }
}

main()
  .then(() => {
    console.log('Done')
  })
  .catch((err) => {
    console.error(err)
  })
