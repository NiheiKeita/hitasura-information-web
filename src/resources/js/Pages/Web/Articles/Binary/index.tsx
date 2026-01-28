import React from 'react'
import { Head } from '@inertiajs/react'
import WebHeader from '@/Components/WebHeader'
import WebFooter from '@/Components/WebFooter'
import WebInfoAppCta from '@/Components/WebInfoAppCta'
import WebArticleHero from '@/Components/WebArticleHero'
import WebArticleBackToList from '@/Components/WebArticleBackToList'
import { WebArticleTocAside, WebArticleTocMobile } from '@/Components/WebArticleToc'

const tocItems = [
    { id: 'what-is', label: '2進数とは？【一言で】' },
    { id: 'difference', label: '10進数と2進数の違い' },
    { id: 'why', label: 'なぜコンピュータは2進数を使うのか' },
    { id: 'digit-meaning', label: '2進数の桁の意味' },
    { id: 'to-decimal', label: '2進数を10進数に直す考え方' },
    { id: 'to-binary', label: '10進数を2進数で考える' },
    { id: 'bit', label: '2進数は情報の最小単位' },
    { id: 'information', label: '2進数と情報量の関係' },
    { id: 'judgement', label: '2進数は「判断」の集合' },
    { id: 'usage', label: '情報学で2進数が使われる場面' },
    { id: 'misunderstand', label: 'よくある誤解' },
    { id: 'summary', label: 'まとめ' },
]

