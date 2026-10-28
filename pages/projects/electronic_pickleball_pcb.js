import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";

const PROJECT_NAME = "PK Controller";
const GITHUB_URL = "https://github.com/Charmander542/PicklePadleFirmware";
const STEAM_URL =
  "https://store.steampowered.com/app/4632110/Picklemania_The_Ultimate_Showdown/";
const STORE_URL = "https://www.picklemania.store";

const ElectronicPickleballPCB = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/pickleball/photos/pk1_paddle.webp"
      title="PK Controller"
      subtitle="Custom ESP32 paddle PCB and firmware for Picklemania — IMU swing sensing over Wi‑Fi UDP into an Unreal match"
      tags={["Embedded Systems", "PCB Design", "ESP32", "IMU", "Sports Technology"]}
      gradient={["#1a0a2e", "#3b0f5c"]}
    />

    <TextImageSection
      label="Overview"
      title="Board & Firmware for Picklemania"
      image="/projects/pickleball/photos/game_art.webp"
      imageAlt="Picklemania character art"
      accent
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Picklemania (also introduced as <span className="text-white">PK</span>) is a BU senior-design
          project turned Steam game: an arcade pickleball match you play by swinging a smart paddle.
          I was not on the six-person game team — my contribution was the{" "}
          <span className="text-white">custom PCB</span> inside the PK controller and the{" "}
          <span className="text-white">firmware</span> that turns swings into live game input.
        </p>
        <p>
          The paddle joins the same Wi‑Fi network as the PC, streams motion to the Unreal host over
          UDP, and plays back hit feedback with haptics, NeoPixels, and audio when the game confirms
          a swing.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Hardware"
      title="Custom ESP32 Paddle PCB"
      image="/projects/pickleball/photos/pk1_paddle.webp"
      imageAlt="PK-1 paddle product render"
      reversed
      objectFit="contain"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          The production pin map targets a custom ESP32 board (separate from the breadboard/dev-module
          bring-up), with a single I²C bus for sensing and UI. On that bus sit a{" "}
          <span className="text-white">BNO055</span> 9-axis IMU for orientation and linear
          acceleration, a <span className="text-white">0.91″ OLED</span> for status/IP, and a{" "}
          <span className="text-white">TCA9548A</span> mux feeding{" "}
          <span className="text-white">DRV2605</span> haptic drivers.
        </p>
        <p>
          Off-bus peripherals include a NeoPixel strip, PWM speaker, optional SD logging, and the
          BOOT button for menus and Wi‑Fi reset — packed into the PK-1 paddle form factor sold as the
          official controller for the game.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Firmware" title="Realtime Sensing → Game Host">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Firmware is C++ on PlatformIO (Arduino + ESP-IDF hybrid) with FreeRTOS splitting network
          work from UI/sensors. A captive portal (<code className="text-yellow">PicklePaddle-Setup</code>)
          provisions Wi‑Fi; once associated, the paddle shows its IP so the Unreal client can be
          pointed at it from Picklemania&apos;s settings menu — the same flow documented on Steam for
          PK Controller mode.
        </p>
        <p>
          In gameplay the IMU is polled on a tight loop (~5&nbsp;ms) with jerk/impulse detection on
          linear acceleration. Packets go out over UDP (local port 4211 → host 4210) while a
          dedicated net task drains TX/RX so swing latency stays low. When the host reports a hit,
          worker tasks fire NeoPixel + haptic sequences and speaker cues without blocking the IMU
          path.
        </p>
        <p>
          Source:{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            PicklePadleFirmware
          </a>
          .
        </p>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Integration"
      title="Latency, Modes & Feedback"
      image="/projects/pickleball/photos/arena.webp"
      imageAlt="Picklemania arena artwork"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          The hard part of a motion paddle is not reading an IMU — it is keeping interaction latency
          low while Wi‑Fi, I²C clock-stretching, and feedback effects fight for the bus. The firmware
          slows the I²C clock during sensitive BNO055 reads, boosts STA TX power only in streaming
          modes, and queues host-triggered FX so a burst of hit events cannot stall sensing.
        </p>
        <p>
          Idle, tutorial, and gameplay modes change poll rates and jerk thresholds so light swings
          still register in training, while real matches stay armed against false triggers. Button
          hold gestures clear saved credentials and reboot into setup when you need to move networks.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Context" title="Picklemania & Recognition">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Led by Pippi Pi with teammates Rawisara Chairat, Vanshika Chaddha, Elena Berrios, Julie
          Green, and Simone Gelman, the project shipped custom hardware and an Unreal game over
          roughly eight months. Along the way the team took{" "}
          <span className="text-white">overall first place</span> on Shark Tank Night and later
          received the BU College of Engineering{" "}
          <span className="text-white">Entrepreneurial Award</span> at commencement. Picklemania is
          free on Steam with keyboard play plus PK paddle mode for local matches.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-2">
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            Play on Steam →
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            PK-1 paddle site →
          </a>
        </p>
      </div>
    </SectionWrapper>

    <GallerySection
      label="Gallery"
      title="Project Media"
      cols={2}
      images={[
        {
          src: "/projects/pickleball/photos/pk1_paddle.webp",
          alt: "PK-1 paddle render",
          fit: "contain",
        },
        {
          src: "/projects/pickleball/photos/game_art.webp",
          alt: "Picklemania character artwork",
        },
        {
          src: "/projects/pickleball/photos/steam_capsule.webp",
          alt: "Picklemania Steam capsule art",
        },
        {
          src: "/projects/pickleball/photos/team.webp",
          alt: "Picklemania senior design team graphic",
        },
      ]}
    />

    <TechStackSection tech={["cpp", "altium", "python"]} />
  </ProjectLayout>
);

export default ElectronicPickleballPCB;
