import React from 'react'
import { Head } from '@inertiajs/react'
import WebHeader from '@/Components/WebHeader'
import WebFooter from '@/Components/WebFooter'
import WebInfoAppCta from '@/Components/WebInfoAppCta'
import WebArticleHero from '@/Components/WebArticleHero'
import WebArticleBackToList from '@/Components/WebArticleBackToList'
import { WebArticleTocAside, WebArticleTocMobile } from '@/Components/WebArticleToc'

const tocItems = [
    { id: 'what-is', label: '疑似コードとは？【一言で】' },
    { id: 'why', label: 'なぜ疑似コードが必要なのか' },
    { id: 'draft', label: '疑似コードは「下書き」' },
    { id: 'rules', label: '疑似コードの基本ルール' },
    { id: 'example-if', label: '疑似コードの例①：条件分岐' },
    { id: 'example-multi', label: '疑似コードの例②：複数条件' },
    { id: 'example-loop', label: '疑似コードの例③：ループ' },
    { id: 'mistakes', label: 'よくある間違い' },
    { id: 'translate', label: '疑似コード→実コードへのつなげ方' },
    { id: 'foundation', label: '疑似コードはすべての基礎になる' },
    { id: 'practice', label: '疑似コードを書く練習方法' },
    { id: 'summary', label: 'まとめ' },
]

