"use client";

import { useState, useCallback, useRef } from "react";
import styles from "./Activity.module.css";

const TOTAL = 9;
const GRID = 3;

interface DragState {
  id: number;
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
}

function shuffle(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function bgPos(id: number) {
  const col = id % GRID;
  const row = Math.floor(id / GRID);
  return {
    backgroundImage: "url(/images/rompecabezas.jpg)",
    backgroundSize: "300%",
    backgroundPosition: `${col * 50}% ${row * 50}%`,
  };
}

export default function Activity() {
  const [bank, setBank] = useState<number[]>(() => shuffle(Array.from({ length: TOTAL }, (_, i) => i)));
  const [grid, setGrid] = useState<(number | null)[]>(Array(TOTAL).fill(null));
  const [drag, setDrag] = useState<DragState | null>(null);
  const [clonePos, setClonePos] = useState({ x: 0, y: 0 });
  const gridRef = useRef<HTMLDivElement>(null);
  const allDone = grid.every((p) => p !== null);

  const handlePointerDown = useCallback((e: React.PointerEvent, id: number) => {
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    const rect = el.getBoundingClientRect();
    setDrag({
      id,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    });
    setClonePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!drag) return;
    e.preventDefault();
    setClonePos({ x: e.clientX, y: e.clientY });
  }, [drag]);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!drag) return;

      const slots = gridRef.current?.querySelectorAll<HTMLElement>("[data-slot]");
      let targetSlot: number | null = null;
      if (slots) {
        for (const slot of slots) {
          const r = slot.getBoundingClientRect();
          if (
            e.clientX >= r.left &&
            e.clientX <= r.right &&
            e.clientY >= r.top &&
            e.clientY <= r.bottom
          ) {
            targetSlot = Number(slot.dataset.slot);
            break;
          }
        }
      }

      if (targetSlot !== null && grid[targetSlot] === null && drag.id === targetSlot) {
        setGrid((prev) => {
          const next = [...prev];
          next[targetSlot!] = drag.id;
          return next;
        });
        setBank((prev) => prev.filter((p) => p !== drag.id));
      }

      setDrag(null);
    },
    [drag, grid]
  );

  const handleReset = useCallback(() => {
    const ids = Array.from({ length: TOTAL }, (_, i) => i);
    setBank(shuffle(ids));
    setGrid(Array(TOTAL).fill(null));
    setDrag(null);
  }, []);

  return (
    <section className={styles.section} id="activity">
      <div className={styles.container}>
        <h2 className={styles.title}>Actividad Interactiva: ¡Arma el Rompecabezas!</h2>
        <p className={styles.subtitle}>
          Arrastra las piezas a su lugar para descubrir el mundo Dibujarte.
        </p>

        <div className={styles.puzzleGrid} ref={gridRef} style={{ pointerEvents: drag ? "none" : "auto" }}>
          {Array.from({ length: TOTAL }, (_, i) => i).map((slotId) => {
            const pieceId = grid[slotId];
            return (
              <div
                key={slotId}
                className={`${styles.slot} ${pieceId !== null ? styles.slotFilled : ""}`}
                data-slot={slotId}
              >
                {pieceId !== null && (
                  <div className={styles.placedPiece} style={bgPos(pieceId)} />
                )}
              </div>
            );
          })}
        </div>

        <div
          className={styles.bank}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => setDrag(null)}
        >
          {bank.map((id) => (
            <div
              key={id}
              className={styles.bankPiece}
              style={bgPos(id)}
              onPointerDown={(e) => handlePointerDown(e, id)}
            />
          ))}
        </div>

        {drag && (
          <div
            className={styles.clone}
            style={{
              ...bgPos(drag.id),
              left: clonePos.x - drag.offsetX,
              top: clonePos.y - drag.offsetY,
            }}
          />
        )}

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
