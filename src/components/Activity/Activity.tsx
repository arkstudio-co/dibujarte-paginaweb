"use client";

import { useState, useCallback, useRef } from "react";
import styles from "./Activity.module.css";

const TOTAL_PIECES = 9;

function createSparkle(x: number, y: number) {
  const sparkle = document.createElement("div");
  sparkle.className = styles.sparkle;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
}

export default function Activity() {
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [pieces, setPieces] = useState<number[]>(() => {
    const arr = Array.from({ length: TOTAL_PIECES }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const dragId = useRef<number | null>(null);
  const allDone = completed.size === TOTAL_PIECES;

  const handleDragStart = useCallback((e: React.DragEvent, id: number) => {
    e.dataTransfer.setData("text/plain", String(id));
    dragId.current = id;
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).classList.add(styles.slotActive);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    (e.currentTarget as HTMLElement).classList.remove(styles.slotActive);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, slotId: number) => {
      e.preventDefault();
      const el = e.currentTarget as HTMLElement;
      el.classList.remove(styles.slotActive);

      const pieceId = Number(e.dataTransfer.getData("text/plain"));
      if (pieceId !== slotId || completed.has(pieceId)) return;

      setCompleted((prev) => {
        const next = new Set(prev);
        next.add(pieceId);
        return next;
      });

      createSparkle(e.pageX, e.pageY);
    },
    [completed]
  );

  const handleReset = useCallback(() => {
    setCompleted(new Set());
    const arr = Array.from({ length: TOTAL_PIECES }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setPieces(arr);
  }, []);

  return (
    <section className={styles.section} id="activity">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Actividad Interactiva: ¡Arma el Rompecabezas!
        </h2>
        <p className={styles.subtitle}>
          Arrastra las piezas a su lugar para descubrir el mundo Dibujarte.
        </p>

        <div className={styles.puzzleGrid}>
          {Array.from({ length: TOTAL_PIECES }, (_, i) => i + 1).map((slotId) => (
            <div
              key={slotId}
              className={`${styles.slot} ${completed.has(slotId) ? styles.slotFilled : ""}`}
              data-slot={slotId}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, slotId)}
            >
              {completed.has(slotId) && (
                <div className={styles.placedPiece}>{slotId}</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.piecesBank}>
          {pieces
            .filter((id) => !completed.has(id))
            .map((id) => (
              <div
                key={id}
                className={styles.draggablePiece}
                draggable
                onDragStart={(e) => handleDragStart(e, id)}
                data-id={id}
              >
                {id}
              </div>
            ))}
        </div>

        {allDone && (
          <p className={styles.celebration}>
            ¡Excelente trabajo! Sigue explorando el mundo Dibujarte.
          </p>
        )}

        <button className={styles.resetBtn} onClick={handleReset}>
          Reiniciar
        </button>
      </div>
    </section>
  );
}
