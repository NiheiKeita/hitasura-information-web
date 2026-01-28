import React from 'react'
import { Head } from '@inertiajs/react'
import WebHeader from '@/Components/WebHeader'
import WebFooter from '@/Components/WebFooter'
import WebInfoAppCta from '@/Components/WebInfoAppCta'
import WebArticleHero from '@/Components/WebArticleHero'
import WebArticleBackToList from '@/Components/WebArticleBackToList'
import { WebArticleTocAside, WebArticleTocMobile } from '@/Components/WebArticleToc'

const tocItems = [
    { id: 'what-is', label: 'ループとは？【一言で】' },
    { id: 'human', label: '人間は常にループしている' },
    { id: 'why', label: 'なぜループが必要なのか' },
    { id: 'three-structures', label: '情報学における3つの基本構造' },
    { id: 'essence', label: 'ループの本質は「条件分岐」' },
    { id: 'pseudocode', label: '疑似コードで見るループの基本' },
    { id: 'end-condition', label: '「いつ終わるか」が最重要ポイント' },
    { id: 'types', label: '回数で決まるループと条件で決まるループ' },
    { id: 'difference', label: 'ループと条件分岐の違い' },
    { id: 'usage', label: '情報学でループが使われる場面' },
    { id: 'mistakes', label: 'よくある間違い' },
    { id: 'practice', label: 'ループを理解する練習方法' },
    { id: 'summary', label: 'まとめ' },
]

