import { FractalDotGrid } from "@/components/fractal-dot-grid"

export default function Home() {
  return (
    <div className="h-screen w-screen relative">
      <FractalDotGrid
        dotSize={4}
        dotSpacing={20}
        dotOpacity={0.3}
        waveIntensity={30}
        waveRadius={200}
        dotColor="rgba(100, 100, 255, 1)"
        glowColor="rgba(100, 100, 255, 1)"
        enableNoise={true}
        noiseOpacity={0.03}
        enableMouseGlow={true}
        initialPerformance="medium"
      />
    </div>
  );
}
