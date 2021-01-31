import { Box } from "@chakra-ui/react";
import Link from "next/link";

const IndexPage = () => (
  <Box
    height="100vh"
    bg={`
    radial-gradient(circle at 40% -20%, rgba(216, 235, 52, 0.4), transparent 30%),
    radial-gradient(circle at 25% 120%, rgba(216, 235, 52, 0.2), transparent 30%),
    radial-gradient(circle at 60% 70%, rgba(230, 230, 230, 0.2), transparent 30%),
    radial-gradient(circle at -50% 100%, rgba(20, 60, 60, 0.8), transparent 70%),
    radial-gradient(circle at 110% 50%, rgba(20, 60, 60, 0.2), transparent 50%),
    linear-gradient(
      90deg, 
      rgba(131,58,180,0.3) 0%, 
      rgba(253,29,29,0.2) 50%, 
      rgba(252,176,69,0.2) 100%
      ),
      linear-gradient(0deg, rgba(255, 30, 40, 0.2), rgba(255, 255, 255, 0.8)), 
      linear-gradient(90deg, rgba(20, 255, 200, 0.5), rgba(100, 50, 100, 0.5)),
      radial-gradient(circle, rgba(238,174,202,0.5) 0%, rgba(148,187,233,0.6) 100%)
  `}
    // css={css`blur(1px);`}
  >
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Box>
);

export default IndexPage;
