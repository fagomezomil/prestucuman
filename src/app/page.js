'use client';
import Inicio from "./_components/Inicio";
import Planifica from "./_components/Planifica";
import SmoothView from "./_components/SmoothView";
import BannerVideo from "./_components/BannerVideo";


export default function Home() {
  return (
    <>
    <SmoothView>
      <Inicio />
      <BannerVideo />
      <Planifica />
    </SmoothView>
    </>
  );
}
