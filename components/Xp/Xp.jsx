import Texto from "../Texto/Texto";

export default function Xp({ currentXP, maxXP }) {
    const percent = Math.max(0, Math.min(100, Math.round((currentXP / maxXP) * 100)));

    return (
        <div className="progress" style={{ height: "30px", width: "100%", backgroundColor: "var(--green)", borderRadius: 6, overflow: "hidden" }}>
            <div
                className="progress-bar"
                role="progressbar"
                style={{
                    width: `${percent}%`,
                    background: "#3ccf66",
                    transition: "width 300ms ease"
                }}
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <Texto texto={`XP: ${currentXP}/${maxXP}`} estilo={{color: "black"}} />
            </div>
        </div>
    )
}