export const LoopArticle = React.memo(function LoopArticle() {
    return (
        <div
            className="min-h-screen text-slate-900"
            style={{
                fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif',
                background: '#F8FAFC',
            }}
        >
            <Head title="ループ（繰り返し処理）とは？情報学で必ず出てくる考え方を完全解説" />
            <WebHeader />

            <main className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:px-10">
                <WebArticleHero
                    eyebrow="Information Science"
                    title="ループ（繰り返し処理）とは？情報学で必ず出てくる考え方を完全解説"
                    description="情報学としてのループの意味や必要性、条件分岐との違い、終了条件の重要性までをやさしく整理します。"
                    badge="Guide"
                    date="2024.11.20"
                    readTime="8分"
                />

                <WebArticleTocMobile items={tocItems} />

                <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
                    <article className="space-y-10 rounded-3xl border border-[#E2E8F0] bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-10 md:text-base">
                        <section className="space-y-4">
                            <p>
                                情報学やプログラミングを学んでいると、<strong>「ループ」「繰り返し処理」</strong>という言葉が必ず出てきます。
                            </p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>なぜ同じ処理を何度も書かないのか</li>
                                <li>ループは何をしているのか</li>
                                <li>条件分岐と何が違うのか</li>
                                <li>情報学として、何を理解すればいいのか</li>
                            </ul>
                            <p>
                                この記事では、<strong>プログラミング言語の文法ではなく、情報学としてのループ</strong>を考え方から解説します。
                            </p>
                        </section>

                        <hr className="border-slate-200" />

                        <section id="what-is" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">ループとは？【一言で】</h2>
                            <p>
                                ループ（繰り返し処理）とは、<strong>「同じ処理を、条件が満たされている間、何度も実行すること」</strong>です。
                            </p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>同じ処理を</li>
                                <li>何度も</li>
                                <li>条件に従って</li>
                            </ul>
                            <p>実行する、ということです。</p>
                        </section>

                        <section id="human" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">人間は常にループしている</h2>
                            <p>ループも、条件分岐と同じく人間が日常で無意識にやっている思考です。</p>
                            <h3 className="text-lg font-semibold text-slate-900">例：階段を上る</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>まだ最上階に着いていないか？</li>
                                <li>はい → 次の段を上る</li>
                                <li>いいえ → 終わり</li>
                            </ul>
                            <p>
                                これは「確認」「行動」「また確認」を繰り返す<strong>ループ処理</strong>です。
                            </p>
                        </section>

                        <section id="why" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">なぜループが必要なのか</h2>
                            <p>ループがない世界を想像してみてください。</p>
                            <h3 className="text-lg font-semibold text-slate-900">例：1から10まで表示したい場合</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>1を表示</li>
                                <li>2を表示</li>
                                <li>3を表示</li>
                                <li>…</li>
                            </ul>
                            <p>同じような処理を何度も書くことになり、非効率でミスしやすくなります。</p>
                            <p>
                                👉 <strong>ループは「人間の手抜き」ではなく「正しい設計」</strong>です。
                            </p>
                        </section>

                        <section id="three-structures" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">情報学における3つの基本構造</h2>
                            <p>情報学では、処理の流れは次の3つの組み合わせで表せると考えます。</p>
                            <ol className="list-decimal space-y-2 pl-5">
                                <li>順次：上から順に実行</li>
                                <li>分岐：条件によって処理を変える</li>
                                <li>反復：同じ処理を繰り返す</li>
                            </ol>
                            <p>ループはこの<strong>反復</strong>にあたります。</p>
                        </section>

                        <section id="essence" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">ループの本質は「条件分岐」</h2>
                            <p>
                                ループは内部で<strong>条件を確認 → 正しければ処理 → もう一度確認</strong>を繰り返しています。
                            </p>
                            <p>
                                つまり、条件分岐が分かっていれば、ループの理解は半分終わっています。
                            </p>
                        </section>

                        <section id="pseudocode" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">疑似コードで見るループの基本</h2>
                            <h3 className="text-lg font-semibold text-slate-900">例：1から5まで表示する</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>数字を1にする</li>
                                <li>数字が5以下の間、次をくり返す</li>
                                <li>数字を表示する</li>
                                <li>数字を1増やす</li>
                            </ul>
                            <p>どこから始まり、いつ終わり、何を繰り返すかが明確です。</p>
                        </section>

                        <section id="end-condition" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">「いつ終わるか」が最重要ポイント</h2>
                            <p>ループで一番重要なのは、<strong>「いつループを終わるか」</strong>です。</p>
                            <h3 className="text-lg font-semibold text-slate-900">終わらないループの例（考え方）</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>数字が5以下の間くり返す</li>
                                <li>数字を表示する</li>
                                <li>数字を増やさない</li>
                            </ul>
                            <p>この場合、数字はずっと1のままで<strong>無限ループ</strong>になります。</p>
                        </section>

                        <section id="types" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">回数で決まるループと、条件で決まるループ</h2>
                            <h3 className="text-lg font-semibold text-slate-900">1. 回数が決まっているループ</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>10回くり返す</li>
                                <li>1から100まで処理する</li>
                            </ul>
                            <h3 className="text-lg font-semibold text-slate-900">2. 条件で終わるループ</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>正解するまで続ける</li>
                                <li>入力が正しくなるまで続ける</li>
                            </ul>
                            <p>回数は分からないが、条件が満たされたら終わるループです。</p>
                        </section>

                        <section id="difference" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">ループと条件分岐の違い</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>条件分岐：一度だけ判断する</li>
                                <li>ループ：判断を何度も行う</li>
                            </ul>
                            <p>ただし、使っている<strong>条件は同じ</strong>です。</p>
                        </section>

                        <section id="usage" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">情報学でループが使われる場面</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>データを1つずつ確認する</li>
                                <li>配列やリストを処理する</li>
                                <li>ゲームの進行管理</li>
                                <li>探索・探索アルゴリズム</li>
                                <li>ビット列を順に調べる</li>
                            </ul>
                            <p>「たくさんあるものを順に処理する」場面では必ずループが登場します。</p>
                        </section>

                        <section id="mistakes" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">よくある間違い</h2>
                            <h3 className="text-lg font-semibold text-slate-900">間違い①：繰り返す内容が曖昧</h3>
                            <p>「何となく繰り返す」ではなく、何を、どの条件で、いつまでを明確にします。</p>
                            <h3 className="text-lg font-semibold text-slate-900">間違い②：条件を書いていない</h3>
                            <p>条件がないループは終わらない処理になります。終了条件の設計が重要です。</p>
                        </section>

                        <section id="practice" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">ループを理解する練習方法</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>日常の行動を分解する</li>
                                <li>「まだ〜か？」を探す</li>
                                <li>それを繰り返しとして書く</li>
                            </ul>
                            <p>例：洗濯が終わるまで、ゴールに着くまで、正しい入力が来るまで。</p>
                        </section>

                        <section id="summary" className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">まとめ｜ループは情報処理の心臓部</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>ループは繰り返し処理</li>
                                <li>本質は条件分岐の繰り返し</li>
                                <li>終了条件が最重要</li>
                                <li>情報学の三大基本構造の1つ</li>
                            </ul>
                            <p>
                                条件分岐とループを理解すれば、<strong>情報学の基礎はほぼ完成</strong>です。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900">次につながるテーマ</h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>フローチャートとは？ループを図で理解する</li>
                                <li>2進数とは？情報をどう表すか</li>
                                <li>ビット演算とは？繰り返しと条件で理解する</li>
                            </ul>
                            <p>
                                この順番で進めると、<strong>情報学の全体像が自然につながります。</strong>
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

export default LoopArticle
