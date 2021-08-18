async function main() {
  const MooshuNFT = await hre.ethers.getContractFactory("MooshuNFT");
  const nft = await MooshuNFT.deploy();

  await nft.deployed();

  console.log("MooshuNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
