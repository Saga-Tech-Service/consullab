"use client";
import React, { useState } from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
    EmailIcon,
} from "next-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "lucide-react";

export default function SocialShare({
    url,
    title,
}: {
    url: string;
    title: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const iconSize = 24;

    return (
        <div className="w-full max-w-[1008px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                <div className="self-stretch text-[#cb935d] text-lg font-bold font-montserrat leading-[25.20px]">
                    Partilhar artigo
                </div>
            </div>
            <div className="self-stretch justify-start items-center gap-[78px] inline-flex">
                <LinkedinShareButton url={url} title={title} className="bg-red-500">
                    <div className="group flex items-center gap-2 text-[#091622] text-lg font-normal font-inter leading-[27px]">
                        LinkedIn
                    </div>
                </LinkedinShareButton>
                <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />

                <FacebookShareButton url={url} quote={title}>
                    <div className="group flex items-center gap-2 text-[#091622] text-lg font-normal font-inter leading-[27px]">
                        Facebook
                    </div>
                </FacebookShareButton>
                <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />

                <TwitterShareButton url={url} title={title}>
                    <div className="group flex items-center gap-2 text-[#091622] text-lg font-normal font-inter leading-[27px]">
                        X
                    </div>
                </TwitterShareButton>
                <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />

                <EmailShareButton
                    url={url}
                    subject={title}
                    body={`Confira este artigo: ${title}`}
                >
                    <div className="group flex items-center gap-2 text-[#091622] text-lg font-normal font-inter leading-[27px]">
                        <EmailIcon
                            size={iconSize}
                            round
                            className="hidden group-hover:block"
                        />
                        Email
                    </div>
                </EmailShareButton>
                <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />

                <CopyToClipboard text={url} onCopy={handleCopy}>
                    <div className="group flex items-center gap-2 text-[#091622] text-lg font-normal font-inter leading-[27px] cursor-pointer">
                        <Link size={iconSize} />
                        {copied ? "Copiado!" : "Copiar link"}
                    </div>
                </CopyToClipboard>
            </div>
        </div>
    );
}
