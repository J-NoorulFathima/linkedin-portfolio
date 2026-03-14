export default function Home() {
  return (
    <main style={{
      minHeight:"100vh",
      background:"linear-gradient(to bottom,#000,#0a0f1f,#000)",
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      fontFamily:"Arial"
    }}>

      <h1 style={{fontSize:"60px"}}>LinkedIn Growth Portfolio</h1>

      <p style={{color:"#aaa",marginTop:"10px"}}>
        LinkedIn Optimization • Poster Design • AI Videos • Video Editing
      </p>

      <div style={{marginTop:"30px",display:"flex",gap:"20px"}}>

        <button style={{
          padding:"14px 28px",
          background:"#2563eb",
          border:"none",
          borderRadius:"10px",
          color:"white",
          cursor:"pointer"
        }}>
          View Work
        </button>

        <button style={{
          padding:"14px 28px",
          border:"1px solid #2563eb",
          borderRadius:"10px",
          background:"transparent",
          color:"#60a5fa",
          cursor:"pointer"
        }}>
          Hire Me
        </button>

      </div>

    </main>
  );
}
