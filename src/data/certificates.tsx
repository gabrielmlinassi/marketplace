export type CertificateItem = {
  src: string;
  currentValue: string;
  alternateValue: string;
  serial: string;
  name: string;
};

const CERTIFICATES: CertificateItem[] = [
  {
    src: "/assets/prod-1.png",
    currentValue: "0.08 ETH",
    alternateValue: "$2,500.00",
    serial: "07892",
    name: "Regulus",
  },
  {
    src: "/assets/prod-2.png",
    currentValue: "0.06 ETH",
    alternateValue: "$2,100.00",
    serial: "01396",
    name: "Rigel",
  },
  {
    src: "/assets/prod-3.png",
    currentValue: "0.07 ETH",
    alternateValue: "$1,960.50",
    serial: "01160",
    name: "Polaris",
  },
  {
    src: "/assets/prod-4.png",
    currentValue: "0.09 ETH",
    alternateValue: "$3,143.40",
    serial: "04290",
    name: "Vega",
  },
  {
    src: "/assets/prod-1.png",
    currentValue: "0.08 ETH",
    alternateValue: "$2,500.00",
    serial: "07122",
    name: "Regulus",
  },
  {
    src: "/assets/prod-2.png",
    currentValue: "0.06 ETH",
    alternateValue: "$2,100.00",
    serial: "01316",
    name: "Rigel",
  },
  {
    src: "/assets/prod-3.png",
    currentValue: "0.07 ETH",
    alternateValue: "$1,960.50",
    serial: "41160",
    name: "Polaris",
  },
  {
    src: "/assets/prod-4.png",
    currentValue: "0.09 ETH",
    alternateValue: "$3,143.40",
    serial: "04690",
    name: "Vega",
  },
];

export default CERTIFICATES;
