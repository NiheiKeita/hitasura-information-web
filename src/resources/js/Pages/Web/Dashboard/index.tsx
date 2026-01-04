
import React from 'react'

const featureItems = [
    {
        title: '情報Iに特化',
        body: '高校の情報Iだけに集中。',
    },
    {
        title: '説明最小、演習最大',
        body: '解いて覚える反復型。',
    },
    {
        title: '単元別で鍛える',
        body: '苦手を狙って潰せる。',
    },
    {
        title: '無限 / 10問タイムアタック',
        body: '気分に合わせて切り替え。',
    },
    {
        title: '記録・Stats（ローカル保存）',
        body: '成長が見える。',
    },
]

const howToSteps = [
    {
        title: '単元を選ぶ',
        body: '疑似コードやフローチャートなど。',
    },
    {
        title: '解く',
        body: 'ひたすら解いて体に入れる。',
    },
    {
        title: '記録を見る',
        body: '正答率や履歴を確認。',
    },
]

const curriculumItems = [
    {
        title: '疑似コード',
        meta: '読み取りとトレース。',
    },
    {
        title: 'if / for / while 追跡',
        meta: '条件分岐とループ。',
    },
    {
        title: 'フローチャート',
        meta: '流れを図で理解。',
    },
    {
        title: '2進数・ビット演算',
        meta: '基礎から変換まで。',
    },
]

const faqs = [
    {
        title: 'オフラインで使える？',
        body: '使える。記録はローカル保存。',
    },
    {
        title: '対象は？',
        body: '高校生の情報I。',
    },
    {
        title: 'ランキングは？',
        body: 'COMING SOON',
    },
]

const screenshots = [
    {
        label: 'PLAY 01',
        src: '/images/game_screen/game_1.png',
        caption: '単元を選ぶ',
    },
    {
        label: 'PLAY 02',
        src: '/images/game_screen/game_2.png',
        caption: 'モードを選ぶ',
    },
    {
        label: 'PLAY 03',
        src: '/images/game_screen/game_3.png',
        caption: 'ひたすら解く',
    },
    {
        label: 'PLAY 04',
        src: '/images/game_screen/game_4.png',
        caption: '記録を見る',
    },
]

