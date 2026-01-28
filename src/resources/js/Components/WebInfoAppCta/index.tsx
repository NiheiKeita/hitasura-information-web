import React from 'react'

const appStoreUrl =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%83%85%E5%A0%B1/id6757374807'
const googlePlayUrl =
    'https://play.google.com/store/apps/details?id=com.qboad.hitasura_information'

export const WebInfoAppCta = React.memo(function WebInfoAppCta() {
    return (
        <section className="rounded-3xl bg-[#0EA5E9] px-6 py-10 text-white shadow-[0_20px_60px_rgba(14,165,233,0.3)] md:px-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                        Info I App
                    </p>
                    <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                        情報Iの反復を、アプリで習慣に。
                    </h2>
                    <p className="mt-3 text-sm text-white/80 md:text-base">
                        ひたすら情報は、疑似コードや条件分岐をテンポよく反復できる学習アプリです。
                        短時間でも毎日続けやすく、情報Iの苦手克服にぴったり。
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#0EA5E9]"
                    >
                        App Storeで見る
                    </a>
                    <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/70 px-5 py-2 text-xs font-semibold text-white"
                    >
                        Google Playで見る
                    </a>
                </div>
            </div>
        </section>
    )
})

export default WebInfoAppCta
