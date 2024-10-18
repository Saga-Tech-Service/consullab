// lib/types.ts

// Definindo a estrutura básica para uma entrada do Contentful
export interface ContentfulSys {
  id: string;
  type: string;
}

// Definindo a estrutura para arquivos (Assets) no Contentful
export interface ContentfulAssetFields {
  title: string;
  file: {
    url: string;
    details: {
      size: number;
      image?: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

// Definindo a estrutura para o RichText (Contentful Rich Text)
export interface RichText {
  nodeType: string;
  content: {
    nodeType: string;
    value?: string;
    content: {
      nodeType: string;
      value?: string;
      marks: { type: string }[];
    }[];
  }[];
}

// Estrutura para autores
export interface IAuthor {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    bio?: string;
    photo?: {
      sys: {
        id: string;
      };
      fields: ContentfulAssetFields; // Referência para um asset (foto)
    };
  };
}

// Estrutura específica para um blog post
export interface IPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    datepost: string;
    description: RichText; // O RichText tem uma estrutura mais complexa
    slug: string;
    imageblog?: {
      sys: {
        id: string;
      };
      fields: ContentfulAssetFields; // Referência para a imagem do blog
    };
    author: IAuthor[];  // Relacionado com Author
  };
}

// Definição genérica para uma entrada no Contentful
export interface ContentfulItem<T> {
  sys: ContentfulSys;
  fields: T;  // Aqui fields deve ser um objeto T, sem aninhamento adicional
}

// Estrutura da resposta do Contentful que contém várias entradas
export interface ContentfulResponse<T> {
  items: ContentfulItem<T>[];  // Array de entradas do tipo T
  total: number;
  skip: number;
  limit: number;
}

    