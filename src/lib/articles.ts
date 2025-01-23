// articles.ts

// Interfaz para definir la estructura de un Post
export interface Post {
  id: number;
  title: string;
  description: string;
  body: string;
  image: string;
  slug: string;
}

// URL de la API (ajusta esta URL a la de tu API real)
const API_URL = 'https://astro-c7c74-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

// Función para obtener todos los posts desde la API
export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error al obtener los posts: ${response.statusText}`);
    }
    const data = await response.json();

    // Transformar los datos si es necesario
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      body: item.body,
      image: item.image,
      slug: item.slug,
    }));
  } catch (error) {
    console.error('Error en getPosts:', error);
    return [];
  }
};
