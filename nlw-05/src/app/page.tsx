"use client";
import { Header } from "@/components/Header";
import { Player } from '../components/Player/index';
import styles from '../styles/app.module.scss';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []); 

  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <h1>Index</h1>
      </main>
      <Player />
    </div>
  );
}