import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../../elements/SectionHeading';
import { primary } from '../../utils/colors';

const CringeFace = () => (
  <span role="img" aria-label="cringe face">
    😬
  </span>
);

const About = () => {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <SectionHeading>About</SectionHeading>
      <Paragraph>
        Model People is a home recording project by Ryan Walker. Hello, I'm
        going to talk in the first person now. These are songs (right now, song)
        that I have been sitting on for a while. These songs will probably never
        be more than home demos that I like and am open to sharing with other
        people. It's also given me a reason to put them up on this really nice
        webpage that I made from scratch. I have been doing that more often and
        have more examples of that work on{' '}
        <Link href="http://ryanwalker.dev" _target="blank">
          this other webpage
        </Link>
        .
      </Paragraph>
      <Paragraph>
        Most of these songs are short and a little rough, but that's what I kind
        of like about them. They are simple thoughts written down, sung, and
        played with an electric guitar. I like the sounds I was able to make
        with just a minimal setup. An amp, one USB mic, a guitar, and a bass
        were all that I used. Sometime I didn't even use a real bass.
        <CringeFace /> I recorded in Logic and programmed drums, synths, and
        sometimes bass <CringeFace />
        through the interface. And that's the secret. Bookmark this blog post if
        you really want to make bad recordings.
      </Paragraph>
      <Paragraph>
        Please also check out these other project I play in:
      </Paragraph>
      <div>
        <div>
          <Link href="http://ryanwalker.dev" _target="blank">
            The Lighthouse and the Whaler
          </Link>{' '}
        </div>
        <div>
          <Link href="http://ryanwalker.dev" _target="blank">
            Poro
          </Link>{' '}
        </div>
        <div>
          <Link href="http://ryanwalker.dev" _target="blank">
            Sam Goodwill
          </Link>{' '}
        </div>
      </div>
    </section>
  );
};

const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

const Link = styled.a`
  color: ${primary};
  transition: all 0.2s;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default About;
