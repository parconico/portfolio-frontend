import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

interface Props {
  type: string;
  content: string;
}

export default function Info({ type, content }: Props) {
  const icon = () => {
    switch (type) {
      case "email":
        return <MailOutlineOutlinedIcon sx={{ color: "#fef08a" }} />;
      case "phone":
        return <PhoneAndroidOutlinedIcon sx={{ color: "#fef08a" }} />;
      case "calendar":
        return <CalendarMonthOutlinedIcon sx={{ color: "#fef08a" }} />;
      case "location":
        return <FmdGoodOutlinedIcon sx={{ color: "#fef08a" }} />;
      default:
        break;
    }
  };
  return (
    <div className="flex gap-2 w-full">
      <div className="bg-gradient-to-br from-neutral-800  to-[#1a1a1a] rounded-lg p-3">
        {icon()}
      </div>
      <div>
        <h1 className="text-neutral-400 text-sm uppercase">{type}</h1>
        <p className="text-white text-sm">{content}</p>
      </div>
    </div>
  );
}
