"use client";

import type React from "react";

import { useEffect } from "react";

const ClientOnlyScript: React.FC = (): null => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "@/app/lib/setVh.ts";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ClientOnlyScript;
