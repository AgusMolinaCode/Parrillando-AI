export async function getAuthorId(userId: string | null): Promise<string | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}users`);
  const users = await response.json();

  // Obtén el clerkId del usuario actual
  const clerkId = userId || null;

  // Encuentra el usuario que coincide con el clerkId
  const matchingUser = users.find(
    (user: { clerkId: string | undefined }) => user.clerkId === clerkId
  );

  // Si se encuentra un usuario que coincide, devuelve su authorId
  if (matchingUser) {
    // console.log('AuthorId:', matchingUser.id); // Muestra el authorId
    return matchingUser.id;
  }

  // Si no se encuentra un usuario que coincide, devuelve null
  return null;
}