export const BinaryArticle = React.memo(function BinaryArticle() {
    return (
        <div
            className="min-h-screen text-slate-900"
            style={{
                fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif',
                background: '#F8FAFC',
            }}
        >
            <Head title="2進数とは？情報学で「0と1」を使う理由を基礎から完全解説" />
            <WebHeader />

            <main className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:px-10">
                <WebArticleHero
                    eyebrow="Information Science"
                    title="2進数とは？情報学で「0と1」を使う理由を基礎から完全解説"
                    description="計算テクニックよりも「考え方」重視で、2進数の意味や使われる理由を情報学の視点から整理します。"
                    badge="Guide"
                    date="2024.11.20"
                    readTime="9分"
                />

                <WebArticleTocMobile items={tocItems} />

                <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
                    <article className="space-y-10 rounded-3xl border border-[#E2E8F0] bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-10 md:text-base">
                        <section className="space-y-4">
                            <p>
                                情報学を学んでいると、必ず出てくるのが<strong>2進数</strong>という考え方です。
                            </p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>なぜコンピュータは0と1だけを使うのか</li>
                                <li>10進数と何が違うのか</li>
                                <li>情報学として、何を理解すればいいのか</li>
                                <li>ビット演算とどうつながるのか</li>
                            </ul>
                            <p>
                                この記事では、<strong>計算テクニックよりも「考え方」重視</strong>で2進数を解説します。
                            </p>
                        </section>

                        <hr className="border-slate-200" />

                        <section id="what-is" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">2進数とは？【一言で】</h2>
                            <p>
                                2進数とは、<strong>「0と1の2種類の数字だけで数を表す方法」</strong>です。
                            </p>
                            <p>
                                私たちが普段使っている数は10進数ですが、コンピュータの世界では2進数が使われます。
                            </p>
                        </section>

                        <section id="difference" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">10進数と2進数の違い</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">10進数とは</h3>
                                    <ul className="list-disc space-y-2 pl-5">
                                        <li>0〜9の10種類の数字を使う</li>
                                        <li>10になったら桁が繰り上がる</li>
                                    </ul>
                                    <p className="text-sm text-slate-600">例：9 → 10、99 → 100</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">2進数とは</h3>
                                    <ul className="list-disc space-y-2 pl-5">
                                        <li>0と1の2種類だけを使う</li>
                                        <li>2になったら桁が繰り上がる</li>
                                    </ul>
                                    <p className="text-sm text-slate-600">例：1 → 10、11 → 100</p>
                                </div>
                            </div>
                            <p>👉 使える数字の数が違うだけで、考え方は同じです。</p>
                        </section>

                        <section id="why" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">なぜコンピュータは2進数を使うのか</h2>
                            <p>理由はとてもシンプルです。コンピュータは電気で動いています。</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>電気が流れている</li>
                                <li>電気が流れていない</li>
                            </ul>
                            <p>
                                この2つの状態を使って情報を表すため、
                                電気が流れている→1、流れていない→0 と対応させると安定して扱えます。
                            </p>
                        </section>

                        <section id="digit-meaning" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">2進数の桁の意味（ここが超重要）</h2>
                            <p>2進数の各桁は、すべて2の累乗になっています。</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>1の位（2⁰）</li>
                                <li>2の位（2¹）</li>
                                <li>4の位（2²）</li>
                                <li>8の位（2³）</li>
                            </ul>
                        </section>

                        <section id="to-decimal" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">2進数を10進数に直す考え方</h2>
                            <p>例：2進数「101」</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>1 × 4</li>
                                <li>0 × 2</li>
                                <li>1 × 1</li>
                            </ul>
                            <p>合計は 4 + 0 + 1 = 5。つまり 2進数 101 = 10進数 5 です。</p>
                        </section>

                        <section id="to-binary" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">10進数を2進数で考える</h2>
                            <p>例：10進数「6」</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>6 = 4 + 2</li>
                                <li>4の位 → 1</li>
                                <li>2の位 → 1</li>
                                <li>1の位 → 0</li>
                            </ul>
                            <p>結果は 2進数 110。分解して考えるのが情報学的な理解です。</p>
                        </section>

                        <section id="bit" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">2進数は「情報の最小単位」</h2>
                            <p>2進数の1桁はビット（bit）と呼ばれます。</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>1ビット → 0か1</li>
                                <li>8ビット → 1バイト</li>
                            </ul>
                            <p>文字・画像・音・動画など、すべてのデータはビットの並びです。</p>
                        </section>

                        <section id="information" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">2進数と情報量の関係</h2>
                            <p>2進数では、桁が1つ増えるごとに表せる情報量が倍になります。</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>1ビット → 2通り</li>
                                <li>2ビット → 4通り</li>
                                <li>3ビット → 8通り</li>
                            </ul>
                        </section>

                        <section id="judgement" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">2進数は「判断」の集合</h2>
                            <p>各ビットは「1か？0か？」というYes / Noの判断です。</p>
                            <p>
                                ここで、条件分岐やループと自然につながってきます。
                            </p>
                        </section>

                        <section id="usage" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">情報学で2進数が使われる場面</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>データの保存</li>
                                <li>文字コード</li>
                                <li>画像・音声の表現</li>
                                <li>ビット演算</li>
                                <li>フラグ管理</li>
                            </ul>
                            <p>「情報をどう表すか」という問いに対する最も基本的な答えが2進数です。</p>
                        </section>

                        <section id="misunderstand" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">よくある誤解</h2>
                            <h3 className="text-lg font-semibold text-slate-900">誤解①：計算ができないとダメ</h3>
                            <p>情報学では暗算力より<strong>構造の理解</strong>が重要です。</p>
                            <h3 className="text-lg font-semibold text-slate-900">誤解②：プログラミング専用の知識</h3>
                            <p>2進数は情報学・コンピュータ科学・データ表現すべての土台です。</p>
                        </section>

                        <section id="summary" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">まとめ｜2進数は情報学の入口</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>2進数は0と1だけで表す数</li>
                                <li>コンピュータの仕組みと直結している</li>
                                <li>各桁は2の累乗</li>
                                <li>情報はすべてビットの集合</li>
                            </ul>
                            <p>
                                2進数を理解すると、ビット演算やフラグ管理、情報量の考え方が一気につながります。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">次につながるテーマ</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>ビットとは何か？情報の最小単位</li>
                                <li>ビット演算とは？AND / OR / XOR の考え方</li>
                                <li>フラグ管理とは？2進数で状態を表す</li>
                                <li>情報量とは何か？ビット数とデータ量</li>
                            </ul>
                            <p>
                                この次は、<strong>「ビット演算とは？」</strong>を書くと情報学アプリとして一段レベルが上がります。
                            </p>
                        </section>
                    </article>

                    <WebArticleTocAside items={tocItems} />
                </div>

                <WebInfoAppCta />

                <WebArticleBackToList />
            </main>

            <WebFooter />
        </div>
    )
})

export default BinaryArticle
