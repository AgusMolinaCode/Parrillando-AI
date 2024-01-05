import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    // "/((?!api|trpc))(_next|.+\..+)(.*)" ,
    "/recetas-ai",
    "/gastronomia",
    "/categorias",
    "/categorias/:id",
    "/receta/:id",
    "/api/completion",
    "/api/recetas",
    "/api/recetas/:id",
    "/api/:path*",
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
