import PatternBg from "@/components/common/PatternBg";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <PatternBg />

      <div className="w-full h-full grow items-center justify-center flex flex-col gap-8">
        <h1 className="text-8xl font-poppins font-bold text-white">404</h1>
        <p className="text-2xl font-satoshi font-semibold text-white/60">
          Page not found :&quot;)
        </p>
      </div>
    </div>
  );
}
