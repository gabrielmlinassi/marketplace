export type ProductItem = {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
};

const PRODUCTS: ProductItem[] = [
  {
    image: {
      src: "/placeholder.png",
      alt: "",
    },
    heading: "Rare Intergalactic NFT's",
    description:
      "Own a Star as an NFT. Includes printable StarLedger certificate.",
  },
  {
    image: {
      src: "/placeholder.png",
      alt: "",
    },
    heading: "3D Map",
    description: "View 5,000 stars & 88 constellations on the StarLedger map.",
  },
  {
    image: {
      src: "/placeholder.png",
      alt: "",
    },
    heading: "Crypto + Andromenda",
    description:
      "Low gas fees, fast transactions. Use $METIS + $ETH to buy & sell stars.",
  },
];

export default PRODUCTS;
