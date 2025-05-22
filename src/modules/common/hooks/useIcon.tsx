import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

export const useIcons = () => {
  const icons = new Map([
    ["frontend", <LaptopIcon className="text-yellow-200 h-8 w-8" />],
    ["backend", <CodeIcon className="text-yellow-200  h-8 w-8" />],
    ["user", <PersonIcon className="text-yellow-200  h-8 w-8" />],
    ["lightning", <BoltIcon className="text-yellow-200  h-8 w-8" />],
    ["book", <BookOutlinedIcon className="text-yellow-200  h-4 w-4" />],
  ]);
  return { icons };
};
