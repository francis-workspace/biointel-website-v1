import Header from "@/components/Header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  createBlogPost,
  isSupabaseConfigured,
  BlogPostPayload,
  blogTableName,
  formatBlogPayload,
  deriveParagraphsForPreview,
} from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(3, "A title of at least 3 characters is required."),
  summary: z.string().min(12, "Summaries should be at least 12 characters."),
  content: z.string().min(24, "Content should be at least 24 characters."),
  category: z.string({ required_error: "Please choose a category." }),
  status: z.enum(["draft", "published"], {
    required_error: "Select a status for the post.",
  }),
  coverImageUrl: z.string().url("Enter a valid URL or leave it blank.").optional().or(z.literal("")),
  publishedAt: z.string().optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const Admin = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      summary: "",
      content: "",
      category: "news",
      status: "draft",
      coverImageUrl: "",
      publishedAt: "",
    },
  });

  const watched = form.watch();
  const previewPayload = useMemo<BlogPostPayload>(
    () =>
      formatBlogPayload({
        title: watched.title ?? "",
        summary: watched.summary ?? "",
        content: watched.content ?? "",
        category: watched.category ?? "",
        status: watched.status ?? "draft",
        cover_image_url: watched.coverImageUrl ?? null,
        published_at: watched.publishedAt ?? null,
      }),
    [watched.category, watched.content, watched.coverImageUrl, watched.publishedAt, watched.status, watched.summary, watched.title],
  );

  const previewParagraphs = useMemo(
    () => deriveParagraphsForPreview(previewPayload.content),
    [previewPayload.content],
  );

  const categories = useMemo(
    () => [
      { label: "News", value: "news" },
      { label: "Analysis", value: "analysis" },
      { label: "Market", value: "market" },
      { label: "AI Science", value: "ai-science" },
      { label: "Research", value: "research" },
    ],
    [],
  );

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    const payload: BlogPostPayload = {
      title: values.title,
      summary: values.summary,
      content: values.content,
      category: values.category,
      status: values.status,
      cover_image_url: values.coverImageUrl ? values.coverImageUrl : null,
      published_at: values.publishedAt || null,
    };

    try {
      const formattedPayload = formatBlogPayload(payload);
      const [newPost] = await createBlogPost(formattedPayload);
      toast({
        title: "Post saved to Supabase",
        description: `“${newPost?.title ?? values.title}” was stored in the ${blogTableName} table.`,
      });
      form.reset({
        title: "",
        summary: "",
        content: "",
        category: values.category,
        status: values.status,
        coverImageUrl: "",
        publishedAt: "",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "An unexpected error occurred.";
      toast({
        title: "Unable to publish post",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Admin</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Publish to Supabase</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Create new BioIntel articles and store them directly in your Supabase table using the REST
            API. Configure <code>VITE_SUPABASE_URL</code>, <code>VITE_SUPABASE_ANON_KEY</code>, and optionally
            <code>VITE_SUPABASE_BLOG_TABLE</code> in your Vite environment.
          </p>
        </div>

        {!isSupabaseConfigured && (
          <Alert variant="destructive" className="border-red-700 bg-red-950/40 text-red-50">
            <AlertTitle>Supabase is not configured</AlertTitle>
            <AlertDescription>
              Add your Supabase URL and anon key to <code>.env</code> or <code>.env.local</code> and restart the
              dev server. The default table name is <code>{blogTableName}</code>.
            </AlertDescription>
          </Alert>
        )}

        <Card className="border-slate-800 bg-slate-900/60 text-slate-100">
          <CardHeader>
            <CardTitle>New post</CardTitle>
            <CardDescription className="text-slate-400">
              Provide the headline, summary, and full body. All submissions are sent to Supabase over the REST
              interface.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the blog title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Summary</FormLabel>
                      <FormControl>
                        <Textarea placeholder="One or two sentences summarizing the post" {...field} />
                      </FormControl>
                      <FormDescription>Appears in previews, newsletter cards, and meta descriptions.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={10}
                          placeholder="Markdown or rich text content for the article body"
                          className="font-mono"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        We’ll unwrap hard line breaks, collapse extra spacing, and keep clean paragraph breaks so the
                        article renders like existing newsroom posts.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>Draft posts remain hidden from public feeds.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="coverImageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://..." {...field} />
                        </FormControl>
                        <FormDescription>Optional header image for cards and detail pages.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="publishedAt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Publish date (optional)</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" {...field} />
                        </FormControl>
                        <FormDescription>Defaults to the current time if left blank.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t border-slate-800 px-6 py-4">
                <Button type="submit" disabled={isSubmitting || !isSupabaseConfigured}>
                  {isSubmitting ? "Saving..." : "Save to Supabase"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        <Card className="border-slate-800 bg-slate-900/60 text-slate-100">
          <CardHeader>
            <CardTitle>Formatted preview</CardTitle>
            <CardDescription className="text-slate-400">
              We reflow paragraphs and trim spacing to match the typography of existing BioIntel articles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {previewPayload.category || "Category"}
              </div>
              <h2 className="text-2xl font-semibold leading-snug">
                {previewPayload.title || "Post title"}
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {previewPayload.summary || "A short summary appears in cards and previews."}
              </p>
              <div className="text-xs text-slate-500 font-medium">
                Status: {previewPayload.status} •
                {previewPayload.published_at ? " Publish date provided" : " Publish date will default"}
              </div>
            </div>

            <div className="space-y-3">
              {previewParagraphs.slice(0, 4).map((paragraph, index) => (
                <p key={index} className="text-slate-200 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {!previewParagraphs.length && (
                <p className="text-slate-500 leading-relaxed">
                  Start typing content to see how it will be formatted into paragraphs.
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="text-xs text-slate-500 flex flex-wrap gap-2">
            <span>Spacing is normalized before publishing.</span>
            <span>Multiple blank lines collapse to single paragraph breaks.</span>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
