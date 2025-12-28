const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseBlogTable = import.meta.env.VITE_SUPABASE_BLOG_TABLE ?? "blog_posts";

export type BlogPostPayload = {
  title: string;
  summary: string;
  content: string;
  category: string;
  status: string;
  cover_image_url?: string | null;
  published_at?: string | null;
};

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const blogTableName = supabaseBlogTable;

const collapseInnerWhitespace = (value: string) =>
  value
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([([{}])\s+/g, "$1")
    .trim();

const normalizeParagraphs = (text: string) => {
  const lines = text.replace(/\r?\n/g, "\n").split("\n");
  const paragraphs: string[] = [];
  let current: string[] = [];

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.length === 0) {
      if (current.length) {
        paragraphs.push(collapseInnerWhitespace(current.join(" ")));
        current = [];
      }
      return;
    }

    current.push(trimmed);
  });

  if (current.length) {
    paragraphs.push(collapseInnerWhitespace(current.join(" ")));
  }

  return paragraphs.join("\n\n");
};

export function deriveParagraphsForPreview(content: string) {
  return normalizeParagraphs(content)
    .split(/\n{2,}/)
    .filter(Boolean);
}

const toIsoDate = (value?: string | null) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
};

export function formatBlogPayload(payload: BlogPostPayload): BlogPostPayload {
  return {
    ...payload,
    title: collapseInnerWhitespace(payload.title),
    summary: collapseInnerWhitespace(payload.summary),
    content: normalizeParagraphs(payload.content),
    category: payload.category.trim(),
    status: payload.status.trim(),
    cover_image_url: payload.cover_image_url?.trim() || null,
    published_at: toIsoDate(payload.published_at),
  };
}

export async function createBlogPost(payload: BlogPostPayload) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase environment variables are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseBlogTable}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to create blog post.");
  }

  return response.json();
}
