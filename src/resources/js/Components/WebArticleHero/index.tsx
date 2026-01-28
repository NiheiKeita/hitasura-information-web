import React from 'react'

type Props = {
    eyebrow: string
    title: string
    description: string
    badge: string
    date: string
    readTime: string
}

export const WebArticleHero = React.memo<Props>(function WebArticleHero({
    eyebrow,
    title,
    description,
    badge,
    date,
    readTime,
}) {
    return (
        <section
            className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)] md:p-12"
            style={{
                backgroundImage: "url('/images/sand_bk.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0EA5E9]">
                    {eyebrow}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight text-[#0F172A] md:text-4xl">
                    {title}
                </h1>
                <p className="max-w-2xl text-sm text-[#475569] md:text-base">{description}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-[#0F172A] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        {badge}
                    </span>
                    <span>更新日: {date}</span>
                    <span>読了目安: {readTime}</span>
                </div>
            </div>
        </section>
    )
})

export default WebArticleHero
