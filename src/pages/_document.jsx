import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Access the environment variable here.
  // NEXT_PUBLIC_ variables are available on both client and server side.
  const currentEnv = process.env.NEXT_PUBLIC_ENV;


  const shouldNoindex = currentEnv === 'LOCAL' || currentEnv === 'STAGE';

  return (
    <Html lang="hi">
      <Head>
      
        {shouldNoindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="max-image-preview:large" />
        )}

        
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}