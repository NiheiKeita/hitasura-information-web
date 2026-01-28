import React from 'react'

type TocItem = {
    id: string
    label: string
}

type Props = {
    items: TocItem[]
}

const TocList = React.memo<Props>(function TocList({ items }) {
    return (
        <ol className="mt-4 space-y-3 border-l-2 border-slate-200 pl-4 text-sm text-slate-600">
            {items.map((item, index) => (
                <li key={item.id} className="group">
                    <a href={`#${item.id}`} className="flex items-start gap-3 hover:text-slate-900">
                        <span className="mt-0.5 text-xs font-semibold text-slate-400 group-hover:text-[#0EA5E9]">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{item.label}</span>
                    </a>
                </li>
            ))}
        </ol>
    )
})

export const WebArticleTocMobile = React.memo<Props>(function WebArticleTocMobile({ items }) {
    return (
        <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0EA5E9]">
                Contents
            </p>
            <TocList items={items} />
        </section>
    )
})

export const WebArticleTocAside = React.memo<Props>(function WebArticleTocAside({ items }) {
    return (
        <aside className="hidden space-y-6 lg:block">
            <div className="sticky top-24 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0EA5E9]">
                    Contents
                </p>
                <TocList items={items} />
            </div>
        </aside>
    )
})

export default WebArticleTocMobile
