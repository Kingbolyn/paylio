export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-navy px-5">
      {children}
    </div>
  )
}
