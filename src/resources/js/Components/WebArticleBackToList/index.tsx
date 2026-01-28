import React from 'react'
import { Link } from '@inertiajs/react'

export const WebArticleBackToList = React.memo(function WebArticleBackToList() {
    return (
        <section className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <h2 className="text-xl font-bold text-slate-900">記事一覧に戻る</h2>
            <p className="mt-2 text-sm text-slate-600">
                ひたすら情報向けの学習記事をまとめています。次に読むテーマを探すときは一覧へ。
            </p>
            <Link
                href={route('web.articles.index')}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9] px-4 py-2 text-xs font-semibold text-white"
            >
                記事一覧を見る
                <span aria-hidden="true">→</span>
            </Link>
        </section>
    )
})

export default WebArticleBackToList