export const Dashboard = React.memo(function Dashboard() {
    return (
        <div
            className="min-h-screen bg-white text-[#64748B]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
                    <div className="flex items-center gap-2">
                        <img
                            src="/brand/hitasura-info-logo.png"
                            alt="ひたすら情報"
                            className="h-7 w-auto md:h-8"
                        />
                        <img
                            src="/brand/hitasura-info-icon.png"
                            alt="ひたすら情報アイコン"
                            className="h-7 w-auto md:h-8"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        {/*
                        TODO: App Store URL
                        */}
                        <a
                            href="https://example.com"
                            aria-label="App Storeで見る"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                alt="App Store"
                                className="h-6 w-auto"
                            />
                        </a>
                        {/*
                        TODO: Google Play URL
                        */}
                        <a
                            href="https://example.com"
                            aria-label="Google Playで見る"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                                alt="Google Play"
                                className="h-6 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#0EA5E9]/5" />
                        <div className="absolute right-0 top-32 h-40 w-40 rounded-full bg-[#0EA5E9]/5" />
                        <div className="motion-safe:animate-swim-left absolute right-0 top-4 h-32 w-32 opacity-30 md:-right-6 md:top-8 md:h-40 md:w-40">
                            <div className="fish-smooth motion-safe:animate-bob-fast">
                                <img
                                    src="/brand/hitasura-info-icon.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full rotate-6"
                                />
                            </div>
                        </div>
                        <div className="motion-safe:animate-swim-right absolute bottom-6 left-6 hidden h-24 w-24 opacity-15 md:block">
                            <div className="fish-smooth motion-safe:animate-bob-fast">
                                <img
                                    src="/brand/hitasura-info-icon.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full -rotate-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
                        <div className="space-y-5">
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                                Information I Training
                            </p>
                            <h1 className="text-4xl font-extrabold leading-[1.25] text-[#0EA5E9] md:text-6xl md:leading-[1.2]">
                                <span className="block">ひたすら解く。</span>
                                <span className="relative left-2 block">
                                    ただそれだけ
                                    <span className="relative inline-block">
                                        。
                                        <span className="bubble pointer-events-none absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#38BDF8]/60" />
                                        <span className="bubble bubble-delay-1 pointer-events-none absolute -right-2 top-2 h-3 w-3 rounded-full bg-[#38BDF8]/50" />
                                        <span className="bubble bubble-delay-2 pointer-events-none absolute -right-0 top-4 h-4 w-4 rounded-full bg-[#38BDF8]/40" />
                                        <span className="bubble bubble-delay-3 pointer-events-none absolute -right-3 top-5 h-3 w-3 rounded-full bg-[#38BDF8]/40" />
                                    </span>
                                </span>
                            </h1>
                            <p className="text-base text-[#64748B] md:text-lg">
                                高校「情報I」を、反復で身につけるトレーニングアプリ。疑似コード
                                / 条件分岐 / ループ / フローチャート / 2進数・ビット演算をひたすら解く。
                            </p>
                            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
                                <a
                                    href="https://example.com"
                                    className="rounded-full bg-[#38BDF8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#38BDF8]/30"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    App Storeで見る
                                </a>
                                <a
                                    href="https://example.com"
                                    className="rounded-full border border-[#0EA5E9] px-6 py-3 text-sm font-semibold text-[#0EA5E9]"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Google Playで見る
                                </a>
                                <div className="flex flex-wrap items-center gap-3">
                                    {/*
                                    <a href="#" aria-label="App Storeで見る">
                                        <img
                                            src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                            alt="App Store"
                                            className="h-7 w-auto"
                                        />
                                    </a>
                                    */}
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto w-full max-w-sm">
                            <div className="relative rounded-[32px] bg-white p-3 shadow-2xl shadow-[#0EA5E9]/10">
                                <div className="rounded-[26px] bg-white p-3 shadow-inner shadow-black/5">
                                    <img
                                        src="/images/game_top.png"
                                        alt="ゲーム画面プレビュー"
                                        className="w-full rounded-3xl object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            FEATURES
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#0EA5E9]">
                            情報Iをひたすら
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {featureItems.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(14,165,233,0.08)]"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E2E8F0] text-sm font-bold text-[#0EA5E9]">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-[#0EA5E9]">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="mt-3 text-sm text-[#64748B]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            HOW TO
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#0EA5E9]">
                            使い方
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {howToSteps.map((step) => (
                            <div
                                key={step.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(14,165,233,0.06)]"
                            >
                                <h3 className="text-lg font-semibold text-[#0EA5E9]">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-sm text-[#64748B]">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                                CURRICULUM
                            </p>
                            <h2 className="mt-2 text-3xl font-bold text-[#0EA5E9]">
                                単元別にトレーニング
                            </h2>
                        </div>
                        {/* <span className="rounded-full bg-[#38BDF8] px-4 py-1 text-xs font-semibold text-white">
                            これから増える
                        </span> */}
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {curriculumItems.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(14,165,233,0.06)]"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[#0EA5E9]">
                                        {item.title}
                                    </h3>
                                    {null}
                                </div>
                                <p className="mt-3 text-sm text-[#64748B]">{item.meta}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-8">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            SCREENSHOT
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#0EA5E9]">
                            画面の流れ
                        </h2>
                    </div>
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-2 text-sm text-[#0EA5E9]">
                        {screenshots.map((shot) => (
                            <div
                                key={shot.label}
                                className="w-[240px] shrink-0 snap-center rounded-3xl bg-white p-4 shadow-[0_12px_30px_rgba(14,165,233,0.06)]"
                            >
                                <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
                                    <img
                                        src={shot.src}
                                        alt={`${shot.label} スクリーンショット`}
                                        className="h-full w-full rounded-xl object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-3 text-xs text-[#64748B]">
                                    {shot.caption}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            FAQ
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#0EA5E9]">
                            よくある質問
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {faqs.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(14,165,233,0.06)]"
                            >
                                <h3 className="text-lg font-semibold text-[#0EA5E9]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-[#64748B]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-10">
                    <div className="rounded-3xl bg-white p-8 text-center shadow-[0_20px_40px_rgba(14,165,233,0.08)] md:p-12">
                        <h2 className="text-3xl font-extrabold text-[#0EA5E9]">
                            無料で始める
                        </h2>
                        <p className="mt-3 text-sm text-[#64748B]">
                            情報Iの反復トレーニングを、今すぐ。
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {/*
                            TODO: App Store URL
                            */}
                            <a
                                href="https://example.com"
                                aria-label="App Storeで見る"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                    alt="App Store"
                                    className="h-8 w-auto"
                                />
                            </a>
                            {/*
                            TODO: Google Play URL
                            */}
                            <a
                                href="https://example.com"
                                aria-label="Google Playで見る"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                                    alt="Google Play"
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                        <div className="mt-6 text-xs text-[#64748B]">
                            <a
                                className="hover:text-[#0EA5E9]"
                                href="https://keitamax.qboad.com/apps/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                その他のアプリ
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-[#E2E8F0] bg-white">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-xs text-[#64748B] md:flex-row md:justify-between md:px-10">
                    <div>© ひたすら情報</div>
                    <div className="flex flex-wrap items-center gap-4">
                        {/* TODO: 利用規約ページ */}
                        <a className="hover:text-[#0EA5E9]" href="#">
                            利用規約
                        </a>
                        {/* TODO: プライバシーポリシーページ */}
                        <a className="hover:text-[#0EA5E9]" href="#">
                            プライバシーポリシー
                        </a>
                        {/* TODO: お問い合わせページ */}
                        <a className="hover:text-[#0EA5E9]" href="#">
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
})
export default Dashboard
