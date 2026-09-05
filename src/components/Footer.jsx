export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-3xl py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-on-surface-variant">
        <div className="flex items-center gap-space-xs">
          <span className="text-on-surface font-medium">JACKSON</span>
          <span>/</span>
          <span>CONTEMPORARY ARCHIVE & ART DIRECTION</span>
        </div>
        <div className="flex items-center gap-space-lg">
          <span className="uppercase">一般老百姓 (EVERYDAY INDIVIDUAL)</span>
          <span>© 2025 ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  )
}
