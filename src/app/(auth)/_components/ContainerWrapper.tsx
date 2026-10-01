import AuthBanner from "./AuthBanner";
import Intro from "./Intro";
import { Reveal } from "@/components/animations/Reveal";

export default function ContainerWrapper({
  children,
  introTitle,
  introSubtitle,
}: {
  children: React.ReactNode;
  introTitle: string;
  introSubtitle: string;
}) {
  return (
    <div className="flex justify-between gap-36">
      <div className="flex flex-col gap-y-36 flex-1">
        <Intro title={introTitle} subtitle={introSubtitle} />

        <Reveal delay={0.4}>
          <AuthBanner />
        </Reveal>
      </div>
      <Reveal className="flex-1" delay={0.6} blur={false}>
        {children}
      </Reveal>
    </div>
  );
}
