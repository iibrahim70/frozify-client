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
import { useParams, usePathname, useRouter } from "next/navigation";

const SocialShare = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const shareUrl = "https://chatgpt.com/";
  const title = "Hello";

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
        title="Share as you want!"
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

          <TwitterShareButton url={shareUrl} title={title}>
            <XIcon size={32} round />
          </TwitterShareButton>

          <TelegramShareButton url={shareUrl} title={title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
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
