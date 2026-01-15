export interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  color: string;
  type: 'warmth' | 'light' | 'shimmer';
  gradient: string;
  image: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Ukiyo-e Wave",
    artist: "AI Generated",
    year: "2026",
    color: "#F9AF72",
    type: "warmth",
    gradient: "linear-gradient(135deg, #FFF5E6 0%, #F9AF72 100%)",
    image: "/gallery/artwork-1.png",
    description: "A woodblock print paying homage to Hokusai's 'The Great Wave off Kanagawa'. Its bold lines, flat colors, and print-like texture represent another iconic form of Eastern art."
  },
  {
    id: 2,
    title: "Impressionist Garden",
    artist: "AI Generated",
    year: "2025",
    color: "#ECBB51",
    type: "light",
    gradient: "radial-gradient(circle at 50% 50%, #ECBB51 0%, #FFF9F2 80%)",
    image: "/gallery/artwork-2.png",
    description: "This painting depicts a garden and farmhouse in the style of Monet. It emphasizes the play of light and shadow, capturing fleeting moments of color."
  },
  {
    id: 3,
    title: "Minimalist Vessel",
    artist: "AI Generated",
    year: "2025",
    color: "#B25F56",
    type: "warmth",
    gradient: "conic-gradient(from 180deg, #FFF5E6 0%, #B25F56 60%, #FFF5E6 100%)",
    image: "/gallery/artwork-3.png",
    description: "This still life photograph uses a clean background and soft lighting to highlight the form of a single modern vase, embodying the minimalist philosophy of 'less is more'."
  },
  {
    id: 4,
    title: "Public Sculpture",
    artist: "AI Generated",
    year: "2024",
    color: "#6494E8",
    type: "shimmer",
    gradient: "linear-gradient(to top, #FFF9F2 0%, #6494E8 100%)",
    image: "/gallery/artwork-4.png",
    description: "This contemporary public sculpture brings modern art into shared spaces. The large-scale metal and glass installation combines geometric and fluid elements, interacting with its surroundings through reflection."
  },
  {
    id: 5,
    title: "Pop Art Robots",
    artist: "AI Generated",
    year: "2026",
    color: "#ECBB51",
    type: "light",
    gradient: "repeating-linear-gradient(45deg, #FFF9F2, #FFF9F2 10px, #ECBB51 10px, #ECBB51 11px)",
    image: "/gallery/artwork-5.png",
    description: "A screen print with strong Pop Art influences. The repeated robot heads paired with vibrant contrasting colors pay tribute to artists like Andy Warhol."
  },
  {
    id: 6,
    title: "Waterfall Panorama",
    artist: "AI Generated",
    year: "2025",
    color: "#F9AF72",
    type: "warmth",
    gradient: "radial-gradient(circle at 30% 70%, #F9AF72 0%, #B25F56 80%)",
    image: "/gallery/artwork-6.png",
    description: "A grand waterfall mural that expands an ink wash waterfall scene into a spectacular panorama, serving as the culmination of the entire nature narrative."
  }
];
