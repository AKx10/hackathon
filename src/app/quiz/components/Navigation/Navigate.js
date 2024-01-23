"use client";
import { useRouter } from "next/navigation";

// A custom hook that uses the router from the context
export const useNavigate = () => {
  const router = useRouter();

  const push = (route) => {
    if (router) {
      router.push(`${route}`);
    }
  };

  return { push };
};
