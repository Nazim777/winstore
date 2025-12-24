const CATEGORY_IMAGES: Record<string, string> = {
  "electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80&auto=format&fit=crop",
  "jewelery": "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&q=80&auto=format&fit=crop",
  "men's clothing": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
  "women's clothing": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
};

export const getCategoryImage = (cat: string) => {
  const key = cat.trim().toLowerCase();
  return CATEGORY_IMAGES[key] ?? `https://picsum.photos/seed/${encodeURIComponent(cat)}/600/400`;
};

export const EXTRA_CATEGORIES = [
  {
    name: "Appliances",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
  },
  {
    name: "Babies Store",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80",
  },
];