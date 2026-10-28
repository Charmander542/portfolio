import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Stabilizing Mug";
const SPLINE_URL = "https://my.spline.design/balancecup-SU4QvqrptYavHZyFHtNCt8KW/";

const StabilizingMug = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      video="/projects/stabilizing_mug/cupbalance.mp4"
      title="Self-Stabilizing Mug"
      subtitle="Motorised gimbal mug that actively corrects for tilt — designed to help patients with tremors drink without spilling"
      tags={["Embedded Systems", "3D Printing", "Gyroscope", "Accelerometer"]}
      gradient={["#1a3a5c", "#0d1f33"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          The Self-Stabilizing Mug uses an IMU (gyroscope + accelerometer) and servo-driven handle
          to keep the drinking vessel level regardless of how the mug is held or tilted.
          The primary motivation is accessibility: patients with hand tremors, Parkinson&apos;s disease, or
          post-stroke motor impairments can drink independently without risk of spilling.
        </p>
        <p>
          The cup is 3D printed in PETG and the circuitry is all mounted below the base.
        </p>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Hardware"
      title="Mechanical Design"
      image="/projects/stabilizing_mug/photos/cup.jpg"
      imageAlt="Self-Stabilizing Mug"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The mug sits inside a two-axis gimbal: an inner ring for pitch and an outer ring for roll.
        Micro servos drive each axis through a compact linkage designed to fit within a normal mug
        footprint. Bearings at each gimbal pivot ensure low friction for smooth stabilisation.
        All structural parts are FDM-printed from PETG for heat and moisture resistance.
      </p>
    </TextImageSection>

    <SectionWrapper label="Software" title="Firmware & Control">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          An MPU-6050 IMU provides 3-axis acceleration and angular rate data. A complementary filter
          fuses the gyro integration with the accelerometer tilt estimate to produce stable roll and
          pitch angles even under dynamic motion.
        </p>
        <p>
          Two independent PID controllers drive the gimbal servos to null the measured error angles.
          Gains were tuned iteratively to achieve fast response without oscillation, accounting for
          the varying load of liquid inside the mug.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          The primary challenge was managing gimbal singularity and the mechanical coupling between
          the two axes. Careful linkage geometry and decoupled PID loops largely mitigated this.
        </p>
        <p>
          Liquid slosh introduces high-frequency disturbances that can destabilise a tight controller.
          A low-pass filter on the servo command signal smooths out oscillations without sacrificing
          the correction bandwidth needed for tremor compensation.
        </p>
      </div>
    </SectionWrapper>

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Stabilizing Mug 3D Model" />}

    <TechStackSection tech={["onshape", "cpp", "arduino"]} />
  </ProjectLayout>
);

export default StabilizingMug;
