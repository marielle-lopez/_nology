import * as z from "zod";

export const schema = z.object({
  title: z.string().min(4, "Title must be at least 4 characters long"),
  content: z.string().min(5, "Content must be at least 5 characters long"),
  categoryId: z.coerce.number().int().gte(1),
});
