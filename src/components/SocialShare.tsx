"use client";

import { useState } from "react";
import { Modal } from "antd";
import { IoShareSocialSharp } from "react-icons/io5";
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
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const SocialShare = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const baseUrl = "https://frozify.netlify.app";
  const shareUrl = baseUrl + pathname;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        size="sm"
        variant="outline"
        className="flex items-center gap-3 border-black"
      >
        <IoShareSocialSharp className="size-4" />
        <p>Share</p>
      </Button>

      <Modal
        title="Share the Web"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
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
      </Modal>
    </>
  );
};

export default SocialShare;
