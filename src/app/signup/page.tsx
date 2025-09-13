"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningUp(true);
    // TODO: replace with real submit logic (validate, call API, show errors, redirect)
    console.log("submit - implement real signup flow");
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      {/* Left side image */}
      <div className="hidden w-1/2 lg:flex items-center justify-center bg-gray-100 flex-col p-8">
        <h1 className="text-4xl font-bold mb-6">Legaleyz</h1>
        <Image
          src="/images/signinsignup.png"
          alt="Legaleyz illustration"
          width={600}
          height={600}
          priority
        />
      </div>

      {/* Right side form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="mt-2 text-gray-500">
              Create an account to continue to Legaleyz
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password with show/hide */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    // Eye open icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    // Eye slash icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592M6.223 6.223A9.956 9.956 0 0012 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.225" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 01-3 3m0-6a3 3 0 013 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password with show/hide */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592M6.223 6.223A9.956 9.956 0 0012 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.225" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 01-3 3m0-6a3 3 0 013 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Sign up button */}
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 rounded-md px-4 py-2 font-medium transition ${
                isSigningUp 
                  ? 'bg-blue-400 text-white cursor-not-allowed' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <UseAnimations animation={loading} size={20} strokeColor="#ffffff" />
                  Signing up...
                </>
              ) : (
                'Sign up'
              )}
            </button>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-sm">Or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google button */}
            <button
              type="button"
              className={`w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium transition ${
                isSigningUp 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white hover:bg-gray-50'
              }`}
              disabled={isSigningUp}
            >
              {/* Google Icon */}
              <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.9 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.2 13.5 17.6 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.5c-.5 2.5-2 4.6-4.2 6.1l6.6 5.1c3.9-3.6 6.2-8.9 6.2-15.7z" />
                <path fill="#FBBC05" d="M10.5 28.8c-1.2-2.5-1.9-5.3-1.9-8.3s.7-5.8 1.9-8.3l-7.9-6.2C.9 9.1 0 13.4 0 20.5s.9 11.4 2.6 14.5l7.9-6.2z" />
                <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.7l-6.6-5.1c-2 1.3-4.6 2-7.4 2-6.4 0-11.8-4-13.7-9.5l-7.9 6.2C6.5 42.6 14.6 48 24 48z" />
              </svg>
              Google
            </button>

            {/* Sign in & terms */}
            <div className="text-center space-y-2 text-sm text-gray-500">
              <p>
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500 hover:underline">
                  Sign in
                </a>
              </p>
              <p>
                By signing up, you agree to our{" "}
                <a href="/terms" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
