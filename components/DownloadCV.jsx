import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const DownloadButton = () => {
  return (
    <a href="/assets/My-CV.pdf" download="My-CV.pdf">
      <Button
        variant="outline"
        size="lg"
        className="flex
        items-center
        gap-2 transition-all duration-500"
        target="_blank"
      >
        <span className="mr-3">Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </a>
  );
};
export default DownloadButton;
