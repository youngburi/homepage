/* 
pos1: 20
pos2: 50
pos3: 110
rad: 30
*/
export const animatedColorGradient1 = (
  position1: number,
  position2: number,
  position3: number,
  radius: number
) => `
radial-gradient(circle at -${position1}% 80%, rgba(255, 255, 250, 0.5), transparent 38%),
radial-gradient(circle at 80% ${position3}%, rgba(240, 180, 227, 0.5), transparent ${radius}%),
linear-gradient(${radius}deg, transparent 80%, rgba(230, 150, 200, 0.3)), 
radial-gradient(ellipse at -${position1}% ${position1}%, rgba(255, 105, 227, 0.4), transparent 25%),
radial-gradient(circle at 90% ${position1}%, rgba(80, 100, 100, 0.3), transparent ${Math.max(
  50,
  radius
)}%),
radial-gradient(circle at 40% -${position1}%, rgba(216, 235, 52, 0.4), transparent ${radius}%),
radial-gradient(circle at 25% 120%, rgba(216, 235, 52, 0.2), transparent ${radius}%),
radial-gradient(circle at 60% 70%, rgba(230, 230, 230, 0.2), transparent ${radius}%),
radial-gradient(circle at -${position2}% 100%, rgba(20, 60, 60, 0.8), transparent 70%),
radial-gradient(circle at ${position3}% ${position2}%, rgba(20, 60, 60, 0.2), transparent 50%),
linear-gradient(90deg, rgba(131,58,180,0.3) 0%, rgba(253,29,29,0.2) 50%, rgba(252,176,69,0.2) 100%),
linear-gradient(0deg, rgba(255, 30, 40, 0.2), rgba(255, 255, 255, 0.8)), 
linear-gradient(90deg, rgba(20, 255, 200, 0.5), rgba(100, 50, 100, 0.5)),
radial-gradient(circle at 100% ${position3}%, transparent, transparent 55%, rgba(255,255,255, 0.4) 65%, transparent 70%),
radial-gradient(ellipse at -110% ${position3}%, transparent, transparent 55%, rgba(255,255,255, 0.4) 65%, transparent 68%),
radial-gradient(circle, rgba(238,174,202,0.5) 0%, rgba(148,187,233,0.6) 100%)
`;

export const colorGradient1 = `
radial-gradient(circle at 90% 20%, rgba(0, 50, 80, 0.3), transparent 28%),
radial-gradient(circle at -20% 80%, rgba(255, 255, 250, 0.5), transparent 28%),
radial-gradient(circle at 80% 110%, rgba(240, 180, 227, 0.5), transparent 20%),
radial-gradient(ellipse at -20% 20%, rgba(255, 105, 227, 0.4), transparent 25%),
radial-gradient(circle at 40% -20%, rgba(216, 235, 52, 0.4), transparent 30%),
radial-gradient(circle at 25% 120%, rgba(216, 235, 52, 0.2), transparent 30%),
radial-gradient(circle at 60% 70%, rgba(230, 230, 230, 0.2), transparent 30%),
radial-gradient(circle at -50% 100%, rgba(20, 60, 60, 0.8), transparent 70%),
radial-gradient(circle at 110% 50%, rgba(20, 60, 60, 0.2), transparent 50%),
linear-gradient(90deg, rgba(131,58,180,0.3) 0%, rgba(253,29,29,0.2) 50%, rgba(252,176,69,0.2) 100%),
linear-gradient(0deg, rgba(255, 30, 40, 0.2), rgba(255, 255, 255, 0.8)), 
linear-gradient(90deg, rgba(20, 255, 200, 0.5), rgba(100, 50, 100, 0.5)),
radial-gradient(circle at 100% 100%, transparent, transparent 55%, rgba(255,255,255, 0.4) 65%, transparent 70%),
radial-gradient(ellipse at -110% 110%, transparent, transparent 55%, rgba(255,255,255, 0.4) 65%, transparent 68%),
radial-gradient(circle, rgba(238,174,202,0.5) 0%, rgba(148,187,233,0.6) 100%)
`;

export const dots = `
radial-gradient(circle at 35% 60%, rgba(0, 0, 0, 1) 2%, transparent 2.1%),
radial-gradient(circle at 85% 70%, rgba(0, 0, 0, 1) 3%, transparent 3.1%),
radial-gradient(circle at 45% 35%, rgba(0, 0, 0, 1) 1%, transparent 1.1%),
radial-gradient(circle at 5% 90%, rgba(0, 0, 0, 1) 4%, transparent 4.1%),
radial-gradient(circle at 50% 95%, rgba(0, 0, 0, 1) 1.5%, transparent 1.6%),
radial-gradient(circle at 65% 10%, rgba(0, 0, 0, 1) 3%, transparent 3.1%),
radial-gradient(circle at 95% 5%, rgba(0, 0, 0, 1) 1%, transparent 1.1%),
radial-gradient(circle at 102% 40%, rgba(0, 0, 0, 1) 6%, transparent 6.1%),
radial-gradient(circle at 8% 45%, rgba(0, 0, 0, 1) 3%, transparent 3.1%)
`;
