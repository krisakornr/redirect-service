import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const REDIRECT_MAP: Record<string, string> = {
  "11111111": "https://www.averydennison.com",
  "22222222": "https://www.coca-cola.com",
};

serve((req) => {
  const url = new URL(req.url);
  const paramT = url.searchParams.get("T");

  console.log(`Incoming request: ${req.url}`);
  console.log(`Extracted T: ${paramT}`);

  const redirectUrl = REDIRECT_MAP[paramT ?? ""] ?? "https://example.com";
  console.log(`Redirecting to: ${redirectUrl}`);

  return new Response(null, {
    status: 301,
    headers: { Location: redirectUrl },
  });
}, { port: 8000 });

console.log("✅ Server is running on http://localhost:8000");
