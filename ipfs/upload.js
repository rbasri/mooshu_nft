const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Mooshu",
      attributes: [
        {
          "trait_type": "Cuteness",
          "value": "Extremely High"
        },
        {
          "trait_type": "Born",
          "value": "July 4, 2004"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.ipfs.io/ipfs/QmTKN6YR1w3WMS9XjnYx7ze6SjxrWv3g67WmHB5RhPidXF",
      description: "Get a load of this shih tzu!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
