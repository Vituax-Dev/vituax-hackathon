"use client";

import { useEffect } from "react";
import { Header } from "../Home/Header";

export const EspPage = () => {
  useEffect(() => {
    window.alert("Fatal error");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        background:
          "linear-gradient(90deg, var(--white) 45.72%, var(--whiteBlue) 79.36%)",
      }}
    >
      <Header lan="es" />
      {/* Elementos propositalmente quebrados */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "2px dashed green",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            color: "magenta",
            transform: "rotate(5deg)",
            marginBottom: "15px",
          }}
        >
          Ocorreu um erro inesperado nessa página
        </p>
        <img
          src="/caminho/inexistente.jpg"
          alt="Imagem"
          style={{ width: "200px", height: "auto", marginBottom: "15px" }}
        />
        <a
          style={{
            color: "blue",
            textDecoration: "underline",
            display: "block",
            marginBottom: "15px",
          }}
        >
          Link
        </a>
        <div style={{ marginTop: "10px", animation: "shake 0.5s infinite" }}>
          <span style={{ color: "red", fontWeight: "bold" }}>
            ERROR ERROR ERROR ERROR ERROR ERROR
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translate(1px, 1px) rotate(0deg);
          }
          10% {
            transform: translate(-1px, -2px) rotate(-1deg);
          }
          20% {
            transform: translate(-3px, 0px) rotate(1deg);
          }
          30% {
            transform: translate(3px, 2px) rotate(0deg);
          }
          40% {
            transform: translate(1px, -1px) rotate(1deg);
          }
          50% {
            transform: translate(-1px, 2px) rotate(-1deg);
          }
          60% {
            transform: translate(-3px, 1px) rotate(0deg);
          }
          70% {
            transform: translate(3px, 1px) rotate(-1deg);
          }
          80% {
            transform: translate(-1px, -1px) rotate(1deg);
          }
          90% {
            transform: translate(1px, 2px) rotate(0deg);
          }
          100% {
            transform: translate(1px, -2px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};
