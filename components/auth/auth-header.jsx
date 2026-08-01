import Logo from "@/components/common/logo";

export default function AuthHeader({ title, description }) {
  return (
    <div className="space-y-4 text-center">
      <div className="flex justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
