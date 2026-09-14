import NotFoundView from "@/views/NotFoundView";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The requested page could not be found.",
};

export default function NotFoundPage() {
  return <NotFoundView />;
}
