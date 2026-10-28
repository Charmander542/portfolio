import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";

const PROJECT_NAME = "U-Password";
const GITHUB_URL = "https://github.com/Charmander542/PasswordManger";
const BU_ARTICLE_URL =
  "https://www.bu.edu/eng/2025/05/22/accessible-motion-capture-technology-wins-2025-deans-imagineering-competition/";

const PasswordManager = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/password_manager/photos/device.png"
      title="U-Password"
      subtitle="Offline hardware password vault — encrypted credentials on a USB device you own, with fingerprint unlock and keyboard-style autofill"
      tags={["Embedded Systems", "PCB Design", "Security", "Cryptography", "USB HID"]}
      gradient={["#0b1c2c", "#1a3a4a"]}
    />

    <TextImageSection
      label="Overview"
      title="Project Summary"
      image="/projects/password_manager/photos/linkedin_award.webp"
      imageAlt="Presenting U-Password at the Dean's Imagineering Competition"
      accent
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          U-Password is a standalone hardware password manager built to keep credentials offline and
          physically under the user&apos;s control. Instead of syncing a vault to a third-party cloud
          service, passwords live encrypted on the device itself — so you still own the data, even on
          machines you do not trust.
        </p>
        <p>
          The project took <strong className="text-white">2nd place</strong> in Boston University&apos;s
          2025 Dean&apos;s Imagineering Competition (and a $1,500 prize), where judges highlighted it as
          a novel way to safeguard passwords from loss or hacking with a convenient standalone device.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Motivation" title="Why Hardware?">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Software password managers solve reuse, but they still sit on the host machine — and often
          in someone else&apos;s cloud. That leaves three gaps U-Password targets directly:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-white font-medium">Enhanced security</span> — credentials stay
            offline and physically in your control.
          </li>
          <li>
            <span className="text-white font-medium">True data ownership</span> — passwords reside on
            your device, not a third-party server.
          </li>
          <li>
            <span className="text-white font-medium">Portability without a trace</span> — use them on
            shared or untrusted computers without leaving a vault or clipboard residue behind.
          </li>
        </ul>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Hardware"
      title="USB Vault Form Factor"
      image="/projects/password_manager/photos/device.png"
      imageAlt="CAD render of the U-Password enclosure"
      reversed
      objectFit="contain"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          The enclosure is a pocketable two-piece shell with a display window, thumbstick for
          on-device navigation, and a keychain loop so it travels like a physical key. Internally it
          is built around an Adafruit ItsyBitsy M4 (ATSAMD51) with external SPI flash for the
          encrypted vault, an LCD for browsing entries, and a DFRobot fingerprint module for unlock.
        </p>
        <p>
          Over USB the firmware presents as a composite TinyUSB device: HID keyboard for typing
          credentials, CDC for debug/provisioning, and an optional mass-storage mode for syncing
          vault data with the companion desktop workflow.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Firmware" title="Encrypted Vault & Unlock">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Firmware is written in C++ with PlatformIO. Website, username, and password fields are
          AES-encrypted at rest using the SAMD51&apos;s hardware AES peripheral in CBC mode, then
          stored as fixed-size records on SPI flash. Unlock is gated by a local PIN and optional
          fingerprint enrollment — the host never sees the master key material.
        </p>
        <p>
          Once unlocked, the joystick UI lets you browse entries on the LCD. Selecting an entry and
          confirming types the credential out through the HID keyboard interface, so login works in
          any app or site that accepts keyboard input — no clipboard paste required.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Software" title="Browser Bridge & Companions">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          A Chromium extension bridges the active tab&apos;s hostname to the device over WebHID, so
          the vault can surface the matching site without you hunting through the list. A bookmarklet
          path covers machines where you cannot install an extension, and companion Windows/macOS
          apps handle provisioning new entries before syncing them onto the hardware.
        </p>
        <p>
          The full stack — firmware, extension, bookmarklet, and landing page — lives in the open{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            PasswordManger
          </a>{" "}
          repository.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Recognition" title="Dean's Imagineering Competition">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          In April 2025, U-Password placed second among ten teams in the BU College of Engineering
          Dean&apos;s Imagineering Competition. BU Engineering covered the runner-up as a convenient
          standalone device that helps safeguard passwords from loss or hacking — recognition that
          the offline, ownership-first approach resonated beyond a class project.
        </p>
        <p>
          <a
            href={BU_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            Read the BU Engineering announcement →
          </a>
        </p>
      </div>
    </SectionWrapper>

    <GallerySection
      label="Gallery"
      title="Photos"
      cols={2}
      images={[
        {
          src: "/projects/password_manager/photos/device.png",
          alt: "CAD render of the U-Password hardware enclosure",
          fit: "contain",
        },
        {
          src: "/projects/password_manager/photos/linkedin_award.webp",
          alt: "Presenting U-Password at the Dean's Imagineering Competition",
        },
      ]}
    />

    <TechStackSection tech={["cpp", "javascript", "altium", "onshape"]} />
  </ProjectLayout>
);

export default PasswordManager;
