<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="ogE7nIzUAEGnSsw3YDTeyfaemBHdxn4X2f555Wq3cUQ" />

        <title inertia>ひたすら情報</title>
        <link rel="icon" type="image/png" href="/images/log_bk.png">
        <link rel="apple-touch-icon" href="/images/log_bk.png">
        <meta name="description" content="高校「情報I」を、反復で身につけるトレーニングアプリ。疑似コード / 条件分岐 / ループ / 2進数・ビット演算をひたすら解く。">
        <meta name="keywords" content="情報I, 疑似コード, 2進数, ビット演算, 学習アプリ">
        <meta property="og:title" content="ひたすら情報">
        <meta property="og:description" content="高校「情報I」を、反復で身につけるトレーニングアプリ。疑似コード / 条件分岐 / ループ  / 2進数・ビット演算をひたすら解く。">
        <meta property="og:image" content="{{ secure_asset('images/log_bk.png') }}">
        <meta property="og:image:secure_url" content="{{ secure_asset('images/log_bk.png') }}">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="ひたすら情報">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="ひたすら情報">
        <meta name="twitter:description" content="高校「情報I」を、反復で身につけるトレーニングアプリ。疑似コード / 条件分岐 / ループ / 2進数・ビット演算をひたすら解く。">
        <meta name="twitter:image" content="{{ secure_asset('images/log_bk.png') }}">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}/index.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
