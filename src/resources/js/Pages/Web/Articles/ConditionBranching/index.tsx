import React from 'react'
import { Head, Link } from '@inertiajs/react'
import WebHeader from '@/Components/WebHeader'
import WebFooter from '@/Components/WebFooter'
import WebInfoAppCta from '@/Components/WebInfoAppCta'

const tocItems = [
    { id: 'what-is', label: '条件分岐とは何か' },
    { id: 'importance', label: 'なぜ条件分岐が重要なのか' },
    { id: 'basic', label: '条件分岐の基本形（if / else）' },
    { id: 'pseudocode', label: '疑似コードで理解する条件分岐' },
    { id: 'pitfalls', label: '初心者がつまずきやすいポイント' },
    { id: 'factor', label: '因数分解の勉強にも通じる「条件で考える力」' },
    { id: 'summary', label: 'まとめ' },
]

export const ConditionBranchingArticle = React.memo(function ConditionBranchingArticle() {
    return (
        <div
            className="min-h-screen text-slate-900"
            style={{
                fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif',
                background: '#F8FAFC',
            }}
        >
            <Head title="条件分岐とは？プログラミングの思考を決める最重要概念を完全解説" />
            <WebHeader />

            <main className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:px-10">
                <section
                    className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)] md:p-12"
                    style={{
                        backgroundImage: "url('/images/sand_bk.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-white/70" />
                    <div className="relative space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0EA5E9]">
                            Programming Core
                        </p>
                        <h1 className="text-3xl font-extrabold leading-tight text-[#0F172A] md:text-4xl">
                            条件分岐とは？プログラミングの思考を決める最重要概念を完全解説
                        </h1>
                        <p className="max-w-2xl text-sm text-[#475569] md:text-base">
                            if / else の仕組みから疑似コード、複数条件の扱い方までを体系的に整理。因数分解 勉強にも効く「判断の型」を言語化します。
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                            <span className="rounded-full bg-[#0F172A] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                Feature
                            </span>
                            <span>更新日: 2024.11.20</span>
                            <span>読了目安: 8分</span>
                        </div>
                    </div>
                </section>

                <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] lg:hidden">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0EA5E9]">
                        Contents
                    </p>
                    <ol className="mt-4 space-y-3 border-l-2 border-slate-200 pl-4 text-sm text-slate-600">
                        {tocItems.map((item, index) => (
                            <li key={item.id} className="group">
                                <a href={`#${item.id}`} className="flex items-start gap-3 hover:text-slate-900">
                                    <span className="mt-0.5 text-xs font-semibold text-slate-400 group-hover:text-[#0EA5E9]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </section>

                <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
                    <article className="space-y-10 rounded-3xl border border-[#E2E8F0] bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-10 md:text-base">
                    <section className="space-y-4">
                        <p>
                            プログラミングを学び始めると、必ず出てくるのが{' '}
                            <strong>条件分岐（if / else）</strong> という考え方です。
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>if 文がよく分からない</li>
                            <li>else if が増えると混乱する</li>
                            <li>コードを見ても「何を判断しているのか」分からない</li>
                        </ul>
                        <p>
                            こう感じる人はとても多いですが、安心してください。条件分岐は{' '}
                            <strong>一度「考え方」を理解すれば、すべての言語で共通</strong> です。
                        </p>
                        <p>
                            この記事では、条件分岐とは何か、なぜ必要なのか、人間の思考との対応関係、疑似コードでの理解、初心者がつまずくポイントまでを、
                            <strong>コンテンツマーケティング用の柱記事レベル</strong>で丁寧に解説します。
                        </p>
                    </section>

                    <hr className="border-slate-200" />

                    <section id="what-is" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">条件分岐とは何か？【一言で】</h2>
                        <p>
                            条件分岐とは、<strong>「ある条件によって、処理の流れを変えること」</strong>です。
                        </p>
                        <p>
                            プログラムは基本的に、上から下へ順番に処理されます。しかし現実の処理では、状況によって動きを変えたい、入力によって結果を変えたい、判断が必要な場面がある──こうしたケースがほとんどです。その「判断」を担うのが条件分岐です。
                        </p>
                    </section>

                    <section id="human" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">人間は常に条件分岐している</h2>
                        <p>条件分岐は、実は人間が毎日無意識にやっていることです。</p>
                        <h3 className="text-lg font-semibold text-slate-900">例：外出前の判断</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>雨が降っている → 傘を持つ</li>
                            <li>雨が降っていない → 傘を持たない</li>
                        </ul>
                        <p>これはすでに立派な条件分岐です。</p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>もし雨が降っていたら、傘を持つ</li>
                            <li>そうでなければ、何もしない</li>
                        </ul>
                        <p>プログラミングは、この思考を<strong>曖昧さなく、機械に伝えているだけ</strong>です。</p>
                    </section>

                    <section id="importance" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">なぜ条件分岐が重要なのか</h2>
                        <p>
                            条件分岐がないプログラムは、いつ実行しても同じ動き、どんな入力でも同じ結果になります。
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900">条件分岐があることで可能になること</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>ログインしているかどうかの判定</li>
                            <li>テストの点数による合否判定</li>
                            <li>ゲームの当たり・ハズレ</li>
                            <li>アプリ画面の表示切り替え</li>
                        </ul>
                        <p>つまり、<strong>「判断」が必要な処理はすべて条件分岐</strong>です。</p>
                        <p>
                            条件分岐を理解していないと、プログラミングは「意味不明な記号の羅列」に見えてしまいます。
                        </p>
                    </section>

                    <section id="basic" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">条件分岐の基本形（if / else）</h2>
                        <p>最も基本的な条件分岐は、if / else という形で表されます。</p>
                        <h3 className="text-lg font-semibold text-slate-900">日本語で考えるとこうなる</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>もし条件が正しければ、Aをする</li>
                            <li>そうでなければ、Bをする</li>
                        </ul>
                        <p>
                            重要なのは、<strong>条件は必ず「正しい / 正しくない」の2択になる</strong>という点です。
                        </p>
                    </section>

                    <section id="condition" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">条件とは何か？</h2>
                        <p>条件とは、<strong>Yes / No で答えられる問い</strong>のことです。</p>
                        <h3 className="text-lg font-semibold text-slate-900">良い条件の例</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>年齢が18以上か</li>
                            <li>数値が10より大きいか</li>
                            <li>ログインしているか</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-slate-900">条件にならない例</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>年齢は？</li>
                            <li>名前は？</li>
                        </ul>
                        <p>
                            プログラムは「判断」しかできません。そのため条件は必ず{' '}
                            <strong>true / false に分かれる形</strong>にする必要があります。
                        </p>
                    </section>

                    <section id="pseudocode" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">疑似コードで理解する条件分岐</h2>
                        <p>
                            いきなりプログラミング言語を書くと、記号や文法に意識が引っ張られてしまいます。
                        </p>
                        <p>そこで役立つのが<strong>疑似コード</strong>です。</p>
                        <p>疑似コードとは、<strong>プログラムの考え方を日本語に近い形で書いたもの</strong>です。</p>
                        <h3 className="text-lg font-semibold text-slate-900">疑似コード例：テストの合否判定</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>もし点数が60以上なら</li>
                            <li>合格と表示する</li>
                            <li>そうでなければ</li>
                            <li>不合格と表示する</li>
                        </ul>
                        <p>
                            この段階では、どのプログラミング言語かは一切関係ありません。
                        </p>
                        <p>
                            重要なのは、何を条件にして、どんな分岐をして、何をしたいのかを明確にすることです。
                        </p>
                    </section>

                    <section id="multiple" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">条件が増えるとどうなるか（複数条件）</h2>
                        <p>現実の問題では、条件は1つとは限りません。</p>
                        <h3 className="text-lg font-semibold text-slate-900">成績判定の例</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>もし点数が80以上なら → A評価</li>
                            <li>そうでなければ、もし60以上なら → B評価</li>
                            <li>それ以外 → C評価</li>
                        </ul>
                        <p>
                            ここで大切なのは、条件は<strong>上から順番にチェックされる</strong>、最初に当てはまった処理が実行されるというルールです。
                        </p>
                        <p>順番を間違えると、正しく動かないプログラムになります。</p>
                    </section>

                    <section id="pitfalls" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">初心者がつまずきやすいポイント</h2>
                        <h3 className="text-lg font-semibold text-slate-900">1. 条件と処理を混ぜてしまう</h3>
                        <p>よくある間違いは、「合格を表示するか？」のように、<strong>処理を条件にしてしまうこと</strong>です。</p>
                        <p>正しくは、「点数が60以上か？」のように、判断できる形にします。</p>

                        <h3 className="text-lg font-semibold text-slate-900">2. if 文を日本語で説明できない</h3>
                        <p>if 文が分からなくなったら、必ず日本語に戻してください。</p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>この if は何を判断しているのか</li>
                            <li>true のとき何が起きるのか</li>
                            <li>false のとき何が起きるのか</li>
                        </ul>
                        <p>これを言葉で説明できれば、理解できています。</p>

                        <h3 className="text-lg font-semibold text-slate-900">3. いきなり複雑に考える</h3>
                        <p>
                            条件分岐は、条件が1つ → 2つ → 複数 というように、<strong>段階的に慣れるもの</strong>です。
                        </p>
                        <p>最初から複雑な例を理解しようとしなくて大丈夫です。</p>
                    </section>

                    <section id="foundation" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">条件分岐はすべての基礎になる</h2>
                        <p>
                            条件分岐は、ループ（繰り返し処理）、アルゴリズム、ビット演算の分岐判定、ゲームや業務システムのロジック、すべての土台です。
                        </p>
                        <p>
                            ここが曖昧なままだと、後半の内容が一気に難しく感じます。
                            逆に言えば、<strong>条件分岐を理解した瞬間に、世界が一気に整理されます。</strong>
                        </p>
                    </section>

                    <section id="factor" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">因数分解の勉強にも通じる「条件で考える力」</h2>
                        <p>
                            <strong>因数分解 勉強</strong>が進まない原因は、「どこで判断するか」が曖昧なことが多いです。
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>係数に共通因数があるか</li>
                            <li>公式が使える形か</li>
                            <li>2次式ならどの分解パターンか</li>
                        </ul>
                        <p>
                            この判断は、まさに条件分岐と同じ構造です。<strong>Yes / No で整理して、次の手順を決める</strong>。これができると、因数分解の精度は一気に上がります。
                        </p>
                    </section>

                    <section id="app" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">情報Iアプリで反復すると理解が定着する</h2>
                        <p>
                            条件分岐の理解と同じく、情報Iも<strong>「反復で体に入れる」</strong>のが最短ルートです。
                        </p>
                        <p>
                            もし、情報Iの勉強が続かない、例題を毎回探すのが面倒、短時間でサクッと反復したいという人には、<strong>情報Iアプリ</strong>の活用が有効です。
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900">ひたすら情報でできること</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>疑似コードや条件分岐をテンポ良く反復</li>
                            <li>正解／不正解の判断で理解の穴を把握</li>
                            <li>スキマ時間にサクッと学習</li>
                        </ul>
                        <p>
                            <strong>「ひたすら情報」</strong>は、反復で定着させることに特化した情報I学習アプリです。条件分岐のように「判断の型」を身につける学習と相性が良く、疑似コードやループの理解も着実に深まります。
                        </p>
                        <div className="mt-4 rounded-2xl bg-slate-900 px-5 py-4 text-xs font-semibold text-white md:text-sm">
                            App Store / Google Play で「ひたすら情報」と検索
                        </div>
                    </section>

                    <section id="study" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">効率よく条件分岐を理解する勉強法</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>日本語で考える</li>
                            <li>疑似コードに落とす</li>
                            <li>小さな例を何度も書く</li>
                        </ul>
                        <p>
                            「コードを書く」より先に、<strong>「考え方を書く」練習</strong>をするのが最短ルートです。
                        </p>
                    </section>

                    <section id="summary" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">まとめ｜条件分岐はプログラミング思考の入口</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>条件分岐は「判断」の仕組み</li>
                            <li>人間の思考とまったく同じ</li>
                            <li>言語が変わっても考え方は共通</li>
                            <li>疑似コードが理解の近道</li>
                        </ul>
                        <p>
                            もし、プログラミングが難しく感じる、if 文で毎回止まる、ロジックが組めないと感じているなら、<strong>条件分岐をもう一度、考え方から学ぶこと</strong>をおすすめします。
                        </p>
                        <p>
                            そして情報Iでは、<strong>疑似コードや条件分岐の反復</strong>を進めることが理解の近道です。<strong>情報Iアプリ「ひたすら情報」</strong>を使って、判断の型を身体に覚えさせていきましょう。
                        </p>
                    </section>

                    <section id="next" className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">次に読むと理解が深まるテーマ</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>疑似コードとは？書き方と考え方</li>
                            <li>ループ（for / while）と条件分岐の関係</li>
                            <li>2進数とビット演算を条件分岐目線で理解する</li>
                            <li>プログラミング的思考とは何か</li>
                        </ul>
                        <p>
                            この流れで記事を積み上げると、<strong>検索にも強く、学習導線もきれいなコンテンツ群</strong>になります。
                        </p>
                    </section>
                </article>

                    <aside className="hidden space-y-6 lg:block">
                        <div className="sticky top-24 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0EA5E9]">
                                Contents
                            </p>
                            <ol className="mt-4 space-y-3 border-l-2 border-slate-200 pl-4 text-sm text-slate-600">
                                {tocItems.map((item, index) => (
                                    <li key={item.id} className="group">
                                        <a href={`#${item.id}`} className="flex items-start gap-3 hover:text-slate-900">
                                            <span className="mt-0.5 text-xs font-semibold text-slate-400 group-hover:text-[#0EA5E9]">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span>{item.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>
                </div>

                <WebInfoAppCta />

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
            </main>

            <WebFooter />
        </div>
    )
})

export default ConditionBranchingArticle
