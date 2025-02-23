'use client';
import Image from "next/image";
import Inicio from "./_components/Inicio";
import Planifica from "./_components/Planifica";
import SmoothView from "./_components/SmoothView";

export default function Home() {
  return (
    <SmoothView>
      <Inicio />
      <Planifica />
    </SmoothView>
  );
}
