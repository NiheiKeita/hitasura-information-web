<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="ogE7nIzUAEGnSsw3YDTeyfaemBHdxn4X2f555Wq3cUQ" />

        <title inertia>ひたすら数学</title>
        <link rel="icon" type="image/png" href="/images/logo.png">
        <meta property="og:title" content="ひたすら数学">
        <meta property="og:image" content="{{ secure_asset('images/logo.png') }}">
        <meta property="og:image:secure_url" content="{{ secure_asset('images/logo.png') }}">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="ひたすら数学">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="ひたすら数学">
        <meta name="twitter:image" content="{{ secure_asset('images/logo.png') }}">

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
