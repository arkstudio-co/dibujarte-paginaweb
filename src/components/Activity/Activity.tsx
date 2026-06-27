"use client";

import { useState, useCallback, useRef, useId } from "react";
import styles from "./Activity.module.css";

const TOTAL = 9;
const GRID = 3;

const PIECE_PATHS = [
  "M 0 0 L 100 0 L 100 42 A 8 8 0 0 1 100 58 L 100 100 L 58 100 A 8 8 0 0 1 42 100 L 0 100 Z",
  "M 0 0 L 42 0 A 8 8 0 0 0 58 0 L 100 0 L 100 42 A 8 8 0 0 1 100 58 L 100 100 L 58 100 A 8 8 0 0 0 42 100 L 0 100 L 0 58 A 8 8 0 0 0 0 42 Z",
  "M 0 0 L 42 0 A 8 8 0 0 0 58 0 L 100 0 L 100 100 L 58 100 A 8 8 0 0 1 42 100 L 0 100 L 0 58 A 8 8 0 0 0 0 42 Z",
  "M 0 0 L 42 0 A 8 8 0 0 0 58 0 L 100 0 L 100 42 A 8 8 0 0 1 100 58 L 100 100 L 58 100 A 8 8 0 0 1 42 100 L 0 100 Z",
  "M 0 0 L 42 0 A 8 8 0 0 1 58 0 L 100 0 L 100 42 A 8 8 0 0 0 100 58 L 100 100 L 58 100 A 8 8 0 0 0 42 100 L 0 100 L 0 58 A 8 8 0 0 0 0 42 Z",
  "M 0 0 L 42 0 A 8 8 0 0 0 58 0 L 100 0 L 100 100 L 58 100 A 8 8 0 0 0 42 100 L 0 100 L 0 58 A 8 8 0 0 1 0 42 Z",
  "M 0 0 L 42 0 A 8 8 0 0 0 58 0 L 100 0 L 100 42 A 8 8 0 0 1 100 58 L 100 100 L 0 100 Z",
  "M 0 0 L 42 0 A 8 8 0 0 1 58 0 L 100 0 L 100 42 A 8 8 0 0 0 100 58 L 100 100 L 0 100 L 0 58 A 8 8 0 0 0 0 42 Z",
  "M 0 0 L 42 0 A 8 8 0 0 1 58 0 L 100 0 L 100 100 L 0 100 L 0 58 A 8 8 0 0 1 0 42 Z",
];

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

function PuzzlePiece({ id, className }: { id: number; className?: string }) {
  const uid = useId();
  const clipId = `clip-${uid}`;
  const col = id % GRID;
  const row = Math.floor(id / GRID);

  return (
    <svg viewBox="-8 -8 116 116" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <clipPath id={clipId}>
          <path d={PIECE_PATHS[id]} />
        </clipPath>
      </defs>
      <image
        href="/images/rompecabezas.jpg"
        x={-col * 100 - 8}
        y={-row * 100 - 8}
        width={316}
        height={316}
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid slice"
      />
      <path d={PIECE_PATHS[id]} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
    </svg>
  );
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
        <h2 className={styles.title}>¡Arma el Rompecabezas!</h2>
        <p className={styles.subtitle}>
          Arrastra las piezas a su lugar para descubrir el mundo Dibujarte.
        </p>

        <div className={styles.puzzleGrid} ref={gridRef} style={{ pointerEvents: drag ? "none" : "auto" }}>
          {/* slot backgrounds */}
          {Array.from({ length: TOTAL }, (_, i) => i).map((slotId) => {
            const col = slotId % GRID;
            const row = Math.floor(slotId / GRID);
            const isFilled = grid[slotId] !== null;
            return (
              <div
                key={slotId}
                className={`${styles.slot} ${isFilled ? styles.slotFilled : ""}`}
                data-slot={slotId}
                style={{
                  left: `${col * 33.3333}%`,
                  top: `${row * 33.3333}%`,
                  width: "33.3333%",
                  height: "33.3333%",
                }}
              />
            );
          })}

          {/* placed pieces */}
          {Array.from({ length: TOTAL }, (_, i) => i).map((slotId) => {
            const pieceId = grid[slotId];
            if (pieceId === null) return null;
            const col = slotId % GRID;
            const row = Math.floor(slotId / GRID);
            return (
              <div
                key={`p-${slotId}`}
                className={styles.pieceWrapper}
                style={{
                  left: `${col * 33.3333}%`,
                  top: `${row * 33.3333}%`,
                  width: "33.3333%",
                  height: "33.3333%",
                  zIndex: 100 - (row * GRID + col),
                }}
              >
                <PuzzlePiece id={pieceId} className={styles.pieceSvg} />
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
              onPointerDown={(e) => handlePointerDown(e, id)}
            >
              <PuzzlePiece id={id} className={styles.pieceSvg} />
            </div>
          ))}
        </div>

        {drag && (
          <div
            className={styles.clone}
            style={{
              left: clonePos.x - drag.offsetX,
              top: clonePos.y - drag.offsetY,
            }}
          >
            <PuzzlePiece id={drag.id} className={styles.pieceSvg} />
          </div>
        )}

        {allDone && (
          <p className={styles.celebration}>
            ¡Excelente! Sigue explorando el mundo Dibujarte
          </p>
        )}

        <button className={styles.resetBtn} onClick={handleReset}>
          Reiniciar
        </button>
      </div>
    </section>
  );
}
