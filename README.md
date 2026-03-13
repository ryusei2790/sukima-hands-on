This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# 開発日記
## 一日目
今日は、プロジェクトの作成

npx create-next-app sukima~~~

でプロジェクトを初期化しました。
これが初期化するっていうのか曖昧なのでまた調べてみます。

その後、写経用のプロジェクトフォルダではappがsrcフォルダの中に入っていたのでapp/を移動しました。

ここで一旦プロジェクトを
npm run dev
で立ち上げたら下のようなエラーが出ました。

 npm run dev                                                 ─╯
npm error Missing script: "dev"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: /Users/ryusei/.npm/_logs/2026-03-13T06_24_34_324Z-debug-0.log

░▒▓  ╱  ~/Mywork/sukima-hands-on ······· at 15:24:34  

これはただプロジェクトを開いている場所が違っていただけでした。


次に下のようなwarningが出ました。

> sukima-hands-on@0.1.0 dev
> next dev

⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
 We detected multiple lockfiles and selected the directory of /Users/ryusei/pnpm-lock.yaml as the root directory.
 To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
   See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory for more information.
 Detected additional lockfiles: 
   * /Users/ryusei/Mywork/sukima-hands-on/sukima-hands-on/package-lock.json


ここでざっとみた感じはプロジェクトのファイルがルートにないんかなって思ったのと、さっきフォルダを移動したのかのどっちかが原因かなって思いました。

結局, Turbopackが間違えて
/Users/ryusei/pnpm-lock.yaml
これをみてしまったようでした。

実際は下の設定ファイルを参照しなければいけないのに上記のファイルを参照してました。

/Users/ryusei/Mywork/sukima-hands-on/sukima-hands-on/package-lock.json

pnpmは全然関係なく、前にAIが勝手にルートディレクトリでファイルを作成したときに消し忘れていたものだと思うので、削除しておきました。



後ここでTurbopackがバンドラーというものだとういうことを初めて知りました。

バンドラーっていうのは複数の私たちが書いたファイル群を一つのファイルに圧縮、機会が読めるようにするためのものです。

この設定ファイルが正確にバンドルしてくれないと機械もプロジェクトを読み込めなくなってしまうので大きなミスですね。