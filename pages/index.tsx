import Head from 'next/head';
import tw from 'tailwind-styled-components';

const Page = tw.div`
  flex flex-col items-center justify-center
  min-h-screen
  py-2
`;

const Main = tw.main`
  flex flex-col items-center justify-center flex-1
  px-20
  text-center
`;

const Footer = tw.footer`
  flex items-center justify-center
  w-full h-24
  border-t
`;

const Title = tw.h1`
  text-6xl font-bold
`;

const Subtitle = tw.p`
  mt-3 text-2xl
`;

const Link = tw.a`
  text-blue-600
`;

const Code = tw.code`
  p-3 font-mono text-lg bg-gray-100 rounded-md
`;

const CardsContainer = tw.div`
  flex flex-wrap items-center justify-center
  max-w-4xl mt-6 sm:w-full
`;

const LinkCard = tw.a`
  p-6 m-3 text-left border w-96 rounded-xl
  hover:text-blue-600 hover:shadow-xl
  focus:text-blue-600
  transition
`;

const LinkCardTitle = tw.h3`
  text-2xl font-bold
`;

const LinkCardDescription = tw.p`
  mt-4 text-xl
`;

export default function Home() {
  return (
    <Page>
      <Head>
        <title>NextStarter | Kraftend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </Title>

        <Subtitle>
          Get started by editing <Code>pages/index.js</Code>
        </Subtitle>

        <CardsContainer>
          <LinkCard href="https://nextjs.org/docs">
            <LinkCardTitle>Documentation &rarr;</LinkCardTitle>
            <LinkCardDescription>Find in-depth information about Next.js features and API.</LinkCardDescription>
          </LinkCard>

          <LinkCard href="https://nextjs.org/learn">
            <LinkCardTitle>Learn &rarr;</LinkCardTitle>
            <LinkCardDescription>Learn about Next.js in an interactive course with quizzes!</LinkCardDescription>
          </LinkCard>

          <LinkCard href="https://github.com/vercel/next.js/tree/master/examples">
            <LinkCardTitle>Examples &rarr;</LinkCardTitle>
            <LinkCardDescription>Discover and deploy boilerplate example Next.js projects.</LinkCardDescription>
          </LinkCard>

          <LinkCard href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <LinkCardTitle>Deploy &rarr;</LinkCardTitle>
            <LinkCardDescription>Instantly deploy your Next.js site to a public URL with Vercel.</LinkCardDescription>
          </LinkCard>
        </CardsContainer>
      </Main>

      <Footer>
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </Footer>
    </Page>
  );
}
