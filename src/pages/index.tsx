import { ISkills } from "Types";
import styled from "styled-components";
import Typed from "react-typed";

import { Container } from "Atoms/Container";
import { SeoHead } from "Atoms/SeoHead";
import skills from "../data/skills";

interface IProps {
  skills: ISkills;
}

function Home({ skills }: IProps) {
  const { technologies, frameworks, interests } = skills;

  const talkAbout = [...technologies, ...frameworks, ...interests];

  return (
    <>
      <SeoHead
        title="Alin Ali Hassan - Software Engineer"
        description="Software Engineer with a focus on Cloud and Backend Development. I have more than 7 years experience working in different domains and technologies."
      />

      <Container>
        <Headline>
          Hey, I&apos;m
          <wbr /> Alin Ali Hassan <span>👋</span>
        </Headline>
        <p>
          I am a passionate Software Engineer, experienced in various domains,
          languages and frameworks, from building low-level, performance driven
          programming language like{" "}
          <a href="https://github.com/alinalihassan/Lesma">Lesma</a>, to working
          on full-stack React developer platforms for Lego. You can talk to me
          about{" "}
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={talkAbout}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
          .
        </p>
        <p>
          P.S. this website is open-source and available on{" "}
          <a
            href="https://github.com/alinalihassan/portfolio"
            title="Link to Github repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      skills,
    },
  };
}

const Headline = styled.h1`
  font-size: 2rem;

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 3rem;

    span {
      display: inline-block;
    }

    @keyframes wave {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(-10deg);
      }
      100% {
        transform: rotate(10deg);
      }
    }

    &:hover span {
      animation: wave 0.5s ease infinite;
    }
  }
`;

export default Home;
