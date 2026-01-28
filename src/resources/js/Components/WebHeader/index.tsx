
import React from 'react'
import { Link } from '@inertiajs/react'

const appStoreUrl =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%83%85%E5%A0%B1/id6757374807'
const googlePlayUrl =
    'https://play.google.com/store/apps/details?id=com.qboad.hitasura_information'

export const WebHeader = React.memo(function WebHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
                <Link href={route('web.top')} className="flex items-center gap-2">
                    <img
                        src="/images/logo.png"
                        alt="ひたすら情報"
                        className="h-7 w-auto md:h-8"
                    />
                    <span className="text-sm font-semibold text-[#0F172A] md:text-base">
                        ひたすら情報
                    </span>
                    <img
                        src="/images/logo.png"
                        alt="ひたすら情報アイコン"
                        className="h-7 w-auto md:h-8"
                    />
                </Link>
                <div className="flex items-center gap-2">
                    <Link
                        href={route('web.articles.index')}
                        className="rounded-full border border-[#0EA5E9]/30 px-4 py-2 text-xs font-semibold text-[#0EA5E9] transition hover:bg-[#0EA5E9]/10 md:text-sm"
                    >
                        記事一覧
                    </Link>
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
            </div>
        </header>
    )
})
export default WebHeader
