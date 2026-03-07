import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-muted/30 pt-24 md:pt-32">
            <div className="my-container relative pb-16 md:pb-24">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
                    <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        <span className="h-px w-6 bg-primary/40" />
                        Our Portfolio
                        <span className="h-px w-6 bg-primary/40" />
                    </span>
                    <h1 className="font-roboto mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        Featured Projects
                    </h1>
                    <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
                        Explore our recent work and see the high-quality craftsmanship we bring to every home.
                    </p>
                </div>

                {/* Empty State / Coming Soon */}
                <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-primary/20 bg-white/50 px-6 py-24 text-center ring-1 ring-black/[0.02]">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <svg
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                        Project Gallery Coming Soon
                    </h2>
                    <p className="mb-8 max-w-sm text-black/60">
                        We are currently curating our finest projects to showcase here. Check back soon!
                    </p>
                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    )
}
