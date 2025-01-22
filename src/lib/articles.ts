// Función para generar un slug basado en el título.
const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '') // Elimina caracteres no deseados.
      .replace(/\s+/g, '-')       // Reemplaza espacios por guiones.
      .trim();                    // Elimina espacios al inicio y al final.
  };
  
  // Crear los posts de manera dinámica usando el índice y asignando valores predefinidos para la imagen.
  export const posts = [...Array(6)].map((_, index) => {
    return {
      id: index + 1,  // ID comenzando desde 1
      title: `Post Title ${index + 1}`,  // Título simple para cada post
      description: `Description for post ${index + 1}`,  // Descripción simple
      body: `This is the body content for post ${index + 1}.`,  // Cuerpo de contenido simple
      image: `https://picsum.photos/id/${index * 10}/600/400`,  // URL de la imagen
      slug: `post-${index + 1}`,  // Slug basado en el índice
    };
  });
  
  // Función para obtener posts (simula una carga desde una API).
  const articles: any[] = [];
  export const getPosts = async () => {
    if (articles.length) return articles;
    const items: any[] = await fetch('https://astro-c7c74-default-rtdb.europe-west1.firebasedatabase.app/posts.json').then(res => res.json())

    // Aquí puedes implementar la lógica real de API para cargar posts.
    // Simulamos la carga desde la API añadiendo el array posts.
    articles.push(...posts);
    return articles;
  };
  