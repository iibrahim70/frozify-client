"use client";

import {
  FacebookIcon,
  FacebookShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  XIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { usePathname } from "next/navigation";

const SocialShare = () => {
  const pathname = usePathname();
  const baseUrl = "https://frozify.netlify.app";
  const shareUrl = baseUrl + pathname;

  return (
    <div className="flex items-center gap-3">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <TwitterShareButton url={shareUrl}>
        <XIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <WhatsappShareButton url={shareUrl} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
