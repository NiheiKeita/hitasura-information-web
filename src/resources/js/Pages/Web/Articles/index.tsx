import React, { useMemo } from 'react'
import { Head, Link, usePage } from '@inertiajs/react'
import WebHeader from '@/Components/WebHeader'
import WebFooter from '@/Components/WebFooter'
import WebInfoAppCta from '@/Components/WebInfoAppCta'

const articles = [
    {
        title: '条件分岐とは？プログラミングの思考を決める最重要概念を完全解説',
        subtitle: '情報Iで必須の条件分岐をやさしく整理',
        description:
            'if / else の考え方から疑似コード、複数条件、つまずきポイントまで。因数分解 勉強にも通じる「判断」の型を丁寧に整理。',
        href: '/articles/condition-branching',
        badge: '基礎理解',
        readTime: '読む目安: 8分',
        keywords: ['条件分岐', 'if / else', '疑似コード', '因数分解 勉強', '因数分解 アプリ'],
    },
]

export const ArticlesIndex = React.memo(function ArticlesIndex() {
    const { url } = usePage()
    const canonicalUrl = useMemo(
        () => (typeof window === 'undefined' ? '' : `${window.location.origin}${url}`),
        [url]
    )
    const pageTitle = '情報Iの理解が進む記事まとめ'
    const pageDescription =
        '疑似コード・条件分岐・ループ・2進数/ビット演算など、情報Iの学習を進める記事をまとめています。'
    const ogImage =
        typeof window === 'undefined' ? '/images/logo.png' : `${window.location.origin}/images/logo.png`

    return (
        <div
            className="min-h-screen bg-white text-[#475569]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <Head title={pageTitle}>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={ogImage} />
                {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
            </Head>

            <WebHeader />

            <main>
                <section className="relative overflow-hidden border-b border-slate-100">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#0EA5E9]/10" />
                        <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-[#38BDF8]/10" />
                    </div>
                    <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#0EA5E9]">Articles</p>
                        <h1 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-5xl">
                            情報Iの理解が進む記事まとめ
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-[#475569] md:text-lg">
                            疑似コードの読み取りから、条件分岐・ループ・2進数/ビット演算まで。
                            迷ったときに戻ってこれる実践向けの学習ガイドを集めています。
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
                    <div className="grid gap-6 md:grid-cols-2">
                        {articles.map((article) => (
                            <Link
                                key={article.title}
                                href={article.href}
                                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0EA5E9]/30 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                                    <span>{article.badge}</span>
                                    <span className="text-[#94A3B8]">{article.readTime}</span>
                                </div>
                                <h2 className="mt-4 text-xl font-bold text-[#0F172A] transition group-hover:text-[#0284C7]">
                                    {article.title}
                                </h2>
                                <p className="mt-2 text-sm font-semibold text-[#0EA5E9]/80">
                                    {article.subtitle}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                                    {article.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {article.keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0369A1]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6 text-sm font-semibold text-[#0EA5E9]">
                                    記事を読む →
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12">
                        <WebInfoAppCta />
                    </div>
                </section>
            </main>

            <WebFooter />
        </div>
    )
})

export default ArticlesIndex
