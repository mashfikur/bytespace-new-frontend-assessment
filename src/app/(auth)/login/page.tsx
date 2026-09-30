"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AuthFormWrapper from "../_components/AuthFormWrapper";
import ContainerWrapper from "../_components/ContainerWrapper";
import SocialLogin from "../_components/SocialLogin";
import InputGroup from "../_components/InputGroup";
import CommonButton from "@/components/common/CommonButton";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    toast.success("Signed in successfully");
    reset();
  };

  return (
    <ContainerWrapper
      introTitle="Sign in with ease"
      introSubtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthFormWrapper title="Welcome Back" subtitle="Sign In">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputGroup
            type="email"
            label="Email Address"
            placeholder="designer@example.com"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            error={errors.email?.message}
          />
          <InputGroup
            type="password"
            label="Password"
            placeholder="********"
            register={register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />

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
