import "./AskHost.css";

function AskHost() {
  return (
    <section className="ask-host">
        <div className="ask-host-container">
            <img src="https://plus.unsplash.com/premium_photo-1680303134459-912abf8efe2f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ask a Host" className="ask-host-image" />
            
            <div className="ask-host-content">
                <h2>Questions about hosting?</h2>

                <button className="ask-btn">Ask a Superhost</button>
            </div>
        </div>
    </section>
  );
}
            
export default AskHost;