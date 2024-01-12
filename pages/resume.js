import { useState, useEffect } from "react";
import useDownloader from "react-use-downloader";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Nav from "@/components/Header/Nav.js"
import Button from "@/components/Button/Button.js"
import { FaDownload } from "react-icons/fa";


export default function Resume() {
    const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

    const fileUrl = "/resume.pdf";
    const filename = "CharlesVanHookResume.pdf";
    return (
        <>
        <Nav />
        <ProgressIndicator />
        <main className="flex flex-col">
            <div className="w-full relative select-none section-container transform-gpu justify-center">
            <Button
            onClick={() => download(fileUrl, filename)}
            classes="link mt-[5rem] mb-[1rem]"
            type="primary"
          >
            <FaDownload /> &nbsp;Download
          </Button>
          </div>
        </main>
        </>
    );
}
