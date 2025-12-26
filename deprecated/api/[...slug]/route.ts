import { NextRequest, NextResponse } from "next/server";

async function proxy(req: NextRequest, context: { params: Promise<{ slug: string[] }> }) {
  const BACKEND_URL =
    process.env.BACKEND_URL || "http://go-backend-service.default.svc.cluster.local:8080";
  // console.log('Using BACKEND_URL:', BACKEND_URL);

  const { slug } = await context.params; // must await!

  const url = `${BACKEND_URL}/${slug.join("/")}${req.nextUrl.search}`;
  // console.log('Proxying request to:', url);

  // console.debug('Proxy request →', url, req.method);
  const headers = new Headers(req.headers);
  headers.delete("host");
  headers.delete("connection");

  const res = await fetch(url, {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : await req.text()
  });

  return new NextResponse(await res.text(), {
    status: res.status,
    headers: res.headers
  });
}

export function GET(req: NextRequest, ctx: { params: Promise<{ slug: string[] }> }) {
  return proxy(req, ctx);
}
export function POST(req: NextRequest, ctx: { params: Promise<{ slug: string[] }> }) {
  return proxy(req, ctx);
}
export function PUT(req: NextRequest, ctx: { params: Promise<{ slug: string[] }> }) {
  return proxy(req, ctx);
}
export function DELETE(req: NextRequest, ctx: { params: Promise<{ slug: string[] }> }) {
  return proxy(req, ctx);
}
export function PATCH(req: NextRequest, ctx: { params: Promise<{ slug: string[] }> }) {
  return proxy(req, ctx);
}
