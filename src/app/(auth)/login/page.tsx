import Link from "next/link";
import AuthFormWrapper from "../_components/AuthFormWrapper";
import ContainerWrapper from "../_components/ContainerWrapper";
import SocialLogin from "../_components/SocialLogin";
import InputGroup from "../_components/InputGroup";
import CommonButton from "@/components/common/CommonButton";

export default function LoginPage() {
  return (
    <ContainerWrapper
      introTitle="Sign in with ease"
      introSubtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthFormWrapper title="Welcome Back" subtitle="Sign In">
        <form className="space-y-6">
          <InputGroup
            type="email"
            label="Email Address"
            placeholder="designer@example.com"
          />
          <InputGroup type="password" label="Password" placeholder="********" />

          <div className="flex justify-end">
            <CommonButton label="Sign In" className="text-base" />
          </div>
        </form>

        <SocialLogin />

        <p className="text-center text-light-gray font-normal">
          New User?{" "}
          <Link href={"/sign-up"} className="text-primary-blue ">
            Create an Account
          </Link>
        </p>
      </AuthFormWrapper>
    </ContainerWrapper>
  );
}
