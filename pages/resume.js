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
            <div className="mt-[5rem] w-full relative select-none section-container transform-gpu justify-center">
            <section id="education">
                <h2>Education</h2>
                <hr />
                {/* Add your education details here */}
            </section>
            <section id="experience">
                <h2>Experience</h2>
                <hr />
                {/* Add your experience details here */}
            </section>
            <section id="internships">
                <h2>Internships</h2>
                <hr />
                {/* Add your internship details here */}
            </section>
            <section id="certificates">
                <h2>Certificates/Awards</h2>
                <hr />
                {/* Add your certificates and awards details here */}
            </section>
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
