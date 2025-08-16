import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    // ✅ security check
    const secret = req.nextUrl.searchParams.get("secret");
    if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // ✅ Storyblok webhook sends JSON
    const body = await req.json();
    const slug = body.full_slug; // e.g. "jobs" or "services/app"

    // ✅ Always revalidate homepage + listing pages (blogs, services etc.)
    const staticPaths = ["/", "/services", "/blogs"];
    staticPaths.forEach((path) => revalidatePath(path));

    // ✅ Revalidate the detail page that changed
    if (slug) {
      revalidatePath(`/${slug}`);
    }

    return NextResponse.json({
      revalidated: true,
      slug,
      now: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
