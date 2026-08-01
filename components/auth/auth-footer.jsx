import Link from "next/link";

export default function AuthFooter({ text, linkText, href }) {
  return (
    <p className="text-center text-sm text-muted-foreground">
      {text}{" "}
      <Link href={href} className="font-medium text-primary hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
