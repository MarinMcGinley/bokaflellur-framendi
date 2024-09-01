export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-full w-full'>
      <div className='flex-1 bg-red-100 h-full' />
      <div className='flex-1 bg-green-100 h-full' />
      <div className='flex-1 bg-amber-200 h-full' />
      <div className='flex-1 bg-blue-100 h-full' />
      <div className='flex-1 bg-cyan-400 h-full' />
      <div className='flex-1 bg-lime-200 h-full' />
      <div className='flex-1 bg-yellow-100 h-full' />
      <div className='flex-1 bg-fuchsia-400 h-full' />
      <div className='absolute w-full h-full'>{children}</div>
    </div>
  );
}
