"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ContainerWrapper from "../_components/ContainerWrapper";
import AuthFormWrapper from "../_components/AuthFormWrapper";
import InputGroup from "../_components/InputGroup";
import CommonButton from "@/components/common/CommonButton";
import Link from "next/link";

type SignUpFormValues = {
  fullName: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const onSubmit = (data: SignUpFormValues) => {
    console.log(data);
    toast.success("Account created successfully");
    reset();
  };

  return (
    <ContainerWrapper
      introTitle="Sign up and come in"
      introSubtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthFormWrapper
        title="Welcome to ByteSpace"
        subtitle="Create an Account"
      >
        <form className="space-y-6 mb-10" onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputGroup
            type="text"
            label="Full Name"
            placeholder="Jamie Davis"
            register={register("fullName", {
              required: "Full name is required",
            })}
            error={errors.fullName?.message}
          />
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
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password?.message}
          />

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
