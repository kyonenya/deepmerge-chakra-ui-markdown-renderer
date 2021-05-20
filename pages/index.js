import Head from 'next/head'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const markdown = `## Heading
  paragraph`;

  return (
    <ReactMarkdown
      components={ChakraUIRenderer()}
      children={markdown}
    />
  )
}
