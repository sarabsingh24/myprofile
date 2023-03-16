import DevicesIcon from "@material-ui/icons/Devices";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";

const ServiceText = [
  {
    id: 3,
    icon: <CodeIcon fontSize="large" />,
    name: "React JS",
    desc: "React is used to create interactive UIs, Its updates the components when your data changes, and it is widely used in web development, for the last 4 years I am working in ReactJs and have a good knowledge of components, hooks, redux and API integration.",
  },
  {
    id: 2,
    icon: <EmojiFoodBeverageIcon fontSize="large" />,
    name: "Javascript",
    desc: "Javascript is most well-known as the scripting language for interactive web pages. i utilize all the modern javascript features to create pages interactive.",
  },
  {
    id: 1,
    icon: <DevicesIcon fontSize="large" />,
    name: "HTML / CSS",
    desc: "Responsive and clean code that makes your web page look good on all devices (desktops, tablets, and phones).",
  },

  {
    id: 4,
    icon: <GitHubIcon fontSize="large" />,
    name: "GitHub",
    desc: "GitHub keeps our work safe. It lets multiple people make separate changes to web pages at the same time from anywhere.",
  },
];

export { ServiceText };
