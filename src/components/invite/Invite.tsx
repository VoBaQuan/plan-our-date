import LiquidBackground from "../common/LiquidBackground";
import Navbar from "../common/Navbar";

function Invite() {
    return (
        <div>
            <LiquidBackground></LiquidBackground>
            <Navbar></Navbar>

            {/* invite content */}
            <main>
                <div className="wizard-container" id="wizard-container">
                    {/* <!-- Step 1: Invitation Question and Response --> */}
                    <div className="step" id="step-1">
                        <p><strong id="invite-question">Do you love me?</strong></p>
                        <div id="response-buttons">
                            <button id="yes-button" className="modern-btn">Yes</button>
                            <button id="no-button" className="modern-btn runaway-btn">No</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Invite