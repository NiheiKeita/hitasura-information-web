import React from 'react'
import { Link } from '@inertiajs/react'

const appStoreUrl =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%83%85%E5%A0%B1/id6757374807'
const googlePlayUrl =
    'https://play.google.com/store/apps/details?id=com.qboad.hitasura_information'

export const WebFooter = React.memo(function WebFooter() {
    return (
        <footer className="mt-20 border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="ひたすら情報" className="h-8 w-auto" />
                        <span className="text-sm font-semibold text-[#0EA5E9]">ひたすら情報</span>
                    </div>
                    <p className="text-xs text-slate-500">
                        ひたすら解く。情報Iを反復で覚える学習アプリ。
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:items-start md:gap-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">
                            ARTICLES
                        </p>
                        <Link
                            href={route('web.articles.index')}
                            className="text-sm font-semibold text-[#0EA5E9] hover:opacity-70"
                        >
                            記事一覧
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">
                            DOWNLOAD
                        </p>
                        <a
                            href={appStoreUrl}
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
                        <a
                            href={googlePlayUrl}
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
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">
                            APP
                        </p>
                        <Link
                            href={route('web.top')}
                            className="text-sm font-semibold text-[#0EA5E9] hover:opacity-70"
                        >
                            アプリ紹介
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
                © ひたすら情報
            </div>
        </footer>
    )
})

export default WebFooter
