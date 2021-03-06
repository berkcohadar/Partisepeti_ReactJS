import React from 'react';
import Head from 'next/head';

const StyleSheets = () => (
    <Head>
        <title>Partisepeti - React</title>
        <link rel="shortcut icon" href="/static/img/logo.png" />
        <link rel="icon" href="/static/img/logo.png" sizes="32x32" />
        <link rel="icon" href="/static/img/logo.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/static/img/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="nouthemes" />
        <meta name="keywords" content="Partisepeti, React" />
        <meta name="description" content="Partisepeti - React" />
        {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}
        <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="/static/fonts/Linearicons/Font/demo-files/demo.css"
        />

        <link
            rel="stylesheet"
            href="/static/fonts/font-awesome/css/font-awesome.min.css"
        />
        
        <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/bootstrap.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/slick.min.css"
        />
    </Head>
);

export default StyleSheets;
