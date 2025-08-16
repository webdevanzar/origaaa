import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");

    if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const body = await req.json();
    const slug = body.full_slug; // Storyblok sends this
    const now = new Date();

    const staticPaths = ["/", "/about", "/services", "/works", "/blogs", "/career", "/contact"];

    // Always revalidate base pages
    await Promise.all(
      staticPaths.map((path) =>
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${path}`, { next: { revalidate: 0 } })
      )
    );

    // If a detail page (blogs/[id] or services/[id]) changed, revalidate that too
    if (slug) {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`, {
        next: { revalidate: 0 },
      });
    }

    return NextResponse.json({ revalidated: true, now, slug });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating", error: err }, { status: 500 });
  }
}