export const PseudocodeArticle = React.memo(function PseudocodeArticle() {
    return (
        <div
            className="min-h-screen text-slate-900"
            style={{
                fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif',
                background: '#F8FAFC',
            }}
        >
            <Head title="疑似コードとは？プログラミングの「考え方」を言語化する最強の道具" />
            <WebHeader />

            <main className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:px-10">
                <WebArticleHero
                    eyebrow="Programming Core"
                    title="疑似コードとは？プログラミングの「考え方」を言語化する最強の道具"
                    description="書き始める前に「考え方」を言葉で整理する。疑似コードの意味・書き方・条件分岐やループとの関係を体系的に解説します。"
                    badge="Guide"
                    date="2024.11.20"
                    readTime="9分"
                />

                <WebArticleTocMobile items={tocItems} />

                <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
                    <article className="space-y-10 rounded-3xl border border-[#E2E8F0] bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-10 md:text-base">
                        <section className="space-y-4">
                            <p>プログラミングを勉強していると、こんな壁にぶつかりませんか？</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>コードを見ても意味が分からない</li>
                                <li>書き始めようとして手が止まる</li>
                                <li>頭の中では分かっている「つもり」なのに形にできない</li>
                            </ul>
                            <p>
                                その原因の多くは、<strong>いきなりプログラミング言語で考えようとしていること</strong>にあります。
                            </p>
                            <p>
                                そこで登場するのが<strong>疑似コード</strong>です。
                                この記事では、疑似コードの意味・書き方・条件分岐やループとの関係・実コードへのつなげ方までを、
                                体系的に解説します。
                            </p>
                        </section>

                        <hr className="border-slate-200" />

                        <section id="what-is" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードとは？【一言で】</h2>
                            <p>
                                疑似コードとは、<strong>「プログラムの処理内容を、日本語に近い形で書いたもの」</strong>です。
                            </p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>特定のプログラミング言語に依存しない</li>
                                <li>文法を気にしなくていい</li>
                                <li>処理の流れ・考え方に集中できる</li>
                            </ul>
                        </section>

                        <section id="why" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">なぜ疑似コードが必要なのか</h2>
                            <p>
                                初心者がつまずく最大の理由は、<strong>考え方（ロジック）と書き方（文法）を同時にやろうとすること</strong>です。
                            </p>
                            <h3 className="text-lg font-semibold text-slate-900">プログラミングで本来やっていること</h3>
                            <ol className="list-decimal space-y-2 pl-5">
                                <li>何をしたいか考える</li>
                                <li>手順に分解する</li>
                                <li>条件や繰り返しを整理する</li>
                                <li>それをコードで書く</li>
                            </ol>
                            <p>
                                多くの人は<strong>1〜3を飛ばして4から始めてしまう</strong>ため、混乱します。
                                疑似コードは<strong>2〜3を丁寧にやるための道具</strong>です。
                            </p>
                        </section>

                        <section id="draft" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードは「プログラミングの下書き」</h2>
                            <p>疑似コードは、作文でいうところの「下書き」と同じです。</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>いきなり清書しない</li>
                                <li>まず言いたいことを言葉で書く</li>
                                <li>そのあと整える</li>
                            </ul>
                            <p>この順番を守るだけで、プログラミングの難易度は一気に下がります。</p>
                        </section>

                        <section id="rules" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードの基本ルール</h2>
                            <p>
                                疑似コードに厳密なルールはありませんが、分かりやすく書くための共通ルールはあります。
                            </p>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">1. 日本語で書いていい</h3>
                                    <p>変数名や記号を無理に使う必要はありません。</p>
                                    <ul className="list-disc space-y-2 pl-5">
                                        <li>点数を入力する</li>
                                        <li>合格かどうか判定する</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">2. 上から下へ処理が流れる</h3>
                                    <p>上に書いたものから順番に実行される前提で書きます。</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">3. 条件分岐・繰り返しを明確にする</h3>
                                    <p>「もし〜なら」「〜の間くり返す」など、判断やループが分かる言葉を使います。</p>
                                </div>
                            </div>
                        </section>

                        <section id="example-if" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードの例①：条件分岐</h2>
                            <h3 className="text-lg font-semibold text-slate-900">テストの合否判定</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>点数を入力する</li>
                                <li>もし点数が60以上なら</li>
                                <li>合格と表示する</li>
                                <li>そうでなければ</li>
                                <li>不合格と表示する</li>
                            </ul>
                            <p>
                                ここで重要なのは、条件は<strong>「60以上か」というYes / No</strong>であること、
                                そして<strong>true と false の両方の動きを書いている</strong>点です。
                            </p>
                        </section>

                        <section id="example-multi" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードの例②：複数条件</h2>
                            <h3 className="text-lg font-semibold text-slate-900">成績評価の例</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>点数を入力する</li>
                                <li>もし80以上なら</li>
                                <li>A評価</li>
                                <li>そうでなければ、もし60以上なら</li>
                                <li>B評価</li>
                                <li>それ以外</li>
                                <li>C評価</li>
                            </ul>
                            <p>
                                上から順番に条件をチェックし、最初に当てはまった評価が決まるという流れが一目で分かります。
                            </p>
                        </section>

                        <section id="example-loop" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードの例③：ループ（繰り返し）</h2>
                            <h3 className="text-lg font-semibold text-slate-900">1から5まで表示する</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>数字を1にする</li>
                                <li>数字が5以下の間、次をくり返す</li>
                                <li>数字を表示する</li>
                                <li>数字を1増やす</li>
                            </ul>
                            <p>いつ始まり、いつ終わり、何を繰り返すかがはっきり書かれています。</p>
                        </section>

                        <section id="mistakes" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">よくある間違い</h2>
                            <h3 className="text-lg font-semibold text-slate-900">間違い①：いきなりコードっぽくする</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>記号だらけ</li>
                                <li>英語だらけ</li>
                                <li>文法を気にしすぎる</li>
                            </ul>
                            <p>疑似コードの目的は、<strong>人間が理解しやすくすること</strong>です。</p>

                            <h3 className="text-lg font-semibold text-slate-900">間違い②：処理と条件が混ざる</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>❌ 合格を表示するか？</li>
                                <li>⭕ 点数が60以上か？</li>
                            </ul>
                            <p>条件は必ず<strong>判断できる形</strong>にします。</p>
                        </section>

                        <section id="translate" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コード → 実コードへのつなげ方</h2>
                            <p>疑似コードが書けたら、それをそのままコードに「翻訳」します。</p>
                            <h3 className="text-lg font-semibold text-slate-900">変わるもの</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>日本語 → プログラミング言語</li>
                                <li>曖昧な表現 → 正確な記述</li>
                            </ul>
                            <h3 className="text-lg font-semibold text-slate-900">変わらないもの</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>処理の順番</li>
                                <li>条件の考え方</li>
                                <li>ループの構造</li>
                            </ul>
                            <p>
                                つまり、<strong>疑似コードが正しければ、コードも正しくなります。</strong>
                            </p>
                        </section>

                        <section id="foundation" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードはすべての基礎になる</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>条件分岐</li>
                                <li>ループ</li>
                                <li>アルゴリズム</li>
                                <li>フローチャート</li>
                                <li>ビット演算の理解</li>
                            </ul>
                            <p>
                                ここを飛ばすと、「書けない」「読めない」「応用できない」という状態になりがちです。
                            </p>
                        </section>

                        <section id="practice" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードを書く練習方法</h2>
                            <ol className="list-decimal space-y-2 pl-5">
                                <li>日常の行動を書く</li>
                                <li>判断があるところを探す</li>
                                <li>手順を箇条書きにする</li>
                            </ol>
                            <p>
                                例：自動販売機、朝の準備、ゲームのルール。これだけで立派な疑似コード練習になります。
                            </p>
                        </section>

                        <section id="summary" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">まとめ｜疑似コードは「考える力」を育てる</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>疑似コードは下書き</li>
                                <li>文法より考え方が大事</li>
                                <li>日本語でOK</li>
                                <li>すべての言語に共通</li>
                            </ul>
                            <p>
                                もし、コードを書く前に止まる、ロジックが思いつかない、プログラミングが難しいと感じるなら、
                                <strong>疑似コードを書く習慣をつけること</strong>が最短ルートです。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">次に読むと理解がつながる記事</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>条件分岐とは？if / else の考え方</li>
                                <li>ループ（繰り返し処理）とは何か</li>
                                <li>フローチャートとは？疑似コードとの違い</li>
                                <li>2進数とビット演算を疑似コードで考える</li>
                            </ul>
                            <p>
                                この順番で読むと、<strong>プログラミングの全体像が一気につながります。</strong>
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

export default PseudocodeArticle
