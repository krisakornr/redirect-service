import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const REDIRECT_MAP: Record<string, string> = {
  "11111111": "https://www.averydennison.com",
  "22222222": "https://www.coca-cola.com",
};

serve((req) => {
  const url = new URL(req.url);
  const paramT = url.searchParams.get("tt");

  console.log(`Incoming request: ${req.url}`);
  console.log(`Extracted T: ${paramT}`);

  if (paramT && REDIRECT_MAP[paramT]) {
    const redirectUrl = REDIRECT_MAP[paramT];
    console.log(`Redirecting to: ${redirectUrl}`);

    return new Response(null, {
      status: 301,
      headers: { Location: redirectUrl },
    });
  }

  // Return an erro
