import ContainerWrapper from "../_components/ContainerWrapper";
import AuthFormWrapper from "../_components/AuthFormWrapper";
import InputGroup from "../_components/InputGroup";
import CommonButton from "@/components/common/CommonButton";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <ContainerWrapper
      introTitle="Sign up and come in"
      introSubtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthFormWrapper
        title="Welcome to ByteSpace"
        subtitle="Create an Account"
      >
        <form className="space-y-6 mb-10">
          <InputGroup type="text" label="Full Name" placeholder="Jamie Davis" />
          <InputGroup
            type="email"
            label="Email Address"
            placeholder="designer@example.com"
          />
          <InputGroup type="password" label="Password" placeholder="********" />

          <div className="flex justify-end">
            <CommonButton label="Continue" className="text-base" />
          </div>
        </form>

        <p className="text-center text-light-gray font-normal">
          Already have an account?{" "}
          <Link href={"/login"} className="text-primary-blue ">
            Login
          </Link>
        </p>
      </AuthFormWrapper>
    </ContainerWrapper>
  );
}
