import AuthBanner from "./AuthBanner";
import Intro from "./Intro";

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

        <AuthBanner />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
