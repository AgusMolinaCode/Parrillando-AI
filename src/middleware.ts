import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/((?!api|trpc))(_next|.+..+)(.*)",
    "/recetas-ai",
    "/categorias/[id]",
    "/api/completion",
    "/api/recetas/[id]",
    "/api/recetas",
    "/api/:path*",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};