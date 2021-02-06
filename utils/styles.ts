import { keyframes } from "@chakra-ui/react";

export const backgroundAnimation = keyframes`
0% {
  backdrop-filter: blur(15px) saturate(10.8) brightness(1) hue-rotate(0deg);
  background-position:0% 0%
}

10% {
  backdrop-filter: blur(15px) saturate(10) brightness(1.1) hue-rotate(30deg);
  background-position:87% 100%;
}

22.5% {
  backdrop-filter: blur(15px) saturate(8) brightness(1.3) hue-rotate(170deg);
  background-position:87% 100%
}

33% {
  backdrop-filter: blur(15px) saturate(6) brightness(1) hue-rotate(50deg);
  background-position:87% 100%
}

50% {
  backdrop-filter: blur(15px) saturate(10.8) brightness(1) hue-rotate(360deg);
}

66% {
  backdrop-filter: blur(15px) saturate(10) brightness(1.2) hue-rotate(345deg);
}

90% {
  backdrop-filter: blur(15px) saturate(8) brightness(0.9) hue-rotate(330deg);
}

100% {
  backdrop-filter: blur(15px) saturate(10.8) brightness(1) hue-rotate(360deg);
}
`;

export const gradientBackground = `
radial-gradient(circle at 25% 120%, rgba(216, 235, 52, 0.2), transparent 53.79999999999632%),
radial-gradient(circle at 60% 70%, rgba(230, 230, 230, 0.2), transparent 53.79999999999632%),
radial-gradient(circle at -100.40000000000072% 100%, rgba(20, 60, 60, 0.8), transparent 70%),
radial-gradient(circle at 34.400000000000716% 100.40000000000072%, rgba(20, 60, 60, 0.2), transparent 50%),
linear-gradient(90deg, rgba(131,58,180,0.3) 0%, rgba(253,29,29,0.2) 50%, rgba(252,176,69,0.2) 100%),
linear-gradient(0deg, rgba(255, 30, 40, 0.2), rgba(255, 255, 255, 0.8)), 
linear-gradient(90deg, rgba(20, 255, 200, 0.5), rgba(100, 50, 100, 0.5)),
radial-gradient(circle at 100% 34.400000000000716%, transparent, transparent 55%, rgba(255,255,255, 0.4) 65%, transparent 70%),
radial-gradient(ellipse at -110% 34.400000000000716%, transparent, transparent 55%, rgba(255,255,255, 0.4) 65%, transparent 68%),
radial-gradient(circle, rgba(238,174,202,0.5) 0%, rgba(148,187,233,0.6) 100%)
`;
