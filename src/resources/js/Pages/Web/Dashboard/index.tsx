
import React from 'react'

const feelItems = [
    {
        title: '正解の快感',
        body: '解けるたびに、気持ちよさが増える。',
    },
    {
        title: 'テンポ',
        body: '次へ、次へ。手が止まらない。',
    },
    {
        title: '集中',
        body: '画面はシンプル。数学だけに没頭。',
    },
]

const modes = [
    {
        title: '無限',
        body: '終わりがないから続く。',
    },
    {
        title: '10問タイムアタック',
        body: '短時間で燃えるスピード勝負。',
    },
    {
        title: 'easy / normal / hard',
        body: '好みの強さで挑戦。',
    },
]

const contents = [
    {
        title: '因数分解',
        meta: '基本を軽快に。',
    },
    {
        title: '素因数分解',
        meta: '分解の手触り。',
    },
    {
        title: '微分・積分',
        meta: 'COMING SOON',
        soon: true,
    },
]

const comingSoon = [
    {
        title: 'Ranking',
        body: '自己ベストと競う。',
    },
    {
        title: 'Calendar',
        body: '積み上げが見える。',
    },
    {
        title: 'More modes',
        body: '遊び方が広がる。',
    },
]

const screenshots = [
    {
        label: 'PLAY 01',
        src: '/images/game_screen/game_1.png',
        caption: 'やりたいカテゴリを選択',
    },
    {
        label: 'PLAY 02',
        src: '/images/game_screen/game_2.png',
        caption: 'やりたいモードを選択',
    },
    {
        label: 'PLAY 03',
        src: '/images/game_screen/game_3.png',
        caption: '問題を解く',
    },
    {
        label: 'PLAY 04',
        src: '/images/game_screen/game_4.png',
        caption: '結果が出る',
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
                            src="/images/logo_full.png"
                            alt="ひたすら数学"
                            className="h-7 w-auto md:h-8"
                        />
                        <img
                            src="/images/logo.png"
                            alt="ひたすら数学アイコン"
                            className="h-7 w-auto md:h-8"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        {/*
                        <a href="#" aria-label="App Storeで見る">
                            <img
                                src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                alt="App Store"
                                className="h-6 w-auto"
                            />
                        </a>
                        */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.qboad.hitasura_math"
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
                        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#1E3A8A]/5" />
                        <div className="absolute right-0 top-32 h-40 w-40 rounded-full bg-[#1E3A8A]/5" />
                        <div className="motion-safe:animate-swim-left absolute right-0 top-4 h-32 w-32 opacity-30 md:-right-6 md:top-8 md:h-40 md:w-40">
                            <div className="fish-smooth motion-safe:animate-bob-fast">
                                <img
                                    src="/images/logo.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full rotate-6"
                                />
                            </div>
                        </div>
                        <div className="motion-safe:animate-swim-right absolute bottom-6 left-6 hidden h-24 w-24 opacity-15 md:block">
                            <div className="fish-smooth motion-safe:animate-bob-fast">
                                <img
                                    src="/images/logo.png"
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
                                Math game
                            </p>
                            <h1 className="text-4xl font-extrabold leading-[1.25] text-[#1E3A8A] md:text-6xl md:leading-[1.2]">
                                <span className="block">ひたすら解く。</span>
                                <span className="relative left-2 block">
                                    ただそれだけ
                                    <span className="relative inline-block">
                                        。
                                        <span className="bubble pointer-events-none absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#2DD4BF]/60" />
                                        <span className="bubble bubble-delay-1 pointer-events-none absolute -right-2 top-2 h-3 w-3 rounded-full bg-[#2DD4BF]/50" />
                                        <span className="bubble bubble-delay-2 pointer-events-none absolute -right-0 top-4 h-4 w-4 rounded-full bg-[#2DD4BF]/40" />
                                        <span className="bubble bubble-delay-3 pointer-events-none absolute -right-3 top-5 h-3 w-3 rounded-full bg-[#2DD4BF]/40" />
                                    </span>
                                </span>
                            </h1>
                            <p className="text-base text-[#64748B] md:text-lg">
                                短い計算で、ひらめきが続く。タップするだけの数学ゲーム。
                            </p>
                            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.qboad.hitasura_math"
                                    className="rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2DD4BF]/30"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    今すぐダウンロード
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
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.qboad.hitasura_math"
                                        aria-label="Google Playで見る"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                                            alt="Google Play"
                                            className="h-7 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto w-full max-w-sm">
                            <div className="relative rounded-[32px] bg-white p-3 shadow-2xl shadow-[#1E3A8A]/10">
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
                            FEEL
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            気持ちいい数学
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {feelItems.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.08)]"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm font-bold text-[#1E3A8A]">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
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
                            MODES
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            遊び方を選ぶ
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {modes.map((mode) => (
                            <div
                                key={mode.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
                            >
                                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                                    {mode.title}
                                </h3>
                                <p className="mt-3 text-sm text-[#64748B]">{mode.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                                CONTENTS
                            </p>
                            <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                                数学の気持ちよさ
                            </h2>
                        </div>
                        {/* <span className="rounded-full bg-[#2DD4BF] px-4 py-1 text-xs font-semibold text-white">
                            これから増える
                        </span> */}
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {contents.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                                        {item.title}
                                    </h3>
                                    {item.soon ? (
                                        <span className="rounded-full bg-[#2DD4BF] px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white">
                                            COMING SOON
                                        </span>
                                    ) : null}
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
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            画面の流れ
                        </h2>
                    </div>
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-2 text-sm text-[#1E3A8A]">
                        {screenshots.map((shot) => (
                            <div
                                key={shot.label}
                                className="w-[240px] shrink-0 snap-center rounded-3xl bg-white p-4 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
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
                            COMING SOON
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            近日追加予定の機能
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {comingSoon.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
                            >
                                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-[#64748B]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-10">
                    <div className="rounded-3xl bg-white p-8 text-center shadow-[0_20px_40px_rgba(30,58,138,0.08)] md:p-12">
                        <h2 className="text-3xl font-extrabold text-[#1E3A8A]">
                            無料でダウンロード
                        </h2>
                        <p className="mt-3 text-sm text-[#64748B]">
                            ひらめきの気持ちよさを、今すぐ。
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {/*
                            <a href="#" aria-label="App Storeで見る">
                                <img
                                    src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                    alt="App Store"
                                    className="h-8 w-auto"
                                />
                            </a>
                            */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.qboad.hitasura_math"
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
                                className="hover:text-[#1E3A8A]"
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
        </div>
    )
})
export default Dashboard
