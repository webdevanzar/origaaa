import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const slug = req.nextUrl.searchParams.get("slug"); // e.g. "services/web-development" or "blogs/123"

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  try {
    // Always revalidate some base pages
    const basePaths = ["/", "/about", "/services", "/works", "/blogs", "/career", "/contact"];

    // Add the dynamic page that Storyblok tells us about
    const pathsToRevalidate = [...basePaths, `/${slug}`];

    await Promise.all(
      pathsToRevalidate.map((path) =>
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${path}`, {
          next: { revalidate: 0 },
        })
      )
    );

    return NextResponse.json({ revalidated: true, paths: pathsToRevalidate });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: (err as Error).message },
      { status: 500 }
    );
  }
}
