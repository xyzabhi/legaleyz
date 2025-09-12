export default function GlossyBadge() {
    return (
        <>
            <style>{`
          .glossy-badge {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 9999px;
  background: #10b981; /* emerald green */
  color: #fff;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  letter-spacing: 0.01em;
  transition: background 0.2s;
}
.glossy-badge::after {
  content: '';
  position: absolute;
  top: -60%;
  left: -120%;
  width: 90%;
  height: 220%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255,255,255,0.7) 50%,
    transparent 100%
  );
  filter: blur(1.2px) brightness(1.1);
  transform: rotate(25deg);
  animation: flashMove 3s cubic-bezier(0.77,0,0.18,1) infinite;
  pointer-events: none;
}
@keyframes flashMove {
  0% {
    transform: translateX(-180%) rotate(25deg);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translateX(160%) rotate(25deg);
    opacity: 0.7;
  }
  80% {
    opacity: 0.7;
  }
  100% {  
    transform: translateX(250%) rotate(25deg);
    opacity: 0;
  }
}
        `}</style>

            <span className="glossy-badge">
                Save 20%
            </span>
        </>
    );
}
